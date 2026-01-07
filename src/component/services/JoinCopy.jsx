// import HeroBanner from "../assets/herobanner.jpg";
// import { Helmet } from "react-helmet-async";
// import Joinim from "../assets/join.png";
// function Join() {
//   return (
//     <>
//       <Helmet>
//         <title>Join - VIYAGOO</title>
//       </Helmet>
//       <section className="w-full min-h-screen bg-white ">
//         {/* HERO SECTION */}
//         <div className="relative w-full">
//           <img
//             src={HeroBanner}
//             alt="Banner"
//             className="w-full h-[100vh] object-cover"
//           />
//         </div>
//         <div className="max-w-5xl mx-auto mt-[28px]">
//           <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//             Drive the Future with Viyagoo
//           </h1>
//           <p className="text-[20px] leading-relaxed text-center">
//             Viyagoo believes, our drivers are the heart of every journey. Join a
//             team that values professionalism, reliability, and dedication — and
//             rewards it. With consistent trips, competitive payouts, and fair
//             incentives, you’ll earn more while driving smarter. Our operations
//             are designed to make your experience effortless, from transparent
//             scheduling to full-time driver support.
//             <br />
//             Drive in comfort, work on your terms, and be part of a brand that’s
//             shaping the future of mobility. With Viyagoo, you don’t just drive —
//             you move forward, confidently and with purpose.
//           </p>
//         </div>

//         {/* ===== Form Section ===== */}
//         <div className="max-w-5xl mx-auto mt-10 bg-[#EAF3FF] rounded-[25px] p-10 shadow-sm rounded-tl-[115px] rounded-br-[115px]">
//           <form className="grid grid-cols-1 md:grid-cols-3 gap-8 p-[62px]">
//             {/* Name */}
//             <div className="flex flex-col">
//               <label className=" font-[660] mb-2 text-[18px]">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter"
//                 className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white placeholder:text-[#B7B7B7] placeholder:font-medium pl-[25px]"
//               />
//             </div>

//             {/* Phone No */}
//             <div className="flex flex-col">
//               <label className=" font-[660] mb-2 text-[18px]">
//                 Phone no
//               </label>
//               <input
//                 type="tel"
//                 placeholder="+91 9999999999"
//                 className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white placeholder:text-[#B7B7B7] placeholder:font-medium pl-[25px]"
//               />
//             </div>

//             {/* City Dropdown */}
//             <div className="flex flex-col">
//               <label className=" font-[660] mb-2 text-[18px]">
//                 City
//               </label>
//               <select className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white text-[#B7B7B7] font-medium pl-[25px]">
//                 <option value="">Enter</option>
//                 <option value="Delhi">Delhi</option>
//                 <option value="Mumbai">Mumbai</option>
//                 <option value="Kolkata">Kolkata</option>
//                 <option value="Bangalore">Bangalore</option>
//               </select>
//             </div>

//             {/* Email Id */}
//             <div className="flex flex-col">
//               <label className=" font-[660] mb-2 text-[18px]">
//                 Email Id
//               </label>
//               <input
//                 type="email"
//                 placeholder="eg@gmail.com"
//                 className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white placeholder:text-[#B7B7B7] placeholder:font-medium pl-[25px]"
//               />
//             </div>

//             {/* Alternate phone number */}
//             <div className="flex flex-col">
//               <label className=" font-[660] mb-2 text-[18px]">
//                 Alternate phone number
//               </label>
//               <input
//                 type="tel"
//                 placeholder="+91 9999999999"
//                 className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white placeholder:text-[#B7B7B7] placeholder:font-medium pl-[25px]"
//               />
//             </div>

//             {/* Vehicle Type Dropdown */}
//             <div className="flex flex-col">
//               <label className=" font-[660] mb-2 text-[18px]">
//                 Vehicle Type
//               </label>
//               <select className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white  text-[#B7B7B7] font-medium pl-[25px]">
//                 <option value="">Enter</option>
//                 <option value="Truck">Truck</option>
//                 <option value="Van">Van</option>
//                 <option value="Car">Car</option>
//                 <option value="Bike">Bike</option>
//               </select>
//             </div>

//             {/* Additional Info + Submit Button in same row */}
//             <div className="flex flex-col md:flex-row items-end md:col-span-3 gap-6 md:gap-24 lg:gap-24">
//               {/* Additional Info Dropdown */}
//               <div className="flex flex-col w-full md:w-[253px]">
//                 <label className=" font-[660] mb-2 text-[18px]">
//                   Additional Info
//                 </label>
//                 <select className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white text-[#B7B7B7] font-medium pl-[25px]">
//                   <option value="">Enter</option>
//                   <option value="Delivery Partner">Delivery Partner</option>
//                   <option value="Fleet Owner">Fleet Owner</option>
//                   <option value="Driver">Driver</option>
//                 </select>
//               </div>

//               {/* Submit Button */}
//               <div className="flex justify-center w-full md:w-auto">
//                 <button
//                   type="submit"
//                   className="bg-[#3F98FF] text-white px-10 py-3 rounded-full hover:bg-[#0572E6] transition w-[156px] h-[54px] font-[700]"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>

//         {/* ===== Attach Vehicle Section ===== */}
//         <div className="max-w-5xl mx-auto mt-20 flex flex-col md:flex-row items-center gap-10">
//           <div className="w-full md:w-1/2">
//             <img src={Joinim} alt="truck" className=" w-full object-cover" />
//           </div>

//           <div className="w-full md:w-1/2 text-center md:text-left">
//             <h2 className="text-2xl md:text-[46px] font-bold mb-2 md:w-[450px] lg:w-[505px]">
//               Got a Vehicle ? and want to work with Routmatic.
//             </h2>
//             <h2 className="text-[24px] leading-relaxed mb-5 mt-[48px] font-[700] lg:w-[416px] md:w-[400px]">
//               We are happy to get in touch with you and collaborate with you
//               regarding your vehicle{" "}
//             </h2>
//             <button className="bg-[#3F98FF] text-white px-11 py-4 rounded-[19px] font-semibold hover:bg-[#0572E6] transition mx-auto block">
//               Attach a vehicle
//             </button>
//           </div>
//         </div>

//         {/* ===== Footer Title ===== */}
//         <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Benefits for you
//         </h3>
//       </section>
//     </>
//   );
// }
// export default Join;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

import Joinim from "../assets/join.webp"; // Fallback image
import {DynamicCanonical} from "./common/DynamicCanonical"

// 1. Fix: Ensure trailing slash is removed for consistency
const API_URL = import.meta.env.VITE_APP_URL.replace(/\/+$/, "");

function  Join() {
  // --- States ---
  const formRef = useRef(null);
  const [bannerData, setBannerData] = useState();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // 1. Page Content State (Dynamic Text & Image)
  const [pageContent, setPageContent] = useState({
    topTitle: "",
    topDescription: "",
    bottomTitle: "",
    bottomDescription: "",
    bottomImage: "",
  });

  // 2. Form Data State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    email: "",
    altPhone: "",
    vehicleType: "",
    additionalInfo: "",
  });

  // --- API Calls ---

  // A. Fetch Page Content on Load
  useEffect(() => {
    const fetchContent = async () => {
      try {
        // Fix: Added '/' before api
        const [banner, res] = await Promise.all([
          axios.get(`${API_URL}/api/user/get-viyagoo-banner`),
          axios.get(`${API_URL}/api/user/driver-page-content`),
        ]);
        if (res.data.data) {
          console.log(banner?.data?.data, "ssss");
          setBannerData(banner?.data?.data);
          setPageContent(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching page content", err);
      }
    };
    fetchContent();
  }, []);

  // B. Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // C. Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Fix 1: Added '/' before api
      // Fix 2: Changed 'admiin' to 'public' (Assuming you created public route as discussed)
      // Note: Agar aapne backend me route '/api/admin' me banaya hai to yaha 'public' ki jagah 'admin' likhein.
      await axios.post(`${API_URL}/api/user/submit-driver-form`, formData);

      setShowSuccess(true);
      setFormData({
        name: "",
        phone: "",
        city: "",
        email: "",
        altPhone: "",
        vehicleType: "",
        additionalInfo: "",
      });
    } catch (err) {
      console.error("Submit Error", err);
      alert("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // --- Image URL Logic ---
  let bottomImageUrl = Joinim;
  if (pageContent.bottomImage) {
    if (pageContent.bottomImage.startsWith("http")) {
      bottomImageUrl = pageContent.bottomImage;
    } else {
      // Fix: Use correct API_URL with slash
      bottomImageUrl = `${API_URL}/${pageContent.bottomImage
        .replace(/^\/+/, "")
        .replace(/\\/g, "/")}`;
    }
  }

  console.log(bannerData?.image);
  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(()=>{
    scrollToForm()
  },[])
  return (
    <>
      <Helmet>
        <title>Join - Corporate Employee Transportation services in Bangalore</title>

        <meta
          name="description"
          content="Viyagoo-Corporate Employee Transportation Services | ETMS, EV Fleet & Shuttle Solutions. We provide corporate employee transportation, airport transfers, executive chauffeur services, corporate shuttles, and reliable logistics solutions."
        />
      </Helmet>
      <DynamicCanonical />

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm border-t-4 border-green-500">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <svg
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">
              Successfully Submitted!
            </h3>
            <p className="text-gray-600 mt-2 mb-6">We will contact you soon.</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-green-600 text-white px-6 py-2 rounded-full w-full font-semibold"
            >
              Okay, Got it
            </button>
          </div>
        </div>
      )}
      <section className="w-full min-h-screen bg-white ">
        <div className="relative w-full">
          <img
            src={`${import.meta.env.VITE_APP_URL}${bannerData?.banner}`}
          alt="Join VIYAGOO as a professional driver partner for reliable trips, fair earnings, and future-ready mobility"

            className="w-full h-[100vh] object-cover"
            loading="lazy"
          />
        </div>

        {/* --- DYNAMIC TOP SECTION --- */}
        <div className="max-w-5xl mx-auto mt-[28px] p-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            {pageContent.topTitle || "Drive the Future with Viyagoo"}
          </h1>
          <p  className="text-[20px] leading-relaxed text-center whitespace-pre-wrap">
            {pageContent.topDescription || (
              <>
                Viyagoo believes, our drivers are the heart of every journey.
                Join a team that values professionalism, reliability, and
                dedication — and rewards it. With consistent trips, competitive
                payouts, and fair incentives, you’ll earn more while driving
                smarter. Our operations are designed to make your experience
                effortless, from transparent scheduling to full-time driver
                support.
                <br />
                Drive in comfort, work on your terms, and be part of a brand
                that’s shaping the future of mobility. With Viyagoo, you don’t
                just drive — you move forward, confidently and with purpose.
              </>
            )}
          </p>
        </div>

        {/* ===== Form Section ===== */}
        <div  ref={formRef}    className="max-w-5xl mx-auto mt-10 bg-[#EAF3FF] rounded-[25px] p-10 shadow-sm rounded-tl-[115px] rounded-br-[115px]">
          <form
            onSubmit={handleSubmit}
          
            className="grid grid-cols-1 md:grid-cols-3 gap-8 p-[62px]"
          >
            {/* Name */}
            <div className="flex flex-col">
              <label className=" font-[660] mb-2 text-[18px]">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter"
                className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white placeholder:text-[#B7B7B7] placeholder:font-medium pl-[25px]"
              />
            </div>

            {/* Phone No */}
            <div className="flex flex-col">
              <label className=" font-[660] mb-2 text-[18px]">Phone no</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 9999999999"
                className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white placeholder:text-[#B7B7B7] placeholder:font-medium pl-[25px]"
              />
            </div>

            {/* City Dropdown */}
            <div className="flex flex-col">
              <label className=" font-[660] mb-2 text-[18px]">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white text-[#B7B7B7] font-medium pl-[25px]"
                placeholder="Enter City"
              />
            </div>

            {/* Email Id */}
            <div className="flex flex-col">
              <label className=" font-[660] mb-2 text-[18px]">Email Id</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="eg@gmail.com"
                className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white placeholder:text-[#B7B7B7] placeholder:font-medium pl-[25px]"
              />
            </div>

            {/* Alternate phone number */}
            <div className="flex flex-col">
              <label className=" font-[660] mb-2 text-[18px]">
                Alternate phone number
              </label>
              <input
                type="tel"
                name="altPhone"
                value={formData.altPhone}
                onChange={handleChange}
                placeholder="+91 9999999999"
                className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white placeholder:text-[#B7B7B7] placeholder:font-medium pl-[25px]"
              />
            </div>

            {/* Vehicle Type Dropdown */}
            <div className="flex flex-col">
              <label className=" font-[660] mb-2 text-[18px]">
                Vehicle Type
              </label>

              <input
                type="text"
                name="vehicleType"
                value={formData.vehicleType}
                onChange={handleChange}
                className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white text-[#B7B7B7] font-medium pl-[25px]"
                placeholder="Enter Vehicle Type"
              />
            </div>

            {/* Additional Info + Submit Button in same row */}
            <div className="flex flex-col md:flex-row items-end md:col-span-3 gap-6 md:gap-24 lg:gap-24">
              {/* Additional Info Dropdown */}
              <div className="flex flex-col w-full md:w-[253px]">
                <label className=" font-[660] mb-2 text-[18px]">
                  Additional Info
                </label>
                <select
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white text-[#B7B7B7] font-medium pl-[25px]"
                >
                  <option value="">Enter</option>
                  <option value="Delivery Partner">Delivery Partner</option>
                  <option value="Fleet Owner">Fleet Owner</option>
                  <option value="Driver">Driver</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center w-full md:w-auto">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#3F98FF] text-white px-10 py-3 rounded-full hover:bg-[#0572E6] transition w-[156px] h-[54px] font-[700]"
                >
                  {loading ? "..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="max-w-5xl mx-auto p-2 mt-20 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={bottomImageUrl}
            alt="Professional drivers partnering with Viyagoo for reliable trips, fair earnings, and future-ready mobility"

              className=" w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-[46px] font-extrabold mb-2 md:w-[450px] lg:w-[505px]">
              Got a Vehicle ? and want to work with Routmatic.
            </h2>
            <h2 className="text-[24px] leading-relaxed mb-5 mt-[48px] font-[700] lg:w-[416px] md:w-[400px]">
              {pageContent.bottomDescription || "We are happy to get in touch with you and collaborate with you regarding your vehicle"}
            </h2>
            <button  onClick={scrollToForm} className="cursor-pointer bg-[#3F98FF] text-white px-11 py-4 rounded-[19px] font-semibold hover:bg-[#0572E6] transition mx-auto block">
              Attach a vehicle
            </button>
          </div> */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* 👇 Yahan change kiya hai: Hardcoded text hata kar variable lagaya hai */}
            <h2 className="text-2xl md:text-[46px] font-extrabold mb-2 md:w-[450px] lg:w-[505px]">
              {pageContent.bottomTitle}
            </h2>

            <h2 className="text-[24px] leading-relaxed mb-5 mt-[48px] font-[700] lg:w-[416px] md:w-[400px]">
              {pageContent.bottomDescription ||
                "We are happy to get in touch with you and collaborate with you regarding your vehicle"}
            </h2>

            <button
              onClick={scrollToForm}
              className="cursor-pointer bg-[#3F98FF] text-white px-11 py-4 rounded-[19px] font-semibold hover:bg-[#0572E6] transition mx-auto block"
            >
              Attach a vehicle
            </button>
          </div>
        </div>

        {/* ===== Footer Title ===== */}
        <h3 className="text-3xl md:text-4xl font-bold my-4 text-center">
          Benefits for you
        </h3>
        <div class="flex justify-center p-2 my-10">
          <ul class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
            <li class="bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-[#0572E6] rounded-2xl p-6 text-center">
              <p class="font-semibold text-xl text-blue-600">Fuel Advance</p>
              <p class="text-gray-600 mt-1">Upto 5000 per week instantly.</p>
            </li>

            <li class="bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-[#0572E6] rounded-2xl p-6 text-center">
              <p class="font-semibold text-xl text-blue-600">
                Family Health Cover
              </p>
              <p class="text-gray-600 mt-1">
                Free Health Insurance upto 5 lakhs.
              </p>
            </li>

            <li class="bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-[#0572E6] rounded-2xl p-6 text-center">
              <p class="font-semibold text-xl text-blue-600">
                Discounted Maintenance
              </p>
              <p class="text-gray-600 mt-1">
                Get a discount on vehicle maintenance and service.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
export default Join;
