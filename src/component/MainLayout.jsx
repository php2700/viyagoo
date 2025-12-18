// src/component/common/MainLayout.js
import {Header} from "./common/header";
import Footer from "./common/footer";
import { SlideTop } from "./common/slideTop";
import { ToastContainer } from "react-toastify";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <ToastContainer />
      <SlideTop />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
