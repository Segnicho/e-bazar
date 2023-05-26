"use client";
import { furniture } from "@/public";
import Image from "next/image";
import React from "react";
import {BiMap} from 'react-icons/bi'
const ShopCard = ({
  logo = furniture,
  name = "Furniture Shop",
  address = "king George VI St, Addis Ababa",
}) => {
  return (
    <div className="w-[350px] h-[60px]">
      <div className="bg-rose m-2 flex border-2 p-3 rounded-md">
        <Image src={logo} alt="name" className="rounded-full basis-1/5 scale-75" />
        <div className="flex flex-col items-start justify-center basis-4/5 ml-3 gap-1">
          <h3 className="text-md font-semibold">{name}</h3>
          <p className="flex">
            <BiMap className="h-8 w-5" />
            <address className="text-sm">{address}</address>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
