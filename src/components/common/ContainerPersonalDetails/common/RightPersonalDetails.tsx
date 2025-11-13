import React from 'react'
import PersonalDetailsFlightSummary from './PersonalDetailsFlightSummary'
import PersonalDetailsPersonal from './PersonalDetailsPersonal'
import PersonalDetailsContactInformation from './PersonalDetailsContactInformation'
import PersonalDetailsAddOnsServicesOptional from './PersonalDetailsAddOnsServicesOptional'
import PersonalDetailsBusSummary from './PersonalDetailsBusSummary'
import PersonalDetailsBusSelectYourSeats from './PersonalDetailsBusSelectYourSeats'


const RightPersonalDetails = ({selectedTab}: any) => {

  return (
    <div className="flex flex-col gap-4 w-full ">
      {selectedTab === "Flights"  &&  <PersonalDetailsFlightSummary />          }
      {selectedTab === "Flights"  &&  <PersonalDetailsPersonal />               }
      {selectedTab === "Flights"  &&  <PersonalDetailsContactInformation />     }
      {selectedTab === "Flights"  &&  <PersonalDetailsAddOnsServicesOptional /> }
      {selectedTab === "Bus"      &&  <PersonalDetailsBusSummary />             }
      {selectedTab === "Bus"      &&  <PersonalDetailsBusSelectYourSeats />             }

      
     
    </div>
  )
}

export default RightPersonalDetails
