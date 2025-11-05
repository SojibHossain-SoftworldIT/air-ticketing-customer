"use client"
import BusinessClass from "@/components/common/BusinessClass/main/BusinessClass";
import Filtering from "@/components/common/Filtering/main/Filtering";
import Hero from "@/components/modules/Home/Hero";
import Home from "@/components/modules/Home/main/Home";

import { Metadata } from "next";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Air Ticketing | Home",
//   description: "Vendor management website",
// };
const HomePage = () => {

  const [findTicket, setFindTicket] = useState(true);
  return (
    <main>
      <Hero />
      <BusinessClass setFindTicket={setFindTicket} />

      {
        findTicket ? (
          <Home />
        ) : (
          <Filtering />
        )
      }

    </main>
  );
};

export default HomePage;
