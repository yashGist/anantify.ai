import React from "react";
import "../../styles/common/StatCard.css";

const StatCard = ({
  number = "0",
  label = "Label",
  description = "Description",
}) => {
  return (
    <div className="stat-card">
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
      <div className="stat-description">{description}</div>
    </div>
  );
};

export default StatCard;
