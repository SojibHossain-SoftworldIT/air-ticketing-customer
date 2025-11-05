import React from "react";
import {
  Plane,
  Briefcase,
  Utensils,
  Wifi,
  CheckCircle,
  CalendarDays,
  Ticket,
} from "lucide-react";
import { FaPlaneDeparture } from "react-icons/fa";

const PersonalDetailsFlightSummary = () => {

  const flights = [
    {
      id: 1,
      airline: "Biman Bangladesh Airlines",
      flightCode: "BG 147",
      classType: "Economy",
      depTime: "08:30",
      depCode: "DAC",
      depCity: "Dhaka, Bangladesh",
      arrTime: "09:45",
      arrCode: "CXB",
      arrCity: "Cox's Bazar, Bangladesh",
      duration: "1h 15m",
      tags: ["Best Value", "Direct Flight"],
      extras: [
        { icon: <Briefcase size={16} />, label: "20kg Check-in" },
        { icon: <Utensils size={16} />, label: "Meal Included" },
        { icon: <Wifi size={16} />, label: "Wi-Fi Available" },
        { icon: <CheckCircle size={16} />, label: "Refundable", highlight: true },
      ],
    },
    // You can add more flights here...
  ];

  return (
    <div className="w-full space-y-6">
      {flights.map((flight) => (
        <div
          key={flight.id}
          className="w-full bg-[#E6E7EA] rounded-2xl shadow-sm p-4 border border-gray-200"
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[18px] font-medium text-gray-800 flex items-center gap-2">
              <Ticket size={18} color="#155DFC" /> Flight Summary
            </h2>
            <span className="bg-green-100 text-green-600 text-sm px-4 py-1 rounded-lg">
              Confirmed Seats
            </span>
          </div>

          {/* Card */}
          <div className="bg-[#FAFBFC] rounded-xl border border-[#E6EBFD] p-6">
            {/* Top Tags */}
            <div className="flex items-center gap-3 mb-4">
              {flight.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`text-xs px-3 py-1 rounded-md border ${
                    tag === "Best Value"
                      ? "bg-[#FEF4E6] border-[#F79009] text-[#F79009]"
                      : "bg-[#E7F8F0] border-[#12B76A] text-[#12B76A]"
                  }`}
                >
                  {tag}
                </span>
              ))}

              <div className="ml-auto flex items-center text-gray-500 text-sm gap-1">
                <CalendarDays size={16} /> Today
              </div>
            </div>

            {/* Main */}
            <div className="py-4 flex gap-6 items-center justify-between">
              {/* Airline */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-2">
                  <FaPlaneDeparture className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-[#333C59]">{flight.airline}</p>
                  <p className="text-xs text-gray-500">{flight.flightCode}</p>
                  <p className="text-xs text-[#000B2F] mt-1 border rounded-sm p-1">
                    {flight.classType}
                  </p>
                </div>
              </div>

              {/* Times */}
              <div className="flex-1 flex items-center justify-center ">
                {/* Departure */}
                <div className="text-start">
                  <p className="text-2xl text-gray-900">{flight.depTime}</p>
                  <p className="text-sm text-gray-600 mt-1">{flight.depCode}</p>
                  <p className="text-xs text-gray-500">{flight.depCity}</p>
                </div>

                {/* Plane + Duration */}
                <div className="flex-1 mx-6 text-center">
                  <p className="text-xs text-gray-500 mb-1">{flight.duration}</p>
                  <div className="w-full flex items-center">
                    <div className="flex-1 h-0.5 bg-gray-300"></div>
                    <Plane className="w-6 h-6 text-[#063BE8] mx-2" />
                    <div className="flex-1 h-0.5 bg-gray-300"></div>
                  </div>
                  <p className="text-xs font-medium text-green-600 mt-1">
                    Non-stop
                  </p>
                </div>

                {/* Arrival */}
                <div className="text-end">
                  <p className="text-2xl text-gray-900">{flight.arrTime}</p>
                  <p className="text-sm text-gray-600 mt-1">{flight.arrCode}</p>
                  <p className="text-xs text-gray-500">{flight.arrCity}</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-4" />

            {/* Extras */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              {flight.extras.map((item, i) => (
                <span
                  key={i}
                  className={`flex items-center gap-1 ${
                    item.highlight ? "text-green-600" : ""
                  }`}
                >
                  {item.icon} {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalDetailsFlightSummary;
