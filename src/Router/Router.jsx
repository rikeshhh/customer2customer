import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LandingPage from "../Pages/LandingPage/LandingPage";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AuthDetails from "../Pages/AuthDetail/AuthDetails";
import SellerData from "../Pages/Buyer/SellerData";
import ProdDetail from "../Pages/ProductDetail/ProdDetail";
import Seller from "../SellerPages/Seller/Seller";
import Checkout from "../Pages/Checkout/Checkout";
import SellerProduct from "../SellerPages/SellerProduct";

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
        path: "/sellerProduct",
        element: <SellerProduct />,
      },
      {
        path: "/authDetail",
        element: <AuthDetails />,
      },
      {
        path: "/sellerPage",
        element: <Seller />,
      },
      {
        path: "/sellerData",
        element: <SellerData />,
      },
      {
        path: "/prodData",
        element: <ProdDetail />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
