import React from "react";
import { signOut } from "firebase/auth";

const Button = ({ handleClick, className, content, type, icon }) => {
  return (
    <button onClick={handleClick} className={className} type={type}>
      {content} {icon}
    </button>
  );
};

export default Button;
