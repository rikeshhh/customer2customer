import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import Button from "../../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";

const SellerData = () => {
  const [sellerData, setSellerData] = useState([]);

  useEffect(() => {
    // Function to fetch seller data from Firestore
    const fetchData = async () => {
      try {
        const sellerDataRef = collection(firestore, "sellerData");
        getDocs(sellerDataRef).then((snapshot) => {
          console.log(snapshot);
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          console.log(data);
          setSellerData(data);
        });
      } catch (error) {
        console.error("Error fetching seller data:", error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const navigate = useNavigate();
  const moveToProd = () => {
    navigate("/prodData");
  };
  return (
    <section className="SellerData">
      <h2>Seller Data</h2>
      <div className="grid grid-cols-4">
        {sellerData.map((seller) => (
          <div
            key={seller.id}
            className="flex border flex-col justify-start p-2"
          >
            {/* <p>{`updatedBy:${seller.id}`}</p> */}
            <figure>
              <img src={seller.imageUrl} alt="" />
            </figure>
            <p>Product Name: {seller.productName}</p>
            <p>Product Amount: {seller.productAmount}</p>
            {/* {isReadMore
              ? seller.productDescrip.slice(10)
              : seller.productDescrip}
            <span
              onClick={toggleReadMore}
              className="read-or-hide"
              style={{ color: "green" }}
            >
              {isReadMore ? "...read more" : " show less"}
            </span> */}
            <p>{seller.producDescrip}</p>
            <p>Seller: {seller.name}</p>

            <Button
              content="Add to cart"
              handleClick={() => navigate("/prodData", { state: { seller } })}
              className="border bg-primary-sky-blue text-white"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SellerData;
