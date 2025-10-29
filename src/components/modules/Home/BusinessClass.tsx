"use client"
import React, { useState } from "react";
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
import { FaChild } from "react-icons/fa";

const BusinessClass = () => {
  const [showPassengers, setShowPassengers] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(1);
  const [selectedTab, setSelectedTab] = useState("Flights");
  const [tripType, setTripType] = useState("One-way");
  const [flights, setFlights] = useState([
    { id: 1, from: "", to: "", departure: "", return: "" },
  ]);
  const total = adults + children + infants;
  const addFlight = () => {
    setFlights([...flights, { id: Date.now(), from: "", to: "", departure: "", return: "" }]);
  };

  const removeFlight = (id: any) => {
    setFlights(flights.filter((f) => f.id !== id));
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white absolute top-72  rounded-2xl shadow-md ">

        {/* Tabs */}
        <div className="flex justify-center bg-[#E6EAF6] rounded-t-2xl border-b p-4 mb-6">
          <div className="flex text-gray-600 font-medium flex-wrap gap-2">
            {[
              { name: "Flights", icon: <Plane size={16} /> },
              { name: "Bus", icon: <Bus size={16} /> },
              { name: "Launch", icon: <Plane size={16} /> },
              { name: "Train", icon: <Plane size={16} /> },
              { name: "Hotel", icon: <Hotel size={16} /> },
              { name: "Visa", icon: <Plane size={16} /> },
              { name: "Packages", icon: <Package size={16} /> },
              { name: "Offers", icon: <HandCoins size={16} /> },
            ].map((tab) => (
              <button
                key={tab.name}
                onClick={() => setSelectedTab(tab.name)}
                className={`px-5 py-2 rounded-2xl flex items-center gap-2 ${selectedTab === tab.name
                  ? "bg-black text-white font-semibold"
                  : "text-[#333C59]"
                  }`}
              >
                {tab.icon} {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Flights Content */}
        {selectedTab === "Flights" && (
          <div className="px-8 py-8">
            {/* Trip Type + Class */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex gap-3">
                {[
                  { name: "One-way", icon: <Plane size={16} /> },
                  { name: "Round Trip", icon: <Plane size={16} /> },
                  { name: "Multi-city", icon: <MapPin size={16} /> }
                ].map((type) => (
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
                <button
                  onClick={() => setShowPassengers(!showPassengers)}
                  className="bg-black px-4 py-2 rounded-lg text-white font-medium hover:bg-gray-800 flex items-center gap-2"
                >
                  Add Passenger <Plus size={16} />
                </button>

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
              <>
                {/* One-way Form */}
                <div className="grid grid-cols-4 gap-6 items-start bg-white border border-gray-200 rounded-xl p-6">
                  {/* From */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      From
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
                      <span>A hint message to guide user.</span>
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

                {/* Button */}
                <div className="flex justify-end mt-8">
                  <button className="bg-[#0028A8] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md flex items-center gap-2">
                    <Search size={18} /> Find Ticket
                  </button>
                </div>
              </>
            )}

            {/* Round Trip or Multi-city — you can add more layouts here */}
            {tripType === "Round Trip" && (
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
            )}
            {tripType === "Multi-city" && (
              <div className="w-full  max-w-6xl mx-auto mt-10 space-y-6">
                {flights.map((flight, index) => (
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
            )}
          </div>
        )}
        {selectedTab !== "Flights" && (
          <div className="flex flex-col items-center justify-center py-16 text-center bg-white  border-gray-100 rounded-2xl">


            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              {selectedTab} Booking Coming Soon
            </h2>
            <p className="text-sm text-gray-500 max-w-md">
              We’re working hard to bring {selectedTab.toLowerCase()} booking to you.
              Stay tuned for updates — it’ll be available very soon!
            </p>

            <button className="mt-6 bg-[#0028A8] text-white font-medium px-5 py-2.5 rounded-md hover:bg-blue-700 transition">
              Notify Me
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default BusinessClass;
