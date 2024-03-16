import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";

const LandingFooter = () => {
  return (
    <section className="landingFooter">
      <div className="flex justify-end pb-12">
        <Link to="/sellerData">
          <Button
            className="bg-text-color p-2 font-semibold text-xl rounded-lg"
            content="View Products"
          />
        </Link>
      </div>
    </section>
  );
};

export default LandingFooter;
