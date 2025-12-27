import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { Menu, X, ChevronDown } from "lucide-react";

export const Header = ({ scrollToFooter }) => {
  const { hash } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },

    {
      name: "Services",
      path: "/ourservice",
      dropdown: [
        {
          name: "Corporate",
          path: "/ourservice?activeTab=Corporate Employee Transportation",
        },
        {
          name: "Chauffer",
          path: "ourservice?activeTab=Chauffeur-Airport Transfers",
        },
        { name: "Logistic", path: "/ourservice?activeTab=Logistics" },
        { name: "Ev Segment", path: "ourservice?activeTab=EV SEGMENT" },
      ],
    },

    { name: "Join VIYAGOO", path: "/join" },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setIsOpen(false);
    setServiceOpen(false);
  };
// working
  // const handleNavContact = () => {
  //   const footer = document.getElementById("footer");
  //   if (footer) {
  //     footer.scrollIntoView({ behavior: "smooth" });
  //   }
  // };




const handleNavContact = () => {

  navigate("/#contactus");
  setIsOpen(false);
  setServiceOpen(false);
};


  return (
    // <header className="bg-[#0572E6] w-full shadow-md">
    // <div className="mx-auto flex items-center justify-between px-8 md:py-4">
    <header
      className="fixed top-4 left-1/2 transform -translate-x-1/2 
  max-w-[95%] md:max-w-[90%] w-full 
  bg-[#0572E6] rounded-2xl  z-[999]"
    >
      <div className="mx-auto flex items-center justify-between px-6 md:px-10 py-3 md:py-4">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" className="h-16 w-auto" />
        </div>

        <div className="hidden lg:flex items-center space-x-10 relative">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {item.dropdown ? (
                <>
                  <div
                    onClick={() => setServiceOpen(!serviceOpen)}
                    className="text-white text-[18px] font-medium cursor-pointer flex items-center gap-1 hover:text-blue-300 transition"
                  >
                    {item.name}
                    <ChevronDown
                      size={18}
                      className={`transition ${
                        serviceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {serviceOpen && (
                    <div className="absolute top-8 left-0 bg-white shadow-lg rounded-md w-48 z-50 py-2">
                      {item.dropdown.map((sub, index) => (
                        <div
                          key={index}
                          onClick={() => handleNavClick(sub.path)}
                          className="px-4 py-2 text-black hover:bg-gray-300 cursor-pointer"
                        >
                          {sub.name}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div
                  onClick={() => handleNavClick(item.path)}
                  className="text-white text-[18px] font-medium cursor-pointer hover:text-blue-300 transition"
                >
                  {item.name}
                </div>
              )}
            </div>
          ))}

          <button
            onClick={handleNavContact}
            className="bg-[#3A8DFF] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-600 transition"
          >
            Contact Us
          </button>
        </div>

        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-[#0E1D3E] border-t border-gray-700">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-[#1B2D5E]">
              {/* Dropdown for mobile */}
              {item.dropdown ? (
                <>
                  <div
                    onClick={() => setServiceOpen(!serviceOpen)}
                    className="text-white px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-[#1B2D5E]"
                  >
                    {item.name}
                    <ChevronDown
                      size={20}
                      className={`transition ${
                        serviceOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {serviceOpen && (
                    <div className="bg-[#162447]">
                      {item.dropdown.map((sub, index) => (
                        <div
                          key={index}
                          onClick={() => handleNavClick(sub.path)}
                          className="text-white px-6 py-2 text-sm hover:bg-[#1B2D5E] cursor-pointer"
                        >
                          {sub.name}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div
                  onClick={() => handleNavClick(item.path)}
                  className="text-white px-4 py-3 hover:bg-[#1B2D5E] cursor-pointer"
                >
                  {item.name}
                </div>
              )}
            </div>
          ))}

          <div className="px-4 pb-3">
            <button
              onClick={handleNavContact}
              className="bg-[#3A8DFF] text-white text-sm font-semibold px-5 py-2 rounded-full w-full"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
