import React from "react";
import { LandingCart } from "./LandingCart";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";

const LandingHeader = () => {
  return (
    <section className="landing">
      <div className="flex flex-col py-12">
        <div className="flex justify-between items-center">
          <div className="w-96 text-lg">
            <p>Lorem ipsum, dolor sit amet consectetur.</p>
          </div>
          <div className="bg-text-color p-2 font-semibold text-xl rounded-lg">
            <h2>Featured Product</h2>
          </div>
        </div>
      </div>
      <>
        <LandingCart />
      </>
      <>
        <div className="flex justify-end pb-12">
          <Link to="/sellerData">
            <Button
              className="bg-text-color p-2 font-semibold text-xl rounded-lg"
              content="View Products"
            />
          </Link>
        </div>
      </>
    </section>
  );
};

export default LandingHeader;
