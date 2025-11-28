// import { useState, useEffect } from "react";
// import bgImage from "../../assets/natural.jpg";
// import cityBuilding from "../../assets/Citybuildings.png";
// import carClean from "../../assets/CarCleaning.png";
// import containerTruck from "../../assets/containerTruck.png";
// import carPool from "../../assets/Carpool.png";

// export const OurServices = () => {
//       const services = [
//             {
//                   icon: cityBuilding,
//                   title: "Corporate Employee Transportation",
//                   desc: "Collect reviews, Q&A and other content from your customers started.",
//             },
//             {
//                   icon: carClean,
//                   title: "Chauffeur & Airport Transfers",
//                   desc: "Use your user-generated content in sales and marketing.",
//             },
//             {
//                   icon: containerTruck,
//                   title: "Logistics",
//                   desc: "In the end, it’s all about your customers. Build their trust and help.",
//             },
//             {
//                   icon: carPool,
//                   title: "EV Segment",
//                   desc: "In the end, it’s all about your customers. Build their trust and help.",
//             },
//       ];

//       const [slideIndex, setSlideIndex] = useState(0);
//       const [cardsPerSlide, setCardsPerSlide] = useState(2);

//       useEffect(() => {
//             const handleResize = () => {
//                   if (window.innerWidth >= 1024) setCardsPerSlide(4);
//                   else if (window.innerWidth >= 768) setCardsPerSlide(2);
//                   else setCardsPerSlide(1);
//             };

//             handleResize();
//             window.addEventListener("resize", handleResize);
//             return () => window.removeEventListener("resize", handleResize);
//       }, []);

//       const visibleCards = services.slice(
//             slideIndex * cardsPerSlide,
//             slideIndex * cardsPerSlide + cardsPerSlide
//       );

//       const handleNext = () => {
//             if (slideIndex < Math.ceil(services.length / cardsPerSlide) - 1)
//                   setSlideIndex(slideIndex + 1);
//       };

//       const handlePrev = () => {
//             if (slideIndex > 0) setSlideIndex(slideIndex - 1);
//       };

//       return (
//             <>
//                   <h2 className="text-3xl md:text-4xl text-center font-bold mb-12">
//                         Our Services
//                   </h2>

//                   <section
//                         className="relative w-full h-[100vh] bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center"
//                         style={{ backgroundImage: `url(${bgImage})` }}
//                   >
//                         <div className="absolute inset-0"></div>

//                         <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 text-center">
//                               <div className="flex flex-col items-center justify-center h-full relative">
//                                     <div className="w-full flex justify-center items-center relative">
//                                           {/* Cards Container */}
//                                           <div
//                                                 className={`grid gap-4 justify-items-center w-full ${
//                                                       cardsPerSlide === 4
//                                                             ? "grid-cols-4"
//                                                             : cardsPerSlide ===
//                                                               2
//                                                             ? "grid-cols-2"
//                                                             : "grid-cols-1"
//                                                 }`}
//                                           >
//                                                 {visibleCards.map(
//                                                       (service, index) => (
//                                                             <div
//                                                                   key={index}
//                                                                   className="bg-white rounded-2xl shadow-md p-3 sm:p-4 flex flex-col items-center justify-center transition-transform hover:-translate-y-1 hover:shadow-lg min-h-[160px] sm:min-h-[200px]"
//                                                             >
//                                                                   <img
//                                                                         src={
//                                                                               service.icon
//                                                                         }
//                                                                         alt={
//                                                                               service.title
//                                                                         }
//                                                                         className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2 sm:mb-4"
//                                                                   />
//                                                                   <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2">
//                                                                         {
//                                                                               service.title
//                                                                         }
//                                                                   </h3>
//                                                                   <p className="text-xs sm:text-sm">
//                                                                         {
//                                                                               service.desc
//                                                                         }
//                                                                   </p>
//                                                             </div>
//                                                       )
//                                                 )}
//                                           </div>

//                                           {/* Navigation Buttons */}
//                                           {cardsPerSlide < 4 && (
//                                                 <>
//                                                       <button
//                                                             onClick={handlePrev}
//                                                             disabled={
//                                                                   slideIndex ===
//                                                                   0
//                                                             }
//                                                             className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 disabled:bg-gray-400 disabled:cursor-not-allowed"
//                                                       >
//                                                             &#8249;
//                                                       </button>
//                                                       <button
//                                                             onClick={handleNext}
//                                                             disabled={
//                                                                   slideIndex >=
//                                                                   Math.ceil(
//                                                                         services.length /
//                                                                               cardsPerSlide
//                                                                   ) -
//                                                                         1
//                                                             }
//                                                             className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 disabled:bg-gray-400 disabled:cursor-not-allowed"
//                                                       >
//                                                             &#8250;
//                                                       </button>
//                                                 </>
//                                           )}
//                                     </div>
//                               </div>
//                         </div>
//                   </section>
//             </>
//       );
// };

// import bgImage from "../../assets/natural.jpg";
// import cityBuilding from "../../assets/Citybuildings.png";
// import carClean from "../../assets/CarCleaning.png";
// import containerTruck from "../../assets/containerTruck.png";
// import carPool from "../../assets/Carpool.png";

// export const OurServices = () => {
//       const services = [
//             {
//                   icon: cityBuilding,
//                   title: "Corporate Employee Transportation",
//                   desc: "Collect reviews, Q&A and other content from your customers started.",
//             },
//             {
//                   icon: carClean,
//                   title: "Chauffeur & Airport Transfers",
//                   desc: "Use your user-generated content in sales and marketing.",
//             },
//             {
//                   icon: containerTruck,
//                   title: "Logistics",
//                   desc: "In the end, it’s all about your customers. Build their trust and help.",
//             },
//             {
//                   icon: carPool,
//                   title: "EV Segment",
//                   desc: "In the end, it’s all about your customers. Build their trust and help.",
//             },
//       ];

//       return (
//             <>
//                   <h2 className="text-3xl md:text-4xl text-center font-bold mb-12">
//                         Our Services
//                   </h2>

//                   <section
//                         className="relative w-full min-h-[80vh] h-full bg-cover bg-center bg-no-repeat flex justify-center items-center px-4 sm:px-6"
//                         style={{ backgroundImage: `url(${bgImage})` }}
//                   >
//                         <div className="relative z-10 w-full max-w-7xl">
//                               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-2 gap-6 justify-items-center">
//                                     {services.map((service, index) => (
//                                           <div
//                                                 key={index}
//                                                 className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col items-center justify-center transition-transform hover:-translate-y-1 hover:shadow-lg min-h-[180px] sm:min-h-[200px]"
//                                           >
//                                                 <img
//                                                       src={service.icon}
//                                                       alt={service.title}
//                                                       className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2 sm:mb-4"
//                                                 />
//                                                 <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2 text-center">
//                                                       {service.title}
//                                                 </h3>
//                                                 <p className="text-xs sm:text-sm text-center">
//                                                       {service.desc}
//                                                 </p>
//                                           </div>
//                                     ))}
//                               </div>
//                         </div>
//                   </section>
//             </>
//       );
// };


import { useState, useEffect } from "react";
import bgImage from "../../assets/natural.jpg";

export const OurServices = () => {
      const API_URL = import.meta.env.VITE_APP_URL.replace(/\/+$/, "");
      const [services, setServices] = useState([]);

      useEffect(() => {
            fetch(`${API_URL}/api/user/get-saving`)
                  .then((res) => res.json())
                  .then((data) => {
                        setServices(data.data || []);
                  })
                  .catch((err) => console.error("Error fetching:", err));
      }, []);

      return (
            <>
                  <h2 className="text-3xl md:text-4xl text-center font-bold mb-12">
                        Our Services
                  </h2>

                  <section
                        className="relative w-full min-h-[80vh] h-full bg-cover bg-center bg-no-repeat flex justify-center items-center px-4 sm:px-6"
                        style={{ backgroundImage: `url(${bgImage})` }}
                  >
                        <div className="relative z-10 w-full max-w-7xl">
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-2 gap-6 justify-items-center">
                                    {services.map((service, index) => (
                                          <div
                                                key={index}
                                                className="bg-white rounded-2xl shadow-md p-4 sm:p-6 flex flex-col items-center justify-center transition-transform hover:-translate-y-1 hover:shadow-lg min-h-[180px] sm:min-h-[200px]"
                                          >
                                                <img
                                                      src={`${API_URL}/${service.image
                                                            .replace("public/", "")
                                                            .replace(/^\/+/, "")
                                                            }`}

                                                      alt={service.title}

                                                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2 sm:mb-4    "
                                                />



                                                <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2 text-center">
                                                      {service.title}
                                                </h3>

                                                <p className="text-xs sm:text-sm text-center">
                                                      {service.description}
                                                </p>
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </section>
            </>
      );
};
