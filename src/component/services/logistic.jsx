// // import React from "react";
// // import { Banner } from "../common/banner";
// // import { Header } from "../common/header";
// // import Footer from "../common/footer";

// // const Services = () => {
// //   return (
// //     <div className="flex flex-col min-h-screen">
// //       {/* <Header /> */}

// //       {/* Banner Section */}
// //       <Banner title="Our Services" subtitle="Safe, Reliable & Comfortable Transportation Solutions" />

// //       {/* Main Content */}


// //       {/* <Footer /> */}
// //     </div>
// //   );
// // };

// // export default Services;
// import React from "react";
// import { Banner } from "../common/banner";
// import { Header } from "../common/header";
// import Footer from "../common/footer";
// import ser1 from "../../assets/services/service2.png"
// import ser3 from "../../assets/services/service3.png"
// import ser4 from "../../assets/services/service4.png"
// import ser5 from "../../assets/services/service-backg.png"




// const Logistic = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-white text-gray-800">
//       {/* Top Section */}

//         <section className="text-center py-12 bg-gradient-to-b from-white to-text-[#273270]">
//           <h1 className="text-3xl font-extrabold text-[#273270] md:text-[40px] mb-6" style={{ fontFamily: "Bell MT" }}>Our Services</h1>

//           <div className="flex flex-wrap justify-center gap-4 mb-8">
//             <button className="px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800">
//               CORPORATE EMPLOYEE TRANSPORTATION
//             </button>
//             <button className="px-6 py-2 border border-blue-900 text-[#273270] rounded-full hover:bg-blue-900 hover:text-white transition">
//               CHAUFFEUR & AIRPORT TRANSFERS
//             </button>
//             <button className="px-6 py-2 border border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
//               LOGISTICS
//             </button>
//             <button className="px-6 py-2 border border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
//               EV SEGMENT
//             </button>
//           </div>

//           <p className="max-w-6xl mx-auto text-[#273270] md:text-[16px] px-4">
//             In today’s fast-paced business environment, mobility has become a critical enabler of productivity, employee satisfaction, and corporate success. While organizations often focus on salaries, work culture, and office infrastructure as key drivers of employee engagement, one crucial aspect is frequently overlooked — how employees commute to and from work every day. For many employees, especially in urban centers, commuting is not just a routine task but a daily challenge. Long distances, unpredictable traffic, rising fuel costs, and lack of reliable public transportation make the journey to work stressful and time-consuming. Over time, this daily struggle leads to fatigue, decreased productivity, and even higher attrition rates. This is where structured employee transportation services come into play. By providing safe, reliable, and well-managed commuting options, organizations can transform the employee experience, reduce operational inefficiencies, and strengthen their brand as an employer of choice
//           </p>
//         </section>

//         {/* Section 1 */}
//         <section className="max-w-6xl mx-auto py-12 px-4">
//           <h2 className="text-2xl font-semibold text-[#273270] md:text-[32px] mb-4" style={{ fontFamily: "'Bell MT', serif" }}>
//             The Growing Commuting Challenge
//           </h2>
//           <p className="text-[#273270] md:text-[18px] mb-4">
//             Let’s face it—urban mobility in India has become a massive challenge. Employees often spend 1–3 hours per day battling traffic,
//             juggling multiple modes of transport, or depending on unreliable public transit. This results in:
//           </p>
//           <ul className="list-disc pl-6 text-[#273270] md:text-[16px]  space-y-2 mb-6">
//             <li>Increased stress from long commutes.</li>
//             <li>Lost productive hours impacting work–life balance.</li>
//             <li>Decline in overall employee well-being and morale.</li>
//           </ul>
//           <p className="text-[#273270] md:text-[18px]">
//             As urban centers grow denser, traffic congestion continues to worsen, leading to increased fuel inefficiencies and higher costs.
//             For example, Transport experts highlight that growing traffic density influences office arrival delays by an estimated 35%,
//             reducing overall workforce efficiency.
//           </p>
//         </section>




//     </div>
//   );
// };

// export default Logistic;

import React from "react";
import { Banner } from "../common/banner";
import { Header } from "../common/header";
import Footer from "../common/footer";


// Add your imported images
import planeImage from "../../assets/services/logistic1.png"; // Replace this
import processImage from "../../assets/services/logistic2.png";
import workflow from "../../assets/services/logistic-work.png"; // Replace this
 // Replace this

const Logistic = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Top Section */}
      <section className="text-center py-12">
        <h1 className="text-3xl font-extrabold text-[#273270] md:text-[40px] mb-6" style={{ fontFamily: "Bell MT" }}>
          Our Services
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button className="px-6 py-2 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
            CORPORATE EMPLOYEE TRANSPORTATION
          </button>
          <button className="px-6 py-2 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
            CHAUFFEUR & AIRPORT TRANSFERS
          </button>
          <button className="px-6 py-2 rounded-full border border-blue-900 bg-blue-900 text-white  ">
            LOGISTICS
          </button>
          <button className="px-6 py-2 rounded-full border border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
            EV SEGMENT
          </button>
        </div>

        <p className="max-w-5xl mx-auto px-4 text-[#273270] md:text-[16px]">
         At Viyagoo, we provide seamless logistics and delivery solutions to all client segments that help businesses move their products efficiently from origin to destination. As a reliable delivery partner, we focus on timely, safe, and professional transportation, ensuring every shipment reaches its intended location with care. Our services are designed to simplify supply chain operations, support business growth, and deliver a consistent, dependable experience to partners and customers alike.
        </p>
      </section>

      {/* Core Logistics Services Section */}
<section className="max-w-6xl mx-auto py-12 px-8">
  <h2 className="text-2xl font-semibold text-center text-[#273270] md:text-[32px] mb-10" style={{ fontFamily: "Bell MT" }}>
    Core Logistics Services (Visually appealing cards)
  </h2>
  <div className="grid md:grid-cols-3 gap-6 text-center">
    {[
      {
        title: "Business-to-Business (B2B) Deliveries",
        desc: "We ensure products move smoothly between warehouses, suppliers, and business partners. Whether it’s raw materials, semi-finished goods, or finished products, we ensure timely delivery while maintaining the integrity of each shipment."
      },
      {
        title: "Partner & Vendor Distribution",
        desc: "Managing deliveries to multiple partners or vendors requires careful planning and reliability. At Viyagoo, we specialize in handling multi-point distribution, ensuring that each partner receives their shipments accurately and on time."
      },
      {
        title: "Bulk & Consolidated Shipments",
        desc: "We ensure that high-volume deliveries are handled efficiently while maintaining a high level of safety and professionalism."
      },
      {
        title: "Scheduled & On-Demand Deliveries",
        desc: "Every business has different timing requirements. Viyagoo provides both scheduled deliveries for predictable recurring needs and on-demand deliveries for urgent or unexpected requirements."
      },
      {
        title: "Secure Handling & Safe Transport",
        desc: "We prioritize the safety of every shipment, regardless of size or type. From careful loading and secure transport to professional handling at each touchpoint, our logistics services ensure products arrive in perfect condition."
      },
      {
        title: "Customized Solutions for Every Business",
        desc: "No two businesses operate the same way. Viyagoo provides tailored logistics solutions to fit each client’s specific needs. Whether it’s a complex multi-location distribution network or a simple last-mile delivery."
      },
    ].map(({ title, desc }, index) => (
      <div
        key={index}
        className="shadow-lg rounded-tr-[80px] rounded-bl-[80px] p-6 border border-gray-200 bg-[#ECF5FF] text-[#273270] hover:shadow-lg transition"
      >
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-sm">{desc}</p>
      </div>
    ))}
  </div>
</section>


      {/* Why VIYAGOO Section */}
{/* Why VIYAGOO Section */}
<section className="max-w-6xl mx-auto py-12 px-4">
  {/* Top Heading */}
  <h2
    className="text-2xl font-semibold md:text-[40px] text-center text-[#273270] mb-10"
    style={{ fontFamily: "Bell MT" }}
  >
    Why VIYAGOO?
  </h2>

  {/* 3 Column Layout */}
  <div className="grid md:grid-cols-3 gap-4 items-center">
    {/* Left Side */}
    <div className="space-y-6 text-right text-[#273270]">
      <div>
        <h3 className="font-semibold md:text-[27px]">Reliability & On-Time Deliveries</h3>
        <p className="text-[16px]">Our team has an in-depth understanding of the USA real estate market.</p>
      </div>
      <div>
        <h3 className="font-semibold md:text-[27px] ">Professional Handling Of All Shipments</h3>
        <p className="text-[16px]">We provide customized solutions to meet your unique property requirements.</p>
      </div>
    </div>

    {/* Center Image */}
    <div className="flex justify-center">
      <img
        src={planeImage}
        alt="Air Logistics"
        className="  h-[500px] w-[511px]"
      />
    </div>

    {/* Right Side */}
    <div className="space-y-6 text-left text-[#273270]">
      <div>
        <h3 className="font-semibold md:text-[27px]">Flexible & Scalable Solutions</h3>
        <p className="text-[16px]">Our team has an in-depth understanding of the USA real estate market.</p>
      </div>
      <div>
        <h3 className="font-semibold md:text-[27px]">Experienced Team & Industry Expertise</h3>
        <p className="text-[16px]">We are proud members of [Industry Association] and have received accolades for our outstanding service.</p>
      </div>
      <div>
        <h3 className="font-semibold md:text-[27px]">Personalized Client Support</h3>
        <p className="text-[16x]">We are proud members of [Industry Association] and have received accolades for our outstanding service.</p>
      </div>
    </div>
  </div>
</section>


      {/* How We Work Section */}
      <section className="bg-white py-12 px-4">
                  <div className="flex justify-center">
            <img src={workflow} alt="Logistics Process" className="h-[750px]" />
          </div>
        {/* <h2 className="text-2xl font-semibold text-center text-[#273270] md:text-[28px] mb-10" style={{ fontFamily: "Bell MT" }}>
          How We Work / Our Process
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            {[
              { step: "01", label: "Pickup & Consolidation", color: "blue" },
              { step: "02", label: "Transport & Handling", color: "orange" },
              { step: "03", label: "Delivery to Partner or Customer", color: "green" },
              { step: "04", label: "Support & Follow-up", color: "purple" },
            ].map(({ step, label, color }, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`text-white font-bold px-4 py-2 rounded-full bg-${color}-500`}>{step}</div>
                <div className="text-[#273270] text-lg font-medium">{label}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <img src={processImage} alt="Logistics Process" className="rounded-xl max-h-[300px] object-cover" />
          </div>
        </div> */}
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Logistic;
