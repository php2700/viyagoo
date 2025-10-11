import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./component/common/header";
import { Home } from "./component/home";
import Footer from "./component/common/footer";

function App() {
      return (
            <>
                  <BrowserRouter>
                        <Header />
                        <Routes>
                              <Route path="/" element={<Home />} />
                        </Routes>
                        <Footer/>
                  </BrowserRouter>
            </>
      );
}

export default App;

