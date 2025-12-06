import React from "react";
import "../../styles/sections/OurProductsSection.css";

const OurProductsSection = () => {
  // Row 1 - Moving Right
  const productsRow1 = [
    { id: 1, title: "Typewriter", image: "/images/product-1.jpg" },
    { id: 2, title: "Dashboard", image: "/images/product-2.jpg" },
    { id: 3, title: "Events Platform", image: "/images/product-3.jpg" },
    { id: 4, title: "Padel Sports", image: "/images/product-4.jpg" },
    { id: 5, title: "Premier Rental", image: "/images/product-5.jpg" },
    { id: 6, title: "Content Discovery", image: "/images/product-6.jpg" },
    { id: 7, title: "Analytics", image: "/images/product-7.jpg" },
  ];

  // Row 2 - Moving Left
  const productsRow2 = [
    { id: 8, title: "Stats Dashboard", image: "/images/product-8.jpg" },
    { id: 9, title: "Vision Analytics", image: "/images/product-9.jpg" },
    { id: 10, title: "Brand Platform", image: "/images/product-10.jpg" },
    { id: 11, title: "Marketing Hub", image: "/images/product-11.jpg" },
    { id: 12, title: "Elite Brands", image: "/images/product-12.jpg" },
    { id: 13, title: "Creative Frog", image: "/images/product-13.jpg" },
  ];

  return (
    <section className="products-section">
      <div className="products-container">
        {/* Header */}
        <div className="products-header">
          <h2 className="products-title">
            Our Product That Are <br />
            Performing Astonishing Well
          </h2>
          <button className="products-cta">Hire Us</button>
        </div>

        {/* Row 1 - Scrolling Right */}
        <div className="products-row products-row-right">
          <div className="products-carousel products-carousel-right">
            {[...productsRow1, ...productsRow1].map((product, index) => (
              <div key={index} className="products-card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="products-card-image"
                />
                <div className="products-card-overlay">
                  <p className="products-card-title">{product.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolling Left */}
        <div className="products-row products-row-left">
          <div className="products-carousel products-carousel-left">
            {[...productsRow2, ...productsRow2].map((product, index) => (
              <div key={index} className="products-card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="products-card-image"
                />
                <div className="products-card-overlay">
                  <p className="products-card-title">{product.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProductsSection;
