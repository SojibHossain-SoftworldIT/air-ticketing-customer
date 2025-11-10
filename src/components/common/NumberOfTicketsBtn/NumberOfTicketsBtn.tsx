import { Minus, Plus } from "lucide-react";
import React from "react";

const NumberOfTicketsBtn = ({ count, setCount } : any) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-sm font-medium text-[#000B2F]">Number Of Tickets</p>
      <div className="flex items-center justify-between bg-[#0B1120] text-white rounded-lg w-52 px-2 py-2 gap-4">
        <button
          onClick={() => setCount((prev : any) => Math.max(1, prev - 1))}
          className="bg-[#333C59] p-1 flex items-center justify-center rounded hover:bg-[#1a233a]"
        >
          <Minus />
        </button>

        <span className="text-sm font-semibold">{count}</span>

        <button
          onClick={() => setCount((prev : any) => prev + 1)}
          className="bg-[#333C59] p-1 flex items-center justify-center rounded hover:bg-[#1a233a]"
        >
          <Plus />
        </button>
      </div>
    </div>
  );
};

export default NumberOfTicketsBtn;
