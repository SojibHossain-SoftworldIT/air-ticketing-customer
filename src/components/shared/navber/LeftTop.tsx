import { Plane } from "lucide-react";
import Link from "next/link";
import React from "react";

const LeftTop = ({textColer } : any) => {
    return (
        <Link href="/" className="flex items-center space-x-2  p-2">
            {/* Icon Box */}
            
            
            <div className={`bg-[#0028A8] text-white  p-2 rounded-md flex items-center justify-center`}>
                 <Plane size={20} />
            </div>

            {/* Text */}
            <div>
                <h1 className={`  ${textColer} font-semibold text-sm`}>Ehan Tours</h1>
                <p className="text-gray-500 text-xs">& Travel</p>
            </div>
            
        </Link>

        






    );
};

export default LeftTop;
