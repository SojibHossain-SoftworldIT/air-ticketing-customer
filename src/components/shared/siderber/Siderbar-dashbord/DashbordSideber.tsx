"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, FileText, Gift, Settings, LogOut, CirclePlus } from "lucide-react";
import { useGetMeQuery, useProfilePhotoUpdateMutation } from "@/redux/featured/auth/authApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DashboardSidebar = () => {
  const { data: getUserdata, isLoading, refetch } = useGetMeQuery({});
  const [profilePhotoUpdate] = useProfilePhotoUpdateMutation();
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);
  const user = getUserdata?.data;
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoUpload = async (e: any) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profilePhoto", file);

    try {
      const res = await profilePhotoUpdate(formData).unwrap();
      refetch();
      console.log("Photo Updated:", res);
    } catch (error) {
      console.log("Upload Error:", error);
    }
  };

  const menus = [
    { name: "My Profile", icon: <User size={18} />, path: "/dashbord/profile" },
    { name: "My Bookings", icon: <FileText size={18} />, path: "/dashbord/bookings" },
    { name: "Rewards & Points", icon: <Gift size={18} />, path: "/dashbord/rewards" },
    { name: "Settings", icon: <Settings size={18} />, path: "/dashbord/settings" },
  ];

  return (
    <div className="w-72 h-[525px] bg-[#FAFBFC] rounded-2xl p-6">
      <div className="flex flex-col items-center mb-10 relative">
        <div className="relative">
          {isLoading ? (
            <Skeleton circle width={80} height={80} />
          ) : (
            <>
              {user?.profilePhoto ? (
                <img
                  src={user.profilePhoto}
                  alt="Profile Photo"
                  className="w-20 h-20 rounded-full object-cover shadow-md"
                />
              ) : (
                <div className="w-20 h-20 bg-[#0028A8] text-white flex items-center justify-center rounded-full shadow-md">
                  <User size={36} />
                </div>
              )}
            </>
          )}

          <input
            type="file"
            ref={fileInputRef}
            onChange={handlePhotoUpload}
            className="hidden"
            accept="image/*"
          />

          {!isLoading && (
            <button
              onClick={handlePhotoClick}
              className="absolute bottom-0 right-0 w-8 h-8 bg-zinc-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#0028A8] transition-colors"
            >
              <CirclePlus size={20} />
            </button>
          )}
        </div>

        {/* Name + Email */}
        <h2 className="mt-4 text-lg font-semibold text-gray-800">
          {isLoading ? <Skeleton width={120} /> : `${user?.firstName} ${user?.lastName}`}
        </h2>

        <p className="text-xs text-gray-500 mt-1">
          {isLoading ? <Skeleton width={150} /> : user?.email}
        </p>
      </div>

      <ul className="space-y-3">
        {isLoading
          ? Array(4)
            .fill(0)
            .map((_, i) => <Skeleton key={i} height={40} borderRadius={8} />)
          : menus.map((menu) => (
            <li key={menu.name}>
              <Link
                href={menu.path}
                onClick={() => setActive(menu.path)}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition ${active === menu.path
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

      <div className="mt-6">
        {isLoading ? (
          <Skeleton height={40} borderRadius={8} />
        ) : (
          <button
            onClick={() => alert("Logout clicked!")}
            className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg w-full transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default DashboardSidebar;
