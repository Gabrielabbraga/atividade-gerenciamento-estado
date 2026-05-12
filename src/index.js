import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { TarefasProvider } from "./context/AtendimentoContext";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <TarefasProvider>
      <RouterProvider router={router} />
    </TarefasProvider>
  </React.StrictMode>
);