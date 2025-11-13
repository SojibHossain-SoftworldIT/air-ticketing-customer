"use client";
import React, { useState, useMemo } from "react";

export default function EmiPayment() {
    const [bank, setBank] = useState("");
    const [tenure, setTenure] = useState(3);
    const banks = ["BRAC Bank", "City Bank", "DBBL", "Islami Bank"];
    const total = 44199;
    const monthlyPayment = useMemo(() => Math.ceil(total / tenure), [total, tenure]);

    return (
        <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Select Bank</h3>
            <select
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
                <option value="">Select Bank</option>
                {banks.map((b) => (
                    <option key={b}>{b}</option>
                ))}
            </select>

            <h3 className="text-sm font-medium text-gray-900 mb-2">EMI Tenure</h3>
            <input
                type="number"
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="EMI Tenure (months)"
            />

            <div className="rounded-md bg-sky-50 border border-sky-100 p-4 text-sm text-gray-700">
                <span className="font-medium text-sky-700">Monthly Payment:</span>{" "}
                <span className="font-semibold text-sky-800">BDT {monthlyPayment.toLocaleString()}</span>
            </div>
        </div>
    );
}
