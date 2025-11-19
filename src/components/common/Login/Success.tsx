import { CircleCheckBig } from 'lucide-react'
import React from 'react'

const Success = ({setStep}: any) => {
  return (
  <div className="flex flex-col gap-4 items-center w-full 2xl:p-7 py-7 text-center">
                  <div className="p-5 bg-[#B6E9D1] rounded-full">
                    <CircleCheckBig size={60} color="#12B76A" />
                  </div>
                  <h2 className="text-2xl font-semibold text-[#0A0A0A]">Saved Successfully</h2>
                  <p className="text-[#6B6B6B] w-8/12">
                    Your file has been successfully saved. Now it's open and ready for members to start using.
                  </p>
                  <button
                    onClick={() => setStep("login")}
                    className="bg-[#0057FF] text-white rounded-lg py-3 w-[452px] mt-4 hover:bg-blue-600 transition"
                  >
                    Continue
                  </button>
                </div>
  )
}

export default Success
