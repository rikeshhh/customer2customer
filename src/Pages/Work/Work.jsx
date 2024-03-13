import React from "react";
import { MdOutlinePermIdentity } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { MdVerified } from "react-icons/md";

const Work = () => {
  const workContent = [
    {
      icon: <MdOutlinePermIdentity />,
      header: "Create an account",
      paragraph: "Sign up and create your personalized account to get started.",
    },
    {
      icon: <MdVerified />,
      header: "Get Authorization",
      paragraph: "Get authorized access to our exclusive services with ease.",
    },
    {
      icon: <BsEmojiSmile />,
      header: "Enjoy the Services",
      paragraph:
        "Sit back, relax, and enjoy our top-notch services hassle-free.",
    },
  ];

  return (
    <section className="HowWeWork py-4">
      <div className="content-wrapper font-semibold text-center flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold">How it works?</h2>
        <div className="grid grid-cols-3 text-center py-24 gap-8">
          {workContent.map((content, index) => (
            <div
              key={index}
              className="p-4 flex flex-col justify-center items-center gap-6 border-r-2"
            >
              <p className="text-4xl text-[#F64C72] font-black">
                {content.icon}
              </p>
              <h2>{content.header}</h2>
              <p>{content.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
