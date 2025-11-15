import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import NumberOfTicketsBtn from "../../NumberOfTicketsBtn/NumberOfTicketsBtn";

const BusSelectYourSeatsRight = () => {
  const [boarding, setBoarding] = useState("");
  const [dropping, setDropping] = useState("");

  const boardingPoints = ["Mohakhali", "Sayedabad", "Jatrabari"];
  const droppingPoints = ["GEC", "Oxygen", "Strand Road"];
  const [count , setCount] = useState(1)

  return (
    <div className="flex flex-col gap-4 w-full max-w-[165px]">
      {/* Add More Ticket */}
      <div>
        <NumberOfTicketsBtn title="Add More Ticket" count={count} setCount={setCount} />
      </div>

      {/* Boarding Point */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
        <div className="flex items-center gap-2 mb-2">
          <FaMapMarkerAlt className="text-green-500" />
          <h4 className="font-medium text-gray-700 text-sm">Boarding Point</h4>
        </div>
        <div className="flex flex-col gap-2 text-sm text-gray-700">
          {boardingPoints.map((point) => (
            <label key={point} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={boarding === point}
                onChange={() => setBoarding(point)}
                className="w-4 h-4 accent-green-500"
              />
              {point}
            </label>
          ))}
        </div>
      </div>

      {/* Dropping Point */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
        <div className="flex items-center gap-2 mb-2">
          <FaMapMarkerAlt className="text-red-500" />
          <h4 className="font-medium text-gray-700 text-sm">Dropping Point</h4>
        </div>
        <div className="flex flex-col gap-2 text-sm text-gray-700">
          {droppingPoints.map((point) => (
            <label key={point} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={dropping === point}
                onChange={() => setDropping(point)}
                className="w-4 h-4 accent-red-500"
              />
              {point}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusSelectYourSeatsRight;
