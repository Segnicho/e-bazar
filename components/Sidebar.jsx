"use client";
import React, { useState } from "react";
import { CiApple } from "react-icons/ci";
import { FaFish } from "react-icons/fa";
import { HiOutlineCake } from "react-icons/hi";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
const product = [
  {
    name: "Fresh and Fruit",
    icon: <CiApple />,
    subProducts: ["fresh", "fruit"],
  },
  {
    name: "Meat and Fich",
    icon: <FaFish />,
    subProducts: ["meat", "fish"],
  },
  {
    name: "Pet Care",
    icon: <HiOutlineCake />,
    subProducts: [
      "nuts and biscuits",
      "chekolate",
      "crisps",
      "noodles & pasta",
    ],
  },
  {
    name: "Home And Cleaning",
    icon: <HiOutlineCake />,
    subProducts: [
      "nuts and biscuits",
      "chekolate",
      "crisps",
      "noodles & pasta",
    ],
  },
  {
    name: "Diary",
    icon: <HiOutlineCake />,
    subProducts: [
      "nuts and biscuits",
      "chekolate",
      "crisps",
      "noodles & pasta",
    ],
  },
  {
    name: "Cooking",
    icon: <HiOutlineCake />,
    subProducts: [
      "nuts and biscuits",
      "chekolate",
      "crisps",
      "noodles & pasta",
    ],
  },
  {
    name: "Breakfast",
    icon: <HiOutlineCake />,
    subProducts: [
      "nuts and biscuits",
      "chekolate",
      "crisps",
      "noodles & pasta",
    ],
  },
];
const Sidebar = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  const handleClick = (index) => {
    setActiveProduct((prevActiveProduct) =>
      prevActiveProduct === index ? null : index
    );
  };

  return (
    <div className="m-2 stick top-10">
      <div className="flex flex-col gap-3">
        {product.map((prod, index) => (
          <div key={prod.name} className="flex flex-col ">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleClick(index)}
            >
              <span>{prod.icon}</span>

              <p className="ml-2">{prod.name}</p>
              {activeProduct === index ? (
                <RiArrowDropUpLine className="ml-auto" />
              ) : (
                <RiArrowDropDownLine className="ml-auto" />
              )}
            </div>
            {activeProduct === index && (
              <div className="ml-8 mt-2">
                {prod.subProducts.map((subProd) => (
                  <p key={subProd}>{subProd}</p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
