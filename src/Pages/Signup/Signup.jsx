import React, { useState } from "react";
import { firestore } from "../../firebase/firebase";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import customer from "../../assets/customer.jpg";
import { collection, doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { notifyError, notifySuccess } from "../../Components/Notistack/Notices";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const navigate = useNavigate();
  const signUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userDocRef = doc(firestore, "users", userCredential.user.uid);
      await setDoc(userDocRef, {
        bio: accountType,
      });
      notifySuccess("Account created successfullt");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      setError(error.message);
      notifyError(error.message);
    }
  };

  return (
    <section className="SignUp flex justify-center items-center h-screen">
      <div className="flex w-1/2">
        <form
          onSubmit={signUp}
          className="flex flex-col w-96 max-h-60 justify-center items-center container shadow-custom gap-8"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mr-1 shadow  w-full p-2 border"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mr-1 shadow  w-full p-2 border"
            placeholder="Enter your password"
          />
          <input
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            className="mr-1 shadow  w-full p-2 border"
            placeholder="Enter your account type"
          />
          <button type="submit">Create Account</button>
        </form>
       
      </div>

      {error && <p>{error}</p>}
    </section>
  );
};

export default Signup;
