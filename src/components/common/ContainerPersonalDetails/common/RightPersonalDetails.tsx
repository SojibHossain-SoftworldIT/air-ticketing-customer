import React from 'react'
import PersonalDetailsFlightSummary from './PersonalDetailsFlightSummary'
import PersonalDetailsPersonal from './PersonalDetailsPersonal'
import PersonalDetailsContactInformation from './PersonalDetailsContactInformation'
import PersonalDetailsAddOnsServicesOptional from './PersonalDetailsAddOnsServicesOptional'

const RightPersonalDetails = () => {
  return (
    <div className="flex flex-col gap-4 w-[650px] ">
      <PersonalDetailsFlightSummary/>
      <PersonalDetailsPersonal/>
      <PersonalDetailsContactInformation/>
      <PersonalDetailsAddOnsServicesOptional/>
    </div>
  )
}

export default RightPersonalDetails
