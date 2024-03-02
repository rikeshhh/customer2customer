import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
const AuthDetails = () => {
  const [authUser, setAuthUser] = useState();
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
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {authUser ? (
        <>
          <p>{`signed in as ${authUser.email}`}</p>
          <button onClick={userSignOut}>SignOut</button>
        </>
      ) : (
        <p>SignOut</p>
      )}
    </div>
  );
};

export default AuthDetails;
