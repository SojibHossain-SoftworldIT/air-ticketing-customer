"use client";
import React, { useState } from "react";
import { Lock } from "lucide-react";

export default function MobileBanking() {
    const [provider, setProvider] = useState("Mobile Banking");
    const providers = ["Mobile Banking", "Nagad", "Rocket"];

    return (
        <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Select Provider</h3>
            <div className="grid grid-cols-3 gap-3 mb-4">
                {providers.map((p) => (
                    <button
                        key={p}
                        onClick={() => setProvider(p)}
                        className={`px-4 py-3 rounded-lg text-sm font-medium ${provider === p
                                ? "border-2 border-blue-500 text-blue-700"
                                : "border border-gray-300 text-gray-700 hover:border-blue-400"
                            }`}
                    >
                        {p}
                    </button>
                ))}
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Number
            </label>
            <input
                type="text"
                placeholder="01XXX-XXXXXX"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <div className="flex items-start gap-3 border border-green-200 bg-green-50 rounded-lg p-4">
                <Lock className="w-5 h-5 text-green-700 mt-0.5" />
                <div className="text-sm text-green-700">
                    <p className="font-semibold">Secure Payment</p>
                    <p>Your payment information is encrypted and secure.</p>
                </div>
            </div>
        </div>
    );
}
