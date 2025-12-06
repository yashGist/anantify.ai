import React from "react";
import "../../styles/layout/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "#about" },
      { label: "Our Services", href: "#services" },
      { label: "Contact Us", href: "#contact" },
      { label: "Blogs", href: "#blogs" },
    ],
    services: [
      { label: "Generative AI", href: "#generative-ai" },
      { label: "LLM Development", href: "#llm" },
      { label: "Chatbot Development", href: "#chatbot" },
      { label: "Cloud Management", href: "#cloud" },
    ],
  };

  const socialLinks = [
    { icon: "instagram", label: "Instagram", href: "#instagram" },
    { icon: "linkedin", label: "LinkedIn", href: "#linkedin" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Left Section */}
          <div className="footer-left">
            <h2 className="footer-logo">Anantify.ai</h2>
            <h3 className="footer-tagline">
              Let's Make Something Great Together
            </h3>

            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  {social.icon === "instagram" && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                    </svg>
                  )}
                  {social.icon === "linkedin" && (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.814 0-9.737h3.554v1.377c.43-.664 1.199-1.608 2.928-1.608 2.136 0 3.745 1.393 3.745 4.385v5.583zM5.337 9.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 11.019H3.555V8.748h3.564v11.704zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Middle Section - Links */}
          <div className="footer-middle">
            <div className="footer-column">
              <h4 className="footer-column-title">Company</h4>
              <ul className="footer-links">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-column">
              <h4 className="footer-column-title">Services</h4>
              <ul className="footer-links">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Section - Contact Info & Partnerships */}
          <div className="footer-right">
            <div className="footer-partnerships">
              <p className="footer-partnership-text">
                Strategic Partnership to unlock greater business value
              </p>
              <div className="footer-partner-logos">
                <span className="footer-partner-logo">Google Cloud</span>
                <span className="footer-partner-logo">AWS</span>
                <span className="footer-partner-logo">Terraform</span>
              </div>
            </div>

            <div className="footer-contact">
              <div className="footer-contact-item">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <p>
                    607 Shanti Dazzle, Scheme No 140, Indore, Madhya Pradesh -
                    452016
                  </p>
                </div>
              </div>

              <div className="footer-contact-item">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:hello@westack.ai">hello@westack.ai</a>
              </div>

              <div className="footer-contact-item">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href="tel:+917898199178">+91 7898199178</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright & Tagline */}
        <div className="footer-bottom">
          <div className="footer-tagline-text">
            VERSE • THE AIVERSE • THE AIVERSE • THE AIVERSE • THE AIVERSE •
          </div>
          <p className="footer-copyright">
            © {currentYear} Anantify.ai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
