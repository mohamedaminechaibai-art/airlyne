import { useState } from 'react'
import './About.css'

const About = () => {
  const [hoveredValue, setHoveredValue] = useState(null)

  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <div className="hero-content-wrapper">
            <h1 className="section-title">About Air Agency</h1>
            <p className="section-subtitle">
              Your trusted partner in travel for over a decade
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">14+</div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">500K+</div>
                <div className="hero-stat-label">Happy Travelers</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">150+</div>
                <div className="hero-stat-label">Destinations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2010, Air Agency has been at the forefront of the travel industry, 
                helping millions of travelers discover the world. What started as a small local 
                travel agency has grown into a trusted global brand, known for exceptional service 
                and unbeatable prices.
              </p>
              <p>
                Our mission is simple: to make travel accessible, enjoyable, and stress-free for 
                everyone. We believe that travel has the power to transform lives, broaden horizons, 
                and create lasting memories. That's why we're committed to providing the best travel 
                experience possible.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <div className="image-content">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="currentColor"/>
                  </svg>
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div 
              className={`value-card ${hoveredValue === 0 ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredValue(0)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <div className="value-icon-wrapper" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>We strive for excellence in everything we do, from customer service to the travel experiences we create.</p>
            </div>
            <div 
              className={`value-card ${hoveredValue === 1 ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredValue(1)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <div className="value-icon-wrapper" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Trust</h3>
              <p>Building lasting relationships based on trust, transparency, and reliability with our customers.</p>
            </div>
            <div 
              className={`value-card ${hoveredValue === 2 ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredValue(2)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <div className="value-icon-wrapper" style={{ background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>Continuously innovating to provide the best technology and services in the travel industry.</p>
            </div>
            <div 
              className={`value-card ${hoveredValue === 3 ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredValue(3)}
              onMouseLeave={() => setHoveredValue(null)}
            >
              <div className="value-icon-wrapper" style={{ background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' }}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99871 7.05 2.99871C5.59096 2.99871 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6054C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Passion</h3>
              <p>We're passionate about travel and helping others experience the joy of discovering new places.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-milestones section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-subtitle">Key milestones in our growth and success</p>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2010</div>
              <div className="timeline-content">
                <h3>Founded</h3>
                <p>Started as a small local travel agency with a vision to make travel accessible to everyone.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-content">
                <h3>Global Expansion</h3>
                <p>Expanded operations to serve customers across multiple continents with 50+ destinations.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2018</div>
              <div className="timeline-content">
                <h3>100K Customers</h3>
                <p>Reached a milestone of 100,000 satisfied customers and established partnerships with major airlines.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h3>Industry Leader</h3>
                <p>Now serving 500K+ customers with 150+ destinations and 50+ partner airlines worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-number">500K+</div>
              <div className="feature-details">
                <h3>Happy Customers</h3>
                <p>Join hundreds of thousands of satisfied travelers who trust us with their journeys.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-number">150+</div>
              <div className="feature-details">
                <h3>Destinations</h3>
                <p>Access to over 150 destinations worldwide, from popular cities to hidden gems.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="currentColor"/>
                </svg>
              </div>
              <div className="feature-number">50+</div>
              <div className="feature-details">
                <h3>Partner Airlines</h3>
                <p>Partnerships with leading airlines to offer you the best routes and prices.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-number">24/7</div>
              <div className="feature-details">
                <h3>Support</h3>
                <p>Round-the-clock customer support to assist you whenever you need help.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta section">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Travel with Us?</h2>
            <p>Start planning your next adventure today</p>
            <div className="cta-buttons">
              <a href="/" className="btn btn-primary">Book a Flight</a>
              <a href="/contact" className="btn btn-secondary">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

