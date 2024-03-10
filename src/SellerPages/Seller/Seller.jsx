// Import useState hook to manage image state
import React, { useState } from "react";
import { firestore } from "../../firebase/firebase";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import SellerData from "../../Pages/Buyer/SellerData";
import { storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useAuthContext } from "../../Context/AuthContext";
import { notifyError, notifySuccess } from "../../Components/Notistack/Notices";
import NotistackContainer from "../../Components/Notistack/NotistackContainer";
const Seller = () => {
  const { authUser, handleSignOut } = useAuthContext();
  const { register, handleSubmit } = useForm();
  // State to store the selected image file
  const [imageFile, setImageFile] = useState();

  const saveInfo = async (data) => {
    try {
      const user = auth.currentUser; // Get the current user
      console.log(user)
      if (user) {
        // Upload image file to Firestore Storage
        let imageUrl = ""; // Initialize imageUrl variable

        if (imageFile) {
          const storageRef = ref(storage, `images/${imageFile.name}`);
          await uploadBytes(storageRef, imageFile);

          // Get the download URL of the uploaded image
          imageUrl = await getDownloadURL(storageRef);
        }

        // Save form data to Firestore
        await addDoc(collection(firestore, "sellerData"), {
          ...data,
          imageUrl: imageUrl,
          userId: user.uid, // Include the userId in the document
        });

        notifySuccess("Form data saved successfully!");
      } else {
        console.log("No user signed in");
      }
    } catch (error) {
      console.error("Error saving form data:", error);
      notifyError(error);
    }
  };

  // Handler function to update imageFile state when user selects an image
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0], () => {
      console.log(imageFile); // This will log the updated state value
    });
  };
  console.log(authUser);
  return (
    <>
      {authUser ? (
        <section className="sellerpage flex justify-center items-center h-screen">
          <div>
            <form onSubmit={handleSubmit(saveInfo)} className="flex flex-col">
              <input
                type="Name"
                className="mr-1 shadow  w-full p-2 border"
                placeholder="Enter the name"
                {...register("name")}
              />
              <input
                type="text"
                className="mr-1 shadow  w-full p-2 border"
                placeholder="Enter the product info"
                {...register("productName")}
              />
              <input
                type="text"
                className="mr-1 shadow  w-full p-2 border"
                placeholder="Enter the product description"
                {...register("productDescrip")}
              />
              <input
                type="file"
                {...register("imageUrl")}
                onChange={handleImageChange} // Call handleImageChange when a file is selected
              />
              <input
                type="text"
                placeholder="Enter the amount"
                className="mr-1 shadow  w-full p-2 border"
                {...register("productAmount")}
              />
              <button type="submit">Proceed</button>
            </form>
          </div>
        </section>
      ) : (
        ""
      )}
      <NotistackContainer />
    </>
  );
};

export default Seller;
