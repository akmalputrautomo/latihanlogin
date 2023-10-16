import { useMutation } from "@tanstack/react-query";

import { toast } from "react-toastify";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";
import { CookieKeys, CookieStorage } from "../utils/cookies";

const LoginUser = async (input) => {
  return await http
    .post(API_ENDPOINT.LOGIN_USER, input)
    .then((result) => {
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      console.log(result.data.data.token);
      return result;
    })
    .catch((err) => {
      if (err.response.data.message === "Wrong password") {
        toast.warning("Password atau Email Salah");
      } else if (err.response.data.message === "User is not found") {
        toast.warning("pengguna tidak di temukan");
      } else {
        toast.warning("Password atau Email Tidak di isi");
      }
    });
};

const useLoginUser = () => {
  return useMutation(LoginUser);
};
export { LoginUser, useLoginUser };
