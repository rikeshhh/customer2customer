import React from "react";
import { useLocation } from "react-router-dom";
const ProdDetail = () => {
  const location = useLocation();
  const { seller } = location.state;

  // Now you can use the seller object in your component
  console.log(seller);

  return (
    <div>
      <h2>{seller.name}</h2>
      {/* Render the seller data as needed */}
    </div>
  );
};

export default ProdDetail;
