import { motion } from "framer-motion";
import image2 from "../../assets/passed.webp";
import image1 from "../../assets/vector.webp";
import image3 from "../../assets/Employee-Transport-Service.webp";
import { image } from "framer-motion/client";

const steps = [
  {
    image:image2,
    title: "Book in a Minute",
    description: (
      <>
        Book instantly by submitting your details in the Quote From.
       

      </>
    ),
  },
  {
    image: image1,
    title: "Get Confirmation",
    description:
      "We understand your requirements and confirm driver and vehicle availability in advance.",
  },
  {
    image:image3,
    title: "Travel with Ease",
    description:
      "Enjoy a hassle-free, premium ride with regularly checked and well-maintained vehicles.",
  },
];

export default function BookingProcess() {
  return (
   <section className="w-full py-20 px-6 bg-white">
  {/* Outer bordered container */}
  <div className="max-w-7xl mx-auto 
                  bg-[#ECF5FF] 
                  border border-blue-200 
                  rounded-[40px] 
                  px-6 md:px-16 py-20">

    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-bold text-center mb-20"
    >
      Booking Process of Viyagoo
    </motion.h2>

    {/* Steps */}
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16">
      {/* Horizontal line (desktop only) */}
      <div className="hidden md:block absolute top-24 left-0 right-0 h-[2px] bg-gray-300" />

      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          className="relative flex flex-col items-center text-center bg-white rounded-3xl p-8 shadow-md"
        >
          {/* Circle Icon */}
          <div className="w-32 h-32 rounded-full bg-white border-1 border-gray-200 flex items-center justify-center shadow-lg -mt-20">
            <img
              src={step.image}
              alt={step.title}
              className="w-14 h-14 object-contain"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <h3 className="mt-8 text-xl font-bold">{step.title}</h3>
          <p className="mt-4 text-gray-600 text-base leading-relaxed max-w-sm">
            {step.description}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
}
