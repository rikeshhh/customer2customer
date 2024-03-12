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
import { IoIosArrowDropdownCircle } from "react-icons/io";
import logo from "../../assets/logo.png";
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
    setIsOpen(false);
  };
  const { toggleTheme, theme } = useThemeContext();
  const changeTheme = () => {
    toggleTheme();
  };
  const sellerProductDetail = () => {
    navigate("/sellerProduct");
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  const { authUser } = useAuthContext();
  console.log(authUser);
  return (
    <section className="Header font-semibold">
      <nav className="content-wrapper mx-auto">
        <div className="Navigation flex justify-between items-center ">
          <div className="text-2xl">
            <Link to="/">
              <h1 className="flex p-1 gap-1 text-[#F64C72]">
                Customer
                <figure>
                  <img src={logo} alt="" className="w-12" />
                </figure>
                Customer
              </h1>
            </Link>
          </div>
          <Button
            handleClick={changeTheme}
            className=" text-2xl  p-2"
            content={
              theme === "light" ? (
                <CiLight className="text-white" />
              ) : (
                <CiDark className="text-white" />
              )
            }
          />
          <div className="flex gap-2">
            {isAuthenticated ? (
              <>
                <div className="relative">
                  <button
                    className="bg-[#F64C72] flex justify-center items-center gap-4 text-white px-4 py-2 rounded focus:outline-none"
                    onClick={toggleDropdown}
                  >
                    {authUser.email}{" "}
                    <IoIosArrowDropdownCircle className="bg-[#F64C72]" />
                  </button>
                  {isOpen && (
                    <div className="absolute z-10 right-0 mt-2 w-48 bg-white rounded-lg shadow-md">
                      <Button
                        content="SignOut"
                        handleClick={userLogout}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      />
                      <Button
                        content="Seller Product"
                        handleClick={sellerProductDetail}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      />
                      <Link
                        to="/authDetail"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                        Add Product
                      </Link>
                    </div>
                  )}
                </div>
              </>
            ) : (
              // Render Sign In button conditionally
              <div className="relative">
                <button
                  className="bg-[#F64C72] flex justify-center items-center gap-4 text-white px-4 py-2 rounded focus:outline-none"
                  onClick={toggleDropdown}
                >
                  Menu <IoIosArrowDropdownCircle className="bg-[#F64C72]" />
                </button>
                {isOpen && (
                  <div className="absolute z-10 right-0 mt-2 w-48 bg-white rounded-lg shadow-md">
                    <Link
                      to="/"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeDropdown}
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeDropdown}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeDropdown}
                    >
                      Contact Us
                    </Link>
                    <Link
                      to="/sellerData"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeDropdown}
                    >
                      View Products
                    </Link>
                    <Link
                      to="/login"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeDropdown}
                    >
                      Log in
                    </Link>

                    <button
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={userCart}
                    >
                      User Cart
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
      <NotistackContainer />
    </section>
  );
};

export default Header;
