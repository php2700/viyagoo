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


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const StrategicStrengths = () => {
//   const [logos, setLogos] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Image path cleaner (remove "public" from image path)
//   const cleanImagePath = (path) => {
//     if (!path) return "";
//     return path.replace(/^\/?public/, "").replace(/^\/+/, "");
//   };

//   const fetchLogos = async () => {
//     try {
//       const res = await axios.get(`${import.meta.env.VITE_APP_URL}api/user/get-stregic`);

//       if (res.data?.data) {
//         const formatted = res.data.data.map(item => ({
//           src: `${import.meta.env.VITE_APP_URL}${cleanImagePath(item.image)}`,
//           alt: "Logo"
//         }));
//         setLogos(formatted);
//       }
//     } catch (err) {
//       console.error("Error fetching logos:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchLogos();
//   }, []);

//   return (
//     <section className="w-full max-w-7xl mx-auto py-10 text-center">
      
//       {/* Section Title */}
//       <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 inline-block">
//         Strategic Strengths
//       </h2>

//       {loading ? (
//         <p className="text-gray-600">Loading...</p>
//       ) : logos.length === 0 ? (
//         <p className="text-gray-600">No Strength Logos Found</p>
//       ) : (
//         <div className="px-4">
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border border-[#1E3A8A]">
//             {logos.map((logo, index) => (
//               <div
//                 key={index}
//                 className="flex justify-center items-center bg-white hover:bg-blue-50 transition h-24 border-r border-b border-[#1E3A8A]
//                 last:border-r-0 md:[&:nth-child(5n)]:border-r-0 [&:nth-last-child(-n+5)]:border-b-0"
//               >
//                 <img
//                   src={logo.src}
//                   alt={logo.alt}
//                   className="h-14 md:h-20 object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default StrategicStrengths;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function StrategicStrengths() {
//   const [logos, setLogos] = useState([]);

//   const cleanImagePath = (path) => {
//     if (!path) return "";
//     return path.replace(/^\/?public/, "").replace(/^\/+/, "");
//   };

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

//   const scrollingLogos = [...logos, ...logos];

//   return (
//     <div className="w-full py-10 overflow-hidden bg-white">
//       <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
//         Strategic Strengths
//       </h2>

//       <div className="relative w-full overflow-hidden">
//         <div
//           className="flex gap-20 animate-scroll whitespace-nowrap"
//           style={{
//             animationDuration: `${scrollingLogos.length * 0.2}s`, // SPEED HERE (2 = fast)
//           }}
//         >
//           {scrollingLogos.map((logo, index) => (
//             <img
//               key={index}
//               src={logo.src}
//               alt="logo"
//               className="w-[120px] h-[80px] object-contain"
//             />
//           ))}
//         </div>
//       </div>

//       <style>
//         {`
//           @keyframes scroll {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
//           .animate-scroll {
//             animation: scroll linear infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// }


import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function StrategicStrengths() {
  const [logos, setLogos] = useState([]);
  const containerRef = useRef(null);
  const track1Ref = useRef(null);
  const track2Ref = useRef(null);

  const cleanImagePath = (path) =>
    path?.replace(/^\/?public/, "").replace(/^\/+/, "") || "";

  const fetchLogos = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/get-stregic`
      );

      if (res.data?.data) {
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
    <div className="w-full py-10 overflow-hidden bg-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Strategic Strengths
      </h2>

      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        style={{ height: "120px" }}
      >
        {/* Track 1 */}
        <div ref={track1Ref} className="absolute left-0 top-0 flex">
          {logos.map((logo, i) => (
            <div key={i} className="px-10 flex items-center">
              <img
                src={logo.src}
                className="w-[140px] h-[90px] object-contain"
              />
            </div>
          ))}
        </div>

        {/* Track 2 (duplicate) */}
        <div ref={track2Ref} className="absolute left-0 top-0 flex">
          {logos.map((logo, i) => (
            <div key={`dup-${i}`} className="px-10 flex items-center">
              <img
                src={logo.src}
                className="w-[140px] h-[90px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
