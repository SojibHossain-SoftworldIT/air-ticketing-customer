import React from "react";
import { FaPlaneDeparture, FaWifi, FaUtensils, FaTv, FaGlassWhiskey } from "react-icons/fa";
import { IoIosAirplane, IoMdInformationCircleOutline } from "react-icons/io";
import { BsCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { Plane } from "lucide-react";

const FlightDetails = ({ setSelectedFlight }: any) => {
  return (



    <div className="w-full max-w-3xl bg-[#FAFBFC] p-5 ">
      {/* Header */}
      <div className="bg-[#000B2F] text-white p-4 flex flex-col gap-3 rounded-3xl mb-5">
        <h2 className="text-lg font-semibold">Flight Details</h2>
        <p className="text-sm opacity-80">Complete information about your selected flight</p>
      </div>

      {/* Flight Card */}
      <div className=" border rounded-xl p-6 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <FaPlaneDeparture className="text-blue-500" size={22} />
              <h3 className="font-semibold text-gray-800">Biman Bangladesh Airlines</h3>
            </div>
            <p className="text-sm text-gray-500">BG 147</p>
          </div>

          <span className="text-xs px-3 py-1 rounded-sm bg-[#E6EBFD] text-gray-600">
            3 Active
          </span>
        </div>

        {/* Timeline */}
        <div className="flex justify-between text-center mt-4">
          <div>
            <p className="text-3xl font-normal text-gray-800">08:30</p>
            <p className="text-sm text-gray-500">DAC</p>
            <p className="text-xs text-gray-400">Dhaka</p>
          </div>

          <div className="flex-1 mx-6 text-center">
            <p className="text-xs text-gray-500 mb-1">
              1h 15m
            </p>
            <div className="w-full flex items-center">
              <div className="flex-1 h-0.5 bg-gray-300"></div>
              <Plane className="w-4 h-4 text-[#063BE8] mx-2" />
              <div className="flex-1 h-0.5 bg-gray-300"></div>
            </div>
            <p className="text-xs font-medium text-green-600 mt-1">
              Non-stop
            </p>
          </div>

          <div>
            <p className="text-3xl font-normal text-gray-800">09:45</p>
            <p className="text-sm text-gray-500">CXB</p>
            <p className="text-xs text-gray-400">Cox's Bazar</p>
          </div>
        </div>
      </div>



      <h3 className="font-semibold mb-4 flex items-center gap-2 text-gray-800">
        <IoMdInformationCircleOutline className="text-gray-600" />
        Fare Breakdown
      </h3>

      <div className=" border border-gray-200 rounded-2xl p-6 mb-6 text-gray-700">
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <p>Base Fare (1 Adult)</p>
            <p>৳3,375</p>
          </div>

          <div className="flex justify-between">
            <p>Taxes & Fees</p>
            <p>৳675</p>
          </div>

          <div className="flex justify-between">
            <p>Airport Charges</p>
            <p>৳450</p>
          </div>

          <div className="border-t pt-3 flex justify-between font-semibold text-[#000B2F]">
            <p>Total Amount</p>
            <p className="text-[#063BE8] text-lg font-normal">৳4,500</p>
          </div>
        </div>
      </div>


      {/* Baggage */}
      <h3 className="font-semibold mb-4 flex items-center gap-2 text-gray-800">
        <IoMdInformationCircleOutline className="text-gray-600" />
        Baggage Information
      </h3>
      <div className=" border rounded-xl p-6 mb-6">
        <div className="space-y-3 text-sm text-gray-700">
          <div className=" flex gap-4">
            <BsCheckCircleFill size={20} className="text-green-500 mt-1" />
            <p className="flex flex-col items-start gap-2">
              Cabin Baggage <br />
              <p className="text-gray-500 ">7 kg 1 piece per passenger</p>
            </p>

          </div>
          <div className=" flex gap-4">

            <BsCheckCircleFill size={20} className="text-green-500 mt-1" />
            <p className="flex flex-col items-start gap-2">
              Check-in Baggage <br />
              <span className="text-gray-500 ">20 kg (included in Economy)</span>
            </p>
          </div>

          <div className=" flex gap-4">

            <IoMdInformationCircleOutline size={20} className="text-blue-500 mt-1" />
            <p className="flex flex-col items-start gap-2">
              Extra Baggage <br />
              <span className="text-gray-500 ">৳350 per kg (purchase at check-in)</span>
            </p>
          </div>

        </div>
      </div>

      {/* Amenities */}
      <h3 className="font-semibold mb-4 flex items-center gap-2 text-gray-800">
        <IoMdInformationCircleOutline className="text-gray-600" />
        In-flight Amenities
      </h3>
      <div className=" border rounded-xl p-6 mb-6">

        <div className="grid grid-cols-2 md:grid-rows-2 gap-4 text-sm text-gray-700">
          <div className="flex items-center gap-4"><FaWifi size={20} /> Wi-Fi Available</div>
          <div className="flex items-center gap-4"><FaUtensils size={20} /> Meals Included</div>
          <div className="flex items-center gap-4"><FaTv size={20} /> Entertainment</div>
          <div className="flex items-center gap-4"><FaGlassWhiskey size={20} /> Beverages</div>
        </div>
      </div>

      {/* Cancellation */}
      <h3 className="font-semibold mb-4 flex items-center gap-2 text-gray-800">
        <IoMdInformationCircleOutline className="text-gray-600" />
        Cancellation & Changes
      </h3>
      <div className=" text-[#000B2F] border rounded-xl p-6 mb-6">
        <div className="space-y-4 text-sm">

          <div className=" flex gap-4">
            <BsCheckCircleFill size={20} className="text-green-500 mt-1" />
            <p className="flex flex-col items-start gap-2">
              Free cancellation up to 24 hours before departure  <br />
              <span className="text-gray-500 ">Full refund minus processing fee</span>
            </p>
          </div>

          <div className=" flex gap-4">
            <IoMdInformationCircleOutline size={20} className="text-blue-500 mt-1" />
            <p className="flex flex-col items-start gap-2">
              Date change allowed <br />
              <span className="text-gray-500 ">Subject to fare difference + ৳500 fee</span>
            </p>
          </div>

          <div className=" flex gap-4">
            <BsXCircleFill size={20} className="text-red-500 mt-1" />
            <p className="flex flex-col items-start gap-2">
              Non-refundable within 24 hours of departure <br />
              <span className="text-gray-500 ">No refund for no-show</span>
            </p>
          </div>
        </div>
      </div>

      {/* Important Info */}
      <h3 className="font-semibold mb-4 flex items-center gap-2 text-gray-800">
        <IoMdInformationCircleOutline className="text-gray-600" />
        Important Information
      </h3>
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6 text-sm text-gray-700">
        <ul className="list-disc pl-5 space-y-1">
          <li className="text-[#F79009]">Web check-in opens 48 hours before departure</li>
          <li className="text-[#F79009]">Please arrive at airport at least 2 hours before departure</li>
          <li className="text-[#F79009]">Valid photo ID required for all passengers</li>
          <li className="text-[#F79009]">Check visa requirements for international travel</li>
        </ul>
      </div>

      {/* Alert */}
      <div className="bg-red-50 border border-red-200 text-red-500 rounded-xl p-4 text-sm mb-6 flex items-center gap-2">
        <IoMdInformationCircleOutline size={20} /> Only 12 seats left at this price!
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between gap-4">
        <button onClick={() => setSelectedFlight(false)} className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-100">
          Close
        </button>

        <button className="w-full bg-[#063BE8] text-white px-6 py-3 rounded-xl hover:bg-blue-700">
          Book Now – ৳4,500
        </button>
      </div>
    </div>

  );
};

export default FlightDetails;
