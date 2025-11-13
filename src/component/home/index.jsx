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

export const Home = () => {
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
                  <Testimonials /> 
            </>
      );
};
