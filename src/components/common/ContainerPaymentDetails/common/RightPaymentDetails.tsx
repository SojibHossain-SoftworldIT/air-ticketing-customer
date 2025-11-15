import { CreditCard, Smartphone } from "lucide-react";
import React, { useState } from "react";
import Mobile from "./Mobile";
import Card from "./Card";
import Emi from "./Emi";

const RightPaymentDetails = () => {
    const [method, setMethod] = useState("mobile");
    const [provider, setProvider] = useState("mobile");

    return (
        <div className="w-full max-w-2xl ">



            <div className="border rounded-2xl p-6  ">
                {/* Title */}
                <h2 className="text-lg font-semibold mb-4">Select Payment Method</h2>

                {/* Payment Method Tabs */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                        { id: "mobile", label: "Mobile Banking", icon: <Smartphone size={16} /> },
                        { id: "card", label: "Card Payment", icon: <CreditCard size={16} /> },
                        { id: "emi", label: "EMI", icon: <CreditCard size={16} /> },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setMethod(item.id)}
                            className={`flex items-center justify-center gap-2 py-3 rounded-lg border text-sm font-medium transition 
              ${method === item.id
                                    ? "bg-[#000B2F] text-white border-[#000B2F]"
                                    : "bg-white text-gray-700 border-gray-300"
                                }`}
                        >
                            {item.icon}
                            {item.label}
                        </button>
                    ))}
                </div>


                {/* ================= MOBILE BANKING UI ================= */}
                {method === "mobile" && (
                    <Mobile provider={provider} setProvider={setProvider} />
                )}

                {/* ================= CARD PAYMENT UI ================= */}
                {method === "card" && (
                    <Card />
                )}

                {/* ================= EMI PAYMENT UI (NEW) ================= */}
                {method === "emi" && (
                    <Emi />
                )}

                {/* Secure Payment Notice */}

                {method === "emi" ? null

                    : (

                        <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg mt-6">
                            <div className="text-green-600 text-xl">🔒</div>
                            <div>
                                <p className="text-green-700 font-semibold text-sm">Secure Payment</p>
                                <p className="text-green-600 text-xs">
                                    Your payment information is encrypted and secure. We never store your card details.
                                </p>
                            </div>
                        </div>
                    )

                }
            </div>

        </div>
    );
};

export default RightPaymentDetails;
