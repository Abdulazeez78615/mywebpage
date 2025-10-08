import { useState, useEffect } from 'react';
import './App.css';
import bgImg from './assets/wedding-bg.jpg';

function App() {
  const [showDetails, setShowDetails] = useState(false);
  const weddingDate = new Date('2025-12-15T18:00:00');
  const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0, seconds: 0});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = weddingDate - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        });
      } else {
        setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0});
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <div className="hero-bg" style={{backgroundImage: `url(${bgImg})`}}>
      <div className="hero-overlay">
        <div className="hero-content">
          {!showDetails ? (
            <>
              <p className="hero-greeting">Dear Guest,</p>
              <h1 className="hero-names">Priya &amp; Raj</h1>
              <p className="hero-desc">Will celebrate their wedding in:</p>
              <div className="countdown-row">
                <div className="countdown-circle"><span className="countdown-num">{timeLeft.days}</span><span className="countdown-label">days</span></div>
                <div className="countdown-circle"><span className="countdown-num">{timeLeft.hours}</span><span className="countdown-label">hours</span></div>
                <div className="countdown-circle"><span className="countdown-num">{timeLeft.minutes}</span><span className="countdown-label">minutes</span></div>
                <div className="countdown-circle"><span className="countdown-num">{timeLeft.seconds}</span><span className="countdown-label">seconds</span></div>
              </div>
              <button className="hero-btn" onClick={() => setShowDetails(true)}>
                <span role="img" aria-label="invitation">💌</span> View Invitation
              </button>
            </>
          ) : (
            <div className="details-card-popup">
              <h2 className="details-title">Wedding Details</h2>
              <p><strong>Date:</strong> 15th December 2025</p>
              <p><strong>Time:</strong> 6:00 PM onwards</p>
              <p><strong>Venue:</strong> Grand Palace Banquet Hall</p>
              <p><strong>Address:</strong> 123 Celebration Avenue, Hyderabad, India</p>
              <div className="map-container-popup">
                <iframe
                  title="Wedding Location"
                  src="https://www.google.com/maps?q=14.481417,79.997167&hl=en&z=16&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <button className="hero-btn" onClick={() => setShowDetails(false)}>
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
