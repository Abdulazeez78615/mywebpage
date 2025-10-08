import React from 'react';
import './App.css';

export default function EventSchedule({ events }) {
  return (
    <div className="details-card">
      <h3>Event Schedule</h3>
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '1.5em', 
        margin: '0 auto',
        flexWrap: 'wrap'
      }}>
        {events.map((event, idx) => (
          <div key={idx} style={{ 
            padding: '1.2em', 
            backgroundColor: 'rgba(232, 74, 140, 0.1)', 
            borderRadius: '12px',
            border: '2px solid #e84a8c',
            boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
            textAlign: 'center',
            backdropFilter: 'blur(10px)',
            minHeight: '200px',
            width: '250px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <h4 style={{ 
              color: '#000', 
              margin: '0 0 0.8em 0', 
              fontFamily: 'Dancing Script, cursive',
              fontSize: '1.4em',
              textAlign: 'center',
              textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
            }}>{event.title}</h4>
            <div style={{ textAlign: 'center', lineHeight: '1.6' }}>
              <p style={{ margin: '0.2em 0', fontSize: '0.9em', color: '#fff' }}>
                <strong style={{ color: '#e84a8c' }}>Date:</strong> {event.date}
              </p>
              <p style={{ margin: '0.2em 0', fontSize: '0.9em', color: '#fff' }}>
                <strong style={{ color: '#e84a8c' }}>Time:</strong> {event.time}
              </p>
              <p style={{ margin: '0.2em 0', fontSize: '0.9em', color: '#fff' }}>
                <strong style={{ color: '#e84a8c' }}>Venue:</strong> {event.venue}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}