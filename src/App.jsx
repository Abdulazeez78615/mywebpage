import { useState, useEffect } from 'react';
import './App.css';
import bgImg from './assets/wedding-bg.jpg';
import neonHeartBg from './assets/neon-heart-bg.jpg';
import CoupleProfile from './CoupleProfile';
import EventSchedule from './EventSchedule';
import Gallery from './Gallery';

function App() {
  // Set this to true for developer, false for public
  const isDeveloper = true;
  const [currentPage, setCurrentPage] = useState('home');
  const [showDetails, setShowDetails] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [details, setDetails] = useState({
    names: 'Priya & Raj',
    greeting: 'Dear Guest,',
    desc: 'Will celebrate their wedding in:',
    date: '15th December 2025',
    time: '6:00 PM onwards',
    venue: 'Grand Palace Banquet Hall',
    address: '123 Celebration Avenue, Hyderabad, India',
    location: '14.481417,79.997167',
    days: '68',
    hours: '4',
    minutes: '46',
    seconds: '1'
  });
  // Demo data for features
  const bride = { name: 'Priya', desc: 'Loves art & travel' };
  const groom = { name: 'Raj', desc: 'Enjoys music & adventure' };
  const events = [
    { title: 'Mehendi Ceremony', date: '13th Dec 2025', time: '5:00 PM', venue: 'Family Home' },
    { title: 'Sangeet Night', date: '14th Dec 2025', time: '7:00 PM', venue: 'Grand Palace Banquet Hall' },
    { title: 'Wedding', date: '15th Dec 2025', time: '6:00 PM', venue: 'Grand Palace Banquet Hall' },
    { title: 'Reception', date: '16th Dec 2025', time: '8:00 PM', venue: 'Grand Palace Banquet Hall' }
  ];
  const [galleryPhotos] = useState([
    'https://images.unsplash.com/photo-1517841905240-472988babdf9',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb'
  ]);
  useEffect(() => {
    if (!editMode) {
      const timer = setInterval(() => {
        const now = new Date();
        const weddingDate = new Date('2025-12-15T18:00:00');
        const diff = weddingDate - now;
        if (diff > 0) {
          setDetails((prev) => ({
            ...prev,
            days: Math.floor(diff / (1000 * 60 * 60 * 24)).toString(),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24).toString(),
            minutes: Math.floor((diff / (1000 * 60)) % 60).toString(),
            seconds: Math.floor((diff / 1000) % 60).toString()
          }));
        } else {
          setDetails((prev) => ({ ...prev, days: '0', hours: '0', minutes: '0', seconds: '0' }));
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [editMode]);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  return (
    <div className="hero-bg">
      <div className="hero-overlay">
        <div className="hero-content">
          {/* Navigation */}
          <nav style={{ 
            position: 'fixed', 
            top: '20px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            zIndex: 1000,
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '20px',
            padding: '10px 20px',
            backdropFilter: 'blur(10px)'
          }}>
            <button 
              onClick={() => setCurrentPage('home')} 
              style={{ 
                background: currentPage === 'home' ? '#e84a8c' : 'transparent',
                color: currentPage === 'home' ? '#fff' : '#e84a8c',
                border: 'none',
                padding: '8px 16px',
                margin: '0 5px',
                borderRadius: '15px',
                cursor: 'pointer'
              }}
            >Home</button>
            <button 
              onClick={() => setCurrentPage('events')} 
              style={{ 
                background: currentPage === 'events' ? '#e84a8c' : 'transparent',
                color: currentPage === 'events' ? '#fff' : '#e84a8c',
                border: 'none',
                padding: '8px 16px',
                margin: '0 5px',
                borderRadius: '15px',
                cursor: 'pointer'
              }}
            >Events</button>
            <button 
              onClick={() => setCurrentPage('gallery')} 
              style={{ 
                background: currentPage === 'gallery' ? '#e84a8c' : 'transparent',
                color: currentPage === 'gallery' ? '#fff' : '#e84a8c',
                border: 'none',
                padding: '8px 16px',
                margin: '0 5px',
                borderRadius: '15px',
                cursor: 'pointer'
              }}
            >Gallery</button>
          </nav>

          {/* Page Content */}
          {currentPage === 'home' && (
            <>
              {/* Home Screen Greeting */}
              <h1 className="hero-names" style={{ fontFamily: 'Dancing Script, cursive', color: '#e84a8c', fontSize: '3.5em', marginBottom: '0.2em' }}>{details.names}</h1>
              <h2 style={{ fontFamily: 'Dancing Script, cursive', color: '#e84a8c', fontSize: '2em', marginBottom: '1em' }}>{details.date}</h2>
              
              {/* Countdown Timer */}
              <div className="countdown-row">
                <div className="countdown-circle"><span className="countdown-num">{details.days}</span><span className="countdown-label">days</span></div>
                <div className="countdown-circle"><span className="countdown-num">{details.hours}</span><span className="countdown-label">hours</span></div>
                <div className="countdown-circle"><span className="countdown-num">{details.minutes}</span><span className="countdown-label">minutes</span></div>
                <div className="countdown-circle"><span className="countdown-num">{details.seconds}</span><span className="countdown-label">seconds</span></div>
              </div>
              
              {/* Couple Profile */}
              <CoupleProfile bride={bride} groom={groom} />
            </>
          )}

          {currentPage === 'events' && (
            <>
              <EventSchedule events={events} />
            </>
          )}

          {currentPage === 'gallery' && (
            <>
              <Gallery photos={galleryPhotos} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
