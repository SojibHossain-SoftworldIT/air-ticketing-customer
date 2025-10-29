import BusinessClass from "@/components/modules/Home/BusinessClass";
import DownloadOurApp from "@/components/modules/Home/DownloadOurApp";
import FrequentlyAskedQuestions from "@/components/modules/Home/FrequentlyAskedQuestions";
import Hero from "@/components/modules/Home/Hero";
import OurClintSay from "@/components/modules/Home/OurClintSay/OurClintSay";
import OurServices from "@/components/modules/Home/OurServices";
import PaymentView from "@/components/modules/Home/PaymentView";
import Popular_Destinations from "@/components/modules/Home/Popular_Destinations";
import Popular_Flight_Routes from "@/components/modules/Home/Popular_Flight_Routes";
import Popular_Searches from "@/components/modules/Home/Popular_Searches";
import PopularDestinations from "@/components/modules/Home/PopularDestinations";
import Recently_Viewed_Flights from "@/components/modules/Home/Recently_Viewed_Flights";
import Special_Offers_Deals from "@/components/modules/Home/Special_Offers_Deals";
import SpecialOffer from "@/components/modules/Home/SpecialOffer";
import TravelBeyond from "@/components/modules/Home/TravelBeyond";
import Views from "@/components/modules/Home/Views";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Air Ticketing | Home",
  description: "Vendor management website",
};
const HomePage = () => {
  return (
    <main>
      <Hero/>
      <BusinessClass/>
      <div className=" mt-52 flex flex-col gap-16">
      <Recently_Viewed_Flights/>
      <Views/>
      <PaymentView/>
      <Popular_Searches/>
      <OurServices/ >
      <TravelBeyond />
      <SpecialOffer/>
      <OurClintSay/>
      <Popular_Flight_Routes/>
      <Popular_Destinations/>
      <Special_Offers_Deals/>
      <PopularDestinations/>
      <DownloadOurApp/>
      <FrequentlyAskedQuestions/>
      </div>
    </main>
  );
};

export default HomePage;
