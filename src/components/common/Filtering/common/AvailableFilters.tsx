"use client";
import React, { useState } from "react";
import { ChevronDown, Workflow } from "lucide-react";
import CompareFlights from "./CompareFlights";

const AvailableFilters = ({ flights, compareList, setCompareList , compareMode , setCompareMode } : any) => {

  const [compareView, setCompareView] = useState(false);

  return (
    <div className="py-6">

      {/* Top Bar */}
      <div className="flex items-center justify-between bg-white rounded-xl border border-[#E6E7EA] p-4">
        <div className="flex items-center gap-4">
          <div>
            <h2 className="text-sm font-semibold text-[#000B2F]">Available Flights</h2>
            <p className="text-xs text-gray-500">{flights.length} flights found</p>
          </div>

          <button
            onClick={() => setCompareMode(!compareMode)}
            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg border transition
            ${compareMode ? "bg-[#000B2F] text-white" : "bg-[#FAFBFC] text-[#000B2F]"}`}
          >
            <Workflow size={16} />
            {compareMode ? "Exit Compare Mode" : "Compare Mode"}
          </button>
        </div>
         {/* Right: Sort Dropdown */}
      <div className="relative">
        <select
          className="appearance-none border bg-[#F8FAFF] border-gray-300 rounded-md px-3 py-2 pr-8 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
          defaultValue="price-low"
        >
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="duration-short">Duration: Shortest</option>
          <option value="duration-long">Duration: Longest</option>
        </select>
        <ChevronDown
          size={16}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
        />
      </div>
      </div>

      {/* Compare Bar */}
      {compareMode && (
        <div className="mt-4 bg-[#000B2F] text-white p-4 rounded-xl flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Select 2 flights to compare</p>
            <p className="text-xs text-[#DBEAFE]">{compareList.length}/2 flights selected</p>
          </div>

          <div className="flex gap-3">
            <button
              disabled={compareList.length !== 2}
              onClick={() => setCompareView(true)}
              className={`px-4 py-2 rounded-lg text-sm transition
                ${compareList.length === 2 ? "bg-[#4E6EF1]" : "bg-gray-600 cursor-not-allowed"}`}
            >
              Compare Now
            </button>
            <button
              onClick={() => setCompareList([])}
              className="bg-[#FFB347] text-[#000B2F] px-4 py-2 rounded-lg text-sm hover:bg-[#e7a03b] transition"
            >
              Clear Selection
            </button>
          </div>
        </div>
      )}

      {compareView && (
        <CompareFlights
          flights={compareList}
          onClose={() => setCompareView(false)}
        />
      )}
    </div>
  );
};

export default AvailableFilters;
