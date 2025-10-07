
import brideImg from './assets/bride-animated.gif';
import groomImg from './assets/groom-animated.gif';
import './App.css';

function App() {
  return (
    <div className="wedding-container">
      <header className="wedding-header">
        <h1>You're Invited!</h1>
        <h2>Priya & Raj's Wedding</h2>
      </header>
      <section className="wedding-details">
        <div className="animated-images">
          <img src={brideImg} alt="Bride" className="animated-bride" />
          <img src={groomImg} alt="Groom" className="animated-groom" />
        </div>
        <div className="details-card">
          <h3>Wedding Details</h3>
          <p><strong>Date:</strong> 15th December 2025</p>
          <p><strong>Time:</strong> 6:00 PM onwards</p>
          <p><strong>Venue:</strong> Grand Palace Banquet Hall</p>
          <p><strong>Address:</strong> 123 Celebration Avenue, Hyderabad, India</p>
          <div className="map-container">
            <iframe
              title="Wedding Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.123456789!2d78.123456!3d17.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99e123456789%3A0x123456789abcdef!2sGrand%20Palace%20Banquet%20Hall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <footer className="wedding-footer">
        <p>Permanent Link: <a href="/" target="_blank">Open Wedding Page</a></p>
      </footer>
    </div>
  );
}

export default App;
