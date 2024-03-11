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
    <div>
      <h2>User Profile</h2>
      {userData ? (
        <div>
          {userData.map((product) => (
            <div key={product.id}>
              <p>Name: {product.name}</p>
              <img src={product.imageUrl} />
              <p>Description:{product.productDescrip}</p>
              {/* Display other product data as needed */}
              <button onClick={() => handleDelete(product.id)}>Delete</button>
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
