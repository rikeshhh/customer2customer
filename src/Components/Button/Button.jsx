import React from "react";

const Button = ({ handleClick, className }) => {
  return (
    <button onClick={handleClick} className={className}>
      Button
    </button>
  );
};

export default Button;
