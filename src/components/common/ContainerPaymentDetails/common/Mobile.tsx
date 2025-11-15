import React from 'react'

const Mobile = ({provider , setProvider}: any) => {
  return (
    <>
          <h3 className="text-sm  font-medium mb-2">Select Provider</h3>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { id: "mobile", label: "Mobile Banking" },
              { id: "nagad", label: "Nagad" },
              { id: "rocket", label: "Rocket" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setProvider(item.id)}
                className={`py-3 rounded-lg border text-sm font-medium transition 
                  ${
                    provider === item.id
                      ? "border-[#081A51] text-[#081A51]"
                      : "border-gray-300 text-gray-700"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <label className="block text-sm font-medium mb-2">Mobile Number</label>
          <input
            type="text"
            placeholder="01XXX-XXXXXX"
            className="w-full px-4 py-3 shadow-xs rounded-lg border border-gray-300 text-sm outline-none focus:border-[#081A51] mb-6"
          />
        </>
  )
}

export default Mobile
