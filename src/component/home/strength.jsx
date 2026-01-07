import React, { useEffect, useState } from "react";
import axios from "axios";

export default function StrategicStrengths() {
  const [logos, setLogos] = useState([]);
  const [headingData, setHeadingData] = useState();

  const cleanImagePath = (path) =>
    path?.replace(/^\/?public/, "").replace(/^\/+/, "") || "";

  const fetchLogos = async () => {
    try {
      const [headingRes, res] = await Promise.all([
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/stregic-heading`),
        axios.get(`${import.meta.env.VITE_APP_URL}api/user/get-stregic`),
      ]);

      if (res.data?.data) {
        setHeadingData(headingRes?.data?.data);
        const formatted = res.data.data.map((item) => ({
          src: `${import.meta.env.VITE_APP_URL}${cleanImagePath(item.image)}`,
          title: item.title || "Strategic Partner" // SEO के लिए टाइटल अगर उपलब्ध हो
        }));
        setLogos(formatted);
      }
    } catch (error) {
      console.error("Error loading logos", error);
    }
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  return (
    <div className="w-full py-10 overflow-hidden bg-white">
      {/* Heading - Kept Same */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        {headingData?.heading}
      </h2>

      <div className="marquee">
        <div className="marquee-track">
          {/* Infinite Scroll Logic Kept Same */}
          {logos.concat(logos).map((logo, i) => (
            <div key={i} className="marquee-item">
              <img
                src={logo.src}
                alt={`${logo.title} - Corporate Mobility Partner VIYAGOO`}
                className="logo-img"
                loading="lazy"
                // Performance Optimizations
                decoding="async"
                width="140" // Default width for browser to allocate space
                height="90" // Default height
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS - 100% Exact Same Style & Design */}
      <style>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          position: relative;
          height: 120px;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }

        .marquee:hover .marquee-track {
          animation-play-state: paused;
        }

        .marquee-item {
          padding: 0 30px;
          display: flex;
          align-items: center;
        }

        .logo-img {
          width: 80px;
          height: 60px;
          object-fit: contain;
        }

        @media (min-width: 768px) {
          .logo-img {
            width: 140px;
            height: 90px;
          }
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}