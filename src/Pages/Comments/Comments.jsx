import React, { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import image from "../../assets/dog.jpg";
import { firestore } from "../../firebase/firebase";
import { notifyError } from "../../Components/Notistack/Notices";
import { collection, getDocs } from "firebase/firestore";
const Comments = () => {
  const [userCommnet, setUserComment] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const sellerDataRef = collection(firestore, "userComment");
        const snapshot = await getDocs(sellerDataRef);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setUserComment(data);
      } catch (error) {
        console.error("Error fetching seller data:", error);
        notifyError("Failed to fetch seller data");
      }
    };
    fetchData();
  }, []);
  console.log(userCommnet);
  return (
    <section className="postedComments">
    {userCommnet.map((comments)=>(
        <div className="flex w-full border justify-start gap-4 items-center p-2 rounded-lg">
        <div className="flex justify-center items-center">
          <figure className="w-32 h-32">
            <img
              src={image}
              alt=""
              className="object-cover rounded-full w-full h-full border"
            />
          </figure>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex justify-between">
            <div>
              <span>{comments.username}</span>
            </div>
            <div className="flex">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
          </div>

          <div className="flex flex-col justify-between w-full">
            <p>
            {comments.productDescrip}
            </p>
          </div>
          <div className="flex gap-2">
            <span>Like</span>
            <span>Reply</span>
            <span>5m</span>
          </div>
        </div>
      </div>
    ))}
    </section>
  );
};

export default Comments;
