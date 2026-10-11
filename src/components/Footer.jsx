import { Link } from 'react-router'
import { Instagram, Linkedin, Mail, MapPin, MessageCircle, Youtube } from 'lucide-react'

const SOLUTIONS = [
  'Patient Monitoring',
  'Self Service Kiosk',
  'Environmental Monitoring',
  'RTLS Asset Tracking',
  'Hospital Automation',
  'Digital Twin Platform',
  'BLE IoT Infrastructure',
  'AI Analytics Dashboard',
]

const COMPANY = [
  { label: 'About Us',  to: '/about' },
  { label: 'Hospital in Motion', to: '/experience' },
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
                { label:'AnantLink on LinkedIn', Icon:Linkedin, href:'https://www.linkedin.com/company/anantlink' },
                { label:'AnantLink on YouTube', Icon:Youtube, href:'https://www.youtube.com/@AnantLink' },
                { label:'AnantLink on Instagram', Icon:Instagram, href:'https://www.instagram.com/anantlink/' },
              ].map(({ label, Icon, href }) => (
                <a key={label} aria-label={label} href={href} target="_blank" rel="noreferrer" style={{
                  width:34, height:34,
                  border:'1px solid rgba(205,214,208,0.25)',
                  borderRadius:7,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  color:'#aababa', fontSize:10, fontWeight:700,
                  transition:'all 0.2s',
                }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='#cdd6d0';e.currentTarget.style.color='#f8f8ec'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(205,214,208,0.25)';e.currentTarget.style.color='#aababa'}}
                ><Icon size={16}/></a>
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
              <FRow Icon={MapPin} text="Registered office · Hyderabad, Telangana, India" />
              <FRow Icon={MapPin} text="Working locations · Hospital and pilot sites across India" />
              <FRow Icon={Mail} text="contact@anantlink.com" href="mailto:contact@anantlink.com" />
              <FRow Icon={MessageCircle} text="+91 91487-14987 · WhatsApp" href="https://wa.me/919148714987" />
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
        </div>
      </div>
    </footer>
  )
}

function FRow({ Icon, text, href }) {
  const content = <><Icon size={15}/><span style={{ color:'#aababa', fontSize:14 }}>{text}</span></>
  return (
    href ? <a className="footer-contact-link" href={href}>{content}</a> : <div className="footer-contact-link">{content}</div>
  )
}
