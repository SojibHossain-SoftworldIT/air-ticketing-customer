"use client";

import Image from "next/image";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const LoginPage = () => {
  const [step, setStep] = useState<"phone" | "verify" | "profile" | "password" | "success">("phone");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    email: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSendCode = () => setStep("verify");
  const handleVerify = () => setStep("profile");
  const handleProfileContinue = () => setStep("password");
  const handlePasswordContinue = () => setStep("success");

  const getPasswordStrength = (pass: string) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/[0-9]/.test(pass)) strength++;
    if (/[^A-Za-z0-9]/.test(pass)) strength++;
    return strength; // 0-4
  };

  return (
    <div className="w-full h-screen bg-[#F2F4F8] flex flex-col justify-between">
      {/* Main Content */}
      <div className="flex justify-center items-start pt-[50px]">

        {/* LEFT IMAGE */}
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/Frame 2147226025.png"
            alt="plane"
            width={748}
            height={1016}
            className="rounded-3xl"
            priority
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[500px] h-[750] flex flex-col gap-[42px] pt-40 ml-28 bg-[#EBEEFF] ">

          {/* Logo */}
          <div className="flex justify-center items-center gap-3">
            <Image
              className="bg-[#063BE8] p-2 rounded-lg"
              src="/vector.png"
              alt="logo"
              width={50}
              height={50}
            />
            <h5 className="text-3xl text-[#0A0A0A]">Ehen Tours</h5>
          </div>

          {/* MAIN CARD */}
          <div className="bg-white shadow-md rounded-[20px] w-full p-7 mb-7">

            {/* Heading */}
            <h2 className="text-[28px] font-bold text-center mb-3.5">
              {step === "phone"
                ? "Welcome To Travel"
                : step === "verify"
                  ? "Enter the 4-digit code"
                  : step === "profile"
                    ? "Your Profile Info"
                    : step === "password"
                      ? "Create New Password"
                      : ""}
            </h2>

            {/* PHONE STEP */}
            {step === "phone" && (
              <div className="flex flex-col gap-4">

                <label className="text-m font-semibold text-[#3A3A3A]">
                  Enter Phone Number
                </label>

                <PhoneInput
                  country={"bd"}
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  inputStyle={{
                    width: "450px",
                    height: "50px",
                    borderRadius: "0px",
                    fontSize: "16px",
                    paddingLeft: "58px",
                  }}
                  buttonStyle={{
                    borderRadius: "0px",
                    width: "42px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  containerStyle={{
                    width: "450px",
                  }}
                  dropdownStyle={{
                    width: "350px",
                  }}
                  specialLabel=""
                />

                <style jsx global>{`
                  .react-tel-input .flag {
                    transform: scale(1.3);
                    margin-left: 6px;
                  }
                `}</style>

                <p className="text-[#6B6B6B] text-sm mt-2">
                  We will send you a verification code to this number
                </p>

                <button
                  onClick={handleSendCode}
                  className="bg-[#0057FF] text-white py-3 rounded-lg font-medium"
                >
                  {phone.length > 0 ? "Send Code" : "Continue"}
                </button>

                <div className="flex items-center gap-3 mt-2">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <span className="text-gray-500 text-sm">Or</span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <button className="border rounded-lg py-3 flex items-center justify-center gap-3">
                  <Image src="/google.png" alt="google" width={20} height={20} />
                  <span className="text-sm font-medium">Sign up with Google</span>
                </button>

                <button className="border rounded-lg py-3 flex items-center justify-center gap-3">
                  <Image src="/apple.png" alt="apple" width={20} height={20} />
                  <span className="text-sm font-medium">Sign up with Apple</span>
                </button>

                <p className="text-center text-sm text-[#6B6B6B] mt-2">
                  Don’t have an account?{" "}
                  <span className="text-[#0057FF] cursor-pointer font-medium">
                    Login
                  </span>
                </p>

              </div>
            )}

            {/* VERIFY STEP */}
            {step === "verify" && (
              <div className="flex flex-col gap-6 items-center w-full">

                <div className="flex gap-4">
                  {[0, 1, 2, 3].map((i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      className="w-[80px] h-[80px] border-2 border-[#F04438] rounded-lg p-[10px_8px] text-center text-2xl"
                      value={code[i] || ""}
                      onChange={(e) => {
                        const newCode = code.split("");
                        newCode[i] = e.target.value.replace(/\D/, "");
                        setCode(newCode.join(""));
                        const next = document.getElementById(`code-${i + 1}`);
                        if (next && e.target.value)
                          (next as HTMLInputElement).focus();
                      }}
                      id={`code-${i}`}
                    />
                  ))}
                </div>

                <p className="text-sm text-[#6B6B6B] mt-2">
                  Didn’t get a code?{" "}
                  <span
                    className="text-[#0057FF] cursor-pointer font-medium"
                    onClick={() => {
                      setStep("phone");
                      setCode("");
                    }}
                  >
                    Click to resend
                  </span>
                </p>

                <div className="flex justify-between w-full mt-4 gap-4">
                  <button
                    onClick={() => setStep("phone")}
                    className="flex-1 border border-gray-300 rounded-lg py-3"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleVerify}
                    className="flex-1 bg-[#0057FF] text-white rounded-lg py-3"
                  >
                    Verify
                  </button>
                </div>
              </div>
            )}

            {/* PROFILE STEP */}
            {step === "profile" && (
              <div className="flex flex-col gap-6 items-center w-full">

                {/* First & Last Name */}
                <div className="flex gap-4 w-full">
                  <div className="flex flex-col w-[216px]">
                    <label className="font-bold text-sm mb-1">First Name</label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      className="w-full h-[44px] border rounded-lg p-2 text-[#667085]"
                      value={profile.firstName}
                      onChange={(e) =>
                        setProfile({ ...profile, firstName: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col w-[216px]">
                    <label className="font-bold text-sm mb-1">Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      className="w-full h-[44px] border rounded-lg p-2 text-[#667085]"
                      value={profile.lastName}
                      onChange={(e) =>
                        setProfile({ ...profile, lastName: e.target.value })
                      }
                    />
                  </div>
                </div>
                <p className="text-sm text-[#667085]">
                  Make sure this matches the name on your Government National ID
                </p>

                {/* Gender & DOB */}
                <div className="flex gap-4 w-full">
                  {/* Gender Dropdown */}
                  <div className="flex flex-col w-[216px]">
                    <label className="font-bold text-sm mb-1">Your Gender</label>
                    <div className="relative w-full h-[44px]">
                      <select
                        value={profile.gender}
                        onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
                        className="w-full h-full border rounded-lg p-2 appearance-none text-[#667085] pr-8"
                      >
                        <option value="" disabled>
                          Select gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
                        <svg
                          className="w-4 h-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Date of Birth */}
                  <div className="flex flex-col w-[216px]">
                    <label className="font-bold text-sm mb-1">Date of Birth</label>
                    <input
                      type="date"
                      className="w-full h-[44px] border rounded-lg p-2 text-[#667085]"
                      value={profile.dob}
                      onChange={(e) =>
                        setProfile({ ...profile, dob: e.target.value })
                      }
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col w-[452px] relative">
                  <label className="font-bold text-sm mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-[44px] border rounded-lg p-2 pr-10 text-[#667085]"
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                  />
                  <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 0v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0L12 13 3 8"
                      />
                    </svg>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between w-full mt-4 gap-4">
                  <button className="flex-1 border border-gray-300 rounded-lg py-3">
                    Skip
                  </button>
                  <button
                    className="flex-1 bg-[#0057FF] text-white rounded-lg py-3"
                    onClick={handleProfileContinue}
                  >
                    Continue
                  </button>
                </div>

                {/* Consent Text */}
                <div
                  className="w-full mt-4 p-3 text-sm text-[#3A3A3A] text-center"
                  style={{ backgroundColor: "#E6EAF682" }}
                >
                  By selecting agree and continue I agree Travel terms of service, payment terms of service and Nondiscrimination Policy and acknowledge the{" "}
                  <span className="text-[#0057FF] cursor-pointer">Privacy Policy</span>
                </div>

              </div>
            )}

            {/* PASSWORD STEP */}
            {step === "password" && (
              <div className="flex flex-col gap-6 items-center w-full">

                {/* Password Inputs */}
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-col w-[452px]">
                    <label className="font-bold text-sm mb-1">Create Password</label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full h-[44px] border rounded-lg p-2 text-[#667085]"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* Password Strength */}
                    <div className="flex gap-1 mt-2 h-2">
                      {[0, 1, 2].map(i => (
                        <div
                          key={i}
                          className={`flex-1 rounded h-full ${getPasswordStrength(password) > i ? "bg-green-500" : "bg-gray-300"}`}
                        ></div>
                      ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {getPasswordStrength(password) === 0
                        ? ""
                        : getPasswordStrength(password) <= 1
                          ? "Weak"
                          : getPasswordStrength(password) === 2
                            ? "Medium"
                            : "Strong"}
                    </p>
                  </div>

                  <div className="flex flex-col w-[452px]">
                    <label className="font-bold text-sm mb-1">Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      className="w-full h-[44px] border rounded-lg p-2 text-[#667085]"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  className="w-full bg-[#0057FF] text-white rounded-lg py-3 mt-2"
                  onClick={handlePasswordContinue}
                >
                  Continue
                </button>

                <p className="text-center text-sm text-[#6B6B6B] mt-2">
                  Already have an account?{" "}
                  <span className="text-[#0057FF] cursor-pointer font-medium">
                    Sign in
                  </span>
                </p>
              </div>
            )}

            {/* SUCCESS STEP */}
            {step === "success" && (
              <div className="flex flex-col gap-4 items-center w-full text-center">
                <Image
                  src="/right.png"
                  alt="success"
                  width={150}
                  height={150}
                  className="mx-auto"
                />
                <h2 className="text-2xl font-bold text-[#0A0A0A]">Saved Successfully</h2>
                <p className="text-[#6B6B6B]">
                  Your file has been successfully saved. Now it’s open and ready for members to start using.
                </p>
                <button
                  onClick={() => console.log("Continue clicked")}
                  className="bg-[#0057FF] text-white rounded-lg py-3 w-[452px] mt-4"
                >
                  Continue
                </button>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="w-full py-4 text-center text-sm text-[#3A3A3A]"
        style={{ backgroundColor: "#E6EAF682" }}
      >
        By signing up you agree to our{" "}
        <span className="text-[#0057FF] cursor-pointer font-medium">
          Privacy Policy
        </span>{" "}
        and{" "}
        <span className="text-[#0057FF] cursor-pointer font-medium">
          Terms of Service
        </span>
      </div>
    </div>
  );
};

export default LoginPage;
