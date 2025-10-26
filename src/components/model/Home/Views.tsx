import React from "react";
import { TrendingUp, Plane, Building2, MapPin } from "lucide-react";

const Views = () => {
  const stats = [
    {
      id: 1,
      icon: <TrendingUp size={22} className="text-blue-600" />,
      number: "50K+",
      label: "Happy Customers",
    },
    {
      id: 2,
      icon: <Plane size={22} className="text-blue-600" />,
      number: "100K+",
      label: "Flights Booked",
    },
    {
      id: 3,
      icon: <Building2 size={22} className="text-blue-600" />,
      number: "500+",
      label: "Hotels Partners",
    },
    {
      id: 4,
      icon: <MapPin size={22} className="text-blue-600" />,
      number: "150+",
      label: "Destinations",
    },
  ];

  return (
    <div className="bg-[#FAFBFC] py-10 rounded-2xl">
      <div className="max-w-6xl mx-auto grid grid-cols-4 text-center gap-8">
        {stats.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 mb-3">
              {stat.icon}
            </div>
            <p className="text-xl font-semibold text-gray-800">{stat.number}</p>
            <p className="text-sm text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Views;
