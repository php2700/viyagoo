

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
    <div className="flex flex-col min-h-screen bg-white ">
      {/* Top Section */}
      <section className="text-center py-12">
        <h1 className="text-3xl font-extrabold  md:text-[40px] mb-6">
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

        <p className="max-w-5xl mx-auto text-[#273270] md:text-[16px] px-4">
         At Viyagoo, we provide seamless logistics and delivery solutions to all client segments that help businesses move their products efficiently from origin to destination. As a reliable delivery partner, we focus on timely, safe, and professional transportation, ensuring every shipment reaches its intended location with care. Our services are designed to simplify supply chain operations, support business growth, and deliver a consistent, dependable experience to partners and customers alike.
        </p>
      </section>

      {/* Core Logistics Services Section */}
<section className="max-w-6xl mx-auto py-12 px-8">
  <h2 className="text-2xl font-semibold text-center  md:text-[32px] mb-10" >
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
        className="shadow-lg rounded-tr-[80px] rounded-bl-[80px] p-6 border border-gray-200 bg-[#ECF5FF]  hover:shadow-lg transition"
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
    className="text-2xl font-semibold md:text-[40px] text-center  mb-10"
    style={{ fontFamily: "Bell MT" }}
  >
    Why VIYAGOO?
  </h2>

  {/* 3 Column Layout */}
  <div className="grid md:grid-cols-3 gap-4 items-center">
    {/* Left Side */}
    <div className="space-y-6 text-right ">
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
    <div className="space-y-6 text-left ">
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
        {/* <h2 className="text-2xl font-semibold text-center  md:text-[28px] mb-10" style={{ fontFamily: "Bell MT" }}>
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
                <div className=" text-lg font-medium">{label}</div>
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
