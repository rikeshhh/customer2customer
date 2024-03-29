import React from "react";
import { LandingCart } from "./LandingCart";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import "./landing.css";
const LandingHeader = () => {
  return (
    <section className="landing landing__Cart__shadow py-8">
      <div className="flex flex-col py-12">
        <div className="flex justify-between items-center">
          <div className="w-96 text-lg">
            <h3 className="text-4xl font-semibold">
              Lorem ipsum, dolor sit amet consectetur.
            </h3>
          </div>
          <div className="bg-text-color p-2 font-semibold text-xl rounded-lg">
            <h2>Featured Product</h2>
          </div>
        </div>
      </div>
      <div>
        <LandingCart />
      </div>
      <div className="flex justify-end py-12">
        <Link to="/sellerData">
          <Button
            icon={<FaArrowRightLong />}
            className="bg-[#F64C72] flex justify-center items-center text-xl gap-4 text-white px-4 py-2 rounded focus:outline-none"
            content="View Products"
          />
        </Link>
      </div>
    </section>
  );
};

export default LandingHeader;
