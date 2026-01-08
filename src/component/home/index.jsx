// // import { useLocation, useNavigate } from "react-router-dom";
// // import { AboutUs } from "./about";
// // import { EmployerBenefits } from "./benefit";
// // import { BookingFormBanner } from "./booking";
// // import Clients from "./clients";
// // import { Performance } from "./performance";
// // import { OurServices } from "./service";
// // import StrategicStrengths from "./strength";
// // import Testimonials from "./testimonational";
// // import { WhatSetsUsApart } from "./whatsetus";
// // import { Helmet } from "react-helmet-async";
// // import { useEffect, useRef } from "react";
// // import { faqData } from "../FQA/FaqData";
// // import { FAQAccordion}  from "../FQA/FaqAccording";
// // import { Link } from "react-router-dom";
// // export const Home = () => {
// //   const location = useLocation();
// //   const { hash } = useLocation();
// //   const navigate = useNavigate();
// //   const testimonialRef = useRef(null);

// //   const scrollToSection = () => {
// //     if (testimonialRef.current) {
// //       testimonialRef.current.scrollIntoView({
// //         behavior: "smooth",
// //         block: "start",
// //       });
// //     }
// //   };

// //   useEffect(() => {
// //     if (hash) {
// //       const section = document.querySelector(hash);
// //       if (section) {
// //         section.scrollIntoView({ behavior: "smooth" });
// //       }
// //     }
// //   }, [hash]);

// //   useEffect(() => {
// //     if (location.state?.scrollTo === "testimonial") {
// //       setTimeout(() => {
// //         scrollToSection();
// //         navigate(location.pathname, { replace: true, state: {} });
// //       }, 100);
// //     }
// //   }, [location.state, navigate]);
// //   return (
// //     <>
// //       <Helmet>
// //         <title>Home - VIYAGOO</title>
// //       </Helmet>

// //       <BookingFormBanner />
// //       <AboutUs />
// //       <OurServices />
// //       <EmployerBenefits />
// //       <Performance />
// //       <WhatSetsUsApart />
// //       <StrategicStrengths />
// //       <Clients />

// //       <div id="testimonial" ref={testimonialRef}>
// //         <Testimonials />
// //       </div>
// //   <section className="py-10">
// //   <div className="max-w-4xl mx-auto px-4">

// //     <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
// //       Frequently Asked Questions
// //     </h2>

// //     <FAQAccordion />

// //           <div className="text-center mt-10">
// //             <Link to="/faq">
// //               <button className="px-8 py-4 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
// //                 See all FAQs
// //               </button>
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* <Testimonials /> */}
// //     </>
// //   );
// // };
// import { useLocation, useNavigate } from "react-router-dom";
// import { AboutUs } from "./about";
// import { EmployerBenefits } from "./benefit";
// import { BookingFormBanner } from "./booking";
// import Clients from "./clients";
// import { Performance } from "./performance";
// import { OurServices } from "./service";
// import StrategicStrengths from "./strength";
// import Testimonials from "./testimonational";
// import { WhatSetsUsApart } from "./whatsetus";
// import { Helmet } from "react-helmet-async";
// import { useEffect, useRef } from "react";

// import { faqData } from "../FQA/FaqData";
// import { FAQAccordion } from "../FQA/FaqAccording";
// import { Link } from "react-router-dom";
// import { DynamicCanonical } from "../common/DynamicCanonical";
// import { FAQSchema } from "../common/FaqDataSeo";
// import BookingProcess from "../home/BookingProcess";

// export const Home = () => {
//   const location = useLocation();
//   const { hash } = useLocation();
//   const navigate = useNavigate();
//   const testimonialRef = useRef(null);

//   const scrollToSection = () => {
//     if (testimonialRef.current) {
//       testimonialRef.current.scrollIntoView({
//         behavior: "smooth",
//         block: "start",
//       });
//     }
//   };

//   useEffect(() => {
//     if (hash) {
//       const section = document.querySelector(hash);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [hash]);

//   useEffect(() => {
//     if (location.state?.scrollTo === "testimonial") {
//       setTimeout(() => {
//         scrollToSection();
//         navigate(location.pathname, { replace: true, state: {} });
//       }, 100);
//     }
//   }, [location.state, navigate]);

//   return (
//     <>
//       <Helmet>
//         <title>
//           VIYAGOO Travels | Employee Transportation Service Bangalore
//         </title>

//         <meta
//           name="description"
//           content="Viyagoo- We provide corporate employee transportation, airport transfers, executive chauffeur services, corporate shuttles, and reliable logistics solutions."
//         />
//       </Helmet>
//       <h1
//         style={{
//           position: "absolute",
//           left: "-9999px",
//           width: "1px",
//           height: "1px",
//           overflow: "hidden",
//         }}
//       >
//         VIYAGOO Travels | Employee Transportation Service Bangalore
//       </h1>
//       <DynamicCanonical />

//       <BookingFormBanner />

//       <AboutUs />
//       <OurServices />
//       <EmployerBenefits />
//       <Performance />
//       <WhatSetsUsApart />
//       <StrategicStrengths />
//       <Clients />

//       <div id="testimonial" ref={testimonialRef}>
//         <Testimonials />
//       </div>
//       <BookingProcess />
//       <FAQAccordion items={faqData} />
//       <FAQSchema />
//     </>
//   );
// };


import { useLocation, useNavigate } from "react-router-dom";
import { AboutUs } from "./about";
import { EmployerBenefits } from "./benefit";
import { BookingFormBanner } from "./booking";
import Clients from "./clients";
import { Performance } from "./performance";
import { OurServices } from "./service";
import StrategicStrengths from "./strength";
import Testimonials from "./testimonational";
import { WhatSetsUsApart } from "./whatsetus";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";

import { faqData } from "../FQA/FaqData";
import { FAQAccordion } from "../FQA/FaqAccording";
import { Link } from "react-router-dom";
import { DynamicCanonical } from "../common/DynamicCanonical";
import { FAQSchema } from "../common/FaqDataSeo";
import BookingProcess from "../home/BookingProcess";

export const Home = () => {
  const location = useLocation();
  const { hash } = useLocation();
  const navigate = useNavigate();
  const testimonialRef = useRef(null);

  const scrollToSection = () => {
    if (testimonialRef.current) {
      testimonialRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  useEffect(() => {
    if (location.state?.scrollTo === "testimonial") {
      setTimeout(() => {
        scrollToSection();
        navigate(location.pathname, { replace: true, state: {} });
      }, 100);
    }
  }, [location.state, navigate]);

  return (
    <>
      <Helmet>
        {/* SEO FIX 1: Keyword Rich Title */}
        <title>VIYAGOO Travels | Employee Transportation Service Bangalore</title>
        
        {/* SEO FIX 2: Optimized Meta Description */}
        <meta
          name="description"
          content="Viyagoo provides premium corporate employee transportation, executive chauffeur services, and airport transfers in Bangalore. Reliable, safe, and tech-driven mobility solutions."
        />

        {/* SOCIAL FIX: Open Graph Tags (Grade F to A) */}
        <meta property="og:title" content="Viyagoo - Corporate Employee Transportation Services" />
        <meta property="og:description" content="Safe and reliable corporate mobility solutions across Bangalore. Get a quote today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://viyagoo.com" />
        <meta property="og:image" content="https://viyagoo.com/assets/logo1.webp" />

        {/* SOCIAL FIX: X (Twitter) Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Viyagoo Corporate Mobility" />
        <meta name="twitter:description" content="Tech-driven employee transportation services in Bangalore." />
      </Helmet>

      {/* SEO FIX 3: REMOVED HIDDEN H1 (Very Important) */}
      
      <DynamicCanonical />

      {/* Main Page Content */}
      <BookingFormBanner />
      <AboutUs />
      <OurServices />
      <EmployerBenefits />
      <Performance />
      <WhatSetsUsApart />
      <StrategicStrengths />
      <Clients />

      <div id="testimonial" ref={testimonialRef}>
        <Testimonials />
      </div>
      
      <BookingProcess />
      
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
           <FAQAccordion items={faqData} />
        </div>
      </section>

      <FAQSchema />
    </>
  );
};
