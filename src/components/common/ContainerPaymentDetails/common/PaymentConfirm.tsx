"use client";

import React from "react";
import Image from "next/image";
import {
    CheckCircle,
    Copy,
    Download,
    Mail,
    Printer,
    Clock,
    MapPin,
    User,
    Calendar,
    Map,
    Plane,
} from "lucide-react";

export default function PaymentConfirm() {
    // Replace these with real data from props or server as needed
    const bookingId = "BK81433";
    const airline = {
        name: "Malaysia Airlines",
        flightNo: "MH195",
        from: "Dhaka (DAC)",
        to: "Kuala Lumpur (KUL)",
        date: "2025-10-20",
        depart: "08:45",
        arrive: "14:30",
    };

    const passengers = [
        { name: "Passenger 1", title: "Mr" },
        { name: "Passenger 2", title: "Mr Omar Sani", passport: "456456" },
        { name: "Passenger 3", title: "Mr Omar Sani", passport: "rfgvh546" },
        { name: "Passenger 4", title: "Mr Omar Sani", passport: "5sd4fgdasfg" },
    ];

    const payment = {
        baseFare: 32000,
        taxes: 4800,
        service: 500,
        total: 37300,
    };

    return (
        <div
            className="min-h-screen flex flex-col items-center justify-start p-8"
            style={{
                background:
                    "linear-gradient(90deg, rgba(235,249,243,1) 0%, rgba(240,246,255,1) 50%, rgba(249,250,255,1) 100%)",
            }}
        >
            {/* Outer container that constrains content width */}
            <div className="w-full max-w-[720px] py-10">
                {/* Center card */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                    {/* Top - success badge area */}
                    <div className="pt-8 pb-6 px-8 text-center">
                        <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
                            <CheckCircle className="w-8 h-8 text-emerald-500" />
                        </div>

                        <h2 className="text-lg font-semibold text-slate-800 mb-1">Booking Confirmed!</h2>
                        <p className="text-sm text-slate-500 mb-5">
                            Your flight has been successfully booked. We've sent the confirmation to your email.
                        </p>

                        {/* Booking ID box */}
                        <div className="mx-auto inline-flex items-center gap-3 px-4 py-2 rounded-md bg-white border border-slate-100 shadow-sm">
                            <div className="text-sm text-slate-600">Booking ID</div>
                            <div className="text-sm font-semibold text-sky-700">{bookingId}</div>
                            <button
                                type="button"
                                className="p-1 rounded-md hover:bg-slate-50"
                                title="Copy booking id"
                                onClick={() => {
                                    try {
                                        navigator.clipboard.writeText(bookingId);
                                    } catch { }
                                }}
                            >
                                <Copy className="w-4 h-4 text-slate-400" />
                            </button>
                        </div>
                    </div>

                    <div className="px-8 pb-8">
                        {/* FlightDetails component inserted here */}
                        <FlightDetails flight={airline} />

                        {/* Passenger Details */}
                        <div className="mb-5">
                            <div className="text-sm font-medium text-slate-800 mb-3">Passenger Details</div>

                            <div className="space-y-3">
                                {passengers.map((p, idx) => (
                                    <div key={idx} className="rounded-md bg-[#F0F2F5] border border-slate-100 p-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center border border-slate-100">
                                                <User className="w-4 h-4 text-slate-400" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-sm font-medium text-slate-700">{p.name}</div>
                                                {p.passport && (
                                                    <div className="text-xs text-slate-500 mt-1">Passport: {p.passport}</div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Payment Summary */}
                        <div className="mb-6">
                            <div className="text-sm font-medium text-slate-800 mb-3">Payment Summary</div>
                            <div className="rounded-md bg-[#F0F2F5] border border-slate-100 p-4 text-sm text-slate-700">
                                <div className="flex justify-between mb-2">
                                    <div>Base Fare</div>
                                    <div className="font-medium">BDT {payment.baseFare.toLocaleString()}</div>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <div>Taxes & Fees</div>
                                    <div className="font-medium">BDT {payment.taxes.toLocaleString()}</div>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <div>Service Fee</div>
                                    <div className="font-medium">BDT {payment.service.toLocaleString()}</div>
                                </div>

                                <div className="border-t border-slate-100 mt-3 pt-3 flex justify-between items-center">
                                    <div className="text-sm font-medium text-slate-700">Total Paid</div>
                                    <div className="text-sm font-semibold text-sky-700">BDT {payment.total.toLocaleString()}</div>
                                </div>
                            </div>
                        </div>

                        {/* Utilities - Download / Email / Print */}
                        <div className="flex items-center gap-3 mb-6">
                            <button
                                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm border border-slate-100 bg-white hover:shadow-sm"
                                onClick={() => {
                                    /* stub - add download logic */
                                }}
                            >
                                <Download className="w-4 h-4 text-slate-500" />
                                <span className="text-slate-700">Download E-ticket</span>
                            </button>

                            <button
                                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm border border-slate-100 bg-white hover:shadow-sm"
                                onClick={() => {
                                    /* email logic */
                                }}
                            >
                                <Mail className="w-4 h-4 text-slate-500" />
                                <span className="text-slate-700">Send to Email</span>
                            </button>

                            <button
                                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm border border-slate-100 bg-white hover:shadow-sm"
                                onClick={() => window.print()}
                            >
                                <Printer className="w-4 h-4 text-slate-500" />
                                <span className="text-slate-700">Print</span>
                            </button>
                        </div>

                        {/* Bottom CTAs */}
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                className="w-full py-3 rounded-md border border-slate-200 text-slate-700 bg-white hover:shadow-sm"
                                onClick={() => {
                                    // book another flight
                                }}
                            >
                                Book Another Flight
                            </button>

                            {/* placeholder or secondary CTA (left empty to match original layout) */}
                            <div />
                        </div>

                        {/* Support */}
                        <div className="mt-5 text-center text-xs text-slate-500">
                            Need help with your booking?{" "}
                            <button className="text-sky-700 font-medium underline">Customer Support</button>
                        </div>
                    </div>
                </div>

                {/* VIEW MY TRIP placed OUTSIDE the card, centered as requested */}
                <div className="mt-6 flex justify-center">
                    <button
                        className="w-[360px] py-3 rounded-md bg-sky-700 text-white font-medium hover:bg-sky-800"
                        onClick={() => {
                            // navigate to trips page
                        }}
                    >
                        View My Trip
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ---------- FlightDetails component (reusable) ---------- */
function FlightDetails({ flight }: {
    flight: {
        name: string;
        flightNo: string;
        from: string;
        to: string;
        date: string;
        depart: string;
        arrive: string;
    }
}) {
    return (
        <div className="w-full mb-5">
            <h4 className="text-sm font-semibold text-[#0B1739] mb-2">Flight Details</h4>

            <div className="rounded-xl bg-[#F0F2F5] border border-gray-100 p-5">
                {/* Airline Info */}
                <div className="flex items-center gap-3 mb-4">
                    {/* flag or airline logo - replace src with real image path */}
                    <div className="w-7 h-5 relative">
                        <Image src="/malaysia-flag.png" alt="flag" fill className="object-cover rounded-sm" />
                    </div>

                    <div>
                        <p className="text-sm font-semibold text-[#0B1739]">{flight.name}</p>
                        <p className="text-xs text-gray-500">{flight.flightNo}</p>
                    </div>
                </div>

                {/* Route and Date */}
                <div className="grid grid-cols-2 gap-y-3 text-sm text-[#0B1739] mb-4">
                    <div className="flex items-center gap-2">
                        <Plane className="w-4 h-4 text-[#0B1739]/70" />
                        <div>
                            <p className="text-xs text-gray-500">Route</p>
                            <p className="text-sm font-medium">{flight.from} → {flight.to}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#0B1739]/70" />
                        <div>
                            <p className="text-xs text-gray-500">Date</p>
                            <p className="text-sm font-medium">{flight.date}</p>
                        </div>
                    </div>
                </div>

                {/* Time Info */}
                <div className="grid grid-cols-2 gap-y-2 text-sm text-[#0B1739]">
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#0B1739]/70" />
                        <div>
                            <p className="text-xs text-gray-500">Departure</p>
                            <p className="text-sm font-medium">{flight.depart}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#0B1739]/70" />
                        <div>
                            <p className="text-xs text-gray-500">Arrival</p>
                            <p className="text-sm font-medium">{flight.arrive}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
