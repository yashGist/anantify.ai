import React from "react";
import "../../styles/sections/AIProducts.css"; // <--- Make sure your CSS file is saved with this name

export default function AIProducts() {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>
          Breathing New Life Into Ideas and Systems With Technology That Works
          Faster, Smarter, and Better
        </h1>
      </div>

      {/* Content Grid */}
      <div className="content">
        {/* Chatbot Card */}
        <div className="card">
          <div className="chat-container">
            <div className="messages">
              <div className="message">
                <div className="message-avatar user-avatar">You</div>
                <div className="message-content">
                  <div className="message-header">
                    <span className="message-sender">You</span>
                    <span className="message-time">8:15 AM</span>
                  </div>
                  <div className="message-text">
                    You Schedule a Google meeting with John for 3:45PM tomorrow!
                  </div>
                </div>
              </div>

              <div className="message">
                <div className="message-avatar ai-avatar">AI</div>
                <div className="message-content">
                  <div className="message-header">
                    <span className="message-sender">AI Assistant</span>
                    <span className="message-time">8:15 AM</span>
                  </div>
                  <div className="message-text">
                    I've successfully scheduled a Google meeting with John for
                    3:45PM tomorrow.
                  </div>
                </div>
              </div>
            </div>

            <div className="message-input-area">
              <span className="plus-icon">+</span>
              <input
                type="text"
                className="message-input"
                placeholder="Message AI Assistant..."
              />
              <div className="input-buttons">
                <button className="btn-icon">↑</button>
              </div>
            </div>
          </div>
        </div>

        {/* Image Generator Card */}
        <div className="card">
          <div className="image-gen-container">
            <div className="image-preview">Generating image...</div>
            <div className="image-input-area">
              <input
                type="text"
                className="image-input"
                placeholder="Generate an image of..."
              />
              <button className="btn-primary">Generate</button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature">
          <h3>Chatbot Development</h3>
          <p>
            Our intelligent chatbots, powered by advanced NLP deliver
            personalized 24/7 support, streamline processes, and enhance
            customer satisfaction. Create smarter interactions that make a
            lasting impact.
          </p>
        </div>

        <div className="feature">
          <h3>AI Content Writing</h3>
          <p>
            Our AI-driven content solutions craft high-quality, brand-aligned
            content to engage your audience and tell your story effectively.
          </p>
        </div>
      </div>
    </div>
  );
}
