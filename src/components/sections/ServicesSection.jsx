import React from "react";
import ServiceCard from "../common/ServiceCard";
import "../../styles/sections/ServicesSection.css";

const ServicesSection = () => {
  const services = [
    {
      icon: "🎨",
      title: "PROMPT ENGINEERING",
    },
    {
      icon: "🧠",
      title: "GENERATIVE AI SOLUTION",
    },
    {
      icon: "📚",
      title: "LLM TRAINING",
    },
    {
      icon: "⚙️",
      title: "LLM FINE TUNING",
    },
    {
      icon: "💡",
      title: "GENERATIVE AI STRATEGY",
    },
  ];

  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">
            Transform Complexity Into Opportunity With Our Custom AI Tools
          </h2>
          <p className="services-subtitle">
            Unlock The Potential Within Your Business By Turning Complex
            Challenges Into Actionable Solutions With Our Expertly Crafted AI
            Tools, Designed To Drive Growth And Innovation
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
            />
          ))}
        </div>

        <div className="services-footer">
          <h2 className="services-footer-title">
            Breathing New Life Into Ideas and Systems With Technology That{" "}
            <br />
            Works Faster, Smarter, and Better
          </h2>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
