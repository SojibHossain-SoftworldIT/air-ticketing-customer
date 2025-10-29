import React from "react";

const Recently_Viewed_Flights = () => {
  const flights = [
    {
      id: 1,
      airline: "Biman Bangladesh",
      code: "BG021",
      flag: "https://flagcdn.com/w20/bd.png",
      viewed: "2h ago",
      departTime: "09:30",
      arriveTime: "13:45",
      from: "DAC",
      to: "DXB",
      duration: "5h 15m",
      price: "BDT 45,000",
    },
    {
      id: 2,
      airline: "Singapore Airlines",
      code: "SQ446",
      flag: "https://flagcdn.com/w20/sg.png",
      viewed: "5h ago",
      departTime: "23:55",
      arriveTime: "07:20",
      from: "DAC",
      to: "SIN",
      duration: "4h 25m",
      price: "BDT 38,000",
    },
    {
      id: 3,
      airline: "Thai Airways",
      code: "TG322",
      flag: "https://flagcdn.com/w20/th.png",
      viewed: "1d ago",
      departTime: "16:40",
      arriveTime: "20:15",
      from: "DAC",
      to: "BKK",
      duration: "2h 35m",
      price: "BDT 25,000",
    },
  ];

  return (
    <div className="bg-[#FAFBFC] p-8 rounded-2xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Recently Viewed Flights
          </h2>
          <p className="text-sm text-gray-500">
            Pick up where you left off
          </p>
        </div>
        <button className="text-[#0028A8] text-sm font-medium flex items-center gap-1 hover:underline">
          View All <span>›</span>
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6">
        {flights.map((flight) => (
          <div
            key={flight.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition"
          >
            {/* Top Row */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <img
                  src={flight.flag}
                  alt={flight.airline}
                  className="w-5 h-4 rounded-sm"
                />
                <div>
                  <h3 className="font-medium text-gray-800">
                    {flight.airline}
                  </h3>
                  <p className="text-sm text-gray-500">{flight.code}</p>
                </div>
              </div>

              <span className="text-xs bg-[#E6EAF6] font-normal text-[#0028A8] px-3 py-1 rounded-full">
                Viewed {flight.viewed}
              </span>
            </div>

            {/* Flight Info */}
            <div className="flex justify-between items-center text-gray-700 mb-1">
              <p className="font-normal text-lg">{flight.departTime}</p>
              <p className="text-sm mt-2 text-gray-500">{flight.duration}</p>
              <p className="font-normal text-lg">{flight.arriveTime}</p>
            </div>

            <div className="flex justify-between gap-2 text-gray-400 text-sm mb-4">
              <span className="text-[#545C74] font-normal">{flight.from}</span>
              <div className=" border-b-2 border-b-[#E6E7EA] mb-1 w-full"></div>
              <span className="text-[#545C74] font-normal">{flight.to}</span>
            </div>

            {/* Bottom */}
            <div className="flex justify-between items-center">
              <p className="text-[#0028A8] font-normal">{flight.price}</p>
              <button className="bg-[#0028A8] hover:bg-blue-800 text-white text-sm px-4 py-2 rounded-md">
                Book again
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recently_Viewed_Flights;
