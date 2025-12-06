import React, { useState } from "react";
import "../../styles/services/ConsultingCard.css";

/**
 * ConsultingCard Component - Card 3
 *
 * Features:
 * - Diagonal chart line visualization
 * - Two floating bubbles with labels
 * - Bubbles move right on hover, return on leave
 * - Controlled animation with hover state
 */
const ConsultingCard = ({
  title = "AI Consulting",
  description = "Our AI consultants provide strategic guidance to implement tailored solutions that drive growth, efficiency, and innovation. Let's turn challenges into opportunities.",
  bubble1Label = "Efficiency +103%",
  bubble2Label = "Cost -67%",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="consulting-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Chart visualization */}
      <div className="chart-visual">
        {/* Diagonal line */}
        <svg className="chart-line" viewBox="0 0 300 200">
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#ffffff", stopOpacity: 0.3 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#00d4ff", stopOpacity: 0.8 }}
              />
            </linearGradient>
          </defs>
          <line
            x1="20"
            y1="180"
            x2="280"
            y2="20"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="5,5"
          />
        </svg>

        {/* Bubble 1 - Efficiency */}
        <div className={`bubble bubble-1 ${isHovered ? "hover" : ""}`}>
          <div className="bubble-dot"></div>
          <div className="bubble-label">{bubble1Label}</div>
        </div>

        {/* Bubble 2 - Cost */}
        <div className={`bubble bubble-2 ${isHovered ? "hover" : ""}`}>
          <div className="bubble-dot"></div>
          <div className="bubble-label">{bubble2Label}</div>
        </div>
      </div>

      {/* Content section */}
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default ConsultingCard;
