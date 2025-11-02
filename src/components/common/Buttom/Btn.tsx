import React from "react";

interface BtnProps {
    total?: number;
    add?: boolean;
    text?: string;
    icon?: React.ReactNode;
    show?: boolean;
    setShow?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Btn: React.FC<BtnProps> = ({ add = false, text = "", icon, show, setShow, total }) => {
    return (
        <button
            onClick={() => setShow && setShow(!show)}
            className="bg-black px-4 py-2 rounded-lg text-white font-medium hover:bg-gray-800 flex items-center gap-2"
        >
            {add ? (
                <>
                    {text} {icon}
                </>
            ) : (
                <div className="flex items-center gap-2">
                    {total} Passenger {icon}
                </div>
            )}
        </button>
    );
};

export default Btn;
