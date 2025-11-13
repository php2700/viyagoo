// import React from "react";
// import { Banner } from "../common/banner";
// import { Header } from "../common/header";
// import Footer from "../common/footer";

// const Services = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* <Header /> */}

//       {/* Banner Section */}
//       <Banner title="Our Services" subtitle="Safe, Reliable & Comfortable Transportation Solutions" />

//       {/* Main Content */}


//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default Services;
import React from "react";
import { Banner } from "../common/banner";
import { Header } from "../common/header";
import Footer from "../common/footer";
import air1 from "../../assets/services/airservice1.png"

import air2 from "../../assets/services/airservice2.png"




const Airport = () => {
    return (
        <div className="flex flex-col min-h-screen bg-white text-gray-800">
            {/* Top Section */}

            <section className="text-center py-12 bg-gradient-to-b from-white to-text-[#273270]">
                <h1 className="text-3xl font-extrabold text-[#273270] md:text-[40px] mb-6" style={{ fontFamily: "Bell MT" }}>Our Services</h1>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <button className="px-6 py-2 rounded-full hover:bg-blue-900 hover:text-white transition">
                        CORPORATE EMPLOYEE TRANSPORTATION
                    </button>
                    <button className="px-6 py-2 border border-blue-900 text-[#273270] rounded-full  bg-blue-900 text-white ">
                        CHAUFFEUR & AIRPORT TRANSFERS
                    </button>
                    <button className="px-6 py-2 border border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
                        LOGISTICS
                    </button>
                    <button className="px-6 py-2 border border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
                        EV SEGMENT
                    </button>
                </div>

            </section>

            {/* Section 1 */}


            {/* Section 2 */}



            {/* Section 3 */}
            <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-2xl font-semibold text-[#273270] md:text-[32px] mb-4">
                        Why Executive & Airport Mobility Matters
                    </h2>
                    {/* <p className="text-[#273270] md:text-[18px] mb-4">
                        Let’s face it—urban mobility in India has become a serious problem. Employees often spend 1–3 hours per day
                        battling traffic, juggling multiple modes of transport, or depending on unreliable public transit. This leads to:
                    </p> */}
                    <ul className="list-disc pl-6 text-[#273270] md:text-[16px] space-y-2 mb-4">
                        <li>Lost productive hours that could otherwise be spent at work or with family.</li>
                        <li>Increased stress and fatigue, impacting employee wellbeing and morale.</li>
                        <li>Punctuality issues, which disrupt business operations.</li>
                        <li>Safety concerns, particularly for women employees and those working late or early shifts</li>
                        <li>Safety concerns, particularly for women employees and those working late or early shifts</li>
                    </ul>

                </div>
                <div className="flex justify-center">
                    <img
                        src={air1}
                        alt="Employee Transportation Vans"
                        className="h-[560px] w-[410px]"
                        
                    />
                </div>
            </section>

            {/* Section 4 */}
            <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-8 items-center">
                {/* 🖼 Image First */}
                <div className="flex justify-center">
                    <img
                        src={air2}
                        alt="Fleet Vehicles"
                        className="h-[700px] w-[410px]"
                        
                    />
                </div>

                {/* 📄 Text Second */}
                <div>
                    <h2 className="text-3xl font-semibold text-[#273270] md:text-[32px] mb-4">
                        Our Chauffeur & Airport Transfer Services ,
                        Chauffeur-Driven Executive Travel
                    </h2>

                    <ul className="list-disc pl-6 text-[#273270] md:text-[16px] space-y-2 mb-4">
                        <li>Lost productive hours that could otherwise be spent at work or with family.</li>
                        <li>Increased stress and fatigue, impacting employee wellbeing and morale.</li>
                        <li>Punctuality issues, which disrupt business operations.</li>
                        <li>Safety concerns, particularly for women employees and those working late or early shifts</li>
                    </ul>
                    <div>
                        <h2 className="text-2xl font-semibold text-[#273270] md:text-[32px] mb-4">
                            Airport Transfer
                        </h2>
                        {/* <p className="text-[#273270] md:text-[18px] mb-4">
                        Let’s face it—urban mobility in India has become a serious problem. Employees often spend 1–3 hours per day
                        battling traffic, juggling multiple modes of transport, or depending on unreliable public transit. This leads to:
                    </p> */}
                        <ul className="list-disc pl-6 text-[#273270] md:text-[16px] space-y-2 mb-4">
                            <li>Lost productive hours that could otherwise be spent at work or with family.</li>
                            <li>Increased stress and fatigue, impacting employee wellbeing and morale.</li>
                            <li>Punctuality issues, which disrupt business operations.</li>
                            <li>Safety concerns, particularly for women employees and those working late or early shifts</li>
                            <li>Safety concerns, particularly for women employees and those working late or early shifts</li>
                        </ul>

                    </div>

                </div>

            </section>


            {/* Section 5 */}
            <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-2xl font-semibold text-[#273270] md:text-[32px] mb-4">
                        Business Benefits for Corporates
                    </h2>

                    <ul className="list-disc pl-6 text-[#273270] md:text-[16px] space-y-2 mb-4">
                        <li>Lost productive hours that could otherwise be spent at work or with family.</li>
                        <li>Increased stress and fatigue, impacting employee wellbeing and morale.</li>
                        <li>Punctuality issues, which disrupt business operations.</li>
                        <li>Safety concerns, particularly for women employees and those working late or early shifts</li>
                        <li>Safety concerns, particularly for women employees and those working late or early shifts</li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <img
                        src={air1}
                        alt="Transport Fleet"
                        className="h-[560px] w-[410px]"
                        
                    />
                </div>
            </section>
            <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-8 items-center">
                {/* 🖼 Image First */}
                <div className="flex justify-center">
                    <img
                        src={air1}
                        alt="Fleet Vehicles"
                        className="h-[560px] w-[410px]"
                    />
                </div>

                {/* 📄 Text Second */}
                <div>
                    <h2 className="text-3xl font-semibold text-[#273270] md:text-[32px] mb-4">
                        The Viyagoo Edge
                    </h2>

                    <ul className="list-disc pl-6 text-[#273270] md:text-[16px] space-y-2 mb-4">
                       <li>Lost productive hours that could otherwise be spent at work or with family.</li>
                        <li>Increased stress and fatigue, impacting employee wellbeing and morale.</li>
                        <li>Punctuality issues, which disrupt business operations.</li>
                        <li>Safety concerns, particularly for women employees and those working late or early shifts</li>
                        <li>Safety concerns, particularly for women employees and those working late or early shifts</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Airport;