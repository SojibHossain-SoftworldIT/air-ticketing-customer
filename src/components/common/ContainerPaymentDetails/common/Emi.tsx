import React from 'react'

const Emi = () => {
  return (
    <>
          <label className="block text-sm font-medium mb-2">Select Bank</label>
          <input
            type="text"
            placeholder="Select Bank"
            className="w-full px-4 py-3 shadow-xs rounded-lg border border-gray-300 text-sm outline-none focus:border-[#081A51] mb-6"
          />

          <label className="block text-sm font-medium mb-2">EMI Tenure</label>
          <input
            type="text"
            placeholder="Select EMI Tenure"
            className="w-full px-4 py-3 rounded-lg shadow-xs border border-gray-300 text-sm outline-none focus:border-[#081A51] mb-6"
          />

          {/* Monthly Payment Box */}
          <div className="p-4 rounded-lg bg-[#E6EBFD] text-[#1C398E] text-sm font-medium">
            Monthly Payment: BDT 14,733
          </div>
        </>
  )
}

export default Emi
