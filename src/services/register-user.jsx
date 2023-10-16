import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const RegisterUser = async (input) => {
  try {
    await http.post(API_ENDPOINT.REGISTER_USER, input);
  } catch (error) {
    if (error.response.data.message === "User has already registered") {
      toast.warning("Email Telah digunakan");
    } else if (error.response.data.message === "Password must be stronger") {
      toast.warning("Password harus lebih kuat");
    }
  }
};

const useCreateUser = () => {
  return useMutation(RegisterUser);
};
export { RegisterUser, useCreateUser };
