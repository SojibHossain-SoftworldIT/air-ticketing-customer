import React from "react";
import { Bell, Globe, Lock, CreditCard, Plus } from "lucide-react";

const Notification = [
              {
                title: "Email Notifications",
                desc: "Receive booking confirmations and updates via email",
                enabled: true,
              },
              {
                title: "SMS Notifications",
                desc: "Get flight updates and reminders via SMS",
                enabled: true,
              },
              {
                title: "Push Notifications",
                desc: "Receive real-time alerts on your device",
                enabled: false,
              },
            ];

const SettingsPage = () => {
  return (
    <>
      <div className="w-full max-w-4xl space-y-6">
        {/* Notification Preferences */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="w-5 h-5 text-[#063BE8]" />
            <h2 className="text-lg font-semibold text-gray-800">
              Notification Preferences
            </h2>
          </div>

          <div className="space-y-4">
            {Notification.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-0"
              >
                <div>
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    defaultChecked={item.enabled}
                  />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-black transition"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Language & Region */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-[#063BE8]" />
            <h2 className="text-lg font-semibold text-gray-800">
              Language & Region
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Language
              </label>
              <input
                type="text"
                value="Bangladesh"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Currency
              </label>
              <input
                type="text"
                value="BD"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                readOnly
              />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Lock className="w-5 h-5 text-[#063BE8]" />
            <h2 className="text-lg font-semibold text-gray-800">Security</h2>
          </div>

          <div className="space-y-4">
            <input
              type="password"
              placeholder="Enter current password"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="password"
              placeholder="Enter new password"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button className="bg-[#000B2F] text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition">
              Update Password
            </button>
          </div>
        </div>

        {/* Saved Payment Methods */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="w-5 h-5 text-[#063BE8] " />
            <h2 className="text-lg font-semibold text-gray-800">
              Saved Payment Methods
            </h2>
          </div>

          <div className="space-y-4">
            {[1, 2].map((card) => (
              <div
                key={card}
                className="flex items-center justify-between border border-gray-200 rounded-xl p-4"
              >
                <div>
                  <h4 className="font-medium text-gray-800">•••• •••• •••• 4532</h4>
                  <p className="text-sm text-gray-500">Expires 12/25</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-black transition"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                </label>
              </div>
            ))}
          </div>

          <button className="mt-4 w-full bg-[#000B2F] text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-800 transition">
            <Plus className="w-4 h-4" /> Add Payment Method
          </button>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button className="bg-[#063BE8] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            Save All Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
