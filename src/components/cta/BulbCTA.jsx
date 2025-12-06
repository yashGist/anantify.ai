import React from "react";
import "../../styles/cta/BulbCTA.css";

/**
 * BulbCTA Component
 *
 * A reusable Call-To-Action section with animated bulb icon
 * Perfect for placement between service sections and other content
 *
 * @param {string} title - Main headline text (required)
 * @param {string} subtitle - Supporting text (optional)
 * @param {string} buttonText - Button label text (required)
 * @param {string} buttonLink - URL for button (optional, defaults to "#")
 * @param {string} bulbImage - Custom bulb emoji/image (optional, defaults to 💡)
 */
const BulbCTA = ({
  title = "If You Have Any Idea We'll Help You",
  subtitle = "Let's Connect..!",
  buttonText = "Hire AI Expert",
  buttonLink = "#contact",
  bulbImage = "💡",
}) => {
  return (
    <section className="bulb-cta">
      <div className="bulb-cta-container">
        {/* Left Side: Animated Bulb Icon */}
        <div className="bulb-side">
          <div className="bulb-wrapper">
            <div className="bulb-icon">{bulbImage}</div>
            {/* Glow effect circles */}
            <div className="bulb-glow glow-1"></div>
            <div className="bulb-glow glow-2"></div>
          </div>
        </div>

        {/* Right Side: Text and Button */}
        <div className="content-side">
          <div className="cta-content">
            <h2 className="cta-title">{title}</h2>
            {subtitle && <p className="cta-subtitle">{subtitle}</p>}

            <a
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulbCTA;
