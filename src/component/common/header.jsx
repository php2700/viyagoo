import { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom"; // Link add kiya
import logo from "../../assets/logo1.webp";
import { Menu, X, ChevronDown } from "lucide-react";

export const Header = ({ scrollToFooter }) => {
  const { hash } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus#aboutsection" },
    {
      name: "Services",
      path: "/ourservice",
      dropdown: [
        {
          name: "Corporate",
          path: "/ourservice?activeTab=Corporate-Employee-Transportation",
        },
        {
          name: "Chauffeur",
          path: "/ourservice?activeTab=Chauffeur-Airport-Transfers",
        },
        { name: "Logistic", path: "/ourservice?activeTab=Logistics" },
        { name: "Ev Segment", path: "/ourservice?activeTab=EV-SEGMENT" },
      ],
    },
    { name: "Join VIYAGOO", path: "/join" },
  ];

  const closeMenus = () => {
    setIsOpen(false);
    setServiceOpen(false);
  };

  return (
    <header
      className="fixed top-4 left-1/2 transform -translate-x-1/2 
      max-w-[95%] md:max-w-[90%] w-full 
      bg-[#0572E6] rounded-2xl z-[999] shadow-lg"
    >
      <nav className="mx-auto flex items-center justify-between px-6 md:px-10 py-3 md:py-4">
        {/* LOGO: Added descriptive alt for SEO */}
        <Link to="/" className="flex items-center" onClick={closeMenus}>
          <img 
            src={logo} 
            alt="Viyagoo - Corporate Employee Transportation Services Logo" 
            className="h-16 w-auto" 
          />
        </Link>

        {/* Desktop Navigation: Using UL/LI for better structure */}
        <ul className="hidden lg:flex items-center space-x-10 relative">
          {navItems.map((item) => (
            <li key={item.name} className="relative list-none">
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => setServiceOpen(!serviceOpen)}
                    onMouseEnter={() => setServiceOpen(true)}
                    className="text-white text-[18px] font-medium cursor-pointer flex items-center gap-1 hover:text-blue-300 transition focus:outline-none"
                  >
                    {item.name}
                    <ChevronDown
                      size={18}
                      className={`transition ${serviceOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {serviceOpen && (
                    <div 
                      onMouseLeave={() => setServiceOpen(false)}
                      className="absolute top-8 left-0 bg-white shadow-xl rounded-md w-56 z-50 py-2 border border-gray-100"
                    >
                      {item.dropdown.map((sub, index) => (
                        <Link
                          key={index}
                          to={sub.path}
                          onClick={closeMenus}
                          className="block px-4 py-2 text-black hover:bg-blue-50 hover:text-[#0572E6] transition cursor-pointer font-medium"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  onClick={closeMenus}
                  className="text-white text-[18px] font-medium hover:text-blue-300 transition"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}

          {/* Contact Button */}
          <Link
            to="/#contactus"
            onClick={closeMenus}
            className="bg-[#3A8DFF] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-600 transition shadow-md"
          >
            Contact Us
          </Link>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="text-white lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#0E1D3E] border-t border-gray-700 rounded-b-2xl overflow-hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.name} className="border-b border-[#1B2D5E] list-none">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => setServiceOpen(!serviceOpen)}
                      className="w-full text-white px-6 py-4 flex justify-between items-center hover:bg-[#1B2D5E] focus:outline-none"
                    >
                      <span className="text-[17px]">{item.name}</span>
                      <ChevronDown
                        size={20}
                        className={`transition ${serviceOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {serviceOpen && (
                      <div className="bg-[#162447]">
                        {item.dropdown.map((sub, index) => (
                          <Link
                            key={index}
                            to={sub.path}
                            onClick={closeMenus}
                            className="block text-gray-300 px-10 py-3 text-sm hover:bg-[#1B2D5E] hover:text-white transition"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeMenus}
                    className="block text-white px-6 py-4 hover:bg-[#1B2D5E] transition text-[17px]"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="px-6 py-5">
            <Link
              to="/#contactus"
              onClick={closeMenus}
              className="block text-center bg-[#3A8DFF] text-white text-[16px] font-semibold px-5 py-3 rounded-full w-full shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};