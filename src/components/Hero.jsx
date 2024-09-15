import React, { useState, useEffect } from "react";
import heroBackground from "../assets/img/heroBackground.jpg";
import heroBackground2 from "../assets/img/heroBackground2.jpg";
import heroBackground3 from "../assets/img/heroBackground3.jpg";

const Hero = () => {
  const images = [heroBackground, heroBackground2, heroBackground3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${
            currentImageIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10"></div>
      <h1 className="font-sans text-4xl md:text-5xl font-bold mb-4 text-center text-white px-2 z-20">
        Medical Information for the Modern Era
      </h1>
      <p className="text-base lg:text-xl mb-8 text-center text-[#b1b1b1] max-w-2xl px-3 z-20">
        Access reliable medical information, connect with healthcare
        professionals, and manage your health efficiently.
      </p>
      <button className="bg-purple-500 text-white font-bold py-4 lg:py-2 px-6 lg:px-4 rounded hover:bg-purple-600 transition duration-300 z-20">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
