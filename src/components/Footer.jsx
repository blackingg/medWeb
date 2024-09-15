import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Links</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link
                  to="/"
                  className="hover:underline"
                >
                  Home
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/"
                  className="hover:underline"
                >
                  About
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/"
                  className="hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link
                  to="/"
                  className="hover:underline"
                >
                  Terms of Use
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/"
                  className="hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Social</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline"
                >
                  Twitter
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Company</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link
                  to="/"
                  className="hover:underline"
                >
                  Blog
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/"
                  className="hover:underline"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-white font-bold mb-2">
              © 2024 MedInfo. All rights reserved.
            </p>
            <p className="text-sm text-white font-bold mb-2">
              Built with Love by Mubarak Odetunde:{" "}
              <a
                href="https://mubarakodetunde-portfolio.netlify.app"
                className="hover:underline hover:text-green-300"
              >
                https://mubarakodetunde-portfolio.netlify.app
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
