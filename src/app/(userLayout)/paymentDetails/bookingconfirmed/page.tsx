import { Calendar, CircleCheckBig, Clock10, Copy, Download, Mail, Phone, Plane, Printer, User } from "lucide-react";
import React from "react";

const BookingConfirmedPage = () => {
    return (
        <div className="min-h-screen w-full bg-linear-to-br from-green-50 via-white to-blue-50 flex flex-col items-center p-6 rounded-2xl">

            {/* Success Icon */}
            <div className="text-center flex flex-col justify-center items-center mt-10 space-y-3">
                <div className="p-5 bg-[#B6E9D1] rounded-full" >
                    <CircleCheckBig size={60} color="#12B76A" />


                </div>
                <h2 className="text-green-600 text-xl font-semibold">Booking Confirmed!</h2>
                <p className="text-gray-500 text-sm max-w-md">
                    Your flight has been successfully booked. We've sent the confirmation to your email.
                </p>
            </div>


            <div className="w-full max-w-3xl">

                {/* Main Container */}
                <div className=" bg-white rounded-2xl shadow p-8 mt-10 space-y-8">
                    {/* Booking ID */}
                    <div className="flex items-center flex-col justify-center space-y-2">
                        <p className="text-gray-600 font-medium">Booking ID</p>
                        <p className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
                            BK81433
                            <Copy className="w-4 h-4 cursor-pointer hover:text-blue-700" />
                        </p>
                    </div>

                    {/* Flight Details */}
                    <div className="space-y-3">
                        <p className="text-gray-700 font-semibold">Flight Details</p>

                        <div className="bg-[#F0F2F5] p-5 rounded-xl border border-gray-100 space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🇲🇾</span>
                                <div>
                                    <p className="font-semibold text-gray-800">Malaysia Airlines</p>
                                    <p className="text-sm text-gray-500">MH195</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                                <div className="flex items-start gap-2">
                                    <Plane className="w-4 h-4 mt-1 text-gray-600" />
                                    <p>
                                        <span className="font-medium">Route</span><br />
                                        <span className="text-gray-500">Dhaka (DAC) → Kuala Lumpur (KUL)</span>
                                    </p>
                                </div>

                                <div className="flex items-start gap-2">
                                    <Calendar className="w-4 h-4 mt-1 text-gray-600" />
                                    <p>
                                        <span className="font-medium">Date</span><br />
                                        <span className="text-gray-500">2025-10-20</span>
                                    </p>
                                </div>

                                <div className="flex items-start gap-2">
                                    <Clock10 className="w-4 h-4 mt-1 text-gray-600" />
                                    <p>
                                        <span className="font-medium">Departure</span><br />
                                        <span className="text-gray-500">08:45</span>
                                    </p>
                                </div>

                                <div className="flex items-start gap-2">
                                    <Clock10 className="w-4 h-4 mt-1 text-gray-600" />
                                    <p>
                                        <span className="font-medium">Arrival</span><br />
                                        <span className="text-gray-500">14:30</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Passenger Details */}
                    <div className="space-y-3">
                        <p className="text-gray-700 font-semibold">Passenger Details</p>

                        {[1, 2, 3, 4].map((n) => (
                            <div key={n} className="bg-[#F0F2F5] p-4 rounded-xl border border-gray-100 space-y-1 text-sm text-gray-700">
                                <p className="flex items-center  gap-2 font-medium"><User size={16} /> Passenger {n}</p>
                                <p className="text-gray-800 font-medium">Mr Omar Sani</p>
                                <p className="text-gray-500 text-xs">Passport: 456456</p>
                            </div>
                        ))}
                    </div>

                    {/* Payment Summary */}
                    <div className="space-y-3">
                        <p className="text-gray-700 font-semibold">Payment Summary</p>

                        <div className="bg-[#F0F2F5] p-5 rounded-xl border border-gray-100 text-sm space-y-3">
                            <div className="flex justify-between"><span>Base Fare</span><span>BDT 32,000</span></div>
                            <div className="flex justify-between"><span>Taxes & Fees</span><span>BDT 4,800</span></div>
                            <div className="flex justify-between"><span>Service Fee</span><span>BDT 500</span></div>

                            <hr />

                            <div className="flex justify-between font-semibold text-blue-600 text-base">
                                <span>Total Paid</span>
                                <span>BDT 37,300</span>
                            </div>
                        </div>
                    </div>


                    {/* Download / Email / Print Buttons */}
                    <div className="flex flex-wrap gap-3 justify-center mt-4">
                        <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl text-gray-700 text-sm hover:bg-gray-100">
                            <Download className="w-4 h-4" />
                            Download E-ticket
                        </button>

                        <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl text-gray-700 text-sm hover:bg-gray-100">
                            <Mail className="w-4 h-4" />
                            Send to Email
                        </button>

                        <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl text-gray-700 text-sm hover:bg-gray-100">
                            <Printer className="w-4 h-4" />
                            Print
                        </button>
                    </div>
                </div>
                {/* Bottom Buttons */}
                <div className="flex gap-4 mt-10 w-full  justify-center">
                    <button className="flex-1 py-3 bg-[#063BE8] text-white rounded-xl font-medium hover:bg-blue-700">View My Trip</button>
                    <button className="flex-1 py-3 border border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-50">Book Another Flight</button>
                </div>

            </div>



            <p className="text-gray-500 text-sm mt-6">Need help with your booking?</p>
            <button className="flex items-center gap-2 text-blue-600 text-sm hover:underline">
                <Phone className="w-4 h-4" />
                Customer Support
            </button>
        </div>
    );
};

export default BookingConfirmedPage;
