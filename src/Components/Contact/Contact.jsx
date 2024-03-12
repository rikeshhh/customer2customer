import React from "react";
import contact from "../../assets/chat.png";
const Contact = () => {
  return (
    <section className="ContactUs">
      {/* <div className="p-2">
            <ul className=" flex justify-between p-1 gap-4  ">
              <li className=" p-2 bg-[#F64C72] ">Build Your Brand</li>
              <li className=" p-2 bg-[#F64C72]">Get New Business</li>
              <li className=" p-2 bg-[#F64C72]">Manage Clients</li>
              <li className=" p-2 bg-[#F64C72]">Do it yourself</li>
            </ul>
          </div> */}
      <div className="flex p-12 gap-2">
        <div className=" shadow-lg  flex flex-col  justify-between items-start">
          <div className="text-[#F64C72] text-4xl font-semibold">
            <h2 className="text-left">"More than just a website"</h2>
          </div>

          <figure>
            <img
              src={contact}
              alt=""
              className="hover:translate-y-3 animate-pulse"
            />
          </figure>
        </div>

        <div className="mx-auto w-full max-w-[450px]">
          <form action="https://formspree.io/f/xgegznql" method="POST">
            <div className="mb-5">
              <label
                for="name"
                className="mb-3 block text-base font-medium text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="email"
                className="mb-3 block text-base font-medium text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="subject"
                className="mb-3 block text-base font-medium text-white"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="message"
                className="mb-3 block text-base font-medium text-white"
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <button className="hover:shadow-form w-full  rounded-md bg-[#F64C72] py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
