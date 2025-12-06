import React from "react";
import WorkflowCard from "../common/WorkflowCard";
import LLMCard from "../common/LLMCard";
import ConsultingCard from "../common/ConsultingCard";
import "../../styles/services/ServiceCardsSection.css";

/**
 * ServiceCardsSection Component
 *
 * Parent component that arranges the 3 service cards:
 * 1. Workflow Automation (animated lines)
 * 2. LLM Development (static hover)
 * 3. AI Consulting (bubble movement on hover)
 */
const ServiceCardsSection = () => {
  return (
    <section className="service-cards-section">
      <div className="service-cards-container">
        {/* Card 1: Workflow Automation */}
        <WorkflowCard
          title="Workflow Automation"
          description="Streamline operations and eliminate repetitive tasks with our workflow automation solutions, boosting efficiency and freeing up your team to focus on growth."
        />

        {/* Card 2: LLM Development */}
        <LLMCard
          title="LLM Development"
          description="We develop custom Large Language Models that transform how you analyze data, engage with customers, and make decisions. Smarter insights, faster outcomes."
        />

        {/* Card 3: AI Consulting */}
        <ConsultingCard
          title="AI Consulting"
          description="Our AI consultants provide strategic guidance to implement tailored solutions that drive growth, efficiency, and innovation. Let's turn challenges into opportunities."
        />
      </div>
    </section>
  );
};

export default ServiceCardsSection;
