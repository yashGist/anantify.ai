import React from "react";
import Navigation from "./components/layout/Navigation";
import HeroSection from "./components/sections/HeroSection";
import BusinessTransformSection from "./components/sections/BusinessTransformSection";
import ServicesSection from "./components/sections/ServicesSection";
import BulbCTA from "./components/cta/BulbCTA";
import ServiceCardsSection from "./components/sections/ServiceCardsSection";
import AIProducts from "./components/sections/AIProducts";
import "./styles/App.css";
import EngineeringSection from "./components/sections/EngineeringSection";
import BuildTogetherSection from "./components/sections/BuildTogetherSection";
import TestimonialsInteractiveSection from "./components/sections/TestimonialsInteractiveSection";
import HireUsSection from "./components/sections/HireUsSection";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <BusinessTransformSection />
      <ServicesSection />
      <AIProducts />
      <BulbCTA
        title="If You Have Any Idea We'll Help You"
        subtitle="Let's Connect..!"
        buttonText="Hire AI Expert"
        buttonLink="#contact"
      />
      <ServiceCardsSection />
      <EngineeringSection />
      <BuildTogetherSection />
      <TestimonialsInteractiveSection />
      <HireUsSection />
    </div>
  );
}

export default App;
