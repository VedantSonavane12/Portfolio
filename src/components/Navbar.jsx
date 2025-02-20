import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaTimes } from 'react-icons/fa';
import { FaThLarge } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize AOS animations
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-transparent border-b border-white z-50" data-aos="fade-down">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Left - Brand Name */}
          <div className="flex items-center space-x-3" data-aos="fade-right">
            <div className="text-white text-xl font-bold">
              <Link to="/" className="hover:text-gray-300">VEDANT SONAVANE</Link>
              <p className="text-xs text-white font-light tracking-wide text-center">
                Design Develop Deploy
              </p>
            </div>
          </div>

          {/* Mobile Menu Button - Grid Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)} className="text-white focus:outline-none">
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

          {/* Right - Social Icons + Contact Info (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-6 text-white items-center" data-aos="fade-left">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Sidebar for Mobile View */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex">
          <div className="w-64 bg-gray-900 h-full p-6">
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-white text-2xl">
                <FaTimes />
              </button>
            </div>

            <div className="flex flex-col space-y-6 text-white mt-8">
              <Link to="/" className="hover:text-gray-300" onClick={() => setIsOpen(false)} data-aos="fade-up">Home</Link>
              <Link to="/about" className="hover:text-gray-300" onClick={() => setIsOpen(false)} data-aos="fade-up">About</Link>
              <Link to="/services" className="hover:text-gray-300" onClick={() => setIsOpen(false)} data-aos="fade-up">Services</Link>
              <Link to="/projects" className="hover:text-gray-300" onClick={() => setIsOpen(false)} data-aos="fade-up">Projects</Link>
              <Link to="/contact" className="hover:text-gray-300" onClick={() => setIsOpen(false)} data-aos="fade-up">Contact</Link>

              {/* Social Icons in Mobile View */}
              <div className="mt-6 flex space-x-6 text-white items-center justify-center">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <FaLinkedin size={24} />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
