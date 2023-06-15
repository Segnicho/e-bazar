"use client";
import React, { useState } from "react";

const OfferCard = ({ discount = 5, bgcolor = "#faa96e", ky = "FOO" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ky);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };
  const cardStyle = {
    width: "170px",
    height: "110px",
    backgroundColor: bgcolor,
  };
  return (
    <div className="w-[170px] h-[150px]">
      <div className={`rounded-md relative`} style={cardStyle}>
        <div className="border-dashed border border-white  rounded-md absolute inset-4 flex justify-center items-center">
          <span className="font-bold text-2xl text-white">${discount} OFF</span>
        </div>
      </div>
      <div className="w-[130px] h-[40px] bg-white mx-auto p-[8px] flex justify-between">
        <span>{ky}</span>
        <span className="text-green-500 cursor-pointer" onClick={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </span>
      </div>
    </div>
  );
};

export default OfferCard;
