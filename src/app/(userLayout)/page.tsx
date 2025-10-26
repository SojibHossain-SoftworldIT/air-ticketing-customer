import BusinessClass from "@/components/model/Home/BusinessClass";
import DownloadOurApp from "@/components/model/Home/DownloadOurApp";
import FrequentlyAskedQuestions from "@/components/model/Home/FrequentlyAskedQuestions";
import Hero from "@/components/model/Home/Hero";
import OurServices from "@/components/model/Home/OurServices";
import PaymentView from "@/components/model/Home/PaymentView";
import Popular_Destinations from "@/components/model/Home/Popular_Destinations";
import Popular_Flight_Routes from "@/components/model/Home/Popular_Flight_Routes";
import Popular_Searches from "@/components/model/Home/Popular_Searches";
import Recently_Viewed_Flights from "@/components/model/Home/Recently_Viewed_Flights";
import Special_Offers_Deals from "@/components/model/Home/Special_Offers_Deals";
import Views from "@/components/model/Home/Views";
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
      <div className=" mt-40 flex flex-col gap-16">
      <Recently_Viewed_Flights/>
      <Views/>
      <PaymentView/>
      <Popular_Searches/>
      <OurServices/>
      <Popular_Flight_Routes/>
      <Popular_Destinations/>
      <Special_Offers_Deals/>
      <DownloadOurApp/>
      <FrequentlyAskedQuestions/>
      </div>
    </main>
  );
};

export default HomePage;
