import React from 'react';
import { GrAchievement } from 'react-icons/gr';
import { LiaCertificateSolid } from 'react-icons/lia';
import { CiFacebook, CiTwitter } from 'react-icons/ci';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="top-bar bg-gray-800">
      <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Left side */}
          <div className="phone-mail text-white md:flex md:items-center">
            <Link to="/" className="flex items-center text-gray-400 hover:text-white">
              <GrAchievement className="hidden md:inline-block h-6 mr-2" size={24} />
              <span className="hidden md:inline-block">Achievements</span>
            </Link>
            <Link to="/" className="flex items-center text-gray-400 hover:text-white ml-4">
              <LiaCertificateSolid className="hidden md:inline-block h-6 mr-2" size={24} />
              <span className="hidden md:inline-block">Certificates</span>
            </Link>
          </div>
          {/* Right side */}
          <div className="social flex gap-6 mt-4 md:mt-0">
            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
              <CiFacebook className="h-6" size={24} />
            </a>
            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
              <AiOutlineInstagram className="h-6" size={24} />
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
              <CiTwitter className="h-6" size={24} />
            </a>
            <a href="https://gmail.com" className="text-gray-400 hover:text-white">
              <BiLogoGmail className="h-6" size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
