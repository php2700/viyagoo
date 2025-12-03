import { useState, useEffect } from "react";
import bgImage from "../../assets/natural.jpg";
import axios from "axios";

export const OurServices = () => {
  const API_URL = import.meta.env.VITE_APP_URL.replace(/\/+$/, "");
  const [services, setServices] = useState([]);

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
        Our Services
      </h2>

      <section
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
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2 sm:mb-4    "
                />

                <h3 className="text-sm sm:text-lg font-semibold mb-1 sm:mb-2 text-center">
                  {service.title.length > 70
                    ? service.title.slice(0, 70) + "..."
                    : service.title}
                </h3>

                <p className="text-xs  sm:text-sm text-center">
                  {service.description.length > 100
                    ? service.description.slice(0, 100) + "..."
                    : service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
