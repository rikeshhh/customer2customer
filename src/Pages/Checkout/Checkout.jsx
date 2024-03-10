import React, { useEffect, useState } from "react";
import { useContextCreate } from "../../Context/CartContext";
import KhaltiCheckout from "khalti-checkout-web";
import Button from "../../Components/Button/Button";
import { notifySuccess } from "../../Components/Notistack/Notices";
import NotistackContainer from "../../Components/Notistack/NotistackContainer";

// Configuration for Khalti checkout
let config = {
  publicKey: "test_public_key_8e66576e954a4ca6ad72cdeaa01d7814",
  productIdentity: "1234567890",
  productName: "Drogon",
  productUrl: "http://gameofthrones.com/buy/Dragons",
  eventHandler: {
    onSuccess(payload) {
      console.log(payload);
    },
    onError(error) {
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

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
              className="flex flex-col justify-center items-center"
            >
              <figure className="object-contain px-2">
                <img src={option.imageUrl} alt="" />
              </figure>
              <h2>{option.productAmount}</h2>
              <Button
                handleClick={() => removeItem(index)}
                content="Remove"
                className="text-primary-sky-blue border p-2"
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
        className="text-primary-sky-blue border p-2 w-full"
      />
      <NotistackContainer />
    </>
  );
};

export default Checkout;
