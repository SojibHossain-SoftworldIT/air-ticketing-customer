"use client";

import React from "react";
import {
  Clock,
  Tag,
  ShieldCheck,
  Info,
  Ticket,
  CreditCard,
  Building,
  Smartphone,
  Wallet,
} from "lucide-react";

const LeftPersonalDetails = ({background}: any) => {
  return (
    <div>

    <div className={`w-[360px]  ${background}   rounded-2xl border border-gray-200 p-5 `}>
      {/* Timer Section */}
      <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-center mb-5">
        <p className="text-2xl font-semibold text-orange-500 mb-1">13:48</p>
        <p className="text-sm text-gray-700 mb-2">
          Complete your booking before time runs out!
        </p>
        <div className="w-full bg-orange-100 rounded-full h-1.5">
          <div className="bg-orange-400 h-1.5 rounded-full w-2/5"></div>
        </div>
      </div>

      {/* Payment Summary */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Clock className="h-5 w-5 text-blue-600" />
          <h2 className="text-base font-semibold text-gray-900">
            Payment Summary
          </h2>
        </div>

        {/* Fare Breakdown */}
        <div className="text-sm text-gray-700 space-y-2">
          <div className="flex justify-between">
            <span>Adult × 2</span>
            <span className="font-medium">BDT 64,000</span>
          </div>
          <div className="flex justify-between">
            <span>Child × 1</span>
            <span className="font-medium">BDT 24,000</span>
          </div>
          <div className="flex justify-between">
            <span>Infant × 1</span>
            <span className="font-medium">BDT 3,200</span>
          </div>

          <hr className="border-gray-200 my-2" />

          <div className="flex justify-between">
            <span>Taxes & Fees</span>
            <span className="font-medium">BDT 13,680</span>
          </div>
          <div className="flex justify-between">
            <span>Service Fee</span>
            <span className="font-medium">BDT 2,000</span>
          </div>
        </div>

        <hr className="border-gray-200" />

        {/* Coupon Section */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Tag className="h-4 w-4 text-blue-600" />
            <p className="text-sm font-medium text-gray-800">
              Apply Coupon Code
            </p>
          </div>

          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Ms"
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
              Apply
            </button>
          </div>

          <div className="text-sm text-gray-600 space-y-1">
            <p>Available Coupons:</p>
            <div className="flex flex-wrap gap-2 justify-between">
              <span className="px-2 w-24 py-1 text-xs bg-blue-100 text-blue-700 rounded-md">
                Best Value
              </span>
              <span className="px-2 w-24 py-1 text-xs bg-green-100 text-green-700 rounded-md">
                Direct Flight
              </span>
              <span className="px-2 w-24 py-1 text-xs bg-orange-100 text-orange-700 rounded-md">
                Direct Flight
              </span>
            </div>
          </div>
        </div>

        {/* Total Amount */}
        <div className="bg-[#EFF6FF] border border-blue-100 rounded-xl p-4 mt-4">
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm font-medium text-gray-700">Total Amount</p>
            <p className="text-base font-semibold text-[#063BE8]">
              BDT 106,880
            </p>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-blue-700 transition">
            <ShieldCheck className="h-4 w-4" />
            Proceed to Secure Payment
          </button>
        </div>

        {/* Alternative Payment Buttons */}
        <div className="space-y-2 mt-3">
          <button className="w-full flex items-center justify-center gap-2 text-sm font-medium bg-green-50 text-green-700 py-3 rounded-lg border border-green-100 hover:bg-green-100 transition">
            <ShieldCheck className="h-4 w-4" />
            Book Now – $4,500
          </button>

          <button className="w-full flex items-center justify-center gap-2 text-sm font-medium bg-blue-50 text-blue-700 py-3 rounded-lg border border-blue-100 hover:bg-blue-100 transition">
            <Info className="h-4 w-4" />
            Book Now – $4,500
          </button>

          <button className="w-full flex items-center justify-center gap-2 text-sm font-medium bg-orange-50 text-orange-700 py-3 rounded-lg border border-orange-100 hover:bg-orange-100 transition">
            <Ticket className="h-4 w-4" />
            Book Now – $4,500
          </button>
        </div>

        <hr className="border-gray-200 my-4" />

        {/* Payment Methods */}
        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">
            Accepted Payment Methods
          </p>
          <div className="flex justify-between">
            <PaymentIcon icon={<CreditCard />} />
            <PaymentIcon icon={<Building />} />
            <PaymentIcon icon={<Smartphone />} />
            <PaymentIcon icon={<Wallet />} />
          </div>
        </div>
      </div>
    </div>

    </div>
  );
};
const PaymentIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-16 h-10 flex items-center justify-center border border-gray-200 rounded-lg ">
    {icon}
  </div>
);

export default LeftPersonalDetails;
