import React, { useState, useEffect } from "react";
import AccordionItem from "../common/AccordionItem";
import StatCard from "../common/StatCard";
import "../../styles/sections/BusinessTransformSection.css";

const BusinessTransformSection = () => {
  const [rotation, setRotation] = useState(0);

  // Scroll listener for wheel rotation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newRotation = (scrollY / 5) % 360;
      setRotation(newRotation);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Accordion data
  const services = [
    {
      title: "Research And Strategy",
      description:
        "Transform the way you approach innovation with deep market research and AI-powered insights. Our strategies are built to identify opportunities, optimize processes, and give your business a competitive edge",
    },
    {
      title: "Design And Development",
      description:
        "Create stunning, user-centric digital experiences with our expert design and development team. We combine creativity with cutting-edge technology to build solutions that engage and convert.",
    },
    {
      title: "Maintenance And Support",
      description:
        "Keep your AI tools running smoothly with our comprehensive maintenance and support services. We provide 24/7 monitoring, updates, and optimization to ensure peak performance.",
    },
  ];

  // Stats data
  const stats = [
    {
      number: "200+",
      label: "Projects Completed",
      description:
        "Delivering innovative, AI-driven solutions tailored to diverse industries",
    },
    {
      number: "100+",
      label: "Satisfied Clients",
      description:
        "Partnering with businesses globally to achieve measurable growth and success",
    },
    {
      number: "15+",
      label: "Years of Expertise",
      description:
        "A decade of experience in transforming businesses with cutting-edge technology",
    },
  ];

  return (
    <section className="business-transform">
      <div className="business-container">
        {/* Main Content Grid */}
        <div className="business-grid">
          {/* Left Side: Rocket Animation */}
          <div className="left-side">
            <div className="rocket-container">
              {/* Top Box with Rocket */}
              <div className="rocket-box">
                <div className="rocket-icon">🚀</div>
              </div>

              {/* Bottom Box with Checkmark */}
              <div className="team-box">
                <div className="checkmark-icon">✓</div>
                <p className="team-text">Our team is ready to work with you</p>
              </div>
            </div>
          </div>

          {/* Middle Side: Accordion */}
          <div className="middle-side">
            <h2 className="transform-title">
              Transform Your Business with AI-Driven Solutions
            </h2>

            <div className="accordion-list">
              {services.map((service, index) => (
                <AccordionItem
                  key={index}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>

          {/* Right Side: Rotating Wheel */}
          <div className="right-side">
            <div
              className="rotating-wheel"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              <svg viewBox="0 0 200 200" className="wheel-svg">
                <g fill="#8b7dff">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                    <rect
                      key={angle}
                      x="85"
                      y="10"
                      width="30"
                      height="50"
                      fill="#8b7dff"
                      transform={`rotate(${angle} 100 100)`}
                    />
                  ))}
                  <circle cx="100" cy="100" r="30" fill="#ffffff" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTransformSection;
