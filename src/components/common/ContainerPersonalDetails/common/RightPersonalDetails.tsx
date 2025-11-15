import React from 'react'
import PersonalDetailsFlightSummary from './PersonalDetailsFlightSummary'
import PersonalDetailsPersonal from './PersonalDetailsPersonal'
import PersonalDetailsContactInformation from './PersonalDetailsContactInformation'
import PersonalDetailsAddOnsServicesOptional from './PersonalDetailsAddOnsServicesOptional'
import PersonalDetailsBusSummary from './PersonalDetailsBusSummary'
import PersonalDetailsBusSelectYourSeats from './PersonalDetailsBusSelectYourSeats'
import PersonalDetailsBusPassengerDetails from './PersonalDetailsBusPassengerDetails'


const RightPersonalDetails = ({selectedTab , passengerDetails}: any) => {

  return (
    <div className="flex flex-col gap-4 w-full ">
      {selectedTab === "Flights"  &&  <PersonalDetailsFlightSummary />          }
      {selectedTab === "Flights"  &&  <PersonalDetailsPersonal />               }
      {selectedTab === "Flights"  &&  <PersonalDetailsContactInformation />     }
      {selectedTab === "Flights"  &&  <PersonalDetailsAddOnsServicesOptional /> }
      {selectedTab === "Bus"      &&  <PersonalDetailsBusSummary />             }
      {selectedTab === "Bus" && passengerDetails      &&  <PersonalDetailsBusSelectYourSeats />             }
      {selectedTab === "Bus" && !passengerDetails      &&  <PersonalDetailsBusPassengerDetails />             }

      
     
    </div>
  )
}

export default RightPersonalDetails
