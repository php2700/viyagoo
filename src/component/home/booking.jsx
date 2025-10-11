import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
// import HeroBanner from "../../assets/herobanner.png";
import HeroBanner from "../../assets/herobanner.jpg";


export const BookingFormBanner = () => {
      const [tripType, setTripType] = useState("Airport");

      return (
            <section className="relative w-full ">
                  {/* Background Image */}
                  <img
                        src={HeroBanner}
                        alt="Banner"
                        className="w-full h-[90vh] object-cover"
                  />

                  {/* Form Section */}
                  <div className="absolute left-0 w-full translate-y-1/2 bottom-0">
                        <div className="bg-blue-100/60 p-6 sm:p-10  shadow-lg w-full">
                              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
                                    {["Airport", "Local", "Outstation"].map(
                                          (type) => (
                                                <label
                                                      key={type}
                                                      className="flex items-center gap-2  font-medium cursor-pointer"
                                                >
                                                      <input
                                                            type="radio"
                                                            name="tripType"
                                                            value={type}
                                                            checked={
                                                                  tripType ===
                                                                  type
                                                            }
                                                            onChange={() =>
                                                                  setTripType(
                                                                        type
                                                                  )
                                                            }
                                                            className="accent-[#0E1D3E]"
                                                      />
                                                      {type}
                                                </label>
                                          )
                                    )}
                              </div>

                              {/* Form Fields */}
                              <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
                                    {[
                                          {
                                                label: "Name",
                                                placeholder: "Enter",
                                          },
                                          {
                                                label: "From",
                                                placeholder: "Enter",
                                          },
                                          { label: "To", placeholder: "Enter" },
                                          {
                                                label: "Pickup Date & Time",
                                                placeholder: "Enter",
                                          },
                                          {
                                                label: "Seats",
                                                placeholder: "Enter",
                                          },
                                          {
                                                label: "Vehicle Type",
                                                placeholder: "Enter",
                                          },
                                    ].map((field, i) => (
                                          <div
                                                key={i}
                                                className="flex flex-col"
                                          >
                                                <label className=" font-medium mb-1">
                                                      {field.label}
                                                </label>
                                                <div className="relative">
                                                      <input
                                                            type="text"
                                                            placeholder={
                                                                  field.placeholder
                                                            }
                                                            className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                                      />
                                                      <IoChevronDown className="absolute right-3 top-3 text-gray-400" />
                                                </div>
                                          </div>
                                    ))}
                              </form>

                              {/* Submit Button */}
                              <div className="flex justify-center mt-8">
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-full shadow-md transition duration-300">
                                          Get Quote
                                    </button>
                              </div>
                        </div>
                  </div>
            </section>
      );
};
