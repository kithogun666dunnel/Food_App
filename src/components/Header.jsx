import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setbtnName] = useState("login");

  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg py-4 px-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="logo-container">
          <img className="h-12 w-auto" src={LOGO_URL} alt="Logo" />
        </div>
        <nav className="flex items-center space-x-8">
          <Link
            to="/"
            className="text-white text-lg font-medium hover:text-gray-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg font-medium hover:text-gray-400 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg font-medium hover:text-gray-400 transition duration-300"
          >
            Contact Us
          </Link>
          <Link
            to="/cart"
            className="text-white text-lg font-medium hover:text-gray-400 transition duration-300"
          >
            Cart
          </Link>
          <button
            className={`ml-4 px-5 py-2 rounded-full transition duration-300 focus:outline-none ${
              btnName === "login"
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-red-500 text-white hover:bg-red-600"
            }`}
            onClick={() => {
              btnName === "login" ? setbtnName("logout") : setbtnName("login");
            }}
          >
            {btnName}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
