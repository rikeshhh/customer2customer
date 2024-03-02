import React from "react";
import reactSvg from "../../assets/react.svg";
import Button from "../../Components/Button/Button";
const Header = () => {
  return (
    <header className="Header">
      <nav className="Navigation flex justify-between ">
        <ul className="flex gap-16">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
        <figure>
          <img src={reactSvg} alt="" />
        </figure>
        <div className="flex gap-2">
          <Button
            content="Sign Up"
            className="text-primary-sky-blue border p-2"
          />
          <Button
            content="Sign In"
            className="text-primary-sky-blue border p-2"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
