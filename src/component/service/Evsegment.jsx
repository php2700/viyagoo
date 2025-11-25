import React, { useState } from "react";
import Car1 from "../../assets/car.webp";
import Car2 from "../../assets/car1.avif";
import Car3 from "../../assets/car3.avif";
import Car4 from "../../assets/car2.avif";
import { useEffect } from "react";
import axios from "axios";

export const EVSegment = () => {
  const images = [Car1, Car2, Car3, Car4];
  const [current, setCurrent] = useState(0);
  const [error, setError] = useState();
  const [segmentData, setSegmentData] = useState();
  const [segmentFleetData, setSegmentFleetData] = useState([]);
  const [whysegmentData, setWhySegmentData] = useState([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
 
  const getData = async () => {
    try {
      const [segmentRes, segmentFleetRes, whySegmentRes] = await Promise.all([
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/segment`),
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/segment-fleet`),
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/why-segment`),
      ]);
      if (segmentRes?.data && segmentFleetRes?.data && whySegmentRes?.data) {
        setSegmentData(segmentRes?.data?.data);
        setSegmentFleetData(segmentFleetRes?.data?.data);
        setWhySegmentData(whySegmentRes?.data?.data);
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
    <section className="w-full min-h-screen bg-white text-[#1A1A1A] font-sans">
      {/* CONTENT */}
      <div className="max-w-[86rem] mx-auto px-6">
        {/* Intro Section */}
        <div className=" mb-12">
          <p className="text-[#273270]  text-[19px] ">
            {segmentData?.about}
            {" "}
          </p>
          <div className="w-full px-6 py-16 flex flex-col items-center">
            {/* Subtitle */}
            <h3 className="text-2xl md:text-3xl font-bold text-[#273270] mb-8 self-start  ">
              Our EV Fleet Advantage
            </h3>

            <p className="max-w-[86rem]  text-[#273270]  text-[19px] mb-16">
              {segmentData?.evAdvantage}
              
            </p>

            {/* Key Services Box */}
            <h3 className="text-2xl md:text-3xl font-bold text-[#273270] text-center mb-8">
              Key Services Under the EV Segment
            </h3>

            <div className="bg-[#ECF5FF] shadow-[0px_8px_20px_rgba(0,0,0,0.15)] p-8 rounded-[25px] max-w-[86rem] w-full border border-gray-200 rounded-tr-[105px] rounded-bl-[105px]">
              <ol className="list-decimal pl-6 space-y-6 text-[#0c2e4e] text-[15px] leading-relaxed">
                {segmentData?.services?.map((ele)=>(
                <li>
                  <span className="font-semibold text-[21px] block text-start text-[#273270]">
                    {ele?.title}
                  </span>
                  <p className="text-[#273270] text-[15px]">
                    {ele?.description}
                    
                  </p>
                </li>
                ))}

                <li>
                  <span className="font-semibold text-[21px] block text-start text-[#273270]">
                    Sustainable Partnerships for Businesses
                  </span>

                  <p className="text-[#273270] text-[15px]">
                    Viyagoo partners with organizations looking to integrate EVs
                    into their transport strategy. Whether through dedicated
                    electric fleets, on-demand EV usage, or long-term
                    sustainable mobility planning, we assist businesses in
                    achieving their ESG and carbon neutrality targets.
                  </p>
                </li>
              </ol>
            </div>

            {/* Why Choose EV Section */}

            <h3 className="text-2xl md:text-3xl font-bold text-[#273270] mb-8 self-start text-left  mt-[56px]">
              Why Choose Viyagoo's EV Segment?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[86rem] w-full">
              {whysegmentData?.map((box, index) => (
                <div key={index} className="bg-[#F8F8F8] p-6 rounded-2xl  ">
                  <img
                    src={`${import.meta.env.VITE_APP_URL}${box?.image}`}
                    alt=""
                    className="h-[30px] bg-[#ECECEC]"
                  />
                  <h4 className="text-[#273270] font-semibold text-lg mb-2 text-start mt-[26px] max-w-[170px]">
                    {box.title}
                  </h4>
                  <p className="text-[#273270] text-[15px] leading-relaxed text-start max-w-[239px]">
                    {box.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[86rem] mx-auto">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#273270] mb-10">
            Our Fleet:
          </h2>

          {/* Carousel Box */}
          <div className="flex flex-col items-center gap-8">
            {/* Image Section */}
            <div className="relative flex justify-center items-center">
              <div className="rounded-[85px] overflow-hidden shadow-xl mx-auto lg:w-[1292px] md:w-[1000px] h-[415px]">
                <img
                  src={ `${import.meta.env.VITE_APP_URL}${segmentFleetData[current]?.image}`}
                  alt="Fleet"
                  className="w-full h-full object-cover transition-all duration-500 "
                />
              </div>

              {/* Dots */}
              <div className="absolute bottom-4 flex gap-3">
                {segmentFleetData?.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 
                    ${current === index ? "bg-white shadow" : "bg-gray-400"}
                  `}
                  ></button>
                ))}
              </div>
            </div>

            {/* Text Section */}
            <div className="text-center">
              <h2 className="text-[18px] font-bold text-[#273270] max-w-[900px]">
                {segmentFleetData?.length &&  segmentFleetData[0].description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EVSegment;
