import { Plane, Bus } from 'lucide-react'
import React from 'react'

const videoSources: Record<string, string> = {
    Flights: "/AdobeStock_441987319_Video_HD_Preview.mp4",
    Bus: "/0_Bus_Highway_3840x2160.mp4",
    Launch: "/AdobeStock_441987319_Video_HD_Preview.mp4",
    Train: "/AdobeStock_441987319_Video_HD_Preview.mp4",
    Hotel: "/AdobeStock_441987319_Video_HD_Preview.mp4",
    Visa: "/AdobeStock_441987319_Video_HD_Preview.mp4",
    Packages: "/AdobeStock_441987319_Video_HD_Preview.mp4",
    Offers: "/AdobeStock_441987319_Video_HD_Preview.mp4",
}

export type Tab = "Flights" | "Bus" | "Launch" | "Train" | "Hotel" | "Visa" | "Packages" | "Offers";

const heroContent = {
    Flights: {
        icon: <Plane size={20} color="#002499" />,
        title: "Your Journey Begins Here",
        subtitle: "Book flights, buses, hotels, and more - all in one place",
    },
    Bus: {
        icon: <Bus size={20} color="#002499" />,
        title: "Book Your Bus Tickets",
        subtitle: "Travel comfortably across Bangladesh with trusted bus operators",
    },
    Launch: {
        icon: <Bus size={20} color="#002499" />,
        title: "Book Your Launch Tickets",
        subtitle: "Safe and smooth river travel experience",
    },
    Train: {
        icon: <Bus size={20} color="#002499" />,
        title: "Book Your Train Journey",
        subtitle: "Fast and convenient rail service across the country",
    },
    Hotel: {
        icon: <Bus size={20} color="#002499" />,
        title: "Find the Perfect Stay",
        subtitle: "Hotels, resorts, and accommodations at best prices",
    },
    Visa: {
        icon: <Bus size={20} color="#002499" />,
        title: "Visa Processing Services",
        subtitle: "Fast and secure visa application assistance",
    },
    Packages: {
        icon: <Bus size={20} color="#002499" />,
        title: "Explore Tour Packages",
        subtitle: "Budget-friendly international & domestic packages",
    },
    Offers: {
        icon: <Bus size={20} color="#002499" />,
        title: "Latest Travel Offers",
        subtitle: "Discounts & exclusive travel deals just for you",
    },
}
const Hero = ({ selectedTab }: { selectedTab: Tab }) => {
    const content = heroContent[selectedTab]

    return (
        <div className="relative h-[530px] rounded-3xl w-full overflow-hidden">
            <video
                key={selectedTab}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={videoSources[selectedTab]} type="video/mp4" />
            </video>

            <div className="relative top-6 w-4xl h-[184px] m-auto z-10 flex flex-col items-center text-white">
                <button className="flex items-center space-x-4 rounded-full bg-[#fafbfc] px-6 py-3 shadow-sm transition hover:shadow-md">
                    {content.icon}
                    <span className="text-base font-normal text-[#002499]">
                        Your Journey Starts Here
                    </span>
                </button>

                <h1 className="text-6xl font-normal text-center text-[#fafbfc] mt-4">
                    {content.title}
                </h1>

                <p className="mt-4 text-[24px] text-center text-[#f0f2f5]">
                    {content.subtitle}
                </p>
            </div>
        </div>
    )
}

export default Hero
