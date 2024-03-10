import React, { useRef, useState } from "react";
import { firestore } from "../../firebase/firebase";
import { addDoc, collection } from "@firebase/firestore";
import { auth } from "../../firebase/firebase";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Signup from "../Signup/Signup";
import Button from "../../Components/Button/Button";
import { notifyError, notifySuccess } from "../../Components/Notistack/Notices";
import NotistackContainer from "../../Components/Notistack/NotistackContainer";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const messagesCollectionRef = collection(firestore, "users");
  const navigate = useNavigate();
  const [error, setError] = useState();
  //resetPassword sends an email to the user to reset the email with the helo of sendPasswordResetEmail
  const resetPassword = () => {
    const email = prompt("please enter your email");
    sendPasswordResetEmail(auth, email);
    alert("email send check your inboc for password resetr instruction");
  };
  const signIn = async (e) => {
    //sign in
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        notifySuccess("login successful");
        setTimeout(() => {
          navigate("/authDetail");
        }, 1000);
      })
      .catch((error) => {
        notifyError(error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center  h-screen gap-12">
      <h3>"Welcome to C2C platform"</h3>
      <div>
        <form
          onSubmit={signIn}
          className="flex flex-col w-96 justify-center items-center  gap-4"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mr-1 shadow  w-full p-2"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mr-1 shadow w-full p-2"
            placeholder="Enter your password"
          />

          <button type="submit">Login</button>
          <span>
            Already have an account?{" "}
            <Link to="/signUp">
              <Button
                content="Sign In"
                className="text-primary-sky-blue border p-2"
              />
            </Link>
          </span>
          <Button handleClick={resetPassword} content="Reset password" />
        </form>
        {error && <>{notifyError(error)}</>}
      </div>
    </div>
  );
};

export default Login;
