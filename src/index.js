import React from "react";
import ReactDOM from "react-dom/client";
import "../src/assets/css/index.css";
import { Routerlist } from "./routes/Routerlist";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const queryMovie = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryMovie}>
      <Routerlist />
    </QueryClientProvider>
    <ToastContainer />
  </React.StrictMode>
);
