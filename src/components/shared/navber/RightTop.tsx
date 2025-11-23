"use client";

import { User, Download, Phone, BadgePercent } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentToken, logoutUser } from "@/redux/featured/auth/authSlice";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';

const RightTop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const token = useSelector(selectCurrentToken);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("authToken");
    toast.success("Logged out successfully!");
    router.push("/");
  };

  return (
    <>
      {token ? (
        <div className="flex items-center space-x-7 relative">
          <button className="px-4 py-2 border border-[#0028A8] text-[#0028A8] bg-white rounded-lg font-medium hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            My Bookings
          </button>

          <div className="flex items-center space-x-1 bg-[#e8ebf0] rounded-sm p-1">
            <button className="bg-white text-gray-900 rounded-sm py-1 px-3 font-semibold shadow-sm">
              EN
            </button>
            <button className="text-gray-500 rounded-sm py-1 px-3 font-medium hover:bg-gray-200">
              বাং
            </button>
          </div>

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

            {isOpen && (
              <div className="absolute right-0 mt-3 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50 transition-all duration-200 ease-out">
                <ul className="py-2 text-sm text-gray-700">
                  <li>
                    <Link
                      onClick={() => setIsOpen(false)}
                      href="/dashbord/profile"
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => setIsOpen(false)}
                      href="/dashbord"
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center space-x-6 text-sm font-medium">
          {/* App Download */}
          <button className="flex items-center gap-1 text-[#063BE8] bg-[#DDE8FB] px-3 py-2 rounded-lg hover:bg-[#dbe7ff]">
            <Download size={16} />
            App download
          </button>

          {/* Customer Support */}
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-900">
            <Phone size={16} />
            Customer Support
          </button>

          {/* Offers */}
          <button className="flex items-center gap-1 text-red-500 hover:text-red-600">
            <BadgePercent size={16} />
            Offers
          </button>

          {/* Log in */}
          <Link href={"/auth/login"}>
            <button className="text-gray-700 hover:text-gray-900">Log in</button>
          </Link>

          {/* Sign in/Register */}
          <Link href={"/auth/register"}>
            <button className="bg-[#063BE8] text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign in/register
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default RightTop;
