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
import { isEmpty } from "lodash";
import Loader from "./../Loader";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: "20px",
  textAlign: "left",
  position: "relative",
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

const Summary = ({ setUserData }) => {
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/v1/smartPredictor/-435/EngagementData`)
      .then((response) => response.json())
      .then((response) => {
        console.log("res-->>>", response);
        setApiData(response);
      })

      .catch((err) => {
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
              <span className="total-loss-span">-$</span>
            )}
            {apiData[data]}
            {data === "leadConversionScore" && (
              <span className="lead-score-span">%</span>
            )}
          </div>
          <div className="data-detail">{titleNameMap[data]}</div>
          {data === "totalLossRevenue" && (
            <div className="data-detail-desc"></div>
          )}
        </div>
        <div className="card-right">
          <img src={imgSrcMap[data]} alt="" />
        </div>
      </div>
    );
  };

  if (isEmpty(apiData)) {
    return <Loader />;
  }

  return (
    <div className="summary-main commonContentWrapper">
      <div className="left">
        <div className="engagement-wrapper">
          <div className="heading">
            <div className="head-title">Engagement</div>
            <div className="head-detail"></div>
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
                <div className="custom-legand-wrapper-satff">
                  <div className="legad-desc">
                    Sales and Marketing{" "}
                    <span className="highlight-desc">{`(${apiData["staffAndMarketingPercentage"]}%)`}</span>
                  </div>
                </div>
              </Item>
            </div>
            <div className="">
              <Item elevation={2}>
                <StaffUtilization graphData={staffData} />
                <div className="custom-legand-wrapper">
                  <div className="legand-head">{`${apiData["staffUtilization"]}%`}</div>
                  <div className="legad-desc" style={{ "font-weight": "700" }}>
                    Staff Utilization{" "}
                  </div>
                </div>
              </Item>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="heading">
          <div className="head-title">Lead opportunity</div>
          <div className="head-detail"></div>
        </div>
        <div className="lead-detail">
          <div className="predictor-wrapper">
            <PredictorWidget setUserData={setUserData} />
          </div>
          <div className="large">
            <Item elevation={2}>
              <div className="single-card">
                <div className="card-left">
                  <div className="data-title">{`~$${apiData["potentialRevenue"]}`}</div>
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
