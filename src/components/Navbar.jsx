import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link
                to="/"
                className="flex items-center py-4 px-2"
              >
                <span className="font-semibold text-gray-500 text-lg">
                  MedInfo
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="#"
                className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300"
              >
                About
              </Link>
              <Link
                to="#"
                className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300"
              >
                Services
              </Link>
              <Link
                to="#"
                className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/login"
              className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="py-2 px-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-400 transition duration-300"
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
