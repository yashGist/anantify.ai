import React, { useState } from "react";
import "../../styles/sections/CustomLLMSection.css";

const CustomLLMSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const solutions = [
    {
      id: 1,
      category: "Technology",
      title:
        "Retrieval-Augmented Generation (RAG): Enhancing AI's Ability to Synthesize Information",
      description:
        "RAG combines the power of retrieval and generation to provide more accurate and contextual responses.",
      image: "/images/rag-solution.jpg",
      bgColor: "#8b9a8a",
    },
    {
      id: 2,
      category: "Technology",
      title: "Mastering Prompt Engineering: The Art of Communicating with AI",
      description:
        "Learn the techniques to craft effective prompts that get the best results from AI models.",
      image: "/images/prompt-engineering.jpg",
      bgColor: "#0a1a2e",
    },
    {
      id: 3,
      category: "Technology",
      title: "The Flux Model: A New Frontier in AI Generation",
      description:
        "Discover the revolutionary Flux model that pushes the boundaries of AI capabilities.",
      image: "/images/flux-model.jpg",
      bgColor: "#0a1a2e",
    },
    {
      id: 4,
      category: "Technology",
      title:
        "LangChain is a composable framework designed to seamlessly build applications",
      description:
        "Build powerful AI applications with the LangChain framework.",
      image: "/images/langchain-solution.jpg",
      bgColor: "#6b7d7a",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? solutions.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === solutions.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % solutions.length;
      visibleCards.push(solutions[index]);
    }
    return visibleCards;
  };

  return (
    <section className="llm-section">
      <div className="llm-container">
        {/* Header */}
        <div className="llm-header">
          <div className="llm-header-left">
            <p className="llm-subtitle">Custom LLM Solution</p>
            <h2 className="llm-title">
              LLM Built For Your Unique Data And Tasks
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="llm-nav-buttons">
            <button className="llm-nav-btn llm-nav-prev" onClick={handlePrev}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="llm-nav-btn llm-nav-next" onClick={handleNext}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Carousel */}
        <div className="llm-carousel">
          <div className="llm-cards-wrapper">
            {getVisibleCards().map((solution, index) => (
              <div
                key={solution.id}
                className="llm-card"
                style={{
                  backgroundColor: solution.bgColor,
                  backgroundImage: `url(${solution.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlend: "multiply",
                }}
              >
                <div className="llm-card-content">
                  <p className="llm-card-category">{solution.category}</p>
                  <h3 className="llm-card-title">{solution.title}</h3>
                  <p className="llm-card-description">{solution.description}</p>
                </div>

                {/* Gradient overlay */}
                <div className="llm-card-overlay"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator Dots */}
        <div className="llm-indicators">
          {solutions.map((_, index) => (
            <button
              key={index}
              className={`llm-dot ${
                index === currentIndex ? "llm-dot-active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomLLMSection;
