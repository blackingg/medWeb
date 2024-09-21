import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { navItems } from "../data";
import Search from "./Search";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link
                to="/"
                className="flex items-center py-4 px-2 font-semibold text-gray-500 text-lg"
              >
                MedInfo
              </Link>
              <div className="absolute right-0 top-0 z-20 md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-gray-500 py-4 px-2"
                >
                  {isOpen ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                </button>
              </div>
            </div>
            <div
              className={`absolute flex flex-col md:hidden bg-gray-100 px-2 pb-2 w-[40%] z-40 top-14 right-0 rounded-b-md ${
                isOpen ? "block" : "hidden"
              }`}
            >
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={handleLinkClick}
                  className="py-4 px-2 text-gray-500 hover:text-purple-500 transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col md:hidden items-center">
                <Link
                  to="/login"
                  onClick={handleLinkClick}
                  className="py-4 px-4 w-full font-medium text-gray-500 hover:bg-purple-500 transition duration-300"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  onClick={handleLinkClick}
                  className="py-4 px-4 rounded-md w-full font-medium text-white bg-purple-500 hover:bg-purple-400 transition duration-300"
                >
                  Sign Up
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={handleLinkClick}
                  className="py-4 px-2 text-gray-500 hover:text-purple-500 transition duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/login"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-purple-500 hover:text-white transition duration-300"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="py-2 px-2 font-medium text-white bg-purple-800 rounded hover:bg-purple-900 transition duration-300"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
