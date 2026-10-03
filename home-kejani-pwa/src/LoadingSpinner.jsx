import React from 'react';


const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <div className="spinner">
        <div className="house-icon-loading">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
        <div className="spinner-ring"></div>
      </div>
      <p className="loading-text">Loading Home Kejani...</p>
    </div>
  );
};

export default LoadingSpinner;