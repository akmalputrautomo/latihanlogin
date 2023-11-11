import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "../pages/register";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { ReduxPage } from "../pages/reduxhandle/ReduxPage";
import { Latihanresponsive } from "../pages/latihanresponsive";

export const Routerlist = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Register />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/" element={<Latihanresponsive />} />
        {/* <Route path="/" element={<ReduxPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
