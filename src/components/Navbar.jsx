import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { navItems } from "../data";

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="relative flex items-center">
              <Link
                to="/"
                className="flex items-center py-4 px-2 font-semibold text-gray-500 text-lg"
              >
                MedInfo
              </Link>
            </div>
            <div className="absolute right-3 -top-2 md:hidden z-50">
              <button
                onClick={toggleMenu}
                className="text-gray-500 py-4 px-2 ml-2"
              >
                {isOpen ? <IoMdClose size={40} /> : <IoMdMenu size={40} />}
              </button>
            </div>
            <div
              className={`fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-4 border-b">
                  <Link
                    to="/"
                    onClick={handleLinkClick}
                    className="font-semibold text-gray-500 text-xl"
                  >
                    MedInfo
                  </Link>
                </div>
                <div className="flex-grow overflow-y-auto">
                  {navItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={handleLinkClick}
                      className="block py-4 px-6 text-xl text-gray-500 hover:bg-gray-100 transition duration-300"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="p-4 border-t">
                  <Link
                    to="/login"
                    onClick={handleLinkClick}
                    className="block w-full py-3 px-4 mb-3 font-medium text-center text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 transition duration-300"
                  >
                    Log In
                  </Link>
                  <Link
                    to="/signup"
                    onClick={handleLinkClick}
                    className="block w-full py-3 px-4 font-medium text-center text-white bg-purple-500 rounded-md hover:bg-purple-600 transition duration-300"
                  >
                    Sign Up
                  </Link>
                </div>
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
