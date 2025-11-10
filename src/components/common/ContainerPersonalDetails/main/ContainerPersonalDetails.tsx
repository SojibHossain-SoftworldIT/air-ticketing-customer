import React from 'react'
import TopContainerPersonalDetails from '../common/TopContainerPersonalDetails'
import RightPersonalDetails from '../common/RightPersonalDetails'
import LeftPersonalDetails from '../common/LeftPersonalDetails'
import { ArrowLeft } from 'lucide-react'

const ContainerPersonalDetails = () => {
  return (
    <div className='h-[1675px]'>
      <div className="absolute top-[252px] rounded-3xl left-1/2 pt-8 pr-6 pb-12 pl-6 -translate-x-1/2 w-[1100px] h-[1675px]  bg-[#F9FAFB] ">
        <TopContainerPersonalDetails />
        <div className='py-6 flex gap-4 items-center'><ArrowLeft /><p className='text-[#000B2F]'>Back To Results</p></div>
        <div className='flex justify-between gap-4' >
          <RightPersonalDetails />
          <LeftPersonalDetails />
        </div>
      </div>
    </div>
  )
}

export default ContainerPersonalDetails
