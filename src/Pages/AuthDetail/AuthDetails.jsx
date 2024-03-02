import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import SellerLandingpage from "../../Seller/Seller Landing Page/SellerLandingpage";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
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
          <SellerLandingpage handleSignOut={userSignOut} authUser={authUser} />
        </>
      ) : (
        <p>SignOut</p>
      )}
    </div>
  );
};

export default AuthDetails;
