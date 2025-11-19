
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EmailStep = ({ profile, setProfile, handleSendCode, isRegistering }: any) => {
    return (
        <div>
            <div className="flex flex-col px-7 pb-4 gap-4">
                <label className="text-m font-semibold text-[#3A3A3A]">
                    Enter email
                </label>
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-11 border shadow-xs rounded-lg p-2 text-[#667085]"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                />

                <p className="text-[#6B6B6B] text-sm mt-2">
                    We will send you a verification code to this email
                </p>

                <button
                    onClick={handleSendCode}
                    disabled={isRegistering}
                    className="bg-[#0057FF] text-white py-3 rounded-lg font-medium disabled:opacity-50"
                >
                    {isRegistering ? "Sending..." : "Send Code"}
                </button>

                <div className="flex items-center gap-3 mt-2">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <span className="text-gray-500 text-sm">Or</span>
                    <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <button className="border rounded-lg shadow-xs py-3 flex items-center justify-center gap-3">
                    <Image src="/google.png" alt="google" width={20} height={20} />
                    <span className="text-sm font-medium">Sign up with Google</span>
                </button>

                <button className="border rounded-lg shadow-xs py-3 flex items-center justify-center gap-3">
                    <Image src="/apple.png" alt="apple" width={20} height={20} />
                    <span className="text-sm font-medium">Sign up with Apple</span>
                </button>
            </div>

            <div className="bg-[#E6EAF647] p-3.5 w-full">
                <p className="text-center text-sm text-[#667085]">
                    Already have an account?{" "}
                    <span className="text-[#0057FF] cursor-pointer font-medium">
                        <Link href={"/auth/login"}>
                            Login
                        </Link>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default EmailStep
