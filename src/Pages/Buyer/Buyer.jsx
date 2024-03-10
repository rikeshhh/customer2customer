import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { useAuthContext } from "../../Context/AuthContext";
import { auth } from "../../firebase/firebase";

const Buyer = ({ userEmail }) => {
  const { authUser } = useAuthContext();
  console.log("auth", authUser);
  return (
    <>
      <h1
        class="relative w-[max-content]
before:absolute before:inset-0 before:animate-typewriter
before:bg-white
after:absolute after:inset-0 after:w-[0.125em] after:animate-caret
after:bg-black"
      >
        {`Thank you ${userEmail} for  connecting with us! get started by adding a product`}
      </h1>
      <Link to="/sellerPage">
        <Button
          content="Add a product"
          className="text-primary-sky-blue border p-2"
        />
      </Link>
    </>
  );
};

export default Buyer;
