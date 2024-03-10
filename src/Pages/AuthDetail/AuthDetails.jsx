import React from "react";
import { useEffect, useState } from "react";
import { auth, firestore } from "../../firebase/firebase";
import SellerLandingpage from "../../SellerPages/Seller/Seller";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Button from "../../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Seller from "../../SellerPages/Seller/Seller";
import { useAuthContext } from "../../Context/AuthContext";
import Buyer from "../Buyer/Buyer";
const AuthDetails = () => {
  const { authUser, setAuthUser } = useAuthContext();

  //checks if user is logged in or not
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("user login", user);
    } else {
      console.log("user logged out");
    }
  });
  const navigate = useNavigate();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
      return () => {
        listen();
      };
    });
  }, []);
  const { setAuthorization } = useAuthContext;
  return (
    <div>
      {authUser ? (
        <>
          <Buyer userId={authUser.email} />
        </>
      ) : (
        <Link to="/" />
      )}
    </div>
  );
};

export default AuthDetails;
