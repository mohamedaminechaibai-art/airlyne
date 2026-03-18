import { useState } from 'react'
import './FlightSearch.css'

const FlightSearch = () => {
  const [searchType, setSearchType] = useState('round-trip')
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: 1,
    class: 'economy'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Search functionality would be implemented here!')
    // In a real app, this would trigger a flight search API call
  }

  return (
    <div className="flight-search">
      <div className="search-tabs">
        <button 
          className={searchType === 'round-trip' ? 'active' : ''}
          onClick={() => setSearchType('round-trip')}
        >
          Round Trip
        </button>
        <button 
          className={searchType === 'one-way' ? 'active' : ''}
          onClick={() => setSearchType('one-way')}
        >
          One Way
        </button>
        <button 
          className={searchType === 'multi-city' ? 'active' : ''}
          onClick={() => setSearchType('multi-city')}
        >
          Multi City
        </button>
      </div>

      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>From</label>
            <input
              type="text"
              name="from"
              placeholder="City or Airport"
              value={formData.from}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>To</label>
            <input
              type="text"
              name="to"
              placeholder="City or Airport"
              value={formData.to}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Departure Date</label>
            <input
              type="date"
              name="departDate"
              value={formData.departDate}
              onChange={handleChange}
              required
            />
          </div>
          {searchType === 'round-trip' && (
            <div className="form-group">
              <label>Return Date</label>
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                required
              />
            </div>
          )}
          <div className="form-group">
            <label>Passengers</label>
            <select
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Passenger' : 'Passengers'}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Class</label>
            <select
              name="class"
              value={formData.class}
              onChange={handleChange}
            >
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary search-btn">
          Search Flights
        </button>
      </form>
    </div>
  )
}

export default FlightSearch

