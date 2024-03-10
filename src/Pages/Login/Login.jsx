import React, { useState } from "react";
import { auth } from "../../firebase/firebase";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { notifyError, notifySuccess } from "../../Components/Notistack/Notices";
import NotistackContainer from "../../Components/Notistack/NotistackContainer";

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
    e.preventDefault(); // Prevent default form submission behavior
    signInWithEmailAndPassword(auth, email, password) // Sign in with email and password
      .then(() => {
        notifySuccess("Login successful"); // Notify user of successful login
        setTimeout(() => {
          navigate("/authDetail"); // Navigate to authentication detail page after a brief delay
        }, 1000);
      })
      .catch((error) => {
        notifyError(error.message); // Notify user if there was an error
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-12">
      <h3>"Welcome to C2C platform"</h3>
      <div>
        <form
          onSubmit={signIn}
          className="flex flex-col w-96 justify-center items-center gap-4"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state as user types
            className="shadow w-full p-2"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state as user types
            type="password" // Input type is password
            className="shadow w-full p-2"
            placeholder="Enter your password"
          />
          <button type="submit" className="border p-2">
            Login
          </button>
          <span>
            Already have an account?{" "}
            <Link to="/signUp">
              <Button content="Sign In" className="text-primary-sky-blue" />
            </Link>
          </span>
          <Button handleClick={resetPassword} content="Reset password" />
        </form>
      </div>
      <NotistackContainer />
    </div>
  );
};

export default Login;
