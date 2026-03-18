import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    // Newsletter subscription logic would go here
    alert('Thank you for subscribing to our newsletter!')
    e.target.reset()
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="footer-logo-container">
                <div className="footer-logo-icon-wrapper">
                  <svg className="footer-logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="footer-logo-text-wrapper">
                  <span className="footer-logo-text-main">Air Agency</span>
                  <span className="footer-logo-text-sub">Premium Travel</span>
                </div>
              </div>
            </div>
            <p className="footer-description">
              Your trusted partner for premium travel experiences. 
              We make your journey seamless and memorable.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.28445C14.0247 3.61173 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.8021C15.2063 14.5519 14.5932 15.1635 13.8416 15.5524C13.0901 15.9413 12.2385 16.0858 11.4078 15.965C10.5771 15.8442 9.80976 15.4648 9.21485 14.87C8.61993 14.2751 8.24053 13.5078 8.11972 12.6771C7.99891 11.8464 8.14349 10.9948 8.53236 10.2432C8.92123 9.49167 9.53279 8.87858 10.2826 8.49108C11.0325 8.10357 11.8825 7.96146 12.7148 8.08481C13.5809 8.21234 14.3858 8.60723 15.0194 9.24081C15.653 9.87439 16.0479 10.6793 16.1754 11.5454L16 11.37Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/destinations">Destinations</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Flight Booking</a></li>
              <li><a href="#">Hotel Reservations</a></li>
              <li><a href="#">Travel Packages</a></li>
              <li><a href="#">Visa Assistance</a></li>
              <li><a href="#">Travel Insurance</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <ul className="contact-info">
              <li>
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>123 Aviation Street, Sky City</span>
              </li>
              <li>
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7292C21.7209 20.9841 21.5573 21.2126 21.3523 21.3992C21.1472 21.5857 20.9053 21.7262 20.6419 21.8116C20.3786 21.897 20.0995 21.9254 19.82 21.895C16.7428 21.5356 13.787 20.5301 11.19 18.96C8.77382 17.5542 6.72533 15.6457 5.19 13.38C3.80486 11.3401 2.85334 9.02139 2.39 6.58C2.35958 6.30052 2.38805 6.02144 2.47348 5.75812C2.55892 5.4948 2.69938 5.25295 2.88593 5.04788C3.07248 4.84281 3.30098 4.67926 3.55593 4.56767C3.81088 4.45608 4.08659 4.39908 4.365 4.4H7.365C7.90024 4.39553 8.42362 4.56121 8.85512 4.87259C9.28662 5.18397 9.60436 5.62689 9.765 6.14L11.045 9.79C11.1892 10.2839 11.2162 10.8092 11.1232 11.3181C11.0302 11.827 10.8197 12.3041 10.51 12.71C10.3764 12.8968 10.3053 13.1222 10.3071 13.3525C10.3089 13.5828 10.3835 13.8067 10.52 13.99L12.1 16.26C12.2365 16.4433 12.3111 16.6672 12.3129 16.8975C12.3147 17.1278 12.2436 17.3532 12.11 17.54C11.7041 17.8497 11.227 18.0602 10.7181 18.1532C10.2092 18.2462 9.6839 18.2192 9.19 18.075L5.54 16.795C5.02689 16.6344 4.58397 16.3166 4.27259 15.8851C3.96121 15.4536 3.79553 14.9302 3.8 14.395V11.395C3.8 10.625 4.105 9.886 4.65 9.33C5.195 8.774 5.934 8.469 6.704 8.469C7.474 8.469 8.213 8.774 8.769 9.33L14.67 15.231C15.226 15.787 15.531 16.526 15.531 17.296C15.531 18.066 15.226 18.805 14.67 19.361C14.114 19.906 13.375 20.211 12.605 20.211H11.605" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="L22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>info@airagency.com</span>
              </li>
              <li>
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-newsletter">
          <div className="newsletter-content">
            <h3>Subscribe to Our Newsletter</h3>
            <p>Get the latest travel deals and exclusive offers delivered to your inbox</p>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit" className="newsletter-btn">
                <span>Subscribe</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Air Agency. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <span className="separator">•</span>
              <a href="#">Terms of Service</a>
              <span className="separator">•</span>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

