import React from "react";
import { CiStar } from "react-icons/ci";
import image from "../../assets/dog.jpg";
const Comments = () => {
  return (
    <section className="postedComments">
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

        <div className="flex flex-col">
          <div className="flex justify-between">
            <div>
              <span>Mike Johnson</span>
            </div>
            <div className="flex">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              perspiciatis earum maxime ea vel sint eius cumque tenetur iusto
              quidem nam numquam ut, quam possimus maiores illum libero
              praesentium eligendi!
            </p>
          </div>
          <div className="flex gap-2">
            <span>Like</span>
            <span>Reply</span>
            <span>5m</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
