import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cardicon from "./Cardicon";

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Cardicon/>
      <Footer />
    </>
  );
};

export default Rootlayout;
