// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";

// const API_URL = import.meta.env.VITE_APP_URL.replace(/\/+$/, "");

// export const Performance = () => {
//   const [headingData, setHeadingData] = useState();
//   const [securityData, setSecurityData] = useState();

//   // API path cleaning function to avoid double slashes
//   const getImageUrl = (path) => {
//     if (!path) return "";
//     return `${API_URL}/${path.replace(/^public\//, "").replace(/^\/+/, "")}`;
//   };

//   const getSecurity = async () => {
//     try {
//       const [headingRes, res] = await Promise.all([
//         axios.get(`${API_URL}/api/user/security-heading`),
//         axios.get(`${API_URL}/api/user/get-security`),
//       ]);
//       if (res.data?.data) {
//         setHeadingData(headingRes?.data?.data);
//         setSecurityData(res.data.data);
//       }
//     } catch (err) {
//       console.log("Security Data Fetch Error:", err);
//     }
//   };

//   useEffect(() => {
//     getSecurity();
//   }, []);

//   return (
//     <section className="w-full bg-white py-16 overflow-hidden">
//       {/* Heading - Kept Same Style */}
//       <motion.h2
//         className="text-3xl md:text-4xl font-bold text-center mb-12"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.5 }}
//       >
//         {headingData?.heading}
//       </motion.h2>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 justify-items-center">
//         {securityData?.map((item, index) => (
//           <motion.div
//             key={index}
//             className="w-full max-w-[320px] mb-8 rounded-2xl shadow-gray-600 shadow-md border-2 border-[#0572E6] rounded-[60px] flex flex-col relative"
//             initial={{ opacity: 0, y: 40 }} 
//             whileInView={{ opacity: 1, y: 0 }}
//             // Amount 0.1 means animation starts as soon as card enters screen
//             viewport={{ once: true, amount: 0.1 }} 
//             // Reduced delay for better mobile responsiveness
//             transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
//             whileHover={{ scale: 1.05 }} 
//           >
//             {/* Blue Header Section - Structure Kept Same */}
//             <div className="bg-[#0572E6] text-white pt-10 pb-4 flex flex-col items-center justify-center rounded-[60px] relative">
              
//               {/* Icon Circle - Optimization: Defined width/height to prevent Layout Shift */}
//               <div className="absolute -top-10 border-2 border-[#0572E6] bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-[4px_0_5px_rgba(39,50,112,0.5)]">
//                 <img
//                   src={getImageUrl(item?.image)}
//                   alt={item.title}
//                   width="40"
//                   height="40"
//                   className="w-10 h-10 object-contain"
//                   loading="lazy"
//                   decoding="async"
//                 />
//               </div>

//               <h3 className="text-2xl text-center px-6 leading-tight">
//                 {item.title}
//               </h3>
//             </div>

//             {/* Content Section - Structure Kept Same */}
//             <div className="py-10 px-6 rounded-b-2xl">
//               <p className="text-lg leading-relaxed ">
//                 {item.description}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };


import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const API_URL = import.meta.env.VITE_APP_URL.replace(/\/+$/, "");

export const Performance = () => {
  const [headingData, setHeadingData] = useState();
  const [securityData, setSecurityData] = useState();

  // API path cleaning function
  const getImageUrl = (path) => {
    if (!path) return "";
    return `${API_URL}/${path.replace(/^public\//, "").replace(/^\/+/, "")}`;
  };

  const getSecurity = async () => {
    try {
      const [headingRes, res] = await Promise.all([
        axios.get(`${API_URL}/api/user/security-heading`),
        axios.get(`${API_URL}/api/user/get-security`),
      ]);
      if (res.data?.data) {
        setHeadingData(headingRes?.data?.data);
        setSecurityData(res.data.data);
      }
    } catch (err) {
      console.log("Security Data Fetch Error:", err);
    }
  };

  useEffect(() => {
    getSecurity();
  }, []);

  return (
    // SEO Update: Added 'id' for anchor linking and better section identification
    <section id="security-performance" className="w-full bg-white py-16 overflow-hidden">
      
      {/* SEO FIX: Ensuring heading has keyword-rich fallback for consistency */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {headingData?.heading || "Corporate Security & Performance Standards"}
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 justify-items-center">
        {securityData?.map((item, index) => (
          <motion.article // SEO: Using 'article' for individual cards is better for crawlers
            key={index}
            className="w-full max-w-[320px] mb-8 rounded-2xl shadow-gray-600 shadow-md border-2 border-[#0572E6] rounded-[60px] flex flex-col relative"
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }} 
            transition={{ delay: index * 0.1, duration: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05 }} 
          >
            {/* Blue Header Section */}
            <div className="bg-[#0572E6] text-white pt-10 pb-4 flex flex-col items-center justify-center rounded-[60px] relative">
              
              {/* Icon Circle */}
              <div className="absolute -top-10 border-2 border-[#0572E6] bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-[4px_0_5px_rgba(39,50,112,0.5)]">
                <img
                  src={getImageUrl(item?.image)}
                  // SEO Update: Added brand name + title for Keyword Consistency
                  alt={`Viyagoo Performance Feature: ${item.title}`}
                  width="40"
                  height="40"
                  className="w-10 h-10 object-contain"
                  loading="lazy"
                  decoding="async" // Helps with Mobile Score improvement
                />
              </div>

              {/* SEO: Using H3 maintains the correct heading hierarchy */}
              <h3 className="text-2xl font-semibold text-center px-6 leading-tight">
                {item.title}
              </h3>
            </div>

            {/* Content Section */}
            <div className="py-10 px-6 rounded-b-2xl">
              <p className="text-lg leading-relaxed text-center text-gray-700">
                {item.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};