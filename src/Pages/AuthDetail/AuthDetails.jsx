import React, { useEffect } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import Buyer from "../Buyer/Buyer";

const AuthDetails = () => {
  const { authUser, setAuthUser } = useAuthContext(); // Accessing authUser and setAuthUser from AuthContext

  console.log(authUser);
  const navigate = useNavigate();

  // Function to handle authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user); // Set authenticated user in context
      } else {
        setAuthUser(null); // Clear authenticated user from context
        navigate("/"); // Redirect to home page if user is not authenticated
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe from auth state changes when component unmounts
    };
  }, [navigate, setAuthUser]); // Dependency array with navigate and setAuthUser

  return (
    <div>
      {authUser ? (
        // Render Buyer component if user is authenticated
        <Buyer userId={authUser.email} />
      ) : (
        // Render link to home page if user is not authenticated
        <Link to="/" />
      )}
    </div>
  );
};

export default AuthDetails;
