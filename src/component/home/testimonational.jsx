import React, { useState, useEffect } from "react";
import axios from "axios";
import leftQuote from "../../assets/quoteLeft.png";
import rightQuote from "../../assets/rightQuote.png";

// -------------- Dynamic API Base URL --------------
const API_URL = import.meta.env.VITE_APP_URL;
// Example: http://localhost:3010

const apiClient = axios.create({
  baseURL: `${API_URL}api/user`,
});

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const[headingData,setHeadingData]=useState();

  // ---------------- Fetch Testimonials ----------------
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const [headingRes,response] = await Promise.all([
apiClient.get("/testimonial-heading"),
           apiClient.get("/get-testimonial")])

        if (response.data.success && Array.isArray(response.data.data)) {
          setHeadingData(headingRes?.data?.data)
          setTestimonials(response.data.data);
        } else {
          setTestimonials([]);
        }
      } catch (err) {
        console.error("API Error:", err);
        setError("Failed to load testimonials.");
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handlePrev = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    if (testimonials.length === 0) return;
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  // ---------------- UI States ----------------

  if (loading) {
    return (
      <section className="w-full max-w-7xl mx-auto py-10 text-center">
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full max-w-7xl mx-auto py-10 text-center">
        <p className="text-red-500">{error}</p>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section className="w-full max-w-7xl mx-auto py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 inline-block">
          Testimonials{headingData?.heading}
        </h2>
        <p>No testimonials available.</p>
      </section>
    );
  }

  // ---------------- Main Render ----------------

  return (
    <section className="w-full max-w-7xl mx-auto py-10 text-center" >
      <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 inline-block">
        {headingData?.heading}
      </h2>

      <div className="bg-white rounded-[20px] p-10 shadow-xl border border-gray-300 relative flex flex-col items-center justify-center min-h-[300px]">
        <div className="mb-6 text-center">
          <h3 className="font-semibold text-lg md:text-xl">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-sm md:text-base">
            {testimonials[currentIndex].designation}
          </p>
        </div>

        <div className="max-w-3xl mx-auto text-center relative flex flex-col items-center">
          <img
            src={leftQuote}
            alt="Left Quote"
            className="w-8 md:w-10 mb-2 self-start"
            loading="lazy"

          />
          <p className="text-base md:text-xl leading-relaxed px-4">
            {testimonials[currentIndex].description}
          </p>
          <img
            src={rightQuote}
            alt="Right Quote"
            className="w-8 md:w-10 mt-2 self-end"
            loading="lazy"
          />
        </div>

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
