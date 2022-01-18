import React,{useEffect,useState} from 'react';
import Paper from '@mui/material/Paper';
import leadAvatar from './leadAvatar.png';
import CustomizedDialogs from "./CustomizedDialogs";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { List } from '@mui/material';

const DetailedLeadCard = ({data}) => {
    const [openDialog, setDialogVisiblity] = React.useState(false);
    const [selectedLead, setSelectedLead] = React.useState('');
    const [repName, setRepName] = React.useState('');
    let navigate = useNavigate();

    const [recommendedList,setRecommendedList] = useState([])
    const [staffList, setStaffList] = useState([]);

    useEffect(() => {
      },[]);

    const showLeadDetils = (user) => {
        setDialogVisiblity(true);
        setSelectedLead(user);
        fetch(`http://localhost:5000/v1/smartPredictor/${user.clientId}/ClientOffer`)
        .then(response => response.json())
        .then(data => setRecommendedList(data.recommendedList));
        fetch('http://localhost:5000/v1/smartPredictor/-435/StaffList')
        .then(response => response.json())
        .then(data => setStaffList(data));
    }

    const handleChange = (event) => {
        setRepName(event.target.value);
      };
      const displayMembershipList = () => {
          return recommendedList.map((list) => {
              return (
                <Paper elevation={3} className='leadPackageGold'>
                    <div className='leadBasicInfo'>
                        <div className='leadTypeLabel'>{list.name}</div>
                        <div className='leadMoreInfo'>{list.timesOfPurchased}</div>
                        <div className='leadInfoRevenue'>{'Revenue $'}{list.revenue}</div>
                    </div>
                    <div className='leadConversionScore leadScoreGold'>
                        <span className='conversionScoreLabel'>{'Conversion Score '}{list.conversionScore}%</span>
                        <span className='conversionScoreValue'>{list.review}{' Review'}</span>
                    </div>
                </Paper>)
          })
        
    }

    const getstaffList = ()=>{
        return (
            <FormControl fullWidth>
                            <InputLabel id="assignRep-label">Select Sales Representative</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={repName}
                            label="Sales Representive"
                            onChange={handleChange}
                            >
                                {staffList.map((staff)=>{
                                    return (
                                        <MenuItem value={staff.staffId}>{staff.staffName}</MenuItem>
                                    )
                                })}
                                {/* <MenuItem value={'johnHarris'}>John Harris</MenuItem>
                                <MenuItem value={'chrisWoakes'}>Chris Woakes</MenuItem>
                                <MenuItem value={'benDavis'}>Ben Davis</MenuItem> */}
                            </Select>
                        </FormControl>
        )};

    const renderLeadContent = () => {
        return (
            <div className='leadPushNotification'>
                <div className='leadHeadSection'>
                    <div className='leadInfo'>
                        <div className='leadAvatar'><img alt={""} src={leadAvatar} /></div>
                        <div className='leadDetails'>
                            <div className='leadName'>{selectedLead.clientName}</div>
                            <div className='leadPlace'>{selectedLead.location}</div>
                        </div>
                    </div>
                    {/* <div className='leadScoreSection'>
                        <div className='leadScore'>
                            <div className='leadScoreLabel'>Lead Score</div>
                            <div className='leadScore'>{selectedLead.leadScore}</div>
                        </div>                        
                    </div> */}
                </div>
                <div className='leadLabelSection'>
                    Recommonded Offer
                </div>
                <div className='leadPackageSection'>
                    <div className='leadPackage'>
                        {/* <Paper elevation={3} className='leadPackageGold'>
                            <div className='leadBasicInfo'>
                                <div className='leadTypeLabel'>Gold Membership</div>
                                <div className='leadMoreInfo'>2 Times purchased</div>
                                <div className='leadInfoRevenue'>{selectedLead.revenue}</div>
                            </div>
                            <div className='leadConversionScore leadScoreGold'>
                                <span className='conversionScoreLabel'>Conversion score</span>
                                <span className='conversionScoreValue'>50%</span>
                            </div>
                        </Paper> */}
                        {
                            displayMembershipList()
                        }
                    </div>
                    <div className='leadPackage'>
                        {/* <Paper elevation={3} className='leadPackageFlex'>
                            <div className='leadBasicInfo'>
                                <div className='leadTypeLabel'>Gold Membership</div>
                                <div className='leadMoreInfo'>2 Times purchased</div>
                                <div className='leadInfoRevenue'>{selectedLead.revenue}</div>
                            </div>
                            <div className='leadConversionScore leadScoreFlex'>
                                <span className='conversionScoreLabel'>Conversion score</span>
                                <span className='conversionScoreValue'>50%</span>
                            </div>
                        </Paper> */}
                    </div>
                </div>
                <div className='leadSettingsSection'>
                    <div className='settingsLabel'>Lead Settings</div>
                    <div className='settingsSubLabel'>Assign Sales Representative</div>
                    <div className='selectRepresentative'>
                      {getstaffList()}  
                    </div>
                </div>
                <div className='leadPromotionLabel'>Send promotion to user</div>
                <div className='leadPromotionOptions'>
                    <FormControlLabel control={<Checkbox defaultChecked color="default" />} label="Email" />
                    <FormControlLabel control={<Checkbox color="default" />} label="SMS" />
                </div>
                <div className='leadNoteSection'>
                    <span>Note:</span> After sending a communication to a selected user this lead will automatically be added to the Lead Management sales pipeline.
                </div>
                <div className='leadSendNotificationBtn'>
                    <Button variant="contained" onClick={()=>navigate("/successful")}>Send</Button>
                </div>
            </div>
        )
    }
    return (
        <div className='leadDetailsDialogue'>
            <Paper elevation={3} className='leadDataBox' onClick={()=>showLeadDetils(data)} >
                <div className='userDetails commonLeadInfoColumnGrid'>
                    <div className='leadAvatar'>
                        <img src={leadAvatar} alt="" />
                    </div>
                    <div className='leadInfo commonLeadInfoRowGrid'>
                        <span className='leadName'>{data.clientName}</span>
                        <span className='leadLocation'>{data.location}</span>
                    </div>
                </div>
                <div className='leadMembershipInfo commonLeadInfoRowGrid'>
                    <span className='label'>Membership</span>
                    <span className='leadValue'>{data.memberShip?"Yes":"NO"}</span>
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
            <CustomizedDialogs
                open={openDialog}
                setDialogVisiblity={setDialogVisiblity}
            >
                {renderLeadContent()}
            </CustomizedDialogs>
        </div>
    )
}

export default DetailedLeadCard;