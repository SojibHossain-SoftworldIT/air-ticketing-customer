"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, FileText, Gift, Settings, LogOut } from "lucide-react";

const DashboardSidebar = () => {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);

  const menus = [
    { name: "My Profile", icon: <User size={18} />, path: "/dashbord/profile" },
    { name: "My Bookings", icon: <FileText size={18} />, path: "/dashbord/bookings" },
    { name: "Rewards & Points", icon: <Gift size={18} />, path: "/dashbord/rewards" },
    { name: "Settings", icon: <Settings size={18} />, path: "/dashbord/settings" },
  ];

  return (
    <div className="w-72 h-[525px] bg-[#FAFBFC] rounded-2xl p-6 ">
      {/* User Info */}
      <div className="flex flex-col items-center mb-10">
        <div className="w-20 h-20 bg-blue-700 text-white flex items-center justify-center rounded-full mb-4">
          <User size={36} />
        </div>
        <h2 className="text-lg font-semibold text-gray-800">Mohammad Rahman</h2>
        <p className="text-lg text-gray-500 mt-2 font-normal">rahman@email.com</p>
      </div>

      {/* Menu Items */}
      <ul className="space-y-3 ">
        {menus.map((menu) => (
          <li key={menu.name}>
            <Link
              href={menu.path}
              onClick={() => setActive(menu.path)}
              className={`flex items-center w-full text-left gap-3 px-4 py-2 rounded-lg font-medium transition
                ${
                  active === menu.path
                    ? "bg-[#E6EAF6] text-[#0028A8]"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {menu.icon}
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Logout */}
      <div className="mt-6">
        <button
          onClick={() => alert("Logout clicked!")}
          className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg w-full text-left transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
