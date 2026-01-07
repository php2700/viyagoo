// import React, { useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";
// import { faqData } from "../FQA/FaqData"
// import { useLocation } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";


// export const FAQAccordion = () => {



//   // ✅ show all on /faq, otherwise show only 2
//   // const items = isFaqPage ? faqData : faqData.slice(0, 2);
//   const items =  faqData ;
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     // <div className="space-y-4 my-10 px-4 md:px-0 md:m-24">
        
//     //   <h2 className="text-xl md:text-3xl font-bold text-center mb-10 text-gray-900">
//     //         Frequently Asked Questions
//     //       </h2> 
//     //   {items.map((faq, index) => (
//     //     <div
//     //       key={index}
//     //       className="border border-gray-300 rounded-lg overflow-hidden shadow-sm 
//     //        max-w-7xl mx-auto hover:shadow-md transition-shadow"
//     //     >
//     //       <button
//     //         onClick={() => toggle(index)}
//     //         className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
//     //       >
//     //         <span className="text-lg font-bold text-gray-900">
//     //           {faq.question}
//     //         </span>
//     //         <ChevronDownIcon
//     //           className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
//     //             openIndex === index ? "rotate-180" : ""
//     //           }`}
//     //         />
//     //       </button>

//     //       <div
//     //         className={`overflow-hidden transition-all duration-500 ease-in-out ${
//     //           openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//     //         }`}
//     //       >
//     //         <div className="px-6 py-4 text-gray-700 bg-white">
//     //           {faq.answer}
//     //         </div>
//     //       </div>
//     //     </div>
//     //   ))}
//     // </div>
//     <div className="space-y-4 my-10 px-4 md:px-0 md:m-24">
//   <h2 className="text-xl md:text-3xl font-bold text-center mb-10 text-gray-900">
//     Frequently Asked Questions
//   </h2>

//   {items.map((faq, index) => (
//     <motion.div
//       key={index}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.3 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="border border-gray-300 rounded-lg overflow-hidden shadow-sm max-w-7xl mx-auto hover:shadow-md transition-shadow"
//     >
//       <button
//         onClick={() => toggle(index)}
//         className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
//       >
//         <span className="text-lg font-bold text-gray-900">
//           {faq.question}
//         </span>
//         <ChevronDownIcon
//           className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
//             openIndex === index ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       <AnimatePresence>
//         {openIndex === index && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <div className="px-6 py-4 text-gray-700 bg-white">
//               {faq.answer}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   ))}
// </div>
//   );
// };

import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

export const FAQAccordion = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  const BASE = import.meta.env.VITE_APP_URL;

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // useEffect(() => {
  //   const fetchFAQs = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(`${BASE}/api/user/faq-heading`);

  //       // Backend se { success: true, data: { heading, subtitle, faqs } } aata hai
  //       if (response.data && response.data.success && response.data.data) {
  //         setData(response.data.data);
  //       } else {
  //         setData({ heading: "Frequently Asked Questions", faqs: [] });
  //       }
  //     } catch (error) {
  //       console.error("Error fetching FAQs:", error);
  //       setData({ heading: "Frequently Asked Questions", faqs: [] });
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchFAQs();
  // }, []);
  useEffect(() => {
  const fetchFAQs = async () => {
    try {
      const response = await axios.get(
        `${BASE}api/user/faq-heading`
      );

      if (response.data?.success) {
        setData(response.data.data);
      } else {
        setData({
          heading: "Frequently Asked Questions",
          subtitle: "",
          faqs: [],
        });
      }
    } catch (error) {
      console.error("FAQ fetch error:", error);
      setData({
        heading: "Frequently Asked Questions",
        subtitle: "",
        faqs: [],
      });
    } finally {
      setLoading(false);
    }
  };

  fetchFAQs();
}, []);

  if (loading) {
    return (
      <div className="my-20 text-center">
        <p className="text-gray-600 text-lg">Loading FAQs...</p>
      </div>
    );
  }

  if (!data || data.faqs.length === 0) {
    return (
      <div className="my-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <p className="mt-6 text-gray-600">No FAQs available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 my-10 px-4 md:px-0 md:m-24">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-10 text-gray-900">
        {data.heading}
      </h2>

      {data.subtitle && (
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
          {data.subtitle}
        </p>
      )}

      {data.faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="border border-gray-300 rounded-lg overflow-hidden shadow-sm max-w-7xl mx-auto hover:shadow-md transition-shadow"
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

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="px-6 py-4 text-gray-700 bg-white">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};