import React, { useState } from "react";
import "./category.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { Link } from "react-router-dom";
const Category = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <section className="Category py-12">
      <div className="py-12 flex flex-col gap-12">
        <div className="flex justify-between items-center">
          <div className="w-96 text-lg">
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
          </div>
          <div className="bg-text-color p-2 font-semibold text-xl rounded-lg relative">
            <button
              className="bg-[#F64C72] flex justify-center items-center gap-4 text-white px-4 py-2 rounded focus:outline-none"
              onClick={toggleDropdown}
            >
              Category <IoIosArrowDropdownCircle className="bg-[#F64C72]" />
            </button>
            {isOpen && (
              <div className="absolute z-10 right-0 mt-4 w-56 bg-white rounded-lg shadow-md">
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeDropdown}
                >
                  Furniture
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeDropdown}
                >
                  Construction Material
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeDropdown}
                >
                  Sound System
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  onClick={closeDropdown}
                >
                  Clothes
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="flex w-full justify-between items-center">
          <div className="w-96 h-96 border product-card furniture flex justify-center items-center text-4xl font-black">
            <h2>Furniture</h2>
          </div>
          <div className="w-96 h-96">
            <div
              className="h-48 w-full border product-card construction__tools *:
          flex justify-center items-center text-4xl font-black
    
          "
            >
              <h2>Construction Material</h2>
            </div>
            <div
              className="h-48 w-full border headphone 
          flex justify-center items-center text-4xl font-black
          product-card"
            >
              <h2>Sound System</h2>
            </div>
          </div>
          <div
            className="w-96 h-96 border product-card 
        flex justify-center items-center text-4xl font-black
        clothes "
          >
            Clothes
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
