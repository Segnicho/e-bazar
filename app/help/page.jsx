"use client"
import React, {useState} from "react";
import FAQCard from "@/components/FAQCard";

const Help = () => {
  const faqs = [
    {
      question: "How to contact with Customer Service?",
      answer:
        "Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!.",
    },
    {
      question: "How do I create a account?",
      answer:
        "If you want to open an account for personal use you can do it over the phone or online. Opening an account online should only take a few minutes.",
    },
    {
      question: "Website response taking time, how to improve?",
      answer:
        "At first, Please check your internet connection . We also have some online video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum.",
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
      <h1 className="text-2xl font-bold my-6 text-center">FAQ</h1>
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