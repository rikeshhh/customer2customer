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
import About from "../Pages/About/About";
import Contact from "../Components/Contact/Contact";
import Work from "../Pages/Work/Work";
import Services from "../Pages/Service/Services";
import { LandingCart } from "../Pages/LandingCart/LandingCart";
import Category from "../Pages/Categories/Category";

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
        path: "/about",
        element: <About />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
        path: "/landingCart",
        element: <LandingCart />,
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
      {
        path: "/service",
        element: <Services />,
      },
    ],
  },
]);
