import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export const OurServices = () => {
  const API_URL = import.meta.env.VITE_APP_URL.replace(/\/+$/, "");
  const [services, setServices] = useState([]);
  const [bgData, setBgData] = useState({ heading: "", banner: "" });

  useEffect(() => {
    fetch(`${API_URL}/api/user/get-saving`)
      .then((res) => res.json())
      .then((data) => setServices(data.data || []))
      .catch((err) => console.error("Error fetching services:", err));
  }, [API_URL]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${API_URL}/api/user/home-bg-banner`);
        if (res?.data?.data) {
          console.log("Banner Data from API:", res.data.data); // चेक करने के लिए
          setBgData(res.data.data);
        }
      } catch (error) {
        console.error("Error fetching BG:", error);
      }
    };
    getData();
  }, [API_URL]);

  // फिक्स: बैनर का सही यूआरएल बनाना
  const finalBannerUrl = bgData?.banner
    ? `${API_URL}/${bgData.banner.replace("public/", "").replace(/^\/+/, "")}`
    : "";

  return (
    <>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-12">
        {bgData?.heading || "Our Services"}
      </h2>

      <section
        className="relative w-full min-h-[90vh] bg-cover bg-center bg-no-repeat flex justify-center items-center px-4 sm:px-6 py-12 bg-gray-200"
        style={{
          // यहाँ पाथ को finalBannerUrl से बदल दिया है
          backgroundImage: finalBannerUrl ? `url("${finalBannerUrl}")` : 'none',
        }}
      >
        <div className="absolute inset-0 bg-black/10 -z-10"></div>

        <div className="relative z-10 w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white w-full rounded-2xl shadow-md p-4 sm:p-6 flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-xl transition-all duration-500 min-h-[200px] sm:min-h-[220px]"
              >
                <img
                  src={`${API_URL}/${service.image.replace("public/", "").replace(/^\/+/, "")}`}
                  alt={service.title}
                  width="64"
                  height="64"
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2 sm:mb-4"
                  loading="lazy"
                />
                <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2 text-center">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-center ">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Link
              to="/ourservice#ourservice"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
              Know More
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};