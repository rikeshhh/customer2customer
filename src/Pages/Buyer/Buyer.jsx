import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { useAuthContext } from "../../Context/AuthContext";

const Buyer = ({ userId }) => {
  // Accessing authUser from AuthContext
  const { authUser } = useAuthContext();

  return (
    <section className="addProduct h-screen flex justify-center items-center gap-12 flex-col">
      {/* Greeting message for the authenticated user */}
      <h1 className="relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-white after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-black text-2xl">
        {`Thank you ${userId} for connecting with us! Get started by adding a product`}
      </h1>
      {/* Link to navigate to the seller page */}
      <Link to="/sellerPage">
        {/* Button to add a product */}
        <Button
          content="Add a product"
          className="  hover:text-white transition duration-300 ease-in-out p-4 border rounded-lg bg-[#F64C72]"
        />
      </Link>
    </section>
  );
};

export default Buyer;
