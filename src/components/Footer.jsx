import React from 'react';
import { CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { BiLogoGmail } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className="bg-gray-800  items-center text-center gap-5 ">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {/* Strength of Execution */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Strength of Execution</h3>
            <p className="text-gray-400">
              We have a strong track record of execution and commissioning of projects on time.
            </p>
          </div>
          {/* Construction & Erection */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-white mb-4">Construction & Erection</h3>
            <p className="text-gray-400">
              SEPL offers the benefits of one decade of experience in erection & construction.
            </p>
          </div>
          {/* Excellence */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-lg font-bold text-white mb-4">Excellence</h3>
            <p className="text-gray-400">
              Our achievements are a testimony to our mission of attaining excellence in infrastructure.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex text-center justify-between items-center">
          <div className="text-white flex justify-center items-center text-center">
            &copy; Kulswamini Enterprises Limited
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
            <a href="https://gmail.com" className="text-gray-400 hover:text-white">
                  <BiLogoGmail className="social-icon" size={"24px"} />
                </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
