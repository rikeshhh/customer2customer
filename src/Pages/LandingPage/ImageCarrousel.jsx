import React, { useEffect, useState } from "react";
import imageOne from "./Images/images1.jpg";
import imageTwo from "./Images/image2.jpg";
import imageThree from "./Images/image3jpg.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import LandingPage from "./LandingPage";
const ImageCarousel = () => {
  const images = [imageOne, imageTwo, imageThree];
  const [imageIndex, setImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); // State to track transition
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 1000); // Change the interval time as needed (e.g., 3000 milliseconds = 3 seconds)

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, [imageIndex]); // Run effect whenever imageIndex changes
  const nextImage = () => {
    setIsTransitioning(true); // Start transition
    setTimeout(() => {
      setImageIndex((imageIndex + 1) % images.length);
      setIsTransitioning(false); // End transition after a delay
    }, 2000); // Adjust the delay time as needed
  };

  const prevImage = () => {
    setIsTransitioning(true); // Start transition
    setTimeout(() => {
      setImageIndex((imageIndex - 1 + images.length) % images.length);
      setIsTransitioning(false); // End transition after a delay
    }, 300); // Adjust the delay time as needed
  };

  return (
    <>
    
      <div className="relative w-1/3 h-1/2 overflow-hidden">
        {/* Apply transition class based on state */}
        <img
          src={images[imageIndex]}
          alt=""
          className={`absolute top-0 left-0 w-full h-full object-contain ${
            isTransitioning ? "opacity-0 transition-opacity" : "opacity-100"
          }`}
        />
      </div>
   
    </>
  );
};

export default ImageCarousel;
