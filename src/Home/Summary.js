import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import PredictorWidget from "./PredictorWidget";
import SalesBarChart from "./SalesBarChart";
import StaffUtilization from "./StaffUtilization";

import CardImg from "./img/CardSvg.svg";
import existingUser from "./img/existingUser.svg";
import inactiveUser from "./img/inactiveUser.svg";
import newUserIcon from "./img/newUserIcon.svg";
import potentialRevanue from "./img/potentialRevanue.svg";
import revanue from "./img/revanue.svg";
import classNames from "classnames";
import { engagementData } from "./summary-data";
import { isEmpty } from "lodash";
import Loader from './../Loader';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: "20px",
  textAlign: "left",
}));
const staffData = [
  { name: "Group A", value: 70, color: "#0088FE" },
  { name: "", value: 10, color: "#E5E5E5" },
];
const titleNameMap = {
  leadConversionScore: "Lead conversion score",
  newUser: "New user",
  inactiveUser: "Inactive user",
  existingUser: "Existing user",
  totalLossRevenue: "Total loss of revenue",
  potentialRevenue: "Potential revenue",
};
const imgSrcMap = {
  leadConversionScore: CardImg,
  newUser: newUserIcon,
  inactiveUser: inactiveUser,
  existingUser: existingUser,
  totalLossRevenue: revanue,
  potentialRevenue: potentialRevanue,
};

const renderDataKeyArray = [
  "leadConversionScore",
  "newUser",
  "inactiveUser",
  "existingUser",
  "totalLossRevenue",
];

const Summary = () => {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      //   .then(response => response.data)
      .then((response) => {
        console.log("res-->>>", response);
        setApiData(engagementData);
      })

      .catch(err=> {
        console.log("Fetch Error :-S", err);
      });
  }, []);
  staffData[0].value = apiData["staffUtilization"];
  staffData[1].value = 100 - apiData["staffUtilization"];

  const renderDataCard = (data) => {
    return (
      <div className="single-card">
        <div className="card-left">
          <div
            className={classNames("data-title", {
              "total-loss": data === "totalLossRevenue",
            })}
          >
            {data === "totalLossRevenue" && (
              <span className="total-loss-span">$</span>
            )}
            {apiData[data]}
            {data === "leadConversionScore" && (
              <span className="lead-score-span">%</span>
            )}
          </div>
          <div className="data-detail">{titleNameMap[data]}</div>
          {data === "totalLossRevenue" && (
            <div className="data-detail-desc">
              How did we calculate the revenue lose?
            </div>
          )}
        </div>
        <div className="card-right">
          <img src={imgSrcMap[data]} alt="" />
        </div>
      </div>
    );
  };


  if(isEmpty(apiData)){
      return (
        <Loader />
      )
  }

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
            {renderDataKeyArray.map((item) => (
              <div
                className={classNames({ large: item === "totalLossRevenue" })}
              >
                <Item key={JSON.stringify(item)} elevation={2}>
                  {renderDataCard(item)}
                </Item>
              </div>
            ))}

            <div className="">
              <Item elevation={2}>
                <SalesBarChart graphData={apiData["staffAndMarketingData"]} />
              </Item>
            </div>
            <div className="">
              <Item elevation={2}>
                <StaffUtilization graphData={staffData} />
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
                  <div className="data-title">{`~${apiData["potentialRevenue"]}`}</div>
                  <div className="data-detail">Potential revenue</div>
                </div>
                <div className="card-right">
                  <img src={imgSrcMap["potentialRevenue"]} alt="" />
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
