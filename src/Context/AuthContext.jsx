import React, { createContext, useContext, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContextCreate = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState([]); // State to store authenticated user

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out was successful");
        setAuthUser(null); // Clear authenticated user
        navigate("/"); // Assuming you have access to navigate from react-router-dom
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(authUser);
  return (
    <AuthContextCreate.Provider
      value={{ authUser, handleSignOut, setAuthUser }}
    >
      {children}
    </AuthContextCreate.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContextCreate);
};
