import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { BiLogoGmail } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {
  return (
    <div>
      <div className="bg-orange-500 py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl text-center text-white font-bold">Contact us</h1>
        </div>
      </div>

      <div className="container mx-auto my-8 flex justify-center items-center text-center min-h-[30rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-2">
            <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
              <h2 className="text-xl font-bold mb-4">Contact Info</h2>
              <ul className="text-gray-700">
                <li className="mb-2">
                  Shop No.-29 & 89, Shivaji Complex
                  <br />
                  (Navjeevan Vihar, P.O.-Vindhyanagar,
                  <br />
                  Distt. Singraulli (M.P.)- 486885
                </li>
                <li className="mb-2">07805 244236</li>
                <li className="mb-2">corporationshivam@gmail.com</li>
              </ul>

              <h2 className="text-xl font-bold mt-6 mb-4 ">Social Contact</h2>
              <div className="flex space-x-4 justify-center text-center items-center">
                <a href="https://twitter.com" className="text-gray-800 hover:text-orange-500">
                  <FaTwitter className="social-icon" size={"24px"} />
                </a>
                <a href="https://facebook.com" className="text-gray-800 hover:text-orange-500">
                  <FaFacebook className="social-icon" size={"24px"} />
                </a>
                <a href="https://instagram.com" className="text-gray-800 hover:text-orange-500">
                  <AiFillInstagram className="social-icon" size={"24px"} />
                </a>
                <a href="https://gmail.com" className="text-gray-800 hover:text-orange-500">
                  <BiLogoGmail className="social-icon" size={"24px"} />
                </a>
              </div>
            </div>
          </div>

          <div className="md:order-1 ">
            <div className="bg-white rounded-lg shadow-md p-4 cursor-pointer">
              <h2 className="text-xl font-bold mb-4">Google Map Location</h2>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Boisar+Mumbai+Maharashtra+India"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQk_eT0NLGzDbClrdTQZsNGpdjUdcfT4kLY5Q4F6NeMsYOXXYQvDK-uvEoEmBz55Zz80&usqp=CAU"
                  alt="Google Map"
                  className="w-full  rounded-lg cursor-pointer h-[14rem]"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
