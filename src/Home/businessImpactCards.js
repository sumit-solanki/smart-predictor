import React from 'react';
import Paper from '@mui/material/Paper';
import RevenueLineChart from './RevenueLineChart'
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
            <Paper elevation={3} className='leadsPlusScoreCards biMainCardsCommon'>
                <div className='newLeadsCard'>
                    <div className='newLeadsInfo'>
                        <span className='biValue'>$20</span>
                        <span className='biLabel'>New Leads</span>
                    </div>
                    <div className='newLeadsAvatar'>X</div>
                </div>
                <div className='buyingScoreCard'>
                    <div className='newLeadsInfo'>
                        <span className='biValue'>$20</span>
                        <span className='biLabel'>New Leads</span>
                    </div>
                    <div className='newLeadsAvatar'>X</div>
                </div>
            </Paper>
            <Paper elevation={3} className='staffUtilizationCard biMainCardsCommon'>
                <div className='potentialRevenueInfo'>
                    <span className='biValue'>70%</span>
                    <span className='biLabel'>Staff Utilization</span>
                </div>
                <div className='potentialRevenueGraph'>
                    X
                </div>
            </Paper>
        </div>
    );

}

export default BusinessImpactCards;