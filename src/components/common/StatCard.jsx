import React from "react";
import "../../styles/common/StatCard.css";

const StatCard = ({
  number = "0",
  label = "Label",
  description = "Description",
  background = "#ffffff", // default white background
}) => {
  // Determine if background is light or dark
  const isLightBackground = () => {
    const hex = background.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 150; // threshold for light backgrounds
  };

  const textColor = isLightBackground() ? "#000000" : "#ffffff";
  const descColor = isLightBackground() ? "#555555" : "#cccccc";

  return (
    <div className="stat-card" style={{ background }}>
      {/* Number */}
      <div className="stat-number" style={{ color: textColor }}>
        {number}
        <span className="plus-sign">+</span>
      </div>

      {/* Label */}
      <div className="stat-label" style={{ color: textColor }}>
        {label}
      </div>

      {/* Description */}
      <div className="stat-description" style={{ color: descColor }}>
        {description}
      </div>
    </div>
  );
};

export default StatCard;
