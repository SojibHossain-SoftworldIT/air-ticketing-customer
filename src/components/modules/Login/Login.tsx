"use client";

import { CircleCheckBig, Plane } from "lucide-react";
import Image from "next/image";
import { useState, useRef } from "react";
const Login = () => {
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



  return (
    <div className="w-full  h-screen bg-[#F2F4F8]  flex flex-col justify-center items-center p-2">

      <div className="flex  justify-between w-full h-full   items-center ">
        {/* LEFT IMAGE */}
        <div className="relative w-[50%]  h-full">
          <Image
            src="/Frame 2147226025.png"
            alt="plane"
            fill
            className="object-cover rounded-3xl"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="flex justify-center relative w-[50%] items-center ">
          <div className="absolute w-40 h-40 top-0 right-0  bg-[#063BE8] blur-[250px]"></div>
          <div className=" flex flex-col  2xl:gap-[42px] xl:gap-4 ">
            {/* Logo */}
            <div className="flex justify-center items-center gap-3">
              <div className={`bg-[#0028A8] text-white  p-2 rounded-md flex items-center justify-center`}>
                <Plane size={30} />
              </div>
              <h5 className="text-3xl text-[#0A0A0A]">Ehen Tours</h5>
            </div>

            {/* Main Card */}
            <div className=" bg-[#FAFBFC] border z-20 overflow-hidden rounded-[20px] w-full ">

              {/* STEP 1: LOGIN */}
              {step === "login" && (
                <div className="flex flex-col max-w-[500px]">
                  <div className="flex flex-col xl:gap-3 2xl:gap-6 items-center w-full  px-7 2xl:py-7 ">
                    <h2 className="text-[28px] font-semibold text-center 2xl:mb-3.5">Welcome back</h2>

                    <div className="flex flex-col w-full">
                      <label className="font-semibold text-sm mb-1">Email or Phone number</label>
                      <input
                        type="email"
                        placeholder="Write your Email or Phone number"
                        className="w-full h-11 border rounded-lg shadow-xs p-2 text-[#667085] focus:ring-2 focus:ring-blue-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col w-full">
                      <label className="font-semibold text-sm mb-1">Password</label>
                      <input
                        type="password"
                        placeholder="password"
                        className="w-full h-11 shadow-xs border rounded-lg p-2 text-[#667085] focus:ring-2 focus:ring-blue-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <div className="w-full flex justify-start">
                      <button
                        className="text-[#0536D3] text-sm font-semibold hover:underline"
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
                      className="w-full bg-[#063BE8] text-white rounded-lg py-3 hover:bg-blue-600 transition"
                    >
                      Continue
                    </button>

                    <div className="flex items-center gap-3 ">
                      <div className="flex-1 border-t w-[77.5px] border-t-[#CBD5E1] "></div>
                      <span className="text-gray-500 text-sm">Or</span>
                      <div className="flex-1 border-t w-[77.5px] border-t-[#CBD5E1] "></div>
                    </div>

                    <div className="w-full flex flex-col gap-3  ">

                      <button className="border rounded-lg py-3 shadow-xs flex items-center justify-center gap-3 w-full hover:bg-gray-100 transition">
                        <Image src="/google.png" alt="google" width={20} height={20} />
                        <span className="text-sm font-medium">Continue with Google</span>
                      </button>

                      <button className="border rounded-lg py-3 shadow-xs flex items-center justify-center gap-3 w-full hover:bg-gray-100 transition">
                        <Image src="/apple.png" alt="apple" width={20} height={20} />
                        <span className="text-sm font-medium">Continue with Apple</span>
                      </button>

                    </div>
                  </div>
                  <div className="w-full mt-4 px-2 py-2 2xl:py-5 text-sm text-[#64748B] text-center bg-[#E6EAF682]">
                    By selecting agree and continue i agree{" "}
                    <span className="text-[#0057FF] cursor-pointer">Travel terms</span> of service,{" "}
                    <span className="text-[#0057FF] cursor-pointer">payment terms </span> of service and Nondiscrimination Policy and acknowledge the <span className="text-[#0057FF] cursor-pointer">Privacy Policy </span>
                  </div>

                </div>
              )}

              {/* STEP 2: FORGOT PASSWORD */}
              {step === "forgot" && (
                <div className="flex flex-col gap-6 items-center w-full p-7">
                  <div className="bg-[#FEECEB]  text-[#F04438] text-sm font-medium px-4 py-2 rounded-full w-fit">
                    Forget Password
                  </div>

                  <h2 className="text-[28px] font-normal text-center">
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
                      className="w-full h-11 border rounded-lg p-2 text-[#667085] focus:ring-2 focus:ring-blue-400"
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
                <div className="w-full ">
                  <div className="flex flex-col 2xl:gap-6 items-center p-7  ">
                    <h1 className="bg-[#F79009] py-1 px-4 rounded-xl text-white">Forget Passwords</h1>

                    <h2 className="text-4xl font-semibold text-center mb-2">OTP Verification</h2>
                    <p className="text-center  w-60  text-[#475467] text-lg">
                      Our OTP sent to this email <span className=""> demo@gmail.com</span>
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
                          className="w-20 h-20 border-2 border-[#063BE8] rounded-lg p-[10px_8px] text-center text-2xl focus:ring-2 focus:ring-blue-400"
                          value={o}
                          onChange={(e) => handleOtpChange(i, e.target.value)}
                        />
                      ))}
                    </div>

                    <p className="text-sm text-[#6B6B6B] mt-2 text-center">
                      Didn`t get a code?{" "}
                      <button className="text-[#063BE8] font-medium hover:underline" onClick={() => setOtp(["", "", "", ""])}>
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

                  </div>

                  <div className="w-full mt-4 px-24 py-5 text-sm text-[#64748B] text-center bg-[#E6EAF682]">
                    By signing up you agree to our{" "}
                    <span className="text-[#0057FF] cursor-pointer">Privacy Policy</span> and{" "}
                    <span className="text-[#0057FF] cursor-pointer">Terms of Service</span>
                  </div>
                </div>
              )}

              {/* STEP 4: CREATE NEW PASSWORD */}
              {step === "password" && (
                <div className="flex flex-col 2xl:gap-6 items-center w-full p-7 mb-1">
                  <h2 className="text-4xl font-semibold text-[#000B2F]  text-center mb-3">Create New Password</h2>

                  <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col w-[452px]">
                      <label className="font-bold text-sm mb-1">Create a password</label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full h-11 border rounded-lg p-2 text-[#667085] focus:ring-2 focus:ring-blue-400"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />


                    </div>
                    <div>
                      <p className="font-bold text-sm text-[#12B76A]">Strong</p>

                      <div className="flex gap-1 mt-2 h-2">
                        {[0, 1, 2].map((i) => (
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
                      <label className="font-bold text-sm mb-1">Confirm password</label>
                      <input
                        type="password"
                        placeholder="Confirm your password"
                        className="w-full h-11 border rounded-lg p-2 text-[#667085] focus:ring-2 focus:ring-blue-400"
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
                <div className="flex flex-col gap-4 items-center w-full 2xl:p-7 py-7 text-center">
                  <div className="p-5 bg-[#B6E9D1] rounded-full" >
                    <CircleCheckBig size={60} color="#12B76A" />


                  </div>
                  <h2 className="text-2xl font-semibold text-[#0A0A0A]">Saved Successfully</h2>
                  <p className="text-[#6B6B6B] w-8/12">Your file has been successfully saved. Now it’s open and ready for members to start using.</p>
                  <button
                    onClick={() => setStep("login")}
                    className="bg-[#0057FF] text-white rounded-lg py-3 w-[452px] mt-4 hover:bg-blue-600 transition"
                  >
                    Continue
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>


      </div>
    </div>


  );
};

export default Login;
