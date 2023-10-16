import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "../pages/register";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";

export const Routerlist = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Register />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
