import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Navbar from "../pages/Navbar/Navbar";

const Main = () => {
  return (
    <section>
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Main;
