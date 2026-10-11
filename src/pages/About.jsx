import { Link } from 'react-router'
import { Stethoscope, Building2, ShieldCheck, Workflow } from 'lucide-react'
import IsometricHospital from '../components/IsometricHospital'

const VALUES = [
  { Icon:Stethoscope, title:'Clinical first', desc:"We start with the workflow: what a clinician needs to see, when they need it, and what should happen next." },
  { Icon:Building2, title:'Built for hospital conditions', desc:'Connectivity, existing devices, and local operating requirements shape how we design the platform.' },
  { Icon:ShieldCheck, title:'Security by design', desc:'Access controls and deployment choices are part of the system design from the start.' },
  { Icon:Workflow, title:'Designed to connect', desc:'The platform is being built to work with existing hospital systems and equipment.' },
]

const TEAM = [
  { name:'Sushma Kumari', role:'Co-Founder & CEO', bg:'Building AnantLink around the day-to-day realities of hospital teams.' },
  { name:'Ajit', role:'Co-Founder & CTO', bg:'Leading the platform and connected-device architecture.' },
  // { name:'Dr. Priya Nair', role:'Co-Founder & CMO', bg:'Intensivist and clinical informaticist. Spent a decade in ICU care watching data gaps cost lives. AIIMS trained.' },
  // { name:'Suresh Iyer', role:'CTO', bg:'15 years in embedded systems and wireless networking. Ex-Cisco. Knows what breaks in the field.' },
  // { name:'Ananya Rao', role:'Head of Product', bg:'Healthcare UX designer who has spent years in hospital corridors watching workflows. IIM Bangalore MBA.' },
]

export default function About() {
  return (
    <main>
      {/* ── HERO ──────────────────────────────────── */}
      <section style={{ position:'relative', padding:'68px 0 64px', background:'var(--bg-surface)', overflow:'hidden' }}>
        <div className="dot-bg" />
        <div className="container about-hero-grid" style={{ position:'relative', zIndex:1 }}>
          <div>
            <div className="section-label">About AnantLink</div>
            <h1 style={{ fontSize:'clamp(34px,5vw,62px)', fontWeight:400, letterSpacing:'-0.02em', lineHeight:1.1, marginBottom:24 }}>
              Software shaped around the way hospitals work.
            </h1>
            <p style={{ color:'var(--text-secondary)', fontSize:17, lineHeight:1.8 }}>
              AnantLink is an early-stage team building connected-care tools for hospitals. We bring patient signals, devices, and operational workflows into one view.
            </p>
          </div>
          <IsometricHospital />
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }} className="mission-grid">
            <div>
              <div className="section-label">Our Mission</div>
              <h2 style={{ fontSize:'clamp(26px,3.5vw,42px)', fontWeight:400, lineHeight:1.2, marginBottom:22 }}>
                Give every hospital<br/>
                <em style={{ color:'var(--accent)', fontStyle:'italic' }}>the data it needs.</em>
              </h2>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.8, fontSize:16, marginBottom:32 }}>
                Our goal is to make relevant information easier to reach—whether it comes from a bedside monitor, a room sensor, or an existing hospital system. The platform is modular, so teams can begin with a focused workflow.
              </p>
              <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Partner with us</Link>
                <Link to="/solutions" className="btn btn-ghost">See the platform →</Link>
              </div>
            </div>

            <figure className="about-architecture-figure">
              <img src="/images/anantlink-iomt-architecture.png" alt="AnantLink architecture: medical devices, sensors, and assets connect through local gateways to platform services and staff dashboards" loading="lazy" />
              <figcaption>How signals move from hospital devices to the views care teams use.</figcaption>
            </figure>
          </div>
        </div>
        <style>{`@media(max-width:768px){.mission-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── VALUES ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-label">How We Work</div>
          <h2 style={{ fontSize:'clamp(24px,3.5vw,40px)', fontWeight:400, marginBottom:44 }}>
            Principles we don't compromise on.
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(250px, 1fr))', gap:18 }}>
            {VALUES.map(v => (
              <div key={v.title} className="card iso-raised">
                <div className="about-value-icon"><v.Icon size={21}/></div>
                <h3 style={{ fontFamily:'var(--font-head)', fontSize:20, fontWeight:400, marginBottom:10 }}>{v.title}</h3>
                <p style={{ color:'var(--text-secondary)', fontSize:14, lineHeight:1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ──────────────────────────────────── */}
      <section style={{ background:'var(--bg-surface)', padding:'80px 0' }}>
        <div className="container">
          <div className="section-label">The Team</div>
          <h2 style={{ fontSize:'clamp(24px,3.5vw,40px)', fontWeight:400, marginBottom:48 }}>
            A small team building for hospital workflows.
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(240px, 1fr))', gap:20 }}>
            {TEAM.map(t => (
              <div key={t.name} className="card iso-raised team-card">
                <div style={{
                  width:56, height:56, borderRadius:'50%',
                  background:'linear-gradient(135deg, var(--sage), var(--blue-light))',
                  border:'2px solid var(--border)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontFamily:'var(--font-head)', fontSize:22, color:'var(--teal-dark)',
                  marginBottom:18,
                }}>{t.name.charAt(0)}</div>
                <h3 style={{ fontFamily:'var(--font-head)', fontSize:18, fontWeight:400, marginBottom:4 }}>{t.name}</h3>
                <div style={{ color:'var(--accent)', fontSize:12, fontWeight:600, letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:12 }}>{t.role}</div>
                <p style={{ color:'var(--text-secondary)', fontSize:13, lineHeight:1.7 }}>{t.bg}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section style={{ padding:'80px 0', textAlign:'center' }}>
        <div className="container" style={{ maxWidth:520 }}>
          <h2 style={{ fontSize:'clamp(24px,3.5vw,42px)', fontWeight:400, marginBottom:16 }}>
            Want to build this with us?
          </h2>
          <p style={{ color:'var(--text-secondary)', fontSize:16, marginBottom:32, lineHeight:1.7 }}>
            We're hiring engineers, looking for clinical advisors, and actively seeking hospital pilot partners.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize:15 }}>
            Let's talk →
          </Link>
        </div>
      </section>
    </main>
  )
}
