import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { navigate, useNavigate } from "react-router-dom";
import { useLoginUser } from "../services/login-user";
import GoogleLogin from "../assets/component/Googlelogin";

export const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { mutate: Login, isSuccess, data, error, isError, status } = useLoginUser();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setemail(e.target.value);
      }
      if (e.target.id === "password") {
        setpassword(e.target.value);
      }
    }
  };

  const showpass = () => {
    setShowPassword(!showPassword);
  };

  const LoginUser = () => {
    Login({
      email: email,
      password: password,
    });
  };

  useEffect(() => {
    if (data?.data.data.token) {
      toast.success("Anda berhasil login");
      navigate("/dashboard");
    }
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <div className="w-1/4">
        <input id="email" onChange={handleInput} type="email" placeholder="Email" className="w-full p-2 mb-2 border rounded"></input>
        <div className="relative">
          <input id="password" onChange={handleInput} type={showPassword ? "text" : "password"} placeholder="Password" className="w-full p-2 mb-2 border rounded"></input>
          <span className="absolute right-3 top-3 cursor-pointer" onClick={showpass}>
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        <button
          className="w-full p-2 rounded border bg-red-500 text-white"
          onClick={() => {
            LoginUser();
          }}
        >
          Login
        </button>
      </div>
      <GoogleLogin />
    </div>
  );
};
