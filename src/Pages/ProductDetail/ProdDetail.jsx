import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { useContextCreate } from "../../Context/CartContext";
import { notifySuccess } from "../../Components/Notistack/Notices";
import NotistackContainer from "../../Components/Notistack/NotistackContainer";

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
    <section className="ProductDetail container mx-auto">
      <div className="flex gap-12 justify-center items-center">
        <div className="w-1/2">
          <figure>
            <img src={seller.imageUrl} alt="" />
          </figure>
        </div>
        <div className="w-1/2 payment flex-flex-col ">
          <h2 className="text-xl font-thin">Seller : {seller.name}</h2>
          <h2 className="text-xl font-thin">Price: {seller.productAmount}</h2>
          <h2 className="text-xl font-thin">
            Product Name: {seller.productName}
          </h2>
          <p className="text-xl font-black">
            Product Desciption: {seller.productDescrip}
          </p>

          <div className="flex flex-col gap-4">
            <Button
              content="Add to cart"
              handleClick={addToCart}
              className=" hover:bg-black hover:text-white transition duration-300 ease-in-out p-4 border rounded-lg bg-primary-sky-blue"
            />
            <Button
              content="Contact Seller"
              handleClick={contactSeller}
              className=" hover:bg-black hover:text-white transition duration-300 ease-in-out p-4 border rounded-lg bg-primary-sky-blue"
            />
          </div>
          <NotistackContainer />
        </div>
      </div>
    </section>
  );
};

export default ProdDetail;
