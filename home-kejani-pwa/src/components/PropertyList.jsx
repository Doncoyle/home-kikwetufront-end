import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PropertyList.css';

const properties = [
  {
    id: 1,
    title: "Skyline Luxury Apartment",
    location: "Downtown, City Center",
    price: 150,
    rating: 4.9,
    reviews: 127,
    image: "/cvi.jpg",
    tags: ["Apartment", "Balcony", "City View", "WiFi", "Pool"],
  
    bedrooms: 2,
    bathrooms: 2,
    guests: 4
  },
  {
    id: 2,
    title: "Starlight Glamping Tent",
    location: "Nature Reserve, 15km from city",
    price: 220,
    rating: 4.95,
    reviews: 89,
    image: "/CV2.jpg",
    tags: ["Glamping", "Nature", "Outdoor", "Fire Pit", "Stargazing"],
    bedrooms: 1,
    bathrooms: 1,
    guests: 2
  },
  {
    id: 3,
    title: "Oceanfront Villa",
    location: "Coastal Paradise",
    price: 350,
    rating: 4.98,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800",
    tags: ["Villa", "Beach", "Private Pool", "Luxury", "Ocean View"],
    bedrooms: 4,
    bathrooms: 3,
    guests: 8
  }
];

function PropertyList() {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Properties' },
    { id: 'apartment', label: 'Apartments' },
    { id: 'glamping', label: 'Glamping' },
    { id: 'villa', label: 'Villas' }
  ];

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProperties(properties);
    } else {
      setFilteredProperties(
        properties.filter(property =>
          property.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase())
        )
      );
    }
  }, [activeFilter]);

  return (
    <section id="properties" className="properties-section">
      <div className="properties-container">
        <div className="section-header">
          <h2>Featured Properties</h2>
          <p>Discover our handpicked selection of exceptional stays</p>
        </div>

        <div className="filter-tabs">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-tab ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="properties-grid">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="view-all-container">
          <Link to="/properties" className="btn-view-all">
            View All Properties →
          </Link>
        </div>
      </div>
    </section>
  );
}

const PropertyCard = ({ property }) => {
  return (
    <article className="property-card">
      <div className="property-image-container">
        <img 
          src={property.image} 
          alt={property.title}
          className="property-image"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800';
          }}
        />
        <div className="property-badge">Featured</div>
        <button className="wishlist-btn" aria-label="Add to wishlist">
          ♡
        </button>
      </div>

      <div className="property-content">
        <div className="property-header">
          <h3>{property.title}</h3>
          <div className="property-rating">
            <span className="star">★</span>
            <span>{property.rating}</span>
            <span className="reviews">({property.reviews})</span>
          </div>
        </div>

        <p className="property-location">📍 {property.location}</p>

        <div className="property-tags">
          {property.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className="property-details">
          <span>{property.bedrooms} Beds</span>
          <span>{property.bathrooms} Baths</span>
          <span>{property.guests} Guests</span>
        </div>

        <div className="property-footer">
          <div className="price">
            <span className="amount">${property.price}</span>
            <span className="period">/night</span>
          </div>
          <Link to={`/property/${property.id}`} className="btn-details">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PropertyList;