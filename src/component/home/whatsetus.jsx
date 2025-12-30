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
        {data.heading}
        </h2>
        <p className="leading-relaxed max-w-7xl mx-auto">
          {data.description}
        </p>
      </div>

      {/* Image section */}
      <div className="relative max-w-7xl mx-auto flex justify-center mt-16">

        {/* Main large image */}
        <div className="w-full md:w-4/5  overflow-hidden relative">
          <img
            src={mainImage}
           alt="VIYAGOO corporate transport and logistics solutions in India for smart, reliable, and sustainable mobility"

            className="w-full h-full object-contain rounded-[35px]"
          />
        </div>

        {/* Small overlapping image */}
        <div
          className="absolute top-1/2 transform -translate-y-1/2 
          right-0 sm:right-[-4%] md:right-0 
          w-[60%] sm:w-[50%] md:w-[34%] 
          rounded-[25px] overflow-hidden"
        >
          <img
            src={smallImage}
         alt="End-to-end corporate mobility and logistics solutions powered by technology and EV fleet"

            className="w-full object-cover"
            loading="lazy"
          />
        </div>
        {/* Small overlapping image */}
        {/* <div
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
        </div> */}

      </div>
    </section>
  );
};
