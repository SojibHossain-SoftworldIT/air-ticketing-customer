import React from 'react'
import LeftTop from '../LeftTop'
import CenterTop from '../CenterTop'
import RightTop from '../RightTop'

const Navber = () => {
  return (
    <div className='flex justify-between items-center max-w-7xl m-auto py-4 px-16' >
        <LeftTop/>
        <CenterTop/>
        <RightTop/>
    </div>
  )
}

export default Navber
