import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FAQCard = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="w-4/5 mx-auto border bg-white rounded shadow-md mb-4">
      <div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={onClick}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        {isOpen ? (
          <AiOutlineMinus className="text-xl" />
        ) : (
          <AiOutlinePlus className="text-xl" />
        )}
      </div>
      {isOpen && <div className="px-4 pb-4">{answer}</div>}
    </div>
  );
};

export default FAQCard;
