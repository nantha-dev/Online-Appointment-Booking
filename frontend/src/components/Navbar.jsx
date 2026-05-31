import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src="/health.png" alt="MediBook Logo" className="h-8 w-8 mr-2" />
            <span className="ml-2 text-xl font-bold text-gray-800">MediBook</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition">Services</button>
            <button onClick={() => scrollToSection('booking')} className="text-gray-700 hover:text-blue-600 transition">Book Now</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600 transition">Testimonials</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600">Services</button>
              <button onClick={() => scrollToSection('booking')} className="text-gray-700 hover:text-blue-600">Book Now</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-blue-600">Testimonials</button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;