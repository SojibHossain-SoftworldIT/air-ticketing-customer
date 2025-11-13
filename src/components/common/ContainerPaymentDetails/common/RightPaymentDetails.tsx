"use client";

import React, { useState } from "react";
import MobileBanking from "./MobileBanking";
import CardPayment from "./CardPayment";
import EmiPayment from "./EmiPayment";
import { CreditCard, Smartphone } from "lucide-react";

const RightPaymentDetails = () => {
    const [active, setActive] = useState<"mobile" | "card" | "emi">("mobile");

    return (
        <div className="flex flex-col gap-6 w-[650px] bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-base font-semibold text-gray-900">
                Select Payment Method
            </h2>

            {/* Top Buttons */}
            <div className="grid grid-cols-3 gap-3">
                <button
                    onClick={() => setActive("mobile")}
                    className={`flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition ${active === "mobile"
                            ? "bg-[#071233] text-white shadow-sm"
                            : "border border-gray-300 text-gray-700 hover:border-blue-400"
                        }`}
                >
                    <Smartphone className="w-4 h-4" /> Mobile Banking
                </button>

                <button
                    onClick={() => setActive("card")}
                    className={`flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition ${active === "card"
                            ? "bg-[#071233] text-white shadow-sm"
                            : "border border-gray-300 text-gray-700 hover:border-blue-400"
                        }`}
                >
                    <CreditCard className="w-4 h-4" /> Card Payment
                </button>

                <button
                    onClick={() => setActive("emi")}
                    className={`flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-medium transition ${active === "emi"
                            ? "bg-[#071233] text-white shadow-sm"
                            : "border border-gray-300 text-gray-700 hover:border-blue-400"
                        }`}
                >
                    🏦 EMI
                </button>
            </div>

            {/* Conditional Render */}
            {active === "mobile" && <MobileBanking />}
            {active === "card" && <CardPayment />}
            {active === "emi" && <EmiPayment />}
        </div>
    );
};

export default RightPaymentDetails;
