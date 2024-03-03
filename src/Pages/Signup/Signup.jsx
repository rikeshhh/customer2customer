import React, { useRef, useState } from "react";
import { firestore } from "../../firebase/firebase";
import { addDoc, collection } from "@firebase/firestore";
import { auth } from "../../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [accountType, setAccountType] = useState();
  const signUp = async (e) => {
    //sign in
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      onSubmit={signUp}
      className="flex flex-col w-96 justify-center items-center"
    >
      {/* <input
        value={accountType}
        onChange={(e) => setAccountType(e.target.value)}
        className="border"
        placeholder="Enter your accountType"
      /> */}
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border"
        placeholder="Enter your email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border"
        placeholder="Enter your password"
      />

      <button type="submit">SignUp</button>
    </form>
  );
};

export default Signup;
