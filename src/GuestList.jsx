import React from 'react';
import './App.css';

export default function GuestList({ guests }) {
  return (
    <div className="details-card" style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#333', maxWidth: '400px', margin: '1em auto' }}>
      <h3 style={{ color: '#e84a8c', fontSize: '1.8em', fontFamily: 'Dancing Script, cursive', textAlign: 'center' }}>Guest List</h3>
      {guests.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '1.1em', color: '#666' }}>No guests yet</p>
      ) : (
        <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
          {guests.map((guest, idx) => (
            <div key={idx} style={{ 
              marginBottom: '0.8em',
              padding: '0.8em',
              backgroundColor: guest.attending ? '#e8f5e8' : '#ffe8e8',
              borderRadius: '6px',
              border: `1px solid ${guest.attending ? '#4caf50' : '#f44336'}`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ fontWeight: '600' }}>{guest.name}</span>
              <span style={{ 
                color: guest.attending ? '#4caf50' : '#f44336',
                fontWeight: '500',
                fontSize: '0.9em'
              }}>
                {guest.attending ? '✓ Attending' : '✗ Not Attending'}
              </span>
            </div>
          ))}
        </div>
      )}
      <div style={{ textAlign: 'center', marginTop: '1em', fontSize: '0.9em', color: '#666' }}>
        Total: {guests.length} | Attending: {guests.filter(g => g.attending).length}
      </div>
    </div>
  );
}