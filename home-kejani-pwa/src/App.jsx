import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from './components/HeroSection';
import PropertyList from './components/PropertyList';
import Features from './components/Features';
import Footer from './components/Footer';
import OfflineNotification from './components/offlineNotification';
import LoadingSpinner from "./LoadingSpinner";
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    // Simulate initial load (remove in production)
    const timer = setTimeout(() => {
      setIsLoading(false);
      setAppReady(true);
    }, 1000);

    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
      });
    }

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className="app" data-ready={appReady}>
        <OfflineNotification />
        
        <Navbar />
        
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <HeroSection />
                  <Features />
                  <PropertyList />
                </>
              } 
            />
            {/* Add more routes as needed */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;