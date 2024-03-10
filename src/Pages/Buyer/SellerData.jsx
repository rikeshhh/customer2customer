import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Button from "../../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useContextCreate } from "../../Context/CartContext";
import { notifyError, notifySuccess } from "../../Components/Notistack/Notices";
import NotistackContainer from "../../Components/Notistack/NotistackContainer";
import { firestore } from "../../firebase/firebase";

const SellerData = () => {
  const [sellerData, setSellerData] = useState([]);
  const { authUser, addItemToCart } = useContextCreate();
  const navigate = useNavigate();

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
    <section className="SellerData">
     
        <>
          <h2>Seller Data</h2>
          <div className="grid grid-cols-4">
            {sellerData.map((seller, index) => (
              <div key={seller.id} className="flex border flex-col justify-start p-2">
                <figure>
                  <img src={seller.imageUrl} alt="" />
                </figure>
                <p>Product Name: {seller.productName}</p>
                <p>Product Amount: {seller.productAmount}</p>
                <p>{seller.producDescrip}</p>
                <p>Seller: {seller.name}</p>
                <Button
                  content="View Product"
                  handleClick={() => navigate("/prodData", { state: { seller } })}
                  className="border bg-primary-sky-blue text-white"
                />
                <Button
                  content="Add to cart"
                  handleClick={() => addToCart(seller)}
                  className="border bg-purple-700 text-white px-4"
                />
              </div>
            ))}
          </div>
          <NotistackContainer />
        </>
      
    </section>
  );
};

export default SellerData;
