import React from "react";
import { Outlet, Link } from "react-router-dom";
import Hero from "./Hero";

const Navbar = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <nav className="bg-teal-500 text-white p-4 shadow-md text-3xl">
        <ul className="flex gap-4 justify-center">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/owner" className="hover:text-gray-200">
            Owner
            </Link>
          </li> 
        </ul>
      </nav>
      <Hero />
      <div className="p-6 max-w-4xl mx-auto w-full">
        <Outlet />
      </div>
      
    </div>
  );
};

export default Navbar;
