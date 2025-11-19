import React from 'react'

const VerifyStep = ({ code, setCode, setStep, handleVerify, isVerifying }: any) => {
    return (
        <div>
            <div className="flex flex-col gap-6 p-7 items-center w-full">
                <div className="flex gap-4">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                        <input
                            key={i}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            className="w-12 h-12 border-2 border-[#F04438] rounded-lg p-[10px_8px] text-center text-2xl"
                            value={code[i] || ""}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/, "");
                                const newCode = code.split("");
                                newCode[i] = value;
                                setCode(newCode.join(""));

                                if (value && i < 5) {
                                    const next = document.getElementById(`code-${i + 1}`);
                                    if (next) (next as HTMLInputElement).focus();
                                }
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Backspace" && !code[i] && i > 0) {
                                    const prev = document.getElementById(`code-${i - 1}`);
                                    if (prev) (prev as HTMLInputElement).focus();
                                }
                            }}
                            onPaste={(e) => {
                                e.preventDefault();
                                const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
                                if (pastedData) {
                                    setCode(pastedData.padEnd(6, ""));
                                    const lastInput = document.getElementById(`code-${Math.min(pastedData.length, 5)}`);
                                    if (lastInput) (lastInput as HTMLInputElement).focus();
                                }
                            }}
                            id={`code-${i}`}
                        />
                    ))}
                </div>

                <p className="text-sm text-[#6B6B6B] mt-2">
                    Didn&apos;t get a code?{" "}
                    <span
                        className="text-[#0057FF] cursor-pointer font-medium"
                        onClick={() => {
                            setStep("email");
                            setCode("");
                        }}
                    >
                        Click to resend
                    </span>
                </p>


                <div className="flex justify-between w-full mt-4 gap-4">
                    <button
                        className="flex-1 border text-[#1D68E5] bg-[#DDE8FB] rounded-lg py-3"
                        onClick={() => setStep("email")}
                    >
                        Back
                    </button>
                    <button
                        onClick={handleVerify}
                        disabled={isVerifying || code.length !== 6}
                        className="flex-1 bg-[#0057FF] text-white rounded-lg py-3 disabled:opacity-50"
                    >
                        {isVerifying ? "Verifying..." : "Verify"}
                    </button>
                </div>
            </div>

            <div className="bg-[#E6EAF682] p-3 w-full">
                <p className="text-center text-sm text-[#6B6B6B]">
                    By signing up you agree to our
                    <span className="text-[#0057FF] cursor-pointer p-1">
                        privacy Policy
                    </span>
                    and
                    <span className="text-[#0057FF] cursor-pointer p-1">
                        Terms of service
                    </span>
                </p>
            </div>
        </div>
    )
}

export default VerifyStep
