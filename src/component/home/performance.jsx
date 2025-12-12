import React, { useEffect, useState } from "react";
import stress from "../../assets/sad.png";
import watch from "../../assets/watch.png";
import costIcon from "../../assets/cash.png";
import lock from "../../assets/lock.png";
import happyIcon from "../../assets/happy.png";
import hexaIcon from "../../assets/hexa.png";
import timer from "../../assets/timer.png";
import axios from "axios";

export const Performance = () => {
  const [headingData,setHeadingData]=useState();
  const [securityData, setSecurityData] = useState();

  const getSecurity = async () => {
    try {
      const [headingRes,res] = await Promise.all([axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/security-heading`),
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/get-security`
      )]) 
      if (res.data?.data) {
        setHeadingData(headingRes?.data?.data)
        setSecurityData(res.data.data);
      }
    } catch (err) {
      console.log("Benefit Fetch Error:", err);
    }
  };

  useEffect(() => {
    getSecurity();
  }, []);

  return (
    <section className="w-full bg-white py-16">
      <h2 className="text-3xl md:text-4xl font-bold  text-center mb-12">
        {headingData?.heading}
      </h2>

      {/* <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 px-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] lg:w-[22%] bg-white border-2 border-[#0E1D3E] rounded-2xl shadow-sm text-center p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#f6f8fc] border border-[#273270]">
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold  mb-3">{item.title}</h3>
            <p className=" text-lg leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div> */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 justify-items-center">
        {securityData?.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[320px] mb-8 rounded-2xl shadow-gray-600 shadow-md border-2 border-[#0572E6] rounded-[60px] flex flex-col relative"
          >
            <div className="bg-[#0572E6] text-white pt-10 pb-4 flex flex-col items-center justify-center rounded-[60px] relative">
              <div className="absolute -top-10 border-2 border-[#0572E6] bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-[4px_0_5px_rgba(39,50,112,0.5)]">
                <img
                  src={`${import.meta.env.VITE_APP_URL}${item?.image}`}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="text-2xl text-center px-6">
                {item.title.length > 70
                  ? item.title.slice(0, 70) + "..."
                  : item.title}
              </h3>
            </div>

            <div className="py-10 px-6 rounded-b-2xl">
              <p className="text-lg leading-relaxed">
                {" "}
                {item.description.length > 100
                  ? item.description.slice(0, 100) + "..."
                  : item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
