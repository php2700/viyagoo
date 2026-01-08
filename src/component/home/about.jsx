// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import truckImage from "../../assets/truck.webp";
// import { motion } from "framer-motion";

// const API_URL = import.meta.env.VITE_APP_URL.replace(/\/+$/, "");

// export const AboutUs = () => {
//   const [aboutData, setAboutData] = useState({
//     heading: "About Us",
//     title: "We Are Experts <br /> in Building Dreams",
//     description: "",
//     image: truckImage,
//   });

//   const fetchAbout = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/user/get-about`);
//       if (res.data?.data) {
//         const data = res.data.data;
//         setAboutData({
//           heading: data?.heading || "About Us",
//           title: data?.title || "We Are Experts <br /> in Building Dreams",
//           description: data?.description || "",
//           image: data.image
//             ? `${API_URL}/${data.image.replace(/^public\//, "").replace(/^\/+/, "")}`
//             : truckImage,
//         });
//       }
//     } catch (err) {
//       console.log("Fetch About Error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchAbout();
//   }, []);

//   return (
//     <section className="w-full py-16 bg-white overflow-visible">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Heading - Exact Original Style */}
//         <motion.h2
//           className="text-2xl md:text-3xl font-bold mb-10 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           {aboutData?.heading}
//         </motion.h2>

//         <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10">
//           {/* Image - Performance Optimized */}
//           <motion.div
//             className="flex justify-center lg:justify-end"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//           >
//             <img
//               src={aboutData.image}
//               alt="VIYAGOO corporate mobility solutions"
//               className="w-full max-w-[450px] h-auto object-contain"
//               // Performance Tweaks:
//               loading="lazy" 
//               width="450" 
//               height="350"
//             />
//           </motion.div>

//           {/* Content Box - Exact Original Style & Colors */}
//           <motion.div
//             className="flex justify-center lg:justify-start"
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//           >
//             <div className="flex flex-col justify-start p-6 text-left bg-[#ECF5FF] border border-gray-400 rounded-xl transition-all duration-700 ease-in-out">
//               <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-3 leading-snug">
//                 <span dangerouslySetInnerHTML={{ __html: aboutData.title }} />
//               </h3>

//               {/* Description - Exact Original Sizes */}
//               <p className="w-full text-xs sm:text-sm md:text-base leading-relaxed break-words mb-6">
//                 {aboutData.description || "Loading description..."}
//               </p>

//               {/* Button - Exact Original Style */}
//               <motion.div
//                 className="flex justify-start"
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <Link
//                   to="/aboutus#aboutsection"
//                   className="flex items-center px-6 py-2 bg-[#0572E6] text-white font-medium rounded-md hover:bg-blue-700 transition"
//                 >
//                   Know More
//                   <span className="ml-2">→</span>
//                 </Link>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import truckImage from "../../assets/truck.webp";
import { motion } from "framer-motion";

const API_URL = import.meta.env.VITE_APP_URL.replace(/\/+$/, "");

export const AboutUs = () => {
  const [aboutData, setAboutData] = useState({
    // SEO Update: Default heading mein 'Corporate' keyword add kiya
    heading: "About Our Corporate Transport Services",
    title: "We Are Experts <br /> in Building Dreams",
    description: "",
    image: truckImage,
  });

  const fetchAbout = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/user/get-about`);
      if (res.data?.data) {
        const data = res.data.data;
        setAboutData({
          heading: data?.heading || "About Our Corporate Transport Services",
          title: data?.title || "We Are Experts <br /> in Building Dreams",
          description: data?.description || "",
          image: data.image
            ? `${API_URL}/${data.image.replace(/^public\//, "").replace(/^\/+/, "")}`
            : truckImage,
        });
      }
    } catch (err) {
      console.log("Fetch About Error:", err);
    }
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  return (
    <section className="w-full py-16 bg-white overflow-visible">
      <div className="max-w-7xl mx-auto px-4">
        {/* SEO FIX: H2 used correctly to support the H1 in Banner */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {aboutData?.heading}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10">
          {/* Image - Optimized for CLS and Speed */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={aboutData.image}
              // SEO Update: Descriptive Alt text with location keyword
              alt="Viyagoo Corporate Mobility and Employee Transportation Experts"
              className="w-full max-w-[450px] h-auto object-contain"
              loading="lazy" 
              decoding="async" // Performance improvement
              width="450" 
              height="350"
            />
          </motion.div>

          {/* Content Box */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex flex-col justify-start p-6 text-left bg-[#ECF5FF] border border-gray-400 rounded-xl transition-all duration-700 ease-in-out shadow-sm">
              <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-3 leading-snug">
                <span dangerouslySetInnerHTML={{ __html: aboutData.title }} />
              </h3>

              <p className="w-full text-xs sm:text-sm md:text-base leading-relaxed break-words mb-6 text-gray-700">
                {aboutData.description || "Viyagoo provides reliable and efficient corporate transport solutions tailored for modern businesses."}
              </p>

              {/* Button - Improved Accessibility for Usability Score */}
              <motion.div
                className="flex justify-start"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to="/aboutus#aboutsection"
                  // Usability Fix: aria-label helps improve the 'C+' grade
                  aria-label="Learn more about Viyagoo Corporate Services"
                  className="flex items-center px-6 py-2 bg-[#0572E6] text-white font-medium rounded-md hover:bg-blue-700 transition"
                >
                  Know More
                  <span className="ml-2" aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};