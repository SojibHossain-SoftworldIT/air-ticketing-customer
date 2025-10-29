import React from 'react'
import LeftTop from '../../../shared/navber/LeftTop'
import CenterTop from '../../../shared/navber/CenterTop'
import RightTop from '../../../shared/navber/RightTop'

const Navber = () => {
  return (
    <div className='bg-white shadow-sm  sticky top-0 z-50 '>
    <div className='flex justify-between  items-center max-w-7xl m-auto py-2 px-16 ' >
        <LeftTop textColer="text-gray-800"/>
        <CenterTop/>
        <RightTop/>
    </div>

    </div>
  )
}

export default Navber
