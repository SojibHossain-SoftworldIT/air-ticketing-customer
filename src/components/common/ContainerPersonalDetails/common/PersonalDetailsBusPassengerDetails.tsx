import React from 'react'
import BusUserDetails from './BusUserDetails'
import BusContactInformation from './BusContactInformation'

const PersonalDetailsBusPassengerDetails = () => {
  return (
    <div className='flex flex-col gap-4'>
      <BusUserDetails/>
      <BusContactInformation/>
    </div>
  )
}

export default PersonalDetailsBusPassengerDetails
