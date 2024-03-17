import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router.jsx";
import { ContextCreateProvider } from "./Context/CartContext.jsx";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import { ThemeContext, useThemeContext } from "./Context/ThemeContext.jsx";
import { TypeContextAccount } from "./Context/TypeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContext>
      <AuthContextProvider>
        <ContextCreateProvider>
          <TypeContextAccount>
            <RouterProvider router={router} />
          </TypeContextAccount>
        </ContextCreateProvider>
      </AuthContextProvider>
    </ThemeContext>
  </React.StrictMode>
);
