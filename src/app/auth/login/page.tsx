"use client";

import Image from "next/image";
import { useState, useRef } from "react";
const LoginPage = () => {
  const [step, setStep] = useState<"login" | "forgot" | "otp" | "password" | "success">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetInput, setResetInput] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpRefs = useRef<HTMLInputElement[]>([]);

  const getPasswordStrength = (pass: string) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/[0-9]/.test(pass)) strength++;
    if (/[^A-Za-z0-9]/.test(pass)) strength++;
    return strength;
  };

  const handleOtpChange = (index: number, value: string) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) otpRefs.current[index + 1]?.focus();
      if (!value && index > 0) otpRefs.current[index - 1]?.focus();
    }
  };

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  // const variants = {
  //   initial: { opacity: 0, x: 50 },
  //   animate: { opacity: 1, x: 0 },
  //   exit: { opacity: 0, x: -50 },
  // };

  return (
    <div className="w-full min-h-screen bg-[#F2F4F8] flex flex-col justify-between ">
      <div className="flex justify-center items-start pt-[50px]">
        {/* LEFT IMAGE */}
        <div className="rounded-3xl overflow-hidden">
          <Image
            src="/Frame 2147226025.png"
            alt="plane"
            width={740}
            height={1016}
            className="rounded-3xl"
            priority
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="w-[500px] h-[750px] flex flex-col gap-[42px] pt-40 ml-28">
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

          {/* Main Card */}
          <div className=" bg-white shadow-md rounded-[20px] w-full p-7 mb-7">
            <>
              {/* STEP 1: LOGIN */}
              {step === "login" && (
                <div className="flex flex-col gap-6 items-center w-full">
                  <h2 className="text-[28px] font-bold text-center mb-3.5">Welcome back</h2>

                  <div className="flex flex-col w-[452px]">
                    <label className="font-bold text-sm mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full h-[44px] border rounded-lg p-2 text-[#667085] focus:ring-2 focus:ring-blue-400"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col w-[452px]">
                    <label className="font-bold text-sm mb-1">Password</label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full h-[44px] border rounded-lg p-2 text-[#667085] focus:ring-2 focus:ring-blue-400"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="w-full flex justify-start">
                    <button
                      className="text-[#0057FF] text-sm font-medium hover:underline"
                      onClick={() => setStep("forgot")}
                    >
                      Forgot Password?
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      if (!email || !password) return alert("Please enter email and password");
                      if (!isValidEmail(email)) return alert("Invalid email");
                      setStep("otp");
                    }}
                    className="w-full bg-[#0057FF] text-white rounded-lg py-3 mt-2 hover:bg-blue-600 transition"
                  >
                    Continue
                  </button>

                  <div className="flex items-center gap-3 mt-2 w-full">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-gray-500 text-sm">Or</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>

                  <button className="border rounded-lg py-3 flex items-center justify-center gap-3 w-full hover:bg-gray-100 transition">
                    <Image src="/google.png" alt="google" width={20} height={20} />
                    <span className="text-sm font-medium">Continue with Google</span>
                  </button>

                  <button className="border rounded-lg py-3 flex items-center justify-center gap-3 w-full hover:bg-gray-100 transition">
                    <Image src="/apple.png" alt="apple" width={20} height={20} />
                    <span className="text-sm font-medium">Continue with Apple</span>
                  </button>
                </div>
              )}

              {/* STEP 2: FORGOT PASSWORD */}
              {step === "forgot" && (
                <div className="flex flex-col gap-6 items-center w-full">
                  <div className="bg-[#FEECEB] border border-[#F04438] text-[#F04438] text-sm font-medium px-4 py-2 rounded-lg w-fit">
                    Forget Password
                  </div>

                  <h2 className="text-[28px] font-bold text-center mb-2">
                    Add Email or Phone number
                  </h2>

                  <p className="text-center text-[#667085] text-sm max-w-[400px] leading-relaxed">
                    No problem, Just enter your email address below — we`ll send you a OTP Code to reset password
                  </p>

                  <div className="flex flex-col w-[452px]">
                    <label className="font-bold text-sm mb-1">Email / Phone</label>
                    <input
                      type="text"
                      placeholder="Enter your email or phone number"
                      className="w-full h-[44px] border rounded-lg p-2 text-[#667085] focus:ring-2 focus:ring-blue-400"
                      value={resetInput}
                      onChange={(e) => setResetInput(e.target.value)}
                    />
                  </div>

                  <button
                    onClick={() => {

                      setStep("otp");
                    }}
                    className="w-full bg-[#0057FF] text-white rounded-lg py-3 mt-2 hover:bg-blue-600 transition"
                  >
                    Continue
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
              )}

              {/* STEP 3: OTP VERIFICATION */}
              {step === "otp" && (
                <div className="flex flex-col gap-6 items-center w-full">
                  <h2 className="text-[28px] font-bold text-center mb-2">OTP Verification</h2>
                  <p className="text-center text-[#667085] text-sm">
                    Our OTP sent to this email: <span className="font-medium">{email || "demo@gmail.com"}</span>
                  </p>

                  <div className="flex gap-4 mt-4">
                    {otp.map((o, i) => (
                      <input
                        key={i}
                        ref={(el) => {
                          otpRefs.current[i] = el!;
                        }}
                        type="text"
                        maxLength={1}
                        className="w-[80px] h-[80px] border-2 border-[#F04438] rounded-lg p-[10px_8px] text-center text-2xl focus:ring-2 focus:ring-blue-400"
                        value={o}
                        onChange={(e) => handleOtpChange(i, e.target.value)}
                      />
                    ))}
                  </div>

                  <p className="text-sm text-[#6B6B6B] mt-2 text-center">
                    Didn`t get a code?{" "}
                    <button className="text-[#0057FF] font-medium hover:underline" onClick={() => setOtp(["", "", "", ""])}>
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
                      Verify
                    </button>
                  </div>

                  <div className="w-full mt-4 p-3 text-sm text-[#3A3A3A] text-center bg-[#E6EAF6]">
                    By signing up you agree to our{" "}
                    <span className="text-[#0057FF] cursor-pointer">Privacy Policy</span> and{" "}
                    <span className="text-[#0057FF] cursor-pointer">Terms of Service</span>
                  </div>
                </div>
              )}

              {/* STEP 4: CREATE NEW PASSWORD */}
              {step === "password" && (
                <div className="flex flex-col gap-6 items-center w-full">
                  <h2 className="text-[28px] font-bold text-center mb-3">Create New Password</h2>

                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col w-[452px]">
                      <label className="font-bold text-sm mb-1">Password</label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full h-[44px] border rounded-lg p-2 text-[#667085] focus:ring-2 focus:ring-blue-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <div className="flex gap-1 mt-2 h-2">
                        {[0, 1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded h-full ${getPasswordStrength(password) > i ? "bg-green-500" : "bg-gray-300"
                              }`}
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
                        className="w-full h-[44px] border rounded-lg p-2 text-[#667085] focus:ring-2 focus:ring-blue-400"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <button
                    className="w-full bg-[#0057FF] text-white rounded-lg py-3 mt-2 hover:bg-blue-600 transition"
                    onClick={() => {
                      if (!password || !confirmPassword) return alert("Enter password");
                      if (password !== confirmPassword) return alert("Passwords do not match");
                      setStep("success");
                    }}
                  >
                    Continue
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
              )}

              {/* STEP 5: SUCCESS */}
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
                  <p className="text-[#6B6B6B]">Your password has been reset successfully.</p>
                  <button
                    onClick={() => setStep("login")}
                    className="bg-[#0057FF] text-white rounded-lg py-3 w-[452px] mt-4 hover:bg-blue-600 transition"
                  >
                    Continue
                  </button>
                </div>
              )}
            </>
          </div>
        </div>
      </div>

      {/* Global Footer */}
      <div className="w-full py-4 text-center text-sm text-[#3A3A3A]" style={{ backgroundColor: "#E6EAF682" }}>
        By signing up you agree to our{" "}
        <span className="text-[#0057FF] cursor-pointer font-medium">Privacy Policy</span> and{" "}
        <span className="text-[#0057FF] cursor-pointer font-medium">Terms of Service</span>
      </div>
    </div>
  );
};

export default LoginPage;
