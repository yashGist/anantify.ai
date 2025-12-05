import React from "react";
import ServiceCard from "../common/ServiceCard";
import "../../styles/sections/ServicesSection.css";

const ServicesSection = () => {
  const services = [
    // PROMPT ENGINEERING (Already Good)
    {
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="10" y="15" width="30" height="25" rx="3" />
          <path d="M15 20h20M15 25h15M15 30h18" />
        </svg>
      ),
      title: "PROMPT ENGINEERING",
    },

    // GENERATIVE AI SOLUTION
    {
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M30 12c-6 0-11 5-11 11v2c-3 1-5 4-5 7 0 4 3 7 7 7h1c1 5 5 9 10 9s9-4 10-9h1c4 0 7-3 7-7 0-3-2-6-5-7v-2c0-6-5-11-11-11z" />
          <path d="M22 25c2 1 4 3 4 6s-2 5-4 6" />
          <path d="M38 25c-2 1-4 3-4 6s2 5 4 6" />
        </svg>
      ),
      title: "GENERATIVE AI SOLUTION",
    },

    // LLM TRAINING
    {
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="12" y="15" width="15" height="30" rx="2" />
          <rect x="27" y="18" width="15" height="30" rx="2" />
          <rect x="34" y="21" width="15" height="30" rx="2" />
          <path d="M12 25h15M27 28h15M34 31h15" />
        </svg>
      ),
      title: "LLM TRAINING",
    },

    // LLM FINE TUNING
    {
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="30" cy="30" r="6" />
          <path d="M30 15v4M30 41v4M45 30h-4M19 30h-4" />
          <path d="M39 21l-3 3M24 36l-3 3M21 21l3 3M36 36l3 3" />
        </svg>
      ),
      title: "LLM FINE TUNING",
    },

    // GENERATIVE AI STRATEGY
    {
      icon: (
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M30 12c-7 0-13 6-13 13 0 5 3 9 6 11v4c0 2 2 4 4 4h6c2 0 4-2 4-4v-4c3-2 6-6 6-11 0-7-6-13-13-13z" />
          <path d="M25 44h10M26 48h8" />
        </svg>
      ),
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
      </div>
    </section>
  );
};

export default ServicesSection;
