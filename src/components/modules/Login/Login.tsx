"use client";

import { useForgotPasswordMutation, useLoginUserMutation, useResetPasswordMutation } from "@/redux/featured/auth/authApi";
import { Plane } from "lucide-react";
import Image from "next/image";
import { useState, useRef} from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast';
import LoginCommon from "@/components/common/Login/Login";
import Forgot from "@/components/common/Login/Forgot";
import Otp from "@/components/common/Login/Otp";
import Password from "@/components/common/Login/Password";
import Success from "@/components/common/Login/Success";
import { useDispatch } from "react-redux";
import { setToken } from "@/redux/featured/auth/authSlice";

const Login = () => {
  const [step, setStep] = useState<"login" | "forgot" | "otp" | "password" | "success">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [resetInput, setResetInput] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpRefs = useRef<HTMLInputElement[]>([]);
  const [loginUser, { isLoading: loginLoading, error: loginError }] = useLoginUserMutation();
  const [forgotPassword, { isLoading: forgotLoading}] = useForgotPasswordMutation();
  const [resetPassword, { isLoading: resetLoading}] = useResetPasswordMutation();

  const router = useRouter();
  const dispatch = useDispatch();
  const getPasswordStrength = (pass: string) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/[0-9]/.test(pass)) strength++;
    return strength;
  };
  const getPasswordStrengthColor = () => {
    const strength = getPasswordStrength(password);
    if (strength <= 1) return "text-red-500";
    if (strength === 2) return "text-yellow-500";
    return "text-green-500";
  };
  const getPasswordStrengthText = () => {
    const strength = getPasswordStrength(password);
    if (strength === 0 || password.length === 0) return "";
    if (strength <= 1) return "Weak";
    if (strength === 2) return "Medium";
    return "Strong";
  };
  const handleForgot = async () => {
    try {
      const res = await forgotPassword({ email: resetInput }).unwrap();
      toast.success(res.message || "Check your email for reset link");
      setStep("otp")
    } catch (err) {
      toast.error( err + "Something went wrong");
    }
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

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Invalid email format");
      return;
    }

    try {
      const response = await loginUser({
        email,
        password,
      }).unwrap();

      const token = response?.data.accessToken
      if (response.success) {
        localStorage.setItem("authToken", token);
      }
      dispatch(setToken(token));
      router.push("/");
      toast.success(response?.message || "Login successful!");

    } catch (err: any) {
      const errorMessage = err?.data?.message || err?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
    }
  };




  return (
    <div className="w-full h-screen bg-[#F2F4F8] flex flex-col justify-center items-center p-2">
      <div className="flex justify-between w-full h-full items-center">
        {/* LEFT IMAGE */}
        <div className="relative w-[50%] h-full">
          <Image
            src="/Frame 2147226025.png"
            alt="plane"
            fill
            className="object-cover rounded-3xl"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="flex justify-center relative w-[50%] items-center">
          <div className="absolute w-40 h-40 top-0 right-0 bg-[#063BE8] blur-[250px]"></div>
          <div className="flex flex-col 2xl:gap-[42px] xl:gap-4">
            {/* Logo */}
            <div className="flex justify-center items-center gap-3">
              <div className="bg-[#0028A8] text-white p-2 rounded-md flex items-center justify-center">
                <Plane size={30} />
              </div>
              <h5 className="text-3xl text-[#0A0A0A]">Ehen Tours</h5>
            </div>

            {/* Main Card */}
            <div className="bg-[#FAFBFC] border z-20 overflow-hidden rounded-[20px] w-full">
              {/* STEP 1: LOGIN */}
              {step === "login" && (
                <LoginCommon
                  error={loginError}
                  email={email}
                  setEmail={setEmail}
                  isLoading={loginLoading}
                  password={password}
                  setPassword={setPassword}
                  handleLogin={handleLogin}
                  setStep={setStep} />
              )}

              {/* STEP 2: FORGOT PASSWORD */}
              {step === "forgot" && (
                <Forgot
                  resetInput={resetInput}
                  setResetInput={setResetInput}
                  handleForgot={handleForgot}
                  setStep={setStep}
                  forgotLoading={forgotLoading}
                />
              )}

              {/* STEP 3: OTP VERIFICATION */}
              {step === "otp" && (
                <Otp
                  otp={otp}
                  otpRefs={otpRefs}
                  handleOtpChange={handleOtpChange}
                  setOtp={setOtp}
                  setStep={setStep}

                />
              )}

              {/* STEP 4: CREATE NEW PASSWORD */}
              {step === "password" && (
                <Password
                  password={password}
                  setPassword={setPassword}
                  confirmPassword={confirmPassword}
                  setConfirmPassword={setConfirmPassword}
                  resetPassword={resetPassword}
                  resetInput={resetInput}
                  otp={otp}
                  setStep={setStep}
                  getPasswordStrength={getPasswordStrength}
                  getPasswordStrengthColor={getPasswordStrengthColor}
                  getPasswordStrengthText={getPasswordStrengthText}
                  resetLoading={resetLoading}
                />
              )}

              {/* STEP 5: SUCCESS */}
              {step === "success" && (
                <Success setStep={setStep} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;