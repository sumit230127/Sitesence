import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, AlignJustify } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-500 text- py-4 px-6 fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="flex items-center">
          <img
            src="https://sitesence.com/wp-content/uploads/2019/07/LogoMakr_0GCWfD.png"
            alt="Logo"
            className="h-10"
          />
        </Link>

    
        <div className="hidden md:flex space-x-8 text-xl">
          <Link to="/services" className="text-yellow-400 font-semibold">
            Services
          </Link>
          <Link to="/our-work" className="hover:text-gray-300">
            Our Work
          </Link>
          <Link to="/company" className="hover:text-gray-300">
            Company
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
          <a href="tel:2018706000" className="text-yellow-400 font-bold">
            201-870-6000
          </a>
        </div>

   
        <button
          className="md:hidden text-white focus:outline-none transition duration-300 ease-in-out transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X size={28} className="text-yellow-400" />
          ) : (
            <AlignJustify size={28} className="text-yellow-400" />
          )}
        </button>
      </div>


      {isOpen && (
        <div className="md:hidden flex flex-col bg-black w-full absolute top-full left-0 py-4 shadow-lg border-t border-gray-800 animate-fadeIn">
          <Link
            to="/services"
            className="py-3 text-center text-yellow-400 font-semibold hover:bg-gray-900 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/our-work"
            className="py-3 text-center hover:text-gray-300 hover:bg-gray-900 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Our Work
          </Link>
          <Link
            to="/company"
            className="py-3 text-center hover:text-gray-300 hover:bg-gray-900 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Company
          </Link>
          <Link
            to="/contact"
            className="py-3 text-center hover:text-gray-300 hover:bg-gray-900 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <a
            href="tel:2018706000"
            className="py-3 text-center text-yellow-400 font-bold hover:bg-gray-900 transition duration-300"
          >
            201-870-6000
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;