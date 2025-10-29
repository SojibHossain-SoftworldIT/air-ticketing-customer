"use client";
import React, { useState } from "react";
import {
  FaPlaneDeparture,
  FaCalendarAlt,
  FaClock,
  FaDownload,
  FaTimes,
  FaBan,
  FaSearch,
} from "react-icons/fa";

const Page = () => {
  const [active, setActive] = useState("All Bookings");

  const tabs = ["All Bookings", "Upcoming", "Completed", "Cancelled"];

  return (
    <div className="bg-white rounded-2xl p-4 w-full max-w-5xl">
      {/* Header */}
      <h2 className="text-2xl font-medium text-gray-800 mb-2">
        My Bookings
      </h2>
      <p className="text-gray-500 mb-6">
        View and manage all your flight bookings
      </p>

      {/* Tabs */}
      <div className="flex space-x-3 mb-8 ">
        <div className="bg-[#E6E7EA] p-2 rounded-full flex space-x-3">

          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-4 py-2 rounded-full font-medium transition ${active === tab
                ? "bg-black text-white"
                : " text-gray-700 hover:bg-gray-200"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Example filtering (you can later replace this with real data filtering) */}
      {active === "All Bookings" || active === "Upcoming" ? (
        <>
          {/* Booking Card 1 */}
          <div className="border border-gray-200 rounded-xl p-5 mb-6 ">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
              <div className="flex items-center space-x-3">
                <img
                  src="https://flagcdn.com/w40/bd.png"
                  alt="Bangladesh"
                  className="w-8 h-5 rounded"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Biman Bangladesh
                  </h3>
                  <p className="text-gray-500 text-sm">BG021</p>
                </div>
              </div>
              <div className="flex items-end flex-col   ">
                <p className="text-green-600 font-medium bg-green-100 px-3 py-1 border border-green-500 rounded-sm mb-1 text-sm">
                  Confirmed
                </p>
                <p className="text-gray-500 text-sm">Booking ID: BK10001</p>
              </div>
            </div>

            <div className="flex justify-between items-center gap-4 mb-3">
              <div className="flex items-start space-x-2">
                <FaPlaneDeparture className="text-gray-500 mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Route</p>
                  <p className="font-medium text-gray-800">
                    Dhaka (DAC) → Dubai (DXB)
                  </p>
                </div>
              </div>
              <div className="flex  items-start space-x-2">

                <div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-gray-500 mt-1" /><p className="text-sm text-gray-500">Date</p>
                  </div>
                  <p className="font-medium text-gray-800">2025-10-20</p>
                </div>
              </div>
              <div className="flex  items-start space-x-2">

                <div>
                  <div className="flex items-center gap-2">
                    <FaClock className="text-gray-500 mt-1" /><p className="text-sm text-gray-500">Time</p>
                  </div>
                  <p className="font-medium text-gray-800">09:30 – 13:45</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="font-medium text-[#0028A8]">BDT 45,000</p>
              </div>
            </div>
            <div className="flex justify-between items-center border-t">

              <p className="text-gray-600 text-sm mb-4">
                Passenger: Mr Mohammad Rahman
              </p>

              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                  <FaDownload /> <span>Download</span>
                </button>
                <button className="flex items-center border border-red-600 space-x-2 bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition">
                  <FaTimes /> <span>Cancel</span>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}

      {(active === "All Bookings" || active === "Completed") && (
        <div className="border border-gray-200 rounded-xl p-5 mb-6 ">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <div className="flex items-center space-x-3">
              <img
                src="https://flagcdn.com/w40/th.png"
                alt="Thailand"
                className="w-8 h-5 rounded"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Thai Airways</h3>
                <p className="text-gray-500 text-sm">TG322</p>
              </div>
            </div>
            <div className="flex items-end flex-col   ">
                <p className="text-gray-700 font-normal bg-gray-100 px-3 py-1 rounded-full text-sm">
                  Completed
                </p>
                <p className="text-gray-500 text-sm">Booking ID: BK10002</p>
              </div>
           
          </div>

          <div className="flex justify-between items-center gap-4 mb-3">
            <div className="flex items-start space-x-2">
              <FaPlaneDeparture className="text-gray-500 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Route</p>
                <p className="font-medium text-gray-800">
                  Dhaka (DAC) → Bangkok (BKK)
                </p>
              </div>
            </div>
            <div className="flex  items-start space-x-2">
              <div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-gray-500 mt-1" /><p className="text-sm text-gray-500">Date</p>
                </div>
                <p className="font-medium text-gray-800">2025-10-20</p>
              </div>
            </div>
            <div className="flex  items-start space-x-2">
              <div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-gray-500 mt-1" /><p className="text-sm text-gray-500">Time</p>
                </div>
                <p className="font-medium text-gray-800">09:30 – 13:45</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Amount</p>
              <p className="font-medium text-[#0028A8]">BDT 25,000</p>
            </div>
          </div>

          <div className="flex justify-between items-center border-t">

            <p className="text-gray-600 text-sm mb-4">
              Passenger: Mr Mohammad Rahman
            </p>

            <div>
              <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition">
                <FaDownload /> <span>Download</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {active === "Cancelled" && (
        <div className="bg-white border rounded-2xl  p-10 flex flex-col items-center text-center">
          <FaBan className="text-5xl text-red-500 mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">
            No cancelled bookings
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            You don't have any cancelled flight bookings
          </p>
          <button className="flex items-center gap-2 bg-[#001E63] text-white px-5 py-2 rounded-lg hover:bg-[#002b8c] transition-all">
            <FaSearch />
            Search Flights
          </button>
        </div>
      )}

    </div>
  );
};

export default Page;
