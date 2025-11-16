import Link from "next/link";
import React from "react";

const LeftPaymentDetails = () => {
  return (
    <div className="w-full max-w-sm  rounded-2xl border p-6 space-y-6">
      {/* Session Timeout */}
      <div className="text-center space-y-2">
        <p className="text-[#000B2F] text-lg">Session Timeout</p>
        <p className="text-gray-400 text-xs">2025-10-26</p>
        <div className="flex items-center gap-4 justify-center">


        <div className="flex justify-center gap-2 mt-2">
          {['1','4'].map((num,i) => (
            <div key={i} className="w-[45px] h-[60px] border-2 border-[#063BE8] rounded-lg flex items-center justify-center text-xl font-semibold text-blue-600">
              {num}
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center gap-3 mt-2">
          <div className="w-3 h-3 bg-green-500 rounded-full" />
          <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>
        <div className="flex justify-center gap-2 mt-2">
          {['3','8'].map((num,i) => (
            <div key={i} className="w-[45px] h-[60px] border-2 border-[#063BE8] rounded-lg flex items-center justify-center text-xl font-semibold text-blue-600">
              {num}
            </div>
          ))}
        </div>

        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full mt-3">
          <div className="w-1/3 h-full bg-[#063BE8] rounded-full"></div>
        </div>
      </div>

      {/* Booking Summary */}
      <div className="space-y-3">
        <p className="font-semibold text-gray-700">Booking Summary</p>

        <div className="flex items-center gap-3">
          <span className="text-blue-600 text-2xl">✈️</span>
          <div>
            <p className="font-semibold text-gray-800">US-Bangla Airlines</p>
            <p className="text-sm text-gray-500">BS141</p>
          </div>
        </div>

        <div className="text-gray-700 text-sm">
          <p>Dhaka (DAC) → Chittagong (CGP)</p>
          <p className="text-gray-500 text-xs">2025-10-20</p>
        </div>

        <hr className="border-gray-200" />

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-600">Base Fare</span>
            <span className="font-medium">BDT 4,500</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Taxes & Fees</span>
            <span className="font-medium">BDT 675</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Service Fee</span>
            <span className="font-medium">BDT 500</span>
          </div>
        </div>
      </div>

      {/* Total */}
      <div className="bg-blue-50 rounded-xl p-4 space-y-3">
        <div className="flex justify-between text-lg font-semibold text-blue-700">
          <span>Total Amount</span>
          <span>BDT 106,880</span>
        </div>
        <Link href={"/paymentDetails/bookingconfirmed"}>
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl text-sm font-medium hover:bg-blue-700 transition">
          Proceed to Secure Payment
        </button>
        </Link>
      </div>
    </div>
  );
};

export default LeftPaymentDetails;
