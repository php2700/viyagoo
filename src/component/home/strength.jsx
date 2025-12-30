// import React from "react";
// import PepsiLogo from "../../assets/pepsi.png";
// import TataLogo from "../../assets/tata.png";
// import MRFLogo from "../../assets/mrf.png";
// import CocaColaLogo from "../../assets/cocacola.png";
// import MahindraLogo from "../../assets/mahindra.png";

// const StrategicStrengths = () => {
//   const logos = [
//     { src: PepsiLogo, alt: "Pepsi" },
//     { src: TataLogo, alt: "Tata" },
//     { src: MRFLogo, alt: "MRF" },
//     { src: CocaColaLogo, alt: "CocaCola" },
//     { src: MahindraLogo, alt: "Mahindra" },
//     { src: PepsiLogo, alt: "Pepsi" },
//     { src: TataLogo, alt: "Tata" },
//     { src: MRFLogo, alt: "MRF" },
//     { src: CocaColaLogo, alt: "CocaCola" },
//     { src: MahindraLogo, alt: "Mahindra" },
//   ];

//   return (
//     <section className="w-full max-w-7xl mx-auto py-10 text-center">
//       {/* Section Title */}
//       <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 inline-block">
//            Strategic Strengths
//       </h2>

// <div className="px-4">
//   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border border-[#1E3A8A]">
//     {logos.map((logo, index) => (
//       <div
//         key={index}
//         className="flex justify-center items-center bg-white hover:bg-blue-50 transition h-24 border-r border-b border-[#1E3A8A]
//         last:border-r-0 md:[&:nth-child(5n)]:border-r-0 [&:nth-last-child(-n+5)]:border-b-0"
//       >
//         <img
//           src={logo.src}
//           alt={logo.alt}
//           className="h-14 md:h-20 object-contain"
//         />
//       </div>
//     ))}
//   </div>
// </div>

//     </section>
//   );
// };

// export default StrategicStrengths;

// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";

// export default function StrategicStrengths() {
//   const [logos, setLogos] = useState([]);
//   const containerRef = useRef(null);
//   const track1Ref = useRef(null);
//   const track2Ref = useRef(null);

//   const cleanImagePath = (path) =>
//     path?.replace(/^\/?public/, "").replace(/^\/+/, "") || "";

//   const fetchLogos = async () => {
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_APP_URL}api/user/get-stregic`
//       );

//       if (res.data?.data) {
//         const formatted = res.data.data.map((item) => ({
//           src: `${import.meta.env.VITE_APP_URL}${cleanImagePath(item.image)}`,
//         }));
//         setLogos(formatted);
//       }
//     } catch (error) {
//       console.error("Error loading logos", error);
//     }
//   };

//   useEffect(() => {
//     fetchLogos();
//   }, []);

//   // 🔥 Infinite Loop Logic
//   useEffect(() => {
//     if (!logos.length) return;

//     const track1 = track1Ref.current;
//     const track2 = track2Ref.current;

//     let x = 0;
//     let speed = 2; // ← speed adjust

//     const animate = () => {
//       x -= speed;

//       if (track1 && track2) {
//         const width = track1.offsetWidth;

//         // जब पूरा पहला track बाएँ निकल जाए → reset
//         if (Math.abs(x) >= width) {
//           x = 0; // soft reset (NO JUMP)
//         }

//         track1.style.transform = `translateX(${x}px)`;
//         track2.style.transform = `translateX(${x + width}px)`;
//       }

//       requestAnimationFrame(animate);
//     };

//     animate();
//   }, [logos]);

//   return (
//     <div className="w-full py-10 overflow-hidden bg-white">
//       <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
//         Strategic Strengths
//       </h2>

//       <div
//         ref={containerRef}
//         className="relative w-full overflow-hidden"
//         style={{ height: "120px" }}
//       >
//         {/* Track 1 */}
//         <div ref={track1Ref} className="absolute left-0 top-0 flex">
//           {logos.map((logo, i) => (
//             <div key={i} className="px-10 flex items-center">
//               <img
//                 src={logo.src}
//                 className="w-[140px] h-[90px] object-contain"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Track 2 (duplicate) */}
//         <div ref={track2Ref} className="absolute left-0 top-0 flex">
//           {logos.map((logo, i) => (
//             <div key={`dup-${i}`} className="px-10 flex items-center">
//               <img
//                 src={logo.src}
//                 className="w-[140px] h-[90px] object-contain"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

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
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        {headingData?.heading}
      </h2>

      <div className="marquee">
        <div className="marquee-track">
          {logos.concat(logos).map((logo, i) => (
            <div key={i} className="marquee-item">
              <img src={logo.src} alt="VIYAGOO strategic and reliable corporate transport and logistics solutions in India"
 className="logo-img" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      {/* CSS */}
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
