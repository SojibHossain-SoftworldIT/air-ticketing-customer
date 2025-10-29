import React from "react";

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      title: "Saudi Arabia",
      desc: "Empower children with knowledge. Your support builds brighter futures!",
      image: "Rectangle 11.png",
    },
    {
      id: 2,
      image: "Rectangle 8.png",
    },
    {
      id: 3,
      title: "Saudi Airabia",
      desc: "Empower children with knowledge. Your support builds brighter futures!",
      image: "ImageWithFallback.png",
    },
    {
      id: 4,
      image: "Rectangle 10 (1).png",
    },
    {
      id: 5,
      image: "7c6afac593d1567f326173a40f3adfc9c6284f1e.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 rounded-2xl p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Popular Destinations
          </h2>
          <p className="text-sm text-gray-500">
            Discover the world&apos;s most sought-after travel destinations
          </p>
        </div>
        <button className="text-sm font-medium text-[#1D68E5] border-2 border-[#1D68E5] rounded-lg px-4 py-2 hover:bg-blue-50 flex items-center space-x-1">
          <span>View All</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Image Masonry Grid */}
      <div className="grid grid-rows-6 h-[520px] grid-cols-12 gap-5 auto-rows-[200px] md:auto-rows-[250px]">
        {/* Big left image */}
        <div className="relative md:col-span-5 md:row-span-6 rounded-2xl overflow-hidden">
          <img
            src={destinations[0].image}
            alt={destinations[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-sm w-[85%]">
            <h3 className="text-lg font-semibold text-gray-900">
              {destinations[0].title}
            </h3>
            <p className="text-xs text-gray-600">{destinations[0].desc}</p>
          </div>
        </div>

        {/* Right top image */}
        <div className="rounded-2xl col-span-3 md:row-span-3 overflow-hidden">
          <img
            src={destinations[1].image}
            alt="Destination 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right middle image with card */}
        <div className="relative rounded-2xl col-span-4  md:row-span-4 overflow-hidden">
          <img
            src={destinations[2].image}
            alt={destinations[2].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-white rounded-lg p-3 shadow-sm w-[80%]">
           <h3 className="text-lg font-semibold text-gray-900">
              {destinations[2].title}
            </h3>
            <p className="text-xs text-gray-600">{destinations[2].desc}</p>
          </div>
        </div>

        {/* Bottom right smaller images */}
        <div className="rounded-2xl col-span-3  md:row-span-3 overflow-hidden">
          <img
            src={destinations[3].image}
            alt="Destination 4"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-2xl col-span-4 md:row-span-2 overflow-hidden">
          <img
            src={destinations[4].image}
            alt="Destination 5"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
