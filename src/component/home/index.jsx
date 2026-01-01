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
// import { FAQAccordion}  from "../FQA/FaqAccording";
// import { Link } from "react-router-dom";
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
//         <title>Home - VIYAGOO</title>
//       </Helmet>

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
//   <section className="py-10">
//   <div className="max-w-4xl mx-auto px-4">
    
//     <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
//       Frequently Asked Questions
//     </h2>

//     <FAQAccordion />

//           <div className="text-center mt-10">
//             <Link to="/faq">
//               <button className="px-8 py-4 bg-blue-600 text-white font-medium text-lg rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
//                 See all FAQs
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* <Testimonials /> */}
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
import {DynamicCanonical} from "../common/DynamicCanonical"
import { FAQSchema } from  "../common/FaqDataSeo"
import BookingProcess from "../home/BookingProcess"

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

      <title>VIYAGOO Travels | Employee Transportation service Bangalore</title>

    <meta
      name="description"
      content="Viyagoo- We provide corporate employee transportation, airport transfers, executive chauffeur services, corporate shuttles, and reliable logistics solutions."
    />
      </Helmet>
            <DynamicCanonical />

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
      <BookingProcess/>
   <FAQAccordion items={faqData} />
    <FAQSchema />

                    
       

    </>
  );
};