import React from "react";

const Contact = () => {
  return (
    <section className="ContactUs flex flex-col gap-12">
      <div className=" border rounded-3xl shadow-lg h-56 flex flex-col justify-center items-center">
        <div className="w-full justify-center items-center  flex flex-col gap-2">
          <h2 className="text-4xl font-semibold">More than just a website</h2>
          <div className="font-black">
            <ul className="list-disc">
              <li>Build Your Brand</li>
              <li>Get New Business</li>
              <li>Manage Clients</li>
              <li>Do it yourself</li>
            </ul>
          </div>
          <button className="hover:shadow-form rounded-md bg-primary-sky-blue py-3 px-8 text-base font-semibold text-white outline-none">
            Get Started
          </button>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[550px]">
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
          <div>
            <button className="hover:shadow-form rounded-md bg-primary-sky-blue py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
