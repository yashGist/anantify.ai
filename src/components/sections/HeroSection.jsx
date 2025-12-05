import React from 'react';
import '../../styles/sections/HeroSection.css';

const HeroSection = ({ 
  badge = "Your Imagination, Our AI tool",
  mainTitle = "We Build AI Tools",
  highlightText = "Superfast",
  titleEnd = "Speed",
  description = "We specialize in crafting custom AI tools designed to address your unique business challenges, driving innovation and growth. Let us empower your business with intelligent solutions that make a real impact.",
  ctaText = "Get In Touch",
  onCtaClick = () => {}
}) => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <div className="dot dot-3"></div>
        <div className="dot dot-4"></div>
        <div className="dot dot-5"></div>
        <div className="dot dot-6"></div>
        <div className="dot dot-7"></div>
      </div>

      <div className="hero-container">
        <div className="hero-badge">
          <span className="badge-icon">⚡</span>
          <p>{badge}</p>
        </div>

        <div className="hero-title-section">
          <h1 className="hero-title">
            {mainTitle}
            <br />
            At <span className="highlight">{highlightText}</span> {titleEnd}
          </h1>
        </div>

        <p className="hero-description">
          {description}
        </p>

        <button className="hero-cta-btn" onClick={onCtaClick}>
          {ctaText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
