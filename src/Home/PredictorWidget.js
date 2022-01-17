import React from "react";
import targetSvg from "./target.svg";
import arrow from "./arrow.svg";
import CustomizedDialogs from "./CustomizedDialogs";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  padding: "20px",
  textAlign: "left",
  // height: 60,
  // lineHeight: '60px',
}));

const PredictorWidget = () => {
  const [openDialog, setDialogVisiblity] = React.useState(false);
  let navigate = useNavigate();

  const naviateToDetail = () => {
    navigate("detail");
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
          <div className="single-dialog-card" onClick={naviateToDetail}>
            <Item elevation={2}>
              <div className="card-inner">
                <div className="card-top">
                  <div className="card-title">
                    <div>20</div>
                    <div>New User</div>
                  </div>
                  <div className="title-desc">Potential revenue: ~$1000</div>
                </div>
                <div className="card-bottom green">
                  <div className="highlight-small">Lead conversion score</div>
                  <div className="highlight-large">70%</div>
                </div>
              </div>
            </Item>
          </div>
          <div className="single-dialog-card" onClick={naviateToDetail}>
            <Item elevation={2}>
              <div className="card-inner">
                <div className="card-top">
                  <div className="card-title">
                    <div>20</div>
                    <div>New User</div>
                  </div>
                  <div className="title-desc">Potential revenue: ~$1000</div>
                </div>
                <div className="card-bottom yellow">
                  <div className="highlight-small">Lead conversion score</div>
                  <div className="highlight-large">70%</div>
                </div>
              </div>
            </Item>
          </div>
          <div className="single-dialog-card" onClick={naviateToDetail}>
            <Item elevation={2}>
              <div className="card-inner">
                <div className="card-top">
                  <div className="card-title">
                    <div>20</div>
                    <div>New User</div>
                  </div>
                  <div className="title-desc">Potential revenue: ~$1000</div>
                </div>
                <div className="card-bottom red">
                  <div className="highlight-small">Lead conversion score</div>
                  <div className="highlight-large">70%</div>
                </div>
              </div>
            </Item>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="widget-wrapper">
      <div className="widget-head">Smart predictor</div>
      <div className="widget-content">
        <div className="card-img">
          <img src={targetSvg} />
        </div>
        <div className="card-title">choose your opportunity</div>
        <div className="card-dsc">
          Lorem Ipsum eaecenas maximus urna congue urna congue.
        </div>
        <div className="button-row">
          <button className="widget-btn">Today</button>
          <button className="widget-btn">Next 7 Days</button>
          <button className="widget-btn">Next 30 Days</button>
        </div>
        <div className="main-btn-row">
          <button
            className="predictor-btn"
            onClick={() => setDialogVisiblity(true)}
          >
            Run Predictor <img src={arrow} />{" "}
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
