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

  return (
    <section className="w-full max-w-7xl mx-auto py-10 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 pb-2 inline-block">
        Clients
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4">
        {clients.map((client) => {
          const imageUrl = `${API_URL}/${client.image.replace(/^\/+/, "")}`;
          return (
            <div
              key={client._id}
              className="flex justify-center items-center bg-white p-2 rounded-md hover:scale-105 transition-transform duration-200"
            >
              <img
                src={imageUrl}
                alt="Client Logo"
                className="h-20"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;
