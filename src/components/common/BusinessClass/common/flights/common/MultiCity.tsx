"use client"
import React from 'react'
import {
    Calendar,
    Plane,
    ArrowLeftRight,
    Search,
    Info,
  X, Plus,
} from "lucide-react";

const MultiCity = ( {flightList , removeFlight , addFlight } : any) => {
    
  return (
   <>
                
                <div className="w-full  max-w-6xl mx-auto mt-10 space-y-6">
                    {flightList.map((flight: any, index: any) => (
                        <div
                            key={flight.id}
                            className="flex gap-6 items-start bg-white border border-gray-200 rounded-xl px-2 py-2 relative"
                        >
                            <div className="flex pt-4 flex-col gap-7 w-full h-full">
                                {/* Flight Number */}
                                <div className="  px-2 text-center text-sm font-medium text-[#0028A8]">
                                    Flight {index + 1}
                                </div>

                                {/* Delete Button */}
                                <button
                                    onClick={() => removeFlight(flight.id)}
                                    className="  bg-white text-[#F04438] px-5 py-2 rounded-md border border-[#F04438] hover:bg-red-100 flex items-center gap-1 text-sm"
                                >
                                    Delete <X size={14} />
                                </button>


                            </div>

                            {/* From */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Departure From</label>
                                <div className="flex gap-2 items-center border border-gray-300 rounded-lg px-3 py-2 relative bg-white">
                                    <Plane size={16} color="black" />
                                    <input
                                        type="text"
                                        placeholder="Dhaka (DAC)"
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">Arrival To</label>
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
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

                            {/* Return */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
                                <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
                                    <Calendar size={16} className="text-gray-400 mr-2" />
                                    <input
                                        type="text"
                                        placeholder="Oct 27"
                                        disabled
                                        className="outline-none flex-1 bg-transparent text-gray-400 placeholder-gray-400"
                                    />
                                </div>
                                <div className="flex items-center mt-2 text-xs text-gray-500">
                                    <Info size={12} className="mr-1 text-gray-400" />
                                    <span>Return date</span>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Add Flight & Find Ticket */}
                    <div className="flex justify-between items-center pt-4">
                        <button
                            onClick={addFlight}
                            className="bg-black  text-white font-medium px-4 py-3 rounded-md flex items-center gap-2"
                        >
                            Add Flight  <Plus size={18} />
                        </button>

                        <button className="bg-[#0028A8] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md flex items-center gap-2">
                            <Search size={18} /> Find Ticket
                        </button>
                    </div>
                </div>
                </>
  )
}

export default MultiCity
