import React from 'react'

const Forgot = ({resetInput,setResetInput,setStep, forgotLoading, handleForgot }:any) => {
  return (
    <div className="flex flex-col gap-6 items-center w-full p-7">
                  <div className="bg-[#FEECEB] text-[#F04438] text-sm font-medium px-4 py-2 rounded-full w-fit">
                    Forget Password
                  </div>

                  <h2 className="text-[28px] font-normal text-center">
                    Add Email or Phone number
                  </h2>

                  <p className="text-center text-[#667085] text-sm max-w-[400px] leading-relaxed">
                    No problem, Just enter your email address below — we'll send you a OTP Code to reset password
                  </p>

                  <div className="flex flex-col w-[452px]">
                    <label className="font-semibold text-sm mb-1">Email / Phone</label>
                    <input
                      type="text"
                      placeholder="Enter your email or phone number"
                      className="w-full h-11 border rounded-lg p-2 text-[#667085] focus:ring-2 focus:ring-blue-400"
                      value={resetInput}
                      onChange={(e) => setResetInput(e.target.value)}
                    />
                  </div>

                  <button
                    onClick={handleForgot}
                    className="w-full bg-[#0057FF] text-white rounded-lg py-3 mt-2 hover:bg-blue-600 transition"
                  >
                    {forgotLoading ? "Sending..." : "Continue"}
                  </button>

                  <p className="text-sm text-[#667085] mt-3">
                    Already have an account?{" "}
                    <button
                      onClick={() => setStep("login")}
                      className="text-[#0057FF] font-medium hover:underline"
                    >
                      Sign in
                    </button>
                  </p>
                </div>
  )
}

export default Forgot
