"use client";
import React from "react";
import { Wifi, Zap, Coffee, Monitor, RefreshCw, Star } from "lucide-react";

const busData = [
    {
        company: "Green Line Paribahan",
        code: "GL-DH-234",
        rating: 4.5,
        startTime: "08:00",
        startCity: "Dhaka",
        duration: "6h 30m",
        type: "AC",
        endTime: "14:30",
        endCity: "Chittagong",
        price: 1200,
        seats: 12,
        boardingPoints: 3,
        droppingPoints: 3,
        image:
            "🚌.png"
    },
    {
        company: "Shohag Elite",
        code: "SH-DH-152",
        rating: 4.3,
        startTime: "09:30",
        startCity: "Dhaka",
        duration: "7h 10m",
        type: "Non-AC",
        endTime: "16:40",
        endCity: "Cox’s Bazar",
        price: 950,
        seats: 7,
        boardingPoints: 4,
        droppingPoints: 2,
        image:
            "🚌.png"
    }
];

const BusCart = () => {
    return (
        <div className="flex flex-col gap-4">
            {busData.map((bus, index) => (
                <div
                    key={index}
                    className="w-full bg-white rounded-xl border border-[#E6EBFD] p-5 flex flex-col gap-4"
                >
                    <div className="flex justify-between items-center">
                        {/* Left Section */}
                        <div className="flex flex-col items-center gap-4">
                            <img src={bus.image} alt="bus" className="w-9 h-10 object-contain" />
                            <div className="text-center flex flex-col gap-2">
                                <h2 className="font-medium text-[#333C59] text-lg">{bus.company}</h2>
                                <div className="flex items-center text-sm font-normal justify-between gap-1 text-gray-500 ">
                                    <p >{bus.code}</p>
                                    <div className="flex items-center  gap-2">
                                        <Star size={14} color="#FDC700" /> <p >{bus.rating}</p> 
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Time Info */}
                        <div className="flex gap-14 border-r-2 border-[#E6EBFD] px-8">



                        <div className="flex flex-col items-center">
                            <p className="text-xl font-normal">{bus.startTime}</p>
                            <p className="text-sm text-[#8A8F9F]">{bus.startCity}</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="text-sm text-gray-500">{bus.duration}</p>
                            <div className="flex items-center  my-1">
                                <div className="w-14 bg-[#B0B3BF] h-0.5 rounded-full"/>
                                <div className="bg-[#063BE8]  w-28 h-3 rounded-full "></div>
                                <div className="w-14 bg-[#B0B3BF] h-0.5 rounded-full"/>
                            </div>
                            <span className="text-xs bg-[#E6EBFD] text-blue-700 px-3 py-2 rounded-lg">
                                {bus.type}
                            </span>
                        </div>

                        <div className="flex flex-col items-center ">
                            <p className="text-xl font-normal">{bus.endTime}</p>
                            <p className="text-sm text-[#8A8F9F]">{bus.endCity}</p>
                        </div>
                        </div>

                        {/* Price */}
                        <div className="text-right ">
                            <p className="text-sm text-gray-500">per seat</p>
                            <p className="text-2xl font-medium text-[#063BE8]">৳{bus.price}</p>
                            <button className="mt-2 px-7 py-2 bg-[#063BE8] text-white rounded-lg text-sm hover:bg-blue-700">
                                View Seats
                            </button>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center border-t pt-3">
                        <div className="flex gap-3 items-center">

                        <p className="text-[#12B76A] font-normal text-sm">{bus.seats} seats available</p>

                        <div className="flex items-center gap-3 text-gray-500">
                            <Wifi size={16} />
                            <Zap size={16} />
                            <Coffee size={16} />
                            <Monitor size={16} />
                            <RefreshCw size={16} />
                        </div>

                        </div>

                        <p className="text-gray-500 text-sm">
                            {bus.boardingPoints} boarding points • {bus.droppingPoints} dropping points
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BusCart;
