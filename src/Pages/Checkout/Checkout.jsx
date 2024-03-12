import React, { useEffect, useState } from "react";
import { useContextCreate } from "../../Context/CartContext";
import KhaltiCheckout from "khalti-checkout-web";
import Button from "../../Components/Button/Button";
import { notifySuccess } from "../../Components/Notistack/Notices";
import NotistackContainer from "../../Components/Notistack/NotistackContainer";
import config from "../../Components/KHalti/KhaltiConfig";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  return (
    <>
      {states.length > 0 ? (
        <div className="flex flex-col gap-4">
          {states.map((option, index) => (
            <div
              key={index}
              className="flex  justify-between items-center p-4 rounded-lg gap-2 font-black "
            >
              <figure>
                <img
                  src={option.imageUrl}
                  alt=""
                  className="object-cover px-2 h-32 w-96"
                />
              </figure>
              <div className="flex-col">
                <h2>Price:{option.productAmount}</h2>
                <p>{option.productDescrip}</p>
              </div>

              <div>
                <Button
                  handleClick={() => removeItem(index)}
                  content="Remove"
                  className=" hover:bg-black hover:text-white transition duration-300 ease-in-out p-4 border rounded-lg bg-primary-sky-blue"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        "Cart is empty"
      )}
     <div className="flex justify-center items-center flex-col p-12 gap-8">
     <p>Total: {total}</p>
      <Button
        content="Pay with Khalti"
        handleClick={paymentCheckout}
        className=" hover:bg-black hover:text-white  transition duration-300 ease-in-out p-4 border rounded-lg bg-primary-sky-blue"
      />
     </div>
      <NotistackContainer />
    </>
  );
};

export default Checkout;
