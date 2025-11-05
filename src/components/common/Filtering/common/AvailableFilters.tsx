import React from "react";
import { ChevronDown } from "lucide-react";

const AvailableFilters = () => {
  return (
    <div className="flex items-center justify-between  p-3 rounded-md">
      {/* Left: Available Flights info */}
      <div>
        <h2 className="text-sm font-semibold text-[#000B2F]">
          Available Flights
        </h2>
        <p className="text-xs text-gray-500">3 flights found</p>
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
  );
};

export default AvailableFilters;
