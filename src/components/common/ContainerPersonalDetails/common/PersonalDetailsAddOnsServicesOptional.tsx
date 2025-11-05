"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const PersonalDetailsAddOnsServicesOptional = () => {
  const [seatSelected, setSeatSelected] = useState(true);
  const [baggage, setBaggage] = useState("None");
  const [meal, setMeal] = useState("Standard");

  const containerClasses =
    "flex items-center justify-between border border-gray-200 rounded-xl p-4  transition";
  const titleClasses = "text-sm font-medium text-gray-900";
  const rowClasses = "flex items-start space-x-3";
  const selectClasses =
    "appearance-none border border-gray-300 rounded-md py-1.5 pl-3 pr-8 text-sm text-gray-700 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";

  return (
    <div className="w-full  bg-white rounded-2xl border border-gray-200 p-6 ">
      <h2 className="text-lg font-normal text-gray-900 mb-6">
        Add-ons & Services{" "}
        <span className="font-normal text-gray-500">(Optional)</span>
      </h2>

      <div className="space-y-4">
        {/* Seat Selection */}
        <div className={containerClasses}>
          <div className={rowClasses}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3405/3405858.png"
              alt="Seat"
              className="w-8 h-8"
            />
            <div>
              <h3 className={titleClasses}>Seat Selection</h3>
              <p className="text-sm text-gray-500">
                Choose your preferred seat location
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="text-sm text-blue-600 font-medium">
              + BDT 1,500/person
            </span>
            <input
              type="checkbox"
              checked={seatSelected}
              onChange={() => setSeatSelected(!seatSelected)}
              className="w-5 h-5 accent-blue-600 cursor-pointer rounded"
            />
          </div>
        </div>

        {/* Extra Baggage */}
        <div className={containerClasses}>
          <div className={rowClasses}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2331/2331966.png"
              alt="Baggage"
              className="w-8 h-8"
            />
            <div>
              <h3 className={titleClasses}>Extra Baggage</h3>
              <p className="text-sm text-gray-500">
                Add extra baggage allowance{" "}
                <span className="text-blue-600 font-medium">(10kg per unit)</span>
              </p>
            </div>
          </div>

          <div className="relative">
            <select
              value={baggage}
              onChange={(e) => setBaggage(e.target.value)}
              className={selectClasses}
            >
              {["None", "10kg", "20kg", "30kg"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Meal Preference */}
        <div className={containerClasses}>
          <div className={rowClasses}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3480/3480521.png"
              alt="Meal"
              className="w-8 h-8"
            />
            <div>
              <h3 className={titleClasses}>Meal Preference</h3>
              <p className="text-sm text-gray-500">Select your dietary preference</p>
            </div>
          </div>

          <div className="relative">
            <select
              value={meal}
              onChange={(e) => setMeal(e.target.value)}
              className={selectClasses}
            >
              {["Standard", "Vegetarian", "Vegan", "Halal"].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsAddOnsServicesOptional;
