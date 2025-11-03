import React from 'react'
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

const RoundTrip = () => {
  return (
      <>
                    {/* One-way Form */}
                    <div className="grid grid-cols-4 gap-6 items-start bg-white border border-gray-200 rounded-xl p-6">
                        {/* From */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Departure From
                            </label>
                            <div className="flex gap-2 items-center border border-gray-300 rounded-lg px-3 py-2 relative bg-white">
                                <Mail size={16} color="black" />
                                <input
                                    type="text"
                                    placeholder="Placeholder text"
                                    className="outline-none flex-1 text-gray-800 placeholder-gray-400"
                                />
                                <button
                                    type="button"
                                    className="absolute -right-8 top-1/2 -translate-y-1/2 bg-[#E6EAF6] p-2 rounded-full shadow-sm hover:bg-blue-700"
                                >
                                    <ArrowLeftRight size={20} color="#0028A8" />
                                </button>
                            </div>
                            <div className="flex items-center mt-2 text-xs text-gray-500">
                                <Info size={12} className="mr-1 text-gray-400" />
                                <span>Start typing city or airport code</span>
                            </div>
                        </div>

                        {/* To */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Arrival To
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
                                <Plane size={16} color="black" className="mr-2" />
                                <input
                                    type="text"
                                    placeholder="Dubai (DXB)"
                                    className="outline-none flex-1 text-gray-800 placeholder-gray-400"
                                />
                            </div>
                            <div className="flex items-center mt-2 text-xs text-gray-500">
                                <Info size={12} className="mr-1 text-gray-400" />
                                <span>Where do you want to go?</span>
                            </div>
                        </div>

                        {/* Departure */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Departure
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
                                <Calendar size={16} color="black" className="mr-2" />
                                <input
                                    type="text"
                                    placeholder="Oct 20"
                                    className="outline-none flex-1 text-gray-800 placeholder-gray-400"
                                />
                            </div>
                            <div className="flex items-center mt-2 text-xs text-gray-500">
                                <Info size={12} className="mr-1 text-gray-400" />
                                <span>Select travel date</span>
                            </div>
                        </div>

                        {/* Return (disabled for one-way) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Return
                            </label>
                            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
                                <Calendar size={16} color="black" className="mr-2" />
                                <input
                                    type="text"
                                    placeholder="Oct 27"
                                    className="outline-none flex-1 text-gray-800 placeholder-gray-400"
                                />
                            </div>
                            <div className="flex items-center mt-2 text-xs text-gray-500">
                                <Info size={12} className="mr-1 text-gray-400" />
                                <span>Return date</span>
                            </div>
                        </div>
                    </div>

                    {/* Button */}
                    <div className="flex justify-end mt-8">
                        <button className="bg-[#0028A8] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md flex items-center gap-2">
                            <Search size={18} /> Find Ticket
                        </button>
                    </div>
                </>
  )
}

export default RoundTrip
