
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./component/common/header";
import { Home } from "./component/home";
import {Corporate} from "./component/service/corporate_employee";
import Footer from "./component/common/footer";
import Airport from "./component/service/airport_transfer";
import Service from "./component/service/service";
import Join from "./component/Join";

function App() {
      return (
            <>
            <style>
        {`
          @font-face {
            font-family: "Bell MT";
            src: local("Bell MT");
          }

          * {
            font-family: "Bell MT", serif !important;
          }
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
                              <Route path="/service" element={<Service/>}/>
                              <Route path="/corporate" element={<Corporate />} />
                              <Route path="/airport" element={<Airport />} />
                              <Route path="/join" element={<Join />} />
                        </Routes>
                        <Footer/>
                  </BrowserRouter>
            </>
      );
}

export default App;

