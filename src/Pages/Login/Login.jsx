import React, { useState } from "react";
import { auth, firestore } from "../../firebase/firebase";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { notifyError, notifySuccess } from "../../Components/Notistack/Notices";
import NotistackContainer from "../../Components/Notistack/NotistackContainer";
import { doc, getDoc } from "firebase/firestore";
import login from "../../assets/login.jpg";
import logo from "../../assets/logo.png";
import start from "../../assets/start.jpg";
import { useForm } from "react-hook-form";
import Model from "../../Components/Model/Model";
import CustomNotistackContainer from "../../Components/Notistack/NotistackContainer";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState(""); // State to store email input
  const [password, setPassword] = useState(""); // State to store password input
  const navigate = useNavigate(); // Function to navigate to different routes

  // Function to reset password
  const resetPassword = () => {
    const userEmail = prompt("Please enter your email"); // Prompt user to enter email
    if (userEmail) {
      // If user entered email
      sendPasswordResetEmail(auth, userEmail) // Send password reset email
        .then(() => {
          notifySuccess("Email sent! Check your inbox for instructions."); // Notify user of successful email send
        })
        .catch((error) => {
          notifyError(error.message); // Notify user if there was an error
        });
    }
  };

  // Function to sign in
  const signIn = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async () => {
        // Fetch user data to check account type after signing in
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(firestore, "users", user.uid);
          const userDocSnapshot = await getDoc(userDocRef);
          if (userDocSnapshot.exists()) {
            const userData = userDocSnapshot.data();
            const userBio = userData.bio;
          if (userBio === "seller") {
              notifySuccess("Login successful");
              setTimeout(() => {
                navigate("/authDetail");
              }, 1000);
            } else {
              notifySuccess("Login successful");
              setTimeout(() => {
                navigate("/");
              }, 1000);
            }
          }
        }
      })
      .catch((error) => {
        notifyError(error.message);
      });
  };
  return (
    <section className="flex flex-col justify-center items-center  gap-12 ">
      <div className="flex  justify-between  border-[#F64C72] bg-white  rounded-xl text-center font-black shadow-2xl gap-8">
        <div>
          <figure>
            <img src={start} alt="" className="object-cover w-full " />
          </figure>
        </div>
        <div className="w-1/2 loginBox flex flex-col justify-center items-center font-semibold">
          <div className="text-2xl">
            <Link to="/">
              <h2 className="flex p-1 gap-1 text-[#F64C72]">
                Customer
                <figure>
                  <img src={logo} alt="" className="w-12" />
                </figure>
                Customer
              </h2>
            </Link>
            <span className="text-[#F64C72]">Welcome back!</span>
          </div>
          <div className="flex justify-center items-center p-8 w-full">
            <form
              onSubmit={handleSubmit(signIn)}
              className="loginForm flex flex-col w-96 justify-center items-start  gap-4 "
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
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}

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
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
              <button
                type="submit"
                className=" bg-[#F64C72] text-white transition duration-300 ease-in-out p-2 border rounded-lg w-full "
              >
                Login
              </button>
              <span className="w-full text-center text-[#F64C72]">
                Already have an account?{" "}
                <Link to="/signUp">
                  <Button content="Sign In" className="text-[#F64C72] " />
                </Link>
              </span>
              <Button
                handleClick={resetPassword}
                content="Reset password"
                className="text-center w-full"
              />
            </form>
          </div>
        </div>
        <CustomNotistackContainer />
      </div>
    </section>
  );
};

export default Login;
