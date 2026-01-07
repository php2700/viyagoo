import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { DynamicCanonical } from "./common/DynamicCanonical";

// ⭐ यह लाइन मिसिंग थी, इसे जोड़ दिया गया है:
import Joinim from "../assets/join.webp"; 

// API URL को साफ सुथरा रखें
const API_URL = import.meta.env.VITE_APP_URL.replace(/\/+$/, "");

function Join() {
  const formRef = useRef(null);
  const [bannerData, setBannerData] = useState();
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Page Content State
  const [pageContent, setPageContent] = useState({
    topTitle: "",
    topDescription: "",
    bottomTitle: "",
    bottomDescription: "",
    bottomImage: "",
  });

  // Form Data State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    email: "",
    altPhone: "",
    vehicleType: "",
    additionalInfo: "",
  });

  // इमेज पाथ क्लीनिंग फंक्शन
  const getCleanUrl = (path) => {
    if (!path) return "";
    const cleanPath = path.replace(/^public\//, "").replace(/^\/+/, "").replace(/\\/g, "/");
    return `${API_URL}/${cleanPath}`;
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const [banner, res] = await Promise.all([
          axios.get(`${API_URL}/api/user/get-viyagoo-banner`),
          axios.get(`${API_URL}/api/user/driver-page-content`),
        ]);
        if (res.data.data) {
          setBannerData(banner?.data?.data);
          setPageContent(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching page content", err);
      }
    };
    fetchContent();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API_URL}/api/user/submit-driver-form`, formData);
      setShowSuccess(true);
      setFormData({ name: "", phone: "", city: "", email: "", altPhone: "", vehicleType: "", additionalInfo: "" });
    } catch (err) {
      alert("Failed to submit form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // बैनर और बॉटम इमेज के लिए फाइनल URL
  const finalBannerUrl = bannerData?.banner ? getCleanUrl(bannerData.banner) : Joinim;
  const finalBottomImageUrl = pageContent.bottomImage ? 
    (pageContent.bottomImage.startsWith("http") ? pageContent.bottomImage : getCleanUrl(pageContent.bottomImage)) 
    : Joinim;

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Join - Corporate Employee Transportation services in Bangalore</title>
        <meta name="description" content="Viyagoo-Corporate Employee Transportation Services | Join us as a professional driver partner." />
      </Helmet>
      <DynamicCanonical />

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm border-t-4 border-green-500">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800">Successfully Submitted!</h3>
            <p className="text-gray-600 mt-2 mb-6">We will contact you soon.</p>
            <button onClick={() => setShowSuccess(false)} className="bg-green-600 text-white px-6 py-2 rounded-full w-full font-semibold">Okay, Got it</button>
          </div>
        </div>
      )}

      <section className="w-full min-h-screen bg-white">
        {/* Banner Section */}
        <div className="relative w-full h-[100vh] bg-gray-100">
          <img
            src={finalBannerUrl}
            alt="Join VIYAGOO as a professional driver partner"
            className="w-full h-full object-cover"
            fetchpriority="high" 
            loading="eager"      
            width="1920"
            height="1080"
          />
        </div>

        {/* Top Text Section */}
        <div className="max-w-5xl mx-auto mt-[28px] p-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {pageContent.topTitle || "Drive the Future with Viyagoo"}
          </h1>
          <p className="text-[20px] leading-relaxed whitespace-pre-wrap">
            {pageContent.topDescription}
          </p>
        </div>

        {/* Form Section - Style Exact Same */}
        <div ref={formRef} className="max-w-5xl mx-auto mt-10 bg-[#EAF3FF] rounded-[25px] p-6 md:p-10 shadow-sm rounded-tl-[115px] rounded-br-[115px]">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 md:p-[62px]">
            {[
              { label: "Name", name: "name", type: "text", placeholder: "Enter" },
              { label: "Phone no", name: "phone", type: "tel", placeholder: "+91 9999999999" },
              { label: "City", name: "city", type: "text", placeholder: "Enter City" },
              { label: "Email Id", name: "email", type: "email", placeholder: "eg@gmail.com" },
              { label: "Alternate phone number", name: "altPhone", type: "tel", placeholder: "+91 9999999999" },
              { label: "Vehicle Type", name: "vehicleType", type: "text", placeholder: "Enter Vehicle Type" },
            ].map((field) => (
              <div key={field.name} className="flex flex-col">
                <label className="font-[660] mb-2 text-[18px]">{field.label}</label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  required={field.name !== "altPhone"}
                  placeholder={field.placeholder}
                  className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white placeholder:text-[#B7B7B7] placeholder:font-medium pl-[25px] h-[45px]"
                />
              </div>
            ))}

            <div className="flex flex-col md:flex-row items-end md:col-span-3 gap-6 md:gap-24">
              <div className="flex flex-col w-full md:w-[253px]">
                <label className="font-[660] mb-2 text-[18px]">Additional Info</label>
                <select
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="p-1 rounded-lg border border-gray-300 w-full focus:outline-none bg-white text-[#B7B7B7] font-medium pl-[25px] h-[45px]"
                >
                  <option value="">Enter</option>
                  <option value="Delivery Partner">Delivery Partner</option>
                  <option value="Fleet Owner">Fleet Owner</option>
                  <option value="Driver">Driver</option>
                </select>
              </div>

              <div className="flex justify-center w-full md:w-auto">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#3F98FF] text-white px-10 py-3 rounded-full hover:bg-[#0572E6] transition w-[156px] h-[54px] font-[700] shadow-md"
                >
                  {loading ? "..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Bottom Image and Text */}
        <div className="max-w-5xl mx-auto p-2 mt-20 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={finalBottomImageUrl}
              alt="Professional drivers"
              className="w-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-[46px] font-extrabold mb-2 leading-tight">
              {pageContent.bottomTitle || "Got a Vehicle?"}
            </h2>
            <p className="text-[24px] mt-4 font-bold text-gray-700">
              {pageContent.bottomDescription}
            </p>
            <button onClick={scrollToForm} className="cursor-pointer bg-[#3F98FF] text-white px-11 py-4 rounded-[19px] font-semibold hover:bg-[#0572E6] transition mt-6 shadow-lg">
              Attach a vehicle
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <h3 className="text-3xl md:text-4xl font-bold my-10 text-center">Benefits for you</h3>
        <div className="flex justify-center p-2 my-10">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
            {[
              { title: "Fuel Advance", desc: "Upto 5000 per week instantly." },
              { title: "Family Health Cover", desc: "Free Health Insurance upto 5 lakhs." },
              { title: "Discounted Maintenance", desc: "Get a discount on vehicle maintenance." }
            ].map((benefit, i) => (
              <li key={i} className="bg-white shadow-md hover:shadow-xl transition-all border border-[#0572E6] rounded-2xl p-6 text-center">
                <p className="font-semibold text-xl text-blue-600">{benefit.title}</p>
                <p className="text-gray-600 mt-1">{benefit.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Join;