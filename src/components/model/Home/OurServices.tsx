import React from "react";
import { Plane, Bus, Ship, Hotel, MapPin, FileText } from "lucide-react";

const services = [
  {
    title: "Flight Booking",
    description: "Domestic & International flights at best prices",
    image: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=800&q=80",
    icon: <Plane className="text-white" size={20} />,
  },
  {
    title: "Bus Booking",
    description: "Book AC/Non-AC bus tickets with seat selection",
    image: "default_product.jpg",
    icon: <Bus className="text-white" size={20} />,
  },
  {
    title: "Launch Booking",
    description: "River route tickets with cabin selection",
    image: "default_product.jpg",
    icon: <Ship className="text-white" size={20} />,
  },
  {
    title: "Hotel Booking",
    description: "Find and book hotels worldwide",
    image: "default_product.jpg",
    icon: <Hotel className="text-white" size={20} />,
  },
  {
    title: "Tour Packages",
    description: "Curated tour packages for unforgettable experiences",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    icon: <MapPin className="text-white" size={20} />,
  },
  {
    title: "Visa Processing",
    description: "Fast & reliable visa processing services",
    image: "default_product.jpg",
    icon: <FileText className="text-white" size={20} />,
  },
];

const OurServices = () => {
  return (
    <div className="bg-[#FAFBFC]  rounded-2xl py-16 px-4 flex flex-col items-center">
      <div className="max-w-7xl w-full text-center">
        <h2 className="text-2xl font-medium text-gray-900 mb-2">Our Services</h2>
        <p className="text-gray-500 mb-12">
          Everything you need for your travel – flights, buses, hotels, tours, and more
        </p>

        <div className="grid max-w-6xl mx-auto sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden border border-gray-100"
            >
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="bg-blue-700 p-3 rounded-full shadow-md">
                    {service.icon}
                  </div>
                </div>
              </div>

              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{service.description}</p>
                <button className="border w-full border-[#0028A8] text-[#0028A8] text-sm font-medium px-4 py-1.5 rounded-md hover:bg-blue-700 hover:text-white transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
