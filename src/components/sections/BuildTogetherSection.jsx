import React from "react";
import "../../styles/sections/BuildTogetherSection.css";

/**
 * BuildTogetherSection Component
 *
 * Two-column layout with:
 * - Left: Heading, paragraph, and animated shapes grid
 * - Right: Services list with icons and descriptions
 */
const BuildTogetherSection = () => {
  const services = [
    {
      icon: "🤖",
      title: "Artificial Intelligence",
      description:
        "Leveraging AI to automate tasks, optimize decision-making, and enhance business efficiency.",
    },
    {
      icon: "🔌",
      title: "Internet of Things (IoT)",
      description:
        "Connecting devices, systems, and data to create smart, efficient, and automated solutions for businesses.",
    },
    {
      icon: "✏️",
      title: "Product Design",
      description:
        "Designing intuitive, functional, and visually compelling products that solve real-world problems.",
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      description:
        "Implementing cloud-first solutions and streamlined DevOps practices to ensure reliability and scalability.",
    },
    {
      icon: "💡",
      title: "Product Discovery",
      description:
        "Refining business ideas, identifying opportunities, and creating strategic roadmaps for successful product development.",
    },
  ];

  return (
    <section className="build-together">
      <div className="build-together-container">
        {/* Left Column */}
        <div className="build-together-left">
          <h2 className="build-together-title">Let's Build Together</h2>

          <p className="build-together-paragraph">
            We don't just create solutions; we craft experiences that propel
            your business forward. By blending creativity, technology, and a
            deep understanding of your needs, we deliver impactful results.
          </p>

          {/* Animated Shapes Grid */}
          <div className="bts-shapes-grid">
            {/* Top-left: Morphing rounded square */}
            <div className="bts-shape bts-shape-square-morph"></div>

            {/* Top-right: Floating circle */}
            <div className="bts-shape bts-shape-circle-bounce"></div>

            {/* Bottom-left: Rotating triangle */}
            <div className="bts-shape bts-shape-triangle-rotate"></div>

            {/* Bottom-right: Static square */}
            <div className="bts-shape bts-shape-square-static"></div>
          </div>
        </div>

        {/* Right Column */}
        <div className="build-together-right">
          <ul className="bts-services-list">
            {services.map((service, index) => (
              <li key={index} className="bts-service-item">
                <div className="bts-service-icon">{service.icon}</div>
                <div className="bts-service-content">
                  <h3 className="bts-service-title">{service.title}</h3>
                  <p className="bts-service-description">
                    {service.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BuildTogetherSection;
