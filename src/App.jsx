import "./App.css";
import { BrowserRouter, Route, Routes,useLocation } from "react-router-dom";
import {  useEffect} from "react";
import { Header } from "./component/common/header";
import { Home } from "./component/home";
import { Corporate } from "./component/service/corporate_employee";
import Footer from "./component/common/footer";
import Services from "./component/services/ourservice";
import Airport from "./component/services/airport";
import Logistic from "./component/services/logistic";

import Service from "./component/service/service";
import Join from "./component/Join";
import { About } from "./component/about";
import { SlideTop } from "./component/common/slideTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./component/NotFound/notFound"
import { FAQAccordion } from "./component/FQA/FaqAccording";
import ScrollToTop from "./component/common/ScrollTop";
import BookingProcess from "./component/home/BookingProcess"

// import MainLayout from "./component/MainLayout"

function App() {
   const { pathname, hash } = useLocation();

useEffect(() => {
  if (hash === "#contactus") {
    const scrollToFooter = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
    
        setTimeout(scrollToFooter, 100);
      }
    };

    requestAnimationFrame(() => {
      setTimeout(scrollToFooter, 200);
    });
  }
}, [pathname, hash]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // smooth scroll
    });
  }, [pathname]);


   
  return (
    <>
      <style>
        {`
        

          
            /* Hide scrollbar for Chrome, Safari, Edge */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for Firefox */
.no-scrollbar {
  scrollbar-width: none;
}

        `}
      </style>
      
      <ScrollToTop />
        <Header  />
        <ToastContainer/>
        <SlideTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ser" element={<Airport />} />

          <Route path="/ourservice" element={<Service />} /> 
          <Route path="/aboutus" element={<About/>} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/airport" element={<Airport />} /> 
         <Route path="/join" element={<Join />} /> 
          <Route path="/faq" element={<FAQAccordion />} /> 
          <Route path="/bookingprocess"element={<BookingProcess/>}/>
   
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer   />

    </>
  );
}

export default App;
