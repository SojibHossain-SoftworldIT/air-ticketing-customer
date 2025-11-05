import React, { useState } from "react";
import { Slider } from "@mui/material";
import {
  Sliders,
  DollarSign,
  Clock,
  MapPin,
  Star,
  Wifi,
  Building2,
  Send,
} from "lucide-react";

interface FiltersState {
  airlines: string[];
  stops: string[];
  departureTimes: string[];
  arrivalTimes: string[];
  cabinClass: string[];
  amenities: string[];
}

interface FiltersProps {
  title: string;
  items: string[];
  category: keyof FiltersState;
  selectedFilters: FiltersState;
  handleToggle: (category: keyof FiltersState, value: string) => void;
  icon?: React.ReactNode;
}

const Filters = () => {
  const [price, setPrice] = useState<[number, number]>([0, 50000]);
  const [selectedFilters, setSelectedFilters] = useState<FiltersState>({
    airlines: [],
    stops: [],
    departureTimes: [],
    arrivalTimes: [],
    cabinClass: [],
    amenities: [],
  });

  // Example data
  const airlines = ["Biman Bangladesh", "US-Bangla", "Novoair", "Regent Airways"];
  const stops = ["Non-stop", "1 Stop", "2+ Stops"];
  const departureTimes = [
    "Early Morning (00:00 – 06:00)",
    "Morning (06:00 – 12:00)",
    "Afternoon (12:00 – 18:00)",
  ];
  const arrivalTimes = [
    "Early Morning (00:00 – 06:00)",
    "Morning (06:00 – 12:00)",
    "Afternoon (12:00 – 18:00)",
    "Evening (18:00 – 24:00)",
  ];
  const cabinClasses = [
    { name: "Economy", price: 3500 },
    { name: "Premium Economy", price: 6800 },
    { name: "Business", price: 12500 },
    { name: "First Class", price: 25000 },
  ];
  const amenities = ["Wi-Fi", "Meals", "Entertainment"];

  // Handle checkbox toggle
  const handleToggle = (category: keyof FiltersState, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setPrice([0, 50000]);
    setSelectedFilters({
      airlines: [],
      stops: [],
      departureTimes: [],
      arrivalTimes: [],
      cabinClass: [],
      amenities: [],
    });
  };

  return (
    <div className="w-72 bg-[#FAFBFC] rounded-2xl shadow-md p-4 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-800">
          <Sliders className="w-5 h-5 text-[#063BE8]" /> Filters
        </h2>
        <span className="text-[#063BE8] text-sm font-medium cursor-pointer hover:underline">
          {Object.values(selectedFilters).flat().length} Active
        </span>
      </div>

      {/* Price Range */}
      <section>
        <h3 className="flex items-center gap-2 text-gray-800 font-medium mb-2">
          <DollarSign className="w-4 h-4 text-[#063BE8]" /> Price Range
        </h3>
        <Slider
          value={price}
          onChange={(_, val) => setPrice(val as [number, number])}
          valueLabelDisplay="auto"
          min={0}
          max={50000}
          sx={{ color: "#2563eb" }}
        />
        <div className="flex justify-between text-sm text-gray-600">
          <span>৳{price[0]}</span>
          <span>৳{price[1]}</span>
        </div>
      </section>

      {/* Reusable Filter Sections */}
      <FilterSection
        title="Airlines"
        items={airlines}
        category="airlines"
        icon={<Building2 className="w-4 h-4 text-[#063BE8]" />}
        selectedFilters={selectedFilters}
        handleToggle={handleToggle}
      />

      <FilterSection
        title="Stops"
        items={stops}
        category="stops"
        icon={<Send className="w-4 h-4 text-[#063BE8]" />}
        selectedFilters={selectedFilters}
        handleToggle={handleToggle}
      />

      <FilterSection
        title="Departure Time"
        items={departureTimes}
        category="departureTimes"
        icon={<Clock className="w-4 h-4 text-[#063BE8]" />}
        selectedFilters={selectedFilters}
        handleToggle={handleToggle}
      />

      <FilterSection
        title="Arrival Time"
        items={arrivalTimes}
        category="arrivalTimes"
        icon={<MapPin className="w-4 h-4 text-[#063BE8]" />}
        selectedFilters={selectedFilters}
        handleToggle={handleToggle}
      />

      {/* Cabin Class */}
      <section className="border-b pb-8">
        <h3 className="flex items-center gap-2 text-gray-800 font-medium mb-2">
          <Star className="w-4 h-4 text-[#063BE8]" /> Cabin Class
        </h3>
        {cabinClasses.map(({ name, price }) => (
          <label key={name} className="flex items-center justify-between text-sm py-1">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="accent-[#063BE8]"
                checked={selectedFilters.cabinClass.includes(name)}
                onChange={() => handleToggle("cabinClass", name)}
              />
              {name}
            </div>
            <span className="text-gray-500">From ৳{price}</span>
          </label>
        ))}
      </section>

      <FilterSection
        title="In-flight Amenities"
        items={amenities}
        category="amenities"
        icon={<Wifi className="w-4 h-4 text-[#063BE8]" />}
        selectedFilters={selectedFilters}
        handleToggle={handleToggle}
      />

      {/* Reset Button */}
      <button
        onClick={resetFilters}
        className="w-full flex items-center justify-center gap-2 border border-[#063BE8] text-[#063BE8] rounded-lg py-2 hover:bg-blue-50 transition"
      >
        Reset All Filters
      </button>
    </div>
  );
};

// ✅ FilterSection component
const FilterSection: React.FC<FiltersProps> = ({
  title,
  items,
  category,
  selectedFilters,
  handleToggle,
  icon,
}) => (
  <section className="border-b pb-8">
    <h3 className="flex items-center gap-2 text-[#000B2F] font-medium mb-2 ">
      {icon} {title}
    </h3>
    {items.map((item) => (
      <label key={item} className="flex items-center gap-2 text-sm py-1 ">
        <input
          type="checkbox"
          className="accent-[#063BE8]"
          checked={selectedFilters[category]?.includes(item)}
          onChange={() => handleToggle(category, item)}
        />
        {item}
      </label>
    ))}
  </section>
);

export default Filters;
