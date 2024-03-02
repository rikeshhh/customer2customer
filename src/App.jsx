import { Outlet } from "react-router-dom";
import "./App.css";
import AuthDetails from "./Pages/AuthDetail/AuthDetails";
import Header from "./Pages/Header/Header";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
  return (
    <>
      <Header />
      <body className="content-wrapper">
      <Outlet/>
      </body>
    </>
  );
}

export default App;
