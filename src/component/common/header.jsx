// import { useState } from "react";
// import logo from "../../assets/logo.png";
// import { Menu, X } from "lucide-react";

// export const Header = () => {
//       const [isOpen, setIsOpen] = useState(false);

//       // const navItems = ["Home", "About Us", "Services", "Join VIYAGOO"];
//         const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Services", path: "/ser" },
//     { name: "Join VIYAGOO", path: "/join" },
//   ];

//       return (
//             <header className="bg-[#0E1D3E] w-full shadow-md">
//                   <div className="mx-auto flex items-center justify-between px-8  md:py-4">
//                         {/* Left - Logo */}
//                         <div className="flex items-center">
//                               <img
//                                     src={logo}
//                                     alt="logo"
//                                     className="h-16 w-auto"
//                               />
//                         </div>

//                         {/* Right - Nav + Button (Desktop) */}
//                         <div className="hidden md:flex items-center space-x-16">
//                               {navItems.map((item) => (
//                                     <div
//                                           key={item}
//                                           className="text-white text-[18px] font-medium cursor-pointer hover:text-blue-300 transition relative"
//                                     >
//                                           {item}
//                                           {item === "Services" && (
//                                                 <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white rounded"></span>
//                                           )}
//                                     </div>
//                               ))}
//                               <button className="bg-[#3A8DFF] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-600 transition">
//                                     Contact Us
//                               </button>
//                         </div>

//                         {/* Mobile Menu Toggle */}
//                         <button
//                               className="text-white md:hidden"
//                               onClick={() => setIsOpen(!isOpen)}
//                         >
//                               {isOpen ? <X size={26} /> : <Menu size={26} />}
//                         </button>
//                   </div>

//                   {/* Mobile Menu */}
//                   {isOpen && (
//                         <div className="md:hidden bg-[#0E1D3E] border-t border-gray-700">
//                               {navItems.map((item) => (
//                                     <div
//                                           key={item}
//                                           className="text-white px-4 py-3 hover:bg-[#1B2D5E] cursor-pointer transition"
//                                           onClick={() => setIsOpen(false)}
//                                     >
//                                           {item}
//                                     </div>
//                               ))}
//                               <div className="px-4 pb-3">
//                                     <button className="bg-[#3A8DFF] text-white text-sm font-semibold px-5 py-2 rounded-full w-full">
//                                           Contact Us
//                                     </button>
//                               </div>
//                         </div>
//                   )}
//             </header>
//       );
// };
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // ✅ initialize navigation

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/ser" },
    { name: "Join VIYAGOO", path: "/join" },
  ];

  const handleNavClick = (path) => {
    navigate(path); // ✅ go to the page
    setIsOpen(false); // ✅ close mobile menu
  };

  return (
    <header className="bg-[#0572E6] w-full shadow-md">
      <div className="mx-auto flex items-center justify-between px-8 md:py-4">
        {/* Left - Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" className="h-16 w-auto" />
        </div>

        {/* Right - Nav + Button (Desktop) */}
        <div className="hidden md:flex items-center space-x-16">
          {navItems.map((item) => (
            <div
              key={item.name}
              onClick={() => handleNavClick(item.path)}
              className="text-white text-[18px] font-medium cursor-pointer hover:text-blue-300 transition relative"
            >
              {item.name}
              {item.name === "Services" && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white rounded"></span>
              )}
            </div>
          ))}
          <button
            onClick={() => navigate("/contact")}
            className="bg-[#3A8DFF] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-600 transition"
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
        <div className="md:hidden bg-[#0E1D3E] border-t border-gray-700">
          {navItems.map((item) => (
            <div
              key={item.name}
              onClick={() => handleNavClick(item.path)}
              className="text-white px-4 py-3 hover:bg-[#1B2D5E] cursor-pointer transition"
            >
              {item.name}
            </div>
          ))}
          <div className="px-4 pb-3">
            <button
              onClick={() => handleNavClick("/contact")}
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
