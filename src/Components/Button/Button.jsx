import React from "react";
import { signOut } from "firebase/auth";

const Button = ({ handleClick, className, content }) => {
  return (
    <button onClick={handleClick} className={className}>
      {content}
    </button>
  );
};

export default Button;
