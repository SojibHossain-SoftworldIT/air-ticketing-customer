import React from 'react'
import Recently_Viewed_Flights from '../Recently_Viewed_Flights'
import Views from '../Views'
import PaymentView from '../PaymentView'
import Popular_Searches from '../Popular_Searches'
import OurServices from '../OurServices'
import TravelBeyond from '../TravelBeyond'
import SpecialOffer from '../SpecialOffer'
import OurClintSay from '../OurClintSay/OurClintSay'
import Popular_Flight_Routes from '../Popular_Flight_Routes'
import Popular_Destinations from '../Popular_Destinations'
import Special_Offers_Deals from '../Special_Offers_Deals'
import PopularDestinations from '../PopularDestinations'
import DownloadOurApp from '../DownloadOurApp'
import FrequentlyAskedQuestions from '../FrequentlyAskedQuestions'

const Home = () => {
    return (
        <div className=" mt-52 flex flex-col gap-16">
            <Recently_Viewed_Flights />
            <Views />
            <PaymentView />
            <Popular_Searches />
            <OurServices />
            <TravelBeyond />
            <SpecialOffer />
            <OurClintSay />
            <Popular_Flight_Routes />
            <Popular_Destinations />
            <Special_Offers_Deals />
            <PopularDestinations />
            <DownloadOurApp />
            <FrequentlyAskedQuestions />
        </div>
    )
}

export default Home
