"use client";

import React, { useState, useEffect } from "react";

const Banner = () => {
  const images = ["/images/banner1.png", "/images/banner2.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="max-w-[1280px] w-full flex justify-center items-center mx-auto">
      <img
        src={images[currentIndex]}
        className="w-full h-auto object-cover rounded-2xl transition-opacity duration-1000 ease-in-out"
      />
    </div>
  );
};

export default Banner;
