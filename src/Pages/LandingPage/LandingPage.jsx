import React, { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import SellerData from "../Buyer/SellerData";
import Signup from "../Signup/Signup";
import { PageContent } from "./PageContent";
import ImageCarrousel from "./ImageCarrousel";
import { TextCarrousel } from "./TextCarrousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// LandingPage component
const LandingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  // Check if state is not null before destructuring authUser
  const { authUser } = state || {};

  const [openSignIn, setOpenSignin] = useState(false);

  // Function to handle sign-in button click
  const handleSignin = () => {
    if (PageContent[currentIndex].buttonContent === "Sign In") {
      navigate("/signUp");
    } else if (PageContent[currentIndex].buttonContent === "Log in") {
      navigate("/login");
    } else {
      navigate("/sellerData");
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const contentLength = PageContent.length;
  const [isTransitioning, setIsTransitioning] = useState(false); // State to track transition

  // Function to navigate to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentLength);
  };

  // Function to navigate to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + contentLength) % contentLength
    );
  };

  useEffect(() => {
    // Set interval to change slides automatically
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000); // Change the interval time as needed (e.g., 3000 milliseconds = 3 seconds)

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [currentIndex]); // Run effect whenever imageIndex changes

  return (
    <section className="LandingPage ">
      <div class="snow-ball-container">
        {/* Snowball elements */}
        {[...Array(14)].map((_, index) => (
          <div class="snow-ball" key={index}></div>
        ))}
      </div>

      {/* Conditionally render sign-up component */}
      {openSignIn ? (
        <Signup />
      ) : (
        <div className="flex justify-center items-center  h-screen gap-6 ">
          {/* Button to navigate to previous slide */}
          <button onClick={prevSlide}>
            <FaArrowLeft />
          </button>

          {/* Main content */}
          <div className="w-1/2 flex flex-col justify-center gap-12">
            <h1 className="text-4xl">
              Focus on{" "}
              <span className="text-primary-sky-blue">
                {PageContent[currentIndex].header}
              </span>
              ,
            </h1>
            <h2 className="text-4xl">We'll do the rest</h2>
            <p className="text-lg">{PageContent[currentIndex].paragraph} </p>

            {/* Button for sign-in/up */}
            <Button
              content={PageContent[currentIndex].buttonContent}
              className="bg-primary-sky-blue text-primary-50 p-2 rounded-md "
              handleClick={handleSignin}
            />
          </div>

          {/* Image carousel */}
          <div className="relative w-1/2 h-3/4 overflow-hidden">
            {/* Apply transition class based on state */}
            <img
              src={PageContent[currentIndex].image}
              alt=""
              className={`absolute top-0 left-0 w-full h-3/4 object-contain ${
                isTransitioning ? "opacity-0 transition-opacity" : "opacity-100"
              }`}
            />
          </div>

          {/* Button to navigate to next slide */}
          <button onClick={nextSlide}>
            <FaArrowRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default LandingPage;
