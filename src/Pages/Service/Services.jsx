import React, { useRef } from "react";
import "./services.css";
import { SiMarketo } from "react-icons/si";
import { MdPayment } from "react-icons/md";
import { MdSupportAgent } from "react-icons/md";
import { FaAngleDoubleDown } from "react-icons/fa";

const Services = () => {
  const serviceContent = [
    {
      header: "Online Marketplace Platform",
      icon: <SiMarketo />,
      paragraph:
        "The primary service of a C2C website is to provide an online marketplace platform where individual consumers can buy and sell goods directly to each other. ",
    },
    {
      header: "Payment Processing",
      icon: <MdPayment />,
      paragraph:
        "C2C websites typically offer payment processing services to facilitate secure transactions between buyers and sellers. ",
    },
    {
      header: "Dispute Resolution and Customer Support",
      icon: <MdSupportAgent />,
      paragraph:
        "C2C websites often provide dispute resolution mechanisms and customer support services to handle issues that may arise during transactions. ",
    },
    {
      header: "Payment Processing",
      icon: <MdPayment />,
      paragraph:
        "C2C websites typically offer payment processing services to facilitate secure transactions between buyers and sellers. ",
    },
    {
      header: "Dispute Resolution and Customer Support",
      icon: <MdSupportAgent />,
      paragraph:
        "C2C websites often provide dispute resolution mechanisms and customer support services to handle issues that may arise during transactions. ",
    },
    {
      header: "Payment Processing",
      icon: <MdPayment />,
      paragraph:
        "C2C websites typically offer payment processing services to facilitate secure transactions between buyers and sellers. ",
    },
    {
      header: "Dispute Resolution and Customer Support",
      icon: <MdSupportAgent />,
      paragraph:
        "C2C websites often provide dispute resolution mechanisms and customer support services to handle issues that may arise during transactions. ",
    },
  ];
  const parentRef = useRef(null);

  const moveDown = () => {
    // Scroll down by 100 pixels
    parentRef.current.scrollTop += 100;
  };

  return (
    <section className="services  w-full  items-center shadow-2xl  p-4 rounded-lg">
      <div className="h-screen flex flex-col justify-between">
        <div className="flex justify-between p-4">
          <div className="text-center text-white font-semibold text-4xl clip">
            <h2>Our Services</h2>
          </div>
          <div className="bg-text-color p-2 font-semibold text-xl rounded-lg">
            <button>Explore All Services</button>
          </div>
        </div>
        <div className="cool-radius parent__Card  z-10 relative">
          <div className="animate-bounce p-2 absolute bottom-0 left-1/2 z-40 text-3xl">
            <button onClick={moveDown}>
              <FaAngleDoubleDown className="text-text-color" />
            </button>
          </div>
          <div className="circleBehind absolute -left-9 -top-5 z-50"></div>
          <div
            className="grid grid-cols-3 p-4 h-96 gap-4 overflow-y-scroll scroll-smooth"
            ref={parentRef}
          >
            {serviceContent.map((content, index) => (
              <div
                key={index}
                className="flex flex-col gap-8 p-8 text-background-color card border-text-color border items-center"
              >
                <div>
                  <h2>{content.header}</h2>
                </div>
                <div className="border rounded-full border-background-color">
                  <button className="text-text-color text-2xl font-black p-2">
                    {content.icon}
                  </button>
                </div>
                <div>{content.paragraph}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <h2 className="text-3xl">
            Ready To Get Started With Customer2Customer?
          </h2>
          <div className="bg-text-color p-2 font-semibold text-xl rounded-lg">
            <button>
                Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
