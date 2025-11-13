import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import HeroBanner from "../../assets/herobanner.jpg";

import AirportTransfer from '../../component/service/airport_transfer';
import Corporate from '../../component/service/corporate_employee';
import Logistics from '../../component/service/Logistic';
import EVSegment from '../../component/service/Evsegment';


export const Service = () => {
  const [activeTab, setActiveTab] = useState("Corporate Employee Transportation");
const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  const tabs = [
    "Corporate Employee Transportation",
    "CHAUFFEUR & AIRPORT TRANSFERS",
    "Logistics",
    "EV SEGMENT",
  ];

  return (
    <section className="w-full min-h-screen bg-white text-[#1A1A1A] font-sans">
      {/* HERO SECTION */}
      <div className="relative w-full">
        <img
          src={HeroBanner}
          alt="Banner"
          className="w-full h-[90vh] object-cover"
        />
        
      </div>

      {/* TABS */}
      
    <h1 className="text-[#273270] text-2xl sm:text-3xl md:text-3xl font-bold text-center mt-4">
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
            ? "bg-[#1E3A8A] text-white border-[3px] border-[#1E3A8A]"
            : "bg-white text-[#1E3A8A] border-[3px] border-[#273270] hover:bg-[#1E3A8A] hover:text-white"
        }`}
    >
      
      {tab.toUpperCase()}
    </button>
  ))}
</div>

 <div className="mt-8">
        {activeTab === "Corporate Employee Transportation" && <Corporate />}
        {activeTab === "CHAUFFEUR & AIRPORT TRANSFERS" && <AirportTransfer />}
        {activeTab === "Logistics" && <Logistics />}
        {activeTab === "EV SEGMENT" && <EVSegment />}
        {/* Agar baaki tabs ke components bhi hai toh yaha add kar do */}
      </div>

      
     
    </section>
  );
};

export default Service;
