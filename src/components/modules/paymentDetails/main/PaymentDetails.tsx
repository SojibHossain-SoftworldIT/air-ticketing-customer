"use client"
import React from 'react';

import TobHero from '../../PersonalDetails/TobHero';
import ContainerPaymentDetails from '@/components/common/ContainerPaymentDetails/main/ContainerPaymentDetails';
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const PaymentDetails = () => {
      const selectedTab = useSelector((state: RootState) => state.tab.selectedTab);
    return (
        <div>
            <TobHero selectedTab={selectedTab} />
            <ContainerPaymentDetails/>

        </div>
    );
};

export default PaymentDetails;