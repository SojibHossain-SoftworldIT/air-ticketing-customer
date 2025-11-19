import { CircleCheckBig } from 'lucide-react';
import React from 'react'

const SuccessStep = () => {
    return (
        <div className="flex flex-col gap-4 items-center w-full 2xl:p-7 py-7 text-center">
            <div className="p-5 bg-[#B6E9D1] rounded-full">
                <CircleCheckBig size={60} color="#12B76A" />
            </div>
            <h2 className="text-2xl font-semibold text-[#0A0A0A]">Registration Successful!</h2>
            <p className="text-[#6B6B6B] w-8/12">
                Your account has been successfully created. You can now start exploring and booking your next adventure!
            </p>
            <button
                className="bg-[#0057FF] text-white rounded-lg py-3 w-full max-w-[452px] mt-4 hover:bg-blue-600 transition"
                onClick={() => {
                    // Navigate to login or dashboard
                    window.location.href = '/auth/login';
                }}
            >
                Continue to Login
            </button>
        </div>
    )
}

export default SuccessStep
