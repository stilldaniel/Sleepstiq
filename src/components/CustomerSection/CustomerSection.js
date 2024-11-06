import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CustomerSection.css';


const CustomerSection = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    };
  return (
    <div className='tyuhfj'>
        <div className='heroes'>
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
        <div className="heroes-text">
            <p className='first-text'>We're here to help you</p>
            <h1>How can we assist?</h1>
            <div className="search-box">
        <i className="fas fa-search search-icon"></i>
        <input 
          type="text"
          placeholder="Search FAQs here"
          className="search-input"
        />
      </div>
        </div>
    </div>
    <div className="faq-container">
      <nav className="sidebar">
        <div className="brand">
          <h1>Sleepstiq <span>  Product</span></h1>
        </div>
        <ul className="nav-items">
          <li className="nav-item">Order</li>
          <li className="nav-item">Melantonin</li>
        </ul>
      </nav>
      
      <main className="content">
        <div className="faq-list">
          <div className="faq-item">
            <h2>Q1: How does it work?</h2>
            <div className="divider"></div>
          </div>

          <div className="faq-item">
            <h2>Q2: Why inhale melatonin?</h2>
            <div className="divider"></div>
          </div>

          <div className="faq-item">
            <h2>Q3: How much melatonin is there per inhale?</h2>
            <div className="divider"></div>
          </div>

          <div className="faq-item">
            <h2>Q4: Is it an e-cigarette or tobacco product?</h2>
            <div className="divider"></div>
          </div>

          <div className="faq-item">
            <h2>Q5: What's in it?</h2>
            <div className="divider"></div>
          </div>

          <div className="faq-item">
            <h2>Q6: What's not in it?</h2>
            <div className="divider"></div>
          </div>

          <div className="faq-item">
            <h2>Q7: How long does it last?</h2>
            <div className="divider"></div>
          </div>

          <div className="faq-item">
            <h2>Q8: How do I know it has run out/died?</h2>
            <div className="divider"></div>
          </div>
        </div>
      </main>
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
export default CustomerSection;