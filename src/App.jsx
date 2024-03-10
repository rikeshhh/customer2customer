import React from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import AuthDetails from "./Pages/AuthDetail/AuthDetails";
import Header from "./Pages/Header/Header";
import { useThemeContext } from "./Context/ThemeContext";

function App() {
  const { theme } = useThemeContext();

  return (
    <div id={theme} className="layout">
      <header className="content-wrapper">
        <Header />
      </header>
      <main className="content-wrapper">
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
