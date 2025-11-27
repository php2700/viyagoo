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
import ser1 from "../../assets/services/service2.png"
import ser3 from "../../assets/services/service3.png"
import ser4 from "../../assets/services/service4.png"
import ser5 from "../../assets/services/service-backg.png"




const Services = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white ">
      {/* Top Section */}
      <section
        className="max-w-6xl mx-auto py-12 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${ser5})` }}
      >
        <section className="text-center py-12 bg-gradient-to-b from-white ">
          <h1 className="text-3xl font-extrabold  md:text-[40px] mb-6" >Our Services</h1>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="px-6 py-2 bg-blue-900 text-white rounded-full hover:bg-blue-800">
              CORPORATE EMPLOYEE TRANSPORTATION
            </button>
            <button className="px-6 py-2 border border-blue-900  rounded-full hover:bg-blue-900 hover:text-white transition">
              CHAUFFEUR & AIRPORT TRANSFERS
            </button>
            <button className="px-6 py-2 border border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
              LOGISTICS
            </button>
            <button className="px-6 py-2 border border-blue-900 text-blue-900 rounded-full hover:bg-blue-900 hover:text-white transition">
              EV SEGMENT
            </button>
          </div>

          <p className="max-w-6xl mx-auto  md:text-[16px] px-4">
            In today’s fast-paced business environment, mobility has become a critical enabler of productivity, employee satisfaction, and corporate success. While organizations often focus on salaries, work culture, and office infrastructure as key drivers of employee engagement, one crucial aspect is frequently overlooked — how employees commute to and from work every day. For many employees, especially in urban centers, commuting is not just a routine task but a daily challenge. Long distances, unpredictable traffic, rising fuel costs, and lack of reliable public transportation make the journey to work stressful and time-consuming. Over time, this daily struggle leads to fatigue, decreased productivity, and even higher attrition rates. This is where structured employee transportation services come into play. By providing safe, reliable, and well-managed commuting options, organizations can transform the employee experience, reduce operational inefficiencies, and strengthen their brand as an employer of choice
          </p>
        </section>

        {/* Section 1 */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <h2 className="text-2xl font-semibold  md:text-[32px] mb-4" style={{ fontFamily: "'Bell MT', serif" }}>
            The Growing Commuting Challenge
          </h2>
          <p className=" md:text-[18px] mb-4">
            Let’s face it—urban mobility in India has become a massive challenge. Employees often spend 1–3 hours per day battling traffic,
            juggling multiple modes of transport, or depending on unreliable public transit. This results in:
          </p>
          <ul className="list-disc pl-6  md:text-[16px]  space-y-2 mb-6">
            <li>Increased stress from long commutes.</li>
            <li>Lost productive hours impacting work–life balance.</li>
            <li>Decline in overall employee well-being and morale.</li>
          </ul>
          <p className=" md:text-[18px]">
            As urban centers grow denser, traffic congestion continues to worsen, leading to increased fuel inefficiencies and higher costs.
            For example, Transport experts highlight that growing traffic density influences office arrival delays by an estimated 35%,
            reducing overall workforce efficiency.
          </p>
        </section>

        {/* Section 2 */}
        <section className="max-w-6xl mx-auto py-12 px-4">
          <h2 className="text-2xl font-semibold  md:text-[32px] mb-4">
            Why Employee Transportation Is No Longer a Perk, But a Necessity
          </h2>
          <p className=" md:text-[18px] mb-6">
            In the past, many firms saw employee transportation programs as an additional perk. Today, however,
            it has become synonymous with business efficiency for all sizes of companies. Here's why:
          </p>
          <ul className="list-disc pl-6  md:text-[16px] space-y-2">
            <li><b>Changing Work Dynamics –</b> Flexible timings and hybrid models require reliable mobility solutions.</li>
            <li><b>Employee Retention –</b> Companies offering structured commute programs witness measurable increases in employee loyalty.</li>
            <li><b>Safety & Productivity –</b> Safe, timely, and comfortable rides lead to improved focus and reduced stress.</li>
            <li><b>Corporate Social Responsibility –</b> Shared rides minimize emissions, making managed transport eco-friendly.</li>
            <li><b>Compliance & Safety Regulations –</b> Organizations are increasingly required to adopt safety measures, making managed transport compliance-critical.</li>
          </ul>
        </section>
      </section>

      {/* Section 3 */}
      <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold  md:text-[32px] mb-4">
            The Growing Commuting Challenge
          </h2>
          <p className=" md:text-[18px] mb-4">
            Let’s face it—urban mobility in India has become a serious problem. Employees often spend 1–3 hours per day
            battling traffic, juggling multiple modes of transport, or depending on unreliable public transit. This leads to:
          </p>
          <ul className="list-disc pl-6  md:text-[16px] space-y-2 mb-4">
            <li>Increased stress and reduced productivity.</li>
            <li>Higher attrition rates, especially in metro cities.</li>
            <li>More fuel inefficiencies and increased running costs for daily commutes.</li>
          </ul>
          <p className=" md:text-[18px]">
            A well-organized employee transportation system addresses these issues by minimizing operational inefficiencies
            and ensuring every employee reaches the workplace on time—refreshed and ready.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={ser1}
            alt="Employee Transportation Vans"
            className=""
          />
        </div>
      </section>

      {/* Section 4 */}
      <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* 🖼 Image First */}
        <div className="flex justify-center">
          <img
            src={ser3}
            alt="Fleet Vehicles"
            className=""
          />
        </div>

        {/* 📄 Text Second */}
        <div>
          <h2 className="text-3xl font-semibold  md:text-[32px] mb-4">
            The Growing Commuting Challenge
          </h2>
          <p className=" md:text-[18px] mb-4">
            In fast-growing metros, employees face longer commutes and traffic-related stress,
            impacting productivity and morale. Organizations are increasingly adopting employee
            transportation programs to improve efficiency and satisfaction.
          </p>
          <ul className="list-disc pl-6  md:text-[16px] space-y-2 mb-4">
            <li>Reduced absenteeism and improved punctuality.</li>
            <li>Enhanced company image as an employee-centric workplace.</li>
            <li>Significant reduction in fuel consumption and CO₂ emissions.</li>
          </ul>
        </div>
      </section>


      {/* Section 5 */}
      <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold  md:text-[32px] mb-4">
            The Growing Commuting Challenge
          </h2>
          <p className=" md:text-[18px] mb-4">
            Urban growth has made daily commuting more demanding than ever. Reliable corporate transportation ensures smooth
            employee travel, leading to happier teams and improved operational efficiency.
          </p>
          <ul className="list-disc pl-6  md:text-[16px] space-y-2 mb-4">
            <li>Seamless operations with optimized routing systems.</li>
            <li>Better time management and reduced stress.</li>
            <li>Lower operational and maintenance costs.</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <img
            src={ser4}
            alt="Transport Fleet"
            className=""
          />
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold  mb-4">
          Closing tought
        </h2>
        <p className=" md:text-[18px] mb-6">
          In the evolving world of work, transportation is no longer an afterthought — it is a strategic necessity. Companies that invest in structured, technology-driven employee transport solutions will not only solve today’s commuting challenges but also build a workplace that is safer, smarter, and future-ready.

        </p>
        <p className=" md:text-[18px] mb-6">
          At Viyagoo, we’re committed to making that future a reality — one ride at a time.
        </p>
      </section>
    </div>
  );
};

export default Services;