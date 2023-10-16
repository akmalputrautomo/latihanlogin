import React, { useState } from "react";
import { toast } from "react-toastify";
import { useCreateUser } from "../services/register-user";

export const Register = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { mutate: Regis } = useCreateUser();
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    if (e) {
    }
    if (e.target.id === "name") {
      setname(e.target.value);
    }
    if (e.target.id === "email") {
      setemail(e.target.value);
    }
    if (e.target.id === "password") {
      setpassword(e.target.value);
    }
  };

  const showpass = () => {
    setShowPassword(!showPassword);
  };

  const registerUser = () => {
    if (!name || !email || !password) {
      toast.warning("isi cok");
    } else
      Regis({
        email: email,
        name: name,
        password: password,
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Register</h1>
      <div className="w-1/4">
        <input id="name" onChange={handleInput} type="text" placeholder="Username" className="w-full p-2 mb-2 border rounded"></input>
        <input id="email" onChange={handleInput} type="email" placeholder="Email" className="w-full p-2 mb-2 border rounded"></input>
        <div className="relative">
          <input id="password" onChange={handleInput} type={showPassword ? "text" : "password"} placeholder="Password" className="w-full p-2 mb-2 border rounded"></input>
          <span className="absolute right-3 top-3 cursor-pointer" onClick={showpass}>
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        <button
          className="w-full p-2 bg-red-500 text-white border rounded"
          onClick={() => {
            registerUser();
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};
