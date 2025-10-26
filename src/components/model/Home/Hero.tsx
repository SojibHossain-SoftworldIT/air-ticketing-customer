import { Plane } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <div className="relative h-[530px] rounded-3xl  w-full overflow-hidden">
            {/* Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/AdobeStock_441987319_Video_HD_Preview.mp4" type="video/mp4" />
            </video>

            {/* Overlay Content */}
            <div className="relative top-6 w-4xl h-[184px] m-auto z-10 flex flex-col items-center  text-white">
                <button className="flex items-center space-x-4 rounded-full bg-[#fafbfc] px-6 py-3 shadow-sm transition-shadow duration-200 hover:shadow-md">
                    {/* Heroicon: paper-airplane (outline) */}
                     <Plane size={20} color='#002499' />


                    <span className="text-base font-normal text-[#002499]">
                        Your Journey Starts Here
                    </span>
                </button>
                <div>
                    <h1 className="text-6xl font-normal text-center text-[#fafbfc] ">Your Journey Begins Here</h1>
                    <p className="mt-4 text-[24px] text-center text-[#f0f2f5]">Book flights, buses, hotels, and more - all in one place</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
