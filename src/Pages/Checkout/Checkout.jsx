import React, { useEffect, useState } from "react";
import { useContextCreate } from "../../Context/CartContext";
import KhaltiCheckout from "khalti-checkout-web";
import Button from "../../Components/Button/Button";
import { notifySuccess } from "../../Components/Notistack/Notices";
import NotistackContainer from "../../Components/Notistack/NotistackContainer";
import config from "../../Components/KHalti/KhaltiConfig";

let checkout = new KhaltiCheckout(config);

const Checkout = () => {
  // State to store cart items
  const { states, removeItemFromCart } = useContextCreate();
  const [total, setTotal] = useState(0);

  // Calculate total amount
  useEffect(() => {
    const calculateTotal = () => {
      let sum = 0;
      states.forEach((item) => {
        sum += parseInt(item.productAmount);
      });
      setTotal(sum);
    };
    calculateTotal();
  }, [states]);

  // Function to remove item from cart
  const removeItem = (index) => {
    notifySuccess("Item removed successfully");
    removeItemFromCart(index);
    // Update total after removing an item
  };

  // Function to initiate payment checkout
  const paymentCheckout = () => {
    checkout.show({ amount: total * 100 }); // Multiply total by 100 as Khalti accepts amount in paisa
  };

  return (
    <>
      {states.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {states.map((option, index) => (
            <div
              key={index}
              className="flex border flex-col justify-start p-4 rounded-lg gap-2 font-black "
            >
              <figure className="object-contain px-2">
                <img src={option.imageUrl} alt="" />
              </figure>
              <h2>Price:{option.productAmount}</h2>
              <Button
                handleClick={() => removeItem(index)}
                content="Remove"
                className=" hover:bg-black hover:text-white transition duration-300 ease-in-out p-4 border rounded-lg bg-primary-sky-blue"
              />
            </div>
          ))}
        </div>
      ) : (
        "Cart is empty"
      )}
      <p>Total: {total}</p>
      <Button
        content="Pay with Khalti"
        handleClick={paymentCheckout}
        className=" hover:bg-black hover:text-white transition duration-300 ease-in-out p-4 border rounded-lg bg-primary-sky-blue"
      />
      <NotistackContainer />
    </>
  );
};

export default Checkout;
