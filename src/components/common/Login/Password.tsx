import React from 'react'
import toast from 'react-hot-toast';

const Password = ({ password, getPasswordStrengthText, resetLoading, getPasswordStrengthColor, getPasswordStrength, setPassword, confirmPassword, setConfirmPassword, resetInput, otp, resetPassword, setStep }: any) => {

  const handleReset = async () => {
    if (!password || !confirmPassword) {
      return toast.error("Please enter password");
    }
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match");
    }

    try {
      const response = await resetPassword({
        email: resetInput,
        otp: otp.join(""),
        newPassword: password
      }).unwrap();

      toast.success(response.message || "Password reset successfully!");
      setStep("success");

    } catch (err) {
      toast.error(err + "Reset failed");
    }
  };

  return (
    <div className="flex flex-col gap-6 items-center w-full p-7">
      <h2 className="text-4xl font-semibold text-[#000B2F] text-center mb-3">
        Create New Password
      </h2>

      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col w-[452px]">
          <label className="font-semibold text-sm mb-1">New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full h-11 border rounded-lg p-2"
            value={password}
            onChange={e => setPassword(e.target.value)}
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

        <div className="flex flex-col w-[452px]">
          <label className="font-semibold text-sm mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full h-11 border rounded-lg p-2"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
      </div>

      <button
        className="w-full bg-[#0057FF] text-white rounded-lg py-3 mt-2 hover:bg-blue-600 transition"
        onClick={handleReset}
      >
       {resetLoading ? "Loading..." : "Reset Password"} 
      </button>
    </div>
  );
};

export default Password;
