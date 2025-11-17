// import React from "react";
// import PepsiLogo from "../../assets/pepsi.png";
// import TataLogo from "../../assets/tata.png";
// import MRFLogo from "../../assets/mrf.png";
// import CocaColaLogo from "../../assets/cocacola.png";
// import MahindraLogo from "../../assets/mahindra.png";

// const Clients = () => {
//       // ✅ Step 1: Store all logos and names in an array
//       const logos = [
//             { src: PepsiLogo, alt: "Pepsi" },
//             { src: CocaColaLogo, alt: "CocaCola" },
//             { src: TataLogo, alt: "Tata" },
//             { src: MahindraLogo, alt: "Mahindra" },
//             { src: MRFLogo, alt: "MRF" },
//       ];

//       return (
//             <section className="w-full max-w-7xl mx-auto py-10 text-center">
//                   {/* Section Title */}
//                   <h2 className="text-2xl md:text-3xl font-bold mb-6  pb-2 inline-block">
//                         Clients
//                   </h2>

//                   {/* ✅ Step 2: Map through the logo list */}
//                   <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
//                         {logos.map((logo, index) => (
//                               <div
//                                     key={index}
//                                     className="flex justify-center items-center bg-white p-2 rounded-md hover:scale-105 transition-transform duration-200"
//                               >
//                                     <img
//                                           src={logo.src}
//                                           alt={logo.alt}
//                                           className="h-20"
//                                     />
//                               </div>
//                         ))}
//                   </div>
//             </section>
//       );
// };

// export default Clients;


import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_APP_URL.replace(/\/+$/, "");

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [index, setIndex] = useState(0);


  const fetchClients = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/user/get-clients`);
      setClients(res.data.data || []);
    } catch (err) {
      console.log("Fetch Clients Error:", err);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);
const itemsPerSlide = 5;

const handleNext = () => {
  if (index + itemsPerSlide < clients.length) {
    setIndex(index + itemsPerSlide);
  }
};

const handlePrev = () => {
  if (index - itemsPerSlide >= 0) {
    setIndex(index - itemsPerSlide);
  }
};

// Filter visible items
const visibleClients = clients.slice(index, index + itemsPerSlide);

  // return (
  //   <section className="w-full max-w-7xl mx-auto py-10 text-center">
  //     <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 inline-block">
  //       Clients
  //     </h2>

  //     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
  //       {clients.map((client) => {
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
  //   </section>
  // );
  return (
  <section className="w-full max-w-7xl mx-auto py-10 text-center">
    <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 inline-block">
      Clients
    </h2>

    <div className="relative flex items-center justify-center">

      {/* LEFT BUTTON */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition shadow"
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* GRID OF 5 ITEMS */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 p-4">
        {visibleClients.map((client) => {
          const imageUrl = `${API_URL}/${client.image.replace(/^\/+/, "")}`;
          return (
            <div
              key={client._id}
              className="flex justify-center items-center bg-white p-3 rounded-md shadow-sm hover:scale-105 transition-transform duration-200"
            >
              <div className="w-24 h-24 overflow-hidden rounded-md bg-gray-100 flex justify-center items-center">
                <img
                  src={imageUrl}
                  alt="Client Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* RIGHT BUTTON */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition shadow"
      >
        <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

    </div>
  </section>
);

};

export default Clients;
