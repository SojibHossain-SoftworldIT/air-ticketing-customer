import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Plane,
} from "lucide-react";
import LeftTop from "../navber/LeftTop";

const Footer = () => {
  return (
    <footer className="bg-[#000B2F] text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 flex justify-between gap-10">
        {/* Column 1 */}
        <div className="max-w-sm">
          <LeftTop textColer="text-white" />
          <p className="text-sm leading-relaxed mb-5">
            Qamla is the ultimate resume–building platform for professionals,
            students, and job seekers. Whether you’re a fresh graduate or a
            career changer.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-3 mb-6">
            {[Youtube, Facebook, Twitter, Instagram, Linkedin].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-gray-800 hover:bg-blue-700 text-white p-2 rounded-full transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            )}
          </div>

          {/* Newsletter */}
          <p className="text-sm mb-2">Subscribe to our newsletter</p>
          <div className="flex items-center bg-white p-1 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-l-md px-3 py-2 text-sm border-none   outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium">
              Search
            </button>
          </div>
          <p className=" mt-2 text-gray-400">
           By submitting your email, you agree to our Terms and Privacy Policy.
          </p>
        </div>

        {/* Column 2 - Company */}
        <div>
          <h4 className="text-white font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            {[
              "About us",
              "Careers",
              "Press",
              "Key Features",
              "Pricing",
              "News",
              "FAQ’s",
            ].map((item, i) => (
              <li key={i}>
                <a href="#" className="hover:text-white">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Our Service */}
        <div>
          <h4 className="text-white font-semibold mb-3">Our Service</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Flight Booking",
              "Bus Tickets",
              "Launch Tickets",
              "Hotel Booking",
              "Tour Packages",
              "Tutorials",
              "Visa Processing",
            ].map((service, i) => (
              <li key={i}>
                <a href="#" className="hover:text-white">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 - Contact */}
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

          {/* App Store Buttons */}
          <div className="flex gap-3 mt-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#00165C] text-center text-sm text-white py-4 border-t border-gray-700">
        © 2025 Ehan Tours & Travel. All rights reserved. | Developed by{" "}
        <span className="text-gray-200 font-medium">Softworld IT, LLC</span>
      </div>
    </footer>
  );
};

export default Footer;
