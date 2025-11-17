// import React from "react";
// import vanImage from "../../assets/hillcar.png";
// import bikeImage from "../../assets/bike.png";

// export const WhatSetsUsApart = () => {
//       return (
//             <section className="w-full bg-[#f9fbff] py-16 px-6">
//                   {/* Title and description */}
//                   <div className="max-w-7xl mx-auto text-center mb-12">
//                         <h2 className="text-3xl md:text-4xl font-bold  mb-6">
//                               What Sets Us Apart
//                         </h2>
//                         <p className=" leading-relaxed max-w-7xl mx-auto">
//                               Viyagoo has been designed to go beyond the
//                               traditional vendor model. We don’t just move
//                               people or goods — we act as a consulting partner,
//                               analyzing existing systems, optimizing routes,
//                               introducing technology, and driving sustainable
//                               practices such as EV fleet adoption and green
//                               mobility plans. This allows our clients to benefit
//                               from 15–25% cost savings, enhanced employee
//                               satisfaction, and a stronger alignment with ESG
//                               goals. With a vision to scale across multiple
//                               cities, Viyagoo aims to establish itself as a
//                               nationwide mobility partner, offering
//                               round-the-clock services backed by
//                               technology-driven insights, transparent processes,
//                               and a customer-first approach. Our long-term goal
//                               is to create a future-ready transport ecosystem
//                               that balances cost, convenience, and
//                               sustainability for corporates, logistics networks,
//                               and individual clients. For us, mobility is more
//                               than just transport — it’s about building smarter,
//                               safer, and future-ready systems.
//                         </p>
//                   </div>

//                   {/* Image section */}
//                   <div className="relative max-w-7xl mx-auto flex justify-center mt-16">
//                         {/* Large van image */}
//                         <div className="w-full md:w-4/5  overflow-hidden  relative">
//                               <img
//                                     src={vanImage}
//                                     alt="Scenic road with van"
//                                     className="w-full h-full  object-cover rounded-[35px]"
//                               />
//                         </div>

//                         {/* Smaller overlapping bike image */}
//                      <div className="absolute top-1/2 transform -translate-y-1/2 
//                 right-0 sm:right-[-4%] md:right-0 
//                 w-[60%] sm:w-[50%] md:w-[34%] 
//                 rounded-[25px] overflow-hidden">
//                               <img
//                                     src={bikeImage}
//                                     alt="Motorbikes on mountain road"
//                                     className="w-full   object-cover"
//                               />
//                         </div>
//                   </div>
//             </section>
//       );
// };


import React, { useEffect, useState } from "react";
import axios from "axios";

export const WhatSetsUsApart = () => {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/get-set`
      );
      if (res.data?.data) {
        setData(res.data.data);
      }
    } catch (error) {
      console.log("Error loading section:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Function to fix any double slash issue
  const cleanURL = (url) => {
    return url.replace(/([^:]\/)\/+/g, "$1");
  };

  if (!data)
    return (
      <p className="text-center py-10 text-gray-500">Loading...</p>
    );

  const mainImage = cleanURL(`${import.meta.env.VITE_APP_URL}/${data.image}`);
  const smallImage = cleanURL(
    `${import.meta.env.VITE_APP_URL}/${data.smallImage}`
  );

  return (
    <section className="w-full bg-[#f9fbff] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          What Sets Us Apart
        </h2>
        <p className="leading-relaxed max-w-7xl mx-auto">
          {data.description}
        </p>
      </div>

      {/* Image section */}
      <div className="relative max-w-7xl mx-auto flex justify-center mt-16">

        {/* Main large image */}
        <div className="w-full md:w-4/5 h-[700px] overflow-hidden relative">
          <img
            src={mainImage}
            alt="Main Image"
            className="w-full h-full object-contain rounded-[35px]"
          />
        </div>

        {/* Small overlapping image */}
        {/* <div
          className="absolute top-1/2 transform -translate-y-1/2 
          right-0 sm:right-[-4%] md:right-0 
          w-[60%] sm:w-[50%] md:w-[34%] 
          rounded-[25px] overflow-hidden"
        >
          <img
            src={smallImage}
            alt="Small Image"
            className="w-full object-cover"
          />
        </div> */}
        {/* Small overlapping image */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 
    right-0 sm:right-[-4%] md:right-0 
    w-[400px] h-[320px]              // FIXED SIZE
    rounded-[25px] overflow-hidden "
        >
          <img
            src={smallImage}
            alt="Small Image"
            className="w-full h-full object-contain"
          />
        </div>

      </div>
    </section>
  );
};
