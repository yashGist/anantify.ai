import React from "react";
import "../../styles/sections/HireUsSection.css";

const HireUsSection = () => {
  const options = [
    {
      id: "team",
      title: "Hire a Team",
      description:
        "Build a dedicated team for large-scale projects and ongoing support with comprehensive skills",
      features: ["Complete Project Solutions", "Seamless Collaboration"],
      image: "👥",
    },
    {
      id: "individual",
      title: "Hire an Individual",
      description:
        "Get specialized expertise for focused tasks or short-term projects to meet your business needs",
      features: ["Tailored Expertise", "Quick, Focused Results"],
      image: "💼",
    },
  ];

  return (
    <section className="hire-us-section">
      <div className="hire-us-container">
        {/* Header */}
        <div className="hire-us-header">
          <button className="hire-us-badge">Hire Us</button>
          <h2 className="hire-us-title">
            Words from the top leading IT Executives around the globe
          </h2>
          <p className="hire-us-subtitle">
            We follow a clear, phase-by-phase approach to ensure your AI
            solution is designed to meet your goals. Each step is tailored to
            build a reliable, impactful product.
          </p>
        </div>

        {/* Options Grid */}
        <div className="hire-us-grid">
          {options.map((option) => (
            <div key={option.id} className="hire-us-card">
              <div className="hire-us-card-content">
                <div className="hire-us-card-header">
                  <h3 className="hire-us-card-title">{option.title}</h3>
                  <div className="hire-us-arrow">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M7 7h10v10M7 17L17 7" />
                    </svg>
                  </div>
                </div>

                <p className="hire-us-card-description">{option.description}</p>

                <div className="hire-us-features">
                  {option.features.map((feature, index) => (
                    <div key={index} className="hire-us-feature">
                      <span className="hire-us-feature-arrow">→</span>
                      <span className="hire-us-feature-text">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hire-us-card-image">
                <span className="hire-us-image-emoji">{option.image}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireUsSection;
