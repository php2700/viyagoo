import React, { useEffect, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import HeroBanner from "../../assets/herobanner.jpg";
import { Helmet } from "react-helmet-async";
import AirportTransfer from "../../component/service/airport_transfer";
import Corporate from "../../component/service/corporate_employee";
import Logistics from "../../component/service/Logistic";
import EVSegment from "../../component/service/Evsegment";
import { useLocation } from "react-router-dom";

export const Service = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const currentTab = params.get("activeTab");
  
  const [activeTab, setActiveTab] = useState(
    currentTab || "Corporate Employee Transportation"
  );
  useEffect(() => {
    if (currentTab) {
      setActiveTab(currentTab);
    }
  }, [currentTab]);
  const tabs = [
    "Corporate Employee Transportation",
    "Chauffeur-Airport Transfers",
    "Logistics",
    "EV SEGMENT",
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - VIYAGOO</title>
      </Helmet>
      <section className="w-full min-h-screen bg-white ">
        {/* HERO SECTION */}
        <div className="relative w-full">
          <img
            src={HeroBanner}
            alt="Banner"
            className="w-full h-[100vh] object-cover"
          />
        </div>
        <h1 className=" text-2xl sm:text-3xl md:text-3xl font-bold text-center mt-4">
          Our Services
        </h1>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-4 mt-10 mb-8 px-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs sm:text-sm md:text-base font-semibold px-6 py-2.5 rounded-full border transition-all duration-300 tracking-wide
        ${
          activeTab === tab
            ? "bg-[#0572E6] text-white border-[3px] border-[#0572E6]"
            : "bg-white  border-[3px] border-[#0572E6] hover:bg-[#0572E6] hover:text-white"
        }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {activeTab === "Corporate Employee Transportation" && <Corporate />}
          {activeTab === "Chauffeur-Airport Transfers" && <AirportTransfer />}
          {activeTab === "Logistics" && <Logistics />}
          {activeTab === "EV SEGMENT" && <EVSegment />}
          {/* Agar baaki tabs ke components bhi hai toh yaha add kar do */}
        </div>
      </section>
    </>
  );
};

export default Service;
