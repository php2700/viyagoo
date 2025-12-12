import React, { useEffect, useState } from "react";
import Vector from "../../assets/vector.png";
import Hours from "../../assets/24.png";
import Tracking from "../../assets/tracking.png";
import Group from "../../assets/group.png";
import Taxi from "../../assets/taxi.png";
import Network from "../../assets/network.png";
import axios from "axios";

export const Airport = () => {
  const [chaufferData, setChaufferData] = useState();
  const [chaufferServiceData, setChaufferServiceData] = useState();
  const [corporateData, setCorporateData] = useState();
  const [viyagooEdgeData, setviyagooEdgeData] = useState();
  const [viyagooDtailData, setviyagooDtailData] = useState();
  const [chaufferHeadingData, setChaufferHeadingData] = useState();
  const [corporateHeadingData, setCorporateHeadingData] = useState();
  const [error,setError]=useState()

  const getData = async () => {
    try {
      const [
        chaufferRes,
        chufferServiceRes,
        corporateRes,
        viyagooEdgeRes,
        viyagooDetailRes,
        chaufferHeadingRes,
        corporateHeadingRes
      ] = await Promise.all([
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/chaufer`),
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/chaufer-service`),
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/corporate`),
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/viyagoo-edge`),
        axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/viyagoo-edge-detail`
        ),
           axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/chaufer-service-heading`
        ),
           axios.get(
          `${import.meta.env.VITE_APP_URL}api/user/heading-corporate`
        ),
      ]);
      if (
        chaufferRes?.data &&
        chufferServiceRes?.data &&
        corporateRes?.data &&
        viyagooEdgeRes?.data &&
        viyagooDetailRes?.data
      ) {
        setChaufferData(chaufferRes?.data?.data);
        setChaufferServiceData(chufferServiceRes?.data?.data);
        setCorporateData(corporateRes?.data?.data);
        setviyagooEdgeData(viyagooEdgeRes?.data?.data);
        setviyagooDtailData(viyagooDetailRes?.data?.data);
        setChaufferHeadingData(chaufferHeadingRes?.data?.data);
        setCorporateHeadingData(corporateHeadingRes?.data?.data)
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
    <section className="w-full min-h-screen bg-white">
      <div className="max-w-[86rem] mx-auto px-6 ">
        {/* Intro Section */}
        <div className=" mb-12">
          {chaufferData?.description?.map((ele) => (
            <p className="  text-[19px] mb-4">{ele}</p>
          ))}
        </div>
      </div>
      <div className="min-h-screen   px-4 sm:px-6 lg:px-8">
        <div className="max-w-[83rem] mx-auto">
          {/* Header Section */}
          <div className=" mb-16">
            <h1 className="text-3xl font-bold  -mb-9">
              {chaufferData?.mobilityHeading}
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {chaufferData?.mobility?.map((ele, index) => (
              <div
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-md"
                style={{ boxShadow: "0px 2px 4px 2px #c3c1c1" }}
              >
                <h3 className="text-[31px] font-semibold  mb-2">
                  {index + 1}
                </h3>
                <p className=" text-sm">
                  <strong>{ele?.title} –</strong> {ele?.description}.
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold   mb-12">
            {chaufferHeadingData?.heading}
          </h2>

          {chaufferServiceData?.length && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative">
                <img
                  src={`${import.meta.env.VITE_APP_URL}${
                    chaufferServiceData[0]?.image
                  }`}
                  alt="Executive being greeted by chauffeur"
                  className="rounded-[2rem] shadow-lg w-full object-cover h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[2rem]"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold  mb-13">
                  {chaufferServiceData[0]?.title}
                </h3>
                <ul className="space-y-4 mr-12">
                  {chaufferServiceData[0]?.points?.map((ele) => (
                    <li className="flex items-start">
                      <img
                        src={Vector}
                        alt=""
                        className="w-8 h-8 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                      />
                      <span className="text-[15px]  font-medium">
                        {ele}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {chaufferServiceData?.length >= 2 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold  mb-8">
                  {chaufferServiceData[1]?.title}
                </h3>
                <div className="absolute left-[29px] top-17 bottom-10 border-[#273270] w-[2px] bg-[#0572E6] " />
                <div className="space-y-12 lg:space-y-16">
                  {chaufferServiceData[1]?.points?.length >= 1 && (
                    <div className="flex items-start gap-4">
                      <div className="relative z-10 flex items-center justify-center bg-[#0572E6] rounded-full flex-shrink-0 p-2 border-[6px] border-white border-solid w-16 h-16">
                        <img
                          src={Hours}
                          alt="24/7"
                          className="w-full h-full object-contain invert brightness-0"
                        />
                      </div>
                      <p className="font-[600]  pt-1 text-[19px]">
                        {chaufferServiceData[1]?.points[0]}
                      </p>
                    </div>
                  )}

                  {chaufferServiceData[1]?.points?.length >= 2 && (
                    <div className="flex items-start gap-4">
                      <div className="relative z-10 flex items-center justify-center bg-[#0572E6] rounded-full flex-shrink-0 p-2 border-[6px] border-white border-solid w-16 h-16">
                        <img
                          src={Tracking}
                          alt="Live flight tracking"
                          className="w-full h-full object-contain invert brightness-0"
                        />
                      </div>
                      <p className="font-[600]  pt-1 text-[19px]">
                        {chaufferServiceData[1]?.points[1]}
                      </p>
                    </div>
                  )}
                  {chaufferServiceData[1]?.points?.length >= 3 && (
                    <div className="flex items-start gap-4">
                      <div className="relative z-10 flex items-center justify-center bg-[#0572E6] rounded-full flex-shrink-0 p-2 border-[6px] border-white border-solid w-16 h-16">
                        <img
                          src={Group}
                          alt="Meet & Greet"
                          className="w-full h-full object-contain invert brightness-0"
                        />
                      </div>
                      <p className="font-[600]  pt-1 text-[19px]">
                        {chaufferServiceData[1]?.points[2]}
                      </p>
                    </div>
                  )}
                  {chaufferServiceData[1]?.points?.length >= 4 && (
                    <div className="flex items-start gap-4">
                      <div className="relative z-10 flex items-center justify-center bg-[#0572E6] rounded-full flex-shrink-0 p-2 border-[6px] border-white border-solid w-16 h-16">
                        <img
                          src={Taxi}
                          alt="Flexible fleet"
                          className="w-full h-full object-contain invert brightness-0"
                        />
                      </div>
                      <p className="font-[600]  pt-1 text-[19px]">
                        {chaufferServiceData[1]?.points[3]}
                      </p>
                    </div>
                  )}
                  {chaufferServiceData[1]?.points?.length >= 5 && (
                    <div className="flex items-start gap-4">
                      <div className="relative z-10 flex items-center justify-center bg-[#0572E6] rounded-full flex-shrink-0 p-2 border-[6px] border-white border-solid w-16 h-16">
                        <img
                          src={Network}
                          alt="Integrated mobility"
                          className="w-full h-full object-contain invert brightness-0"
                        />
                      </div>
                      <p className="font-[600]  pt-1 text-[19px]">
                        {chaufferServiceData[1]?.points[4]}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <img
                  src={`${import.meta.env.VITE_APP_URL}${
                    chaufferServiceData[1]?.image
                  }`}
                  alt="Private jet and luxury car at airport"
                  className="w-[623px] h-[596px] object-contain drop-shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold   mb-12">
          {corporateHeadingData?.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {corporateData?.map((ele) => (
            <div className="bg-[#F4F6FA] rounded-2xl p-6 border border-gray-100 ">
              <h3 className="text-xl font-bold  mb-3 relative top-3.5 left-0 md:left-7 lg:left-7">
                {ele?.title}
              </h3>
              <p className=" mb-4 relative top:3.5 lg:top-13.5 md:top-13.5 left-0 md:left-7 lg:left-7">
                {ele?.description}
              </p>
              <div className="flex justify-end">
                <img
                  src={`${import.meta.env.VITE_APP_URL}${ele?.image}`}
                  alt="Hardworking"
                  className="w-55 h-41 md:w-55 md:h-41 relative left-[23px] top-[25px]"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-2 mb-12">
          <div className="w-2 h-2 bg-[#0572E6] rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        </div>

        {/* The Viyagoo Edge */}
        <div className=" mb-12">
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
           {viyagooEdgeData?.edgeHeading}
          </h2>
          <p className=" text-[19px] mx-auto leading-relaxed">
            {viyagooEdgeData?.description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {viyagooDtailData?.map((ele) => (
            <div className="bg-white rounded-3xl p-6 shadow-md text-center border border-gray-100">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center">
                  <img
                    src={`${import.meta.env.VITE_APP_URL}${ele?.image}`}
                    alt=""
                    className="w-15 h-15"
                  />
                </div>
              </div>
              <p className=" text-[16px]">
           
                      {ele.description.length > 100
                    ? ele.description.slice(0, 100) + "..."
                    : ele.description}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Airport;
