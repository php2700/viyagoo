import React, { useState, useEffect, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
import axios from "axios";
import { motion } from "framer-motion";

const API_URL = import.meta.env.VITE_APP_URL;

export const BookingFormBanner = () => {
  const pickupDateRef = useRef(null);

  // Optimization 1: Initial state में एक placeholder इमेज रखें 
  // ताकि जब तक API जवाब दे, स्क्रीन खाली न दिखे (LCP Improvement)
  const [banner, setBanner] = useState({
    video: "",
    status: false,
    image: "/assets/banner-placeholder.webp", 
    type: "image",
  });

  useEffect(() => {
    fetch(`${API_URL}api/user/get-banner`)
      .then((res) => res.json())
      .then((data) => {
        setBanner({
          image: data?.data?.image,
          type: data?.data?.type,
          video: data?.data?.video || "",
          status: data?.data?.status || false,
        });
      })
      .catch((err) => console.error("Banner Fetch Error:", err));
  }, []);

  const videoUrl = banner.video
    ? `${API_URL}${banner.video.replace("public/", "")}`
    : "";

  const [tripType, setTripType] = useState("Airport");
  const [formData, setFormData] = useState({
    name: "", from: "", to: "", pickupDate: "", seats: "", vehicleType: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMessage("");
    const payload = { ...formData, location: tripType, seats: Number(formData.seats) };

    try {
      await axios.post(`${API_URL}api/user/quote`, payload);
      setSuccessMessage("Quote submitted successfully!");
      setFormData({ name: "", from: "", to: "", pickupDate: "", seats: "", vehicleType: "" });
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const getMinDateTime = () => {
    const now = new Date();
    return now.toISOString().slice(0, 16);
  };

  const formFields = [
    { label: "Name", name: "name", type: "text", placeholder: "Enter name" },
    { label: "From", name: "from", type: "text", placeholder: "Enter pickup location" },
    { label: "To", name: "to", type: "text", placeholder: "Enter destination" },
    { label: "Pickup Date & Time", name: "pickupDate", type: "datetime-local" },
    { label: "Seats", name: "seats", type: "number", placeholder: "Enter number of seats" },
    { label: "Vehicle Type", name: "vehicleType", type: "text", placeholder: "e.g., Sedan, SUV" },
  ];

  return (
    <>
      <section className="relative w-full h-screen overflow-hidden bg-gray-900">
        {banner?.type === "image" ? (
          <img
            src={banner.image.startsWith('http') ? banner.image : `${API_URL}${banner.image}`}
            alt="Viyagoo – Corporate Transport & Mobility Solutions"
            className="absolute inset-0 w-full h-full object-cover"
            // Optimization 2: ब्राउज़र को बताएँ कि यह सबसे मुख्य इमेज है
            fetchPriority="high" 
            loading="eager"
            decoding="sync"
          />
        ) : (
          <video
            src={videoUrl}
            poster="/assets/banner-placeholder.webp"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/30"></div>

        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4"
          initial={{ opacity: 0, y: 20 }} // थोड़ा छोटा एनिमेशन मोबाइल के लिए
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold drop-shadow-2xl leading-snug max-w-full text-center">
            Employee Transportation Services in Bangalore | Viyagoo
          </h1>
        </motion.div>
      </section>

      <section id="demo" className="w-full bg-gray-50 py-12 md:py-20 -mt-10 md:-mt-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          {/* Optimization 3: Viewport amount जोड़ें ताकि एनिमेशन तभी चले जब यूजर वहाँ पहुँचे */}
          <motion.div
            className="bg-white shadow-2xl rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-10">
              {["Airport", "Local", "Outstation"].map((type) => (
                <label key={type} className="flex items-center gap-3 font-semibold text-gray-800 cursor-pointer">
                  <input
                    type="radio"
                    name="tripType"
                    value={type}
                    checked={tripType === type}
                    onChange={() => setTripType(type)}
                    className="w-5 h-5 accent-[#0E1D3E]"
                  />
                  <span className={tripType === type ? "text-[#0E1D3E]" : "text-gray-700"}>{type} Trip</span>
                </label>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {formFields.map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="font-semibold text-gray-700 mb-2">{field.label}</label>
                  <input
                    ref={field.name === "pickupDate" ? pickupDateRef : null}
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    min={field.name === "pickupDate" ? getMinDateTime() : field.name === "seats" ? 1 : undefined}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0E1D3E]"
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
              {successMessage && <p className="text-center text-green-800 font-bold bg-green-100 border border-green-500 rounded-lg p-4">{successMessage}</p>}
              {error && <p className="text-center text-red-800 font-bold bg-red-100 border border-red-500 rounded-lg p-4">{error}</p>}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};