import { User } from "lucide-react";
import React, { useState } from "react";
import { FaBus } from "react-icons/fa";

const BusSelectYourSeatsLeft = () => {
    const [selectedSeat, setSelectedSeat] = useState("E4");

    const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const seats = [1, 2, 3, 4];

    const blockedMale = ["A1", "A2", "A4", "B1", "B2", "B4", "C1", "C2", "C4", "D1", "D4", "E2", "I1", "I2", "I4", "H1", "H4", "J1", "J2", "J4"];
    const blockedFemale = ["A3", "B3", "C3", "D3", "E3", "G3"];

    const handleSelect = (seat: any) => {
        if (![...blockedMale, ...blockedFemale].includes(seat)) {
            setSelectedSeat(seat);
        }
    };

    const getSeatColor = (seat: any) => {
        if (selectedSeat === seat) return "bg-[#155DFC] text-white";
        if (blockedMale.includes(seat)) return "bg-[#51A2FF] text-white cursor-not-allowed";
        if (blockedFemale.includes(seat)) return "bg-[#FB64B6] text-white cursor-not-allowed";
        return "bg-white border text-gray-700 hover:bg-gray-100";
    };

    return (
        <div className="p-6 bg-[#FAFBFC] min-h-screen w-full border shadow-sm rounded-[14px]">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-gray-800 font-medium text-lg">Select Your Seats</h2>
                <p className="text-gray-600 text-sm">
                    1 of 1 selected
                </p>
            </div>

            {/* Legend */}
            <div className="bg-[#F0F2F5] rounded-xl px-4 py-5 flex gap-4 mb-6 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border border-gray-300 rounded"></div> Available
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-700 rounded"></div> Selected
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-400 rounded"></div> Blocked (Male)
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-pink-400 rounded"></div> Blocked (Female)
                </div>
            </div>

            {/* Door and Driver Row */}
            <div className="flex justify-between items-center mb-4 bg-white border rounded-xl px-4 py-4 text-gray-700">
                <span>Door →</span>
                <span className="flex items-center gap-2">Driver <FaBus className="text-red-500" /></span>
            </div>

            {/* Seats Layout */}
            <div className="flex  flex-col gap-2">
                {rows.map((row) => (
                    <div key={row} className="flex justify-center gap-4">
                        {/* Left 2 seats */}
                        <div className="flex gap-2">
                            {seats.slice(0, 2).map((num) => {
                                const seat = row + num;
                                return (
                                    <>
                                    <button
                                        key={seat}
                                        onClick={() => handleSelect(seat)}
                                        disabled={[...blockedMale, ...blockedFemale].includes(seat)}
                                        className={`w-16 h-16 rounded-[10px] flex flex-col items-center justify-center text-sm font-medium transition ${getSeatColor(seat)}`}
                                    >
                                        <span className="text-[10px]"><User /></span>
                                        {seat}
                                    </button>
                                    </>
                                );
                            })}
                        </div>

                        {/* Aisle divider */}
                        <div className="w-4 border-r border-gray-300"></div>

                        <div className="w-4 border-r border-gray-300"></div>

                        {/* Right 2 seats */}
                        <div className="flex gap-2">
                            {seats.slice(2, 4).map((num) => {
                                const seat = row + num;
                                return (
                                    <button
                                        key={seat}
                                        onClick={() => handleSelect(seat)}
                                        disabled={[...blockedMale, ...blockedFemale].includes(seat)}
                                        className={`w-16 h-16 rounded-[10px] flex flex-col items-center justify-center text-sm font-medium transition ${getSeatColor(seat)}`}
                                    >
                                        <span className="text-[10px]"><User /></span>
                                        {seat}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BusSelectYourSeatsLeft;
