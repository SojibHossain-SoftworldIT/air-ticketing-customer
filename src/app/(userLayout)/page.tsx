"use client"
import BusinessClass from "@/components/common/BusinessClass/main/BusinessClass";
import Filtering from "@/components/common/Filtering/main/Filtering";
import Hero from "@/components/modules/Home/Hero";
import Home from "@/components/modules/Home/main/Home";
import { Tab } from "@/components/modules/Home/Hero";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Air Ticketing | Home",
//   description: "Vendor management website",
// };

const MainPage = () => {

  const [findTicket, setFindTicket] = useState(true);

  const [selectedTab, setSelectedTab] = useState<Tab>("Flights");
  return (
    <main>
      <Hero selectedTab={selectedTab} />
      <BusinessClass setFindTicket={setFindTicket} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      {
        findTicket ? (
          <Home />
        ) : (
          <Filtering selectedTab= {selectedTab} />
        )
      }

    </main>
  );
};

export default MainPage;
