import React from "react";
import Navigation from "./components/layout/Navigation";
import HeroSection from "./components/sections/HeroSection";
import BusinessTransformSection from "./components/sections/BusinessTransformSection";
import ServicesSection from "./components/sections/ServicesSection";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <BusinessTransformSection />
      <ServicesSection />
    </div>
  );
}

export default App;
