import React from 'react';
import MobileBanking from './MobileBanking';

const RightPaymentDetails = () => {
    return (
        <div className="flex flex-col gap-4 w-[650px] ">
            <h2>Select Payment Method</h2>
            <MobileBanking />
        </div>
    );
};

export default RightPaymentDetails;