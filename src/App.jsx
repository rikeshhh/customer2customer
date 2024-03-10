import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import AuthDetails from "./Pages/AuthDetail/AuthDetails";
import Header from "./Pages/Header/Header";
import { useThemeContext } from "./Context/ThemeContext";
import Preloader from "./Components/Preloader/Preloader";

function App() {
  // Retrieve theme from ThemeContext
  const { theme } = useThemeContext();

  // State to manage loading state
  const [loading, setLoading] = useState(true);

  // Simulate loading time with useEffect
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    // Apply theme class to the main layout
    <div id={theme} className="layout">
      {/* Conditionally render Preloader while loading */}
      {loading ? (
        <Preloader />
      ) : (
        // Render Header, main content, and footer after loading
        <>
          <header className="content-wrapper">
            <Header />
          </header>
          <main className="content-wrapper">
            <Outlet />
          </main>
          <footer></footer>
        </>
      )}
    </div>
  );
}

export default App;
