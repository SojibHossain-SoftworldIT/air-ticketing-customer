import Image from "next/image";
const Login = ({error , email , setEmail , isLoading , password , setPassword , handleLogin, setStep}:any) => {
  return (
     <div className="flex flex-col max-w-[500px]">
                  <div className="flex flex-col xl:gap-3 2xl:gap-6 items-center w-full px-7 2xl:py-7">
                    <h2 className="text-[28px] font-semibold text-center 2xl:mb-3.5">Welcome back</h2>

                    {/* Error Display */}
                    {error && (
                      <div className="w-full bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                        {(error as any)?.data?.message || "An error occurred during login"}
                      </div>
                    )}

                    <div className="flex flex-col w-full">
                      <label className="font-semibold text-sm mb-1">Email or Phone number</label>
                      <input
                        type="email"
                        placeholder="Write your Email or Phone number"
                        className="w-full h-11 border rounded-lg shadow-xs p-2 text-[#667085] focus:ring-2 focus:ring-blue-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
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
                        onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                        disabled={isLoading}
                      />
                    </div>

                    <div className="w-full flex justify-start">
                      <button
                        className="text-[#0536D3] text-sm font-semibold hover:underline"
                        onClick={() => setStep("forgot")}
                        disabled={isLoading}
                      >
                        Forgot Password?
                      </button>
                    </div>

                    <button
                      onClick={handleLogin}
                      disabled={isLoading}
                      className="w-full bg-[#063BE8] text-white rounded-lg py-3 hover:bg-blue-600 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Logging in..." : "Continue"}
                    </button>

                    <div className="flex items-center gap-3">
                      <div className="flex-1 border-t w-[77.5px] border-t-[#CBD5E1]"></div>
                      <span className="text-gray-500 text-sm">Or</span>
                      <div className="flex-1 border-t w-[77.5px] border-t-[#CBD5E1]"></div>
                    </div>

                    <div className="w-full flex flex-col gap-3">
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
                    <span className="text-[#0057FF] cursor-pointer">payment terms</span> of service and Nondiscrimination Policy and acknowledge the{" "}
                    <span className="text-[#0057FF] cursor-pointer">Privacy Policy</span>
                  </div>
                </div>
  )
}

export default Login
