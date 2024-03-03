import React from "react";
import { signOut } from "firebase/auth";

const Button = ({ handleClick, className, content, type }) => {
  return (
    <button onClick={handleClick} className={className} type={type}>
      {content}
    </button>
  );
};

export default Button;
