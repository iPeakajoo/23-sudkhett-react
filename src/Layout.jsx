import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
     <Navbar />

      
      <Footer />
    </div>
  );
};

export default Layout;
