import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import SellerLandingpage from "../../SellerPages/Seller/Seller";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Button from "../../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Seller from "../../SellerPages/Seller/Seller";
const AuthDetails = () => {
  const [authUser, setAuthUser] = useState();
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
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("signout was succesful");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {authUser ? (
        <>
          <Seller handleSignOut={userSignOut} authUser={authUser} />
        </>
      ) : (
        <Link to="/" />
      )}
    </div>
  );
};

export default AuthDetails;
