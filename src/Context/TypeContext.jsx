import React, { createContext, useContext, useState } from "react";

// Create context for theme
const TypeContextCreate = createContext(null);

// Provider component to manage theme state
export const TypeContextAccount = ({ children }) => {
  const [typeOfAccount, setTypeAccount] = useState("default");

  // Function to toggle between light and dark theme

  return (
    <TypeContextCreate.Provider value={{ typeOfAccount, setTypeAccount }}>
      {children}
    </TypeContextCreate.Provider>
  );
};

// Custom hook to access theme context
export const useTypeContext = () => {
  return useContext(TypeContextCreate);
};
