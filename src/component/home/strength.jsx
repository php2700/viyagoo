import React from "react";
import PepsiLogo from "../../assets/pepsi.png";
import TataLogo from "../../assets/tata.png";
import MRFLogo from "../../assets/mrf.png";
import CocaColaLogo from "../../assets/cocacola.png";
import MahindraLogo from "../../assets/mahindra.png";

const StrategicStrengths = () => {
  const logos = [
    { src: PepsiLogo, alt: "Pepsi" },
    { src: TataLogo, alt: "Tata" },
    { src: MRFLogo, alt: "MRF" },
    { src: CocaColaLogo, alt: "CocaCola" },
    { src: MahindraLogo, alt: "Mahindra" },
    { src: PepsiLogo, alt: "Pepsi" },
    { src: TataLogo, alt: "Tata" },
    { src: MRFLogo, alt: "MRF" },
    { src: CocaColaLogo, alt: "CocaCola" },
    { src: MahindraLogo, alt: "Mahindra" },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-10 text-center">
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 inline-block">
        Strategic Strengths
      </h2>

      {/* Outer Rectangle */}
      <div className="px-4">
        {/* Connected Squares */}
        <div className="border border-[#1E3A8A]">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 divide-x divide-y divide-[#1E3A8A]">
            {logos.map((logo, index) => (
              <div className="flex justify-center items-center bg-white hover:bg-blue-50 transition h-24">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-14 md:h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicStrengths;
