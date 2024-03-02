import React, { useRef, useState } from "react";
import { firestore } from "../../firebase/firebase";
import { addDoc, collection } from "@firebase/firestore";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const messagesCollectionRef = collection(firestore, "messages");
  const navigate = useNavigate();

  const signIn = async (e) => {
    //sign in
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/authDetail");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={signIn}
        className="flex flex-col w-96 justify-center items-center border h-screen"
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
    </div>
  );
};

export default Login;
