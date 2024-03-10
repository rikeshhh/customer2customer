import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router.jsx";
import { ContextCreateProvider } from "./Context/CartContext.jsx";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import { ThemeContext, useThemeContext } from "./Context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContext>
      <AuthContextProvider>
        <ContextCreateProvider>
          <RouterProvider router={router} />
        </ContextCreateProvider>
      </AuthContextProvider>
    </ThemeContext>
  </React.StrictMode>
);
