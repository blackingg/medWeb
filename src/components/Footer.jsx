import React from "react";
import { Link } from "react-router-dom";
import getOnApple from "../assets/getOnApple.svg";
import getOnPlaystore from "../assets/getOnPlaystore.svg";
import { navItems, Socials, Legal } from "../data";

const Footer = () => {
  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <footer className="relative bg-[#260e3b] text-white mt-16">
      <div className="absolute container -top-[7%] translate-y-3/4 md:-top-1/4 md:translate-y-3/4 left-1/2 -translate-x-1/2 bg-purple-600 p-5 rounded-xl h-fit w-[60%]">
        <div className="flex justify-center items-center space-x-4 ">
          <button>
            <Link to={"#"}>
              <img
                src={getOnPlaystore}
                alt="getOnPlaystore"
                className="w-full lg:w-[70%]"
              />
            </Link>
          </button>
          <button>
            <Link to={"#"}>
              <img
                src={getOnApple}
                alt="getOnApple"
                className="w-full lg:w-[70%]"
              />
            </Link>
          </button>
        </div>
      </div>
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Links</h5>
            <ul className="mb-4">
              {navItems.map((item) => (
                <li className="mt-2">
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={handleLinkClick}
                    className="hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul className="mb-4">
              {Legal.map((item) => (
                <li className="mt-2">
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="hover:underline"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Social</h5>
            <ul className="mb-4">
              {Socials.map((item) => (
                <li className="mt-2">
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="hover:underline"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Company</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link
                  to="#"
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
