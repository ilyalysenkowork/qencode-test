import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
);
