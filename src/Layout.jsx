import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
     <Navbar />

      <div className="p-6 mx-auto w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
