import React from "react";
import targetSvg from "./target.svg";
import arrow from "./arrow.svg";
import CustomizedDialogs from "./CustomizedDialogs";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { widgetData } from "./data/widget-data";
import { leadOpportunityUserData } from "./details-lead-data";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: "20px",
  textAlign: "left",
  // height: 60,
  // lineHeight: '60px',
}));

const PredictorWidget = ({ setUserData }) => {
  const [openDialog, setDialogVisiblity] = React.useState(false);
  const [selectedDay, setSelectedDay] = React.useState("0");
  const [dialogdata, setdialogData] = React.useState([]);
  let navigate = useNavigate();

  const naviateToDetail = (userType) => {
    // fetch(`https://pokeapi.co/api/v2/pokemon/1/${selectedDay}/{userType}`)

    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
      .then((response) => response.json())
      .then((response) => {
        console.log("res-->>>", response);
        setUserData(leadOpportunityUserData);
        // setUserData(response);

        setDialogVisiblity(false);
        navigate("detail");
      })

      .catch((err) => {
        console.log("Fetch Error :-S", err);
      });
  };
  const renderDialogContent = () => {
    return (
      <div className="summary-dialog-wrapper">
        <div className="dialog-head">
          <div className="head-title">Lead opportunity</div>
          <div className="head-desc">
            AI based lead prediction based on user historical data.
          </div>
        </div>
        <div className="dialog-content">
          {dialogdata.map((item) => {
            return (
              <div className="single-dialog-card" onClick={()=>naviateToDetail(item.type)}>
                <Item elevation={2}>
                  <div className="card-inner">
                    <div className="card-top">
                      <div className="card-title">
                        <div>{item.count}</div>
                        <div>{item.type}</div>
                      </div>
                      <div className="title-desc">
                        Potential revenue: ~${item.potentialRevenue}
                      </div>
                    </div>
                    <div
                      className={classNames("card-bottom", {
                        yellow: item.type === "Existing User",
                        green: item.type === "New User",
                        red: item.type === "Inactive User",
                      })}
                    >
                      <div className="highlight-small">
                        Lead conversion score
                      </div>
                      <div className="highlight-large">
                        {item.leadConversionScore}%
                      </div>
                    </div>
                  </div>
                </Item>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  const handleOnClickOnDays = (selectedDay) => {
    setSelectedDay(selectedDay);
  };
  const handleClick = () => {
    // fetch(`https://pokeapi.co/api/v2/pokemon/1/${selectedDay}`)
    fetch(`https://pokeapi.co/api/v2/pokemon/1`)
      .then((response) => response.json())
      .then((response) => {
        console.log("res-->>>", response);
        setdialogData(widgetData);
        setDialogVisiblity(true);
      })

      .catch((err) => {
        console.log("Fetch Error :-S", err);
      });
  };
  return (
    <div className="widget-wrapper">
      <div className="widget-head">Smart predictor</div>
      <div className="widget-content">
        <div className="card-img">
          <img src={targetSvg} alt="" />
        </div>
        <div className="card-title">choose your opportunity</div>
        <div className="card-dsc">
          Lorem Ipsum eaecenas maximus urna congue urna congue.
        </div>
        <div className="button-row">
          <button
            className={classNames("widget-btn", {
              selectedBtn: selectedDay === "0",
            })}
            onClick={() => handleOnClickOnDays("0")}
          >
            Today
          </button>
          <button
            className={classNames("widget-btn", {
              selectedBtn: selectedDay === "7",
            })}
            onClick={() => handleOnClickOnDays("7")}
          >
            Next 7 Days
          </button>
          <button
            className={classNames("widget-btn", {
              selectedBtn: selectedDay === "30",
            })}
            onClick={() => handleOnClickOnDays("30")}
          >
            Next 30 Days
          </button>
        </div>
        <div className="main-btn-row">
          <button className="predictor-btn" onClick={handleClick}>
            Run Predictor <img src={arrow} alt="" />{" "}
          </button>
        </div>
      </div>
      <CustomizedDialogs
        open={openDialog}
        setDialogVisiblity={setDialogVisiblity}
      >
        {renderDialogContent()}
      </CustomizedDialogs>
    </div>
  );
};
export default PredictorWidget;
