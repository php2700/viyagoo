import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

export const FAQAccordion = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openIndex, setOpenIndex] = useState(null);

  const BASE = import.meta.env.VITE_APP_URL;

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await axios.get(`${BASE}api/user/faq-heading`);
        if (response.data?.success) {
          setData(response.data.data);
        } else {
          setData({ heading: "Frequently Asked Questions", subtitle: "", faqs: [] });
        }
      } catch (error) {
        console.error("FAQ fetch error:", error);
        setData({ heading: "Frequently Asked Questions", subtitle: "", faqs: [] });
      } finally {
        setLoading(false);
      }
    };
    fetchFAQs();
  }, [BASE]);

  // ⭐ SEO Improvement: FAQ Schema (JSON-LD)
  // यह कोड Google सर्च इंजन को आपकी साइट के बारे में बेहतर जानकारी देता है
  const renderSchema = () => {
    if (!data?.faqs || data.faqs.length === 0) return null;
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": data.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    return (
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    );
  };

  if (loading) {
    return (
      <div className="my-20 text-center min-h-[400px]">
        <p className="text-gray-600 text-lg">Loading FAQs...</p>
      </div>
    );
  }

  if (!data || data.faqs.length === 0) {
    return (
      <div className="my-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
        <p className="mt-6 text-gray-600">No FAQs available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 my-10 px-4 md:px-0 md:m-24 min-h-[500px]">
      {renderSchema()} {/* Google के लिए स्कीम कोड यहाँ लोड होगा */}

      <h2 className="text-xl md:text-3xl font-bold text-center mb-10 text-gray-900">
        {data.heading}
      </h2>

      {data.subtitle && (
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
          {data.subtitle}
        </p>
      )}

      {data.faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="border border-gray-300 rounded-lg overflow-hidden shadow-sm max-w-7xl mx-auto hover:shadow-md transition-shadow"
        >
          <button
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-content-${index}`}
            className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="text-lg font-bold text-gray-900">
              {faq.question}
            </span>
            <ChevronDownIcon
              className={`w-6 h-6 text-gray-600 transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                id={`faq-content-${index}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: "hidden" }} // Animation smoothness के लिए
              >
                <div className="px-6 py-4 text-gray-700 bg-white border-t border-gray-200">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};