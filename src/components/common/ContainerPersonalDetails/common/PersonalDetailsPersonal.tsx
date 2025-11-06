import React from "react";

const PersonalDetailsPersonal = () => {

  const inputClass =  "w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500";
  const labelClass = "block text-sm text-gray-600 mb-1";

  return (
    <div className="p-6 bg-white rounded-2xl border border-[#E6E7EA]">
      {/* Header */}
      <h2 className="text-lg font-medium text-gray-800 mb-4">
        Personal Details
      </h2>

      {/* Card Wrapper */}
      <div className="border border-gray-200 rounded-xl p-5">
        {/* Title Row */}
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-gray-700 font-medium">Personal 1</h3>
          <button className="text-xs px-3 py-1 rounded-md bg-blue-50 text-blue-600 border border-blue-100">
            Adult
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className={labelClass}>Title</label>
              <select className={inputClass}>
                <option>Ms</option>
                <option>Mr</option>
                <option>Mrs</option>
              </select>
            </div>

            <div>
              <label className={labelClass}>Name</label>
              <input
                type="text"
                placeholder="Passport or ID Name"
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Gender</label>
              <select className={inputClass}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Date of Birth</label>
              <input type="date" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>Nationality</label>
              <input type="text" placeholder="Nationality" className={inputClass} />
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>NID Number</label>
              <input type="text" placeholder="NID Number" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>Passport Number</label>
              <input type="text" placeholder="Passport Number" className={inputClass} />
            </div>
          </div>
        </div>

        {/* Warning Box */}
        <div className="mt-5 bg-orange-50 border border-orange-200 rounded-lg p-3 text-sm text-orange-700">
          <p>⚠️ Please ensure all details match your passport exactly.</p>
          <p>Passport must be valid for at least 6 months from the date of travel.</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailsPersonal;
