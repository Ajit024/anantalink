import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Solutions', to: '/solutions' },
  { label: 'About',     to: '/about'     },
  { label: 'Contact',   to: '/contact'   },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const { pathname }            = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(248,248,236,0.95)' : 'var(--bg-base)',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border-soft)' : '1px solid transparent',
      boxShadow: scrolled ? '0 1px 12px rgba(58,90,100,0.08)' : 'none',
    }}>
      <div className="container" style={{ display:'flex', alignItems:'center', height: 70 }}>

        {/* Logo — using actual brand image */}
        <Link to="/" style={{ display:'flex', alignItems:'center', flex:'none' }}>
          <img
            src="/images/LogoWSalogan.png"
            alt="Anantlink — Innovating Care with Connected Solutions"
            style={{
              height: 60,
              width: 'auto',
              /* The logo has black bg — multiply blends it away on light bg */
              mixBlendMode: 'multiply',
              objectFit: 'contain',
            }}
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display:'flex', alignItems:'center', gap: 2, marginLeft:'auto' }}
             className="desktop-nav">
          {NAV_LINKS.map(({ label, to }) => (
            <Link key={to} to={to} style={{
              padding: '8px 16px',
              borderRadius: 7,
              fontSize: 14,
              fontWeight: 500,
              fontFamily: 'var(--font-body)',
              color: pathname === to ? 'var(--accent)' : 'var(--text-secondary)',
              background: pathname === to ? 'var(--accent-light)' : 'transparent',
              transition: 'all 0.18s',
            }}
            onMouseEnter={e => { if (pathname !== to) { e.currentTarget.style.color='var(--text-primary)'; e.currentTarget.style.background='var(--bg-surface)' } }}
            onMouseLeave={e => { if (pathname !== to) { e.currentTarget.style.color='var(--text-secondary)'; e.currentTarget.style.background='transparent' } }}
            >{label}</Link>
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ marginLeft: 14, padding:'10px 20px', fontSize:13 }}>
            Request Demo
          </Link>
        </nav>

        {/* Hamburger */}
        <button onClick={() => setOpen(o => !o)} aria-label="Menu"
          className="hamburger"
          style={{ marginLeft:'auto', background:'none', border:'none', cursor:'pointer', display:'none', flexDirection:'column', gap:5, padding:8 }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              display:'block', width:22, height:2,
              background: 'var(--teal-dark)',
              borderRadius:2, transition:'all 0.22s ease',
              transform: open ? i===0 ? 'translateY(7px) rotate(45deg)' : i===2 ? 'translateY(-7px) rotate(-45deg)' : 'scaleX(0)' : 'none',
              opacity: open && i===1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          display:'flex', flexDirection:'column', gap:4,
          padding:'12px 20px 20px',
          borderTop:'1px solid var(--border-soft)',
          background:'var(--bg-base)',
        }}>
          {NAV_LINKS.map(({ label, to }) => (
            <Link key={to} to={to} style={{
              padding:'12px 14px', borderRadius:8, fontSize:15, fontWeight:500,
              color: pathname===to ? 'var(--accent)' : 'var(--text-primary)',
              background: pathname===to ? 'var(--accent-light)' : 'transparent',
            }}>{label}</Link>
          ))}
          <Link to="/contact" className="btn btn-primary" style={{ marginTop:8, justifyContent:'center' }}>
            Request Demo
          </Link>
        </div>
      )}

      <style>{`
        @media(max-width:768px){
          .desktop-nav { display:none !important; }
          .hamburger   { display:flex !important; }
        }
      `}</style>
    </header>
  )
}
