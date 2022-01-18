import React from 'react';
import Paper from '@mui/material/Paper';
import RevenueLineChart from './RevenueLineChart';
import newLeadsAvatar from './newLeads.png';
import buyingScoreAvatar from './buyingScore.png';
import StaffUtilization from './StaffUtilization';
const staffData =[
    { name: "Existing Utilization", value: 50, color:"#0088FE" },
  
    { name: "Potential Utilization", value: 20, color:"#10B981" },
    { name: "", value: 30 , color:"#E5E5E5" },

  ];
const BusinessImpactCards = ({data}) => {
    console.log(data);
    return (
        <div className='biCardsWrapper'>
            <Paper elevation={3} className='potentialRevenueCard biMainCardsCommon'>
                <div className='potentialRevenueInfo'>
                    <span className='biValue'>{data.potentialRevenue}</span>
                    <span className='biLabel'>Potential Revenue</span>
                </div>
                <div className='potentialRevenueGraph'>
                   <RevenueLineChart />
                </div>
            </Paper>
            <div className='leadsPlusScoreCards biMainCardsCommon col-gap-20'>
                <Paper elevation={3} className='newLeadsCard padding-20'>
                    <div className='newLeadsInfo'>
                        <span className='biValue'>{data.newLeads}</span>
                        <span className='biLabel'>New Leads</span>
                    </div>
                    <div className='newLeadsAvatar'>
                        <img src={newLeadsAvatar} alt="" />
                    </div>
                </Paper>
                <Paper elevation={3} className='buyingScoreCard padding-20'>
                    <div className='newLeadsInfo'>
                        <span className='biValue'>{data.buyingScore}</span>
                        <span className='biLabel'>Buying score</span>
                    </div>
                    <div className='newLeadsAvatar'>
                        <img src={buyingScoreAvatar} alt="" />
                    </div>
                </Paper>
            </div>
            <Paper elevation={3} className='staffUtilizationCard biMainCardsCommon padding-20'>
                <div className='potentialRevenueInfo'>
                    <span className='biValue'>{data.staffUtilization}</span>
                    <span className='biLabel'>Staff Utilization</span>
                </div>
                <div className='potentialRevenueGraph'>
                <StaffUtilization graphData={staffData} />
                </div>
            </Paper>
        </div>
    );

}

export default BusinessImpactCards;