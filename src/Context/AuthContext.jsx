import React, { createContext, useContext, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

// Create context for authentication
const AuthContextCreate = createContext();

// Provider component to manage authentication state
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState([]); // State to store authenticated user
  // Function to handle user sign out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out was successful");
        setAuthUser(null); // Clear authenticated user
        // Assuming you have access to navigate from react-router-dom
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <AuthContextCreate.Provider
      value={{ authUser, handleSignOut, setAuthUser }}
    >
      {children}
    </AuthContextCreate.Provider>
  );
};

// Custom hook to access authentication context
export const useAuthContext = () => {
  return useContext(AuthContextCreate);
};
