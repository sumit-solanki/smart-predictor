import React from 'react';
import Paper from '@mui/material/Paper';

const DetailedLeadCard = ({data}) => {
    return (
        <Paper elevation={3} className='leadDataBox'>
            <div className='userDetails commonLeadInfoColumnGrid'>
                <div className='leadAvatar'>X</div>
                <div className='leadInfo commonLeadInfoRowGrid'>
                    <span className='leadName'>{data.name}</span>
                    <span className='leadLocation'>{data.place}</span>
                </div>
            </div>
            <div className='leadMembershipInfo commonLeadInfoRowGrid'>
                <span className='label'>Membership</span>
                <span className='leadValue'>{data.membership}</span>
            </div>
            <div className='leadActiveInfo commonLeadInfoRowGrid'>
                <span className='label'>Active On</span>
                <span className='leadValue'>{data.activeOn}</span>
            </div>
            <div className='leadLastVisitInfo commonLeadInfoRowGrid'>
                <span className='label'>Last Visit</span>
                <span className='leadValue'>{data.lastVisit}</span>
            </div>
            <div className='leadRevenueInfo commonLeadInfoRowGrid'>
                <span className='label'>Revenue</span>
                <span className='leadValue'>{data.revenue}</span>
            </div>
            <div className='leadScoreInfo commonLeadInfoRowGrid'>
                <span className='label'>Lead Score</span>
                <span className='leadValue'>{data.leadScore}</span>
            </div>
        </Paper>
    )
}

export default DetailedLeadCard;