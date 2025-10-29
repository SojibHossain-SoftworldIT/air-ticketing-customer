import React from "react";

const airlines = [
  { name: "BX Air", logo: "ABX Air.png" },
  { name: "ADA Air", logo: "AccessAir.png" },
  { name: "Adria", logo: "ACES Colombia.png" },
  { name: "Aegean", logo: "Ada Air.png" },
  { name: "Aer Arann", logo: "ADC Airlines.png" },
  { name: "Aeroflot", logo: "adidas.png" },
  { name: "Air Djibouti", logo: "Adria Airways.png" },
  { name: "Air China", logo: "Aegean Airlines.png" },
  { name: "Air Anatolia", logo: "Aerolínea de Antioquia.png" },
  { name: "Aeropostal", logo: "Aerogem Aviation.png" },
  { name: "Go Air", logo: "Aer Arann.png" },
  { name: "Aeropelican", logo: "Aer Lingus.png" },
  { name: "Air Jamaica", logo: "AeroLogic.png" },
  { name: "AeroSur", logo: "Aeromar Líneas Aéreas Dominicanas.png" },
  { name: "SBA", logo: "Aeroméxico Connect.png" },
  { name: "Xiamen Air", logo: "Aeroméxico.png" },
  { name: "SmartWings", logo: "Aeroperú.png" },
  { name: "SmartWings", logo: "AgustaWestland.png" },
];

const TravelBeyond = () => {
  return (
    <div className="bg-[#FAFBFC] p-8 rounded-3xl  text-center">
      {/* Title */}
      <h2 className="text-lg md:text-lg font-semibold text-gray-800 mb-8">
        Travel Beyond Expectations with Our Trusted
        <p>Airline Alliances</p>
      </h2>

      {/* Airline Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
        {airlines.map((airline, index) => (
          <div
            key={`${airline.name}-${index}`}
            className="bg-white border rounded-lg w-36 h-20 flex items-center justify-center hover:shadow-md transition"
          >
            <img
              src={airline.logo}
              alt={airline.name}
              width={70}
              height={70}
              className="max-h-10 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelBeyond;
