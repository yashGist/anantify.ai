import React, { useState } from "react";
import "../../styles/sections/TestimonialsInteractiveSection.css";

const TestimonialsInteractiveSection = () => {
  const [activeId, setActiveId] = useState("dgki");

  const testimonials = [
    {
      id: "dgki",
      company: "DGKI",
      person: "Tobias Hintelmann",
      role: "CTO, Captain",
      text: "Migrating to the cloud seemed daunting, but WeStack made it seamless. Their DevOps expertise ensured a smooth transition, and now our systems are faster and more reliable than ever. I only wish we'd done this sooner",
    },
    {
      id: "scrapper",
      company: "Scrapper",
      person: "Rohan S",
      role: "Operations Manager, Scrapper",
      text: "WeStack felt less like a service provider and more like an extension of our team. They took the time to understand our challenges and delivered solutions that were not just effective but also easy to integrate.",
    },
    {
      id: "kidcash",
      company: "KidCash",
      person: "Sophia M",
      role: "Startup Founder, KidCash",
      text: "What stood out about WeStack was their ability to simplify complexity. They took a problem that we had been struggling with and turned it into a solution within weeks. Their approach was innovative and practical.",
    },
    {
      id: "shotshort",
      company: "ShotShort",
      person: "Meera T",
      role: "Startup Founder, ShotShort",
      text: "WeStack's product discovery process was exactly what we needed. They guided us through every step, from refining our idea to creating a clear plan for development. It felt like a collaborative effort.",
    },
    {
      id: "playshop",
      company: "PlayShop",
      person: "James K",
      role: "CEO, PlayShop",
      text: "Exceptional service from start to finish. WeStack understood our vision and brought it to life with precision and creativity. Their team is responsive, professional, and truly invested in our success.",
    },
  ];

  const current =
    testimonials.find((t) => t.id === activeId) || testimonials[0];

  return (
    <section className="tis-section">
      <div className="tis-container">
        <h2 className="tis-title">Real Experiences. Real Results</h2>

        <div className="tis-content">
          {/* Left: Testimonial Text */}
          <div className="tis-left">
            <p className="tis-text">{current.text}</p>

            <div className="tis-author">
              <div className="tis-avatar">{current.person.charAt(0)}</div>
              <div className="tis-author-info">
                <h4 className="tis-author-name">{current.person}</h4>
                <p className="tis-author-role">{current.role}</p>
              </div>
            </div>
          </div>

          {/* Right: Logo Cards Grid */}
          <div className="tis-right">
            <div className="tis-logos-grid">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  className={`tis-logo-card ${
                    activeId === testimonial.id ? "tis-logo-active" : ""
                  }`}
                  onClick={() => setActiveId(testimonial.id)}
                  onMouseEnter={() => setActiveId(testimonial.id)}
                  style={{ "--card-index": index }}
                >
                  <div className="tis-logo-inner">
                    <span className="tis-logo-text">{testimonial.company}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsInteractiveSection;
