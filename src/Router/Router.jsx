import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AuthDetails from "../Pages/AuthDetail/AuthDetails";
import SellerLandingpage from "../Seller/Seller Landing Page/SellerLandingpage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Signup />,
      },
      {
        path: "/authDetail",
        element: <AuthDetails />,
      },
      {
        path:'/sellerPage',
        element: <SellerLandingpage/>
      }
    ],
  },
]);
