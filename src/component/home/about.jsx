import truckImage from "../../assets/truck.png";
import bgImg from "../../assets/about-bg.png";

export const AboutUs = () => {
      return (
            <section className="w-full max-w-7xl mx-auto py-16 bg-white text-center mt-80 md:mt-40 overflow-visible">
                  {/* Heading */}
                  <h2 className="text-[#0E1D3E] text-2xl md:text-3xl font-bold mb-10">
                        About Us
                  </h2>

                  <div className="relative flex flex-col md:flex-row items-center min-h-[480px] md:min-h-[520px] p-4 md:p-10 overflow-visible">
                        {/* Left Side - Truck */}
                        <div className="w-full md:w-1/2 flex justify-center relative z-30 mb-6 md:mb-0">
                              <img
                                    src={truckImage}
                                    alt="Truck"
                                    className="max-w-[90%] md:max-w-[80%] h-auto md:h-[450px] object-contain"
                              />
                        </div>

                        {/* Right Side - Background with Text */}
                        <div className="w-full md:w-[65%] relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 z-20">
                              <div className="relative w-full">
                                    {/* Background Image */}
                                    <img
                                          src={bgImg}
                                          alt="Background"
                                          className="
    w-[120%] sm:w-[110%] md:w-full
    h-[450px] sm:h-[550px] md:h-[520px]
    object-contain
    mx-auto
    transition-all duration-300
  "
                                    />

                                    {/* Text Overlay */}
                                    <div
                                          className="
                absolute top-0 left-0 w-full h-full flex flex-col justify-center 
                p-4 sm:p-6 md:pl-[180px] md:pr-10 text-[#0E1D3E] text-left
              "
                                    >
                                          <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold mb-3 leading-snug">
                                                We Are Experts <br /> in
                                                Building Dreams
                                          </h3>
                                          <p className="text-xs sm:text-sm md:text-base leading-relaxed md:pr-12">
                                                Construction is a general term
                                                meaning the art and science to
                                                form objects, systems, or
                                                organizations, and comes from
                                                Latin constructio and Old French
                                                construction.
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </section>
      );
};
