import React from 'react'

const Otp = ({ otp, otpRefs, handleOtpChange, resetLoading, setOtp, setStep }: any) => {
  return (
    <div className="w-full">
      <div className="flex flex-col 2xl:gap-6 items-center p-7">
        <h1 className="bg-[#F79009] py-1 px-4 rounded-xl text-white">Forget Passwords</h1>

        <h2 className="text-4xl font-semibold text-center mb-2">OTP Verification</h2>
        <p className="text-center w-60 text-[#475467] text-lg">
          Our OTP sent to this email <span>demo@gmail.com</span>
        </p>

        <div className="flex gap-4 mt-4">
          {otp.map((o: any, i: any) => (
            <input
              key={i}
              ref={(el) => {
                otpRefs.current[i] = el!;
              }}
              type="text"
              maxLength={1}
              className="w-12 h-12 border-2 border-[#063BE8] rounded-lg p-[10px_8px] text-center text-2xl focus:ring-2 focus:ring-blue-400"
              value={o}
              onChange={(e) => handleOtpChange(i, e.target.value)}
            />
          ))}
        </div>

        <p className="text-sm text-[#6B6B6B] mt-2 text-center">
          Didn&apos;t get a code?{" "}
          <button
            className="text-[#063BE8] font-medium hover:underline"
            onClick={() => setOtp(["", "", "", ""])}
          >
            Click to resend
          </button>
        </p>

        <div className="flex justify-between w-full mt-4 gap-4">
          <button
            className="flex-1 border border-gray-300 rounded-lg py-3 hover:bg-gray-100 transition"
            onClick={() => setStep("forgot")}
          >
            Back
          </button>
          <button
            className="flex-1 bg-[#0057FF] text-white rounded-lg py-3 hover:bg-blue-600 transition"
            onClick={() => setStep("password")}
          >
            {resetLoading ? "Sending..." : "Verify"}
          </button>
        </div>
      </div>

      <div className="w-full mt-4 px-24 py-5 text-sm text-[#64748B] text-center bg-[#E6EAF682]">
        By signing up you agree to our{" "}
        <span className="text-[#0057FF] cursor-pointer">Privacy Policy</span> and{" "}
        <span className="text-[#0057FF] cursor-pointer">Terms of Service</span>
      </div>
    </div>
  )
}

export default Otp
