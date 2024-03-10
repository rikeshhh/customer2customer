import React, { Children, createContext, useContext, useState } from "react";

const ThemeContextCreate = createContext(null);
export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContextCreate.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContextCreate.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContextCreate);
};
