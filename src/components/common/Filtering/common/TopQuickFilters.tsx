import React, { useState, useEffect } from "react";
import { Check, Zap, Tag, AlarmClock, Star } from "lucide-react";

const TopQuickFilters: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(29 * 60 + 15);
  const [selected, setSelected] = useState<"cheapest" | "fastest" | null>("fastest");

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="flex gap-6 w-full">
      {/* Session Timer */}
      <div className="flex flex-col w-[506px] gap-3 rounded-[12px] shadow-md p-4 bg-[#E6EBFD]">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div>
            <span className="flex items-center gap-2 text-[#000B2F] font-medium">
              <AlarmClock className="w-5 h-5 text-[#063BE8]" />
              Search Session Active
            </span>
            <p className="text-xs ml-7 text-gray-400">
              Select a flight and complete your booking
            </p>
          </div>
          <div className="text-right">
            <p>Session Time</p>
            <span className="font-normal text-xl text-[#063BE8]">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-2 bg-[#063BE8] transition-all duration-1000"
            style={{ width: `${(timeLeft / (29 * 60 + 15)) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Star size={16} color="#063BE8" />
          <p className="text-[#000B2F] font-medium">Quick Filters</p>
        </div>

        <div className="flex gap-3">
          {/* Cheapest First */}
          <button
            onClick={() => setSelected("cheapest")}
            className={`p-3 w-[188px] h-[70px] rounded-xl border transition-all relative ${selected === "cheapest"
              ? "border-[#B2C2F8] bg-[#E6EBFD] hover:border-blue-400"
              : "border-[#B2C2F8] bg-[#E6EBFD] hover:border-blue-400"
              }`}
          >
            <div className=" flex items-center  gap-2 ">
              <div>
                <Tag className="w-4 h-4 text-orange-500" />
              </div>
              <div className="text-left">
                <p className="text-[15px] font-medium text-[#0F172A]">
                  Cheapest First
                </p>
                <p className="text-xs text-[#6B7280] mt-1">
                  Starting from ৳3,500
                </p>

              </div>
            </div>
             <div className="absolute top-7 right-3 w-4 h-4 rounded-sm shadow border border-[#E6EBFD] bg-[#B2C2F8] flex items-center justify-center"></div>

            {selected === "cheapest" && (
              <div className="absolute top-7 right-3 w-4 h-4 rounded-sm bg-[#063BE8] flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
              
            )}
          </button>

          {/* Fastest First */}
          <button
            onClick={() => setSelected("fastest")}
            className={`p-3 w-[188px] h-[70px] rounded-xl border transition-all relative ${selected === "fastest"
              ? "border-[#B2C2F8] bg-[#E6EBFD] hover:border-blue-400"
              : "border-[#B2C2F8] bg-[#E6EBFD] hover:border-blue-400"
              }`}
          >
            <div className=" flex items-center  gap-2 ">
              <div>
               <Zap className="w-4 h-4 text-green-500" />
              </div>
              <div className="text-left">
                <p className="text-[15px] font-medium text-[#0F172A]">
                  Fastest First
                </p>
                <p className="text-xs text-[#6B7280] mt-1">
                  1h 15m duration
                </p>

              </div>
            </div>
         
             <div className="absolute top-7 right-3 w-4 h-4 rounded-sm shadow border border-[#E6EBFD] bg-[#B2C2F8] flex items-center justify-center"></div>

            {selected === "fastest" && (
              <div className="absolute top-7 right-3 w-4 h-4 rounded-sm bg-blue-600 flex items-center justify-center">
                <Check className="w-3 h-3 text-white" />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopQuickFilters;
