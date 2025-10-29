import { User } from 'lucide-react';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const RightTop = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="flex items-center space-x-7 relative" >
      {/* My Bookings Button */}
      <button className="px-4 py-2 border border-[#0028A8] text-[#0028A8] bg-white rounded-lg font-medium hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        My Bookings
      </button>

      {/* Language Switcher */}
      <div className="flex items-center space-x-1 bg-[#e8ebf0] rounded-sm p-1">
        <button className="bg-white text-gray-900 rounded-sm py-1 px-3 font-semibold shadow-sm">
          EN
        </button>
        <button className="text-gray-500 rounded-sm py-1 px-3 font-medium hover:bg-gray-200">
          বাং
        </button>
      </div>

      {/* User Icon with Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-1 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0028A8]">
            <User color="white" />
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-800"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-3 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-200 ease-out">
            <ul className="py-2 text-sm text-gray-700">
              <li>
                <Link
                onClick={() => setIsOpen(!isOpen)}
                  href="dashbord/profile"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                onClick={() => setIsOpen(!isOpen)}
                  href="/dashboard"
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightTop;
