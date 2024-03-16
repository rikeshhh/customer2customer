import React, { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import SellerData from "../Buyer/SellerData";
import Signup from "../Signup/Signup";
import { PageContent } from "./PageContent";
import ImageCarrousel from "./ImageCarrousel";
import { TextCarrousel } from "./TextCarrousel";
import {
  FaAmazon,
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Work from "../Work/Work";
import Services from "../Service/Services";
import { CustomView } from "../Customer/CustomView";
import { LandingCart } from "../LandingCart/LandingCart";
import Category from "../Categories/Category";
import LandingHeader from "../LandingCart/LandingHeader";

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
    <>
      <section className="LandingPage relative ">
        <div className="flex justify-center items-center relative max-sm:hidden">
          <div className="w-full absolute transition -left-80 -top-30 -z-10 animate-circleFive delay-75">
            <div className="circle ">
              {/* <iframe
                width="560"
                height="315"
                className="object-cover rounded-full w-full"
                src="https://www.youtube.com/embed/uR3aQOgzyDU?si=h6BW-xiWnLELdFIn"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe> */}
            </div>
          </div>

          <div className="w-full transition absolute left-32 top-40 -z-10 flex animate-circleOne justify-center items-center gap-12 delay-10">
            <div className="circleTwo"></div>
            <div className="circleThree "></div>
          </div>
          <div className="w-full transition  animate-circleOne absolute right-0 top-40 -z-10 flex justify-end items-start gap-12 delay-150">
            <div className="circleFour  "></div>
          </div>
          <div className="w-full transition  absolute animate-circleFive delay-150 -right-10 top-20 -z-10 flex justify-end items-start gap-12">
            <div className="circleFive"></div>
          </div>
        </div>
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
          <div className="flex justify-center flex-col gap-6 h-screen z-50">
            {/* Image carousel */}
            {/* <figure className="relative w-full  h-96 overflow-hidden">
            Apply transition class based on state
            <img
              src={PageContent[currentIndex].image}
              alt=""
              className={` top-0 left-0 w-full  object-contain ${
                isTransitioning ? "opacity-0 transition-opacity" : "opacity-100"
              }`}
            />
          </figure> */}

            {/* Main content */}
            <div className=" flex flex-col justify-center items-center gap-12 max-sm:gap-0 max-sm:text-center ">
              <h1 className="text-4xl font-semibold max-sm:xl">
                Focus on{" "}
                <span className="text-[#F64C72]">
                  {PageContent[currentIndex].header}
                </span>
                ,
              </h1>
              <h2 className="text-8xl font-semibold max-sm:xl">
                We'll do the rest
              </h2>
              <p className="text-lg">{PageContent[currentIndex].paragraph} </p>

              {/* Button for sign-in/up */}
              <Button
                content={PageContent[currentIndex].buttonContent}
                className="bg-[#F64C72] text-primary-50 p-2 rounded-md w-96 max-sm:w-auto"
                handleClick={handleSignin}
              />
            </div>

            {/* Button to navigate to next slide */}
            {/* <button onClick={nextSlide}>
            <FaArrowRight />
          </button> */}
          </div>
        )}
        <div className="absolute bottom-80 flex flex-col gap-4 text-3xl text-[#F64C72] max-sm:hidden">
          <FaGithub />
          <FaInstagram />
          <FaLinkedin />
          <FaAmazon />
        </div>
      </section>
      <section className="landingCart">
        <LandingHeader />
      </section>
      <section className="Category">
        <Category />
      </section>
      <section className="GetStarted ">
        <Work />
      </section>
      <section className="Services">
        <Services />
      </section>
      <section className="WhatCustomerSay">
        <CustomView />
      </section>
    </>
  );
};

export default LandingPage;
