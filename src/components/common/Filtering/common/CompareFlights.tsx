import React from "react";
import { X, Plane, Workflow, Info } from "lucide-react";
import { FaPlaneDeparture } from "react-icons/fa";

const CompareFlights = ({ flights = [], onClose }: any) => {
  if (flights.length < 2) return null;
  const [f1, f2] = flights;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center p-4 md:p-6 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-xl p-4 md:p-6 relative">

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-red-600">
          <X size={22} />
        </button>

        {/* Title */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <Workflow size={22} color="#063BE8" />
          <h2 className="text-lg md:text-xl font-semibold text-[#000B2F]">Flight Comparison</h2>
        </div>
        <p className="text-center text-sm text-gray-600 mb-6">
          Compare features, amenities, and schedules to pick the best option.
        </p>

        {/* Summary Box */}
        <div className="bg-[#F5F8FF] border border-[#E1E8FF] rounded-xl p-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-6">
          <div>
            <p className="text-gray-600 text-sm">Price Difference</p>
            <p className="text-lg font-semibold text-[#000B2F]">
              ৳ {parseInt(f1.price.replace("৳", "")) - parseInt(f2.price.replace("৳", ""))}
            </p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Time Difference</p>
            <p className="text-lg font-semibold">{f1.duration}</p>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Cheapest Option</p>
            <p className="text-lg font-semibold text-green-600">
              {parseInt(f1.price.replace("৳", "")) < parseInt(f2.price.replace("৳", ""))
                ? f1.airline
                : f2.airline}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[f1, f2].map((flight, index) => (
            <div key={index} className="border border-blue-300  shadow-blue-600 rounded-xl shadow-md transition overflow-hidden">

              {/* Header */}
              <div className="bg-[#063BE8] p-5 text-white flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-lg">
                  <FaPlaneDeparture className="text-blue-600 text-xl" />
                </div>
                <div>
                  <p className="text-lg font-semibold">{flight.airline}</p>
                  <p className="text-sm">{flight.flightCode}</p>
                </div>
              </div>

              {/* Price */}
              <div className="px-5 py-3 border-b">
                <p className="text-sm text-gray-600">Total Price</p>
                <p className="text-3xl font-medium text-[#063BE8]">BDT{flight.price}</p>
                <p className="text-xs text-gray-500">per person</p>
              </div>

              {/* Schedule */}
              <div className="px-5 py-3 border-b">
                <p className="text-sm font-medium text-gray-700 mb-3">Flight Schedule</p>
                <div className="flex justify-between items-center">
                  <div className="text-left">
                    <p className="text-lg font-medium">{flight.depart}</p>
                    <p className="text-sm text-gray-600">{flight.from}</p>
                  </div>
                  <div className="text-center">
                    <Plane className="text-blue-600 mx-auto" />
                    <p className="text-xs text-gray-600">{flight.duration}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-medium">{flight.arrive}</p>
                    <p className="text-sm text-gray-600">{flight.to}</p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="px-5 py-3 border-b bg-[#F0F2F5] text-sm text-gray-700 space-y-1">
                <p><strong>Cabin Class:</strong> {flight.classType}</p>
                <p><strong>Baggage Allowance:</strong> 20kg</p>
                <p><strong>Available Seats:</strong> {flight.seatsLeft} left</p>
              </div>

              {/* Amenities */}
              <div className="px-5 py-3 border-b">
                <p className="font-medium text-gray-700 mb-2">Included Amenities</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-sm text-gray-600">
                  {flight.amenities.map((item: any, i: any) => (
                    <li key={i} className="flex items-center gap-1">✅ {item}</li>
                  ))}
                </ul>
              </div>

              {/* Cancellation */}
            <div className="px-5 py-3 text-sm text-gray-700">
  <p className="font-medium mb-2">Cancellation Policy</p>

  <div className="flex items-start gap-2 mb-1">
    <Info size={14} className="text-gray-400 mt-0.5" />
    <span>Free cancellation up to 24hrs before departure</span>
  </div>

  <div className="flex items-start gap-2">
    <Info size={14} className="text-gray-400 mt-0.5" />
    <span>Date change allowed with fee</span>
  </div>
</div>


              {/* Button */}
              <div className="px-5 pb-5">
                <button className="w-full bg-[#063BE8] hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
                  Book This Flight
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CompareFlights;
