import React from 'react'
import BusSelectYourSeatsLeft from './BusSelectYourSeatsLeft'
import BusSelectYourSeatsRight from './BusSelectYourSeatsRight'

const PersonalDetailsBusSelectYourSeats = () => {
  return (
    <div className='flex justify-between gap-4'>
      <BusSelectYourSeatsLeft/>
      <BusSelectYourSeatsRight/>
    </div>
  )
}

export default PersonalDetailsBusSelectYourSeats
