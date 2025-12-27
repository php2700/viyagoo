import axios from "axios";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmails] = useState([]);
  const [address, setAddress] = useState();
  const [mobile, setMobile] = useState([]);

  const navigate = useNavigate();

  const handleUrl = (url) => {
    navigate(url);
  };

  // const handleDemo = () => {
  //   navigate("/#demo");
  // };
  const handleDemo = () => {
    const section = document.getElementById("demo");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/contact`
      );
      console.log(res.data.data, "ggg");
      if (res.data?.data) {
        const { email, mobile, address } = res.data.data;
        setEmails(Array.isArray(email) && email.length ? email : [""]);
        setMobile(Array.isArray(mobile) && mobile.length ? mobile : [""]);
        setAddress(address || "");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to load contact data"
      );
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleX = () => {
    window.open(
      `https://x.com/${import.meta.env.VITE_APP_TWITTER_X}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleWhatsApp = () => {
    const phone = `${import.meta.env.VITE_APP_WHATSAPP}`;
    const message = "Any Query Please Send a Message";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleInsta = () => {
    window.open(
      `https://www.instagram.com/${import.meta.env.VITE_APP_INSTA_USER}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer
      id="footer"
      className="relative bg-cover bg-center "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      <div
        className="absolute inset-0 bg-white/85 "
        style={{ border: "solid #0E1D3E 1px" }}
      ></div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 
                      grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10
                      text-center lg:text-left"
      >
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm sm:text-base cursor-pointer">
            <li onClick={() => handleUrl("/aboutus")}>About Us</li>
            <li
              onClick={() =>
                handleUrl(
                  "/ourservice?activeTab=Corporate-Employee-Transportation"
                )
              }
            >
              Services
            </li>
            {/* <li>Why Us</li> */}
            <li
              onClick={() =>
                navigate("/", { state: { scrollTo: "testimonial" } })
              }
            >
              Testimonials
            </li>
            <li onClick={() => handleUrl("/aboutus#whyViyago")}>Why Viyagoo</li>
          </ul>
        </div>

        {/* Product */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>Invoicing</li>
            <li>Contract</li>
            <li>Accounting</li>
            <li>Proposal</li>
          </ul>
        </div> */}

        {/* Resources */}
        {/* <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>Proposal Template</li>
            <li>Invoice Template</li>
            <li>Tutorial</li>
            <li>How to Write a Contract</li>
          </ul>
        </div> */}

        {/* Contact Us */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm sm:text-base">
            <FaEnvelope />
            <div>
              {email?.map((ele) => (
                <div>{ele}</div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm sm:text-base">
            <FaPhoneAlt />
            {mobile?.map((ele) => (
              <span>{ele}</span>
            ))}
          </div>
          <div className="flex  justify-center lg:justify-start space-x-2 text-sm sm:text-base">
            <FaMapMarkerAlt className="text-black h-6 w-6" />
            <span>{address}</span>
          </div>
          <button
            onClick={handleDemo}
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
          >
            Request Demo
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-end items-center gap-4 md:flex-col lg:gap-4 mt-6 lg:mt-0">
          <div className="bg-[#1DA1F2] w-10 h-10 flex items-center justify-center text-white rounded-full hover:scale-105 transition">
            <FaXTwitter onClick={handleX} className="text-lg" />
          </div>
          <div className="bg-[#25D366] w-10 h-10 flex items-center justify-center text-white rounded-full hover:scale-105 transition">
            <FaWhatsapp onClick={handleWhatsApp} className="text-lg" />
          </div>
          <div className="bg-[#E1306C] w-10 h-10 flex items-center justify-center text-white rounded-full hover:scale-105 transition">
            <FaInstagram onClick={handleInsta} className="text-lg" />
          </div>
          <div className="bg-[#FF0000] w-10 h-10 flex items-center justify-center text-white rounded-full hover:scale-105 transition cursor-pointer">
            <FaYoutube className="text-lg" />
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative z-10 text-center py-4 border-t border-gray-300 bg-white/70 text-sm sm:text-base">
        Copyright © 2025 Rahul. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
