// import React, { useState } from "react";
// import { IoChevronDown } from "react-icons/io5";
// // import HeroBanner from "../../assets/herobanner.png";
// import HeroBanner from "../../assets/herobanner.jpg";


// export const BookingFormBanner = () => {
//       const [tripType, setTripType] = useState("Airport");

//       return (
//             <section className="relative w-full ">
//                   {/* Background Image */}
//                   <img
//                         src={HeroBanner}
//                         alt="Banner"
//                         className="w-full h-[90vh] object-cover"
//                   />

//                   {/* Form Section */}
//                   <div className="absolute left-0 w-full translate-y-1/2 bottom-0">
//                         <div className="bg-blue-100/60 p-6 sm:p-10  shadow-lg w-full">
//                               <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
//                                     {["Airport", "Local", "Outstation"].map(
//                                           (type) => (
//                                                 <label
//                                                       key={type}
//                                                       className="flex items-center gap-2  font-medium cursor-pointer"
//                                                 >
//                                                       <input
//                                                             type="radio"
//                                                             name="tripType"
//                                                             value={type}
//                                                             checked={
//                                                                   tripType ===
//                                                                   type
//                                                             }
//                                                             onChange={() =>
//                                                                   setTripType(
//                                                                         type
//                                                                   )
//                                                             }
//                                                             className="accent-[#0E1D3E]"
//                                                       />
//                                                       {type}
//                                                 </label>
//                                           )
//                                     )}
//                               </div>

//                               {/* Form Fields */}
//                               <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
//                                     {[
//                                           {
//                                                 label: "Name",
//                                                 placeholder: "Enter",
//                                           },
//                                           {
//                                                 label: "From",
//                                                 placeholder: "Enter",
//                                           },
//                                           { label: "To", placeholder: "Enter" },
//                                           {
//                                                 label: "Pickup Date & Time",
//                                                 placeholder: "Enter",
//                                           },
//                                           {
//                                                 label: "Seats",
//                                                 placeholder: "Enter",
//                                           },
//                                           {
//                                                 label: "Vehicle Type",
//                                                 placeholder: "Enter",
//                                           },
//                                     ].map((field, i) => (
//                                           <div
//                                                 key={i}
//                                                 className="flex flex-col"
//                                           >
//                                                 <label className=" font-medium mb-1">
//                                                       {field.label}
//                                                 </label>
//                                                 <div className="relative">
//                                                       <input
//                                                             type="text"
//                                                             placeholder={
//                                                                   field.placeholder
//                                                             }
//                                                             className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//                                                       />
//                                                       <IoChevronDown className="absolute right-3 top-3 text-gray-400" />
//                                                 </div>
//                                           </div>
//                                     ))}
//                               </form>

//                               {/* Submit Button */}
//                               <div className="flex justify-center mt-8">
//                                     <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-full shadow-md transition duration-300">
//                                           Get Quote
//                                     </button>
//                               </div>
//                         </div>
//                   </div>
//             </section>
//       );
// };



import React, { useState, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import axios from "axios";

// API Base URL
const API_URL = import.meta.env.VITE_APP_URL;

export const BookingFormBanner = () => {
  // =============== Banner State ===============
  const [banner, setBanner] = useState({
    video: "",
    status: false,
  });

  useEffect(() => {
    fetch(`${API_URL}api/user/get-banner`)
      .then((res) => res.json())
      .then((data) => {
        console.log("API FULL RESPONSE ===>", data);
        console.log("VIDEO PATH:", data?.data?.video);

        setBanner({
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
    { label: "From", name: "from", type: "text", placeholder: "Enter pickup location" },
    { label: "To", name: "to", type: "text", placeholder: "Enter destination" },
    { label: "Pickup Date & Time", name: "pickupDate", type: "datetime-local" },
    { label: "Seats", name: "seats", type: "number", placeholder: "Enter number of seats" },
    { label: "Vehicle Type", name: "vehicleType", type: "text", placeholder: "e.g., Sedan, SUV" },
  ];

  return (
    <section className="relative w-full">
      {/* =============== Background Video =============== */}
      {videoUrl ? (
        <video
          src={videoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[90vh] object-cover"
        />
      ) : (
        <div className="w-full h-[90vh] flex items-center justify-center text-xl">
          Loading banner...
        </div>
      )}

      {/* =============== Form Section =============== */}
      <div className="absolute left-0 w-full translate-y-1/2 bottom-0">
        <div className="bg-blue-100/60 p-6 sm:p-10 shadow-lg w-full">
          {/* Trip Type Buttons */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6">
            {["Airport", "Local", "Outstation"].map((type) => (
              <label key={type} className="flex items-center gap-2 font-medium cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value={type}
                  checked={tripType === type}
                  onChange={() => setTripType(type)}
                  className="accent-[#0E1D3E]"
                />
                {type}
              </label>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
          >
            {formFields.map((field) => (
              <div key={field.name} className="flex flex-col">
                <label className="font-medium mb-1">{field.label}</label>
                <div className="relative">
                  <input
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

                    className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  {field.type === "text" && (
                    <IoChevronDown className="absolute right-3 top-3 text-gray-400" />
                  )}
                </div>
              </div>
            ))}

            {/* Submit Button */}
            <div className="flex justify-center mt-8 lg:col-span-3 sm:col-span-2">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-8 rounded-full shadow-md transition duration-300 disabled:bg-gray-400"
              >
                {loading ? "Submitting..." : "Get Quote"}
              </button>
            </div>
          </form>

          {/* Success / Error Messages */}
          <div className="max-w-xl mx-auto mt-4">
            {successMessage && (
              <p className="text-center text-green-800 font-bold bg-green-200 border border-green-600 rounded-md p-3">
                {successMessage}
              </p>
            )}
            {error && (
              <p className="text-center text-red-800 font-bold bg-red-200 border border-red-600 rounded-md p-3">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
