import React, { useState } from 'react';
import './App.css';

export default function RSVP({ onRSVP }) {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('yes');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRSVP({ name, attending });
    setSubmitted(true);
  };

  return (
    <div className="details-card" style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#333', maxWidth: '400px', margin: '0 auto' }}>
      <h3 style={{ color: '#e84a8c', fontSize: '1.8em', fontFamily: 'Dancing Script, cursive', textAlign: 'center' }}>RSVP</h3>
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '2em' }}>
          <p style={{ fontSize: '1.2em', color: '#e84a8c' }}>Thank you for your response!</p>
          <button 
            onClick={() => setSubmitted(false)}
            style={{ 
              marginTop: '1em',
              padding: '0.5em 1.5em',
              backgroundColor: '#e84a8c',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Submit Another RSVP
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1em', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            style={{ 
              fontSize: '1.1em', 
              padding: '0.8em', 
              borderRadius: '8px', 
              border: '2px solid #e84a8c', 
              width: '90%', 
              maxWidth: '300px',
              outline: 'none'
            }}
          />
          <select 
            value={attending} 
            onChange={e => setAttending(e.target.value)} 
            style={{ 
              fontSize: '1.1em', 
              padding: '0.8em', 
              borderRadius: '8px', 
              border: '2px solid #e84a8c', 
              width: '90%', 
              maxWidth: '300px',
              outline: 'none'
            }}
          >
            <option value="yes">Accepts with pleasure</option>
            <option value="no">Regretfully declines</option>
          </select>
          <button 
            type="submit" 
            style={{
              padding: '0.8em 2em',
              fontSize: '1.1em',
              backgroundColor: '#e84a8c',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'background 0.2s'
            }}
          >
            Submit RSVP
          </button>
        </form>
      )}
    </div>
  );
}