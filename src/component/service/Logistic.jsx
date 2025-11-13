import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
import HeroBanner from "../../assets/herobanner.jpg";
import Job from '../../assets/job.png';
import Clock from '../../assets/clocked.png';
import Diversity from '../../assets/diversity.png';
import Portfolio from '../../assets/portfolio.png';
import Learning from '../../assets/learning.png'; 
import Event from '../../assets/event.png';
import Hand from '../../assets/hand.png';    
import Passed from '../../assets/passed.png';    
import Female from '../../assets/female.png';  
import Serviceimage from '../../assets/serviceimage1.png'; 
import Track from '../../assets/track.png';
import Tree from '../../assets/tree.png';
import Buy from '../../assets/buy.png';
import Easy from '../../assets/easy.png';
import Control from '../../assets/control.png';
import Intelligent from '../../assets/intelligence.png';
import management from '../../assets/management.png';
import protect from '../../assets/protect.png';
import error from '../../assets/error.png';
import AirportTransfer from '../../component/service/airport_transfer';
import { UserCheck, Percent, Users, HeartHandshake, FileCheck } from "lucide-react";
import { ChevronDown, MapPin, Zap, Leaf, Share2, Gauge, Shield, DollarSign, Heart } from "lucide-react";
import Airoplan from '../../assets/airoplan.png';
import Airoplanroad from '../../assets/airoplanroad.png';
export const Logistics = () => {
    const cards = [
{
title: "Business-to-Business (B2B) Deliveries",
text: "We ensure products move smoothly between warehouses, suppliers, and business partners. Whether it is raw materials, semi-finished goods, or finished products, we ensure timely delivery while maintaining the integrity of each shipment.",
},
{
title: "Partner & Vendor Distribution",
text: "Managing deliveries to multiple partners or vendors requires careful planning and reliability. We specialize in handling multi-point distribution, ensuring that each partner receives their shipments accurately and on time.",
},
{
title: "Bulk & Consolidated Shipments",
text: "We ensure that high-volume deliveries are handled efficiently while maintaining a high level of safety and professionalism.",
},
{
title: "Scheduled & On-Demand Deliveries",
text: "Every business has different timing requirements. Our logistics services provide both scheduled deliveries for predictable needs and on-demand deliveries for urgent or unexpected requirements.",
},
{
title: "Secure Handling & Safe Transport",
text: "We prioritize the safety of every shipment regardless of size or type. From careful loading and secure transport to professional handling at each touchpoint, our logistics services ensure products arrive in perfect condition.",
},
{
title: "Customized Solutions for Every Business",
text: "No two businesses operate the same way. We provide tailored logistics solutions to fit each client’s specific needs, whether it’s a complex, multi-location distribution network or a simple last-mile delivery.",
},
];
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
          <p className="text-[#273270]  text-[19px]">
     At Viyagoo, we provide seamless logistics and delivery solutions to all client segments that help businesses move their products efficiently from origin to destination. As a reliable delivery partner, we focus on timely, safe, and professional transportation, ensuring every shipment reaches its intended location with care. Our services are designed to simplify supply chain operations, support business growth, and deliver a consistent, dependable experience to partners and customers alike.
          </p>
             <div className="w-full min-h-screen bg-white px-6 py-12 flex flex-col items-center">
<h1 className="text-2xl md:text-3xl font-bold text-center text-[#273270] mb-10">
Core Logistics Services (Visually appealing cards)
</h1>


<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[86rem] w-full">
{cards.map((card, index) => (
<div
key={index}
className="bg-[#ECF5FF] p-8 rounded-tr-[92px] rounded-bl-[92px] shadow-[3px_7px_4px_#c7c1c1]  border border-gray-200 hover:shadow-lg transition-all duration-300"
>
<h2 className="text-xl font-semibold text-[#273270] mb-3">
{card.title}
</h2>
<p className="text-[#273270] leading-relaxed text-sm md:text-base">
{card.text}
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
Reliability & On-Time Deliveries
</h3>
<p className="text-[#273270] text-sm ">
Our team has an in-depth understanding of the USA real estate market.
</p>
</div>


<div>
<h3 className="text-lg font-semibold text-[#273270] lg:mt-[80px] md:mt-[50px]">
Professional Handling Of All Shipments
</h3>
<p className="text-[#273270] text-sm">
We provide customized solutions to meet your unique property requirements.
</p>
</div>
</div>


{/* Center Image */}
<div className="flex justify-center">
<img
src={Airoplan}
alt="Airplane"
className="w-[356px] h-[425px] object-cover"
/>
</div>


{/* Right Text */}
<div className="space-y-6">
<div>
<h3 className="text-lg font-semibold text-[#273270]">
Flexible & Scalable Solutions
</h3>
<p className="text-[#273270] text-sm">
Our team has an in-depth understanding of the USA real estate market.
</p>
</div>


<div className="lg:mt-[84px] md:mt-[50px]">
<h3 className="text-lg font-semibold text-[#273270]">
Experienced Team & Industry Expertise
</h3>
<p className="text-[#273270] text-sm">
We are proud members of Industry Associations and have received accolades for our outstanding service.
</p>
</div>


<div className="lg:mt-[56px] md:mt-[40px]">
<h3 className="text-lg font-semibold text-[#273270]">
Personalized Client Support
</h3>
<p className="text-[#273270] text-sm">
We are proud members of Industry Associations and have received accolades for our outstanding service.
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
src={Airoplanroad}
alt="Process"
className="w-[385px] h-[568px] object-cover "
/>
</div>


{/* Steps */}
<div className="space-y-10 lg:-mt-[92px] md:-mt-[60px]">

  {/* Step 1 */}
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-[#18A7B9] rounded-tl-[1px] rounded-bl-[26px] rounded-tr-[26px] rounded-br-[1px]
 flex justify-center items-center shadow-md">
      
    </div>
    <div className="w-12 h-12 flex justify-center items-center">
      <span className="text-[#273270] text-xl font-bold text-[38px] -mt-12 mr-[88px]">01</span>
    </div>
    <h3 className="text-xl font-semibold text-[#273270] relative right-[38px] top-[-8px] text-[25px]">Pickup & <br /> Consolidation</h3>
  </div>

  {/* Step 2 */}
  <div className="flex items-center gap-4">
   <div className="w-12 h-12 bg-[#FE8432] rounded-tl-[1px] rounded-bl-[26px] rounded-tr-[26px] rounded-br-[1px]
 flex justify-center items-center shadow-md">
      
    </div>
    <div className="w-12 h-12 flex justify-center items-center">
      <span className="text-[#273270] text-xl font-bold text-[38px] -mt-12 mr-[88px]">02</span>
    </div>
    <h3 className="text-xl font-semibold text-[#273270] relative right-[38px] top-[-8px] text-[25px]">Transport & <br /> Handling</h3>
  </div>

  {/* Step 3 */}
  <div className="flex items-center gap-4">
  <div className="w-12 h-12 bg-[#42B918] rounded-tl-[1px] rounded-bl-[26px] rounded-tr-[26px] rounded-br-[1px]
 flex justify-center items-center shadow-md">
      
    </div>
    <div className="w-12 h-12 flex justify-center items-center">
      <span className="text-[#273270] text-xl font-bold text-[38px] -mt-12 mr-[88px]">03</span>
    </div>
    <h3 className="text-xl font-semibold text-[#273270] relative right-[38px] top-[-8px] text-[25px]">Delivery to Partner <br /> or Customer</h3>
  </div>

  {/* Step 4 */}
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-[#3F98FF] rounded-tl-[1px] rounded-bl-[26px] rounded-tr-[26px] rounded-br-[1px]
 flex justify-center items-center shadow-md">
      
    </div>
    <div className="w-12 h-12 flex justify-center items-center">
      <span className="text-[#273270] text-xl font-bold text-[38px] -mt-12 mr-[88px]">04</span>
    </div>
    <h3 className="text-xl font-semibold text-[#273270] relative right-[38px] top-[-8px] text-[25px]">Support & Follow- <br />up</h3>
  </div>

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
