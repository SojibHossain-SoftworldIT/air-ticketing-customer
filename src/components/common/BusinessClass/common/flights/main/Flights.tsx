"use client"
import React, { useState } from 'react'
import {
    Calendar,
    Plane,
    ArrowLeftRight,
    Search,
    Info,
    Bus,
    Hotel,
    Package,
    HandCoins,
    Mail,
    MapPin, X, Plus,
    Minus,
    User,
    Baby,
    Users
} from "lucide-react";
import { FaChild } from 'react-icons/fa';
import OneWay from '../common/OneWay';
import RoundTrip from '../common/RoundTrip';
import MultiCity from '../common/MultiCity';
import Btn from '@/components/common/Buttom/Btn';

const Flights = () => {
    const tags = [
        { name: "One-way", icon: <Plane size={16} /> },
        { name: "Round Trip", icon: <Plane size={16} /> },
        { name: "Multi-city", icon: <MapPin size={16} /> }
    ];
    const [flightList, setFlightList] = useState([
        { id: 1, from: "", to: "", departure: "", return: "" },
    ]);

    const addFlight = () => {
        setFlightList([
            ...flightList,
            { id: Date.now(), from: "", to: "", departure: "", return: "" },
        ]);
    };

    const removeFlight = (id: number) => {
        setFlightList(flightList.filter((f) => f.id !== id));
    };
    const [infants, setInfants] = useState(1);
    const [add, setAdd] = useState(true);
    const [showPassengers, setShowPassengers] = useState(false);
    const [adults, setAdults] = useState(2);
    const [tripType, setTripType] = useState("One-way");
    const [children, setChildren] = useState(1);
    const total = adults + children + infants;
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

                <div className="flex justify-between items-center gap-4">
                    {/* Button */}
                    <Btn
                        total={total}
                        add={add}
                        text="Add Passenger"
                        icon={<Plus size={16} />}
                        show={showPassengers}
                        setShow={setShowPassengers}
                    />

                    {/* Passenger Section */}
                    {showPassengers && (
                        <div className="absolute top-44 left-48  bg-white border rounded-2xl shadow-lg p-5 w-[750px] z-10">
                            {/* Title */}
                            <div className="flex items-center gap-2 mb-4">
                                <Users size={18} className="text-blue-600" />
                                <h2 className="text-lg font-medium text-gray-800">
                                    Number of Passengers
                                </h2>
                                <button
                                    onClick={() => {
                                        setAdd(false); 
                                        setShowPassengers(false); 
                                    }}
                                    className="ml-auto bg-[#063BE8] px-4 py-2 rounded-lg text-white hover:text-gray-200"
                                >
                                    Add
                                </button>

                            </div>

                            {/* Passenger Controls */}
                            <div className="grid grid-cols-3 gap-4 mb-4">
                                {/* Adults */}
                                <div className="border rounded-xl p-4 ">

                                    <div className=" flex items-center    mb-6 gap-3">
                                        <div className=" bg-[#E6EAF6] p-2 rounded-full flex items-center justify-center">
                                            <User className=" text-blue-600 " size={22} />
                                        </div>
                                        <div>
                                            <p className="font-medium">Adults</p>
                                            <p className="text-xs text-gray-500 mb-3">12+ years</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between gap-3">
                                        <button
                                            onClick={() => setAdults(Math.max(1, adults - 1))}
                                            className="border-2 border-[#063BE8] text-[#063BE8] rounded-md w-8 h-8 flex items-center justify-center"
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="font-semibold w-4">{adults}</span>
                                        <button
                                            onClick={() => setAdults(adults + 1)}
                                            className="border-2 border-[#063BE8] text-[#063BE8] rounded-md w-8 h-8 flex items-center justify-center"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>

                                {/* Children */}
                                <div className="border rounded-xl p-4 text-center">

                                    <div className=" flex items-center   mb-6 gap-3">
                                        <div className=" bg-[#FEF4E6] p-2 rounded-full flex items-center justify-center">
                                            <FaChild className=" text-yellow-600 " size={22} />
                                        </div>
                                        <div>
                                            <p className="font-medium">Children</p>
                                            <p className="text-xs text-gray-500 mb-3">2–12 years</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between gap-3">
                                        <button
                                            onClick={() => setChildren(Math.max(0, children - 1))}
                                            className="border-2 border-[#F79009] text-[#F79009] rounded-md w-8 h-8 flex items-center justify-center"
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="font-semibold w-4">{children}</span>
                                        <button
                                            onClick={() => setChildren(children + 1)}
                                            className="border-2 border-[#F79009] text-[#F79009] rounded-md w-8 h-8 flex items-center justify-center"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>

                                {/* Infants */}
                                <div className="border rounded-xl p-4 text-center">

                                    <div className=" flex items-center   mb-6 gap-3">
                                        <div className=" bg-[#E7F8F0] p-2 rounded-full flex items-center justify-center">
                                            <Baby className=" text-green-600 " size={22} />
                                        </div>
                                        <div>
                                            <p className="font-medium">Infants</p>
                                            <p className="text-xs text-gray-500 mb-3">0–2 years</p>
                                        </div>
                                    </div>





                                    <div className="flex items-center justify-between gap-3">
                                        <button
                                            onClick={() => setInfants(Math.max(0, infants - 1))}
                                            className="border-2 border-[#12B76A] text-[#12B76A] rounded-md w-8 h-8 flex items-center justify-center"
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span className="font-semibold w-4">{infants}</span>
                                        <button
                                            onClick={() => setInfants(infants + 1)}
                                            className="border-2 border-[#12B76A] text-[#12B76A] rounded-md w-8 h-8 flex items-center justify-center"
                                        >
                                            <Plus size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Info Footer */}
                            <div className="bg-[#000B2F] gap-2 flex justify-center items-center text-white text-sm text-center py-2 rounded-lg">
                                <Info size={16} className=" text-gray-100" />  Total Passengers: {total} | Infants must be accompanied by an adult
                            </div>
                        </div>
                    )}


                    <select className="border border-blue-600 rounded-md px-3 py-2 text-[#1A5ECE]">
                        <option>Business Class</option>
                        <option>Economy</option>
                        <option>First Class</option>
                    </select>
                </div>

            </div>

            {/* Show fields depending on trip type */}
            {tripType === "One-way" && (
                <OneWay />
            )}

            {/* Round Trip or Multi-city — you can add more layouts here */}
            {tripType === "Round Trip" && (
                <RoundTrip />
            )}
            {tripType === "Multi-city" && (
                <MultiCity flightList={flightList} removeFlight={removeFlight} addFlight={addFlight} />
            )}
        </div>
    )
}

export default Flights
