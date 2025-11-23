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
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ser" element={<Airport />} />

          <Route path="/service" element={<Service />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/airport" element={<Airport />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
