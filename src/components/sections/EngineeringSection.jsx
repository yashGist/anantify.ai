import React from "react";
import "../../styles/sections/EngineeringSection.css";

/**
 * EngineeringSection Component
 *
 * Displays a grid of 8 service cards + 1 "All Services" card
 * USING UNIQUE CLASS NAMES - eng-service-card (NO CONFLICTS with ServicesSection)
 */
const EngineeringSection = () => {
  const services = [
    {
      icon: "📱",
      title: "Mobile App Development",
      description:
        "Creating feature-rich, intuitive mobile apps that enhance user experience and meet business objectives.",
    },
    {
      icon: "💻",
      title: "Software Development",
      description:
        "Delivering robust and scalable software solutions that optimize operations, improve efficiency, and drive growth.",
    },
    {
      icon: "🔄",
      title: "MVP Development",
      description:
        "Turning ideas into functional prototypes, helping businesses test concepts, attract investors, and refine their vision.",
    },
    {
      icon: "⚡",
      title: "Superfast POC",
      description:
        "Rapidly developing proof-of-concept solutions to validate feasibility and demonstrate real-world application.",
    },
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Building modern, responsive, and high-performing websites that enhance engagement and business reach.",
    },
    {
      icon: "💡",
      title: "Ideation and Design Strategy",
      description:
        "Crafting intuitive, user-centric digital products that align with business goals and create a lasting impact.",
    },
    {
      icon: "🤝",
      title: "IT Consulting",
      description:
        "Providing expert guidance to align technology decisions with business objectives and ensure scalability.",
    },
  ];

  return (
    <section className="engineering-section">
      <div className="engineering-container">
        {/* Header */}
        <div className="engineering-header">
          <h2 className="engineering-title">
            Exploring New Horizons with Cutting-Edge Engineering
          </h2>
          <p className="engineering-subtitle">
            Starting from scratch or already working on a revamp, we're ready to
            help. Focused and friendly folks, collaborating closely with you on
            taking your product to the next level.
          </p>
        </div>

        {/* Services Grid */}
        <div className="engineering-services-grid">
          {services.map((service, index) => (
            <div key={index} className="eng-service-card">
              <div className="eng-card-icon">{service.icon}</div>
              <h3 className="eng-card-title">{service.title}</h3>
              <p className="eng-card-description">{service.description}</p>
            </div>
          ))}

          {/* All Services Card */}
          <div className="eng-service-card eng-all-services-card">
            <div className="eng-card-icon">↗️</div>
            <h3 className="eng-card-title">All Services</h3>
            <a href="#all-services" className="eng-all-services-link">
              View All →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringSection;
