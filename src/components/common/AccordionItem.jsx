import React, { useState } from "react";
import "../../styles/common/AccordionItem.css";

const AccordionItem = ({
  title = "Title",
  description = "Description",
  icon = "+",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="accordion-title">{title}</h3>
        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
      </div>

      {isOpen && (
        <div className="accordion-content">
          <p className="accordion-description">{description}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
