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

  return (
    <section className="ProductDetail container mx-auto">
      <div className="flex">
        <div className="w-1/2">
          <h2>{seller.productName}</h2>
          <figure>
            <img src={seller.imageUrl} alt="" />
          </figure>
        </div>
        <div className="w-1/2 payment flex-flex-col">
          <h2>{seller.productAmount}</h2>

          <Button
            content="Add to cart"
            handleClick={addToCart}
            className="border bg-purple-700 text-white px-4"
          />
          <NotistackContainer />
        </div>
      </div>
    </section>
  );
};

export default ProdDetail;
