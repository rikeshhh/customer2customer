import React, { useEffect, useState } from "react";
import { collection, getDocs, limit } from "firebase/firestore";
import Button from "../../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useContextCreate } from "../../Context/CartContext";
import { notifyError, notifySuccess } from "../../Components/Notistack/Notices";
import NotistackContainer from "../../Components/Notistack/NotistackContainer";
import { firestore } from "../../firebase/firebase";
import CustomNotistackContainer from "../../Components/Notistack/NotistackContainer";
import image from "../../assets/headphone.jpg";
import { CiHeart } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";

export const LandingCart = () => {
  // State to store seller data
  const sellerData = [
    {
      header: "Double bed & slide Tables",
      price: 200,
      imageUrl: image,
    },
    {
      header: "Double bed & slide Tables",
      price: 200,
      imageUrl: image,
    },
  ];
  const navigate = useNavigate();
  return (
    <section className="LandingCart w-full">
      <div className="grid grid-cols-1 pt-8 w-full gap-8">
        {sellerData.map((product, index) => (
          <div className="flex flex-col  border w-full rounded-lg ">
            <div className="flex justify-between p-4 border-b-2">
              <div>
                <Button
                  icon={<CiHeart />}
                  className="text-2xl p-4 hover:text-text-color"
                />
              </div>
              <div className="">
                <Button
                  className="flex justify-center items-center gap-4 text-2xl bg-text-color p-4 rounded-lg"
                  content="View More product!"
                  icon={<FaArrowRightLong />}
                />
              </div>
            </div>
            <div className="flex w-full">
              <div className="w-full h-auto p-4">
                <figure className="w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={product.imageUrl}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </figure>
              </div>
              <div className="flex flex-col justify-center items-center p-6 w-full gap-4">
                <div className="text-4xl font-semibold">
                  <h6>Classic MSI Headphone</h6>
                </div>
                <span className="text-2xl font-thin">Popular Fresh Prouct</span>
                <div className="font-bold text-4xl">
                  <p>$18</p>
                </div>
                <div className="flex justify-start items-center text-xl font-thin overflow-hidden h-24">
                  <p className="line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Mollitia ea, provident rem libero minus excepturi error aut
                    quasi quia molestias nam molestiae! Numquam odit sint quo
                    exercitationem suscipit earum? Sint.
                  </p>
                </div>
                <div className="flex justify-between w-full gap-4 py-4">
                  <Button
                    content="Add to cart"
                    handleClick={() => addToCart(seller)}
                    className="  glass  p-4 transition duration-300 ease-in-out    rounded-md w-full bg-text-color"
                  />
                  <Button
                    content="View Product"
                    // handleClick={() =>
                    //   navigate("/prodData", { state: { product } })
                    // }
                    className="  glass  p-4 transition duration-300 ease-in-out  border border-white rounded-md w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CustomNotistackContainer />
    </section>
  );
};
