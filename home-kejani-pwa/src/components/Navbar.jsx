import React from 'react';

const Navbar = () => {
  return (
    <header style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 48px',
      backgroundColor: '#ffffff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {/* Logo Group */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{
          backgroundColor: '#0b5e43',
          color: '#ffffff',
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </div>
        <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#0f172a' }}>
          Home Kejani
        </span>
      </div>

      {/* Navigation Links Group */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
        <a href="#home" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}>Home</a>
        <a href="#properties" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}>Properties</a>
        <a href="#glamping" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}>Glamping</a>
        <a href="#about" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}>About</a>
        <a href="#contact" style={{ color: '#1e293b', textDecoration: 'none', fontWeight: '600', fontSize: '0.95rem' }}>Contact</a>
      </div>

      {/* Button Group */}
      <div>
        <button style={{
          backgroundColor: '#e85d04',
          color: '#ffffff',
          border: 'none',
          padding: '10px 24px',
          borderRadius: '24px',
          fontWeight: '700',
          fontSize: '0.9rem',
          cursor: 'pointer'
        }}>
          Book Now
        </button>
      </div>
    </header>
  );
};

export default Navbar;