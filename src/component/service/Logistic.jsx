import React, { useEffect, useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import HeroBanner from "../../assets/herobanner.jpg";
import Job from "../../assets/job.png";
import Clock from "../../assets/clocked.png";
import Diversity from "../../assets/diversity.png";
import Portfolio from "../../assets/portfolio.png";
import Learning from "../../assets/learning.png";
import Event from "../../assets/event.png";
import Hand from "../../assets/hand.png";
import Passed from "../../assets/passed.png";
import Female from "../../assets/female.png";
import Serviceimage from "../../assets/serviceimage1.png";
import Track from "../../assets/track.png";
import Tree from "../../assets/tree.png";
import Buy from "../../assets/buy.png";
import Easy from "../../assets/easy.png";
import Control from "../../assets/control.png";
import Intelligent from "../../assets/intelligence.png";
import management from "../../assets/management.png";
import protect from "../../assets/protect.png";
import error from "../../assets/error.png";
import AirportTransfer from "../../component/service/airport_transfer";
import {
  UserCheck,
  Percent,
  Users,
  HeartHandshake,
  FileCheck,
} from "lucide-react";
import {
  ChevronDown,
  MapPin,
  Zap,
  Leaf,
  Share2,
  Gauge,
  Shield,
  DollarSign,
  Heart,
} from "lucide-react";
import Airoplan from "../../assets/airoplan.png";
import Airoplanroad from "../../assets/airoplanroad.png";
import axios from "axios";
export const Logistics = () => {

  const [openDropdown, setOpenDropdown] = useState(null);
  const [logisticData, setLogisticata] = useState();
  const [error, setError] = useState();

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const getLogisticData = async () => {
    try {
      const res=await axios.get(`${import.meta.env.VITE_APP_URL}api/user/logistic`);
      if(res?.data){
        setLogisticata(res?.data?.data)
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
    getLogisticData();
  }, []);

  return (
    <section className="w-full min-h-screen bg-white text-[#1A1A1A] font-sans">
      {/* CONTENT */}
      <div className="max-w-[86rem] mx-auto px-6">
        {/* Intro Section */}
        <div className=" mb-12">
          <p className="text-[#273270]  text-[19px]">
            {logisticData?.description}
            
          </p>
          <div className="w-full min-h-screen bg-white px-6 py-12 flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-center text-[#273270] mb-10">
              Core Logistics Services (Visually appealing cards)
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[86rem] w-full">
              {logisticData?.services.map((card, index) => (
                <div
                  key={index}
                  className="bg-[#ECF5FF] p-8 rounded-tr-[92px] rounded-bl-[92px] shadow-[3px_7px_4px_#c7c1c1]  border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <h2 className="text-xl font-semibold text-[#273270] mb-3">
                    {card.title}
                  </h2>
                  <p className="text-[#273270] leading-relaxed text-sm md:text-base">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full bg-white px-6 py-2 flex flex-col items-center mt-16">
              {/* Heading */}
              <h1 className="text-2xl md:text-3xl font-semibold text-[#273270] mb-12 text-center">
                Why VIYAGOO?
              </h1>

              {/* Section 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[86rem] w-full items-center">
                {/* Left Text */}
                <div className="text-right space-y-6">
                  <div>
                    <h3 className="text-[22px] font-semibold text-[#273270] lg:-mt-[100px] md:-mt-[80px]">
                      {logisticData?.whyViyagoo?.length &&
                      logisticData?.whyViyagoo[0]?.title
                      }
                    </h3>
                    <p className="text-[#273270] text-sm ">
                       {logisticData?.whyViyagoo?.length &&
                      logisticData?.whyViyagoo[0]?.description
                      }
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#273270] lg:mt-[80px] md:mt-[50px]">
                      {(logisticData?.whyViyagoo?.length >=2) &&
                      logisticData?.whyViyagoo[1]?.title
                      }
         
                    </h3>
                    <p className="text-[#273270] text-sm">
                      {(logisticData?.whyViyagoo?.length>=2) &&
                      logisticData?.whyViyagoo[1]?.description
                      }
                    </p>
                  </div>
                </div>

                {/* Center Image */}
                <div className="flex justify-center">
                  <img
                    src={`${import.meta.env.VITE_APP_URL}${logisticData?.whyViyagooImage}`}
                    alt="Airplane"
                    className="w-[356px] h-[425px] object-cover"
                  />
                </div>

                {/* Right Text */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-[#273270]">
                      {(logisticData?.whyViyagoo?.length >=3) &&
                      logisticData?.whyViyagoo[2]?.title
                      }
                    </h3>
                    <p className="text-[#273270] text-sm">
                     {(logisticData?.whyViyagoo?.length >=3) &&
                      logisticData?.whyViyagoo[2]?.description
                      }
                    </p>
                  </div>

                  <div className="lg:mt-[84px] md:mt-[50px]">
                    <h3 className="text-lg font-semibold text-[#273270]">
                      {(logisticData?.whyViyagoo?.length >=4) &&
                      logisticData?.whyViyagoo[3]?.title
                      }
                    </h3>
                    <p className="text-[#273270] text-sm">
                      {(logisticData?.whyViyagoo?.length >=4) &&
                      logisticData?.whyViyagoo[3]?.description
                      }
                    </p>
                  </div>

                  <div className="lg:mt-[56px] md:mt-[40px]">
                    <h3 className="text-lg font-semibold text-[#273270]">
                       {(logisticData?.whyViyagoo?.length >=5) &&
                      logisticData?.whyViyagoo[4]?.title
                      }
                    </h3>
                    <p className="text-[#273270] text-sm">
                       {(logisticData?.whyViyagoo?.length >=5) &&
                      logisticData?.whyViyagoo[4]?.description
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* PROCESS SECTION */}
              <h2 className="text-3xl md:text-4xl font-bold text-[#273270] my-14 text-center">
                How We Work / Our Process
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-[86rem] w-full items-center">
                {/* Image */}
                <div className="flex justify-center">
                  <img
                    src={`${import.meta.env.VITE_APP_URL}${logisticData?.ourProcessImage}`}
                    alt="Process"
                    className="w-[385px] h-[568px] object-cover "
                  />
                </div>

                {/* Steps */}
                <div className="space-y-10 lg:-mt-[92px] md:-mt-[60px]">
                  {/* Step 1 */}
                  {logisticData?.ourProcessTitle?.map((ele,index)=>(

                
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 bg-[#18A7B9] rounded-tl-[1px] rounded-bl-[26px] rounded-tr-[26px] rounded-br-[1px]
 flex justify-center items-center shadow-md"
                    ></div>
                    <div className="w-12 h-12 flex justify-center items-center">
                      <span className="text-[#273270] text-xl font-bold text-[38px] -mt-12 mr-[88px]">
                        {index+1}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#273270] relative right-[38px] top-[-8px] text-[25px]">
                      
                      {ele}
                    </h3>
                  </div>
  ))}
                  

                
                

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
