"use client";

import { Info } from "lucide-react";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const BusContactInformation = () => {
    const [phone, setPhone] = useState("");

    return (
        <div className="w-full  bg-white rounded-2xl p-6 border  border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-6">
                Contact Information
            </h2>

            {/* Name */}
            <div className="mb-6">
                <label className="text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    placeholder="Write your name"
                    className="mt-2 w-full h-11 shadow-xs rounded-lg border border-gray-300 px-4 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">
                        Email Address *
                    </label>
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full h-11 rounded-lg shadow-xs border border-gray-300 px-4 text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />


                    <p className="flex items-center gap-2 text-gray-500 text-sm">
                        <Info className="w-4 h-4 text-blue-500" />
                        Booking confirmation will be sent here
                    </p>
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-gray-700">
                        Phone Number *
                    </label>

                    <PhoneInput
                        country={"bd"}
                        value={phone}
                        onChange={(value) => setPhone(value)}
                        inputStyle={{
                            width: "100%",
                            height: "44px",
                            borderRadius: "8px",
                            border: "1px solid #D1D5DB",
                            fontSize: "15px",
                        }}
                        buttonStyle={{
                            borderRadius: "8px 0 0 8px",
                            border: "1px solid #D1D5DB",
                        }}
                        containerStyle={{
                            width: "100%",
                        }}
                    />

                    <p className="flex items-center gap-2 text-gray-500 text-sm">
                        <Info className="w-4 h-4 text-blue-500" />
                        For travel updates and notifications
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BusContactInformation;
