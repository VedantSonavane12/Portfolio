import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaThLarge, FaTimes } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black bg-opacity-30 border-b border-white z-50" data-aos="fade-down">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">

          {/* Left - Brand Name */}
          <div className="flex items-center space-x-3" data-aos="fade-right">
            <div className="text-white text-xl font-bold">
              <Link to="/" className="hover:text-gray-300">VEDANT SONAVANE</Link>
              <p className="text-xs text-white font-light tracking-wide text-center">
                Design • Develop • Deploy
              </p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="text-white focus:outline-none" aria-label="Open menu">
              <FaThLarge size={28} />
            </button>
          </div>

          {/* Center - Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-6 text-white" data-aos="fade-left">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/about" className="hover:text-gray-300">About</Link>
            <Link to="/services" className="hover:text-gray-300">Services</Link>
            <Link to="/projects" className="hover:text-gray-300">Projects</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact</Link>
          </div>

          {/* Right - Social Icons (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-6 text-white items-center" data-aos="fade-left">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="mailto:vedantsonavane799@gmail.com" className="hover:text-gray-300">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile View */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-lg z-50 flex justify-end"
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="w-64 bg-white/10 backdrop-blur-lg border-l border-white/20 shadow-xl h-full p-6"
          >
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-2xl focus:outline-none transition transform hover:scale-110"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex flex-col space-y-6 text-white mt-8">
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="relative py-3 px-4 text-lg font-semibold tracking-wide transition duration-300 hover:text-gray-300 group 
                 bg-white/10 backdrop-blur-md rounded-lg shadow-md hover:bg-white/20"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}

              {/* Social Icons */}
              <div className="mt-6 flex space-x-6 text-white items-center justify-center">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110 hover:text-gray-300">
                  <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110 hover:text-gray-300">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="transition transform hover:scale-110 hover:text-gray-300">
                  <FaInstagram size={24} />
                </a>
                <a href="mailto:vedantsonavane799@gmail.com" className="transition transform hover:scale-110 hover:text-gray-300">
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
