import React from 'react'

const ProfileStep = ({profile, setProfile, setStep}: any) => {
  return (
      <div>
                <div className="flex flex-col 2xl:gap-6 gap-3 2xl:p-7 xl:px-7 px-7 items-center w-full">

                  {/* First & Last Name */}
                  <div className="flex gap-4 w-full">
                    <div className="flex flex-col w-full">
                      <label className="font-semibold text-sm mb-1">First Name</label>
                      <input
                        type="text"
                        placeholder="Enter first name"
                        className="w-full h-11 border shadow-xs rounded-lg p-2 text-[#667085]"
                        value={profile.firstName}
                        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <label className="font-semibold text-sm mb-1">Last Name</label>
                      <input
                        type="text"
                        placeholder="Enter last name"
                        className="w-full h-11 border shadow-xs rounded-lg p-2 text-[#667085]"
                        value={profile.lastName}
                        onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <p className="text-sm text-[#667085]">
                    Make sure this matches the name on your Government National ID
                  </p>

                  {/* Gender & DOB */}
                  <div className="flex gap-4 w-full">
                    <div className="flex flex-col w-full">
                      <label className="font-semibold text-sm mb-1">Your Gender</label>
                      <select
                        value={profile.gender}
                        onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                        className="w-full h-11 shadow-xs border rounded-lg p-2 appearance-none text-[#667085]"
                      >
                        <option value="" disabled>Select gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                        <option value="OTHER">Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col w-full">
                      <label className="font-semibold text-sm mb-1">Date of Birth</label>
                      <input
                        type="date"
                        className="w-full h-11 border rounded-lg p-2 text-[#667085]"
                        value={profile.dateOfBirth}
                        onChange={(e) => setProfile({ ...profile, dateOfBirth: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Phone Number (Optional) */}
                  <div className="flex flex-col w-full">
                    <label className="font-semibold text-sm mb-1">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="w-full h-11 border rounded-lg p-2 text-[#667085]"
                      value={profile.phoneNumber}
                      onChange={(e) => setProfile({ ...profile, phoneNumber: e.target.value })}
                    />
                  </div>



                  {/* Buttons */}
                  <div className="flex justify-between w-full mt-4 gap-4">
                    <button
                      className="flex-1 border text-[#1D68E5] bg-[#DDE8FB] rounded-lg py-3"
                      onClick={() => setStep("verify")}
                    >
                      Back
                    </button>
                    <button
                      className="flex-1 bg-[#0057FF] text-white rounded-lg py-3"
                      onClick={() => setStep("password")}
                    >
                      Continue
                    </button>
                  </div>
                </div>

                <div className="w-full mt-4 p-3 text-sm text-[#3A3A3A] text-center bg-[#E6EAF682]">
                  By selecting agree and continue I agree Travel terms of service, payment terms of service and Nondiscrimination Policy and acknowledge the{" "}
                  <span className="text-[#0057FF] cursor-pointer">Privacy Policy</span>
                </div>
              </div>
  )
}

export default ProfileStep
