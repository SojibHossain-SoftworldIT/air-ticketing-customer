import React from "react";

const BusUserDetails = () => {
  return (
    <div className="w-full bg-white rounded-2xl p-6  border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">User Details</h2>

      {/* ==== Seat A1 ==== */}
      <div className="border border-gray-200 rounded-xl p-5 mb-6">
        <h3 className="text-base font-semibold text-gray-700 mb-4">Sit–A1</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Passport or ID name"
              className="w-full h-11 rounded-lg shadow-xs border border-gray-300 px-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Gender</label>
            <select className="w-full shadow-xs h-11 rounded-lg border border-gray-300 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
      </div>

      {/* ==== Seat A2 ==== */}
      <div className="border border-gray-200 rounded-xl p-5">
        <h3 className="text-base font-semibold text-gray-700 mb-4">Sit–A2</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Passport or ID name"
              className="w-full h-11 rounded-lg border shadow-xs border-gray-300 px-3 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Gender</label>
            <select className="w-full h-11 shadow-xs rounded-lg border border-gray-300 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusUserDetails;
