import React from "react";

const destinations = [
  {
    name: "Dubai",
    price: "BDT 45,000",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Singapore",
    price: "BDT 38,000",
    image:
      "default_product.jpg",
  },
  {
    name: "Bangkok",
    price: "BDT 25,000",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Kuala Lumpur",
    price: "BDT 32,000",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=800&q=80",
  },
];

const Popular_Destinations = () => {
  return (
    <div className="bg-[#FAFBFC] py-16 px-4 flex flex-col items-center rounded-3xl">
      <div className="max-w-7xl w-full text-center">
        <h2 className="text-2xl font-medium text-gray-900 mb-2">
          Popular Destinations
        </h2>
        <p className="text-gray-500 mb-10">
          Discover the world’s most sought-after travel destinations
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden hover:shadow-sm shadow-md transition"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-gray-800 font-medium">{dest.name}</h3>
                <p className="text-gray-500 text-sm mt-1">
                  From {dest.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular_Destinations;
