// Import useState hook to manage image state
import React, { useState } from "react";
import { auth, firestore } from "../../firebase/firebase";
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
  const { register, handleSubmit, reset } = useForm();
  // State to store the selected image file
  const [imageFile, setImageFile] = useState();

  const saveInfo = async (data) => {
    try {
      const user = auth.currentUser; // Get the current user
      console.log(user);
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
        reset();
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
        <section className="sellerpage justify-center items-center w-full  gap-8 ">
          <div className="flex justify-center items-center w-full">
            <div className="w-1/2 flex justify-center items-center flex-col">
              <div className="flex flex-col gap-8">
                <h2 className="text-2xl text-[#F64C72] font-black">
                  "Rules to follow"
                </h2>
                <ul className="list-inside list-decimal flex flex-col items-start justify-center gap-2">
                  <li>Provide accurate product descriptions.</li>
                  <li>
                    Use high-quality images that accurately represent the
                    product.
                  </li>
                  <li>
                    Include relevant product details such as size, color,
                    material, etc.
                  </li>
                  <li>
                    Specify the condition of the product (new, used,
                    refurbished, etc.).
                  </li>
                  <li>Set fair and competitive prices.</li>
                  <li>
                    Ensure that the product is legal to sell and complies with
                    all applicable regulations.
                  </li>
                  <li>
                    Provide clear and honest information about shipping and
                    delivery times.
                  </li>
                  <li>
                    Be responsive to customer inquiries and provide excellent
                    customer service.
                  </li>
                  <li>
                    Honor any warranties or guarantees offered with the product.
                  </li>
                </ul>
              </div>
            </div>
            <div className=" p-4  rounded-2xl w-1/2">
              <form
                onSubmit={handleSubmit(saveInfo)}
                className="flex flex-col gap-2 text-[#F64C72]"
              >
                <label for="Name" className="mb-3 block text-base font-medium ">
                  Name:
                </label>
                <input
                  type="Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  placeholder="Enter the name"
                  {...register("name")}
                />
                <label for="Name" className="mb-3 block text-base font-medium">
                  Product Name:
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  placeholder="Enter the product info"
                  {...register("productName")}
                />
                <div className="mb-5">
                  <label
                    for="message"
                    className="mb-3 block text-base font-medium "
                  >
                    Product Description:
                  </label>
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    placeholder="Type your message"
                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    {...register("productDescrip")}
                  ></textarea>
                </div>

                <input
                  type="file"
                  {...register("imageUrl")}
                  onChange={handleImageChange} // Call handleImageChange when a file is selected
                />
                <label for="Name" className="mb-3 block text-base font-medium ">
                  Product Amount:
                </label>
                <input
                  type="text"
                  placeholder="Enter the amount"
                  className="mr-1 shadow  w-full p-2 border "
                  {...register("productAmount")}
                />
                <button
                  type="submit"
                  className="hover:shadow-form rounded-md bg-[#F64C72] py-3 px-8 text-base font-semibold text-white outline-none"
                >
                  Proceed
                </button>
              </form>
            </div>
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
