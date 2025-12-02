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
        <title>Home - VIYAGOO</title>
      </Helmet>
  
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
      {/* <Testimonials /> */}
    </>
  );
};
