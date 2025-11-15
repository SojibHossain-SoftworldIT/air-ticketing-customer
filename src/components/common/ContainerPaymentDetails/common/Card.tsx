import React from 'react'

const Card = () => {
  return (
     <>
          <label className="block text-sm font-medium mb-2">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full px-4 py-3 rounded-lg border shadow-xs border-gray-300 text-sm outline-none focus:border-[#081A51] mb-6"
          />

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">Expiry Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full px-4 py-3 shadow-xs rounded-lg border border-gray-300 text-sm outline-none focus:border-[#081A51]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">CVV</label>
              <input
                type="text"
                placeholder="123"
                className="w-full px-4 py-3 shadow-xs rounded-lg border border-gray-300 text-sm outline-none focus:border-[#081A51]"
              />
            </div>
          </div>
        </>
  )
}

export default Card
