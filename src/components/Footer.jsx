import React from 'react';
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoGmail } from 'react-icons/bi';
import logo from '../logos/proflogo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 font-sans">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Strength of Execution</h3>
          <p className="text-gray-400 text-sm">
            We have a strong track record of execution and commissioning of projects on time.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Construction & Erection</h3>
          <p className="text-gray-400 text-sm">
            SEPL offers the benefits of one decade of experience in erection & construction.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
          <p className="text-gray-400 text-sm">
            Our achievements are a testimony to our mission of attaining excellence in infrastructure.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and copyright */}
        <div className="flex items-center gap-3 text-sm text-gray-400 mb-4 md:mb-0">
          {/* <img src={logo} alt="Logo" className="h-10 w-auto object-contain" /> */}
          <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                K<span className="text-orange-500">E</span>
              </h1>
          <span>&copy; {new Date().getFullYear()} Kulswamini Enterprises. All rights reserved.</span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-5">
          <a href="https://facebook.com" target="_blank" className="hover:text-white transition duration-300">
            <CiFacebook size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" className="hover:text-white transition duration-300">
            <AiOutlineInstagram size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-white transition duration-300">
            <CiTwitter size={24} />
          </a>
          <a href="mailto:your-email@example.com" className="hover:text-white transition duration-300">
            <BiLogoGmail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
