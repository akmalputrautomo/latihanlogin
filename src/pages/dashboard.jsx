import React from "react";
import { CookieKeys, CookieStorage } from "../utils/cookies";
import { useGetDataUser } from "../services/get-user";

export const Dashboard = () => {
  useGetDataUser({});

  return (
    <div className="flex items-center justify-center flex-col h-screen ">
      <h1 className="text-2xl font-bold mb-4">DASHBOARD DERR</h1>
      <button
        className="py-2 px-4 bg-red-500 text-white rounded-md"
        onClick={() => {
          CookieStorage.remove(CookieKeys.AuthToken);
        }}
      >
        Logout
      </button>
    </div>
  );
};
