import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Aleksa droped Portfolio", "Top news - 829 readers")}
      {newsArticle("Corona virus update", "Top news - 729 readers")}
      {newsArticle("Chelsea won Arsenal", "Top news - 650 readers")}
      {newsArticle("Prodigy is back from the dead", "Top news - 559 readers")}
    </div>
  );
}

export default Widgets;
