import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import bgImage from "../../assets/natural.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const OurServices = () => {
  const API_URL = import.meta.env.VITE_APP_URL.replace(/\/+$/, "");
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/api/user/get-saving`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data || []);
      })
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  const [bgData, setBgData] = useState();
  const [error, setError] = useState();

  const getData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/home-bg-banner`
      );
      if (res?.data) {
        setBgData(res?.data?.data);
      }
    } catch (error) {
      setError(
        error?.response?.data?.message ||
          error?.message ||
          "something went wrong"
      );
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h2 className="text-3xl md:text-4xl text-center font-bold mb-12">
        {bgData?.heading}
      </h2>

      {/* <section
        className="relative w-full min-h-[80vh] h-full bg-cover bg-center bg-no-repeat flex justify-center items-center px-4 sm:px-6"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_APP_URL}${
            bgData?.banner
          })`,
        }}
      >
        <div className="relative z-10 w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-2 gap-6 justify-items-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white w-full rounded-2xl shadow-md p-4 sm:p-6 flex flex-col items-center justify-center transition-transform hover:-translate-y-1 hover:shadow-lg min-h-[180px] sm:min-h-[200px]"
              >
                <img
                  src={`${API_URL}/${service.image
                    .replace("public/", "")
                    .replace(/^\/+/, "")}`}
                  alt={service.title}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2 sm:mb-4"
                  loading="lazy"
                />

                <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2 text-center">
                  {service.title.length > 300
                    ? service.title.slice(0, 300) 
                    : service.title}
                </h3>

                <p className="text-xs  sm:text-sm text-center">
                  {service.description.length > 300
                    ? service.description.slice(0, 300) 
                    : service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section
        className="relative w-full min-h-[90vh] h-full bg-cover bg-center bg-no-repeat flex justify-center items-center px-4 sm:px-6 py-12"
        style={{
          backgroundImage: `url(${import.meta.env.VITE_APP_URL}${
            bgData?.banner
          })`,
        }}
      >
          <div className="absolute inset-0 bg-black/10 -z-10"></div>
        <div className="relative z-10 w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white w-full rounded-2xl shadow-md p-4 sm:p-6 flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-xl transition-all duration-500 min-h-[200px] sm:min-h-[220px]"
              >
                <img
                  src={`${API_URL}/${service.image
                    .replace("public/", "")
                    .replace(/^\/+/, "")}`}
                  alt={service.title}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2 sm:mb-4"
                  loading="lazy"
                />

                <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2 text-center">
                  {/* {service.title.length > 100 */}
                  {/* ? service.title.slice(0, 100) + "..." */}
                  {/* :  */}
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-center">
                  {/* {service.description.length > 150
                  ? service.description.slice(0, 150) + "..."
                  : service.description} */}
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Know More Button */}
          <div className="flex justify-center mt-10">
            {/* <button
            onClick={() => navigate("/ourservice#ourservice")}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300"
          >
            Know More
            <span className="text-xl">→</span>
          </button> */}
            <Link //05line add
              to="/ourservice#ourservice"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-lg"
            >
              Know More
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
