import { ChevronRight } from 'lucide-react';
import React from 'react';

const SpecialOffer = () => {
  const offers = [
    { id: 1, img: "Rectangle 10.png", alt: "Offer 1" },
    { id: 2, img: "Group 63.png", alt: "Offer 2" },
    { id: 3, img: "Rectangle 10.png", alt: "Offer 3" },
  ];

  return (
    <div className="bg-white rounded-2xl p-12">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Special Offer</h2>
          <p className="text-sm text-gray-500">
            Top picks of our passengers Top picks of our passengersTop picks of our passengersTop picks of our <br />
            passengersTop picks of our passengersTop picks of our passengers
          </p>
        </div>
        <button className="text-sm border-2 px-4 py-2 rounded-lg border-[#1D68E5] font-medium text-[#1D68E5] hover:text-blue-700 flex items-center space-x-1">
          <span>View All</span>
            <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {offers.map((offer) => (
          <div key={offer.id} className="rounded-xl overflow-hidden  ">
            <img
              src={offer.img}
              alt={offer.alt}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffer;
