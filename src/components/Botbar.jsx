import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";

const Botbar = () => {
  return (
    <div className="bg-gray-900 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="text-white flex justify-center text-center">
          &copy; Kulswamini Enterprises Private Limited
        </div>
        <div className="social flex gap-6">
            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
              <CiFacebook className="social_icon-twitter s-14" size={"24px"}/>
            </a>
            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
              <AiOutlineInstagram className="social_icon-facebook s-18" size={"24px"}/>
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
              <CiTwitter className="social_icon-gplus s-18" size={"24px"}/>
            </a>
          </div>
      </div>
    </div>
  );
};

export default Botbar;
