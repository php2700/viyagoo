// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// const API_URL = import.meta.env.VITE_APP_URL.replace(/\/+$/, "");

// export const EmployerBenefits = () => {
//   const [headingData, setHeadingData] = useState();
//   const [benefits, setBenefits] = useState([]);

//   // ⭐ Image path cleaning - Optimized
//   const cleanImagePath = (path) => {
//     if (!path) return "";
//     return `${API_URL}/${path.replace(/^public\//, "").replace(/^\/+/, "")}`;
//   };

//   const getBenefits = async () => {
//     try {
//       const [headingRes, res] = await Promise.all([
//         axios.get(`${API_URL}/api/user/benefit-heading`),
//         axios.get(`${API_URL}/api/user/get-benefit`),
//       ]);
//       if (res.data?.data) {
//         setHeadingData(headingRes?.data?.data);
//         setBenefits(res.data.data);
//       }
//     } catch (err) {
//       console.log("Benefit Fetch Error:", err);
//     }
//   };

//   useEffect(() => {
//     getBenefits();
//   }, []);

//   return (
//     <>
//       <section className="w-full bg-white py-16 overflow-hidden">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0E1D3E]" // mb-16 for better icon spacing
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//         >
//           {headingData?.heading}
//         </motion.h2>

//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 px-6 justify-items-center">
//           {benefits.map((item, index) => (
//             <motion.div
//               key={index}
//               className="w-full max-w-[320px] rounded-2xl shadow-gray-400 shadow-md border-2 border-[#0572E6] flex flex-col relative"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }} // Faster stagger for mobile
//               whileHover={{ scale: 1.03 }}
//             >
//               {/* Blue Header Section - Exact Style Kept */}
//               <div className="bg-[#0572E6] text-white pt-12 pb-6 flex flex-col items-center justify-center rounded-t-[14px] rounded-b-[60px] relative">
                
//                 {/* Icon Circle - Optimization: Added Width/Height to img */}
//                 <div className="absolute -top-10 border-2 border-[#0572E6] bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-[4px_0_5px_rgba(39,50,112,0.3)]">
//                   <img
//                     src={cleanImagePath(item.image)}
//                     alt={item.title}
//                     width="40" 
//                     height="40"
//                     className="w-10 h-10 object-contain"
//                     loading="lazy"
//                   />
//                 </div>

//                 <h3 className="text-xl md:text-2xl font-semibold text-center px-6 leading-tight">
//                   {item.title}
//                 </h3>
//               </div>

//               {/* Description Section - Exact Style Kept */}
//               <div className="py-10 px-6 bg-white rounded-b-2xl flex-grow">
//                 <p className="text-base md:text-lg leading-relaxed  text-center">
//                   {item.description}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const API_URL = import.meta.env.VITE_APP_URL.replace(/\/+$/, "");

export const EmployerBenefits = () => {
  const [headingData, setHeadingData] = useState();
  const [benefits, setBenefits] = useState([]);

  // ⭐ Image path cleaning
  const cleanImagePath = (path) => {
    if (!path) return "";
    return `${API_URL}/${path.replace(/^public\//, "").replace(/^\/+/, "")}`;
  };

  const getBenefits = async () => {
    try {
      const [headingRes, res] = await Promise.all([
        axios.get(`${API_URL}/api/user/benefit-heading`),
        axios.get(`${API_URL}/api/user/get-benefit`),
      ]);
      if (res.data?.data) {
        setHeadingData(headingRes?.data?.data);
        setBenefits(res.data.data);
      }
    } catch (err) {
      console.log("Benefit Fetch Error:", err);
    }
  };

  useEffect(() => {
    getBenefits();
  }, []);

  return (
    <>
      {/* SEO: Using semantic <section> with an ID for possible anchor linking */}
      <section id="benefits-section" className="w-full bg-white py-16 overflow-hidden">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#0E1D3E]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* SEO Tip: Ensure this heading from API contains keywords like "Corporate" or "Benefits" */}
          {headingData?.heading || "Benefits of Our Corporate Transportation Services"}
        </motion.h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10 px-6 justify-items-center">
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              className="w-full max-w-[320px] rounded-2xl shadow-gray-400 shadow-md border-2 border-[#0572E6] flex flex-col relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Blue Header Section */}
              <div className="bg-[#0572E6] text-white pt-12 pb-6 flex flex-col items-center justify-center rounded-t-[14px] rounded-b-[60px] relative">
                
                {/* Icon Circle */}
                <div className="absolute -top-10 border-2 border-[#0572E6] bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-[4px_0_5px_rgba(39,50,112,0.3)]">
                  <img
                    src={cleanImagePath(item.image)}
                    // SEO Update: Brand name + Title for better image indexing
                    alt={`Viyagoo Benefit: ${item.title}`}
                    width="40" 
                    height="40"
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                    // Performance FIX: For Mobile Speed (Score 53), decoding async prevents render blocking
                    decoding="async" 
                  />
                </div>

                {/* SEO: Using H3 for correct heading hierarchy */}
                <h3 className="text-xl md:text-2xl font-semibold text-center px-6 leading-tight">
                  {item.title}
                </h3>
              </div>

              {/* Description Section */}
              <div className="py-10 px-6 bg-white rounded-b-2xl flex-grow">
                <p className="text-base md:text-lg leading-relaxed text-center text-gray-700">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};