import React from "react";
import reactSvg from "../../assets/react.svg";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="Header">
      <nav className="Navigation flex justify-between ">
        <ul className="flex gap-16">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>About Us</li>
          <li>Contact Us</li>
          <Link to="/sellerData">
            <li>Products</li>
          </Link>
        </ul>
        <figure>
          <img src={reactSvg} alt="" />
        </figure>
        <div className="flex gap-2">
          <Link to="/login">
            <Button
              content="Sign Up"
              className="text-primary-sky-blue border p-2"
            />
          </Link>
          <Link to="/signUp">
            <Button
              content="Sign In"
              className="text-primary-sky-blue border p-2"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
