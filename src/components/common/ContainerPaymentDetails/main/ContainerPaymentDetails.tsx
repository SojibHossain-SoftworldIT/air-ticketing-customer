import React from 'react'

import { ArrowLeft } from 'lucide-react'
import TopContainerPersonalDetails from '../../ContainerPersonalDetails/common/TopContainerPersonalDetails'
import RightPaymentDetails from '../common/RightPaymentDetails';
import Link from 'next/link';
import LeftPaymentDetails from '../common/LeftPaymentDetails';

const ContainerPaymentDetails = () => {
    return (
        <div className='h-[1675px]'>
            <div className="absolute top-[252px] rounded-3xl left-1/2 pt-8 pr-6 pb-12 pl-6 -translate-x-1/2 w-[1100px]   bg-[#F9FAFB] ">
                <TopContainerPersonalDetails />
                <Link href={"/personalDetails"}>
                    <div className='py-6 flex gap-4 items-center'>
                        <ArrowLeft />
                        <p className='text-[#000B2F]'>Back To Results</p>
                    </div>
                </Link>
                <div className='flex justify-between gap-4' >
                    <RightPaymentDetails />
                    <LeftPaymentDetails/>
                </div>
            </div>
        </div>
    );
};

export default ContainerPaymentDetails;