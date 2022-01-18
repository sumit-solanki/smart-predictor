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
                <Paper elevation={3} className="leadPackageGold">
                <div className="leadBasicInfo">
                  <div className="leadTypeLabel">{list.name}</div>
                  <div className="leadMoreInfo">{list.timesOfPurchased}</div>
                  <span className="conversionScoreValue" style={{ color: "#94A3B8" }}>
                    {list.review}
                    {" Review"}
                  </span>
                  <div className="leadInfoRevenue">
                    {"Revenue $"}
                    {list.revenue}
                  </div>
                </div>
                <div
                  className={
                    list.conversionScore >= 70
                      ? "leadConversionScore leadScoreGold colorgreen"
                      : "leadConversionScore leadScoreGold"
                  }
                >
                  <span className="conversionScoreLabel">{"Conversion Score "}</span>
                  <span style={{ "font-size": "18px" }}>{list.conversionScore}%</span>
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
                            </Select>
                        </FormControl>
        )};

    const renderLeadContent = () => {
        return (
            <div className='leadPushNotification'>
                <div className='leadHeadSection'>
                    <div className='leadInfo'>
                        <div className='leadAvatar'><img alt={""} src={leadAvatar} /></div>
                        <div className='leadDetails' >
                            <div className='leadName' style={{"font-size":"24px","font-weight":"700"}}>{selectedLead.clientName}</div>
                            <div className='leadPlace'>{selectedLead.location}</div>
                        </div>
                    </div>
                </div>
                <div className='leadLabelSection' style ={{"font-size":"24px", "font-weight":"700"}}>
                    Recommonded Offer
                </div>
                <div className='leadPackageSection'>
                    <div className='leadPackage'>
                        {
                            displayMembershipList()
                        }
                    </div>
                    <div className='leadPackage'>
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
                    <span className='leadValue'>${data.revenue}</span>
                </div>
                <div className={data.leadScore>30 ?"leadScoreInfo commonLeadInfoRowGrid":"leadScoreInfo commonLeadInfoRowGrid bgcoloryellow"}>
                    <span className='label'>Lead Score</span>
                    <span className='leadValue'>{data.leadScore}%</span>
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