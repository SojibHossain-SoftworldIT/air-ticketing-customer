import React from "react";

const RewardsPage = () => {
  const rewards = [
    {
      title: "BDT 500 Discount",
      description: "Valid for next booking",
      points: "1,000 Points",
      buttonText: "Redeem",
      locked: false,
    },
    {
      title: "BDT 1,000 Discount",
      description: "Valid for next booking",
      points: "2,000 Points",
      buttonText: "Redeem",
      locked: false,
    },
    {
      title: "Free Flight Upgrade",
      description: "Economy to Business",
      points: "5,000 Points",
      buttonText: "Locked",
      locked: true,
    },
  ];

  return (
    <>
      {/* Total Reward Points Section */}
      <div className="w-full max-w-3xl bg-[#063BE8] text-white rounded-3xl p-6 ">
        <h2 className="text-base font-medium">Total Reward Points</h2>
        <p className="text-base font-medium mt-2">2,450 Points</p>
        <p className="mt-2 text-sm opacity-90">
          You’re 550 points away from Gold status!
        </p>
      </div>

      {/* Redeem Points Section */}
      <div className="w-full max-w-3xl bg-white rounded-2xl p-6 mt-6 ">
        <h3 className="text-base font-semibold text-gray-800 mb-4">
          Redeem Points
        </h3>

        <div className="space-y-4">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className={`flex justify-between items-center border border-gray-200 rounded-lg p-4 ${
                reward.locked ? "opacity-60" : ""
              }`}
            >
              <div>
                <h4
                  className={`font-medium ${
                    reward.locked ? "text-[#000B2F]" : "text-gray-900"
                  }`}
                >
                  {reward.title}
                </h4>
                <p
                  className={`text-sm mt-2 ${
                    reward.locked ? "text-[#545C74]" : "text-gray-500"
                  }`}
                >
                  {reward.description}
                </p>
              </div>

              <div className="text-right">
                <p
                  className={`font-medium ${
                    reward.locked ? "text-gray-400" : "text-[#063BE8]"
                  }`}
                >
                  {reward.points}
                </p>
                <button
                  className={`mt-2 text-sm font-medium px-4 py-1.5 rounded-md transition ${
                    reward.locked
                      ? "bg-[#000B2F] text-[#FAFBFC] cursor-not-allowed"
                      : "bg-black text-white "
                  }`}
                >
                  {reward.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RewardsPage;
