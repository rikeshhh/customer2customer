import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestore, auth } from "../firebase/firebase";

const SellerProduct = ({ userUUID }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = auth.currentUser.uid; // Get the current user's ID
        console.log(uuid);
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
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {userData ? (
        <div>
          {userData.map((product) => (
            <div key={product.id}>
              <p>Name: {product.name}</p>
              <p>Email: {product.email}</p>
              {/* Display other product data as needed */}
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
