import React from 'react';
import './App.css';
import brideImg from './assets/bride-animated.gif';
import groomImg from './assets/groom-animated.gif';

export default function CoupleProfile({ bride, groom }) {
  return (
    <div className="bride-groom-row">
      <div className="center-content">
        <h2 className="couple-names" style={{ 
          color: '#fff', 
          textAlign: 'center', 
          margin: '1em 0',
          fontFamily: 'Dancing Script, cursive',
          fontSize: '2.2em'
        }}>
          <span style={{ color: '#000', textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}>{bride.name}</span>
          <span className="amp"> &amp; </span>
          <span style={{ color: '#000', textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}>{groom.name}</span>
        </h2>
        <p className="invite-text" style={{ 
          color: '#fff', 
          textAlign: 'center', 
          fontSize: '1.1em',
          margin: '0 1em',
          lineHeight: '1.5'
        }}>
          Together with their families, joyfully invite you to celebrate their wedding.
        </p>
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '3em',
        flexWrap: 'wrap',
        marginTop: '1.5em'
      }}>
        <div style={{ textAlign: 'center' }}>
          <img src={brideImg} alt="Bride" className="bride-groom-img" />
          <h3 style={{ 
            fontFamily: 'Dancing Script, cursive', 
            color: '#000', 
            marginTop: '1em',
            fontSize: '1.5em',
            textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
          }}>{bride.name}</h3>
          <p style={{ color: '#fff', fontSize: '0.9em', margin: '0.5em 0' }}>{bride.desc}</p>
        </div>
        
        <div style={{ textAlign: 'center' }}>
          <img src={groomImg} alt="Groom" className="bride-groom-img" />
          <h3 style={{ 
            fontFamily: 'Dancing Script, cursive', 
            color: '#000', 
            marginTop: '1em',
            fontSize: '1.5em',
            textShadow: '1px 1px 2px rgba(255,255,255,0.8)'
          }}>{groom.name}</h3>
          <p style={{ color: '#fff', fontSize: '0.9em', margin: '0.5em 0' }}>{groom.desc}</p>
        </div>
      </div>
    </div>
  );
}