"use client";
import React from "react";
import { Lock } from "lucide-react";

export default function CardPayment() {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
            <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            <div className="grid grid-cols-3 gap-3 mb-4">
                <input
                    type="text"
                    placeholder="MM/YY"
                    className="col-span-2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <input
                    type="password"
                    placeholder="CVV"
                    maxLength={4}
                    className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
            </div>

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
