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
      color: '#d2dbc8',
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
                src="/assets/LogoWSalogan.png"
                alt="Anantlink"
                style={{
                  height: 48,
                  width: 'auto',
                  objectFit:'contain',
                  filter:'brightness(1.4) saturate(0.6)',
                }}
              />
            </Link>
            <p style={{ color:'#9bb5ba', fontSize:14, lineHeight:1.7, maxWidth:240 }}>
              Innovating Care with Connected Solutions — India's modular IoMT platform for smart hospitals.
            </p>
            <div style={{ display:'flex', gap:10, marginTop:22 }}>
              {[
                { s:'LI', h:"https://www.linkedin.com/company/anantlink"},
                { s:'TW', h:'#' },
                { s:'YT', h:'#' },
              ].map(p => (
                <a key={p.s} href={p.h} style={{
                  width:34, height:34,
                  border:'1px solid rgba(210,219,200,0.25)',
                  borderRadius:7,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'#9bb5ba', fontSize:10, fontWeight:700,
                  transition:'all 0.2s',
                }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='#d2dbc8';e.currentTarget.style.color='#f8f8ec'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(210,219,200,0.25)';e.currentTarget.style.color='#9bb5ba'}}
                >{p.s}</a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ fontFamily:'var(--font-body)', fontSize:11, fontWeight:700, color:'#d2dbc8', marginBottom:18, letterSpacing:'0.12em', textTransform:'uppercase' }}>
              Solutions
            </h4>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
              {SOLUTIONS.map(s => (
                <li key={s}>
                  <Link to="/solutions" style={{ color:'#9bb5ba', fontSize:14, transition:'color 0.18s' }}
                    onMouseEnter={e=>e.currentTarget.style.color='#f8f8ec'}
                    onMouseLeave={e=>e.currentTarget.style.color='#9bb5ba'}
                  >{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily:'var(--font-body)', fontSize:11, fontWeight:700, color:'#d2dbc8', marginBottom:18, letterSpacing:'0.12em', textTransform:'uppercase' }}>
              Company
            </h4>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:10 }}>
              {COMPANY.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} style={{ color:'#9bb5ba', fontSize:14, transition:'color 0.18s' }}
                    onMouseEnter={e=>e.currentTarget.style.color='#f8f8ec'}
                    onMouseLeave={e=>e.currentTarget.style.color='#9bb5ba'}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily:'var(--font-body)', fontSize:11, fontWeight:700, color:'#d2dbc8', marginBottom:18, letterSpacing:'0.12em', textTransform:'uppercase' }}>
              Get In Touch
            </h4>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              <FRow icon="📍" text="Bengaluru, Karnataka, India" />
              <FRow icon="✉️" text="contact@anantlink.com" />
              <FRow icon="📞" text="+91 91487-14987 (whatsapp only)" />
            </div>
            <div style={{ marginTop:22 }}>
              <span style={{
                display:'inline-block', padding:'5px 13px',
                background:'rgba(210,219,200,0.12)',
                border:'1px solid rgba(210,219,200,0.2)',
                borderRadius:100, fontSize:11, fontWeight:600,
                color:'#d2dbc8', letterSpacing:'0.07em', textTransform:'uppercase',
              }}>NABH Ready</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop:'1px solid rgba(210,219,200,0.15)',
          padding:'22px 0',
          display:'flex', justifyContent:'space-between', alignItems:'center',
          flexWrap:'wrap', gap:10,
        }}>
          <p style={{ color:'#6a8a90', fontSize:12 }}>
            © {new Date().getFullYear()} Anantlink Technology Pvt. Ltd. · All rights reserved.
          </p>
          <div style={{ display:'flex', gap:20 }}>
            {['Privacy Policy','Terms of Use'].map(l => (
              <a key={l} href="#" style={{ color:'#6a8a90', fontSize:12, transition:'color 0.18s' }}
                onMouseEnter={e=>e.currentTarget.style.color='#9bb5ba'}
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
      <span style={{ color:'#9bb5ba', fontSize:14 }}>{text}</span>
    </div>
  )
}
