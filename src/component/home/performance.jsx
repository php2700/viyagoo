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
            {
                  icon: hexaIcon,
                  title: "Inclusivity",
                  desc: "Accessability for All Equality of Opportunity.",
            },
      ];

      return (
            <section className="w-full bg-white py-16">
                  <h2 className="text-3xl md:text-4xl font-bold  text-center mb-12">
                        How Employers Benefit?
                  </h2>

                  <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-10 px-6">
                        {benefits.map((item, index) => (
                              <div
                                    key={index}
                                    className="w-full sm:w-[45%] lg:w-[22%] bg-white border-2 border-[#273270] rounded-2xl shadow-sm text-center p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
                              >
                                    <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-[#f6f8fc] border border-[#273270]">
                                          <img
                                                src={item.icon}
                                                alt={item.title}
                                                className="w-10 h-10 object-contain"
                                          />
                                    </div>

                                    <h3 className="text-2xl font-bold  mb-3">
                                          {item.title}
                                    </h3>
                                    <p className=" text-lg leading-relaxed">
                                          {item.desc}
                                    </p>
                              </div>
                        ))}
                  </div>
            </section>
      );
};
