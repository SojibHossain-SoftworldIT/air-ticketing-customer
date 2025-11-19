import React from 'react'

const PassowedStep = ({password,setPassword,getPasswordStrengthColor,getPasswordStrengthText,getPasswordStrength,confirmPassword,setConfirmPassword,setStep,handleCompleteRegistration,isCompleting}:any) => {
  return (
    <div>
                <div className="flex flex-col gap-6 p-7 items-center w-full">

                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col w-full">
                      <label className="font-semibold text-sm mb-1">Create Password</label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full h-11 border shadow-xs rounded-lg p-2 text-[#667085]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>


                    <div>
                      <p className={`font-bold text-sm ${getPasswordStrengthColor()}`}>
                        {getPasswordStrengthText()}
                      </p>
                      <div className="flex gap-1 mt-2 h-2">
                        {[0, 1, 2].map((i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded h-full ${getPasswordStrength(password) > i ? "bg-green-500" : "bg-gray-300"
                              }`}
                          ></div>
                        ))}
                      </div>
                    </div>


                    <div className="flex flex-col w-full">
                      <label className="font-semibold text-sm mb-1">Confirm Password</label>
                      <input
                        type="password"
                        placeholder="Confirm your password"
                        className="w-full h-11 border shadow-xs rounded-lg p-2 text-[#667085]"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>

                    {confirmPassword && password !== confirmPassword && (
                      <p className="text-red-500 text-sm">Passwords do not match</p>
                    )}
                  </div>

                  <div className="flex justify-between w-full mt-2 gap-4">
                    <button
                      className="flex-1 border text-[#1D68E5] bg-[#DDE8FB] rounded-lg py-3"
                      onClick={() => setStep("profile")}
                    >
                      Back
                    </button>
                    <button
                      className="flex-1 bg-[#0057FF] text-white rounded-lg py-3 disabled:opacity-50"
                      onClick={handleCompleteRegistration}
                      disabled={isCompleting || !password || password !== confirmPassword}
                    >
                      {isCompleting ? "Completing..." : "Complete"}
                    </button>
                  </div>
                </div>

                <div className="bg-[#E6EAF682] p-3.5 w-full">
                  <p className="text-center text-sm text-[#6B6B6B]">
                    Already have an account?{" "}
                    <span className="text-[#0057FF] cursor-pointer font-medium">
                      Sign in
                    </span>
                  </p>
                </div>
              </div>
  )
}

export default PassowedStep
