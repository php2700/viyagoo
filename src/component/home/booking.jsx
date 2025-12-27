import React, { useState, useEffect, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
import axios from "axios";

// API Base URL
const API_URL = import.meta.env.VITE_APP_URL;

export const BookingFormBanner = () => {
  const pickupDateRef = useRef(null);

  // =============== Banner State ===============
  const [banner, setBanner] = useState({
    video: "",
    status: false,
    image: "",
    type: "",
  });

  useEffect(() => {
    fetch(`${API_URL}api/user/get-banner`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API FULL RESPONSE ===>", data);
        console.log("VIDEO PATH:", data?.data?.video);

        setBanner({
          image: data?.data?.image,
          type: data?.data?.type,
          video: data?.data?.video || "",
          status: data?.data?.status || false,
        });
      })
      .catch((err) => console.error("Banner Fetch Error:", err));
  }, []);

  // ******* FIXED: FINAL VIDEO URL *******
  const videoUrl = banner.video
    ? `${API_URL}${banner.video.replace("public/", "")}`
    : "";

  // =============== Booking Form States ===============
  const [tripType, setTripType] = useState("Airport");

  const [formData, setFormData] = useState({
    name: "",
    from: "",
    to: "",
    pickupDate: "",
    seats: "",
    vehicleType: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // =============== Handlers ===============
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,

      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage("");

    const payload = {
      ...formData,
      location: tripType,
      seats: Number(formData.seats),
    };

    try {
      await axios.post(`${API_URL}api/user/quote`, payload);

      setSuccessMessage("Quote submitted successfully!");
      setFormData({
        name: "",
        from: "",
        to: "",
        pickupDate: "",
        seats: "",
        vehicleType: "",
      });

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Something went wrong. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  const getMinDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  // =============== Form Field List ===============
  const formFields = [
    { label: "Name", name: "name", type: "text", placeholder: "Enter name" },
    {
      label: "From",
      name: "from",
      type: "text",
      placeholder: "Enter pickup location",
    },
    { label: "To", name: "to", type: "text", placeholder: "Enter destination" },
    { label: "Pickup Date & Time", name: "pickupDate", type: "datetime-local" },
    {
      label: "Seats",
      name: "seats",
      type: "number",
      placeholder: "Enter number of seats",
    },
    {
      label: "Vehicle Type",
      name: "vehicleType",
      type: "text",
      placeholder: "e.g., Sedan, SUV",
    },
  ];

  //   return (
  //     <section className="relative w-full">
  //       {banner?.type == "image" ? (
  //         <img
  //           src={`${import.meta.env.VITE_APP_URL}${banner?.image}`}
  //           className="w-full h-[100vh] object-cover"
  //         />
  //       ) : (
  //         <video
  //           src={`${import.meta.env.VITE_APP_URL}${banner?.video}`}
  //           autoPlay
  //           muted
  //           loop
  //           playsInline
  //           className="w-full h-[100vh] object-cover"
  //         />
  //       )}

  //       {/* =============== Form Section =============== */}
  //       <div className="absolute left-0 w-full translate-y-1/2 bottom-0">
  //         <div className="bg-blue-100/60 p-6 sm:p-10 shadow-lg w-full">
  //           {/* Trip Type Buttons */}
  //           <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
  //             {["Airport", "Local", "Outstation"].map((type) => (
  //               <label
  //                 key={type}
  //                 className="flex items-center gap-2 font-medium cursor-pointer"
  //               >
  //                 <input
  //                   type="radio"
  //                   name="tripType"
  //                   value={type}
  //                   checked={tripType === type}
  //                   onChange={() => setTripType(type)}
  //                   className="accent-[#0E1D3E]"
  //                 />
  //                 {type}
  //               </label>
  //             ))}
  //           </div>

  //           {/* Form */}
  //           <form
  //             id="demo"
  //             onSubmit={handleSubmit}
  //             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
  //           >
  //             {formFields.map((field) => (
  //               <div key={field.name} className="flex flex-col">
  //                 <label className="font-medium mb-1">{field.label}</label>
  //                 <div className="relative">
  //                   <input
  //                     ref={field.name === "pickupDate" ? pickupDateRef : null}
  //                     type={field.type}
  //                     name={field.name}
  //                     placeholder={field.placeholder}
  //                     value={formData[field.name]}
  //                     onChange={handleChange}
  //                     required
  //                     min={
  //                       field.name === "pickupDate"
  //                         ? getMinDateTime()
  //                         : field.name === "seats"
  //                         ? 1
  //                         : undefined
  //                     }
  //                     onClick={() => {
  //                       if (
  //                         field.name === "pickupDate" &&
  //                         pickupDateRef.current?.showPicker
  //                       ) {
  //                         pickupDateRef.current.showPicker();
  //                       }
  //                     }}
  //                     className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
  //                   />
  //                 </div>
  //               </div>
  //             ))}

  //             {/* Submit Button */}
  //             <div className="flex justify-center mt-8 lg:col-span-3 sm:col-span-2">
  //               <button
  //                 type="submit"
  //                 disabled={loading}
  //                 className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-full shadow-md transition duration-300 disabled:bg-gray-400"
  //               >
  //                 {loading ? "Submitting..." : "Get Quote"}
  //               </button>
  //             </div>
  //           </form>

  //           {/* Success / Error Messages */}
  //           <div className="max-w-xl mx-auto mt-4">
  //             {successMessage && (
  //               <p className="text-center text-green-800 font-bold bg-green-200 border border-green-600 rounded-md p-3">
  //                 {successMessage}
  //               </p>
  //             )}
  //             {error && (
  //               <p className="text-center text-red-800 font-bold bg-red-200 border border-red-600 rounded-md p-3">
  //                 {error}
  //               </p>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   );
  // };
  //  return (

  //   <>
  //     {/* Hero Banner Section - Full height, no overlap */}
  //   <section className="relative w-full h-[80vh] md:h-[100vh] overflow-hidden">
  //   {banner?.type === "image" ? (
  //     <img
  //       src={`${import.meta.env.VITE_APP_URL}${banner?.image}`}
  //       alt="Banner"
  //       className="absolute inset-0 w-full h-full object-cover"
  //     />
  //   ) : (
  //     <video
  //       src={`${import.meta.env.VITE_APP_URL}${banner?.video}`}
  //       autoPlay
  //       muted
  //       loop
  //       playsInline
  //       className="absolute inset-0 w-full h-full object-cover"
  //     />
  //   )}

  //   <div className="absolute inset-0 bg-black/50"></div>

  //   <div className="absolute inset-0 flex flex-col justify-center text-center md:text-left text-white px-4 sm:px-8 md:px-12">

  //   <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-6 drop-shadow-2xl leading-tight max-w-5xl md:pl-12">
  //     Leading Transport and Mobility Consultancy in India
  //   </h1>
  // <div className="text-base sm:text-lg md:text-xl lg:text-xl font-medium drop-shadow-lg max-w-4xl md:pl-12">  <h6> Top Employee Transportation Services in Bangalore</h6>
  //   <h6> Employee Daily Pickup & Drop – Employee Transport Service</h6>
  //       <h6> Corporate Employee Transportation Services </h6>
  //      <h6> Transport Management Solution for Businesses in Bangalore  </h6>
  //      <h6> Best Corporate Shuttle Services in Bangalore   </h6>
  //       <h6>  Top Corporate Transport & Logistics Solution Providers    </h6>
  // <h6>  ETMS, EV fleet operations, airport transfers, executive chauffeur services  </h6></div>

  //   </div>
  // </section>

  //     <section className="w-full bg-gray-50 py-12 md:py-20 -mt-10 md:-mt-20 relative z-10">
  //       <div className="max-w-6xl mx-auto px-4">
  //         <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12">

  //           <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
  //             {["Airport", "Local", "Outstation"].map((type) => (
  //               <label
  //                 key={type}
  //                 className="flex items-center gap-3 font-semibold text-gray-800 cursor-pointer select-none"
  //               >
  //                 <input
  //                   type="radio"
  //                   name="tripType"
  //                   value={type}
  //                   checked={tripType === type}
  //                   onChange={() => setTripType(type)}
  //                   className="w-5 h-5 accent-[#0E1D3E]"
  //                 />
  //                 <span className={tripType === type ? "text-[#0E1D3E]" : "text-gray-700"}>
  //                   {type} Trip
  //                 </span>
  //               </label>
  //             ))}
  //           </div>

  //           <form
  //             id="demo"
  //             onSubmit={handleSubmit}
  //             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
  //           >
  //             {formFields.map((field) => (
  //               <div key={field.name} className="flex flex-col">
  //                 <label className="font-semibold text-gray-700 mb-2">
  //                   {field.label}
  //                 </label>
  //                 <input
  //                   ref={field.name === "pickupDate" ? pickupDateRef : null}
  //                   type={field.type}
  //                   name={field.name}
  //                   placeholder={field.placeholder}
  //                   value={formData[field.name]}
  //                   onChange={handleChange}
  //                   required
  //                   min={
  //                     field.name === "pickupDate"
  //                       ? getMinDateTime()
  //                       : field.name === "seats"
  //                       ? 1
  //                       : undefined
  //                   }
  //                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E1D3E] transition"
  //                 />
  //               </div>
  //             ))}

  //             <div className="lg:col-span-3 sm:col-span-2 flex justify-center mt-8">
  //               <button
  //                 type="submit"
  //                 disabled={loading}
  //                 className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-16 rounded-full shadow-lg transition duration-300 disabled:bg-gray-400"
  //               >
  //                 {loading ? "Submitting..." : "Get Quote"}
  //               </button>
  //             </div>
  //           </form>

  //           <div className="mt-8 max-w-xl mx-auto">
  //             {successMessage && (
  //               <p className="text-center text-green-800 font-bold bg-green-100 border border-green-500 rounded-lg p-4">
  //                 {successMessage}
  //               </p>
  //             )}
  //             {error && (
  //               <p className="text-center text-red-800 font-bold bg-red-100 border border-red-500 rounded-lg p-4">
  //                 {error}
  //               </p>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
  // };
  return (
    <>
      {/* Hero Banner Section - Full height, no overlap */}
      <section className="relative w-full w-full h-screen overflow-hidden">
        {banner?.type === "image" ? (
          <img
            src={`${import.meta.env.VITE_APP_URL}${banner?.image}`}
            alt="Banner"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        ) : (
          <video
            src={`${import.meta.env.VITE_APP_URL}${banner?.video}`}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Optional overlay for text or gradient */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Optional content in the banner */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            {banner?.heading}
          </h1>
        </div>

        <div
          className="
    absolute inset-0
    flex flex-col
    justify-start md:justify-center
    text-left text-white
    px-4 sm:px-6 md:px-12

    pt-[calc(env(safe-area-inset-top)+8rem)]
    sm:pt-[calc(env(safe-area-inset-top)+9rem)]
    md:pt-0
  "
        >
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 drop-shadow-2xl leading-tight max-w-5xl md:pl-12">
            Leading Transport and Mobility Consultancy in India
          </h2>

          {/* Text */}
          <div className="text-sm sm:text-base md:text-xl font-medium drop-shadow-lg max-w-4xl space-y-2 md:pl-12">
            <p>Best Corporate Shuttle Services in Bangalore</p>
            <p>Corporate Employee Transportation Services</p>
            <p>Top Employee Transportation Services in Bangalore</p>
            <p>Top Corporate Transport & Logistics Solution Providers</p>
            <p>Employee Daily Pickup & Drop – Employee Transport Service</p>
            <p>Transport Management Solution for Businesses in Bangalore</p>
            <p>ETMS, EV fleet operations, airport transfers, executive chauffeur services</p>
          </div>
        </div>
      </section>

      <section
        id="demo"
        className="w-full bg-gray-50 py-12 md:py-20 -mt-10 md:-mt-20 relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-12">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
              {["Airport", "Local", "Outstation"].map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 font-semibold text-gray-800 cursor-pointer select-none"
                >
                  <input
                    type="radio"
                    name="tripType"
                    value={type}
                    checked={tripType === type}
                    onChange={() => setTripType(type)}
                    className="w-5 h-5 accent-[#0E1D3E]"
                  />
                  <span
                    className={
                      tripType === type ? "text-[#0E1D3E]" : "text-gray-700"
                    }
                  >
                    {type} Trip
                  </span>
                </label>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {formFields.map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-2">
                    {field.label}
                  </label>
                  <input
                    ref={field.name === "pickupDate" ? pickupDateRef : null}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    min={
                      field.name === "pickupDate"
                        ? getMinDateTime()
                        : field.name === "seats"
                        ? 1
                        : undefined
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E1D3E] transition"
                  />
                </div>
              ))}

              <div className="lg:col-span-3 sm:col-span-2 flex justify-center mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-16 rounded-full shadow-lg transition duration-300 disabled:bg-gray-400"
                >
                  {loading ? "Submitting..." : "Get Quote"}
                </button>
              </div>
            </form>

            <div className="mt-8 max-w-xl mx-auto">
              {successMessage && (
                <p className="text-center text-green-800 font-bold bg-green-100 border border-green-500 rounded-lg p-4">
                  {successMessage}
                </p>
              )}
              {error && (
                <p className="text-center text-red-800 font-bold bg-red-100 border border-red-500 rounded-lg p-4">
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
