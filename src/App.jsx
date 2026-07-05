import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Contact from './pages/Contact'
import Demo from './pages/Demo'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* Dev stage banner */}
      <div style={{
        background: 'var(--teal-dark)',
        color: '#cdd6d0',
        textAlign: 'center',
        padding: '8px 20px',
        fontSize: 12,
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        letterSpacing: '0.02em',
      }}>
        🚧 &nbsp;We're currently building something meaningful. Early access &amp; partnerships welcome —{' '}
        <a href="/contact" style={{ color: '#f8f8ec', fontWeight: 700, textDecoration: 'underline' }}>
          get in touch
        </a>
      </div>
      <Navbar />
      {
        /* Main content routes */
      }

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
