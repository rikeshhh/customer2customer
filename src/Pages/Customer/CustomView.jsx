import React, { useState } from "react";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import speakerOne from "../../assets/speakerOne.jpg";
import speakerTwo from "../../assets/speakerTwo.jpg";
import speakerThree from "../../assets/speakerThree.jpg";

export const CustomView = () => {
  const customView = [
    {
      comment: "Great experience, highly recommended!",
      commentator: "John Doe",
      workAt: "Tech Solutions Inc.",
      Image: speakerOne,
      videoLink:
        "https://www.youtube.com/embed/TUixriAK3m4?si=WI-7PT9KHv6LZpDA",
      width: 25,
    },
    {
      comment: "Excellent service and fast delivery!",
      commentator: "Jane Smith",
      workAt: "Digital Innovations",
      Image: speakerTwo,
      videoLink:
        "https://www.youtube.com/embed/TUixriAK3m4?si=WI-7PT9KHv6LZpDA",
      width: 50,
    },
    {
      comment: "Superb quality products and fantastic support!",
      commentator: "Alex Johnson",
      workAt: "Web Solutions Ltd.",
      Image: speakerThree,
      videoLink:
        "https://www.youtube.com/embed/TUixriAK3m4?si=WI-7PT9KHv6LZpDA",
      width: 100,
    },
  ];
  const [index, setIndex] = useState(1);
  const nextIndex = () => {
    setIndex((prevIndex) =>
      prevIndex < customView.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const prevIndex = () => {
    setIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };
  return (
    <section className="h-screen w-full py-12 max-sm:p-0 max-sm:h-auto">
      <div className="pt-40">
        <div className="flex justify-between items-center max-sm:flex-col">
          <div className="font-semibold text-4xl w-1/2 ">
            <h2>Elevating C2C Experiences!</h2>
          </div>
          <div className="bg-text-color p-2 font-semibold text-xl rounded-lg">
            <button>View All Success Stories</button>
          </div>
        </div>
        <div className="flex w-full justify-between items-center gap-12 py-12 max-sm:flex-col">
          <iframe
            className="w-1/2 h-60 rounded-2xl"
            src={customView[0].videoLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="w-1/2 flex flex-col justify-start  gap-4">
            <div>
              <figure className=" rounded-full  w-32 h-32">
                <img
                  src={customView[index].Image}
                  alt=""
                  className="object-cover rounded-full w-32 h-32"
                />
              </figure>
            </div>
            <div className="w-full text-2xl font-semibold ">
              <p>{customView[index].comment}</p>
            </div>
            <div className="flex flex-col py-6">
              <h2>{customView[index].commentator}</h2>
              <p>{customView[index].workAt}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-6 max-sm:flex-col">
          <ProgressBar rate={customView[index].width} />
          <div className="flex justify-end gap-4">
            <button
              onClick={prevIndex}
              className="bg-text-color p-2 font-semibold text-xl rounded-lg"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextIndex}
              className="bg-text-color p-2 font-semibold text-xl rounded-lg"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Function to extract video ID from YouTube link
