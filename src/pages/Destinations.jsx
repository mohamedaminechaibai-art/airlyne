import { useState } from 'react'
import './Destinations.css'

const Destinations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredCard, setHoveredCard] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const destinations = [
    { id: 1, name: 'Paris, France', category: 'europe', price: 599, image: 'paris', description: 'City of Light and Romance', rating: 4.8, duration: '7 days' },
    { id: 2, name: 'Tokyo, Japan', category: 'asia', price: 899, image: 'tokyo', description: 'Modern Metropolis', rating: 4.9, duration: '10 days' },
    { id: 3, name: 'New York, USA', category: 'americas', price: 699, image: 'newyork', description: 'The Big Apple', rating: 4.7, duration: '5 days' },
    { id: 4, name: 'Dubai, UAE', category: 'middle-east', price: 799, image: 'dubai', description: 'Desert Luxury', rating: 4.8, duration: '6 days' },
    { id: 5, name: 'London, UK', category: 'europe', price: 649, image: 'london', description: 'Historic Capital', rating: 4.6, duration: '7 days' },
    { id: 6, name: 'Sydney, Australia', category: 'oceania', price: 1099, image: 'sydney', description: 'Harbor City', rating: 4.9, duration: '12 days' },
    { id: 7, name: 'Barcelona, Spain', category: 'europe', price: 549, image: 'barcelona', description: 'Mediterranean Gem', rating: 4.7, duration: '6 days' },
    { id: 8, name: 'Singapore', category: 'asia', price: 749, image: 'singapore', description: 'Garden City', rating: 4.8, duration: '5 days' },
    { id: 9, name: 'Rome, Italy', category: 'europe', price: 579, image: 'rome', description: 'Eternal City', rating: 4.9, duration: '8 days' },
    { id: 10, name: 'Bali, Indonesia', category: 'asia', price: 699, image: 'bali', description: 'Island Paradise', rating: 4.8, duration: '10 days' },
    { id: 11, name: 'Los Angeles, USA', category: 'americas', price: 749, image: 'losangeles', description: 'City of Angels', rating: 4.6, duration: '6 days' },
    { id: 12, name: 'Cairo, Egypt', category: 'africa', price: 599, image: 'cairo', description: 'Ancient Wonders', rating: 4.7, duration: '7 days' },
  ]

  const categories = [
    { id: 'all', name: 'All Destinations', icon: '🌍' },
    { id: 'europe', name: 'Europe', icon: '🏛️' },
    { id: 'asia', name: 'Asia', icon: '🏮' },
    { id: 'americas', name: 'Americas', icon: '🗽' },
    { id: 'middle-east', name: 'Middle East', icon: '🕌' },
    { id: 'oceania', name: 'Oceania', icon: '🌊' },
    { id: 'africa', name: 'Africa', icon: '🦁' },
  ]

  const normalizedQuery = searchQuery.trim().toLowerCase()

  const filteredDestinations = destinations.filter((dest) => {
    const matchesCategory = selectedCategory === 'all' || dest.category === selectedCategory
    if (!matchesCategory) return false

    if (!normalizedQuery) return true

    const haystack = `${dest.name} ${dest.description} ${dest.category}`.toLowerCase()
    return haystack.includes(normalizedQuery)
  })

  return (
    <div className="destinations-page">
      <section className="destinations-hero section">
        <div className="container">
          <div className="hero-content-wrapper">
            <h1 className="section-title">Explore Amazing Destinations</h1>
            <p className="section-subtitle">
              Discover the world's most beautiful places and plan your next adventure
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">150+</div>
                <div className="hero-stat-label">Destinations</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">50+</div>
                <div className="hero-stat-label">Countries</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">500K+</div>
                <div className="hero-stat-label">Travelers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="destinations-content section">
        <div className="container">
          <div className="destinations-toolbar">
            <div className="destination-search" role="search">
              <span className="search-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations (e.g., Paris, Asia, beach...)"
                aria-label="Search destinations"
              />
              {searchQuery.trim() ? (
                <button
                  type="button"
                  className="search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  title="Clear"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ) : null}
            </div>

            <div className="destinations-meta" aria-live="polite">
              <span className="results-count">{filteredDestinations.length} results</span>
            </div>
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <span className="filter-icon">{category.icon}</span>
                <span className="filter-text">{category.name}</span>
              </button>
            ))}
          </div>

          {filteredDestinations.length ? (
            <div className="destinations-grid-full">
              {filteredDestinations.map(destination => (
                <div 
                  key={destination.id} 
                  className={`destination-card-full ${hoveredCard === destination.id ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredCard(destination.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`destination-image-full ${destination.image}`}>
                    <div className="destination-overlay">
                      <div className="destination-badge">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                        </svg>
                        <span>{destination.rating}</span>
                      </div>
                      <div className="destination-price-wrapper">
                        <span className="destination-price-label">Starting from</span>
                        <span className="destination-price">${destination.price}</span>
                      </div>
                    </div>
                    <div className="destination-duration">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{destination.duration}</span>
                    </div>
                  </div>
                  <div className="destination-content-full">
                    <div className="destination-header">
                      <h3>{destination.name}</h3>
                      <div className="destination-location">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    <p className="destination-description">{destination.description}</p>
                    <button className="destination-btn">
                      <span>Explore Now</span>
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="destinations-empty">
              <div className="empty-icon" aria-hidden="true">🔎</div>
              <h3>No destinations found</h3>
              <p>
                Try a different keyword, or clear the search.
              </p>
              <div className="empty-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                  }}
                >
                  Reset filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Destinations

