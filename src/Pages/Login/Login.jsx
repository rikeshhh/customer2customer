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
const Login = () => {
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
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
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
                navigate("/land");
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
              onSubmit={signIn}
              className="loginForm flex flex-col w-96 justify-center items-start  gap-4 "
            >
              <label className="text-left text-[#F64C72]" htmlFor="">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state as user types
                className="shadow w-full p-2"
                placeholder="Enter your email"
              />
              <label htmlFor="" className="text-[#F64C72]">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Update password state as user types
                type="password" // Input type is password
                className="shadow w-full p-2"
                placeholder="Enter your password"
              />
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
        <NotistackContainer />
      </div>
    </section>
  );
};

export default Login;
