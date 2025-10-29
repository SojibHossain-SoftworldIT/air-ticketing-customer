import React from "react";

const Page = () => {
  return (
      <div className="bg-white rounded-2xl p-8 w-full ">
        {/* Personal Information */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Mohammad Rahman"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              defaultValue="rahman@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              defaultValue="+880 1712-345678"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Date of Birth
            </label>
            <input
              type="text"
              defaultValue="10 Jun 1998"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Passport Information */}
        <h2 className="text-xl font-semibold text-gray-800 mb-6 border-t pt-4">
          Passport Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Nationality
            </label>
            <input
              type="text"
              defaultValue="Bangladeshi"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Passport Number
            </label>
            <input
              type="text"
              defaultValue="A12345678"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Passport Expiry
            </label>
            <input
              type="text"
              defaultValue="10 Jun 1998"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <button className="bg-[#0028A8] text-white font-medium rounded-lg px-6 py-2 hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
   
  );
};

export default Page;
