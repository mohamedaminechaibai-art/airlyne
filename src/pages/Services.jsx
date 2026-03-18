import { useState } from 'react'
import './Services.css'

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const services = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Flight Booking',
      description: 'Book flights to over 150 destinations worldwide with the best prices and flexible options.',
      features: ['Best Price Guarantee', '24/7 Booking Support', 'Flexible Cancellation'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Hotel Reservations',
      description: 'Find and book the perfect accommodation for your stay, from budget to luxury hotels.',
      features: ['Wide Selection', 'Best Rates', 'Instant Confirmation'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Travel Packages',
      description: 'All-inclusive travel packages combining flights, hotels, and activities for a seamless experience.',
      features: ['Customizable Packages', 'Group Discounts', 'Expert Planning'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Visa Assistance',
      description: 'Expert guidance and assistance with visa applications for destinations worldwide.',
      features: ['Document Review', 'Application Support', 'Fast Processing'],
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Travel Insurance',
      description: 'Comprehensive travel insurance coverage to protect your journey and give you peace of mind.',
      features: ['Full Coverage', '24/7 Emergency Support', 'Quick Claims'],
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 17H19L17 19H7L5 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M19 17V11C19 9.93913 18.5786 8.92172 17.8284 8.17157C17.0783 7.42143 16.0609 7 15 7H9C7.93913 7 6.92172 7.42143 6.17157 8.17157C5.42143 8.92172 5 9.93913 5 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 7V5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Car Rentals',
      description: 'Rent a car at your destination with competitive rates and convenient pickup locations.',
      features: ['Wide Fleet Selection', 'Best Prices', 'Easy Booking'],
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Travel Planning',
      description: 'Personalized travel planning services to create your perfect itinerary.',
      features: ['Custom Itineraries', 'Local Expertise', 'Budget Planning'],
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      ),
      title: 'VIP Services',
      description: 'Premium VIP services including airport lounge access, fast-track security, and concierge.',
      features: ['Lounge Access', 'Priority Services', 'Personal Concierge'],
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    }
  ]

  return (
    <div className="services-page">
      <section className="services-hero section">
        <div className="container">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">
            Comprehensive travel solutions tailored to meet all your needs
          </p>
        </div>
      </section>

      <section className="services-content section">
        <div className="container">
          <div className="services-intro">
            <h2 className="services-intro-title">Comprehensive Travel Solutions</h2>
            <p className="services-intro-text">
              From booking flights to planning entire journeys, we offer a complete range of services 
              designed to make your travel experience seamless and unforgettable.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`service-card ${hoveredCard === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="service-card-header">
                  <div 
                    className="service-icon-wrapper"
                    style={{ background: service.gradient }}
                  >
                    <div className="service-icon">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-check">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="service-btn">
                  <span>Learn More</span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-stats section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Satisfied Customers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">150+</div>
              <div className="stat-label">Destinations</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Contact us today and let our travel experts help you plan your perfect trip</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get in Touch</a>
              <a href="/destinations" className="btn btn-secondary">Explore Destinations</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

