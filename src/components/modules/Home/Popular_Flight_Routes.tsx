import React from "react";
import { Plane } from "lucide-react";

const routes = [
  {
    route: "Dhaka → Dubai",
    price: "BDT 45,000",
    duration: "5h 15m",
    info: "Multiple daily flights",
    tags: ["8 Airlines", "Non-stop available"],
  },
  {
    route: "Dhaka → Singapore",
    price: "BDT 38,000",
    duration: "4h 25m",
    info: "Daily departures",
    tags: ["6 Airlines", "Direct flights"],
  },
  {
    route: "Dhaka → Bangkok",
    price: "BDT 25,000",
    duration: "2h 35m",
    info: "Frequent flights",
    tags: ["5 Airlines", "Best prices"],
  },
  {
    route: "Dhaka → Kuala Lumpur",
    price: "BDT 32,000",
    duration: "3h 45m",
    info: "Daily connections",
    tags: ["7 Airlines", "Great deals"],
  },
];

const Popular_Flight_Routes = () => {
  return (
    <div className="bg-linear-to-br from-blue-700 to-indigo-800 py-16 px-4 flex flex-col items-center rounded-3xl">
      <div className="max-w-6xl w-full text-center text-white">
        <h2 className="text-2xl font-medium mb-2">Popular Flight Routes</h2>
        <p className="text-blue-100 mb-12">
          Most searched and booked flight routes from Bangladesh
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {routes.map((r, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 flex justify-between items-center text-left hover:bg-white/15 transition"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/30 rounded-full p-3">
                  <Plane className="text-blue-200" size={22} />
                </div>
                <div>
                  <h3 className="text-white font-medium">{r.route}</h3>
                  <p className="text-blue-100 text-sm">{r.info}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {r.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="bg-white/10 text-xs text-blue-100 px-2 py-0.5 rounded-md border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-right mb-6">
                <p className="text-white font-normal">From {r.price}</p>
                <p className="text-blue-200 text-sm mt-1">{r.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular_Flight_Routes;
