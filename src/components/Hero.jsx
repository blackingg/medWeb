import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-heroBackground bg-no-repeat bg-center bg-cover h-screen flex flex-col justify-center items-center">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <h1 className="font-sans text-4xl md:text-5xl font-bold mb-4 text-center text-white px-2 z-10">
        Medical Information for the Modern Era
      </h1>
      <p className="text-base lg:text-xl mb-8 text-center text-[#b1b1b1] max-w-2xl px-3 z-10">
        Access reliable medical information, connect with healthcare
        professionals, and manage your health efficiently.
      </p>
      <button className="bg-blue-500 text-white font-bold py-4 lg:py-2 px-6 lg:px-4 rounded hover:bg-blue-600 transition duration-300 z-10">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
