import React from "react";
import { CheckCircle, Bell, Smartphone, Apple, PlayCircle,  } from "lucide-react";
const DownloadOurApp = () => {
  return (
    <div className="bg-[#FAFBFC] py-16 px-6 rounded-3xl">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <button className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium mb-4">
            <Smartphone size={18} /> Download Our App
          </button>

          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Book Flights On The Go
          </h2>
          <p className="text-gray-500 mb-8">
            Download the Ehan Tours & Travel app for exclusive mobile-only
            deals, faster bookings, and real-time flight updates.
          </p>

          {/* FEATURES */}
          <ul className="space-y-5 mb-10">
            <li className="flex items-start gap-3">
              <CheckCircle
                size={20}
                className="text-green-500 mt-0.5 shrink-0"
              />
              <div>
                <p className="font-medium text-gray-800">
                  Mobile–Exclusive Deals
                </p>
                <p className="text-gray-500 text-sm">
                  Save up to 30% on app bookings
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Bell size={20} className="text-blue-500 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium text-gray-800">Instant Notifications</p>
                <p className="text-gray-500 text-sm">
                  Get real-time flight status updates
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle
                size={20}
                className="text-purple-500 mt-0.5 shrink-0"
              />
              <div>
                <p className="font-medium text-gray-800">
                  Easy Booking Management
                </p>
                <p className="text-gray-500 text-sm">
                  Manage all your trips in one place
                </p>
              </div>
            </li>
          </ul>

          {/* STORE BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-gray-900 text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition"
            >
              <Apple />
              <span>
                <p className="text-xs">Download on the</p>
                <p className="text-sm font-semibold -mt-1">App Store</p>
              </span>
            </a>

            <a
              href="#"
              className="bg-gray-900 text-white px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition"
            >
              <PlayCircle />
              <span>
                <p className="text-xs">GET IT ON</p>
                <p className="text-sm font-semibold -mt-1">Google Play</p>
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="flex gap-8">
            <img
              src="mobile.png"
              alt="App Preview 1"
              className="drop-shadow-2xl rounded-4xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadOurApp;
