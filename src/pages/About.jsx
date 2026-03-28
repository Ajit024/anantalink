import { Link } from 'react-router-dom'

const VALUES = [
  { icon:'🔬', title:'Clinical first', desc:"Every feature starts with a clinician's actual workflow. If it doesn't make care better, it doesn't ship." },
  { icon:'🇮🇳', title:'Built for India', desc:'Designed for NABH compliance, ABDM integration, variable infrastructure, and tight hospital budgets — not retrofitted from elsewhere.' },
  { icon:'🛡️', title:'Security by default', desc:'On-premise options, AES-128 encrypted data pipes, role-based access, and full DISHA data localisation — from day one.' },
  { icon:'🔗', title:'Open and interoperable', desc:'Vendor-agnostic hardware, open APIs, native FHIR support. We work with your existing systems, not around them.' },
]

const MILESTONES = [
  { year:'2026', event:'Anantlink founded by engineers and clinicians tired of watching hospitals run on paper and guesswork.' },
  // { year:'2022', event:'First pilot deployment at a 200-bed tertiary care hospital in Karnataka — patient monitoring and asset tracking.' },
  // { year:'2023', event:'RTLS and automation modules launched. Expanded to multi-building hospital campuses.' },
  // { year:'2024', event:'Digital Twin and AI Analytics added. Deployments across multiple states. Series A process begun.' },
  // { year:'2025', event:'NABH technology partner conversations underway. Actively recruiting pilot hospital partners across India.' },
]

const TEAM = [
  { name:'Ajit', role:'Co-Founder & CEO', bg:'' },
  { name:'Sushma Kumari', role:'Co-Founder & CEO', bg:'' },
  // { name:'Dr. Priya Nair', role:'Co-Founder & CMO', bg:'Intensivist and clinical informaticist. Spent a decade in ICU care watching data gaps cost lives. AIIMS trained.' },
  // { name:'Suresh Iyer', role:'CTO', bg:'15 years in embedded systems and wireless networking. Ex-Cisco. Knows what breaks in the field.' },
  // { name:'Ananya Rao', role:'Head of Product', bg:'Healthcare UX designer who has spent years in hospital corridors watching workflows. IIM Bangalore MBA.' },
]

export default function About() {
  return (
    <main>
      {/* ── HERO ──────────────────────────────────── */}
      <section style={{ position:'relative', padding:'80px 0 72px', background:'var(--bg-surface)', overflow:'hidden' }}>
        <div className="dot-bg" />
        <div className="container" style={{ position:'relative', zIndex:1, maxWidth:700 }}>
          <div className="section-label">About Anantlink</div>
          <h1 style={{ fontSize:'clamp(34px,5vw,62px)', fontWeight:400, letterSpacing:'-0.02em', lineHeight:1.1, marginBottom:24 }}>
            We started because hospitals deserved better tools.
          </h1>
          <p style={{ color:'var(--text-secondary)', fontSize:18, lineHeight:1.8 }}>
            Anantlink was founded by engineers and clinicians who spent years inside hospitals — 
            watching care teams make critical decisions without real-time data. 
            We knew the technology existed. It just hadn't been built right for India.
          </p>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }} className="mission-grid">
            <div>
              <div className="section-label">Our Mission</div>
              <h2 style={{ fontSize:'clamp(26px,3.5vw,42px)', fontWeight:400, lineHeight:1.2, marginBottom:22 }}>
                Give every Indian hospital<br/>
                <em style={{ color:'var(--accent)', fontStyle:'italic' }}>the data it needs.</em>
              </h2>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.8, fontSize:16, marginBottom:18 }}>
                India's healthcare system serves over a billion people. 
                But most hospital decisions — from where to find an infusion pump 
                to how full the ICU will be tomorrow — still happen without real-time information.
              </p>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.8, fontSize:16, marginBottom:32 }}>
                Anantlink exists to fix that. Not with an overpriced platform that takes three 
                years to implement — but with modular tools that plug into existing infrastructure 
                and show measurable results within weeks.
              </p>
              <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
                <Link to="/contact" className="btn btn-primary">Partner with us</Link>
                <Link to="/solutions" className="btn btn-ghost">See the platform →</Link>
              </div>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
              {[
                { n:'1.4B+', l:'People served by Indian healthcare' },
                { n:'80,000+', l:'Hospitals and clinics across India' },
                { n:'₹8L Cr', l:'Indian healthcare market size by 2030' },
                { n:'<5%', l:'Hospitals with real-time operational data today' },
              ].map(s => (
                <div key={s.l} style={{
                  padding:'18px 24px',
                  background:'var(--bg-card)',
                  border:'1px solid var(--border-soft)',
                  borderRadius:10,
                  display:'flex', justifyContent:'space-between', alignItems:'center', gap:16,
                  boxShadow:'var(--shadow-sm)',
                }}>
                  <span style={{ fontFamily:'var(--font-head)', fontSize:26, color:'var(--teal-dark)' }}>{s.n}</span>
                  <span style={{ color:'var(--text-secondary)', fontSize:13, textAlign:'right', maxWidth:180 }}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.mission-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── TIMELINE ──────────────────────────────── */}
      <section style={{ background:'var(--bg-surface)', padding:'80px 0' }}>
        <div className="container">
          <div className="section-label">Journey</div>
          <h2 style={{ fontSize:'clamp(24px,3.5vw,40px)', fontWeight:400, marginBottom:52 }}>
            Where we've been. Where we're going.
          </h2>
          <div style={{ position:'relative', paddingLeft:36 }}>
            <div style={{
              position:'absolute', left:8, top:6, bottom:6, width:2,
              background:'linear-gradient(180deg, var(--accent) 0%, var(--sage) 100%)',
              borderRadius:2,
            }} />
            {MILESTONES.map((m, i) => (
              <div key={m.year} style={{ display:'flex', gap:24, marginBottom: i < MILESTONES.length-1 ? 38 : 0, position:'relative' }}>
                <div style={{
                  position:'absolute', left:-36, width:18, height:18, borderRadius:'50%',
                  background: i === MILESTONES.length-1 ? 'var(--accent)' : 'var(--bg-surface)',
                  border:`2px solid ${i === MILESTONES.length-1 ? 'var(--accent)' : 'var(--sage-mid)'}`,
                  top:3,
                  boxShadow: i === MILESTONES.length-1 ? '0 0 10px rgba(29,124,192,0.3)' : 'none',
                }} />
                <div>
                  <div style={{ fontWeight:700, fontSize:12, color:'var(--accent)', letterSpacing:'0.1em', marginBottom:5 }}>{m.year}</div>
                  <p style={{ color:'var(--text-secondary)', fontSize:15, lineHeight:1.65 }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
              <div key={v.title} className="card">
                <div style={{ fontSize:26, marginBottom:18 }}>{v.icon}</div>
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
            Engineers and clinicians — at the same table.
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(240px, 1fr))', gap:20 }}>
            {TEAM.map(t => (
              <div key={t.name} className="card">
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
