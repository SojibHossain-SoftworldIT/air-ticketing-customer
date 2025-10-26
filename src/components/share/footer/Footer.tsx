import React from "react";
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
     <div className='max-w-7xl mx-auto  px-2 md:px-4 lg:px-6 mt-8' >

    <footer className="bg-[#000B2F] text-gray-300 rounded-3xl py-12 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Ehan Tours & Travel
          </h3>
          <p className="text-sm leading-relaxed mb-5">
            Your trusted travel partner for flights, hotels, tours, and visa
            services across Bangladesh and beyond.
          </p>

          <div className="flex space-x-3">
            <a
              href="#"
              className="bg-gray-800 hover:bg-blue-700 text-white p-2 rounded-full transition"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-blue-700 text-white p-2 rounded-full transition"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-blue-700 text-white p-2 rounded-full transition"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Flight Booking</a></li>
            <li><a href="#" className="hover:text-white">Bus Tickets</a></li>
            <li><a href="#" className="hover:text-white">Launch Tickets</a></li>
            <li><a href="#" className="hover:text-white">Hotel Booking</a></li>
            <li><a href="#" className="hover:text-white">Tour Packages</a></li>
            <li><a href="#" className="hover:text-white">Visa Processing</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-white font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 mt-1 text-blue-400" />
              <span>123 Gulshan Avenue, Dhaka 1212, Bangladesh</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-400" />
              <span>+880 1XXX-XXXXXX</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <span>info@ehantours.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2025 Ehan Tours & Travel. All rights reserved. | Developed by{" "}
        <span className="text-gray-200 font-medium">Softworld IT, LLC</span>
      </div>
    </footer>

     </div>
  );
};

export default Footer;
