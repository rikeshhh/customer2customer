import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import SellerData from "../Buyer/SellerData";
import Signup from "../Signup/Signup";

const LandingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  // Check if state is not null before destructuring authUser
  const { authUser } = state || {};

  // Now you can safely access authUser
  console.log(authUser);

  const [openSignIn, setOpenSignin] = useState(false);
  const handleSignin = () => {
    navigate("/signUp");
  };
  return (
    <section className="LandingPage">
      {openSignIn ? (
        <Signup />
      ) : (
        <div className="flex justify-center items-center flex-col h-screen gap-6">
          <h1 className="text-4xl">
            Focus on <span className="text-primary-sky-blue">selling</span>,
          </h1>
          <h2 className="text-4xl">We'll do the rest</h2>
          <p className="text-lg">
            "Connect with Your Community: Buy, Sell, and Trade Locally!"
          </p>

          <Button
            content="Sign In"
            className="bg-primary-sky-blue text-primary-50 p-2 rounded-md "
            handleClick={handleSignin}
          />
        </div>
      )}
    </section>
  );
};

export default LandingPage;
