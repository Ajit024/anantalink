import { Link } from 'react-router-dom'

const SOLUTIONS = [
  'Patient Monitoring',
  'RTLS Asset Tracking',
  'Hospital Automation',
  'Digital Twin Platform',
  'BLE IoT Infrastructure',
  'AI Analytics Dashboard',
]

const COMPANY = [
  { label: 'About Us',  to: '/about' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Contact',   to: '/contact' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--teal-dark)',
      color: '#cdd6d0',
      paddingTop: 64,
    }}>
      <div className="container">
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(190px, 1fr))',
          gap:48, paddingBottom:56,
        }}>
          {/* Brand */}
          <div>
            <Link to="/" style={{ display:'block', marginBottom:18 }}>
              <img
                src="/images/logoNslogan.png"
                alt="AnantLink"
                style={{
                  height: 48,
                  width: 'auto',
                  objectFit:'contain',
                  filter:'brightness(1.4) saturate(0.6)',
                }}
              />
            </Link>
            <p style={{ color:'#aababa', fontSize:14, lineHeight:1.7, maxWidth:240 }}>
              Innovating Care with Connected Solutions — a modular IoMT platform for smart hospitals.
            </p>
            <div style={{ display:'flex', gap:10, marginTop:22 }}>
              {[
                { s:'LI', h:"https://www.linkedin.com/company/anantlink"},
                { s:'TW', h:'#' },
                { s:'YT', h:'#' },
              ].map(p => (
                <a key={p.s} href={p.h} style={{
                  width:34, height:34,
                  border:'1px solid rgba(205,214,208,0.25)',
                  borderRadius:7,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'#aababa', fontSize:10, fontWeight:700,
                  transition:'all 0.2s',
                }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='#cdd6d0';e.currentTarget.style.color='#f8f8ec'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(205,214,208,0.25)';e.currentTarget.style.color='#aababa'}}
                >{p.s}</a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ fontFamily:'var(--font-body)', fontSize:11, fontWeight:700, color:'#cdd6d0', marginBottom:18, letterSpacing:'0.12em', textTransform:'uppercase' }}>
              Solutions
            </h4>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
              {SOLUTIONS.map(s => (
                <li key={s}>
                  <Link to="/solutions" style={{ color:'#aababa', fontSize:14, transition:'color 0.18s' }}
                    onMouseEnter={e=>e.currentTarget.style.color='#f8f8ec'}
                    onMouseLeave={e=>e.currentTarget.style.color='#aababa'}
                  >{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily:'var(--font-body)', fontSize:11, fontWeight:700, color:'#cdd6d0', marginBottom:18, letterSpacing:'0.12em', textTransform:'uppercase' }}>
              Company
            </h4>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
              {COMPANY.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} style={{ color:'#aababa', fontSize:14, transition:'color 0.18s' }}
                    onMouseEnter={e=>e.currentTarget.style.color='#f8f8ec'}
                    onMouseLeave={e=>e.currentTarget.style.color='#aababa'}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily:'var(--font-body)', fontSize:11, fontWeight:700, color:'#cdd6d0', marginBottom:18, letterSpacing:'0.12em', textTransform:'uppercase' }}>
              Get In Touch
            </h4>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              <FRow icon="📍" text="Hyderabad" />
              <FRow icon="✉️" text="contact@anantlink.com" />
              <FRow icon="📞" text="+91 91487-14987 (whatsapp only)" />
            </div>
            <div style={{ marginTop:22 }}>
              <span style={{
                display:'inline-block', padding:'5px 13px',
                background:'rgba(205,214,208,0.12)',
                border:'1px solid rgba(205,214,208,0.2)',
                borderRadius:100, fontSize:11, fontWeight:600,
                color:'#cdd6d0', letterSpacing:'0.07em', textTransform:'uppercase',
              }}>Compliance-First Design</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop:'1px solid rgba(205,214,208,0.15)',
          padding:'22px 0',
          display:'flex', justifyContent:'space-between', alignItems:'center',
          flexWrap:'wrap', gap:10,
        }}>
          <p style={{ color:'#6a8a90', fontSize:12 }}>
            © {new Date().getFullYear()} AnantLink · All rights reserved.
          </p>
          <div style={{ display:'flex', gap:20 }}>
            {['Privacy Policy','Terms of Use'].map(l => (
              <a key={l} href="#" style={{ color:'#6a8a90', fontSize:12, transition:'color 0.18s' }}
                onMouseEnter={e=>e.currentTarget.style.color='#aababa'}
                onMouseLeave={e=>e.currentTarget.style.color='#6a8a90'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FRow({ icon, text }) {
  return (
    <div style={{ display:'flex', alignItems:'flex-start', gap:10 }}>
      <span style={{ fontSize:13, marginTop:2 }}>{icon}</span>
      <span style={{ color:'#aababa', fontSize:14 }}>{text}</span>
    </div>
  )
}
