import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate, Link } from "react-router-dom"; // Link added for SEO
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmails] = useState([]);
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState([]);

  const navigate = useNavigate();

  const handleDemo = () => {
    navigate("/#demo");
  };

  const getData = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_APP_URL}api/user/contact`
      );
      if (res.data?.data) {
        const { email, mobile, address } = res.data.data;
        setEmails(Array.isArray(email) && email.length ? email : [""]);
        setMobile(Array.isArray(mobile) && mobile.length ? mobile : [""]);
        setAddress(address || "");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to load contact data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Social Handlers - Logic Kept Same
  const handleX = () => window.open(`https://x.com/${import.meta.env.VITE_APP_TWITTER_X}`, "_blank", "noopener,noreferrer");
  const handleWhatsApp = () => {
    const phone = `${import.meta.env.VITE_APP_WHATSAPP}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent("Any Query Please Send a Message")}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };
  const handleInsta = () => window.open(`https://www.instagram.com/${import.meta.env.VITE_APP_INSTA_USER}`, "_blank", "noopener,noreferrer");

  return (
    <footer
      id="footer"
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')",
      }}
      itemScope 
      itemType="https://schema.org/Organization" // SEO Schema
    >
      {/* Overlay - Style Kept Same */}
      <div
        className="absolute inset-0 bg-white/85"
        style={{ border: "solid #0E1D3E 1px" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 
                      grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10
                      text-center lg:text-left">
        
        {/* Company Links - Converted to Link for SEO crawlability */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#0E1D3E]">Company</h3>
          <ul className="space-y-2 text-sm sm:text-base cursor-pointer">
            <li><Link to="/aboutus#aboutsection" className="hover:text-blue-600 transition">About Us</Link></li>
            <li><Link to="/ourservice?activeTab=Corporate-Employee-Transportation" className="hover:text-blue-600 transition">Services</Link></li>
            <li><button onClick={() => navigate("/", { state: { scrollTo: "testimonial" } })} className="hover:text-blue-600 transition">Testimonials</button></li>
            <li><Link to="/aboutus#whyViyago" className="hover:text-blue-600 transition">Why Viyagoo</Link></li>
          </ul>
        </div>

        {/* Contact Us - Schema Optimized */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <h3 className="text-lg font-semibold text-[#0E1D3E]">Contact Us</h3>
          
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm sm:text-base">
            <FaEnvelope className="text-blue-600" />
            <div itemProp="email">
              {email?.map((ele, i) => (
                <div key={i}>{ele}</div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm sm:text-base">
            <FaPhoneAlt className="text-blue-600" />
            <div itemProp="telephone">
              {mobile?.map((ele, i) => (
                <span key={i} className={i > 0 ? "ml-2" : ""}>{ele}</span>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-start space-x-2 text-sm sm:text-base">
            <FaMapMarkerAlt className="text-blue-600 h-5 w-5 mt-1 flex-shrink-0" />
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="streetAddress">{address}</span>
            </span>
          </div>

          <button
            onClick={handleDemo}
            className="bg-blue-600 text-white px-8 py-2 rounded-full font-medium hover:bg-blue-700 transition shadow-md active:scale-95"
          >
            Request Demo
          </button>
        </div>

        {/* Social Icons - Accessibility Optimized */}
        <div className="flex justify-center lg:justify-end items-center gap-4 md:flex-col lg:gap-4 mt-6 lg:mt-0">
          <button onClick={handleX} aria-label="X (Twitter)" className="bg-[#1DA1F2] w-10 h-10 flex items-center justify-center text-white rounded-full hover:scale-110 transition shadow-sm">
            <FaXTwitter className="text-lg" />
          </button>
          <button onClick={handleWhatsApp} aria-label="WhatsApp" className="bg-[#25D366] w-10 h-10 flex items-center justify-center text-white rounded-full hover:scale-110 transition shadow-sm">
            <FaWhatsapp className="text-lg" />
          </button>
          <button onClick={handleInsta} aria-label="Instagram" className="bg-[#E1306C] w-10 h-10 flex items-center justify-center text-white rounded-full hover:scale-110 transition shadow-sm">
            <FaInstagram className="text-lg" />
          </button>
          <button aria-label="YouTube" className="bg-[#FF0000] w-10 h-10 flex items-center justify-center text-white rounded-full hover:scale-110 transition shadow-sm">
            <FaYoutube className="text-lg" />
          </button>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="relative z-10 text-center py-4 border-t border-gray-300 bg-white/70 text-sm font-medium">
        Copyright © {new Date().getFullYear()} Viyagoo. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;