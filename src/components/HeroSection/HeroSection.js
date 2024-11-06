import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    };
  return (
    <div className='tyuhf'>
        <div className='heros'>
        <nav className="navbar">
      <div className="logo">
        <p><a href="#home">Sleepstiq</a></p>
      </div>
      
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/">Shop</Link></li>
      <li><Link to="/shop">FAQs</Link></li>
      </ul>
      
      <div className="nav-menu" onClick={toggleMenu}>
        <i className={`fa-solid ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
        <div className="hero-texts">
            <p className='first-text'>We're here to help you</p>
            <h1>Relax & Rest</h1>
        </div>
    </div>
    <div className='product-section'>
    <div className="product-image-container">
    <img src="/images/vape-pen.png" alt="ceo" className='product-image' />
        
      </div>
      <div className="product-info">
        <h2>Shop Now</h2>
        <p>
            Our Personal Diffuser is an aromatherapy device that contains a blend of melatonin, lavender, and chamomile. A few breaths of our plant-based essential oil mist will mellow you out, quiet the mind, and lull you to bed.
        </p>
        <ul>
            <li>😊  Promotes calm and relaxation.‍</li>
            <li>💤  Inhalation allows for a rapid effect.</li>
            <li>✅  100% drug-free, plant-based ingredients.</li>
            <li>⚕️  3rd-party lab tested.</li>
          </ul>
        <button className="shop-button">Visit Shop</button>
      </div>
    </div>
    <div className='testimonials'>
        <div className='testimonial-card'>
        <p>Love it! I have trouble falling asleep and this knocked me right out. Will be buying more.</p>
        <h4>John Matthews</h4>
        <div className="stars">★★★★★</div>
      </div>
      <div className="testimonial-card">
        <p>I work shift work. Swinging from days to nights is sometimes brutal for sleep. Thank you Sleepstiq.</p>
        <h4>Eunice Oliver</h4>
        <div className="stars">★★★★★</div>
      </div>
      <div className="testimonial-card">
        <p>It's a really good product and helps me sleep better at night!</p>
        <h4>Laura Davies</h4>
        <div className="stars">★★★★★</div>
      </div>
      <div className="testimonial-card">
        <p>Helps me relax and remember to breathe. Stress level definitely goes down.</p>
        <h4>Jane Bocks</h4>
        <div className="stars">★★★★★</div>
        </div>
    </div>
    <footer className="footer">
      <div className="footer-container">
        <div className="company-section">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">Jobs</a></li>
          </ul>
        </div>
        <div className="contact-section">
          <h3>CONTACT</h3>
          <div className="contact-info">
            <p>Phone</p>
            <a href="tel:+2349132588749">+234 913 258 8749</a>
          </div>
          <div className="contact-info">
            <p>Address</p>
            <p>16, Ogundipe Close, Upton Close</p>
          </div>
        </div>
        <div className="consumer-advisory">
          <h3>CONSUMER ADVISORY</h3>
          <p>These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. This product should be used only as directed on the label. All trademarks and copyrights are property of their respective owners and not affiliated with nor do they endorse this product. Results may vary.</p>
          <p>By using our website or product, you agree to follow our terms of service.</p>
        </div>
        <div className="get-in-touch">
          <h3>GET IN TOUCH</h3>
          <p>Feel free to get in touch with us via email</p>
          <a href="mailto:hello@sleepstiq.com">hello@sleepstiq.com</a>
          <div className="social-icons">
            <a href="/" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="social-icon">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="/" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 @stilldaniel. All Rights Reserved.</p>
      </div>
    </footer>
    </div>
  );
};
export default HeroSection;