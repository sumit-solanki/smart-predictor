import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CardImg from "./CardSvg.svg";
import PredictorWidget from './PredictorWidget';
import SalesBarChart from './SalesBarChart';
import StaffUtilization from './StaffUtilization';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: "20px",
  textAlign: "left",
}));
const staffData =[
    { name: "Group A", value: 70, color:"#0088FE" },
    { name: "", value: 10 , color:"#E5E5E5" },
  ];
const Summary = () => {
  const renderDataCard = () => {
    return (
      <div className="single-card">
        <div className="card-left">
          <div className="data-title">20%</div>
          <div className="data-detail">Lead conversion score</div>
        </div>
        <div className="card-right">
          <img src={CardImg} alt="" />
        </div>
      </div>
    );
  };

  return (
    <div className="summary-main commonContentWrapper">
      <div className="left">
        <div className="engagement-wrapper">
          <div className="heading">
            <div className="head-title">Engagement</div>
            <div className="head-detail">
              Lorem Ipsum eaecenas maximus urna congue urna congue.
            </div>
          </div>
          <div className="main-detail">
            {[0, 1, 2, 3].map((elevation) => (
              <div className="">
                <Item key={elevation} elevation={2}>
                  {renderDataCard()}
                </Item>
              </div>
            ))}
            <div className="large">
              <Item elevation={2}>
                <div className="single-card">
                  <div className="card-left">
                    <div className="data-title">20%</div>
                    <div className="data-detail">Lead conversion score</div>
                  </div>
                  <div className="card-right">
                    <img src={CardImg} alt="" />
                  </div>
                </div>
              </Item>
            </div>
            <div className="">
              <Item elevation={2}>
                  <SalesBarChart />
              </Item>
            </div>
            <div className="">
              <Item elevation={2}>
                  <StaffUtilization  graphData={staffData} />
              </Item>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="heading">
          <div className="head-title">Lead opportunity</div>
          <div className="head-detail">
            Lorem Ipsum eaecenas maximus urna congue urna congue.
          </div>
        </div>
        <div className="lead-detail">
          <div className="predictor-wrapper">
          <PredictorWidget />
          </div>
          <div className="large">
              <Item elevation={2}>
                <div className="single-card">
                  <div className="card-left">
                    <div className="data-title">~$80,000</div>
                    <div className="data-detail">Potential revenue</div>
                  </div>
                  <div className="card-right">
                    <img src={CardImg} alt=""/>
                  </div>
                </div>
              </Item>
            </div>
        </div>
      </div>
    </div>
  );
};
export default Summary;
