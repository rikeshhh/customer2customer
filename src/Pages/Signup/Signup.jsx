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
import Model from "../../Components/Model/Model";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";
import CustomNotistackContainer from "../../Components/Notistack/NotistackContainer";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");
  const navigate = useNavigate();

  const signUp = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      const userDocRef = doc(firestore, "users", userCredential.user.uid);

      // Include account type when setting user document data
      await setDoc(userDocRef, {
        email: data.email,
        bio: data.accountType, // Store the account type
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
          onSubmit={handleSubmit(signUp)}
          className="flex flex-col w-96 justify-center items-start gap-4"
        >
          <label htmlFor="email" className="text-text-color">
            Email:
          </label>
          <input
            id="email"
            {...register("email", {
              required: Model.Email.required,
              maxLength: Model.Email.maxLength,
              pattern: Model.Email.pattern,
            })}
            placeholder={Model.Email.placeholder}
            className="shadow w-full p-2"
          />
          {errors.email && notifyError(errors.email.message)}

          <label htmlFor="password" className="text-text-color">
            Password:
          </label>
          <input
            id="password"
            {...register("password", {
              required: Model.Password.required,
              minLength: Model.Password.minLength,
              maxLength: Model.Password.maxLength,
              pattern: Model.Password.pattern,
            })}
            type="password"
            className="shadow w-full p-2"
            placeholder={Model.Password.placeholder}
          />
          {errors.password && notifyError(errors.password.message)}
          <label htmlFor="" className="w-full text-left ">
            Account Type
          </label>
          <select
            id="accountType"
            name="accountType" // Set the name attribute
            {...register("accountType")} // Pass the name attribute to the register function
            className="mr-1 shadow w-full p-2 border text-black"
            placeholder="Enter your account type (e.g., buyer or seller)"
          >
            <option value="Buyer">Buyer</option>
            <option value="Seller">Seller</option>
          </select>
          {errors.accountType && notifyError("Please select an account type")}
          <button
            type="submit"
            className=" bg-[#F64C72] text-white transition duration-300 ease-in-out p-2  rounded-lg w-full "
          >
            Create Account
          </button>
        </form>
      </div>
      <CustomNotistackContainer />

      {error && <p>{error}</p>}
    </section>
  );
};

export default Signup;
