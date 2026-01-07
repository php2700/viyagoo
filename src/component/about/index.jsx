import React, { useState, useEffect } from "react";
import axios from "axios";

import image1 from "../../assets/forest.webp";
import image2 from "../../assets/hand.webp";
import image3 from "../../assets/energy.webp";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { DynamicCanonical } from "../common/DynamicCanonical";
import { OrganizationSchema } from "../common/OrganizationSchema";

const API_URL = import.meta.env.VITE_APP_URL.replace(/\/+$/, "");

export const About = () => {
  const [bannerData, setBanner] = useState();
  const { hash } = useLocation();

  // Logic: Scroll to hash - Kept exact same
  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const [pageContent, setPageContent] = useState({
    description: "",
    subDescription: "",
    visionTitle: "Vision",
    visionDesc: "",
    missionTitle: "Mission",
    missionDesc: "",
  });
  const [loading, setLoading] = useState(true);

  // Helper: Clean Image Path for reliability
  const getCleanUrl = (path) => {
    if (!path) return "";
    const clean = path.replace(/^public\//, "").replace(/^\/+/, "").replace(/\\/g, "/");
    return `${API_URL}/${clean}`;
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const [banner, res] = await Promise.all([
          axios.get(`${API_URL}/api/user/get-about-banner`),
          axios.get(`${API_URL}/api/user/aboutUS`),
        ]);
        if (res.data && res.data.data) {
          setBanner(banner?.data?.data);
          setPageContent(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching about content", err);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, []);

  const whyViyagoo = [
    { title: "End-to-End Mobility", desc: "Comprehensive transport solutions for corporates, logistics, and individuals.", icon: image1 },
    { title: "Tech-Enabled Operations", desc: "Real-time tracking and automation powered by advanced ETMS systems.", icon: image2 },
    { title: "Safety First", desc: "Strict safety protocols with verified drivers and maintained vehicles.", icon: image3 },
    { title: "Green Fleet", desc: "Sustainable operations with an expanding Electric Vehicle (EV) fleet.", icon: image3 },
    { title: "Industry Expertise", desc: "Led by professionals with deep transport and mobility experience.", icon: image2 },
    { title: "Customized Solutions", desc: "Tailored transport models to match each client’s needs and scale.", icon: image1 },
    { title: "Cost-Optimized", desc: "Smart routing and analytics that reduce operational expenses.", icon: image1 },
    { title: "24/7 Support", desc: "Always-on monitoring and assistance for smooth operations.", icon: image2 },
    { title: "Driver Empowerment", desc: "Financial support and free family health insurance for drivers.", icon: image3 },
    { title: "Reliable & Punctual", desc: "On-time, every time — ensuring consistent service delivery.", icon: image1 },
    { title: "Transparent Operations", desc: "Clear pricing and ethical business practices at every step.", icon: image3 },
    { title: "Customer-Focused", desc: "Every journey designed around comfort, safety, and satisfaction.", icon: image2 },
  ];

  const description = pageContent?.description || `Redefining Mobility, Your Way...`;
  const subDescription = pageContent?.subDescription || `We support enterprises with customized enterprise transport solutions...`;

  return (
    <>
      <Helmet>
        <title>About Us - Corporate Transportation & Mobility | Viyagoo</title>
        <meta name="description" content="Learn about Viyagoo, the leader in employee transportation and corporate mobility solutions in Bangalore. Discover our vision, mission, and expert transport services." />
      </Helmet>
      
      <OrganizationSchema />
      <DynamicCanonical />

      <section className="w-full min-h-screen bg-white">
        {/* HERO SECTION - Style & Design Kept Same */}
        <div className="relative w-full h-[100vh] bg-gray-200">
          <img
            src={getCleanUrl(bannerData?.banner)}
            alt="About VIYAGOO employee transportation services"
            className="w-full h-full object-cover"
            // Optimization: No lazy loading for LCP image
            fetchpriority="high"
            loading="eager"
            width="1920"
            height="1080"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-12 md:px-20 py-10 md:py-0">
            <p className="text-4xl font-bold text-white">
              VIYAGOO Employee Transportation Services <br /> in Bangalore for
              Corporates
            </p>
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl whitespace-pre-line">
              {bannerData?.subtitle ||
                `
VIYAGOO offers employee transportation services designed to meet the daily mobility needs of modern businesses across India. As a trusted provider of employee transportation services in Bangalore, we deliver safe, reliable, and well-managed corporate employee transportation services for IT parks, enterprises, and corporate offices.
Our solutions include employee daily pickup and drop service, office cab services Bangalore, corporate staff cab services, and employee shuttle transport, ensuring smooth and on-time travel for employees.
`}
            </p>
          </div>
        </div>

        <div className="w-full bg-gray-50 py-12 sm:py-20 px-4 sm:px-8" id="aboutsection">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-6">ABOUT US</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center whitespace-pre-line">
              {description}
            </p>

            <div className="bg-white shadow-lg rounded-2xl p-8 sm:p-12 mb-12">
              <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {subDescription}
              </div>
            </div>

            {/* Vision & Mission - Same Design */}
            <div className="bg-white shadow-md border-l-4 border-[#0572E6] rounded-xl p-8 mb-10">
              <h2 className="text-2xl font-bold mb-3">{pageContent.visionTitle || "Vision"}</h2>
              <p className="text-gray-700 text-lg whitespace-pre-line">{pageContent.visionDesc}</p>
            </div>

            <div className="bg-white shadow-md border-l-4 border-[#0572E6] rounded-xl p-8 mb-10">
              <h2 className="text-2xl font-bold mb-3">{pageContent.missionTitle || "Mission"}</h2>
              <p className="text-gray-700 text-lg whitespace-pre-line">{pageContent.missionDesc}</p>
            </div>

            {/* STATS Section with Animations - Logic & Structure Kept Same */}
            <div className="w-full py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="w-full h-full"
                >
                  <img
                    src={getCleanUrl(pageContent?.whatSetImage)}
                    alt="What sets VIYAGOO apart"
                    className="w-full h-full object-cover rounded-xl shadow-md"
                    width="600"
                    height="400"
                    loading="lazy"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-black text-white rounded-xl p-4 md:p-10 shadow-xl"
                >
                  <p className="text-[#0572E6] font-semibold tracking-wide">What Sets Us Apart</p>
                  <h2 className="text-3xl lg:text-4xl font-bold leading-tight mt-2">{pageContent?.whatSetDescription}</h2>
                  <p className="text-gray-300 mt-4 leading-relaxed">We are your trusted partner in seamless journeys...</p>

                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
                    className="grid grid-cols-1 justify-center p-4 md:grid-cols-2 gap-6 mt-8"
                  >
                    {[
                      { icon: pageContent?.vehicleIcon, value: pageContent?.vehicles, label: "Vehicles" },
                      { icon: pageContent?.vehicleIcon, value: pageContent?.dailyTrip, label: "Trips per day" },
                      { icon: pageContent?.safetyIcon, value: pageContent?.sefety, label: "Safety" },
                      { icon: pageContent?.tripIcon, value: pageContent?.trips, label: "Total monthly trips" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }}
                        className="flex items-center gap-4"
                      >
                        <img src={getCleanUrl(item.icon)} alt={item.label} className="w-10 h-10" width="40" height="40" loading="lazy" />
                        <div>
                          <h3 className="text-2xl font-bold">{item.value}</h3>
                          <p className="text-gray-400 text-sm">{item.label}</p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* Why VIYAGOO Grid - Exact Same Structure */}
            <h2 id="whyViyago" className="text-3xl font-bold text-center mt-16 mb-6">Why VIYAGOO ?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyViyagoo.map((item, index) => (
                <div key={index} className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all flex flex-col items-center text-center">
                  <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain mb-4" width="48" height="48" loading="lazy" />
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};