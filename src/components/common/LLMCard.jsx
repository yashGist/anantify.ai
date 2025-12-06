import React from "react";
import "../../styles/services/LLMCard.css";

/**
 * LLMCard Component - Card 2
 *
 * Features:
 * - Static content (no continuous movement)
 * - Hover effect increases brightness/glow
 * - UI graphics visualization
 * - Simple depth effect on hover
 */
const LLMCard = ({
  title = "LLM Development",
  question = "Where do Quokka's live?",
  answer = "Quokka's live on Rottnest Island",
  prompt = "Write Your prompt...",
  description = "We develop custom Large Language Models that transform how you analyze data, engage with customers, and make decisions. Smarter insights, faster outcomes.",
}) => {
  return (
    <div className="llm-card">
      {/* Visual section with UI mock */}
      <div className="llm-visual">
        <div className="chat-box">
          <div className="chat-header">
            <p className="chat-question">{question}</p>
            <p className="chat-answer">{answer}</p>
          </div>
          <div className="chat-input">
            <input type="text" placeholder={prompt} readOnly />
            <button className="input-btn">↑</button>
          </div>
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

export default LLMCard;
