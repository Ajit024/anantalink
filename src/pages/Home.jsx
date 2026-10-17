import { Link } from 'react-router'
import { BarChart3, Building2, HeartPulse, Layers3, MapPin, Radio, ShieldAlert, Tablet, Thermometer } from 'lucide-react'
import EcosystemFlow from '../components/EcosystemFlow'

const SOLUTIONS = [
  {
    Icon: HeartPulse,
    tag: 'Clinical',
    status: 'In active development',
    art: '/images/solutions/vsm-product.webp',
    artAlt: 'Patient wearable and bedside monitor sending vital readings to a nurse dashboard',
    title: 'Patient Monitoring (VSM)',
    desc: 'Continuous vitals from BLE wearables streamed to nurse stations and mobile apps — so care teams can focus on patients, not paperwork.',
  },
  {
    Icon: BarChart3,
    tag: 'Analytics',
    status: 'Optional layer',
    art: '/images/platform-dashboard.svg',
    artAlt: 'Hospital dashboard showing active alerts and monitored areas',
    title: 'Command Dashboard & AI Analytics',
    desc: 'One operational view of patients, devices, and alerts. Optional AI analytics can summarize trends and support planning; core workflows remain useful without AI, with people making clinical decisions.',
  },
  {
    Icon: ShieldAlert,
    tag: 'Patient Safety',
    status: 'Product preview',
    art: '/images/safeward-observations.svg',
    artAlt: 'SafeWard ward dashboard preview showing observation status, an early warning score, and escalation activity',
    title: 'SafeWard',
    desc: 'Digitise ward observations, surface early warning scores, remind staff when checks are due, and support timely clinical escalation.',
  },
  {
    Icon: MapPin,
    tag: 'Operations',
    status: 'Planned',
    art: '/images/devices/asset-tracker.png',
    artAlt: 'Realistic BLE asset tracker tag used to locate hospital equipment',
    title: 'RTLS Asset Tracking',
    desc: "Know where every pump, wheelchair, and ventilator is — without asking. Real-time maps that eliminate equipment searches for good.",
  },
  {
    Icon: Building2,
    tag: 'Infrastructure',
    status: 'Planned',
    art: '/images/solutions/connected-devices-product.webp',
    artAlt: 'Hospital bed, room, and patient devices connected to a shared network',
    title: 'Hospital Automation',
    desc: 'Smart rooms, automated nurse-call routing, code-blue sequencing, and energy management — all running quietly in the background.',
  },
  {
    Icon: Layers3,
    tag: 'Intelligence',
    status: 'Planned',
    art: '/images/hero-connected-ward.webp',
    artAlt: 'Isometric hospital room with connected patient monitor, gateway, and care team',
    title: 'Hospital Digital Twin',
    desc: 'A live replica of your hospital floor. See capacity, movement, and environment data together and make decisions before problems occur.',
  },
  {
    Icon: Radio,
    tag: 'Infrastructure',
    status: 'Core layer',
    art: '/images/solutions/edge-gateway-product.webp',
    artAlt: 'BLE wearables, room sensors, and asset tags connected through a local gateway',
    title: 'BLE IoT Infrastructure',
    desc: 'The enterprise-grade wireless mesh everything else depends on. Vendor-agnostic, secure, and designed for complex hospital campuses.',
  },
  {
    Icon: Tablet,
    tag: 'Patient Experience',
    status: 'Planned',
    art: '/images/devices/checkin-kiosk.png',
    artAlt: 'Freestanding touchscreen patient check-in kiosk',
    title: 'Self Service Kiosk',
    desc: 'A guided check-in for registration, appointments, and visitor workflows.',
  },
  {
    Icon: Thermometer,
    tag: 'Facility Intelligence',
    status: 'Planned',
    art: '/images/devices/environment-sensor.png',
    artAlt: 'Wall-mounted temperature and humidity sensor for hospital rooms',
    title: 'Environmental Monitoring',
    desc: 'Room sensors help teams track conditions in critical spaces.',
  },
]

const WHY = [
  {
    num: '01',
    title: 'Start with one module, grow from there',
    desc: "You don't need to overhaul everything on day one. Pick the problem that costs you the most and add modules as you see results.",
  },
  {
    num: '02',
    title: 'Designed for real hospital conditions',
    desc: 'Accreditation-ready compliance, resilience to unstable power and patchy networks, pricing that respects tight budgets. We built for your reality.',
  },
  {
    num: '03',
    title: 'No rip-and-replace',
    desc: 'Your existing HIS, EMR, and vendor hardware can stay. We integrate with what you already have rather than replacing it.',
  },
  {
    num: '04',
    title: 'A team you can actually call',
    desc: 'Dedicated customer success, on-site support, and direct access to the engineers who built your system — not a generic helpdesk.',
  },
]

export default function Home() {
  return (
    <main>
      {/* ── HERO ───────────────────────────────────── */}
      <section style={{
        position: 'relative',
        padding: '80px 0 72px',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, var(--cream) 60%, #eaf0e3 100%)',
      }}>
        <div className="dot-bg" />

        {/* Soft blue glow top right */}
        <div style={{
          position:'absolute', top:-80, right:-100,
          width:500, height:500, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(20,113,186,0.08) 0%, transparent 70%)',
          pointerEvents:'none',
        }} />

        <div className="container" style={{ position:'relative', zIndex:1 }}>
          <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1.08fr) minmax(0,.92fr)', gap:46, alignItems:'center' }} className="hero-grid">
            <div>
              {/* Dev badge */}
              <div style={{
                display:'inline-flex', alignItems:'center', gap:8,
                padding:'6px 14px',
                background:'var(--sage)',
                borderRadius:100,
                fontSize:12, fontWeight:600,
                color:'var(--teal-dark)',
                marginBottom:28,
                border:'1px solid var(--border)',
              }} className="animate-fade-up">
                <span style={{ width:7, height:7, borderRadius:'50%', background:'#e0a020', display:'inline-block', animation:'pulse-soft 1.8s ease-in-out infinite' }} />
                Early Stage · Actively building
              </div>

              <h1 className="animate-fade-up delay-1" style={{
                fontSize:'clamp(42px,5.1vw,66px)',
                fontWeight:400,
                letterSpacing:'-0.02em',
                lineHeight: 1.1,
                marginBottom:24,
                maxWidth:620,
                color:'var(--teal-dark)',
              }}>
                Connecting every corner of your <em style={{ color:'var(--accent)', fontStyle:'italic' }}>hospital.</em>
              </h1>

              <p className="animate-fade-up delay-2" style={{
                fontSize:18,
                color:'var(--text-secondary)',
                maxWidth:560,
                lineHeight:1.75,
                marginBottom:40,
              }}>
                AnantLink is Connected Care Infrastructure — patient monitoring, SafeWard
                observations, asset tracking, and hospital workflows in one modular platform.
                Optional AI analytics can support operational review when it adds value.
                <br /><br />
                <strong style={{ color:'var(--teal-dark)' }}>Vendor-neutral. Offline-first. Compliance-native.</strong>
              </p>

              <div className="animate-fade-up delay-3" style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
                <Link to="/contact" className="btn btn-primary" style={{ fontSize:15 }}>
                  Book a Discovery Call
                </Link>
                <Link to="/solutions" className="btn btn-ghost" style={{ fontSize:15 }}>
                  See the Platform →
                </Link>
              </div>

            </div>

            <div className="home-connected-visual">
              <figure className="hero-ward-figure">
                <img src="/images/hero-connected-ward.webp" alt="Isometric hospital room showing a patient wearable and bedside monitor sending a signal through a wall gateway to a nurse holding a phone" />
                <svg className="hero-data-network" viewBox="0 0 1000 667" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M354 363 C432 333 497 290 644 245 C687 278 691 348 742 414" />
                  <circle className="hero-node" cx="644" cy="245" r="8" />
                  <circle className="hero-node" cx="742" cy="414" r="7" />
                  <circle className="hero-tablet-touch-ripple" cx="660" cy="283" r="24" />
                  <circle className="hero-tablet-touch-ring" cx="660" cy="283" r="17" />
                  <circle className="hero-tablet-touch-core" cx="660" cy="283" r="7" />
                </svg>
                <figcaption>Patient + monitor <i/> room gateway <i/> nurse alert <small>Illustrative connected-care workflow</small></figcaption>
              </figure>
              <div className="home-signal-strip" aria-label="Illustrative connected hospital data">
                <span><i className="signal-vitals"/>Vitals <b>SpO₂ 97%</b></span>
                <span><i className="signal-rtls"/>RTLS <b>Room 204</b></span>
                <span><i className="signal-alert"/>Fall alert <b>Ready</b></span>
                <small>Simulated workflow · sample data</small>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes pulse-soft { 0%,100%{opacity:1} 50%{opacity:0.4} }
          @media(max-width:1100px){ .hero-grid{grid-template-columns:1fr!important;gap:34px!important;} }
        `}</style>
      </section>

      {/* ── CARE IN CONTEXT ───────────────────────── */}
      {/* ── CONNECTED CARE WORKFLOW ────────────────── */}
      <EcosystemFlow />

      {/* ── SOLUTIONS GRID ─────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:20, marginBottom:48 }}>
            <div>
              <div className="section-label">What We're Building</div>
              <h2 style={{ fontSize:'clamp(28px,3.8vw,46px)', maxWidth:420, fontWeight:400, lineHeight:1.2 }}>
                Connected care.<br/>One platform.
              </h2>
            </div>
            <Link to="/solutions" className="btn btn-outline">Explore all modules</Link>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:18 }}>
            {SOLUTIONS.map(sol => (
              <div key={sol.title} className="card" style={{ cursor:'default' }}>
                <div className="home-product-art-frame">
                  <img className="home-product-art" src={sol.art} alt={sol.artAlt} loading="lazy" />
                  <small>Illustrative equipment</small>
                </div>
                <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16, flexWrap:'wrap' }}>
                  <span className="home-module-icon"><sol.Icon size={20}/></span>
                  <span className="tag-sage">{sol.tag}</span>
                  <span style={{
                    marginLeft:'auto', fontSize:10, fontWeight:700,
                    letterSpacing:'0.06em', textTransform:'uppercase',
                    color: sol.status === 'In active development' ? 'var(--accent)' : 'var(--text-muted)',
                  }}>{sol.status}</span>
                </div>
                <h3 style={{ fontFamily:'var(--font-head)', fontSize:20, fontWeight:400, marginBottom:10 }}>{sol.title}</h3>
                <p style={{ color:'var(--text-secondary)', fontSize:14, lineHeight:1.75 }}>{sol.desc}</p>
                {sol.title === 'SafeWard' && <Link to="/safeward" className="home-safeward-link">Explore SafeWard <span aria-hidden="true">→</span></Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center' }} className="why-grid">
            <div>
              <div className="section-label">Why AnantLink</div>
              <h2 style={{ fontSize:'clamp(26px,3.5vw,44px)', fontWeight:400, lineHeight:1.2, marginBottom:20 }}>
                Built around how<br/>
                hospitals <em style={{ color:'var(--accent)', fontStyle:'italic' }}>actually</em> operate.
              </h2>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.8, fontSize:16, marginBottom:36 }}>
                Most healthcare IoT is designed far from the wards it ends up in.
                We build alongside clinicians, inside working hospitals, around real
                workflows. That changes what gets built and how it gets supported.
              </p>
              <Link to="/about" className="btn btn-outline">Our story →</Link>
            </div>

            <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
              {WHY.map(w => (
                <WhyItem key={w.num} {...w} />
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.why-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── EARLY STAGE SECTION ────────────────────── */}
      <section style={{
        background:'var(--teal-dark)',
        padding:'80px 0',
        position:'relative', overflow:'hidden',
      }}>
        <div style={{
          position:'absolute', top:-60, right:-60,
          width:400, height:400, borderRadius:'50%',
          background:'radial-gradient(circle, rgba(205,214,208,0.08) 0%, transparent 70%)',
          pointerEvents:'none',
        }} />
        <div className="container" style={{ position:'relative', zIndex:1 }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }} className="cta-grid">
            <div>
              <div style={{
                display:'inline-flex', alignItems:'center', gap:7,
                padding:'5px 13px',
                background:'rgba(205,214,208,0.15)',
                borderRadius:100, fontSize:11, fontWeight:600,
                color:'#cdd6d0', letterSpacing:'0.1em',
                textTransform:'uppercase', marginBottom:20,
              }}>
                <span style={{ width:6, height:6, borderRadius:'50%', background:'#7ec86e', display:'inline-block' }} />
                Early Access Open
              </div>
              <h2 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(26px,3.5vw,44px)', color:'#f8f8ec', fontWeight:400, marginBottom:16, lineHeight:1.2 }}>
                We're in development.<br/>We'd love a partner.
              </h2>
              <p style={{ color:'#aababa', fontSize:16, lineHeight:1.75, maxWidth:420 }}>
                If you run a hospital or clinic and want to be involved early — as a pilot site, 
                advisor, or integration partner — we'd genuinely love to talk.
              </p>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
              {[
                { icon:'🏥', t:'Hospital pilot sites', d:'Get early access and help shape what we build.' },
                { icon:'🤝', t:'Technology partners', d:'HIS vendors, hardware makers, system integrators.' },
                { icon:'💡', t:'Clinical advisors', d:'Clinicians who want to design better workflows.' },
                { icon:'📈', t:'Investors', d:'Pre-seed conversations open — pitch deck available on request.' },
              ].map(item => (
                <div key={item.t} style={{
                  display:'flex', gap:16, padding:'18px 20px',
                  background:'rgba(205,214,208,0.08)',
                  border:'1px solid rgba(205,214,208,0.15)',
                  borderRadius:10,
                }}>
                  <span style={{ fontSize:20 }}>{item.icon}</span>
                  <div>
                    <div style={{ color:'#cdd6d0', fontWeight:600, fontSize:14, marginBottom:3 }}>{item.t}</div>
                    <div style={{ color:'#aababa', fontSize:13 }}>{item.d}</div>
                  </div>
                </div>
              ))}
              <Link to="/contact" className="btn btn-primary" style={{ marginTop:6, justifyContent:'center', fontSize:15 }}>
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.cta-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </main>
  )
}

function WhyItem({ num, title, desc }) {
  return (
    <div style={{
      display:'flex', gap:18, padding:'18px 22px',
      background:'var(--bg-card)',
      border:'1px solid var(--border-soft)',
      borderRadius:10, transition:'all 0.22s ease',
      boxShadow:'var(--shadow-sm)',
    }}
    onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--sage-mid)';e.currentTarget.style.boxShadow='var(--shadow-card)'}}
    onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border-soft)';e.currentTarget.style.boxShadow='var(--shadow-sm)'}}
    >
      <div style={{ fontFamily:'var(--font-body)', fontWeight:700, fontSize:11, color:'var(--accent)', opacity:0.7, flex:'none', paddingTop:3, letterSpacing:'0.06em' }}>{num}</div>
      <div>
        <h4 style={{ fontFamily:'var(--font-body)', fontSize:15, fontWeight:600, marginBottom:5, color:'var(--text-primary)' }}>{title}</h4>
        <p style={{ color:'var(--text-secondary)', fontSize:13, lineHeight:1.65 }}>{desc}</p>
      </div>
    </div>
  )
}
