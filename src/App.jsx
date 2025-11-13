import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./component/common/header";
import { Home } from "./component/home";
import Footer from "./component/common/footer";
import Services from "./component/services/ourservice";
import Airport from "./component/services/airport";
import Logistic from "./component/services/logistic";



function App() {
      return (
            <>
                  <BrowserRouter>
                        <Header />
                        <Routes>
                              <Route path="/" element={<Home />} />
                              <Route path="ser" element={<Airport/>} />

                        </Routes>
                        <Footer/>
                  </BrowserRouter>
            </>
      );
}

export default App;

