"use client"
import React from 'react'
import TobHero from '../TobHero'
import ContainerPersonalDetails from '../../../common/ContainerPersonalDetails/main/ContainerPersonalDetails'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const PersonalDetails = () => {
      const selectedTab = useSelector((state: RootState) => state.tab.selectedTab);
  return (
    <div>
      <TobHero selectedTab={selectedTab} />
      <ContainerPersonalDetails />
    </div>
  )
}

export default PersonalDetails
