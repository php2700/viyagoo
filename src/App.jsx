import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import { FAQAccordion } from "./component/FAQ/FaqAccording";
// import MainLayout from "./component/MainLayout"

function App() {
   
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
      <BrowserRouter>
        <Header  />
        <ToastContainer/>
        <SlideTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ser" element={<Airport />} />

          <Route path="/service" element={<Service />} /> 
          <Route path="/about" element={<About/>} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/airport" element={<Airport />} /> 
         <Route path="/join" element={<Join />} /> 
          <Route path="/faq" element={<FAQAccordion />} /> 
   
            <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer   />
      </BrowserRouter>
    </>
  );
}

export default App;
