import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Button from "../../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useContextCreate } from "../../Context/CartContext";
import { notifyError, notifySuccess } from "../../Components/Notistack/Notices";
import NotistackContainer from "../../Components/Notistack/NotistackContainer";
import { firestore } from "../../firebase/firebase";

const SellerData = () => {
  // State to store seller data
  const [sellerData, setSellerData] = useState([]);

  // Accessing context for cart functionality
  const { authUser, addItemToCart } = useContextCreate();

  // Hook for navigation
  const navigate = useNavigate();

  // Fetching seller data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const sellerDataRef = collection(firestore, "sellerData");
        const snapshot = await getDocs(sellerDataRef);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSellerData(data);
      } catch (error) {
        console.error("Error fetching seller data:", error);
        notifyError("Failed to fetch seller data");
      }
    };
    fetchData();
  }, []);

  // Function to add product to cart
  const addToCart = (product) => {
    try {
      addItemToCart(product);
      notifySuccess("Item added successfully");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      notifyError("Failed to add item to cart");
    }
  };

  return (
    <section className="SellerData py-12">
      <>
        <h2 className="text-center text-3xl font-black p-4">Products</h2>
        <div className="grid grid-cols-4 gap-4">
          {sellerData.map((seller, index) => (
            <div
              key={seller.id}
              className="flex border flex-col justify-between p-4 rounded-lg gap-8 font-black  "
              style={{
                backgroundImage: `url(${seller.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-white p-1">
                <figure>
                  <img
                    src={seller.imageUrl}
                    alt=""
                    className="rounded-md glass"
                  />
                </figure>
              </div>
              <div className="flex glass flex-col justify-between items-center font-semibold gap-2 text-white text-sm p-2">
                <p>Product Name: {seller.productName}</p>
                <p>Product Amount: {seller.productAmount}</p>
                <p>Seller: {seller.name}</p>
              </div>
              {/* Button to view product details */}
              <div className="flex font-black justify-center gap-2 items-center text-sm">
                <Button
                  content="View Product"
                  handleClick={() =>
                    navigate("/prodData", { state: { seller } })
                  }
                  className="  glass hover:text-white  transition duration-300 ease-in-out p-2 border  rounded-md "
                />
                {/* Button to add product to cart */}
                <Button
                  content="Add to cart"
                  handleClick={() => addToCart(seller)}
                  className="  glass hover:text-white transition duration-300 ease-in-out p-2 border rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Notistack container for notifications */}
        <NotistackContainer />
      </>
    </section>
  );
};

export default SellerData;
