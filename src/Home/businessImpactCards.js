import React from 'react';
import Paper from '@mui/material/Paper';
import RevenueLineChart from './RevenueLineChart';
import newLeadsAvatar from './newLeads.png';
import buyingScoreAvatar from './buyingScore.png';
import StaffUtilization from './StaffUtilization';
const staffData =[
    { name: "Group A", value: 70, color:"#0088FE" },
  
    { name: "Group D", value: 20, color:"#10B981" },
    { name: "", value: 10 , color:"#E5E5E5" },

  ];
const BusinessImpactCards = () => {
    return (
        <div className='biCardsWrapper'>
            <Paper elevation={3} className='potentialRevenueCard biMainCardsCommon'>
                <div className='potentialRevenueInfo'>
                    <span className='biValue'>$2000</span>
                    <span className='biLabel'>Potential Revenue</span>
                </div>
                <div className='potentialRevenueGraph'>
                   <RevenueLineChart />
                </div>
            </Paper>
            <div className='leadsPlusScoreCards biMainCardsCommon col-gap-20'>
                <Paper elevation={3} className='newLeadsCard padding-20'>
                    <div className='newLeadsInfo'>
                        <span className='biValue'>$20</span>
                        <span className='biLabel'>New Leads</span>
                    </div>
                    <div className='newLeadsAvatar'>
                        <img src={newLeadsAvatar} alt="" />
                    </div>
                </Paper>
                <Paper elevation={3} className='buyingScoreCard padding-20'>
                    <div className='newLeadsInfo'>
                        <span className='biValue'>$20</span>
                        <span className='biLabel'>Buying score</span>
                    </div>
                    <div className='newLeadsAvatar'>
                        <img src={buyingScoreAvatar} alt="" />
                    </div>
                </Paper>
            </div>
            <Paper elevation={3} className='staffUtilizationCard biMainCardsCommon padding-20'>
                <div className='potentialRevenueInfo'>
                    <span className='biValue'>70%</span>
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