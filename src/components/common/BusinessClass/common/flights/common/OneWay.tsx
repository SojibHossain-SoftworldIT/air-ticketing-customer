"use client";
import React, { useEffect, useState } from "react";
import {
  ArrowLeftRight,
  Info,
  ChevronRight,
  PlaneTakeoff,
  PlaneLanding,
  CalendarCheck,
  Search,
} from "lucide-react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useGetFlightRoutesQuery, useGetFlightsQuery } from "@/redux/featured/flightAPI/flight";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAllFlights } from "@/redux/featured/flightAPI/flightSlice";

const OneWay = ({ setFindTicket }: any) => {
    const dispatch = useDispatch();
  const [from1, setFrom1] = useState("");
  const [from2, setFrom2] = useState("");
  const [originCode, setOriginCode] = useState("");
  const [destinationCode, setDestinationCode] = useState("");
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [fetchNow, setFetchNow] = useState(false);
  const { data: flightRoutesData } = useGetFlightRoutesQuery({});
  const popularDestinationsFromAPI = flightRoutesData?.data || [];
  const popularDestinations = popularDestinationsFromAPI.length > 0 ? popularDestinationsFromAPI.map((route: any) => ({
    city: route.name,
    code: route.iataCode,
    country: route.address?.countryName,
  })) : popularDestinationsFromAPI;

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // Format date for API (YYYY-MM-DD)
  const formatDateForAPI = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };


  // Only fetch flights when all required fields are filled
  const handleclick = () => {
    if (originCode && destinationCode && dateRange[0].startDate) {
      setFetchNow(true);
    }
  }

  console.log(originCode)
  console.log(destinationCode)
  console.log(formatDateForAPI(dateRange[0].startDate))

  const { data, error, isLoading } = useGetFlightsQuery(
    {
      originLocationCode: originCode,
      destinationLocationCode: destinationCode,
      departureDate: formatDateForAPI(dateRange[0].startDate),
    },
    {
      skip:
        !fetchNow ||
        !originCode ||
        !destinationCode ||
        !dateRange[0]?.startDate,
    }
  );
  useEffect(() => {
    if (data) {
      dispatch(setAllFlights(data));
    }
  }, [data, dispatch]);

  const handleSelect1 = (city: string, code: string) => {
    setFrom1(`${city} (${code})`);
    setOriginCode(code);
    setShowDropdown1(false);
  };

  const handleSelect2 = (city: string, code: string) => {
    setFrom2(`${city} (${code})`);
    setDestinationCode(code);
    setShowDropdown2(false);
  };

  const handleSwapLocations = () => {
    // Swap display values
    const tempFrom1 = from1;
    setFrom1(from2);
    setFrom2(tempFrom1);

    // Swap codes
    const tempCode = originCode;
    setOriginCode(destinationCode);
    setDestinationCode(tempCode);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-6 items-start bg-white border border-gray-200 rounded-xl p-6 relative">
        {/* From */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Departure From
          </label>
          <div className="flex gap-2 items-center border border-gray-300 rounded-lg px-3 py-2 bg-white relative">
            <PlaneTakeoff size={16} color="black" className="mr-2" />
            <input
              type="text"
              placeholder="Select city"
              className="outline-none flex-1 text-gray-800 placeholder-gray-400"
              value={from1}
              onFocus={() => setShowDropdown1(true)}
              onChange={(e) => setFrom1(e.target.value)}
            />
            <button
              type="button"
              onClick={handleSwapLocations}
              className="absolute -right-8 top-1/2 z-1 -translate-y-1/2 bg-[#E6EAF6] p-2 rounded-full shadow-sm hover:bg-blue-700"
            >
              <ArrowLeftRight size={20} color="#0028A8" />
            </button>
          </div>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <Info size={12} className="mr-1 text-gray-400" />
            <span>A hint message to guide user.</span>
          </div>

          {showDropdown1 && (
            <div className="absolute z-10 -mt-5 w-full bg-white border no-scrollbar border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              <div className="bg-[#E6EBFD] px-4 py-2">
                <p>Popular Destinations</p>
              </div>

              {popularDestinations.map((dest: any, idx: any) => (
                <div key={idx} className='px-2 hover:bg-blue-100'>
                  <div
                    key={dest.code}
                    className="px-2 py-2  cursor-pointer flex justify-between flex-col border-b "
                    onClick={() => handleSelect1(dest.city, dest.code)}
                  >
                    <div className='flex justify-between items-center '>
                      <div>
                        <p>{dest.city}</p>
                        <p className="text-gray-400 text-sm">{dest.code} – {dest.country}</p>
                      </div>
                      <div>
                        <ChevronRight size={26} color='#CED4DE' />
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* To */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Arrival To
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
            <PlaneLanding size={16} color="black" className="mr-2" />
            <input
              type="text"
              placeholder="Dubai (DXB)"
              className="outline-none flex-1 text-gray-800 placeholder-gray-400"
              value={from2}
              onFocus={() => setShowDropdown2(true)}
              onChange={(e) => setFrom2(e.target.value)}
            />
          </div>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <Info size={12} className="mr-1 text-gray-400" />
            <span>Where do you want to go?</span>
          </div>

          {showDropdown2 && (
            <div className="absolute z-10 -mt-5 w-full no-scrollbar bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
              <div className="bg-[#E6EBFD] px-4 py-2">
                <p>Popular Destinations</p>
              </div>

              {popularDestinations.map((dest: any, idx: any) => (
                <div key={idx} className='px-2 hover:bg-blue-100'>
                  <div
                    key={dest.code}
                    className="px-2 py-2  cursor-pointer flex justify-between flex-col border-b "
                    onClick={() => handleSelect2(dest.city, dest.code)}
                  >
                    <div className='flex justify-between items-center '>
                      <div>
                        <p>{dest.city}</p>
                        <p className="text-gray-400 text-sm">{dest.code} – {dest.country}</p>
                      </div>
                      <div>
                        <ChevronRight size={26} color='#CED4DE' />
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Departure */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Departure
          </label>
          <div
            className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white cursor-pointer"
            onClick={() => setShowCalendar(!showCalendar)}
          >
            <CalendarCheck size={16} color="black" className="mr-2" />
            <span className="text-gray-800">
              {dateRange[0].startDate.toDateString()}
            </span>
          </div>

          {showCalendar && (
            <div className="absolute top-18 z-1 shadow-xl border border-gray-200 rounded-lg bg-white">
              <DateRange
                ranges={dateRange}
                onChange={(item: any) => {
                  const date = item.selection.startDate;
                  setDateRange([
                    {
                      startDate: date,
                      endDate: date,
                      key: "selection",
                    },
                  ]);
                  setShowCalendar(false);
                }}
                rangeColors={["#0028A8"]}
                months={1}
                direction="horizontal"
                moveRangeOnFirstSelection={false}
                showDateDisplay={false}
              />
            </div>
          )}

          <div className="flex items-center mt-2 text-xs text-gray-500">
            <Info size={12} className="mr-1 text-gray-400" />
            <span>Select travel date</span>
          </div>
        </div>


        {/* Return */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Return
          </label>
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
            <CalendarCheck size={16} color="black" className="mr-2" />
            <span className="text-gray-400">
              Sun Nov 02 2025
            </span>
          </div>
          <div className="flex items-center mt-2 text-xs text-gray-500">
            <Info size={12} className="mr-1 text-gray-400" />
            <span>Return date</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-8">
        <button onClick={() => {
          if (!originCode || !destinationCode) {
            toast.error("Please select both cities.");
            return;
          }
          handleclick();
          setFindTicket((e: any) => false);
        }} className="bg-[#0028A8] hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md flex items-center gap-2">
          <Search size={18} /> Find Ticket
        </button>
      </div>

    </>
  );
};

export default OneWay;