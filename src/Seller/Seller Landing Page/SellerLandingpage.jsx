import React from "react";
import { useEffect, useState } from "react";
import Button from "../../Components/Button/Button";
import { signOut } from "firebase/auth";
const SellerLandingpage = ({ handleSignOut, authUser }) => {
  return (
    <div>
      <p>{`Signed in as ${authUser.email}`}</p>
      <Button
        handleClick={handleSignOut}
        content="Sign Out"
        className="text-primary-sky-blue"
      />
    </div>
  );
};

export default SellerLandingpage;
