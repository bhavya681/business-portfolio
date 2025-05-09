import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50">
      <div className="bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                K<span className="text-orange-500">E</span>
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <li>
                  <Link
                    to="/"
                    className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="text-gray-600 hover:text-orange-500 transition-colors duration-200 font-medium"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="px-4 py-2 text-white bg-orange-500 hover:bg-orange-600 rounded-md transition-colors duration-200 font-medium"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <IoMdClose size={24} />
              ) : (
                <RxHamburgerMenu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:hidden border-t border-gray-200`}
        >
          <nav className="container mx-auto px-4 py-3">
            <ul className="space-y-1">
              <li>
                <Link
                  to="/"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="block px-3 py-2 rounded-md text-gray-600 hover:text-orange-500 hover:bg-gray-50 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block px-3 py-2 rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
