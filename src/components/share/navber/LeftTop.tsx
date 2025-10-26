import { Plane } from "lucide-react";
import React from "react";

const LeftTop = () => {
    return (
        <div className="flex items-center space-x-2  p-2">
            {/* Icon Box */}
            <div className="bg-[#0028A8] text-white p-2 rounded-md flex items-center justify-center">
                 <Plane size={20} />
            </div>

            {/* Text */}
            <div>
                <h1 className="text-gray-800 font-semibold text-sm">Ehan Tours</h1>
                <p className="text-gray-500 text-xs">& Travel</p>
            </div>
        </div>
    );
};

export default LeftTop;
