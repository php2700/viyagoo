import HeroBanner from "../../assets/herobanner.jpg";
import image1 from "../../assets/forest.png"
import image2 from "../../assets/hand.png"
import image3 from "../../assets/energy.png"
import leftsideImg from "../../assets/serviceimage1.png"



export const About = () => {
    const whyViyagoo=[
    {
      title: "End-to-End Mobility",
      desc: "Comprehensive transport solutions for corporates, logistics, and individuals.",
     icon:image1
    },
    {
      title: "Tech-Enabled Operations",
      desc: "Real-time tracking and automation powered by advanced ETMS systems.",
      icon:image2
    },
    {
      title: "Safety First",
      desc: "Strict safety protocols with verified drivers and maintained vehicles.",
      icon:image3
    },
    {
      title: "Green Fleet",
      desc: "Sustainable operations with an expanding Electric Vehicle (EV) fleet.",
      icon:image3
    },
    {
      title: "Industry Expertise",
      desc: "Led by professionals with deep transport and mobility experience.",
      icon:image2
    },
    {
      title: "Customized Solutions",
      desc: "Tailored transport models to match each client’s needs and scale.",
      icon:image1
    },
    {
      title: "Cost-Optimized",
      desc: "Smart routing and analytics that reduce operational expenses.",
      icon:image1
    },
    {
      title: "24/7 Support",
      desc: "Always-on monitoring and assistance for smooth operations.",
      icon:image2
    },
    {
      title: "Driver Empowerment",
      desc: "Financial support and free family health insurance for drivers.",
      icon:image3
    },
    {
      title: "Reliable & Punctual",
      desc: "On-time, every time — ensuring consistent service delivery.",
      icon:image1
    },
    {
      title: "Transparent Operations",
      desc: "Clear pricing and ethical business practices at every step.",
      icon:image3
    },
    {
      title: "Customer-Focused",
      desc: "Every journey designed around comfort, safety, and satisfaction.",
      icon:image2
    },
  ]
  return (
     <section className="w-full min-h-screen bg-white ">
            {/* HERO SECTION */}
            <div className="relative w-full">
              <img
                src={HeroBanner}
                alt="Banner"
                className="w-full h-[100vh] object-cover"
              />
            </div>
    <div className="w-full bg-gray-50 py-12 sm:py-20 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-extrabold  text-center mb-6">
          ABOUT US
        </h1>

        {/* Intro Paragraph */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
          <strong className="text-[#0572E6]">VIYAGOO</strong> is a new-age Transport and Logistics Consultancy established 
          with the vision of becoming a trusted leader in corporate mobility and logistics solutions across India. 
          With deep industry expertise and a strong commitment to innovation, service excellence, and 
          sustainability, we are redefining the way organizations and individuals experience transportation.
        </p>

        {/* Main Content Box */}
        <div className="bg-white shadow-lg rounded-2xl p-8 sm:p-12 mb-12">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At Viyagoo, we offer a comprehensive range of services, including Corporate Employee Transportation powered 
            by advanced ETMS technology and an eco-friendly EV fleet, Airport Transfers, Executive Chauffeur Services, 
            and end-to-end Logistics Transport Solutions.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our focus on safety, reliability, and customer satisfaction forms the cornerstone of our operations. 
            Each service is delivered with precision, backed by a dedicated team that upholds the highest standards 
            of professionalism and care.
          </p>

          <ul className="list-disc pl-6 text-gray-800 text-lg space-y-2">
            <li>From route planning to real-time monitoring</li>
            <li>24/7 support, punctuality, and a people-first approach</li>
          </ul>

          <p className="text-gray-700 text-lg leading-relaxed mt-6">
            Viyagoo continues to build long-term partnerships through trust, transparency, and seamless mobility 
            experiences — moving India forward, one ride at a time.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white shadow-md border-l-4 border-[#0572E6] rounded-xl p-8 mb-10">
          <h2 className="text-2xl font-bold  mb-3">Vision Statement</h2>
          <p className="text-gray-700 text-lg">
            To revolutionize urban and corporate mobility by delivering integrated, reliable, and sustainable 
            transportation solutions that enhance operational efficiency and commuter experience.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white shadow-md border-l-4 border-[#0572E6] rounded-xl p-8 mb-10">
          <h2 className="text-2xl font-bold  mb-3">Mission Statement</h2>
          <p className="text-gray-700 text-lg">
            To provide end-to-end, technology-driven transport solutions focused on safety, punctuality, 
            and environmental responsibility. Through continuous innovation and service excellence, we aim 
            to optimize mobility management for corporates and individuals across India.
          </p>
        </div>
    


 <div className="w-full py-12 px-6 lg:px-16 bg-white">
      
      {/* MAIN CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="w-full h-full">
          <img
            src={leftsideImg}  // <-- replace with your image
            alt="Service Banner"
            className="w-full h-full object-cover rounded-xl shadow-md"
          />
        </div>

        {/* RIGHT BLACK CARD */}
        <div className="bg-black text-white rounded-xl p-10 shadow-xl">

          {/* ORANGE SMALL HEADING */}
          <p className="text-[#0572E6] font-semibold tracking-wide">
            What Sets Us Apart
          </p>

          {/* MAIN HEADING */}
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight mt-2">
            Providing Top-Notch Transportation Services
            <br /> Since 2008
          </h2>

          {/* SUBTEXT */}
          <p className="text-gray-300 mt-4 leading-relaxed">
            We are your trusted partner in seamless journeys. You deserve safety,
            reliability, and peace of mind for your commute. Choose us to experience
            travel at its best.
          </p>

          {/* STATS GRID (LIKE SCREENSHOT) */}
          <div className="grid grid-cols-2 gap-6 mt-8">

            {/* CARD 1 */}
            <div className="flex items-center gap-4">
              <img src={image1} alt="" className="w-10 h-10" />
              <div>
                <h3 className="text-2xl font-bold">(75+)</h3>
                <p className="text-gray-400 text-sm">Vehicles</p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex items-center gap-4">
              <img src={image2} alt="" className="w-10 h-10" />
              <div>
                <h3 className="text-2xl font-bold">10,850+</h3>
                <p className="text-gray-400 text-sm">Trips per day</p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="flex items-center gap-4">
              <img src={image3} alt="" className="w-10 h-10" />
              <div>
                <h3 className="text-2xl font-bold">100%</h3>
                <p className="text-gray-400 text-sm">Safety</p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="flex items-center gap-4">
              <img src={image1} alt="" className="w-10 h-10" />
              <div>
                <h3 className="text-2xl font-bold">282100+</h3>
                <p className="text-gray-400 text-sm">Trips per month</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
<h2 className="text-3xl font-bold  text-center mt-16 mb-6">
  Why VIYAGOO ?
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {whyViyagoo.map((item, index) => (
    <div
      key={index}
      className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all flex flex-col items-center text-center"
    >
      {/* ICON */}
      <img
        src={item.icon}
        alt={item.title}
        className="w-12 h-12 object-contain mb-4"
      />

      {/* TITLE */}
      <h3 className="text-xl font-semibold  mb-2">
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-gray-700 text-sm leading-relaxed">
        {item.desc}
      </p>
    </div>
  ))}
</div>

      </div>
    </div>
    </section>
  );
};
