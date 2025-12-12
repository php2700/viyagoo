
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

const Clients = () => {
const [logos, setLogos] = useState([]);
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);
  const[heading,setHeading]=useState();

  const cleanImagePath = (path) =>
    path?.replace(/^\/?public/, "").replace(/^\/+/, "") || "";

  const fetchLogos = async () => {
    try {
      const [headingRes,res] = await Promise.all([
         axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/client-heading`),
         axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/get-clients`
      )])

      if (res.data?.data) {
        setHeading(headingRes?.data?.data)
        const formatted = res.data.data.map((item) => ({
          src: `${import.meta.env.VITE_APP_URL}${cleanImagePath(item.image)}`,
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

  // 🔥 Infinite Loop Logic
  useEffect(() => {
    if (!logos.length) return;

    const track1 = track1Ref.current;
    const track2 = track2Ref.current;

    let x = 0;
    let speed = 2; // ← speed adjust

    const animate = () => {
      x -= speed;

      if (track1 && track2) {
        const width = track1.offsetWidth;

        // जब पूरा पहला track बाएँ निकल जाए → reset
        if (Math.abs(x) >= width) {
          x = 0; // soft reset (NO JUMP)
        }

        track1.style.transform = `translateX(${x}px)`;
        track2.style.transform = `translateX(${x + width}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, [logos]);
  return (
  // <section className="w-full max-w-7xl mx-auto py-10 text-center">
  //   <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 inline-block">
  //     Clients
  //   </h2>

  //   <div className="relative flex items-center justify-center">

  //     {/* LEFT BUTTON */}
  //     <button
  //       onClick={handlePrev}
  //       className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition shadow"
  //     >
  //       <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
  //       </svg>
  //     </button>

  //     {/* GRID OF 5 ITEMS */}
  //     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 p-4">
  //       {visibleClients.map((client) => {
  //         const imageUrl = `${API_URL}/${client.image.replace(/^\/+/, "")}`;
  //         return (
  //           <div
  //             key={client._id}
  //             className="flex justify-center items-center bg-white p-3 rounded-md shadow-sm hover:scale-105 transition-transform duration-200"
  //           >
  //             <div className="w-24 h-24 overflow-hidden rounded-md bg-gray-100 flex justify-center items-center">
  //               <img
  //                 src={imageUrl}
  //                 alt="Client Logo"
  //                 className="w-full h-full object-cover"
  //               />
  //             </div>
  //           </div>
  //         );
  //       })}
  //     </div>

  //     {/* RIGHT BUTTON */}
  //     <button
  //       onClick={handleNext}
  //       className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition shadow"
  //     >
  //       <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  //       </svg>
  //     </button>

  //   </div>
  // </section>
     <div className="w-full py-10 overflow-hidden bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        {heading?.heading}
      </h2>

         <div className="marquee">
        <div className="marquee-track">
          {logos.concat(logos).map((logo, i) => (
            <div key={i} className="marquee-item">
              <img src={logo.src} className="logo-img  rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      
         {/* <style>{`
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
      `}</style> */}

    </div>
);

};

export default Clients;
