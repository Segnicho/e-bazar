import React from "react";
import apple from "@/public/image/Apples.png";
import Image from "next/image";
import {AiOutlinePlus} from "react-icons/ai"
const Card = ({
  photo = apple,
  price = 1.6,
  name = "Apples",
  discount = 0.4,
}) => {
  return (
    <div className="w-[300px] h-[400px] shadow-md border border-1 border-gray-100">
      <div className="p-3">
        <Image src={photo} alt={name} className="mx-auto cursor-pointer" />
        <p>
          <span className="text-prim font-semibold"> ${price} </span>
          <span>
            $
            {discount && (
              <span className="line-through">{discount + price}</span>
            )}
          </span>
        </p>
        <section className="my-2">{name}</section>
        <section className="w-full bg-gray-100 hover:bg-accent cursor-pointer py-1 rounded-md">
          {" "}
          <p className="text-center">Add</p>{" "}
          <AiOutlinePlus className="float-right -mt-6 hover:bg-sec mr-2 bg-gray-300 w-6 h-6" />{" "}
        </section>
      </div>
    </div>
  );
};
export default Card;