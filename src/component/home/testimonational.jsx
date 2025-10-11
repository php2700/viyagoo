import React, { useState } from "react";
import leftQuote from "../../assets/quoteLeft.png";
import rightQuote from "../../assets/rightQuote.png";

const Testimonials = () => {
      const [currentIndex, setCurrentIndex] = useState(0);

      const testimonials = [
            {
                  name: "Marry Wilson",
                  title: "Founder and CEO of PREMIUM",
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit",
            },
      ];

      const handlePrev = () => {
            setCurrentIndex((prev) =>
                  prev > 0 ? prev - 1 : testimonials.length - 1
            );
      };

      const handleNext = () => {
            setCurrentIndex((prev) =>
                  prev < testimonials.length - 1 ? prev + 1 : 0
            );
      };

      return (
            <section className="w-full max-w-7xl mx-auto py-10 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 inline-block">
                        Testimonials
                  </h2>

                  <div className="bg-white rounded-[20px] p-10 shadow-xl border border-gray-300 relative flex flex-col items-center justify-center">
                        {/* Name and title */}
                        <div className="mb-6 text-center">
                              <h3 className="font-semibold text-lg md:text-xl">
                                    {testimonials[currentIndex].name}
                              </h3>
                              <p className=" text-sm md:text-base">
                                    {testimonials[currentIndex].title}
                              </p>
                        </div>

                        {/* Testimonial text with image quotes */}
                        <div className="max-w-3xl mx-auto text-center relative flex flex-col items-center">
                              {/* Left Quote Image */}
                              <img
                                    src={leftQuote}
                                    alt="Left Quote"
                                    className="w-10 md:w-12 mb-2 self-start"
                              />

                              <p className=" text-base md:text-xl leading-relaxed  px-4">
                                    {testimonials[currentIndex].text}
                              </p>

                              {/* Right Quote Image */}
                              <img
                                    src={rightQuote}
                                    alt="Right Quote"
                                    className="w-10 md:w-12 mt-2 self-end"
                              />
                        </div>

                        {/* Navigation buttons */}
                        <button
                              onClick={handlePrev}
                              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition"
                        >
                              <svg
                                    className="w-5 h-5 text-gray-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                              >
                                    <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M15 19l-7-7 7-7"
                                    />
                              </svg>
                        </button>

                        <button
                              onClick={handleNext}
                              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition"
                        >
                              <svg
                                    className="w-5 h-5 text-gray-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                              >
                                    <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M9 5l7 7-7 7"
                                    />
                              </svg>
                        </button>
                  </div>
            </section>
      );
};

export default Testimonials;
