import React, { useEffect, useRef, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import AirportTransfer from "../../component/service/airport_transfer";
import Corporate from "../../component/service/corporate_employee";
import Logistics from "../../component/service/Logistic";
import EVSegment from "../../component/service/Evsegment";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const Service = () => {
  const formRef = useRef(null);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const currentTab = params.get("activeTab");

  const [activeTab, setActiveTab] = useState(
    currentTab || "Corporate-Employee-Transportation"
  );
  useEffect(() => {
    if (currentTab) {
      setActiveTab(currentTab);
    }
  }, [currentTab]);
  const tabs = [
    "Corporate-Employee-Transportation",
    "Chauffeur-Airport-Transfers",
    "Logistics",
    "EV-SEGMENT",
  ];

  const [bannerData, setBannerData] = useState();
  const [error, setError] = useState();

  const getBannerData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/get-service-banner`
      );
      if (res?.data) {
        setBannerData(res?.data?.data);
      }
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
    }
  };

  useEffect(() => {
    getBannerData();
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToForm();
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services - VIYAGOO</title>
      </Helmet>
      <section className="w-full min-h-screen bg-white ">
        {/* HERO SECTION */}
        <div className="relative w-full">
          <img
            src={`${import.meta.env.VITE_APP_URL}${bannerData?.banner}`}
             alt="Corporate travel, airport transfer, and employee transportation services by VIYAGOO"
            className="w-full h-[100vh] object-cover"
            loading="lazy"
          />
        </div>
        <h1 ref={formRef} className=" text-2xl sm:text-3xl md:text-3xl font-bold text-center mt-4">
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
          {activeTab === "Corporate-Employee-Transportation" && <Corporate />}
          {activeTab === "Chauffeur-Airport-Transfers" && <AirportTransfer />}
          {activeTab === "Logistics" && <Logistics />}
          {activeTab === "EV-SEGMENT" && <EVSegment />}
          {/* Agar baaki tabs ke components bhi hai toh yaha add kar do */}
        </div>
      </section>
    </>
  );
};

export default Service;
