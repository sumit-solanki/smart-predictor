import React from 'react';
import { Link } from "react-router-dom";
import DetailedLeadCard from './detailedLeadCard';
import { leadOpportunityUserData } from './details-lead-data';
import BusinessImpactCards from './businessImpactCards';

 const  details = () =>{
    
    const displayLeads = () => {
       return leadOpportunityUserData.map(data=> {
            return (
            <DetailedLeadCard data={data} key={data.id}/>
            );
        })
    }

    const displayBICards = () => {
        return (
            <BusinessImpactCards />
        )
    }


    return(
        <div className='commonContentWrapper'>
            <div className='backToHomeLink'>
                <Link to="/">
                    <span className='backArrow'>{`<-`}</span><span>Back</span>
                </Link>
            </div>
            <div className='details-main  common-wrapper '>
                <div className='left'>
                    <div className='existingUserHeadSection'>
                        <h2>50 - Existing User</h2>
                        <span>Lorem Ipsum eaecenas maximus urna congue urna congue.</span>
                    </div>
                    <div className='leadsList'>
                        {displayLeads()}
                    </div>
                </div>
                <div className='right'>
                    <div className='biHeadSection'>
                        <h2>Business impact</h2>
                        <span>Lorem Ipsum eaecenas maximus urna congue urna congue.</span>
                    </div>
                    <div className='biCardsList'>
                        {displayBICards()}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default details;