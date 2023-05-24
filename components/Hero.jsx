import React from "react";
import herobg from "@/public/image/hero/grocery.webp";
import Image from "next/image";
import Search from "./hero/Search";

const Hero = () => {
  return (
    <div className="relative">
      <Image src={herobg} alt="Hero Background Image" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl text-prim font-bold mb-8">
          Groceries Delivered in 90 Minutes
        </h1>
        <h2 className="text-l text-prim mb-8">
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </h2>
        <Search />
      </div>
    </div>
  );
};

export default Hero;
