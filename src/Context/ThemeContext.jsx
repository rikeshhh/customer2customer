import React, { createContext, useContext, useState } from "react";

// Create context for theme
const ThemeContextCreate = createContext(null);

// Provider component to manage theme state
export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light"); // State to store current theme

  // Function to toggle between light and dark theme
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContextCreate.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextCreate.Provider>
  );
};

// Custom hook to access theme context
export const useThemeContext = () => {
  return useContext(ThemeContextCreate);
};
