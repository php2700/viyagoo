// // import truckImage from "../../assets/truck.png";
// // import bgImg from "../../assets/about-bg.png";

// // export const AboutUs = () => {
// //       return (
// //             <section className="w-full max-w-7xl mx-auto py-16 bg-white text-center mt-80 md:mt-40 overflow-visible">
// //                   {/* Heading */}
// //                   <h2 className="text-[#0E1D3E] text-2xl md:text-3xl font-bold mb-10">
// //                         About Us
// //                   </h2>

// //                   <div className="relative flex flex-col md:flex-row items-center min-h-[480px] md:min-h-[520px] p-4 md:p-10 overflow-visible">
// //                         {/* Left Side - Truck */}
// //                         <div className="w-full md:w-1/2 flex justify-center relative z-30 mb-6 md:mb-0">
// //                               <img
// //                                     src={truckImage}
// //                                     alt="Truck"
// //                                     className="max-w-[90%] md:max-w-[80%] h-auto md:h-[450px] object-contain"
// //                               />
// //                         </div>

// //                         {/* Right Side - Background with Text */}
// //                         <div className="w-full md:w-[65%] relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-20">
// //                               <div className="relative w-full">
// //                                     {/* Background Image */}
// //                                     <img
// //                                           src={bgImg}
// //                                           alt="Background"
// //                                           className="
// //     w-[120%] sm:w-[110%] md:w-full
// //     h-[450px] sm:h-[550px] md:h-[520px]
// //     object-contain
// //     mx-auto
// //     transition-all duration-300
// //   "
// //                                     />

// //                                     {/* Text Overlay */}
// //                                     <div
// //                                           className="
// //                 absolute top-0 left-0 w-full h-full flex flex-col justify-center
// //                 p-4 sm:p-6 md:pl-[180px] md:pr-10 text-[#0E1D3E] text-left
// //               "
// //                                     >
// //                                           <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-3 leading-snug">
// //                                                 We Are Experts <br /> in
// //                                                 Building Dreams
// //                                           </h3>
// //                                           <p className="text-xs sm:text-sm md:text-base leading-relaxed md:pr-12">
// //                                                 Construction is a general term
// //                                                 meaning the art and science to
// //                                                 form objects, systems, or
// //                                                 organizations, and comes from
// //                                                 Latin constructio and Old French
// //                                                 construction.
// //                                           </p>
// //                                     </div>
// //                               </div>
// //                         </div>
// //                   </div>
// //             </section>
// //       );
// // };

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import truckImage from "../../assets/truck.png";
// import bgImg from "../../assets/about-bg.png";

// const API_URL = import.meta.env.VITE_APP_URL.replace(/\/+$/, "");

// export const AboutUs = () => {
//   const [aboutData, setAboutData] = useState({
//     heading: "",
//     title: "",
//     description: "",
//     image: "",
//   });

//   const fetchAbout = async () => {
//     try {
//       const res = await axios.get(`${API_URL}/api/user/get-about`);
//       console.log(res?.data);
//       if (res.data?.data) {
//         setAboutData({
//           heading: res?.data?.data?.heading || "About Us",
//           title:
//             res.data.data.title || "We Are Experts <br /> in Building Dreams",
//           description:
//             res.data.data.description ||
//             "Construction is a general term meaning the art and science to form objects, systems, or organizations, and comes from Latin constructio and Old French construction.",
//           image: res.data.data.image
//             ? `${API_URL}/${res.data.data.image
//                 .replace(/^public\//, "")
//                 .replace(/^\/+/, "")}`
//             : truckImage,
//         });
//       }
//     } catch (err) {
//       console.log("Fetch About Error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchAbout();
//   }, []);

//   return (
//     <section className="w-full max-w-7xl mx-auto py-16 bg-white text-center mt-80 md:mt-40 overflow-visible">
//       <h1 className=" text-2xl md:text-3xl font-bold mb-10">
//         {aboutData?.heading}
//       </h1>

//       {/* <div className="relative flex flex-col md:flex-row items-center min-h-[480px] md:min-h-[520px] p-4 md:p-10 overflow-visible">

//         <div className="w-full md:w-1/2 flex justify-center relative z-30 mb-6 md:mb-0">
//           <img
//             src={aboutData.image}
//             alt="About"
//             className="max-w-[90%] md:max-w-[80%] h-auto md:h-[450px] object-contain"
//           />
//         </div>

//         <div className="w-full md:w-[65%] relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-20">
//           <div className="relative w-full">
//             <img
//               src={bgImg}
//               alt="Background"
//               className="
//                 w-[120%] sm:w-[110%] md:w-full
//                 h-[450px] sm:h-[550px] md:h-[520px]
//                 object-contain
//                 mx-auto
//                 transition-all duration-300
//               "
//             />
//             <div
//               className="
//                 absolute top-0 left-0 w-full h-full flex flex-col justify-center
//                 p-4 sm:p-6 md:pl-[180px] md:pr-10  text-left
//               "
//             >
//               <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-3 leading-snug">
//                 <span dangerouslySetInnerHTML={{ __html: aboutData.title }} />
//               </h3>
//               <p className="text-xs sm:text-sm md:text-base leading-relaxed md:pr-12">
//                 {aboutData.description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div> */}

//       <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center min-h-[480px] md:min-h-[520px] p-4 md:p-10 gap-8">
//         <div className="w-full flex justify-center relative z-30">
//           <img
//             src={aboutData.image}
//             alt="About"
//             className="max-w-[90%] md:max-w-[80%] h-auto md:h-[450px] object-contain"
//           />
//         </div>

//         <div className="w-full flex items-center">
//           <div
//             className="
//         w-full h-full
//         flex flex-col justify-center
//         p-6 md:pl-16 md:pr-10
//         text-left
//         bg-[#ECF5FF] border border-gray-400 rounded-xl
//       "
//           >
//             <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-3 leading-snug">
//               <span dangerouslySetInnerHTML={{ __html: aboutData.title }} />
//             </h3>

//             <p className="text-xs sm:text-sm break-words md:text-base leading-relaxed md:pr-12">
//               {aboutData.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// import truckImage from "../../assets/truck.png";
// import bgImg from "../../assets/about-bg.png";

// export const AboutUs = () => {
//       return (
//             <section className="w-full max-w-7xl mx-auto py-16 bg-white text-center mt-80 md:mt-40 overflow-visible">
//                   {/* Heading */}
//                   <h2 className="text-[#0E1D3E] text-2xl md:text-3xl font-bold mb-10">
//                         About Us
//                   </h2>

//                   <div className="relative flex flex-col md:flex-row items-center min-h-[480px] md:min-h-[520px] p-4 md:p-10 overflow-visible">
//                         {/* Left Side - Truck */}
//                         <div className="w-full md:w-1/2 flex justify-center relative z-30 mb-6 md:mb-0">
//                               <img
//                                     src={truckImage}
//                                     alt="Truck"
//                                     className="max-w-[90%] md:max-w-[80%] h-auto md:h-[450px] object-contain"
//                               />
//                         </div>

//                         {/* Right Side - Background with Text */}
//                         <div className="w-full md:w-[65%] relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-20">
//                               <div className="relative w-full">
//                                     {/* Background Image */}
//                                     <img
//                                           src={bgImg}
//                                           alt="Background"
//                                           className="
//     w-[120%] sm:w-[110%] md:w-full
//     h-[450px] sm:h-[550px] md:h-[520px]
//     object-contain
//     mx-auto
//     transition-all duration-300
//   "
//                                     />

//                                     {/* Text Overlay */}
//                                     <div
//                                           className="
//                 absolute top-0 left-0 w-full h-full flex flex-col justify-center
//                 p-4 sm:p-6 md:pl-[180px] md:pr-10 text-[#0E1D3E] text-left
//               "
//                                     >
//                                           <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-3 leading-snug">
//                                                 We Are Experts <br /> in
//                                                 Building Dreams
//                                           </h3>
//                                           <p className="text-xs sm:text-sm md:text-base leading-relaxed md:pr-12">
//                                                 Construction is a general term
//                                                 meaning the art and science to
//                                                 form objects, systems, or
//                                                 organizations, and comes from
//                                                 Latin constructio and Old French
//                                                 construction.
//                                           </p>
//                                     </div>
//                               </div>
//                         </div>
//                   </div>
//             </section>
//       );
// };

import React, { useEffect, useState } from "react";
import axios from "axios";
import truckImage from "../../assets/truck.png";
import bgImg from "../../assets/about-bg.png";

const API_URL = import.meta.env.VITE_APP_URL.replace(/\/+$/, "");

export const AboutUs = () => {
  const [aboutData, setAboutData] = useState({
    heading: "",
    title: "",
    description: "",
    image: "",
  });

  const fetchAbout = async () => {
    try {
      const res = await axios.get(`${API_URL}/api/user/get-about`);
      console.log(res?.data);
      if (res.data?.data) {
        setAboutData({
          heading: res?.data?.data?.heading || "About Us",
          title:
            res.data.data.title || "We Are Experts <br /> in Building Dreams",
          description:
            res.data.data.description ||
            "Construction is a general term meaning the art and science to form objects, systems, or organizations, and comes from Latin constructio and Old French construction.",
          image: res.data.data.image
            ? `${API_URL}/${res.data.data.image
                .replace(/^public\//, "")
                .replace(/^\/+/, "")}`
            : truckImage,
        });
      }
    } catch (err) {
      console.log("Fetch About Error:", err);
    }
  };

  useEffect(() => {
    fetchAbout();
  }, []);

  const [showMore, setShowMore] = useState(false);

  const description = aboutData?.description || "";
  const limit = 500;
  const shortText = description.slice(0, limit);

  // return (
  // <section className="w-full  mx-auto py-16 bg-white text-center  overflow-visible">
  //   <h1 className=" text-2xl md:text-3xl font-bold mb-10">
  //     {aboutData?.heading}
  //   </h1>

  {
    /* <div className="relative flex flex-col md:flex-row items-center min-h-[480px] md:min-h-[520px] p-4 md:p-10 overflow-visible">

        <div className="w-full md:w-1/2 flex justify-center relative z-30 mb-6 md:mb-0">
          <img
            src={aboutData.image}
            alt="About"
            className="max-w-[90%] md:max-w-[80%] h-auto md:h-[450px] object-contain"
          />
        </div>

        <div className="w-full md:w-[65%] relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-20">
          <div className="relative w-full">
            <img
              src={bgImg}
              alt="Background"
              className="
                w-[120%] sm:w-[110%] md:w-full
                h-[450px] sm:h-[550px] md:h-[520px]
                object-contain
                mx-auto
                transition-all duration-300
              "
            />
            <div
              className="
                absolute top-0 left-0 w-full h-full flex flex-col justify-center 
                p-4 sm:p-6 md:pl-[180px] md:pr-10  text-left
              "
            >
              <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-3 leading-snug">
                <span dangerouslySetInnerHTML={{ __html: aboutData.title }} />
              </h3>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed md:pr-12">
                {aboutData.description}
              </p>
            </div>
          </div>
        </div>
      </div> */
  }
  {
    /* 
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center min-h-[480px] md:min-h-[520px] p-4 md:p-8 gap-6">
        <div className="w-full flex justify-center relative z-30">
          <img
            src={aboutData.image}
            alt="About"
            className="max-w-[90%] md:max-w-[80%] h-auto md:h-[450px] object-contain"
          />
        </div> */
  }

  {
    /* <div className="w-full flex items-center">
          <div
            className="
        w-full h-full 
        flex flex-col justify-center 
        p-6 md:pl-16 md:pr-10 
        text-left 
        bg-[#ECF5FF] border border-gray-400 rounded-xl
      "
          >
            <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-3 leading-snug">
              <span dangerouslySetInnerHTML={{ __html: aboutData.title }} />
            </h3>

            <p className="text-xs sm:text-sm break-words md:text-base leading-relaxed md:pr-12 whitespace-pre-line">
              {showMore ? description : shortText}
              {!showMore && description.length > limit && "..."}
            </p>

            {description.length > limit && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="mt-2 text-[#0572E6] text-sm font-medium hover:underline"
              >
                {showMore ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div> */
  }
  {
    /* <div className="w-full flex justify-center">
  <div
    className="flex flex-col justify-center p-6 md:pl-16 md:pr-10 text-left bg-[#ECF5FF] border border-gray-400 rounded-xl transition-all duration-700 ease-in-out"
    style={{
      width: "100%",
      maxWidth: showMore ? "600px" : "600px", // match column width
    }}
  >

      <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-3 leading-snug">
        <span dangerouslySetInnerHTML={{ __html: aboutData.title }} />
      </h3>

      <div
        className="overflow-hidden transition-all duration-700 ease-in-out"
        style={{ maxHeight: showMore ? "3000px" : "300px" }}
      >
        <p className="text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      {description.length > limit && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-2 text-[#0572E6] text-sm font-medium hover:underline w-fit"
        >
          {showMore ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  </div>





        </div>
      </section>
    );
  }; */
  }
  return (
    <section className="w-full py-16 bg-white overflow-visible">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          {aboutData?.heading}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10">
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={aboutData.image}
              alt="About"
              className="w-full max-w-[450px] h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Content Box */}
          <div className="flex justify-center lg:justify-start">
            <div
              className="flex flex-col  justify-start p-6 text-left bg-[#ECF5FF] border border-gray-400 rounded-xl transition-all duration-700 ease-in-out"
              // style={{
              //   width: showMore
              //     ? description.length > 600
              //       ? "580px"
              //       : "600px"
              //     : "400px",
              // }}
            >
              <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-3 leading-snug">
                <span dangerouslySetInnerHTML={{ __html: aboutData.title }} />
              </h3>

              {/* <div
              className={`transition-all duration-700 ease-in-out 
                ${
                !showMore ? "max-h-[300px] overflow-hidden" : ""
              }`}
            >
              <p className="text-xs sm:text-sm md:text-base leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </div>

            {description.length > 300 && (
              <button
                onClick={() => setShowMore(!showMore)}
                className="mt-4 text-[#0572E6] text-sm font-medium hover:underline w-fit"
              >
                {showMore ? "Read Less" : "Read More"}
              </button>
            )} */}
              <div className="w-full block min-w-full">
                <p className="w-full text-xs sm:text-sm md:text-base leading-relaxed break-words">
                  {showMore ? description : description.slice(0, 500)}
                  {!showMore && description.length > 500 && "... "}

                  {description.length > 500 && (
                    <span
                      onClick={() => setShowMore(!showMore)}
                      className="inline cursor-pointer text-[#0572E6] text-sm font-medium hover:underline whitespace-nowrap"
                    >
                      {showMore ? "Read Less" : "Read More"}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
