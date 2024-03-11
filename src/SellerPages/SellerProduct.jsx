import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { firestore, auth } from "../firebase/firebase";

const SellerProduct = ({ userUUID }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = auth.currentUser.uid; // Get the current user's ID
        const q = query(
          collection(firestore, "sellerData"),
          where("userId", "==", userId)
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUserData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);
  const handleDelete = async (productId) => {
    try {
      // Construct a reference to the document to be deleted
      const docRef = doc(firestore, "sellerData", productId);
      // Delete the document from Firestore
      await deleteDoc(docRef);
      // Remove the deleted product from the state
      setUserData((prevData) =>
        prevData.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl font-black">User Profile</h2>
      {userData ? (
        <div className="grid grid-cols-4 gap-4">
          {userData.map((product) => (
            <div
              key={product.id}
              className="flex border flex-col justify-start p-4 rounded-lg gap-2 font-black "
            >
              <p>Name: {product.name}</p>
              <figure>
                <img src={product.imageUrl} />
              </figure>
              <p>Description:{product.productDescrip}</p>
              {/* Display other product data as needed */}
              <button
                onClick={() => handleDelete(product.id)}
                className=" hover:bg-black hover:text-white transition duration-300 ease-in-out p-4 border rounded-lg bg-primary-sky-blue"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default SellerProduct;
