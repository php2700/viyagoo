import { AboutUs } from "./about";
import { EmployerBenefits } from "./benefit";
import { BookingFormBanner } from "./booking";
import Clients from "./clients";
import { Performance } from "./performance";
import { OurServices } from "./service";
import StrategicStrengths from "./strength";
import Testimonials from "./testimonational";
import { WhatSetsUsApart } from "./whatsetus";

export const Home = () => {
      return (
            <>
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
