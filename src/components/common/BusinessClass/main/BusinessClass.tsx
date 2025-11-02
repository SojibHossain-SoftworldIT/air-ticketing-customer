"use client"
import React, { useState } from "react";
import {
  Plane,
  Bus,
  Hotel,
  Package,
  HandCoins,

} from "lucide-react";
import Flights from "../common/flights/main/Flights";

const BusinessClass = () => {
  const Tabs = [
    { name: "Flights", icon: <Plane size={16} /> },
    { name: "Bus", icon: <Bus size={16} /> },
    { name: "Launch", icon: <Plane size={16} /> },
    { name: "Train", icon: <Plane size={16} /> },
    { name: "Hotel", icon: <Hotel size={16} /> },
    { name: "Visa", icon: <Plane size={16} /> },
    { name: "Packages", icon: <Package size={16} /> },
    { name: "Offers", icon: <HandCoins size={16} /> },
  ]
  const [selectedTab, setSelectedTab] = useState("Flights");

  return (
    <div className="flex justify-center">
      <div className="bg-white absolute top-72  rounded-2xl shadow-md ">

        {/* Tabs */}
        <div className="flex justify-center bg-[#E6EAF6] rounded-t-2xl border-b p-4 mb-6">
          <div className="flex text-gray-600 font-medium flex-wrap gap-2">
            {Tabs.map((tab: any) => (
              <button
                key={tab.name}
                onClick={() => setSelectedTab(tab.name)}
                className={`px-5 py-2 rounded-2xl flex items-center gap-2 ${selectedTab === tab.name
                  ? "bg-black text-white font-semibold"
                  : "text-[#333C59]"
                  }`}
              >
                {tab.icon} {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Flights Content */}
        {selectedTab === "Flights" && (
          <Flights />
        )}
        
        {selectedTab !== "Flights" && (
          <div className="flex flex-col items-center justify-center py-16 text-center bg-white  border-gray-100 rounded-2xl">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              {selectedTab} Booking Coming Soon
            </h2>
            <p className="text-sm text-gray-500 max-w-md">
              We’re working hard to bring {selectedTab.toLowerCase()} booking to you.
              Stay tuned for updates — it’ll be available very soon!
            </p>
            <button className="mt-6 bg-[#0028A8] text-white font-medium px-5 py-2.5 rounded-md hover:bg-blue-700 transition">
              Notify Me
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default BusinessClass;
