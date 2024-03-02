import React, { useRef, useState } from "react";
import { firestore } from "../../firebase/firebase";
import { addDoc, collection } from "@firebase/firestore";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const messagesCollectionRef = collection(firestore, "messages");

  const signIn = async (e) => {
    //sign in
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form
      onSubmit={signIn}
      className="flex flex-col w-96 justify-center items-center"
    >
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

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
