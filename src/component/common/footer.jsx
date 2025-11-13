import React from "react";
import {
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center text-[#0E1D3E]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1470&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85 " style={{border:'solid #0E1D3E 1px'}}></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 
                      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10
                      text-center lg:text-left">
        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>About Us</li>
            <li>Services</li>
            <li>Why Us</li>
            <li>Testimonials</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Product</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>Invoicing</li>
            <li>Contract</li>
            <li>Accounting</li>
            <li>Proposal</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>Proposal Template</li>
            <li>Invoice Template</li>
            <li>Tutorial</li>
            <li>How to Write a Contract</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm sm:text-base">
            <FaEnvelope />
            <span>support@company.com</span>
          </div>
          <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm sm:text-base">
            <FaPhoneAlt />
            <span>+91-98765-43210</span>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition">
            Request
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center lg:justify-end items-center gap-4 lg:flex-col lg:gap-4 mt-6 lg:mt-0">
          <a href="#" className="bg-[#1DA1F2] w-10 h-10 flex items-center justify-center text-white rounded-full hover:scale-105 transition">
            <FaTwitter className="text-lg" />
          </a>
          <a href="#" className="bg-[#25D366] w-10 h-10 flex items-center justify-center text-white rounded-full hover:scale-105 transition">
            <FaWhatsapp className="text-lg" />
          </a>
          <a href="#" className="bg-[#FF0000] w-10 h-10 flex items-center justify-center text-white rounded-full hover:scale-105 transition">
            <FaYoutube className="text-lg" />
          </a>
          <a href="#" className="bg-[#E1306C] w-10 h-10 flex items-center justify-center text-white rounded-full hover:scale-105 transition">
            <FaInstagram className="text-lg" />
          </a>
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
