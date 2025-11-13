"use client";
import React from "react";
import { Zap, Coffee, Fan } from "lucide-react";

const PersonalDetailsBusSummary = () => {
    return (
        <div className="w-full bg-[#F0F2F5] border border-[#FAFBFC] rounded-2xl p-5 flex flex-col gap-4">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-gray-800 font-semibold">
                    🎟️ Ticket Summary
                </h2>
                <span className="bg-green-100 text-green-700 px-4 py-1 rounded-md text-sm font-medium">
                    Confirmed Seats
                </span>
            </div>

            {/* Main Content */}
            <div className="flex flex-col  bg-white rounded-[10px]  p-6">

                <div className="flex justify-between items-center">

                {/* Left Section */}
                <div className="flex items-center  flex-col gap-1">
                    <img src="🚌.png" alt="bus" className="w-9 h-10 object-contain" />
                    <h3 className="font-normal text-gray-800 text-sm">
                        Green Line Paribahan
                    </h3>
                    <p className="text-xs text-gray-500">GL-DH-234</p>
                    <p className="text-xs text-yellow-500 font-medium flex items-center gap-1">
                        ⭐ 4.5
                    </p>
                </div>

                {/* Middle Section */}
                <div className="flex gap-8   px-8">



                    <div className="flex flex-col items-center">
                        <p className="text-2xl font-normal">08:00</p>
                        <p className="text-sm text-[#8A8F9F]">Dhaka</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <p className="text-sm text-gray-500">6h 30m</p>
                        <div className="flex items-center  my-1">
                            <div className="w-12 bg-[#B0B3BF] h-0.5 rounded-full" />
                            <div className="bg-[#063BE8]  w-20 h-2 rounded-full "></div>
                            <div className="w-12 bg-[#B0B3BF] h-0.5 rounded-full" />
                        </div>
                        <span className="text-xs bg-[#E6EBFD] text-blue-700 px-3 py-2 rounded-lg">
                            AC
                        </span>
                    </div>

                    <div className="flex flex-col items-center ">
                        <p className="text-2xl font-normal">14:30</p>
                        <p className="text-sm text-[#8A8F9F]">Chittagong</p>
                    </div>
                </div>


                </div>
                
            {/* Bottom Row */}
            <div className="flex justify-between items-center px-2 text-sm mt-2 border-t pt-2 text-gray-600">
                <div className="flex items-center gap-4">
                    <p className="text-green-600 font-medium">12 seats available</p>
                    {/* <WiFi className="w-4 h-4" /> */}
                    <Zap className="w-4 h-4" />
                    <Coffee className="w-4 h-4" />
                    <Fan className="w-4 h-4" />
                </div>
                <div className="text-gray-500">
                    3 boarding points • 3 dropping points
                </div>
            </div>

            </div>

        </div>
    );
};

export default PersonalDetailsBusSummary;
