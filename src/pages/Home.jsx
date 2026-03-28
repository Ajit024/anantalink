import { Link } from 'react-router-dom'

const STATS = [
  { value: '40+',   label: 'IoMT Use Cases' },
  { value: '6',     label: 'Platform Modules' },
  { value: 'NABH',  label: 'Compliance Ready' },
  { value: 'India', label: 'Built & Headquartered' },
]

const SOLUTIONS = [
  {
    icon: '🫀',
    tag: 'Clinical',
    title: 'Patient Monitoring',
    desc: 'Continuous vitals from BLE wearables streamed to nurse stations and mobile apps — so care teams can focus on patients, not paperwork.',
  },
  {
    icon: '📡',
    tag: 'Operations',
    title: 'RTLS Asset Tracking',
    desc: "Know where every pump, wheelchair, and ventilator is — without asking. Real-time maps that eliminate equipment searches for good.",
  },
  {
    icon: '🏥',
    tag: 'Infrastructure',
    title: 'Hospital Automation',
    desc: 'Smart rooms, automated nurse-call routing, code-blue sequencing, and energy management — all running quietly in the background.',
  },
  {
    icon: '🧠',
    tag: 'Intelligence',
    title: 'Hospital Digital Twin',
    desc: 'A live replica of your hospital floor. See capacity, movement, and environment data together and make decisions before problems occur.',
  },
  {
    icon: '📊',
    tag: 'Analytics',
    title: 'AI Analytics Dashboard',
    desc: 'From bed forecasts to predictive maintenance, operational insights that usually take weeks arrive automatically every morning.',
  },
  {
    icon: '🔗',
    tag: 'Infrastructure',
    title: 'BLE IoT Infrastructure',
    desc: 'The enterprise-grade wireless mesh everything else depends on. Vendor-agnostic, secure, and designed for complex hospital campuses.',
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
    title: "Designed around India's hospitals",
    desc: 'NABH compliance, ABDM integration, variable power infrastructure, tight budgets. We built for your reality, not a Western hospital blueprint.',
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
          background:'radial-gradient(circle, rgba(29,124,192,0.08) 0%, transparent 70%)',
          pointerEvents:'none',
        }} />

        <div className="container" style={{ position:'relative', zIndex:1 }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr auto', gap:48, alignItems:'center' }} className="hero-grid">
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
                fontSize:'clamp(38px,5.5vw,70px)',
                fontWeight:400,
                letterSpacing:'-0.02em',
                lineHeight: 1.1,
                marginBottom:24,
                color:'var(--teal-dark)',
              }}>
                Connecting every corner<br />
                of your <em style={{ color:'var(--accent)', fontStyle:'italic' }}>hospital.</em>
              </h1>

              <p className="animate-fade-up delay-2" style={{
                fontSize:18,
                color:'var(--text-secondary)',
                maxWidth:500,
                lineHeight:1.75,
                marginBottom:40,
              }}>
                Anantlink brings patient monitoring, asset tracking, automation, and 
                AI analytics together in one modular platform — built specifically for 
                how Indian hospitals work.
              </p>

              <div className="animate-fade-up delay-3" style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
                <Link to="/contact" className="btn btn-primary" style={{ fontSize:15 }}>
                  Book a Discovery Call
                </Link>
                <Link to="/solutions" className="btn btn-ghost" style={{ fontSize:15 }}>
                  See the Platform →
                </Link>
              </div>

              {/* Stat row */}
              <div className="animate-fade-up delay-4" style={{
                display:'flex', gap:0, marginTop:52,
                background:'var(--bg-card)',
                border:'1px solid var(--border-soft)',
                borderRadius:10,
                overflow:'hidden',
                width:'fit-content',
                boxShadow:'var(--shadow-sm)',
              }}>
                {STATS.map(({ value, label }, i) => (
                  <div key={label} style={{
                    padding:'18px 24px',
                    textAlign:'center',
                    borderRight: i < STATS.length-1 ? '1px solid var(--border-soft)' : 'none',
                  }}>
                    <div style={{ fontFamily:'var(--font-head)', fontWeight:400, fontSize:22, color:'var(--accent)' }}>{value}</div>
                    <div style={{ fontSize:11, color:'var(--text-muted)', marginTop:3, whiteSpace:'nowrap' }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero visual */}
            <div style={{ animation:'float 5s ease-in-out infinite' }} className="hero-vis">
              <HeroVis />
            </div>
          </div>
        </div>

        <style>{`
          @keyframes pulse-soft { 0%,100%{opacity:1} 50%{opacity:0.4} }
          @media(max-width:860px){ .hero-grid{grid-template-columns:1fr!important;} .hero-vis{display:none!important;} }
        `}</style>
      </section>

      {/* ── SOLUTIONS GRID ─────────────────────────── */}
      <section className="section" style={{ background:'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:20, marginBottom:48 }}>
            <div>
              <div className="section-label">What We're Building</div>
              <h2 style={{ fontSize:'clamp(28px,3.8vw,46px)', maxWidth:420, fontWeight:400, lineHeight:1.2 }}>
                Six modules.<br/>One connected hospital.
              </h2>
            </div>
            <Link to="/solutions" className="btn btn-outline">Explore all modules</Link>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:18 }}>
            {SOLUTIONS.map(sol => (
              <div key={sol.title} className="card" style={{ cursor:'default' }}>
                <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
                  <span style={{ fontSize:22 }}>{sol.icon}</span>
                  <span className="tag-sage">{sol.tag}</span>
                </div>
                <h3 style={{ fontFamily:'var(--font-head)', fontSize:20, fontWeight:400, marginBottom:10 }}>{sol.title}</h3>
                <p style={{ color:'var(--text-secondary)', fontSize:14, lineHeight:1.75 }}>{sol.desc}</p>
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
              <div className="section-label">Why Anantlink</div>
              <h2 style={{ fontSize:'clamp(26px,3.5vw,44px)', fontWeight:400, lineHeight:1.2, marginBottom:20 }}>
                Built around how<br/>
                Indian hospitals <em style={{ color:'var(--accent)', fontStyle:'italic' }}>actually</em> operate.
              </h2>
              <p style={{ color:'var(--text-secondary)', lineHeight:1.8, fontSize:16, marginBottom:36 }}>
                Most healthcare IoT comes from elsewhere and gets localised poorly. 
                We started from scratch — in Bengaluru, with Indian clinicians, for Indian hospitals. 
                That changes what gets built and how it gets supported.
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
          background:'radial-gradient(circle, rgba(210,219,200,0.08) 0%, transparent 70%)',
          pointerEvents:'none',
        }} />
        <div className="container" style={{ position:'relative', zIndex:1 }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }} className="cta-grid">
            <div>
              <div style={{
                display:'inline-flex', alignItems:'center', gap:7,
                padding:'5px 13px',
                background:'rgba(210,219,200,0.15)',
                borderRadius:100, fontSize:11, fontWeight:600,
                color:'#d2dbc8', letterSpacing:'0.1em',
                textTransform:'uppercase', marginBottom:20,
              }}>
                <span style={{ width:6, height:6, borderRadius:'50%', background:'#7ec86e', display:'inline-block' }} />
                Early Access Open
              </div>
              <h2 style={{ fontFamily:'var(--font-head)', fontSize:'clamp(26px,3.5vw,44px)', color:'#f8f8ec', fontWeight:400, marginBottom:16, lineHeight:1.2 }}>
                We're in development.<br/>We'd love a partner.
              </h2>
              <p style={{ color:'#9bb5ba', fontSize:16, lineHeight:1.75, maxWidth:420 }}>
                If you run a hospital or clinic and want to be involved early — as a pilot site, 
                advisor, or integration partner — we'd genuinely love to talk.
              </p>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
              {[
                { icon:'🏥', t:'Hospital pilot sites', d:'Get early access and help shape what we build.' },
                { icon:'🤝', t:'Technology partners', d:'HIS vendors, hardware makers, system integrators.' },
                { icon:'💡', t:'Clinical advisors', d:'Clinicians who want to design better workflows.' },
              ].map(item => (
                <div key={item.t} style={{
                  display:'flex', gap:16, padding:'18px 20px',
                  background:'rgba(210,219,200,0.08)',
                  border:'1px solid rgba(210,219,200,0.15)',
                  borderRadius:10,
                }}>
                  <span style={{ fontSize:20 }}>{item.icon}</span>
                  <div>
                    <div style={{ color:'#d2dbc8', fontWeight:600, fontSize:14, marginBottom:3 }}>{item.t}</div>
                    <div style={{ color:'#9bb5ba', fontSize:13 }}>{item.d}</div>
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

function HeroVis() {
  return (
    <svg viewBox="0 0 360 380" width="360" height="380" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ filter:'drop-shadow(0 8px 32px rgba(29,124,192,0.1))' }}>
      {/* Background blob */}
      <ellipse cx="180" cy="200" rx="160" ry="160"
        fill="url(#bg-grad)" opacity="0.18"/>
      {/* Connection arcs */}
      <path d="M80 190 Q180 100 280 190" stroke="#1d7cc0" strokeWidth="1.5" fill="none" strokeDasharray="5 4" opacity="0.4"/>
      <path d="M80 200 Q180 300 280 200" stroke="#3f5e69" strokeWidth="1.5" fill="none" strokeDasharray="5 4" opacity="0.3"/>
      {/* Center node */}
      <circle cx="180" cy="195" r="40" fill="white" stroke="#d2dbc8" strokeWidth="1.5"/>
      <circle cx="180" cy="195" r="28" fill="#e8f2fb"/>
      <circle cx="180" cy="195" r="14" fill="#1d7cc0" opacity="0.9"/>
      {/* Pulse */}
      <circle cx="180" cy="195" r="40" stroke="#1d7cc0" strokeWidth="1" strokeOpacity="0.35">
        <animate attributeName="r" from="28" to="55" dur="2.2s" repeatCount="indefinite"/>
        <animate attributeName="stroke-opacity" from="0.35" to="0" dur="2.2s" repeatCount="indefinite"/>
      </circle>
      {/* Outer nodes */}
      {[
        [180, 60,  '🫀', 'Vitals'],
        [310, 140, '📡', 'RTLS'],
        [310, 255, '📊', 'AI'],
        [180, 335, '🏥', 'Rooms'],
        [52,  255, '🔗', 'BLE'],
        [52,  140, '🧠', 'Twin'],
      ].map(([cx, cy, ic, lb]) => (
        <g key={lb} transform={`translate(${cx},${cy})`}>
          <rect x="-34" y="-22" width="68" height="44" rx="10"
            fill="white" stroke="#d2dbc8" strokeWidth="1.2"/>
          <text x="0" y="-4" textAnchor="middle" fontSize="14">{ic}</text>
          <text x="0" y="11" textAnchor="middle" fontSize="10" fill="#4a5d5e" fontFamily="DM Sans, sans-serif" fontWeight="600">{lb}</text>
          {/* connector to center */}
          <line x1={180-cx} y1={195-cy} x2={0} y2={0}
            stroke="#d2dbc8" strokeWidth="1" strokeDasharray="3 3"
            transform={`translate(0,0)`}/>
        </g>
      ))}
      {/* Connector lines (drawn separately for clarity) */}
      <line x1="180" y1="83" x2="180" y2="155" stroke="#d2dbc8" strokeWidth="1" strokeDasharray="3 3"/>
      <line x1="276" y1="162" x2="215" y2="183" stroke="#d2dbc8" strokeWidth="1" strokeDasharray="3 3"/>
      <line x1="276" y1="233" x2="215" y2="205" stroke="#d2dbc8" strokeWidth="1" strokeDasharray="3 3"/>
      <line x1="180" y1="313" x2="180" y2="235" stroke="#d2dbc8" strokeWidth="1" strokeDasharray="3 3"/>
      <line x1="84"  y1="233" x2="148" y2="205" stroke="#d2dbc8" strokeWidth="1" strokeDasharray="3 3"/>
      <line x1="84"  y1="162" x2="148" y2="183" stroke="#d2dbc8" strokeWidth="1" strokeDasharray="3 3"/>
      <defs>
        <radialGradient id="bg-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1d7cc0"/>
          <stop offset="100%" stopColor="#d2dbc8"/>
        </radialGradient>
      </defs>
    </svg>
  )
}
