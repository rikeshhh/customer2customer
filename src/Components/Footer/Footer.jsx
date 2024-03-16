import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { FaAmazon, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./footer.css";
function Footer() {
  const listItems = [
    {
      header: "Product",
      list: "Lorem Ispsum",
    },
  ];
  return (
    <>
      <footer className=" body-font   content-wrapper text-xl">
        {/* <div className="content-wrapper px-5 py-8 mx-auto flex items-center sm:flex-row flex-col ">
          <div className="text-2xl">
            <Link to="/">
              <h1 className="flex p-1 gap-1 text-[#F64C72]">
                Customer
                <figure>
                  <img src={logo} alt="" className="w-12" />
                </figure>
                Customer
              </h1>
            </Link>
          </div>
        </div> */}
        {/* <div className="flex w-full justify-between">
          <div className="w-1/2 flex flex-col">
            <div className="text-2xl font-bold">
              <h2>Have a look at our unique selling proportions</h2>
            </div>
            <div>
              <button className="bg-text-color p-2 font-semibold text-xl rounded-lg">
                Read More
              </button>
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <div className="font-bold">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt veniam, in possimus quos error dicta modi aliquid,
                minus praesentium sunt alias id doloremque illo iure veritatis
                totam esse? Debitis, aut!
              </p>
            </div>
            <div className="flex">
              <div className="flex flex-col">
                <div className="text-4xl font-bold text-text-color">
                  <h2>100%</h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum perferendis adipisci minus incidunt unde aliquid modi,
                    tempore veniam quae beatae nihil ipsam quibusdam? Dolorem
                    labore adipisci, voluptatibus nam earum enim.
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-4xl font-bold text-text-color">
                  <h2>100%</h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum perferendis adipisci minus incidunt unde aliquid modi,
                    tempore veniam quae beatae nihil ipsam quibusdam? Dolorem
                    labore adipisci, voluptatibus nam earum enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col justify-center items-center py-12 gap-8">
          <div className="py-6 text-4xl font-black">
            <h2>Do you want to join us?</h2>
          </div>
          <div className="text-center px-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              suscipit, minus ratione expedita ab ex maiores in neque assumenda
              animi quos? Aspernatur laboriosam doloribus eum quidem ipsam cum
              placeat nemo?
            </p>
          </div>
          <div>
            <Button
              content="Join us"
              className=" bg-[#F64C72] text-white transition duration-300 ease-in-out p-2 border rounded-lg w-full "
            />
          </div>
        </div>
        <div className="border-t-2 border-b-2 flex justify-between py-12">
          <div className="text-3xl font-black flex justify-center items-center hover:text-text-color">
            <h3>Customer2Customer</h3>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-3xl text-text-color font-black">
              <h2>Partnership</h2>
            </div>
            <div className="font-thin text-base">
              <ul>
                <li>Google</li>
                <li>Airbnb</li>
                <li>All express</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-3xl text-text-color font-black">
              <h2>About</h2>
            </div>
            <div className="font-thin text-base">
              <ul>
                <li>Google</li>
                <li>Airbnb</li>
                <li>All express</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-3xl text-text-color font-black">
              <h2>Support</h2>
            </div>
            <div className="font-thin text-base">
              <ul>
                <li>Google</li>
                <li>Airbnb</li>
                <li>All express</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-3xl text-text-color font-black">
              <h2>Follow us</h2>
            </div>
            <div className="font-thin text-base">
              <ul className="flex justify-between text-text-color">
                <FaInstagram />
                <li>
                  <FaGithub />
                </li>
                <li>
                  <FaAmazon />
                </li>
                <li>
                  <FaLinkedin />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
