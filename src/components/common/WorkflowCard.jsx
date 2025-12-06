import React from "react";
import "../../styles/services/WorkflowCard.css";

/**
 * WorkflowCard Component - Card 1
 *
 * Features:
 * - Continuous left-right line animation (runs forever)
 * - Icons in a grid layout
 * - Hover effect brightens content
 * - Background animation never stops
 */
const WorkflowCard = ({
  title = "Workflow Automation",
  description = "Streamline operations and eliminate repetitive tasks with our workflow automation solutions, boosting efficiency and freeing up your team to focus on growth.",
  icons = ["❄️", "⛵", "👤", "⚙️", "❄️", "🔧", "⚙️", "❄️", "⛵", "🔧"],
}) => {
  return (
    <div className="workflow-card">
      {/* Animated background with moving lines */}
      <div className="workflow-bg">
        <div className="animated-lines">
          <div className="line-group line-left">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="line-group line-right">
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>

      {/* Icons grid overlay */}
      <div className="icons-container">
        <div className="icons-grid">
          {icons.map((icon, idx) => (
            <div key={idx} className="icon-box">
              {icon}
            </div>
          ))}
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

export default WorkflowCard;
