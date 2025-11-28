import React from "react";
import stress from "../../assets/sad.png";
import watch from "../../assets/watch.png";
import costIcon from "../../assets/cash.png";
import lock from "../../assets/lock.png";
import happyIcon from "../../assets/happy.png";
import hexaIcon from "../../assets/hexa.png";
import timer from "../../assets/timer.png";

export const Performance = () => {
  const benefits = [
    {
      icon: stress,
      title: "Stress Free Commute",
      desc: "Reduced Mental Load, Relaxed Star",
    },
    {
      icon: watch,
      title: "Time Savings",
      desc: "Maximized Personal Time,Productive Commute",
    },
    {
      icon: costIcon,
      title: "Cost Savings",
      desc: "Eliminated Expenses,Increased Disposable Income.",
    },
    {
      icon: lock,
      title: "Safety & Security",
      desc: "Protected Travel.",
    },
    {
      icon: happyIcon,
      title: "Improved Wellbeing",
      desc: "Better Work Life Balance.",
    },
    {
      icon: timer,
      title: "Predictability & Convenience",
      desc: "Door-to-Door or Near-Door Service.",
    },
    // {
    //   icon: hexaIcon,
    //   title: "Inclusivity",
    //   desc: "Accessability for All Equality of Opportunity.",
    // },
  ];

  const cleanImagePath = (path) => {
    if (!path) return "";
    return `${API_URL}/${path.replace(/^public\//, "").replace(/^\/+/, "")}`;
  };

  return (
    <section className="w-full bg-white py-16">
      <h2 className="text-3xl md:text-4xl font-bold  text-center mb-12">
        How Employers Benefit?
      </h2>

      {/* <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 px-6">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-[45%] lg:w-[22%] bg-white border-2 border-[#0E1D3E] rounded-2xl shadow-sm text-center p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#f6f8fc] border border-[#273270]">
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold  mb-3">{item.title}</h3>
            <p className=" text-lg leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div> */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 justify-items-center">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[320px] mb-8 rounded-2xl shadow-gray-600 shadow-md border-2 border-[#0572E6] rounded-[60px] flex flex-col relative"
          >
            <div className="bg-[#0572E6] text-white pt-10 pb-4 flex flex-col items-center justify-center rounded-[60px] relative">
              <div className="absolute -top-10 border-2 border-[#0572E6] bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-[4px_0_5px_rgba(39,50,112,0.5)]">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 object-contain"
                />
              </div>

              <h3 className="text-2xl text-center px-6">{item.title}</h3>
            </div>

            <div className="py-10 px-6 rounded-b-2xl">
              <p className="text-lg leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
