import { useCallback, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // localStorage unavailable (private mode, blocked cookies)
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function NotFound() {
  return (
    <div className="container section" style={{ textAlign: 'center' }}>
      <h1 className="section-title">404 – Page not found</h1>
      <p className="section-subtitle">The page you are looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">Back to home</Link>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  const toggleTheme = useCallback(
    () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
    []
  )

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    root.style.colorScheme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // ignore storage errors
    }
  }, [theme])

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
