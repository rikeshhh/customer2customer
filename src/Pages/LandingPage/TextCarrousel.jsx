import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const TextCarrousel = () => {
  const headerText = ["Buy", "Sell", "View"];
  const [textIndex, setTextIndex] = useState(0);

  const prevText = () => {
    setTextIndex((textIndex - 1 + headerText.length) % headerText.length);
  };

  const nextText = () => {
    setTextIndex((textIndex + 1) % headerText.length);
  };

  return (
    <>
      <button onClick={prevText}>
        <FaArrowLeft />
      </button>
      <h2>{headerText[textIndex]}</h2>
      <button onClick={nextText}>
        <FaArrowRight />
      </button>
    </>
  );
};
