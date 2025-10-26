import React from "react";
import { Calendar, Plane, ArrowLeftRight, Search,  Info  } from "lucide-react";

const BusinessClass = () => {
    return (
        <div className=" flex justify-center  ">
            <div className="bg-white absolute top-80   h-[436px]  rounded-2xl shadow-md ">

                {/* Top Tabs */}
                <div className="flex justify-center bg-[#E6EAF6] rounded-t-2xl border-b p-4 mb-6">
                    <div className="flex text-gray-600 font-medium">
                        <button className="text-white text-[14px] font-semibold  px-5 py-2 bg-black flex items-center justify-center rounded-2xl gap-2">
                            <Plane size={16} /> Flights
                        </button>
                        <button className="text-[#333C59] text-[14px]   px-5 py-2 flex items-center justify-center rounded-2xl gap-2">
                            <Plane size={16} /> Bus
                        </button>
                        <button className="text-[#333C59] text-[14px]  px-5 py-2 flex items-center justify-center rounded-2xl gap-2">
                            <Plane size={16} /> Launch
                        </button>
                        <button className="text-[#333C59] text-[14px]  px-5 py-2 flex items-center justify-center rounded-2xl gap-2">
                            <Plane size={16} /> Train
                        </button>
                        <button className="text-[#333C59] text-[14px]  px-5 py-2 flex items-center justify-center rounded-2xl gap-2">
                            <Plane size={16} /> Hotel
                        </button>
                        <button className="text-[#333C59] text-[14px]  px-5 py-2 flex items-center justify-center rounded-2xl gap-2">
                            <Plane size={16} /> Visa
                        </button>
                        <button className="text-[#333C59] text-[14px]  px-5 py-2 flex items-center justify-center rounded-2xl gap-2">
                            <Plane size={16} /> Packages
                        </button>
                        <button className="text-[#333C59] text-[14px]  px-5 py-2 flex items-center justify-center rounded-2xl gap-2">
                            <Plane size={16} /> Offers
                        </button>

                    </div>
                </div>

                <div className="px-8 py-4">

                {/* Trip Type + Class */}
                <div className="flex justify-between items-center mb-6">
                    <div className="flex gap-3">
                        <button className="px-4 py-2 font-semibold flex gap-2 justify-center items-center bg-black text-white rounded-md">
                            <Plane size={16} /> One-way
                        </button>
                        <button className="px-4 flex gap-2 justify-center items-center py-2 border rounded-md text-gray-700">
                           <Plane size={16} /> Round Trip
                        </button>
                        <button className="px-4 flex gap-2 justify-center items-center py-2 border rounded-md text-gray-700">
                           <Plane size={16} /> Multi-city
                        </button>
                    </div>
                    <select className="border border-blue-600 rounded-md px-3 py-2 text-gray-600">
                        <option>Business Class</option>
                        <option>Economy</option>
                        <option>First Class</option>
                    </select>
                </div>

                {/* Form Fields */}
               <div className="grid grid-cols-4 gap-6 items-start bg-white border border-gray-200 rounded-xl p-6 ">
      {/* From */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Label
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-1 focus-within:ring-blue-500 bg-white relative">
          <span className="text-gray-400 mr-2">✉️</span>
          <input
            type="text"
            placeholder="Placeholder text"
            className="outline-none flex-1 text-gray-800 placeholder-gray-400"
          />
          <button
            type="button"
            className="absolute  -right-8 top-1/2 -translate-y-1/2 bg-[#E6EAF6] text-white p-2 rounded-full shadow-sm hover:bg-blue-700"
          >
            <ArrowLeftRight size={20} color="#0028A8" />
          </button>
        </div>
        <div className="flex items-center mt-2 text-xs text-gray-500">
          <Info size={12} className="mr-1 text-gray-400" />
          <span>A hint message to guide user.</span>
        </div>
      </div>

      {/* To */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Arrival To
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 focus-within:ring-1 focus-within:ring-blue-500 bg-white">
          <Plane size={16} className="text-blue-600 mr-2" />
          <input
            type="text"
            placeholder="Dubai (DXB)"
            className="outline-none flex-1 text-gray-800 placeholder-gray-400"
          />
        </div>
        <div className="flex items-center mt-2 text-xs text-gray-500">
          <Info size={12} className="mr-1 text-gray-400" />
          <span>Where do you want to go?</span>
        </div>
      </div>

      {/* Departure */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Departure
        </label>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
          <Calendar size={16} className="text-blue-600 mr-2" />
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
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Return
        </label>
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


                </div>


            </div>

        </div>
    );
};

export default BusinessClass;
