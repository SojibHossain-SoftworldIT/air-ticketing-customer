"use client";
import React, { useState } from "react";
import {
  Calendar,
  ArrowLeftRight,
  Search,
  ChevronRight,
  PlaneTakeoff,
  PlaneLanding,
} from "lucide-react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const popularDestinations = [
  { city: "Dhaka", code: "DAC", country: "Bangladesh" },
  { city: "Cox's Bazar", code: "CXB", country: "Bangladesh" },
  { city: "Chittagong", code: "CGP", country: "Bangladesh" },
  { city: "Dubai", code: "DXB", country: "UAE" },
  { city: "Singapore", code: "SIN", country: "Singapore" },
  { city: "Bangkok", code: "BKK", country: "Thailand" },
];

const RoundTrip = () => {
  const [from1, setFrom1] = useState("");
  const [from2, setFrom2] = useState("");
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDepartureCalendar, setShowDepartureCalendar] = useState(false);
  const [showReturnCalendar, setShowReturnCalendar] = useState(false);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSelect1 = (city: string, code: string) => {
    setFrom1(`${city} (${code})`);
    setShowDropdown1(false);
  };

  const handleSelect2 = (city: string, code: string) => {
    setFrom2(`${city} (${code})`);
    setShowDropdown2(false);
  };

  const handleSwap = () => {
    const temp = from1;
    setFrom1(from2);
    setFrom2(temp);
  };

  return (
    <>
      {/* Round-trip Form */}
      <div className="grid grid-cols-4 gap-6 items-start bg-white border border-gray-200 rounded-xl p-6 relative">
        {/* From */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Departure From
          </label>
          <div
            className="flex gap-2 items-center border border-gray-300 rounded-lg px-3 py-2 relative bg-white cursor-pointer"
            onClick={() => {
              setShowDropdown1(!showDropdown1);
              setShowDropdown2(false);
            }}
          >
            <PlaneTakeoff size={16} color="black" className="mr-2" />
            <input
              type="text"
              value={from1}
              readOnly
              placeholder="Select departure"
              className="outline-none flex-1 text-gray-800 placeholder-gray-400 bg-transparent cursor-pointer"
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleSwap();
              }}
              className="absolute -right-8 z-1 top-1/2 -translate-y-1/2 bg-[#E6EAF6] p-2 rounded-full shadow-sm hover:bg-blue-700"
            >
              <ArrowLeftRight size={20} color="#0028A8" />
            </button>
          </div>

          {/* Dropdown 1 */}
          {showDropdown1 && (
            <div className="absolute no-scrollbar z-10  mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              <div className="bg-[#E6EBFD] px-4 py-2 font-medium">
                Popular Destinations
              </div>
              {popularDestinations.map((dest) => (
                <div
                  key={dest.code}
                  onClick={() => handleSelect1(dest.city, dest.code)}
                  className="px-3 py-2 hover:bg-blue-100 cursor-pointer border-b flex justify-between items-center"
                >
                  <div>
                    <p>{dest.city}</p>
                    <p className="text-gray-400 text-sm">
                      {dest.code} – {dest.country}
                    </p>
                  </div>
                  <ChevronRight size={20} color="#CED4DE" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* To */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Arrival To
          </label>
          <div
            className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white cursor-pointer"
            onClick={() => {
              setShowDropdown2(!showDropdown2);
              setShowDropdown1(false);
            }}
          >
            <PlaneLanding size={16} color="black" className="mr-2" />
            <input
              type="text"
              value={from2}
              readOnly
              placeholder="Select destination"
              className="outline-none flex-1 text-gray-800 placeholder-gray-400 bg-transparent cursor-pointer"
            />
          </div>

          {/* Dropdown 2 */}
          {showDropdown2 && (
            <div className="absolute no-scrollbar z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              <div className="bg-[#E6EBFD] px-4 py-2 font-medium">
                Popular Destinations
              </div>
              {popularDestinations.map((dest) => (
                <div
                  key={dest.code}
                  onClick={() => handleSelect2(dest.city, dest.code)}
                  className="px-3 py-2 hover:bg-blue-100 cursor-pointer border-b flex justify-between items-center"
                >
                  <div>
                    <p>{dest.city}</p>
                    <p className="text-gray-400 text-sm">
                      {dest.code} – {dest.country}
                    </p>
                  </div>
                  <ChevronRight size={20} color="#CED4DE" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Departure */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Departure
          </label>
          <div
            className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white cursor-pointer"
            onClick={() => {
              setShowDepartureCalendar(!showDepartureCalendar);
              setShowReturnCalendar(false);
            }}
          >
            <Calendar size={16} color="black" className="mr-2" />
            <span className="text-gray-800">
              {startDate
                ? startDate.toDateString()
                : "Select departure date"}
            </span>
          </div>

          {showDepartureCalendar && (
            <div className="absolute mt-2 z-10 shadow-xl border border-gray-200 rounded-lg bg-white">
              <DateRange
                ranges={[
                  {
                    startDate: startDate || new Date(),
                    endDate: startDate || new Date(),
                    key: "selection",
                  },
                ]}
                onChange={(item: any) => {
                  const { startDate } = item.selection;
                  setStartDate(startDate);
                  setShowDepartureCalendar(false);
                }}
                rangeColors={["#0028A8"]}
                months={1}
                direction="horizontal"
                moveRangeOnFirstSelection={false}
                showDateDisplay={false}
              />
            </div>
          )}
        </div>

        {/* Return */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Return
          </label>
          <div
            className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white cursor-pointer"
            onClick={() => {
              setShowReturnCalendar(!showReturnCalendar);
              setShowDepartureCalendar(false);
            }}
          >
            <Calendar size={16} color="black" className="mr-2" />
            <span className="text-gray-800">
              {endDate ? endDate.toDateString() : "Select return date"}
            </span>
          </div>

          {showReturnCalendar && (
            <div className="absolute mt-2 z-10 shadow-xl border border-gray-200 rounded-lg bg-white">
              <DateRange
                ranges={[
                  {
                    startDate: endDate || (startDate ?? new Date()),
                    endDate: endDate || (startDate ?? new Date()),
                    key: "selection",
                  },
                ]}
                minDate={startDate || new Date()}
                onChange={(item: any) => {
                  const { endDate } = item.selection;
                  setEndDate(endDate);
                  setShowReturnCalendar(false);
                }}
                rangeColors={["#0028A8"]}
                months={1}
                direction="horizontal"
                moveRangeOnFirstSelection={false}
                showDateDisplay={false}
              />
            </div>
          )}
        </div>
      </div>

    
    </>
  );
};

export default RoundTrip;
