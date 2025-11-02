import React, { useState } from 'react';
import { Calendar, Plane, ArrowLeftRight, Search, Info, Mail, ChevronRight } from "lucide-react";

const popularDestinations = [
  { city: "Dhaka", code: "DAC", country: "Bangladesh" },
  { city: "Cox's Bazar", code: "CXB", country: "Bangladesh" },
  { city: "Chittagong", code: "CGP", country: "Bangladesh" },
  { city: "Dubai", code: "DXB", country: "UAE" },
  { city: "Singapore", code: "SIN", country: "Singapore" },
  { city: "Bangkok", code: "BKK", country: "Thailand" },
];

const OneWay = () => {
  const [from1, setFrom1] = useState("");
  const [from2, setFrom2] = useState("");

  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

  const handleSelect1 = (city: string, code: string) => {
    setFrom1(`${city} (${code})`);
    setShowDropdown1(false);
  };

  const handleSelect2 = (city: string, code: string) => {
    setFrom2(`${city} (${code})`);
    setShowDropdown2(false);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-6 items-start bg-white border border-gray-200 rounded-xl p-6">
        {/* From */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Departure From</label>
          <div className="flex gap-2 items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
            <Mail size={16} color="black" />
            <input
              type="text"
              placeholder="Select city"
              className="outline-none flex-1 text-gray-800 placeholder-gray-400"
              value={from1}
              onFocus={() => setShowDropdown1(true)}
              onChange={(e) => setFrom1(e.target.value)}
            />
            <button
              type="button"
              className="absolute -right-8 top-1/2 -translate-y-1/2 z-40 bg-[#E6EAF6] p-2 rounded-full shadow-sm hover:bg-blue-700"
            >
              <ArrowLeftRight size={20} color="#0028A8" />
            </button>
          </div>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <Info size={12} className="mr-1 text-gray-400" />
            <span>A hint message to guide user.</span>
          </div>

          {/* Dropdown */}
          {showDropdown1 && (
            <div className="absolute z-10 -mt-5 w-full  bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 no-scrollbar overflow-y-auto ">

              <div className="bg-[#E6EBFD] px-4 py-2 ">
                <p>Popular Destinations</p>
              </div>

              {popularDestinations.map((dest) => (
                <div className='px-2 hover:bg-blue-100'>
                  <div
                    key={dest.code}
                    className="px-2 py-2  cursor-pointer flex justify-between flex-col border-b "
                    onClick={() => handleSelect1(dest.city, dest.code)}
                  >
                    <div className='flex justify-between items-center '>
                      <div>
                        <p>{dest.city}</p>
                        <p className="text-gray-400 text-sm">{dest.code} – {dest.country}</p>
                      </div>
                      <div>
                        <ChevronRight size={26} color='#CED4DE' />
                      </div>

                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* To */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">Arrival To</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
            <Plane size={16} color="black" className="mr-2" />
            <input
              type="text"
              placeholder="Dubai (DXB)"
              className="outline-none flex-1 text-gray-800 placeholder-gray-400"
              value={from2}
              onFocus={() => setShowDropdown2(true)}
              onChange={(e) => setFrom2(e.target.value)}
            />
          </div>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <Info size={12} className="mr-1 text-gray-400" />
            <span>Where do you want to go?</span>
          </div>

          {/* Dropdown */}
          {showDropdown2 && (
            <div className="absolute z-10 -mt-5 w-full  bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 no-scrollbar overflow-y-auto ">

              <div className="bg-[#E6EBFD] px-4 py-2 ">
                <p>Popular Destinations</p>
              </div>

              {popularDestinations.map((dest) => (
                <div className='px-2 hover:bg-blue-100'>
                  <div
                    key={dest.code}
                    className="px-2 py-2  cursor-pointer flex justify-between flex-col border-b "
                    onClick={() => handleSelect2(dest.city, dest.code)}
                  >
                    <div className='flex justify-between items-center '>
                      <div>
                        <p>{dest.city}</p>
                        <p className="text-gray-400 text-sm">{dest.code} – {dest.country}</p>
                      </div>
                      <div>
                        <ChevronRight size={26} color='#CED4DE' />
                      </div>

                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* Departure */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
            <Calendar size={16} color="black" className="mr-2" />
            <input
              type="text"
              placeholder="Oct 20"
              className="outline-none flex-1 text-gray-800 placeholder-gray-400"
            />
          </div>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <Info size={12} className="mr-1 text-gray-400" />
            <span>Select travel date</span>
          </div>
        </div>

        {/* Return */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <Calendar size={16} className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Oct 27"
              disabled
              className="outline-none flex-1 bg-transparent text-gray-400 placeholder-gray-400"
            />
          </div>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <Info size={12} className="mr-1 text-gray-400" />
            <span>Return date</span>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-end mt-8">
        <button className="bg-[#0028A8] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md flex items-center gap-2">
          <Search size={18} /> Find Ticket
        </button>
      </div>
    </>
  );
};

export default OneWay;
