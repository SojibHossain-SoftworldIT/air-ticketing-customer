"use client";

import { Search } from "lucide-react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "@/redux/featured/auth/authSlice";

const CenterTop = () => {
  const [active, setActive] = useState("Home");
  const token = useSelector(selectCurrentToken); // ✅ Get token from Redux

  const menus = ["Home", "About us", "Contact us", "Flight Schedule"];

  return (
    <>
      {token ? (
        <div className="flex space-x-7 py-3 pl-28 justify-center border-gray-200">
          {menus.map((menu) => (
            <button
              key={menu}
              onClick={() => setActive(menu)}
              className={`text-sm font-medium transition-all duration-200 rounded-md px-3 py-1 ${
                active === menu
                  ? "text-[#0028A8] bg-blue-100"
                  : "text-gray-600 hover:text-blue-700"
              }`}
            >
              {menu}
            </button>
          ))}
        </div>
      ) : (
        <div className="flex space-x-7 py-3 justify-center">
          <div className="flex items-center gap-3 md:w-[320px] bg-[#FFFFFF] border border-[#E2E8F0] rounded-lg px-4 py-2 shadow-sm">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search destinations"
              className="w-full bg-transparent focus:outline-none text-sm text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CenterTop;
