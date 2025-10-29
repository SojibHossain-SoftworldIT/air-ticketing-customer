import React, { useState } from "react";

const CenterTop = () => {
  const [active, setActive] = useState("Home");

  const menus = ["Home", "About us", "Contact us", "Flight Schedule"];

  return (
    <div className="flex space-x-7  py-3 pl-28 justify-center border-gray-200">
      {menus.map((menu) => (
        <button
          key={menu}
          onClick={() => setActive(menu)}
          className={`text-sm font-medium transition-all duration-200 rounded-md px-3 py-1
            ${
              active === menu
                ? "text-[#0028A8] bg-blue-100"
                : "text-gray-600 hover:text-blue-700"
            }`}
        >
          {menu}
        </button>
      ))}
    </div>
  );
};

export default CenterTop;
