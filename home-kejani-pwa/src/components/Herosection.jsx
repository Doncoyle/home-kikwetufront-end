import React from 'react';
import './Herosection.css';

const Herosection = () => {
  return (
    <section className="hero-container">
      {/* Dynamic Animated Sky Background */}
      <div className="sky-background" />

      {/* Sun rising from horizon */}
      <div className="sun" />

      {/* Twinkling Stars Layer */}
      <div className="stars-wrapper">
        <div className="star s1" />
        <div className="star s2" />
        <div className="star s3" />
        <div className="star s4" />
        <div className="star s5" />
      </div>

      {/* Hero Content Overlay */}
      <div className="hero-content">
        <div className="welcome-badge">
          <span>🏡 Welcome to Paradise</span>
        </div>

        <h1 className="hero-title">
          Discover Your Perfect <span className="highlight-text">Getaway</span>
        </h1>

        <p className="hero-description">
          Experience luxury living with breathtaking views, from modern
          apartments with panoramic balconies to exclusive glamping under the stars.
        </p>

        <div className="button-group">
          <button type="button" className="btn btn-primary">
            Explore Stays
          </button>
          <button type="button" className="btn btn-secondary">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Herosection;