// Ecosystem flow — "One platform. Every device. Every patient. Every corridor."
// CONNECT → SENSE → DECIDE → ACT pipeline + Edge/Cloud layer.

const STEPS = [
  {
    num: '01',
    title: 'CONNECT',
    tagline: 'Any device, any vendor',
    icon: '🔗',
    points: ['IoT · BLE · Wi-Fi · Thread', 'Zigbee · LAN · Legacy'],
    detail: 'Monitors, pumps, wearables, tags, sensors — connected without lock-in.',
  },
  {
    num: '02',
    title: 'SENSE',
    tagline: 'Continuous vitals + live location',
    icon: '🫀',
    points: ['Vitals streaming', 'RTLS location (patients, staff, assets)', 'Environment & device status'],
    detail: 'The hospital gets one live picture instead of a dozen silent screens.',
  },
  {
    num: '03',
    title: 'DECIDE',
    tagline: 'Early-warning & decision support',
    icon: '🧠',
    points: ['Edge AI inference', 'Deterioration & risk scoring', 'Predictive analytics'],
    detail: 'Signals become decisions at the edge — before problems become events.',
  },
  {
    num: '04',
    title: 'ACT',
    tagline: 'Right alert, right person, right second',
    icon: '🔔',
    points: ['Nurse mobile & duty-doctor alerts', 'Team dashboards', 'Escalation workflows'],
    detail: 'Contextual alerts with automatic escalation — every action audit-ready.',
  },
]

export default function EcosystemFlow() {
  return (
    <section className="section" style={{ background:'var(--bg-surface)', position:'relative' }}>
      <div className="container">

        {/* Header */}
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', flexWrap:'wrap', gap:20, marginBottom:44 }}>
          <div>
            <div className="section-label">How It Works</div>
            <h2 style={{ fontSize:'clamp(26px,3.6vw,44px)', fontWeight:400, lineHeight:1.2, maxWidth:560 }}>
              One platform. Every device.<br/>Every patient. Every corridor.
            </h2>
          </div>
          {/* Offline-first badge */}
          <div style={{
            display:'flex', alignItems:'center', gap:12,
            padding:'14px 20px', background:'var(--bg-card)',
            border:'1px solid var(--border)', borderRadius:12,
            boxShadow:'var(--shadow-sm)', maxWidth:280,
          }}>
            <span style={{ fontSize:22 }}>🛡️</span>
            <div>
              <div style={{ fontWeight:700, fontSize:12, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--accent)' }}>Offline-first</div>
              <div style={{ fontSize:13, color:'var(--text-secondary)', lineHeight:1.5 }}>If the internet dies, the hospital doesn't.</div>
            </div>
          </div>
        </div>

        {/* Pipeline */}
        <div className="eco-grid" style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:16 }}>
          {STEPS.map((s, i) => (
            <div key={s.num} style={{ position:'relative' }}>
              <div className="card" style={{ height:'100%', padding:'26px 24px', display:'flex', flexDirection:'column' }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
                  <span style={{
                    display:'inline-flex', alignItems:'center', justifyContent:'center',
                    width:34, height:34, borderRadius:'50%',
                    background:'var(--accent)', color:'#fff',
                    fontSize:12, fontWeight:700,
                  }}>{s.num}</span>
                  <span style={{ fontSize:20 }}>{s.icon}</span>
                </div>
                <h3 style={{ fontFamily:'var(--font-body)', fontSize:16, fontWeight:700, letterSpacing:'0.05em', color:'var(--accent)', marginBottom:4 }}>{s.title}</h3>
                <div style={{ fontSize:13.5, fontWeight:600, color:'var(--text-primary)', marginBottom:12 }}>{s.tagline}</div>
                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:6, marginBottom:14 }}>
                  {s.points.map(p => (
                    <li key={p} style={{ fontSize:12.5, color:'var(--text-secondary)', display:'flex', gap:7, lineHeight:1.5 }}>
                      <span style={{ color:'var(--accent)', flex:'none' }}>›</span>{p}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize:12.5, color:'var(--text-muted)', lineHeight:1.6, marginTop:'auto', fontStyle:'italic' }}>{s.detail}</p>
              </div>
              {/* Arrow to next step (desktop) */}
              {i < STEPS.length - 1 && (
                <span className="eco-arrow" style={{
                  position:'absolute', top:'50%', right:-15, transform:'translateY(-50%)',
                  zIndex:2, width:26, height:26, borderRadius:'50%',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  background:'var(--accent)', color:'#fff', fontSize:13, fontWeight:700,
                  boxShadow:'var(--shadow-sm)',
                }}>→</span>
              )}
            </div>
          ))}
        </div>

        {/* Edge / Cloud layer */}
        <div className="eco-layer" style={{ display:'grid', gridTemplateColumns:'1fr auto 1fr', gap:18, alignItems:'stretch', marginTop:18 }}>
          <div className="card" style={{ padding:'22px 24px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
              <span style={{ fontSize:18 }}>📟</span>
              <h4 style={{ fontFamily:'var(--font-body)', fontSize:13, fontWeight:700, letterSpacing:'0.07em', textTransform:'uppercase', color:'var(--text-primary)' }}>
                Edge — inside the hospital
              </h4>
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'6px 18px' }}>
              {['Local processing','Real-time decisions','Works without internet','Data stays in the hospital'].map(t => (
                <span key={t} style={{ fontSize:12.5, color:'var(--text-secondary)', display:'flex', gap:6, alignItems:'center' }}>
                  <span style={{ color:'var(--accent)' }}>✓</span>{t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:2, color:'var(--text-muted)', fontSize:11, padding:'0 4px' }}>
            <span style={{ letterSpacing:2 }}>←··→</span>
            <span style={{ whiteSpace:'nowrap' }}>sync when</span>
            <span style={{ whiteSpace:'nowrap' }}>connected 🔒</span>
          </div>

          <div className="card" style={{ padding:'22px 24px' }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
              <span style={{ fontSize:18 }}>☁️</span>
              <h4 style={{ fontFamily:'var(--font-body)', fontSize:13, fontWeight:700, letterSpacing:'0.07em', textTransform:'uppercase', color:'var(--text-primary)' }}>
                Cloud — for aggregation
              </h4>
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'6px 18px' }}>
              {['Multi-site insights','Operational analytics','Centralised management','Research & benchmarking'].map(t => (
                <span key={t} style={{ fontSize:12.5, color:'var(--text-secondary)', display:'flex', gap:6, alignItems:'center' }}>
                  <span style={{ color:'var(--accent)' }}>✓</span>{t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Principles strip */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:'10px 34px', justifyContent:'center', marginTop:34 }}>
          {[
            ['🔓','Vendor-agnostic, open standards'],
            ['🛡️','Secure by design, privacy by default'],
            ['📈','Scales from one ward to a network'],
            ['💰','Lower TCO, higher outcomes'],
          ].map(([ic, t]) => (
            <span key={t} style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, color:'var(--text-secondary)', fontWeight:500 }}>
              <span>{ic}</span>{t}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:960px){
          .eco-grid{ grid-template-columns:repeat(2,1fr)!important; }
          .eco-arrow{ display:none!important; }
        }
        @media(max-width:600px){
          .eco-grid{ grid-template-columns:1fr!important; }
          .eco-layer{ grid-template-columns:1fr!important; }
        }
      `}</style>
    </section>
  )
}
