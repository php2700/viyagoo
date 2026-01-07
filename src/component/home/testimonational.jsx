import React, { useState, useEffect } from "react";
import axios from "axios";
import leftQuote from "../../assets/quoteLeft.webp";
import rightQuote from "../../assets/rightQuote.webp";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = import.meta.env.VITE_APP_URL;

const apiClient = axios.create({
  baseURL: `${API_URL}api/user`,
});

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [headingData, setHeadingData] = useState();

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const [headingRes, response] = await Promise.all([
          apiClient.get("/testimonial-heading"),
          apiClient.get("/get-testimonial")
        ]);

        if (response.data.success && Array.isArray(response.data.data)) {
          setHeadingData(headingRes?.data?.data);
          setTestimonials(response.data.data);
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

  if (loading) {
    return (
      <section className="w-full max-w-7xl mx-auto py-10 text-center min-h-[400px]">
        <p>Loading testimonials...</p>
      </section>
    );
  }

  if (error || testimonials.length === 0) {
    return (
      <section className="w-full max-w-7xl mx-auto py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">{headingData?.heading || "Testimonials"}</h2>
        <p>{error || "No testimonials available."}</p>
      </section>
    );
  }

  return (
    <section className="w-full max-w-7xl mx-auto py-10 text-center overflow-hidden">
      {/* Section Heading - Exact Style */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-2xl md:text-3xl font-bold mb-6 pb-2 inline-block"
      >
        {headingData?.heading}
      </motion.h2>

      {/* Card Container */}
      <div className="relative px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-white rounded-[20px] p-6 md:p-10 shadow-xl border border-gray-300
                       flex flex-col items-center justify-center min-h-[350px] md:min-h-[300px]"
          >
            {/* User Info */}
            <div className="mb-6 text-center">
              <h3 className="font-semibold text-lg md:text-xl text-[#0E1D3E]">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-sm md:text-base ">
                {testimonials[currentIndex].designation}
              </p>
            </div>

            {/* Quote Content */}
            <div className="max-w-3xl mx-auto text-center flex flex-col items-center relative w-full">
              <img
                src={leftQuote}
                alt="Quotes"
                width="40"
                height="40"
                className="w-8 md:w-10 mb-2 self-start opacity-80"
                loading="lazy"
                decoding="async"
              />

              <p className="text-base md:text-xl leading-relaxed px-4 md:px-10 italic ">
                {testimonials[currentIndex].description}
              </p>

              <img
                src={rightQuote}
                alt="Quotes"
                width="40"
                height="40"
                className="w-8 md:w-10 mt-2 self-end opacity-80"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Buttons - Optimized for SEO & UX */}
        <button
          onClick={handlePrev}
          aria-label="Previous Testimonial"
          className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-[#0572E6] hover:text-white rounded-full p-3 shadow-md transition-colors z-20"
        >
          <span className="text-2xl leading-none">‹</span>
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Testimonial"
          className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-[#0572E6] hover:text-white rounded-full p-3 shadow-md transition-colors z-20"
        >
          <span className="text-2xl leading-none">›</span>
        </button>
      </div>
    </section>
  );
};

export default Testimonials;