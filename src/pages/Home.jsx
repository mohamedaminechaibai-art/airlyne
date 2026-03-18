import { useState, useEffect, useRef } from 'react'
import FlightSearch from '../components/FlightSearch'
import './Home.css'

const Home = () => {
  const heroRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 })
  const [cursorPosition, setCursorPosition] = useState({ x: 50, y: 50 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setMousePosition({ x, y })
        setCursorPosition({ 
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        })
      }
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    const hero = heroRef.current
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove)
      hero.addEventListener('mouseenter', handleMouseEnter)
      hero.addEventListener('mouseleave', handleMouseLeave)
      return () => {
        hero.removeEventListener('mousemove', handleMouseMove)
        hero.removeEventListener('mouseenter', handleMouseEnter)
        hero.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [])

  return (
    <div className="home">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="hero"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #667eea 0%, #764ba2 50%, #667eea 100%)`
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Discover the World with
              <span className="highlight"> Air Agency</span>
            </h1>
            <p className="hero-subtitle">
              Your gateway to unforgettable journeys. Book flights, explore destinations, 
              and experience premium travel services tailored just for you.
            </p>
            <div className="hero-buttons">
              <a href="#search" className="btn btn-primary">Book Now</a>
              <a href="/destinations" className="btn btn-secondary">Explore</a>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div 
          className={`cursor-glow ${isHovering ? 'active' : ''}`}
          style={{
            left: `${cursorPosition.x}%`,
            top: `${cursorPosition.y}%`,
          }}
        ></div>
      </section>

      {/* Flight Search Section */}
      <section id="search" className="search-section section">
        <div className="container">
          <h2 className="section-title">Find Your Perfect Flight</h2>
          <p className="section-subtitle">
            Search and compare flights from hundreds of airlines worldwide
          </p>
          <FlightSearch />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <h2 className="section-title">Why Choose Air Agency?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global Coverage</h3>
              <p>Access to flights and destinations worldwide with the best prices guaranteed.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Instant Booking</h3>
              <p>Book your flights in minutes with our streamlined booking process.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock customer support to assist you whenever you need help.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Competitive pricing with exclusive deals and discounts for our customers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✈️</div>
              <h3>Premium Service</h3>
              <p>Experience luxury travel with our premium service packages.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Flexible Options</h3>
              <p>Change or cancel your bookings with flexible options and policies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations Preview */}
      <section className="destinations-preview section">
        <div className="container">
          <h2 className="section-title">Popular Destinations</h2>
          <p className="section-subtitle">
            Explore our most sought-after travel destinations
          </p>
          <div className="destinations-grid">
            <div className="destination-card">
              <div className="destination-image paris"></div>
              <div className="destination-info">
                <h3>Paris, France</h3>
                <p>City of Light</p>
                <span className="price">From $599</span>
              </div>
            </div>
            <div className="destination-card">
              <div className="destination-image tokyo"></div>
              <div className="destination-info">
                <h3>Tokyo, Japan</h3>
                <p>Modern Metropolis</p>
                <span className="price">From $899</span>
              </div>
            </div>
            <div className="destination-card">
              <div className="destination-image newyork"></div>
              <div className="destination-info">
                <h3>New York, USA</h3>
                <p>The Big Apple</p>
                <span className="price">From $699</span>
              </div>
            </div>
            <div className="destination-card">
              <div className="destination-image dubai"></div>
              <div className="destination-info">
                <h3>Dubai, UAE</h3>
                <p>Desert Luxury</p>
                <span className="price">From $799</span>
              </div>
            </div>
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <a href="/destinations" className="btn btn-primary">View All Destinations</a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500K+</div>
              <div className="stat-label">Happy Travelers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Destinations</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Airlines</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

