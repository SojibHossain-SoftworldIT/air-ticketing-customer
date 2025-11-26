import React from "react";
import {
  Plane,
  Wifi,
  UtensilsCrossed,
  Package,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import { FaPlaneDeparture } from "react-icons/fa";
import Link from "next/link";
import FlightDetails from "./FlightDetails";

const FlightCard = ({ flights, selectedFlight, setSelectedFlight, compareList , setCompareList, compareMode }: any) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {flights.map((flight: any) => (
        <div
          key={flight.id}
          className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-6 pt-4 pb-2">
            <div className="flex gap-2">
              {flight.tags.map((tag: any, i: any) => (
                <span
                  key={i}
                  className={`px-3 py-1 text-xs font-semibold rounded-sm border ${tag === "Best Value"
                    ? "bg-[#FEF4E6] text-[#F79009] border-[#F79009]"
                    : "bg-[#E7F8F0] text-[#12B76A] border-[#12B76A]"
                    }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-2 items-center">

              {/* Add To Compare Now Uses Props */}
              {
                compareMode ? (
                  <button
                    onClick={() => {
                      if (compareList.find((item: any) => item.id === flight.id)) {
                        setCompareList(compareList.filter((item: any) => item.id !== flight.id));
                      } else if (compareList.length < 2) {
                        setCompareList([...compareList, flight]);
                      }
                    }}
                    className={`text-sm font-medium px-5 py-2 rounded-lg mr-4
    ${compareList.find((item: any) => item.id === flight.id)
                        ? "bg-[#000B2F] text-white"
                        : "bg-[#E6EBFD] text-[#063BE8] hover:bg-[#D2DAFB]"}`}
                  >


                    {compareList.find((item: any) => item.id === flight.id)
                      ? "Selected"
                      : "Add To Compare +"}
                  </button>

                ) : (
                  
                  <button className="text-sm font-medium px-5 py-2 rounded-lg mr-4 bg-[#E6EBFD] text-[#063BE8] hover:bg-[#D2DAFB]" > Add To Compare +</button>
                )
              }



              <div className="flex gap-2 items-center text-[#545C74]">
                <CalendarDays />
                <p>Today</p>
              </div>
            </div>
          </div>

          {/* Main Section */}
          <div className="px-6 py-4 flex items-center justify-between">

            {/* Airline */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
                <FaPlaneDeparture className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-center">
                <p className="text-sm font-normal text-[#333C59]">{flight.airline}</p>
                <p className="text-xs text-gray-500">{flight.flightCode}</p>
                <p className="text-xs text-[#000B2F] mt-1 border rounded-sm p-1">{flight.classType}</p>
              </div>
            </div>

            {/* Times */}
            <div className="w-[60%] flex items-center justify-center px-8">
              <div className="text-start">
                <p className="text-2xl font-normal text-gray-900">{flight.depart}</p>
                <p className="text-sm font-normal text-gray-600 mt-1">{flight.from}</p>
                <p className="text-xs text-gray-500">{flight.fromCity}</p>
              </div>

              <div className="flex-1 mx-6 text-center">
                <p className="text-xs text-gray-500 mb-1">{flight.duration}</p>
                <div className="w-full flex items-center">
                  <div className="flex-1 h-0.5 bg-gray-300"></div>
                  <Plane className="w-6 h-6 text-[#063BE8] mx-2" />
                  <div className="flex-1 h-0.5 bg-gray-300"></div>
                </div>
                <p className="text-xs font-medium text-green-600 mt-1">Non-stop</p>
              </div>

              <div className="text-end">
                <p className="text-2xl font-normal text-gray-900">{flight.arrive}</p>
                <p className="text-sm font-normal text-gray-600 mt-1">{flight.to}</p>
                <p className="text-xs text-gray-500">{flight.toCity}</p>
              </div>
            </div>

            {/* Price + Buttons */}
            <div className="flex flex-col items-end w-44 border-l border-l-[#E6EBFD] pl-6">
              <div className="text-right mb-3">
                <p className="text-xs text-gray-500 mb-1">Starting from</p>
                <p className="text-3xl font-normal text-[#063BE8]">{flight.price}</p>
                <p className="text-xs text-gray-500">per passenger</p>
              </div>

              <div className="w-full flex flex-col items-center">
                <Link href={"/personalDetails"}>
                  <button className="w-full bg-[#063BE8] hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors">
                    Select Flight
                  </button>
                </Link>

                <button
                  onClick={() => setSelectedFlight(flight)}
                  className="text-[#063BE8] text-lg font-medium mt-2 flex items-center gap-1 hover:text-blue-700"
                >
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Amenities Footer */}
          <div className="border-t mx-6" />
          <div className="px-6 py-3 flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center gap-6">
              {flight.amenities.includes("20kg Check-in") && (
                <div className="flex items-center gap-1.5">
                  <Package className="w-4 h-4" /> 20kg Check-in
                </div>
              )}
              {flight.amenities.includes("Meal Included") && (
                <div className="flex items-center gap-1.5">
                  <UtensilsCrossed className="w-4 h-4" /> Meal Included
                </div>
              )}
              {flight.amenities.includes("Wi-Fi Available") && (
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-4 h-4" /> Wi-Fi Available
                </div>
              )}
              {flight.amenities.includes("Refundable") && (
                <div className="flex items-center gap-1.5 text-green-600 font-medium">
                  ✓ Refundable
                </div>
              )}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#12B76A] bg-[#ECFDF3] p-1 font-medium">
                {flight.seatsLeft} seats left
              </span>
              <span>Aircraft: {flight.aircraft}</span>
            </div>
          </div>
        </div>
      ))}
      
      {/* Right Side — Flight Details */}
      {selectedFlight && (
        <div>
          <div className="fixed top-0 right-0 w-full h-full z-50   bg-black/40 text-white overflow-y-auto transition-all duration-300">
            <div className=" relative flex justify-end">
              {/* Flight details content */}
              <FlightDetails setSelectedFlight = {setSelectedFlight} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightCard;
