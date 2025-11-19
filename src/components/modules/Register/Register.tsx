"use client";

import { useCompleteRegistrationMutation, useRegisterUserMutation, useVerifyRegistrationEmailMutation } from "@/redux/featured/auth/authApi";
import {Plane } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import { toast } from 'react-hot-toast';
import EmailStep from "@/components/common/Register/EmailStep";
import VerifyStep from "@/components/common/Register/VerifyStep";
import ProfileStep from "@/components/common/Register/ProfileStep";
import Password from "@/components/common/Login/Password";
import SuccessStep from "@/components/common/Register/SuccessStep";

const Register = () => {
  const [step, setStep] = useState<"email" | "verify" | "profile" | "password" | "success">("email");
  const [code, setCode] = useState("");
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    phoneNumber: "",
    password: "",
    email: "",
    dateOfBirth: ""
  });

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dataEmail, setDataEmail] = useState("");

  const [completeRegistration, { isLoading: isCompleting }] = useCompleteRegistrationMutation();
  const [registerUser, { isLoading: isRegistering }] = useRegisterUserMutation();
  const [verifyEmail, { isLoading: isVerifying }] = useVerifyRegistrationEmailMutation();

  // Send OTP to email
  const handleSendCode = async () => {
    if (!profile.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const res = await registerUser({ email: profile.email }).unwrap();
      toast.success(res?.message || "Verification code sent!");
      setDataEmail(profile.email);
      setStep("verify");
    } catch (err: any) {
      const errorMessage = err?.data?.message || err?.message || "Failed to send code";
      toast.error(errorMessage);
      console.error("Send code error:", err);
    }
  };

  // Verify OTP
  const handleVerify = async () => {
    if (code.length !== 6) {
      toast.error("Please enter the complete 6-digit code");
      return;
    }

    if (!dataEmail) {
      toast.error("Email not found. Please restart the process.");
      setStep("email");
      return;
    }

    try {
      const res = await verifyEmail({
        email: dataEmail,
        otp: code
      }).unwrap();

      toast.success(res?.message || "Email verified successfully!");
      setStep("profile");
    } catch (error: any) {
      const errorMessage = error?.data?.message || error?.message || "Invalid or expired OTP!";
      toast.error(errorMessage);
      console.error("Verify error:", error);
    }
  };

  // Complete registration
  const handleCompleteRegistration = async () => {
    // Validation
    if (!profile.firstName || !profile.lastName) {
      toast.error("Please enter your first and last name");
      return;
    }

    if (!profile.gender) {
      toast.error("Please select your gender");
      return;
    }

    if (!profile.dateOfBirth) {
      toast.error("Please enter your date of birth");
      return;
    }

    if (!password || password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const registrationData = {
        email: dataEmail,
        phoneNumber: profile.phoneNumber || "",
        firstName: profile.firstName,
        lastName: profile.lastName,
        password: password,
        gender: profile.gender.toUpperCase(),
        dateOfBirth: profile.dateOfBirth
      };

      console.log("Registration payload:", registrationData);

      const res = await completeRegistration(registrationData).unwrap();

      toast.success(res?.message || "Registration completed successfully!");
      setStep("success");
    } catch (error: any) {
      const errorMessage = error?.data?.message || error?.message || "Registration failed";
      toast.error(errorMessage);
      console.error("Complete registration error:", error);
    }
  };

  const getPasswordStrength = (pass: string) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (/[A-Z]/.test(pass)) strength++;
    if (/[0-9]/.test(pass)) strength++;
    if (/[^A-Za-z0-9]/.test(pass)) strength++;
    return strength;
  };

  const getPasswordStrengthText = () => {
    const strength = getPasswordStrength(password);
    if (strength === 0 || password.length === 0) return "";
    if (strength <= 1) return "Weak";
    if (strength === 2) return "Medium";
    return "Strong";
  };

  const getPasswordStrengthColor = () => {
    const strength = getPasswordStrength(password);
    if (strength <= 1) return "text-red-500";
    if (strength === 2) return "text-yellow-500";
    return "text-green-500";
  };

  return (
    <div className="w-full h-screen bg-[#FAFBFC] flex flex-col justify-center items-center p-2">
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

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-4 justify-center relative w-[50%] items-center">
          <div className="absolute w-40 h-40 top-0 right-0 bg-[#063BE8] blur-[250px]"></div>

          {/* Logo */}
          <div className="flex justify-center items-center gap-3">
            <div className="bg-[#0028A8] text-white p-2 rounded-md flex items-center justify-center">
              <Plane size={30} />
            </div>
            <h5 className="text-3xl text-[#0A0A0A]">Ehen Tours</h5>
          </div>

          {/* MAIN CARD */}
          <div className="bg-[#FAFBFC] max-w-[500px] border z-20 overflow-hidden rounded-[20px] w-full">

            {/* Heading */}
            <h2 className="text-[28px] font-semibold py-4 text-center">
              {step === "email" && "Welcome To Travel"}
              {step === "verify" && "Enter the 6-digit code"}
              {step === "profile" && "Your Profile Info"}
              {step === "password" && "Create New Password"}
              {step === "success" && ""}
            </h2>

            {/* EMAIL STEP */}
            {step === "email" && (

              <EmailStep
                profile={profile}
                setProfile={setProfile}
                handleSendCode={handleSendCode}
                isRegistering={isRegistering} />
            )}

            {/* VERIFY STEP */}
            {step === "verify" && (
              <VerifyStep
                code={code}
                setCode={setCode}
                setStep={setStep}
                handleVerify={handleVerify}
                isVerifying={isVerifying} />
            )}

            {/* PROFILE STEP */}
            {step === "profile" && (
              <ProfileStep
                profile={profile}
                setProfile={setProfile}
                setStep={setStep} />
            )}

            {/* PASSWORD STEP */}
            {step === "password" && (
              <Password
                password={password}
                setPassword={setPassword}
                getPasswordStrengthColor={getPasswordStrengthColor}
                getPasswordStrengthText={getPasswordStrengthText}
                getPasswordStrength={getPasswordStrength}
                confirmPassword={confirmPassword}
                setConfirmPassword={setConfirmPassword}
                setStep={setStep}
                handleCompleteRegistration={handleCompleteRegistration}
                isCompleting={isCompleting} />
            )}

            {/* SUCCESS STEP */}
            {step === "success" && (
              <SuccessStep />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;