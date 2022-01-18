import React,{useEffect,useState} from 'react';
import { Link } from "react-router-dom";
import DetailedLeadCard from './detailedLeadCard';
import BusinessImpactCards from './businessImpactCards';

 const Details = ({userData}) =>{



    
    const displayLeads = () => {
       return userData.clientList.map(data=> {
            return (
            <DetailedLeadCard data={data} key={data.id}/>
            );
        })
    }

    const displayBICards = () => {
        return (
            <BusinessImpactCards data ={userData.businessImpact} />
        )
    }


    return(
        <div className='commonContentWrapper'>
            <div className='backToHomeLink'>
                <Link to="/">
                    <span className='backArrow'>{`<-`}</span><span>Back</span>
                </Link>
            </div>
            <div className='details-main'>
                <div className='left'>
                    <div className='existingUserHeadSection'>
                        <h2>{userData.clientList.length} - {userData.type}</h2>
                    </div>
                    <div className='leadsList'>
                        {displayLeads()}
                    </div>
                </div>
                <div className='right'>
                    <div className='biHeadSection'>
                        <h2>Business Impact</h2>
                    </div>
                    <div className='biCardsList'>
                        {displayBICards()}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Details;