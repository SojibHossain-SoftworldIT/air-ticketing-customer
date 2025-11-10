import React from "react";
import { X, Plane, Workflow, Info, Clock2, CircleCheckBig, CircleCheck, CircleX, Luggage } from "lucide-react";
import { FaPlaneDeparture } from "react-icons/fa";

const CompareFlights = ({ flights = [], onClose }: any) => {
  if (flights.length < 2) return null;
  const [f1, f2] = flights;
  const p1 = parseInt(f1.price);
  const p2 = parseInt(f2.price);
  const lowPrice = Math.min(p1, p2);

  const getMinutes = (duration: any) => {
    const match = duration.match(/(\d+)h\s*(\d+)?m?/i);
    const hours = match ? parseInt(match[1]) : 0;
    const mins = match && match[2] ? parseInt(match[2]) : 0;
    return hours * 60 + mins;
  };
  const d1 = getMinutes(f1.duration);
  const d2 = getMinutes(f2.duration);
  const fastestDuration = Math.min(d1, d2);

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center xl:pt-[500px]  2xl:pt-48  overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-[10px] shadow-xl p-4 md:p-6 relative ">

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-red-600">
          <X size={22} />
        </button>

        {/* Title */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <Workflow size={22} color="#063BE8" />
          <h2 className="text-lg md:text-xl font-semibold text-[#000B2F]">Flight Comparison</h2>
        </div>
        <p className="text-center text-sm text-[#717182] mb-6">
          Compare features, prices, and schedules side-by-side to choose the best flight for your journey.
        </p>

        {/* Summary Box */}
        <div className="bg-[#F5F8FF] border border-[#BEDBFF] rounded-xl p-4 grid grid-cols-1 md:grid-cols-3 text-center mb-6">
          <div className="">
            <p className="text-gray-600 text-sm">Price Difference</p>
            <p className="text-lg font-semibold text-[#000B2F]">
              {(f1.price) - (f2.pric)}
            </p>
          </div>
          <div className=" border-l">
            <p className="text-gray-600 text-sm">Time Difference</p>
            <p className="text-lg font-semibold">{f1.duration}</p>
          </div>
          <div className=" border-l">
            <p className="text-[#545C74] text-sm">Cheapest Option</p>
            <p className="text-lg font-semibold text-[#00A63E]">
              {(f1.price) < (f2.pric)
                ? f1.airline
                : f2.airline}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[f1, f2].map((flight, index) => (
            <div key={index} className="border-3 border-[#2B7FFF]  shadow-blue-600 rounded-xl shadow-md transition overflow-hidden">

              {/* Header */}
              <div className={`${flight.price == lowPrice ? "bg-[#063BE8]" : "bg-[#000B2F]"} p-5 flex flex-col gap-4`}>
                <div className="  text-white flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-lg">
                    <FaPlaneDeparture className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">{flight.airline}</p>
                    <p className="text-sm">{flight.flightCode}</p>
                  </div>
                </div>
                <div className="flex gap-2 text-white">
                  {
                    flight.price == lowPrice && (
                      <button className="bg-[#12B76A] px-3 py-1 rounded-lg">✓ Lowest Price</button>
                    )
                  }
                  {getMinutes(flight.duration) == fastestDuration && (
                    <button className="bg-[#F79009] px-3 py-1 rounded-lg flex items-center">
                      <Clock2 size={16} color="white" className="mr-2" />Fastest
                    </button>
                  )}
                  <button
                    className={`${flight.price == lowPrice ? "bg-[#000B2F] text-white" : " bg-[#ffff] text-black"} px-3 py-1 rounded-lg flex items-center `}
                  >
                    <Plane size={16} className="mr-2" />
                    Direct
                  </button>

                </div>
              </div>

              {/* Price */}
              <div className="flex px-5 py-3 items-center justify-between border-b">

                <div className=" ">
                  <p className="text-sm text-gray-600">Total Price</p>
                  <p className="text-3xl font-medium text-[#063BE8]">BDT{flight.price}</p>
                  <p className="text-xs text-gray-500">per person</p>
                </div>
                <div>
                  {
                    flight.refundable ? (
                      <>
                        <div className="bg-[#E7F8F0] text-sm text-[#12B76A] px-3 py-1 rounded-lg flex items-center">
                          <CircleCheckBig size={16} className="mr-2" /><p>Refundable</p>
                        </div>
                      </>

                    ) : (
                      <>
                        <div className="bg-[#FEECEB] text-sm text-[#F04438] px-3 py-1 rounded-lg flex items-center">
                          <CircleX size={16} className="mr-2" /><p>Non-refundable</p>
                        </div>
                      </>
                    )
                  }
                </div>

              </div>

              {/* Schedule */}
              <div className="px-6 py-3 border-b  flex flex-col gap-4">
                <div className="flex items-center">
                  <Clock2 size={16} color="#063BE8" className="mr-2 mb-3" />
                  <p className="text-sm font-medium text-gray-700 mb-3">Flight Schedule</p>
                </div>
                {/* Times */}
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-start">
                    <p className="text-2xl font-normal text-gray-900">{flight.depart}</p>
                    <p className="text-sm font-normal text-gray-600 mt-1">{flight.from}</p>
                    <p className="text-xs text-gray-500">{flight.fromCity}</p>
                  </div>

                  <div className="flex-1 text-center">
                    <p className="text-xs text-gray-500 mb-1">{flight.duration}</p>
                    <div className="w-full flex items-center">
                      <div className="flex-1 h-0.5 bg-gray-300"></div>
                      <Plane className="w-6 h-6 text-[#063BE8] mx-2" />
                      <div className="flex-1 h-0.5 bg-gray-300"></div>
                    </div>
                    <div className="flex justify-center items-center ">
                      <CircleCheck size={14} color="#12B76A" className="mr-2 mt-1" />
                      <p className="text-xs font-medium text-green-600 mt-1">  Non-stop</p>
                    </div>
                  </div>

                  <div className="text-end">
                    <p className="text-2xl font-normal text-gray-900">{flight.arrive}</p>
                    <p className="text-sm font-medium text-gray-600 mt-1">{flight.to}</p>
                    <p className="text-xs text-gray-500">{flight.toCity}</p>
                  </div>
                </div>
                {/* date */}
                <div className="border-t  ">
                  <p>2025-10-20</p>
                </div>
              </div>

              {/* Details */}
              <div className="px-5 py-3 border-b bg-[#F0F2F5] text-gray-700 space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-[#333C59]">Cabin Class</p>
                  <p className="text-[#063BE8] bg-[#E6EBFD] px-3 py-1 rounded-lg">{flight.classType}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[#333C59]">Baggage Allowance </p>
                  <div className="flex items-center">
                    <Luggage size={16} color="#063BE8" className="mr-2 " />
                    <p className="text-[#333C59]">20kg</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-[#333C59]">Available Seats</p>
                  <p className="text-[#12B76A] bg-[#E7F8F0] px-3 py-1 rounded-lg">{flight.seatsLeft} left</p>
                </div>
              </div>

              {/* Amenities */}
              <div className="px-5 py-3 border-b">
                <p className="font-medium text-gray-700 mb-2">Included Amenities</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-600">
                  {flight.amenities.map((item: any, i: any) => (
                    <li key={i} className="flex items-center gap-1"> <p className="bg-[#E6EBFD] text-[#545C74] px-2 py-1 rounded-full">✓</p> {item}</li>
                  ))}
                </ul>
              </div>

              {/* Cancellation */}
              <div className="px-5 py-3 text-sm text-[#545C74]">
                <p className="font-medium mb-2 text-[#000B2F]">Cancellation Policy</p>

                <div className="flex items-start gap-2 mb-1">
                  <Info size={14} className="text-[#063BE8] mt-0.5" />
                  <span>Free cancellation up to 24hrs before departure</span>
                </div>

                <div className="flex items-start gap-2">
                  <Info size={14} className="text-[#063BE8] mt-0.5" />
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
