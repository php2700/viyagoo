import React, { useState } from "react";
import Car from '../../assets/car.webp';
import Car1 from '../../assets/car.webp';
import Car2 from '../../assets/car1.avif';
import Car3 from '../../assets/car3.avif';
import Car4 from '../../assets/car2.avif';
import Ev1 from '../../assets/ev1.png';
import CoinHand from '../../assets/handcoin.png';
import Carpool from "../../assets/Carpool.png";
import BusinessBuilding from '../../assets/business_building.png';
import Forest from '../../assets/forest.png';
import Energy from '../../assets/energy.png';
import { useEffect } from "react";
export const EVSegment = () => {
const images = [Car1, Car2, Car3, Car4];
  const [current, setCurrent] = useState(0);
   const cards = [
{
    icon:Ev1,
title: "Sustainability at Core",
text: "100% electric, zero-emission vehicles for cleaner operations.",
},
{
    icon:CoinHand,
title: "Cost-Efficient Mobility",
text: "Reduced operational and maintenance costs over time.",
},
{
     icon:Carpool,
title: "Quiet, Comfortable Rides",
text: " Enhanced comfort and performance for daily commutes..",
},
{
     icon:BusinessBuilding,
title: "Corporate-Ready Solutions",
text: "Ready Solutions: Scalable for both large enterprises and small businesses.",
},
{
     icon:Forest,
title: "Commitment to Green Growth",
text: "Every ride contributes to a cleaner environment and responsible future..",
},
{
     icon:Energy,
title: "Sustainability at Core",
text: "100% electric, zero-emission vehicles for cleaner operations..",
},

];
  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
 const [openDropdown, setOpenDropdown] = useState(null);
 
   const toggleDropdown = (id) => {
     setOpenDropdown(openDropdown === id ? null : id);
   };
  return (
    <section className="w-full min-h-screen bg-white text-[#1A1A1A] font-sans">
       {/* CONTENT */}
            <div className="max-w-[86rem] mx-auto px-6">
              {/* Intro Section */}
              <div className=" mb-12">
                <p className="text-[#273270]  text-[19px] ">
We believe sustainability should drive innovation. Our EV segment represents a decisive step towards building a cleaner, greener, and smarter transportation ecosystem. With a growing electric fleet, we aim to help businesses and communities transition to eco-friendly mobility without compromising on efficiency, comfort, or reliability.                </p>
         <div className="w-full px-6 py-16 flex flex-col items-center">
{/* Subtitle */}
<h3 className="text-2xl md:text-3xl font-bold text-[#273270] mb-8 self-start  ">
  Our EV Fleet Advantage
</h3>

<p className="max-w-[86rem]  text-[#273270]  text-[19px] mb-16">
We have carefully built a fleet of modern electric vehicles designed to meet diverse mobility and logistics requirements —
from employee transportation and executive travel to last-mile delivery and corporate transfers. Each vehicle is equipped
with efficient battery systems, silent drivetrains, and low-emission performance, enabling a cleaner travel experience that
supports corporate sustainability goals.
</p>


{/* Key Services Box */}
<h3 className="text-2xl md:text-3xl font-bold text-[#273270] text-center mb-8">
Key Services Under the EV Segment
</h3>


<div className="bg-[#ECF5FF] shadow-[0px_8px_20px_rgba(0,0,0,0.15)] p-8 rounded-[25px] max-w-[86rem] w-full border border-gray-200 rounded-tr-[105px] rounded-bl-[105px]">
<ol className="list-decimal pl-6 space-y-6 text-[#0c2e4e] text-[15px] leading-relaxed">
<li>
<span className="font-semibold text-[21px] block text-start text-[#273270]">
  Corporate & Employee Commute
</span>


<p className="text-[#273270] text-[15px]">
Our electric shuttles and sedans offer businesses an environmentally responsible alternative for daily employee travel.
We ensure a comfortable, safe, and timely commute experience while helping organizations reduce their overall carbon
footprint.
</p>
</li>


<li>
<span className="font-semibold text-[21px] block text-start text-[#273270]">Last-Mile Delivery Solutions</span>


<p className="text-[#273270] text-[15px]">
For businesses seeking to decarbonize their logistics chain, Viyagoo’s electric delivery fleet ensures efficient and
eco-conscious last-mile deliveries. The combination of reliability and sustainability makes it a preferred solution for
retail, e-commerce, and urban delivery operations.
</p>
</li>


<li>
<span className="font-semibold text-[21px] block text-start text-[#273270]">Executive & Luxury EV Rentals</span>


<p className="text-[#273270] text-[15px]">
We extend sustainability into premium travel experiences with our executive-class EV rentals. These vehicles provide the
same sophistication and comfort as traditional luxury cars — but with zero emissions. Ideal for corporate events,
leadership travel, and business meetings, it reflects a modern global standard aligned with global ESG practices.
</p>
</li>


<li>
<span className="font-semibold text-[21px] block text-start text-[#273270]">Airport Transfers with Electric Fleet</span>


<p className="text-[#273270] text-[15px]">
Our electric airport transfer service combines elegance, practicality, and eco-conscious travel. Designed for both
corporate and individual clients, it ensures smooth transit to and from airports while reinforcing your organization’s
commitment to sustainable operations.
</p>
</li>


<li>
<span className="font-semibold text-[21px] block text-start text-[#273270]">Sustainable Partnerships for Businesses</span>

<p className="text-[#273270] text-[15px]">
Viyagoo partners with organizations looking to integrate EVs into their transport strategy. Whether through dedicated
electric fleets, on-demand EV usage, or long-term sustainable mobility planning, we assist businesses in achieving their
ESG and carbon neutrality targets.
</p>
</li>
</ol>
</div>


{/* Why Choose EV Section */}

<h3 className="text-2xl md:text-3xl font-bold text-[#273270] mb-8 self-start text-left  mt-[56px]">
Why Choose Viyagoo's EV Segment?
</h3>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[86rem] w-full">
{cards.map((box, index) => (
<div
key={index}
className="bg-[#F8F8F8] p-6 rounded-2xl  "
>
    <img src={box.icon} alt="" className="h-[30px] bg-[#ECECEC]"/>
<h4 className="text-[#273270] font-semibold text-lg mb-2 text-start mt-[26px] max-w-[170px]">{box.title}</h4>
<p className="text-[#273270] text-[15px] leading-relaxed text-start max-w-[239px]">
{box.text}
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
                src={images[current]}
                alt="Fleet"
                className="w-full h-full object-cover transition-all duration-500 "
              />
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 flex gap-3">
              {images.map((_, index) => (
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
              Every electric mile with Viyagoo is a step toward a cleaner
              tomorrow. Together, we’re shaping a smarter, greener, and more
              responsible mobility ecosystem for the generations ahead.
            </h2>
          </div>
        </div>
      </div>
    </div>
 

     
      
    </section>
  );
};

export default EVSegment;
