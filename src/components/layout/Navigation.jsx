import React, { useState } from "react";
import "../../styles/layout/Navigation.css";

const Navigation = ({
  logo = "Anantify.AI",
  navItems = [],
  ctaButton = {},
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultNavItems =
    navItems.length > 0
      ? navItems
      : [
          { label: "AI", href: "#ai" },
          { label: "SERVICES", href: "#services" },
          { label: "ABOUT", href: "#about" },
          { label: "BLOG", href: "#blog" },
        ];

  const defaultCTA = ctaButton.label ? ctaButton : { label: "GET IN TOUCH" };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#home">{logo}</a>
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          {defaultNavItems.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button className="cta-button">{defaultCTA.label}</button>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
