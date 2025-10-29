import React from "react";
import { ArrowRight } from "lucide-react";

const flights = [
  { route: "Dhaka → Dubai", price: "BDT 45K", tag: "Hot", color: "from-blue-500 to-indigo-500", flag: "🇦🇪" },
  { route: "Dhaka → Bangkok", price: "BDT 25K", tag: "Deal", color: "from-orange-500 to-pink-500", flag: "🇹🇭" },
  { route: "Dhaka → Singapore", price: "BDT 38K", tag: "Popular", color: "from-purple-500 to-indigo-500", flag: "🇸🇬" },
  { route: "Dhaka → Kuala Lumpur", price: "BDT 32K", tag: "Trending", color: "from-teal-500 to-cyan-500", flag: "🇲🇾" },
  { route: "Dhaka → Delhi", price: "BDT 18K", tag: "Cheap", color: "from-red-500 to-pink-500", flag: "🇮🇳" },
  { route: "Dhaka → Cox’s Bazar", price: "BDT 6K", tag: "Domestic", color: "from-emerald-500 to-green-500", flag: "🇧🇩" },
  { route: "Chittagong → Dhaka", price: "BDT 4.5K", tag: "Quick", color: "from-orange-400 to-yellow-500", flag: "🇧🇩" },
  { route: "Dhaka → London", price: "BDT 85K", tag: "Europe", color: "from-purple-500 to-pink-500", flag: "🇬🇧" },
  { route: "Dhaka → New York", price: "BDT 120K", tag: "USA", color: "from-sky-500 to-blue-500", flag: "🇺🇸" },
  { route: "Dhaka → Doha", price: "BDT 48K", tag: "Gulf", color: "from-pink-500 to-fuchsia-500", flag: "🇶🇦" },
  { route: "Dhaka → Istanbul", price: "BDT 65K", tag: "Gateway", color: "from-red-500 to-orange-500", flag: "🇹🇷" },
  { route: "Dhaka → Kathmandu", price: "BDT 15K", tag: "Mountain", color: "from-green-500 to-lime-500", flag: "🇳🇵" },
];

const Popular_Searches = () => {
  return (
    <div className=" bg-[#FAFBFC]  rounded-2xl  flex flex-col items-center py-10 px-4">
      <div className="max-w-7xl w-full text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Popular Searches</h2>
        <p className="text-gray-500 mb-10">Quick access to trending flight searches</p>

        <div className="grid max-w-6xl m-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {flights.map((flight, index) => (
            <div
              key={index}
              className={`rounded-2xl text-white p-5 bg-linear-to-r ${flight.color} shadow-md hover:shadow-lg transition relative`}
            >
              <div className="flex justify-between items-start">
                <span className="text-2xl">{flight.flag}</span>
                <ArrowRight className="text-white/90" size={20} />
              </div>
              <h3 className="text-lg text-start font-medium mt-3">{flight.route}</h3>
              <p className="text-sm mt-2 text-start  ">
                <span className="opacity-80 ">from </span>
                <span className="font-semibold">{flight.price}</span>
              <span className=" bg-white/20 text-xs px-2 py-0.5 ml-3 rounded-sm backdrop-blur-sm">
                {flight.tag}
              </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular_Searches;
