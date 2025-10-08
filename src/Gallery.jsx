import React from 'react';
import './App.css';

export default function Gallery({ photos }) {
  return (
    <div className="details-card">
      <h3>Wedding Gallery</h3>
      {photos.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.1em', color: '#fff', margin: '2em 0' }}>No photos yet</p>
      ) : (
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5em', 
          marginTop: '1.5em',
          flexWrap: 'wrap'
        }}>
          {photos.map((photo, idx) => (
            <div key={idx} style={{ 
              position: 'relative', 
              overflow: 'hidden', 
              borderRadius: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
              border: '2px solid #e84a8c',
              width: '250px',
              height: '250px'
            }}>
              <img 
                src={photo} 
                alt={`Wedding ${idx + 1}`} 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  borderRadius: '13px', 
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}