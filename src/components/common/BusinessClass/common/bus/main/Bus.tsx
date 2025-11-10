
"use client"
import React, { useState } from 'react'
import {
    Plane,
    Search,
    Repeat2,
    Plus,
    Minus
} from "lucide-react";
import OneWay from '../common/OneWay';
import RoundTrip from '../common/RoundTrip';
import NumberOfTicketsBtn from '@/components/common/NumberOfTicketsBtn/NumberOfTicketsBtn';

const Bus = ({ setFindTicket }: any) => {
    const tags = [
        { name: "One-way", icon: <Plane size={16} /> },
        { name: "Round Trip", icon: <Repeat2 size={16} /> }
    ];
    const [tripType, setTripType] = useState("One-way");
    const [count ,setCount] = useState(1);

    return (
        <div className="px-8 py-8">
            {/* Trip Type + Class */}
            <div className="flex justify-between items-center mb-6">
                <div className="flex gap-3">
                    {tags.map((type) => (
                        <button
                            key={type.name}
                            onClick={() => setTripType(type.name)}
                            className={`px-4 py-2 flex gap-2 items-center justify-center rounded-md ${tripType === type.name
                                ? "bg-[#0028A8] text-white shadow-lg font-semibold"
                                : "border text-gray-700"
                                }`}
                        >
                            {type.icon} {type.name}
                        </button>
                    ))}
                </div>
               <NumberOfTicketsBtn count={count} setCount={setCount} />

            </div>

            {/* Show fields depending on trip type */}
            {tripType === "One-way" && (
                <>
                    <OneWay />
                    <div className="flex justify-end mt-8">
                        <button onClick={() => setFindTicket((e: any) => !e)} className="bg-[#0028A8] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md flex items-center gap-2">
                            <Search size={18} /> Find Ticket
                        </button>
                    </div>
                </>
            )}

            {tripType === "Round Trip" && (
                <>
                    <RoundTrip />
                    <div className="flex justify-end mt-8">
                        <button onClick={() => setFindTicket((e: any) => !e)} className="bg-[#0028A8] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md flex items-center gap-2">
                            <Search size={18} /> Find Ticket
                        </button>
                    </div>
                </>
            )}

        </div>
    )
}

export default Bus
