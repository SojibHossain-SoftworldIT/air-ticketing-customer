"use client";

import React from "react";
import {
    // keep these as named imports; if any of them are undefined they'll be handled by IconRenderer
    Airplane,
    ShieldCheck,
    CreditCard,
    Clock,
    Tag,
} from "lucide-react";

type IconProps = {
    Icon?: React.ComponentType<any> | undefined;
    className?: string;
};

/** Render an imported lucide-react icon if available, otherwise render a fallback SVG */
const IconRenderer: React.FC<IconProps> = ({ Icon, className }) => {
    if (Icon) {
        // @ts-ignore - Icon is a React component from lucide-react
        return <Icon className={className} />;
    }

    // Fallback airplane SVG (small neutral icon). Change or expand as needed.
    return (
        <svg
            className={className}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
        >
            <path d="M2 16L13 12L2 8L2 16Z" fill="currentColor" opacity="0.15" />
            <path d="M21 16c0 0-8-4-9-4s-9 4-9 4 3-7 3-10c0-1.657 1.343-3 3-3 1.657 0 3 1.343 3 3 0 0 6 1 9 1 1.657 0 3 1.343 3 3 0 2-0.5 6-0.5 6z" fill="currentColor" />
        </svg>
    );
};

export default function LeftpaymentDetails() {
    return (
        <aside className="max-w-sm w-full bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="text-center mb-4">
                <h3 className="text-sm font-semibold text-slate-800">Session Timeout</h3>
                <p className="text-xs text-slate-400 mt-1">2025-10-26</p>
            </div>

            <div className="flex items-center justify-center gap-2 mb-4">
                <DigitBox value={1} />
                <DigitBox value={4} />
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <DigitBox value={3} />
                <DigitBox value={8} />
            </div>

            <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden mb-6">
                <div className="h-full rounded-full" style={{ width: "55%", background: "#1D4ED8" }} />
            </div>

            <h4 className="text-sm font-semibold text-slate-800 mb-3">Booking Summary</h4>

            <div className="flex items-start gap-3 mb-3">
                <div className="p-2 rounded-full bg-slate-50">
                    {/* Use IconRenderer to avoid undefined component error */}
                    <IconRenderer Icon={Airplane as any} className="h-5 w-5 text-sky-500" />
                </div>

                <div className="flex-1">
                    <div className="text-sm font-medium text-slate-800">US–Bangla Airlines</div>
                    <div className="text-xs text-slate-400">BS141</div>
                    <div className="text-xs text-slate-500 mt-2">Dhaka (DAC) → Chittagong (CGP)</div>
                    <div className="text-xs text-slate-400">2025-10-20</div>
                </div>
            </div>

            <hr className="border-t border-slate-100 my-3" />

            <div className="text-sm text-slate-700 space-y-2">
                <Row label="Base Fare" value="BDT 4,500" />
                <Row label="Taxes & Fees" value="BDT 675" />
                <Row label="Service Fee" value="BDT 500" />
            </div>

            <div className="mt-5 p-4 rounded-xl bg-[#E6EBFD] border border-slate-100">
                <div className="flex justify-between items-center mb-3">
                    <div className="text-sm font-medium text-slate-700">Total Amount</div>
                    <div className="text-sm font-semibold text-sky-700">BDT 106,880</div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white rounded-md py-2.5 shadow-sm hover:bg-sky-800 transition">
                    <IconRenderer Icon={ShieldCheck as any} className="h-4 w-4" />
                    <span className="text-sm font-medium ">Proceed to Secure Payment</span>
                </button>
            </div>

            {/* <div className="mt-4 flex items-center justify-between gap-2 text-slate-500">
                <MethodIcon icon={<IconRenderer Icon={CreditCard as any} className="h-4 w-4" />} />
                <MethodIcon icon={<IconRenderer Icon={Tag as any} className="h-4 w-4" />} />
                <MethodIcon icon={<IconRenderer Icon={Clock as any} className="h-4 w-4" />} />
            </div> */}
        </aside>
    );
}

const DigitBox = ({ value }: { value: number | string }) => (
    <div className="w-12 h-12 flex items-center justify-center rounded-md border-2 border-sky-600 text-sky-600 font-semibold text-xl bg-white">
        {value}
    </div>
);

const Row = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between">
        <span className="text-sm text-slate-600">{label}</span>
        <span className="text-sm font-medium text-slate-800">{value}</span>
    </div>
);

const MethodIcon = ({ icon }: { icon: React.ReactNode }) => (
    <div className="w-12 h-10 flex items-center justify-center bg-white border border-slate-100 rounded-md">
        {icon}
    </div>
);
