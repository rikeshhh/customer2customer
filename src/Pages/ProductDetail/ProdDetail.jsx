import React from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { useContextCreate } from "../../Context/CartContext";
import { notifySuccess } from "../../Components/Notistack/Notices";
import NotistackContainer from "../../Components/Notistack/NotistackContainer";
import { IoMdArrowBack } from "react-icons/io";
import Comments from "../Comments/Comments";
import AddCommnet from "../Comments/AddCommnet";

const ProdDetail = () => {
  const location = useLocation(); // Hook to access the current location
  const { seller } = location.state; // Destructure the seller object from location state

  // Function to add item to cart
  const { addItemToCart } = useContextCreate();
  const addToCart = () => {
    notifySuccess("Item added successfully"); // Notify user of successful addition to cart
    addItemToCart(seller); // Add item to cart
  };
  const contactSeller = () => {
    notifySuccess("Not avaialble");
  };
  console.log(seller);
  return (
    <section className="ProductDetail ">
      <div className="container mx-auto flex flex-col gap-12 py-12 w-full">
        <div className="p-2 flex flex-col">
          <div>
            <button className="bg-white p-1 rounded-xl">
              <Link to="/sellerData" className="text-[#F64C72]">
                <IoMdArrowBack />
              </Link>
            </button>
          </div>
        </div>
        <div className="flex gap-12 justify-between items-center w-full">
          <div className="w-full ">
            <figure>
              <img
                src={seller.imageUrl}
                alt=""
                className="border rounded-3xl"
              />
            </figure>
          </div>
          <div className="w-full  flex flex-col text-lg">
            <div className="py-8">
              <h2 className="text-xl font-thin">Seller : {seller.name}</h2>
              <h2 className="text-xl font-thin">
                Price: {seller.productAmount}
              </h2>
              <h2 className="text-xl font-thin">
                Product Name: {seller.productName}
              </h2>
              <p className="text-xl font-thin">
                Product Desciption: {seller.productDescrip}
              </p>
            </div>
            <div className="flex  gap-4">
              <Button
                content="Add to cart"
                handleClick={addToCart}
                className="bg-[#F64C72] hover:text-white transition duration-300 ease-in-out p-2 border rounded-lg"
              />
              <Button
                content="Contact Seller"
                handleClick={contactSeller}
                className="bg-[#F64C72] hover:text-white transition duration-300 ease-in-out p-2 border rounded-lg"
              />
            </div>
            <NotistackContainer />
          </div>
        </div>
        <div className="flex flex-col gap-8  ">
          <Comments />
          <Comments />
          <AddCommnet />
        </div>
      </div>
    </section>
  );
};

export default ProdDetail;
