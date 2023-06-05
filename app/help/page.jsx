"use client"
import React, {useState} from "react";
import FAQCard from "@/components/FAQCard";

const Help = () => {
  const faqs = [
    {
      question: "Question 1",
      answer: "Answer 1",
    },
    {
      question: "Question 2",
      answer: "Answer 2",
    },
    {
      question: "Question 3",
      answer: "Answer 3",
    },
    {
      question: "Question 4",
      answer: "Answer 4",
    },
    {
      question: "Question 5",
      answer: "Answer 5",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-4 text-center">FAQs</h1>
      {faqs.map((faq, index) => (
        <FAQCard
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => handleAccordionClick(index)}
        />
      ))}
    </div>
  );
};

export default Help;