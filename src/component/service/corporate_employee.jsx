import React, { useRef,useState } from "react";

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
import Leftarrow from '../../assets/leftarrow.png';
import Rightarrow from '../../assets/rightarrow.png';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AirportTransfer from '../../component/service/airport_transfer';
import { UserCheck, Percent, Users, HeartHandshake, FileCheck } from "lucide-react";
import { ChevronDown, MapPin, Zap, Leaf, Share2, Gauge, Shield, DollarSign, Heart } from "lucide-react";


export const Corporate = () => {
const scrollRef = useRef(null);

  // Scroll function
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

  const cards = [
    {
      icon: Job,
      title: "Changing Workforce Expectations",
      desc: "Employees now value work-life balance and wellbeing as much as salary. A hassle-free commute is seen as a core benefit, not a luxury.",
    },
    {
      icon: Clock,
      title: "Round-the-Clock Operations",
      desc: "With global clients and 24×7 business models, safe and reliable transport for night shifts and odd hours is non-negotiable.",
    },
    {
      icon: Diversity,
      title: "Diversity & Inclusion",
      desc: "Providing safe transport, especially for women, supports inclusivity and ensures companies can hire from a broader talent pool.",
    },
    {
      icon: Portfolio,
      title: "Employer Branding",
      desc: "Companies offering structured transport are seen as employee-centric and attract better talent.",
    },
    {
      icon: Job,
      title: "Changing Workforce Expectations",
      desc: "Employees now value work-life balance and wellbeing as much as salary. A hassle-free commute is seen as a core benefit, not a luxury.",
    },
    {
      icon: Clock,
      title: "Round-the-Clock Operations",
      desc: "With global clients and 24×7 business models, safe and reliable transport for night shifts and odd hours is non-negotiable.",
    },
    {
      icon: Diversity,
      title: "Diversity & Inclusion",
      desc: "Providing safe transport, especially for women, supports inclusivity and ensures companies can hire from a broader talent pool.",
    },
    {
      icon: Portfolio,
      title: "Employer Branding",
      desc: "Companies offering structured transport are seen as employee-centric and attract better talent.",
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
       In today’s fast-paced business environment, <strong>mobility has become a critical enabler of productivity, employee satisfaction, and corporate success.</strong> While organizations often focus on salaries, work culture, and office infrastructure as key drivers of employee engagement, one crucial aspect is frequently overlooked — <strong>how employees commute to and from work every day.</strong>
          </p>

          <p className="text-[#273270] leading-relaxed mt-[10px] text-[19px]">
        For many employees, especially in urban centers, commuting is not just a routine task but a <strong>daily challenge.</strong> Long distances, unpredictable traffic, rising fuel costs, and lack of reliable public transportation make the journey to work stressful and time-consuming. Over time, this daily struggle leads to <strong>fatigue, decreased productivity, and even higher attrition rates.</strong>
          </p>
          <p className="text-[#273270] leading-relaxed mt-[10px] text-[19px]">
         This is where <strong>structured employee transportation services</strong> come into play. By providing safe, reliable, and well-managed commuting options, organizations can transform the employee experience, reduce operational inefficiencies, and strengthen their brand as an <strong>employer of choice.</strong>
          </p>
          
        </div>

        {/* Growing Commuting Challenge */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-16">
  {/* Left Section */}
  <div className="md:w-1/2">
    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#273270]">
      The Growing Commuting Challenge
    </h2>
    <p className="text-[#273270]  text-[19px] mb-4">
      Let’s face it — urban mobility is broken in most Indian cities. Employees often spend 2–4 hours per day battling traffic,
      juggling multiple modes of transport, or depending on unreliable third-party cabs. This results in:
    </p>
    <p className="text-[#273270]  text-[19px]">
      For organizations with large workforces, these challenges quickly translate into operational inefficiencies and
       higher costs. Frequent delays or absenteeism affect project delivery timelines, while attrition driven by
      commute-related dissatisfaction increases recruitment and training expenses.
    </p>
  </div>

  {/* Right Section */}
  <div className="md:w-1/2 flex flex-col gap-4">
    {[
      {
        icon:Intelligent,
        title: "Lost productive ",
        desc: "hours that could otherwise be spent at work or with family",
      },
      {
        icon:management,
        title: "Increased stress and fatigue",
        desc: "impacting employee wellbeing and morale",
      },
      {
        icon:error,
        title: "Punctuality issues,",
        desc: "which disrupt business operations",
      },
      {
        icon:protect,
        title: "Safety concerns,",
        desc: "particularly for women employees and those working late or early shifts",
      },
        {
        icon:management,
        title: "Increased stress and fatigue",
        desc: "impacting employee wellbeing and morale",
      },
      {
        icon:protect,
        title: "Safety concerns,",
        desc: "particularly for women employees and those working late or early shifts",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="flex items-start gap-3 bg-[#ECF5FF] rounded-xl px-5 py-6 border border-[#C7D2FE] shadow-sm hover:shadow-md transition-shadow duration-300"
      style={{borderRadius:'24px'}}>
        <div class="flex-shrink-0 w-10 h-10  text-white rounded-full flex items-center border-2 border-[#273270] justify-center overflow-hidden">
  <img
    src={item.icon}
    alt={item.title}
    class="w-full h-full object-contain p-1"
  />
</div>
        <div>
          
          <p className="text-gray-600 text-sm"><span className="text-[#273270] font-semibold   text-[16px] mr-1">{item.title}</span><span className="text-[#273270]  text-[16px]">{item.desc}</span></p>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* Necessity Section */}
       <div className=" mb-16">
       
  {/* Heading Section */}
  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#273270]">
    Why Employee Transportation is No Longer a Perk, But a Necessity
  </h2>
  <p className="text-[#273270] leading-relaxed mb-10 max-w-[54rem] text-[19px]">
    In the past, only large corporations offered employee transport as an additional perk.
    Today, however, it has become a necessity for businesses of all sizes. Several factors
    have driven this shift:
  </p>
 
  {/* Cards Section */}
  <div className="relative w-full flex items-center">
      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-[9px]  hover:bg-[#e2e4ed] z-10 shadow-[1px_2px_4px_0px_#898484]"
      >
        <img src={Leftarrow} alt="Left Arrow" className="w-5 h-5" />
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
        {cards.map((item, i) => (
          <div
            key={i}
            className="min-w-[260px] bg-[#ECF5FF] border border-[#ECF5FF] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start text-left rounded-lg"
          >
            <div className="w-10 h-10 flex items-center justify-center mb-4 mx-auto">
              <img
                src={item.icon}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2 text-[#273270] leading-relaxed">
                {item.title}
              </h3>
              <p className="text-[#273270] text-[16px] leading-relaxed w-[212px] mx-auto mt-[21px]">
                {item.desc}
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
        <img src={Rightarrow} alt="Right Arrow" className="w-5 h-5" />
      </button>
    </div>
</div>


        {/* Business Case Section */}
       <div className="w-full bg-[#ECF5FF] py-6">
      <div className="max-w-5xl mx-auto px-0">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#273270] text-center">
          The Business Case for Employee Transportation
        </h2>
        <p className="text-[#273270] mb-8  max-w-4xl mx-auto text-[19px]">
          Providing transportation is not just about employee convenience — it directly impacts the bottom line. Well-structured transport services enable companies to:
        </p>

        {/* Two Columns Layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            {[
              {
                icon: Learning,
                title: "Increase Productivity:",
                desc: "Employees arrive on time, less fatigued, and ready to focus.",
              },
              {
                icon: Hand,
                title: "Cut Costs:",
                desc: "Route optimization and shared mobility models save 15–25% compared to adhoc cabs.",
              },
              {
                icon: Female,
                title: "Boost Engagement:",
                desc: "Happy employees are more motivated, leading to higher performance.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex-shrink-0 w-15 h-12  rounded-full flex items-center justify-center p-2">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  
<p className="text-gray-600 text-sm"><span className="text-[#273270] font-semibold  mr-1 text-[16px]">{item.title}</span>: <span className="text-[#273270] text-[16px]">{item.desc}</span></p>                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {[
              {
                icon: Event,
                title: "Reduce Attrition:",
                desc: "A reliable commute makes employees more loyal and reduces turnover costs.",
              },
              {
                icon: Passed,
                title: "Ensure Compliance:",
                desc: "Meeting safety and legal standards protects the organization from liability.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex-shrink-0 w-12 h-12  rounded-full flex items-center justify-center p-2">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
<p className="text-gray-600 text-sm"><span className="text-[#273270] font-semibold text-[16px] mr-1">{item.title}</span>: <span className="text-[#273270] text-[16px]">{item.desc}</span></p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-[19px] text-[#273270] mt-10 italic max-w-4xl mx-auto">
          Simply put, investing in employee transport is an investment in business continuity, efficiency, and reputation.
        </p>
      </div>
    </div>
      </div>
      <div className="max-w-[86rem] mx-auto px-6  space-y-20 font-sans mt-16">
      {/* Section 1: How the Future of Employee Mobility is Evolving */}
      <div className="space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#273270]">
          How the Future of Employee Mobility is Evolving
        </h2>
        <p className="text-[#273270]   mx-auto leading-relaxed text-[19px]">
         The employee transportation landscape is undergoing a transformation driven by <strong>technology and sustainability.</strong> technology and sustainability. Modern organizations are moving away from manual rostering and unorganized fleets toward <strong>digitally managed, eco-friendly mobility solutions.</strong> Key trends include:
        </p>

        <div className="grid md:grid-cols-2 gap-0 items-center">
          {/* Left: Features List */}
          <div className="space-y-6">
            {[
              {
                icon: Track,
                title: "ETMS Integration",
                desc: "Employee Transport Management Systems enable automated routing, GPS tracking, digital attendance, and real-time alerts.",
              },
              {
                icon: Tree,
                title: "AI-Powered Route Optimization",
                desc: "Smart algorithms minimize travel time and reduce costs.",
              },
              {
                icon: Buy,
                title: "Green Mobility",
                desc: "Growing adoption of electric vehicles (EVs) aligns with corporate ESG goals.",
              },
              {
                icon: Easy,
                title: "Shared & Pooled Transport Models",
                desc: "Reduce per-employee costs while cutting traffic congestion.",
              },
              {
                icon: Control,
                title: "Data-Driven Insights",
                desc: "Track usage, analytics help optimize fleet size, routes, and vendor performance.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12  rounded-full flex items-center justify-center">
                  <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
                </div>
                <div>
                  <p className="text-gray-600 text-sm"><span className="text-[#273270] font-semibold text-[16px] mr-1">{item.title}</span>- <span className="text-[16px] text-[#273270]">{item.desc}</span></p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[35rem]">
              <img
                src={Serviceimage}
                alt="Future of employee mobility - woman looking at hot air balloons"
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>

        <p className="text-[#273270] text-center italic mt-8 text-[19px] mx-auto">
          Forward-thinking companies are already embracing these trends, making transportation not just a support function 
          but a <strong>strategic enabler of sustainable growth</strong>.
        </p>
      </div>

      {/* Section 2: Why Viyagoo Believes in Smarter Employee Transportation */}
      <div className="space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#273270]">
          Why Viyagoo Believes in Smarter Employee Transportation
        </h2>
        <p className="text-[#273270] text-center max-w-[77rem] mx-auto leading-relaxed text-[18px]">
          At Viyagoo, we believe mobility is more than just moving people from point A to point B — it’s about creating value for 
          both employees and employers. We approach employee transportation not as a vendor but as a consulting partner, 
          helping organizations design transport ecosystems that are:
        </p>

        {/* Dropdown Cards */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {[
            {
              id: "safe",
              icon: Shield,
              title: "Safe & Reliable",
              desc: "Ensuring every employee feels secure, no matter the time of travel.",
               detail: "Efficient & Cost-Optimized",
            },
            {
              id: "efficient",
              icon: DollarSign,
              title: "Efficient & Cost-Optimized",
              desc: "",
             detail: "Efficient & Cost-Optimized",
            },
            {
              id: "centric",
              icon: Heart,
              title: "Employee-Centric",
              desc: "",
               detail: "Efficient & Cost-Optimized",
            },
            {
              id: "sustainable",
              icon: Leaf,
              title: "Sustainable & Future-Ready",
              desc: "",
               detail: "Efficient & Cost-Optimized",
            },
          ].map((item) => (
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
  <h3 className="font-semibold text-[#273270] text-[22px]">{item.title}</h3>
  <p className="text-[#1E3A8A] text-sm mt-1 text-[16px]">{item.desc}</p>
</div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#1E3A8A] transition-transform duration-300 ${
                    openDropdown === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === item.id && (
                <div className="px-6 pb-4 pt-2 border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-[#273270]  max-w-[78rem] mx-auto  mt-8 text-[19px]">
          By rethinking transportation, organizations can unlock productivity, improve retention, and achieve long-term cost 
          efficiency, all while ensuring employee wellbeing remains at the center.
        </p>
      </div>

      {/* Closing Thought */}
      <div className="rounded-3xl p-8 md:p-12 space-y-6 ">
  <div className=" mx-auto space-y-4">
    <h3 className="text-[28px] text-2xl md:text-3xl font-bold text-[#273270]">
      Closing Thought
    </h3>
    <p className="text-[#273270] text-[19px] leading-relaxed">
      In the evolving world of work, transportation is no longer an afterthought — it is a strategic necessity. 
      Companies that invest in structured, technology-driven employee transport solutions will not only solve today’s commuting challenges 
      but also build a workplace that is safe, efficient, and future-ready.
    </p>
    <p className="text-[#273270] text-[19px] ">
      At Viyagoo, we’re committed to making that future a reality — one ride at a time.
    </p>
  </div>
</div>
    </div>
    </section>
  );
};

export default Corporate;
