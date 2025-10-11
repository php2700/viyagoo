import productivityIcon from "../../assets/boost.png";
import handshakeIcon from "../../assets/handshake.png";
import costIcon from "../../assets/money.png";
import safetyIcon from "../../assets/safety.png";
import globeIcon from "../../assets/earth.png";
import starIcon from "../../assets/star.png";

export const EmployerBenefits = () => {
      const benefits = [
            {
                  icon: productivityIcon,
                  title: "Enhanced Productivity",
                  desc: "Reduced Commute Stress & Delays and Timely Arrival.",
            },
            {
                  icon: handshakeIcon,
                  title: "Lower Attrition & Higher Retention",
                  desc: "Happier Employees, Less Turnover, Better Work-Life Balance.",
            },
            {
                  icon: costIcon,
                  title: "Cost Optimization",
                  desc: "Reduced Fuel Costs (Shared Transport).",
            },
            {
                  icon: safetyIcon,
                  title: "Safety & Risk Management",
                  desc: "Reduced Accident Risk, Secure Travel, Especially Off-Hours.",
            },
            {
                  icon: globeIcon,
                  title: "Environmental & ESG Compliance",
                  desc: "Lower Carbon Footprint, Supports Sustainability Goals.",
            },
            {
                  icon: starIcon,
                  title: "Improved Employer Brand",
                  desc: "Attracts Top Talent, Positive Public Image.",
            },
      ];

      return (
            <section className="w-full bg-white py-16">
                  <h2 className="text-3xl md:text-4xl font-bold  text-center mb-12">
                        How Employers Benefit?
                  </h2>
                  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 justify-items-center ">
                        {benefits.map((item, index) => (
                              <div
                                    key={index}
                                    className="w-full max-w-[320px] mb-8 rounded-2xl shadow-md border-2 border-[#273270] rounded-[60px] flex flex-col relative"
                              >
                                    <div className="bg-[#273270] text-white pt-10 pb-4 flex flex-col items-center justify-center rounded-[60px] relative">
                                          <div className="absolute -top-10 border-2 border-[#273270] bg-white rounded-full w-20 h-20 flex items-center justify-center shadow-md">
                                                <img
                                                      src={item.icon}
                                                      alt={item.title}
                                                      className="w-10 h-10 object-contain"
                                                />
                                          </div>

                                          <h3 className="text-2xl  text-center px-6">
                                                {item.title}
                                          </h3>
                                    </div>
                                    <div className="  py-10 px-6 rounded-b-2xl">
                                          <p className=" text-lg leading-relaxed">
                                                {item.desc}
                                          </p>
                                    </div>
                              </div>
                        ))}
                  </div>
            </section>
      );
};
