"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Lock } from "lucide-react";

const MobileBanking = () => {
    const [selectedProvider, setSelectedProvider] = useState<string | null>(null);

    return (
        <div className="max-w-md mx-auto mt-10 bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
            {/* Select Payment Method */}
            <h2 className="text-base font-semibold text-gray-900 mb-3">
                Select Payment Method
            </h2>

            <div className="grid grid-cols-3 gap-3 mb-6">
                {/* Mobile Banking */}
                <button
                    className="flex items-center justify-center gap-2 bg-[#0B1739] text-white font-medium rounded-lg py-2.5 border border-transparent"
                >
                    <Image src="/mobileicon.png" alt="Mobile" width={18} height={18} />
                    Mobile Banking
                </button>

                {/* Card Payment */}
                <button className="flex items-center justify-center gap-2 text-gray-700 border border-gray-300 font-medium rounded-lg py-2.5 hover:border-blue-400 transition">
                    💳 Card Payment
                </button>

                {/* EMI */}
                <button className="flex items-center justify-center gap-2 text-gray-700 border border-gray-300 font-medium rounded-lg py-2.5 hover:border-blue-400 transition">
                    🏦 EMI
                </button>
            </div>

            {/* Select Provider */}
            <h3 className="text-base font-semibold text-gray-900 mb-2">
                Select Provider
            </h3>

            <div className="flex gap-3 mb-5">
                {["Mobile Banking", "Nagad", "Rocket"].map((provider) => (
                    <button
                        key={provider}
                        onClick={() => setSelectedProvider(provider)}
                        className={`flex-1 border rounded-lg py-2 font-medium transition ${selectedProvider === provider
                                ? "border-[#0B1739] text-[#0B1739]"
                                : "border-gray-300 text-gray-700 hover:border-blue-400"
                            }`}
                    >
                        {provider}
                    </button>
                ))}
            </div>

            {/* Mobile Number Input */}
            <div className="mb-5">
                <label className="block text-sm font-semibold text-gray-900 mb-1">
                    Mobile Number
                </label>
                <input
                    type="text"
                    placeholder="01XXX-XXXXXX"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Secure Payment Info */}
            <div className="flex items-start gap-2 border border-green-300 bg-green-50 rounded-lg p-3">
                <Lock className="w-5 h-5 text-green-700 mt-0.5" />
                <div className="text-sm text-green-700">
                    <p className="font-semibold">Secure Payment</p>
                    <p>Your payment information is encrypted and secure. We never store your card details.</p>
                </div>
            </div>
        </div>
    );
};

export default MobileBanking;
