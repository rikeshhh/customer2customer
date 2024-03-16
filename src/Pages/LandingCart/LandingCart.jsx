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
    {
      header: "Double bed & slide Tables",
      price: 200,
      imageUrl: image,
    },
  ];
  const navigate = useNavigate();
  return (
    <section className="LandingCart">
      <div className="grid grid-cols-3 pt-8">
        {sellerData.map((product, index) => (
          <div className="flex flex-col h-96 w-96">
            <div>
              <figure className="h-52 p-2 ">
                <img src={image} alt="" className="object-cover rounded-lg" />
              </figure>
            </div>
            <div className="flex justify-evenly">
              <Button
                content="Add to cart"
                handleClick={() => addToCart(seller)}
                className="  glass hover:text-white transition duration-300 ease-in-out p-2 border rounded-md"
              />
              <Button
                content="View Product"
                // handleClick={() =>
                //   navigate("/prodData", { state: { product } })
                // }
                className="  glass hover:text-white transition duration-300 ease-in-out p-2 border rounded-md"
              />
            </div>
          </div>
        ))}
      </div>

      <CustomNotistackContainer />
    </section>
  );
};
