import React, { useEffect, useState } from 'react'
import TopQuickFilters from '../common/TopQuickFilters'
import Filters from '../common/Filters'
import AvailableFilters from '../common/Available'
import FlightCard from '../common/FilterCart'
import { Tab } from '@/components/modules/Home/Hero'
import BusCart from '../common/BusCart'
import { RootState } from '@/redux/store'
import { useSelector } from 'react-redux'

const Filtering = ({ selectedTab }: { selectedTab: Tab }) => {
  const allFlights = useSelector((state: RootState) => state.flight.allFlights);
  const [currency, setCurrency] = useState("USD");
  const flights = [
    {
      id: 1,
      airline: "Biman Bangladesh Airlines",
      flightCode: "BG 147",
      classType: "Economy",
      from: "DAC",
      fromCity: "Dhaka, Bangladesh",
      to: "CXB",
      toCity: "Cox's Bazar, Bangladesh",
      depart: "08:30",
      arrive: "09:45",
      duration: "1h 15m",
      price: 450,
      seatsLeft: 12,
      aircraft: "Boeing 737-800",
      refundable: true,
      tags: ["Best Value", "Direct Flight"],
      amenities: [
        "20kg Check-in",
        "Meal Included",
        "Wi-Fi Available",
        "Refundable",
      ],
    },
    {
      id: 2,
      airline: "US-Bangla Airlines",
      flightCode: "BS 121",
      classType: "Economy",
      from: "DAC",
      fromCity: "Dhaka, Bangladesh",
      to: "CGP",
      toCity: "Chittagong, Bangladesh",
      depart: "10:00",
      arrive: "11:10",
      duration: "1h 10m",
      price: 4200,
      seatsLeft: 9,
      aircraft: "ATR 72-600",
      tags: ["Direct Flight"],
      amenities: ["20kg Check-in", "Refundable"],
      refundable: false,
    },
    {
      id: 3,
      airline: "Biman Bangladesh Airlines",
      flightCode: "BG 150",
      classType: "Business",
      from: "DAC",
      fromCity: "Dhaka, Bangladesh",
      to: "CXB",
      toCity: "Cox's Bazar, Bangladesh",
      depart: "11:00",
      arrive: "12:10",
      duration: "1h 10m",
      price: 6500,
      seatsLeft: 5,
      aircraft: "Boeing 737-800",
      tags: ["Best Value", "Direct Flight"],
      amenities: [
        "20kg Check-in",
        "Meal Included",
        "Wi-Fi Available",
        "Refundable",
      ],
    },
  ];

  function formatDuration(duration: string): string {


    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
    if (!match) return duration;
    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    return `${hours}h ${minutes}m`;
  }
  useEffect(() => {
  const currencyCode = (allFlights as any)?.data?.[0]?.price?.currency === "EUR" ? "€" : "$";
  if (currencyCode) {
    setCurrency(currencyCode);
  }
}, [allFlights]);

  const apiFlights =
    (allFlights as any)?.data?.map((item: any, index: number) => {

      const itinerary = item.itineraries[0];
      const segments = itinerary.segments;

      const departSegment = segments[0];
      const arriveSegment = segments[segments.length - 1];



      return {
        id: item.id || index,
        airline: departSegment.carrierCode,
        flightCode: departSegment.number,
        classType: item.type,
        from: departSegment.departure.iataCode || "N/D",
        fromCity: departSegment.departure.cityName || "N/D",
        to: arriveSegment.arrival.iataCode || "N/D",
        toCity: arriveSegment.arrival.cityName || "N/D",
        depart: departSegment.departure.at.slice(11, 16),
        arrive: arriveSegment.arrival.at.slice(11, 16),
        duration: formatDuration(itinerary.duration),
        price: `${currency} ${item.price?.total || 0}`,
        seatsLeft: item.numberOfBookableSeats || 0,
        aircraft: departSegment.aircraft?.code || "N/D",
        refundable: false,
        tags: ["Best Value", "Direct Flight"],
        amenities: ["20kg Check-in",
          "Meal Included",
          "Wi-Fi Available",
          "Refundable",],
        geoCode: item.geoCode || {},
        country: item.address?.countryName || "N/D",
        region: item.address?.regionCode || "N/D",

      };
    }) || [];

  const [compareList, setCompareList] = useState([]);
  const [compareMode, setCompareMode] = useState(false);

  const [selectedFlight, setSelectedFlight] = useState(null);
  return (
    <div className=" mt-52  flex flex-col gap-16">

      {
        selectedTab === "Flights" && (

          <div className='flex gap-4'>
            <div className='w-[23.5%]'>
              <Filters />
            </div>
            <div className='w-full  '>
              <TopQuickFilters selectedTab={selectedTab} />
              <AvailableFilters compareMode={compareMode} setCompareMode={setCompareMode} flights={flights} compareList={compareList} setCompareList={setCompareList} />
              <FlightCard
                flights={apiFlights.length > 0 ? apiFlights : []}
                selectedFlight={selectedFlight}
                setSelectedFlight={setSelectedFlight}
                compareList={compareList}
                setCompareList={setCompareList}
                compareMode={compareMode}
              />
            </div>
          </div>
        )
      }
      {
        selectedTab === "Bus" && (
          <div className='flex gap-4'>
            <div className='w-[23.5%]'>
              <Filters />
            </div>
            <div className='w-full  '>
              <TopQuickFilters selectedTab={selectedTab} />
              <AvailableFilters selectedTab={selectedTab} compareMode={compareMode} setCompareMode={setCompareMode} flights={flights} compareList={compareList} setCompareList={setCompareList} />
              <BusCart />
            </div>
          </div>
        )
      }

    </div>
  )
}

export default Filtering
