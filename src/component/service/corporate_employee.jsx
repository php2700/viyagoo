import React, { useEffect, useRef, useState } from "react";

import Leftarrow from "../../assets/leftarrow.png";
import Rightarrow from "../../assets/rightarrow.png";
import { ChevronDown, Leaf, Shield, DollarSign, Heart } from "lucide-react";
import axios from "axios";

export const Corporate = () => {
  const scrollRef = useRef(null);
  const [error, setError] = useState();
  const [transportationData, setTransportationData] = useState();
  const [whyTransData, setwhyTransData] = useState();
  const [businessTransData, setBusinessTransData] = useState();
  const [mobility, setMobility] = useState();
  const [mobilityDetailData, setmobilityDetailData] = useState();
  const [believeTransData, setbelieveTransData] = useState();
  const [transHeadingData, setTransHeadingData] = useState();
  const [businessHeadingsData, setbusinessHeadingsData] = useState();

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = container.firstChild.offsetWidth + 24; // card width + gap
      container.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const getData = async () => {
    try {
      const [
        transRes,
        whyTransRes,
        businessTransRes,
        futureRes,
        mobilityDetRes,
        believeRes,
        transportHeadingRes,
        businessHeadingRes,
      ] = await Promise.all([
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/transportation`),
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/why-transportation`),
        axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/business-transportation`
        ),
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/future-mobility`),
        axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/detail-future-mobility`
        ),
        axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/believe-transportation`
        ),
        axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/transportation-heading`
        ),
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/business-heading`),
      ]);
      if (
        transRes?.data &&
        whyTransRes?.data &&
        businessTransRes?.data &&
        futureRes?.data &&
        mobilityDetRes?.data &&
        believeRes?.data
      ) {
        setTransportationData(transRes?.data?.data);
        setwhyTransData(whyTransRes?.data?.data);
        setBusinessTransData(businessTransRes?.data?.data);
        setMobility(futureRes?.data?.data);
        setmobilityDetailData(mobilityDetRes?.data?.data);
        setbelieveTransData(believeRes?.data?.data);
        setbusinessHeadingsData(businessHeadingRes?.data?.data);
        setTransHeadingData(transportHeadingRes?.data?.data);
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
    getData();
  }, []);

  return (
    <>
     <Helmet>
        <title>VIYAGOO</title>
         <meta
      name="description"
      content="Viyagoo-Corporate Employee Transportation Services | ETMS, EV Fleet & Shuttle Solutions. We provide corporate employee transportation, airport transfers, executive chauffeur services, corporate shuttles, and reliable logistics solutions."
    />
      </Helmet>
            <DynamicCanonical />
    <section className="w-full min-h-screen bg-white ">
      <div className="max-w-[86rem] mx-auto px-6">
        <div className=" mb-12">
          {transportationData?.description?.map((ele) => (
            <p className="  text-[19px] mb-4">{ele}</p>
          ))}
        </div>

        {/* Growing Commuting Challenge */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-16">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 ">
              {transportationData?.growingHeading}
            </h2>
            {transportationData?.growingChallenge?.map((ele) => (
              <p className="  text-[19px] mb-6">{ele}</p>
            ))}
          </div>

          <div className="md:w-1/2 flex flex-col gap-4">
            {[
              {
                icon: transportationData?.image1,
                title: transportationData?.title1,
                desc: transportationData?.description1,
              },
              {
                icon: transportationData?.image2,
                title: transportationData?.title2,
                desc: transportationData?.description2,
              },
              {
                icon: transportationData?.image3,
                title: transportationData?.title3,
                desc: transportationData?.description3,
              },
              {
                icon: transportationData?.image4,
                title: transportationData?.title4,
                desc: transportationData?.description4,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-[#ECF5FF] rounded-xl px-5 py-6 border border-[#C7D2FE] shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ borderRadius: "24px" }}
              >
                <div class="flex-shrink-0 w-10 h-10  text-white rounded-full flex items-center border-2 border-[#0572E6] justify-center overflow-hidden">
                  <img
                    src={`${import.meta.env.VITE_APP_URL}${item?.icon}`}
                    alt={item.title}
                    class="w-full h-full object-contain p-1"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">
                    <span className=" font-semibold   text-[16px] mr-1">
                      {item.title}
                    </span>
                    <span className="  text-[16px]">{item.desc}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Necessity Section */}
        <div className=" mb-16">
          {/* Heading Section */}
          <h2 className="text-2xl md:text-3xl font-bold mb-4 ">
            {transHeadingData?.heading}
          </h2>
          <p className=" leading-relaxed mb-10 max-w-[54rem] text-[19px]">
            {transHeadingData?.description}
          </p>

          {/* Cards Section */}
          <div className="relative w-full flex items-center">
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-[9px]  hover:bg-[#e2e4ed] z-10 shadow-[1px_2px_4px_0px_#898484]"
            >
              <img src={Leftarrow} alt="Left Arrow" className="w-5 h-5" loading="lazy" />
            </button>

            {/* Scroll Container */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-scroll scroll-smooth no-scrollbar px-4 py-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {whyTransData?.map((item, i) => (
                <div
                  key={i}
                  className="min-w-[260px] bg-[#ECF5FF] border border-[#ECF5FF] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start text-left rounded-lg"
                >
                  <div className="w-10 h-10 flex items-center justify-center mb-4 mx-auto">
                    <img
                      src={`${import.meta.env.VITE_APP_URL}${item?.image}`}
                      alt={item.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2  leading-relaxed">
                      {item.title.length > 70
                        ? item.title.slice(0, 70) + "..."
                        : item.title}
                    </h3>
                    <p className=" text-[16px] leading-relaxed w-[212px] mx-auto mt-[21px]">
                      {item.description.length > 100
                        ? item.description.slice(0, 100) + "..."
                        : item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-[9px]  hover:bg-[#e2e4ed] z-10 shadow-[1px_2px_4px_0px_#898484]"
            >
              <img src={Rightarrow} alt="Right Arrow" className="w-5 h-5" loading="lazy" />
            </button>
          </div>
        </div>

        {/* Business Case Section */}
        <div className="w-full bg-[#ECF5FF] py-6">
          <div className="max-w-5xl mx-auto px-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-4  text-center">
              {businessHeadingsData?.heading}
            </h2>
            <p className=" mb-8  max-w-4xl mx-auto text-[19px]">
              {businessHeadingsData?.description1}
            </p>

            {/* Two Columns Layout */}
            <div>
              <div className="space-y-6 grid md:grid-cols-2 gap-8 md:gap-12">
                {businessTransData?.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                  >
                    <div className="flex-shrink-0 w-15 h-12  rounded-full flex items-center justify-center p-2">
                      <img
                        src={`${import.meta.env.VITE_APP_URL}${item?.image}`}
                        alt={item.title}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">
                        <span className=" font-semibold  mr-1 text-[16px]">
                          {item?.title}
                        </span>
                        :{" "}
                        <span className=" text-[16px]">
                          {item?.description}
                        </span>
                      </p>{" "}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Text */}
            <p className="text-center text-[19px]  mt-10 italic max-w-4xl mx-auto">
              {businessHeadingsData?.description2}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-[86rem] mx-auto px-6  space-y-20 mt-16">
        {/* Section 1: How the Future of Employee Mobility is Evolving */}
        <div className="space-y-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center ">
            {mobility?.heading}
          </h2>
          <p className="   mx-auto leading-relaxed text-[19px]">
            {mobility?.description}
          </p>

          <div className="grid md:grid-cols-2 gap-0 items-center">
            {/* Left: Features List */}
            <div className="space-y-6">
              {mobilityDetailData?.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12  rounded-full flex items-center justify-center">
                    <img
                      src={`${import.meta.env.VITE_APP_URL}${item?.image}`}
                      alt={item.title}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">
                      <span className=" font-semibold text-[16px] mr-1">
                        {item.title}
                      </span>
                      - <span className="text-[16px] ">{item.description}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[35rem]">
                <img
                  src={`${import.meta.env.VITE_APP_URL}${mobility?.image}`}
                  alt="Future of employee mobility - woman looking at hot air balloons"
                  className="w-full h-auto rounded-2xl shadow-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <p className=" text-center italic mt-8 text-[19px] mx-auto">
            Forward-thinking companies are already embracing these trends,
            making transportation not just a support function but a{" "}
            <strong>strategic enabler of sustainable growth</strong>.
          </p>
        </div>

        {/* Section 2: Why Viyagoo Believes in Smarter Employee Transportation */}
        <div className="space-y-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center ">
            {believeTransData?.heading}
          </h2>
          <p className=" text-center max-w-[77rem] mx-auto leading-relaxed text-[18px]">
            {believeTransData?.description}
          </p>

          {/* Dropdown Cards */}
          <div className="space-y-4 max-w-3xl mx-auto">
            {believeTransData?.services?.map((item) => (
              <div
                key={item.id}
                className="bg-[#F4F6FA] border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleDropdown(item.id)}
                  className="w-full px-8 py-8 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-semibold  text-[22px]">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5  transition-transform duration-300 ${
                      openDropdown === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdown === item.id && (
                  <div className="px-6 pb-4 pt-2 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="  max-w-[78rem] mx-auto  mt-8 text-[19px]">
            By rethinking transportation, organizations can unlock productivity,
            improve retention, and achieve long-term cost efficiency, all while
            ensuring employee wellbeing remains at the center.
          </p>
        </div>

        {/* Closing Thought */}
        <div className="rounded-3xl p-8 md:p-12 space-y-6 ">
          <div className=" mx-auto space-y-4">
            <h3 className="text-[28px] text-2xl md:text-3xl font-bold ">
              {believeTransData?.closingHeading}
            </h3>
            <p className=" text-[19px] leading-relaxed">
              {believeTransData?.closingDescription}
            </p>
            <p className=" text-[19px] ">
              At Viyagoo, we’re committed to making that future a reality — one
              ride at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Corporate;
