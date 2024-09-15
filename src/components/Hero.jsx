import React from "react";

const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4 text-center">
        Medical Information for the Modern Era
      </h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Access reliable medical information, connect with healthcare
        professionals, and manage your health efficiently.
      </p>
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
