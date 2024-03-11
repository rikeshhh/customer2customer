import React from "react";
import { useAuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import Login from "../Pages/Login/Login";
import { auth } from "../firebase/firebase";

const LoginSignupRoute = () => {
  const token = auth.currentUser;
  return token ? <Navigate to="/" /> : <Login />;
};

export default LoginSignupRoute;
