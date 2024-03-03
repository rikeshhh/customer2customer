// Import useState hook to manage image state
import React, { useState } from "react";
import { firestore } from "../../firebase/firebase";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import SellerData from "../../Pages/Buyer/SellerData";
import { storage } from "../../firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
const Seller = ({ handleSignOut, authUser }) => {
  const { register, handleSubmit } = useForm();
  // State to store the selected image file
  const [imageFile, setImageFile] = useState(null);

  const saveInfo = async (data) => {
    try {
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
        imageUrl: imageUrl, // Include the imageUrl in the document
      });

      console.log("Form data saved successfully!");
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  };

  // Handler function to update imageFile state when user selects an image
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0], () => {
      console.log(imageFile); // This will log the updated state value
    });
  };

  return (
    <section className="SellerPage">
      <div>
        <p>{`Signed in as ${authUser.email}`}</p>
        <button onClick={handleSignOut}>Sign Out</button>
        <form onSubmit={handleSubmit(saveInfo)} className="flex flex-col">
          <input
            type="Name"
            placeholder="Enter the name"
            {...register("name")}
          />
          <input
            type="text"
            placeholder="Enter the product info"
            {...register("productName")}
          />
          <input
            type="text"
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
            {...register("productAmount")}
          />
          <button type="submit">Proceed</button>
        </form>
      </div>
    </section>
  );
};

export default Seller;
