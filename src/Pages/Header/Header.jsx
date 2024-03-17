import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
import "./header.css";
import { useTypeContext } from "../../Context/TypeContext";
const Header = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track authentication status
  const { typeOfAccount } = useTypeContext();
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
      <nav className="content-wrapper mx-auto text-xl">
        <div className="Navigation flex justify-between items-center ">
          <div className="text-2xl max-sm:text-xs">
            <Link to="/">
              <h1 className="flex p-1 gap-1 text-[#F64C72]">
                Customer
                <figure>
                  <img src={logo} alt="" className="w-12 max-sm:w-auto " />
                </figure>
                Customer
              </h1>
            </Link>
          </div>

          <div className="flex gap-2">
            {isAuthenticated && typeOfAccount === "seller" ? (
              <>
                <div className="flex justify-center items-center gap-4">
                  <Button
                    content="Seller Product"
                    handleClick={sellerProductDetail}
                  />
                  <Link to="/authDetail">Add Product</Link>
                  <div className="relative">
                    <button
                      className="bg-[#F64C72] flex justify-center items-center gap-4 text-white px-4 py-2 rounded focus:outline-none"
                      onClick={toggleDropdown}
                    >
                      {authUser
                        ? authUser.email // Render email if authUser exists
                        : "More" // Render 'More' if authUser doesn't exist
                      }

                      <IoIosArrowDropdownCircle className="bg-[#F64C72]" />
                    </button>
                    {isOpen && (
                      <div className="absolute z-10 right-0 mt-4 w-56 bg-white rounded-lg shadow-md">
                        <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                          <Button content="SignOut" handleClick={userLogout} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            ) : (
              // Render Sign In button conditionally
              <div className="flex justify-center items-center gap-4">
                <NavLink
                  to="/"
                  onClick={closeDropdown}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Home
                </NavLink>
                <NavLink to="/about" onClick={closeDropdown}>
                  About Us
                </NavLink>
                <NavLink to="/contact" onClick={closeDropdown}>
                  Contact Us
                </NavLink>

                {typeOfAccount === "buyer" && (
                  <NavLink to="/sellerData" onClick={closeDropdown}>
                    View Products
                  </NavLink>
                )}
                <div className="p-2 font-semibold  rounded-lg relative">
                  <button
                    className="bg-[#F64C72] flex justify-center items-center gap-4 text-white px-4 py-2 rounded focus:outline-none"
                    onClick={toggleDropdown}
                  >
                    {
                      authUser
                        ? authUser.email // Render email if authUser exists
                        : "More" // Render 'More' if authUser doesn't exist
                    }
                    <IoIosArrowDropdownCircle className="bg-[#F64C72]" />
                  </button>

                  {isOpen ? (
                    <>
                      {typeOfAccount === "buyer" ? (
                        <div className="absolute z-10 right-0 mt-4 w-56 bg-white rounded-lg shadow-md">
                          <div className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                            <Button
                              content="SignOut"
                              handleClick={userLogout}
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="absolute z-10 right-0 mt-4 w-56 bg-white rounded-lg shadow-md">
                          <div>
                            <NavLink to="/checkout">
                              <Button
                                content="User Cart"
                                handleClick={userCart}
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                              />
                            </NavLink>
                          </div>
                          <NavLink
                            to="/login"
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                            onClick={closeDropdown}
                          >
                            Log in
                          </NavLink>
                        </div>
                      )}
                    </>
                  ) : null}
                </div>
              </div>
            )}
          </div>
          {/* <div>
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
          </div> */}
        </div>
      </nav>
      <NotistackContainer />
    </section>
  );
};

export default Header;
