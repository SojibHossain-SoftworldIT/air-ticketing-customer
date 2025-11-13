"use client"
import React from 'react'
import TopContainerPersonalDetails from '../common/TopContainerPersonalDetails'
import RightPersonalDetails from '../common/RightPersonalDetails'
import LeftPersonalDetails from '../common/LeftPersonalDetails'
import { ArrowLeft } from 'lucide-react'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Link from 'next/link'

const ContainerPersonalDetails = () => {

    const selectedTab = useSelector((state: RootState) => state.tab.selectedTab);


  return (
    <div className='h-[1675px]'>
      <div className="absolute top-[252px] rounded-3xl left-1/2 pt-8 pr-6 pb-12 pl-6 -translate-x-1/2 w-[1150px]   bg-[#F9FAFB] ">
        <TopContainerPersonalDetails  />
        <Link href={"/"} className='py-6 flex gap-2 items-center'><ArrowLeft /><p className='text-[#000B2F]'>Back To Results</p></Link>
        <div className='flex justify-between gap-4' >
          <RightPersonalDetails selectedTab={selectedTab} />
          {selectedTab === "Flights" &&   <LeftPersonalDetails background={"bg-white"}/>}
          {selectedTab === "Bus" &&   <LeftPersonalDetails background={"bg-[#F0F2F5]"}/>}
        </div>
      </div>
    </div>
  )
}

export default ContainerPersonalDetails
