import { BrowserRouter, Routes, Route, StaticRouter, useLocation } from 'react-router'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import About from './pages/About'
import Contact from './pages/Contact'
import Demo from './pages/Demo'
import Experience from './pages/Experience'
import RouteMetadata from './components/RouteMetadata'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export function SiteContent() {
  return (
    <>
      <ScrollToTop />
      <RouteMetadata />
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
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </>
  )
}

export { StaticRouter }

export default function App() {
  return <BrowserRouter><SiteContent /></BrowserRouter>
}
