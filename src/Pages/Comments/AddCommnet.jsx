import React from "react";
import Model from "../../Components/Model/Model";
import { useForm } from "react-hook-form";
import Button from "../../Components/Button/Button";
import { CiStar } from "react-icons/ci";
import { LandingCart } from "../LandingCart/LandingCart";
import { auth, firestore } from "../../firebase/firebase";
import { useAuthContext } from "../../Context/AuthContext";
import { useState } from "react";
import { notifyError, notifySuccess } from "../../Components/Notistack/Notices";
import { addDoc, collection } from "firebase/firestore";

const AddCommnet = () => {
  const { authUser, handleSignOut } = useAuthContext();
  const [imageFile, setImageFile] = useState();
  const userBio = authUser ? authUser.bio : ""; // Check if authUser exists before accessing its properties

  console.log(userBio);
  const saveComment = async (data) => {
    try {
      const user = auth.currentUser; // Get the current user
      console.log(user);
      if (user) {
        // Save form data to Firestore
        await addDoc(collection(firestore, "userComment"), {
          ...data,
          userId: user.uid, // Include the userId in the document
        });
        reset();
        notifySuccess("Form data saved successfully!");
      } else {
        console.log("No user signed in");
      }
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <section className="AddComment">
      <div className="py-12 flex flex-col w-full gap-8 border p-2 rounded-lg">
        <div className=" flex justify-center w-full items-center gap-4">
          <div className="flex justify-center items-center">
            <figure className="w-32 h-32">
              <img
                src=""
                alt="image"
                className="object-cover rounded-full w-full h-full border"
              />
            </figure>
          </div>

          <form
            className="flex flex-col w-full gap-6 p-4"
            onSubmit={handleSubmit(saveComment)}
          >
            <div className="flex gap-4 ">
              <div className="w-full">
                <label for="Name" className="mb-3 block text-base font-medium ">
                  Your Name:
                </label>
                <input
                  id="username"
                  {...register("username", {
                    required: Model.Username.required,
                    maxLength: Model.Username.maxLength,
                    pattern: Model.Username.pattern,
                  })}
                  placeholder={Model.Username.placeholder}
                  className="shadow w-full p-2"
                />
                {errors.productAmount && (
                  <span className="text-red-500">
                    {errors.productAmount.message}
                  </span>
                )}
              </div>

              <div className="w-full">
                <label for="Name" className="mb-3 block text-base font-medium ">
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
              </div>
            </div>

            <div>
              <textarea
                rows="4"
                id="productDescrip"
                placeholder="Type your message"
                className={`w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md ${
                  errors.productDescrip ? "border-red-500" : ""
                }`}
                {...register("productDescrip", Model.ProductDescription)} // Apply validation rules
              ></textarea>
              {errors.productDescrip && (
                <span className="text-red-500">
                  {errors.productDescrip.message}
                </span>
              )}
            </div>

            <div className="w-full flex justify-between">
              <div className="flex justify-center items-center gap-6">
                <div>
                  <span>Your Rating</span>
                </div>
                <div className="flex">
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </div>
              </div>

              <div>
                <Button
                  content="Post Review"
                  type="submit"
                  className="bg-[#F64C72] flex justify-center items-center gap-4 text-white px-4 py-2 rounded focus:outline-none"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="SimilarProducts py-12">
        <div className="text-4xl">Similar Products</div>
        <div>
          <LandingCart />
        </div>
      </div>
    </section>
  );
};

export default AddCommnet;
