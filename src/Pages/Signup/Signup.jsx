import React, { useState } from "react";
import { firestore } from "../../firebase/firebase";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import customer from "../../assets/customer.jpg";
import { collection, doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { notifyError, notifySuccess } from "../../Components/Notistack/Notices";
import signup from "../../assets/signup.png";
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

      // Include account type when setting user document data
      await setDoc(userDocRef, {
        email: email,
        bio: accountType, // Store the account type
      });

      notifySuccess("Account created successfully");

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      setError(error.message);
      notifyError(error.message);
    }
  };

  return (
    <section className="SignUp flex justify-center items-center">
      <div className="bouncyCircle"></div>
      <div className="flex flex-col justify-start items-center border p-8 rounded-xl text-center font-black signup relative">
        <div className="w-32 h-32 ">
          <figure>
            <img src={signup} alt="" className="object-cover rounded-full" />
          </figure>
        </div>
        <div>
          <h2>Create a Account</h2>
          <h2>Get Started!</h2>
        </div>
        <form
          onSubmit={signUp}
          className="flex flex-col w-96 justify-center items-start gap-4"
        >
          <label htmlFor="" className="w-full text-left ">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mr-1 shadow w-full p-2 border"
            placeholder="Enter your email"
          />
          <label htmlFor="" className="w-full text-left ">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mr-1 shadow w-full p-2 border"
            placeholder="Enter your password"
          />
          <label htmlFor="" className="w-full text-left ">
            Account Type
          </label>
          <select
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            className="mr-1 shadow w-full p-2 border text-black"
            placeholder="Enter your account type (e.g., buyer or seller)"
          >
            <option value="Buyer">Buyer</option>
            <option value="seller">Seller</option>
          </select>
          <button
            type="submit"
            className=" bg-[#F64C72] text-white transition duration-300 ease-in-out p-2  rounded-lg w-full "
          >
            Create Account
          </button>
        </form>
      </div>
      {error && <p>{error}</p>}
    </section>
  );
};

export default Signup;
