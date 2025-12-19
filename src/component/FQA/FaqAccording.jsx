import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { faqData } from "../FQA/FaqData"
import { useLocation } from "react-router-dom";

export const FAQAccordion = () => {



  // ✅ show all on /faq, otherwise show only 2
  // const items = isFaqPage ? faqData : faqData.slice(0, 2);
  const items =  faqData ;
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 m-24 ">
        
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-gray-900">
            Frequently Asked Questions
          </h2> 
      {items.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg overflow-hidden shadow-sm ml-70 mr-70  hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => toggle(index)}
            className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="text-lg font-bold text-gray-900">
              {faq.question}
            </span>
            <ChevronDownIcon
              className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 py-4 text-gray-700 bg-white">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
