import React from "react";

const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-[#2563eb] rounded-full animate-spin mb-4"></div>
      <h2 className="text-lg font-semibold text-gray-700">Loading...</h2>
      <p className="text-sm text-gray-500 mt-1">Please wait a moment</p>
    </div>
  );
};

export default LoadingScreen;
