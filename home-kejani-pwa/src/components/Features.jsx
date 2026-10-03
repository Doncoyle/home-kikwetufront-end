import React from 'react';
import "./Feature.css";

const features = [
  {
    icon: '🏠',
    title: 'Luxury Properties',
    description: 'Hand-picked premium properties with modern amenities and stunning views.'
  },
  {
    icon: '⛺',
    title: 'Glamping Experience',
    description: 'Unique outdoor accommodations that blend comfort with nature.'
  },
  {
    icon: '🔑',
    title: 'Easy Booking',
    description: 'Seamless reservation process with instant confirmation and flexible policies.'
  },
  {
    icon: '🛡️',
    title: 'Secure & Safe',
    description: 'Your safety and privacy are our top priorities with 24/7 support.'
  }
];

const Features = () => {
  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2>Why Choose Home Kejani?</h2>
          <p>We provide exceptional experiences with attention to every detail</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;