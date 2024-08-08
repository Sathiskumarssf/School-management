// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"


function Navbar() {
  return (
    <nav className="bg-customColor2 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Student Management Logo" className="w-8 h-8" />
          <Link to="/" className="text-white text-2xl font-bold">
            Student Managemen
          </Link>
          
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/about" className="text-white hover:text-gray-200">
            About
          </Link>
         
         
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
