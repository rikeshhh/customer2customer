import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useAuthContext } from "../../Context/AuthContext";
import { ThemeContext, useThemeContext } from "../../Context/ThemeContext";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import NotistackContainer from "../../Components/Notistack/NotistackContainer";
import { notifySuccess } from "../../Components/Notistack/Notices";
import Button from "../../Components/Button/Button";

const Header = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication status

  useEffect(() => {
    // Check if user is authenticated when component mounts
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(user !== null); // Update authentication status
    });

    // Clean up subscription when component unmounts
    return () => unsubscribe();
  }, []);

  const userLogout = (e) => {
    e.preventDefault();
    auth
      .signOut()
      .then(() => {
        navigate("/");
        notifySuccess("Log out");
      })
      .catch((err) => console.log(err.message));
  };

  const { authorization } = useAuthContext();

  const userCart = () => {
    navigate("/checkout");
  };
  const { toggleTheme, theme } = useThemeContext();
  const changeTheme = () => {
    toggleTheme();
  };
  const sellerProductDetail = () => {
    navigate("/sellerProduct");
  };
  return (
    <section className="Header   ">
      <nav className="content-wrapper mx-auto">
        <div className="Navigation flex justify-between ">
          <ul className="flex gap-16">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
          <Button
            handleClick={changeTheme}
            className=" text-2xl  p-2"
            content={
              theme === "light" ? (
                <CiLight className="text-black" />
              ) : (
                <CiDark className="text-white" />
              )
            }
          />
          <div className="flex gap-2">
            {isAuthenticated ? (
              <>
                <Button
                  content="SignOut"
                  handleClick={userLogout}
                  className="hover:bg-black hover:text-white transition duration-300 ease-in-out border p-4 rounded-lg"
                />
                <Button
                  content="sellerProduct"
                  handleClick={sellerProductDetail}
                  className="hover:bg-black hover:text-white transition duration-300 ease-in-out border p-4 rounded-lg"
                />
              </>
            ) : (
              // Render Sign In button conditionally
              <>
                <Link to="/sellerData">
                  <Button
                    content="View Products"
                    className="hover:bg-black hover:text-white transition duration-300 ease-in-out border p-4 rounded-lg"
                  />
                </Link>
                <Link to="/login">
                  <Button
                    content="Log in"
                    className=" hover:bg-black hover:text-white transition duration-300 ease-in-out p-4 border rounded-lg"
                  />
                </Link>
                <Button
                  content="Cart"
                  handleClick={userCart}
                  className=" hover:bg-black hover:text-white transition duration-300 ease-in-out border p-4 rounded-lg"
                />
              </>
            )}
          </div>
        </div>
      </nav>
      <NotistackContainer />
    </section>
  );
};

export default Header;
