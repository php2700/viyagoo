import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

export const Header = () => {
      const [isOpen, setIsOpen] = useState(false);
      const navigate = useNavigate();
      const location = useLocation();

      const navLinks = [
            { name: "Home", path: "/" },
            { name: "About Us", path: "/" },
            { name: "Services", path: "/service" },
            { name: "Join VIYAGOO", path: "/join" },
      ];

      const getActiveName = () => {
            return navLinks.find((link) => location.pathname === link.path)?.name || "Home";
      };

      const activeItem = getActiveName();

      const handleNavClick = (path) => {
            navigate(path);
            setIsOpen(false);
      };

      return (
            <header className="bg-[#0E1D3E] w-full shadow-md">
                  <div className="mx-auto flex items-center justify-between px-8 md:py-4">
                        {/* Left - Logo */}
                        <div className="flex items-center">
                              <img
                                    src={logo}
                                    alt="logo"
                                    className="h-16 w-auto"
                              />
                        </div>

                        {/* Right - Nav + Button (Desktop) */}
                        <div className="hidden md:flex items-center space-x-16">
                              {navLinks.map((link) => (
                                    <div
                                          key={link.name}
                                          className="text-white text-[18px] font-medium cursor-pointer hover:text-blue-300 transition relative"
                                          onClick={() => handleNavClick(link.path)}
                                    >
                                          {link.name}
                                          {activeItem === link.name && (
                                                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white rounded"></span>
                                          )}
                                    </div>
                              ))}
                              <button 
                                    className="bg-[#3A8DFF] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-600 transition"
                                    onClick={() => navigate("/contact")}
                              >
                                    Contact Us
                              </button>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                              className="text-white md:hidden"
                              onClick={() => setIsOpen(!isOpen)}
                        >
                              {isOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                  </div>

                  {/* Mobile Menu */}
                  {isOpen && (
                        <div className="md:hidden  border-t border-gray-700">
                              {navLinks.map((link) => (
                                    <div
                                          key={link.name}
                                          className={`px-4 py-3 cursor-pointer transition text-white ${
                                                activeItem === link.name
                                                      ? " border-l-4 border-blue-400 bg-black"
                                                      : "hover:bg-[#1B2D5E]"
                                          }`}
                                          onClick={() => handleNavClick(link.path)}
                                    >
                                          {link.name}
                                    </div>
                              ))}
                              <div className="px-4 pb-3">
                                    <button 
                                          className="  text-sm font-semibold px-5 py-2 rounded-full w-full"
                                          onClick={() => {
                                                navigate("/contact");
                                                setIsOpen(false);
                                          }}
                                    >
                                          Contact Us
                                    </button>
                              </div>
                        </div>
                  )}
            </header>
      );
};