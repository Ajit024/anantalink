import { Link } from 'react-router-dom'

const SOLUTIONS = [

  {
    id: 'monitoring',
    icon: '🫀',
    tag: 'Clinical',
    title: 'Patient Monitoring',
    subtitle: 'Nurses should be with patients — not chasing alarms.',
    desc: `BLE wearable patches connect to a unified dashboard, routing alerts by severity to the right person on the right screen. SpO₂, ECG, heart rate, temperature, and respiratory rate — continuously, reliably, without wires tethering patients to their beds.`,
    features: [
      'BLE wearable patches for ambulatory patients',
      'HL7 FHIR integration with existing HIS/EMR',
      'Early Warning Score (EWS) auto-calculation',
      'Sepsis and clinical deterioration flags',
      'Nurse-station, mobile, and ICU dashboard routing',
      'Historical vital trend review for handovers',
    ],
    metrics: [{ v:'<2s', l:'Alert latency'}, {v:'98%', l:'Sensor uptime'}, {v:'70%', l:'Faster response time'}],
  },
  {
    id: 'vsm',
    icon: '💓',
    tag: 'Clinical Monitoring',
    title: 'Vital Sign Monitoring',
    subtitle: 'Vitals should move faster than paperwork.',
    desc: 'Continuous monitoring of SpO₂, heart rate, ECG, blood pressure, temperature, respiratory rate, and fall alerts. Real-time dashboards and automated alerts help nurses focus on patients instead of running around with clipboards like it is still 1998.',
    features: [
      'Continuous ECG and heart rate monitoring',
      'Blood pressure and SpO₂ tracking',
      'Temperature and respiratory monitoring',
      'Wireless bedside and wearable device support',
      'Threshold-based alerts and escalation',
      'EMR and nurse station integration',
    ],
    metrics: [
      { v: 'Real-time', l: 'Monitoring updates' },
      { v: '<5 sec', l: 'Alert trigger time' },
      { v: '90%', l: 'Faster clinical response' },
    ],
  },
     {
    id: 'self-kiosk',
    icon: '🖥️🧍',
    tag: 'Patient Experience',
    title: 'Self Service Kiosk',
    subtitle: 'Reduce waiting time before staff even step in.',
    desc: 'Self-service kiosks for patient registration, appointment check-in, token management, billing support, consent forms, and visitor management. Designed for hospitals, clinics, diagnostics centers, and reception areas where queues somehow become a full-time lifestyle.',
    features: [
      'Patient self check-in and registration',
      'Appointment token and queue management',
      'Insurance and ID verification',
      'Digital consent form capture',
      'Visitor and attendant management',
      'Integration with HIS and billing systems',
    ],
    metrics: [
      { v: '50%', l: 'Less front desk load' },
      { v: '<2 min', l: 'Average check-in time' },
      { v: '24/7', l: 'Availability' },
    ],
  },
  {
    id: 'environmental',
    icon: '♻️',
    tag: 'Facility Intelligence',
    title: 'Environmental Monitoring',
    subtitle: 'Hospitals are hard enough without temperature and humidity causing chaos.',
    desc: 'Monitor indoor environmental conditions across wards, ICUs, labs, pharmacies, operation theatres, and storage areas. Ensure compliance, reduce equipment risk, and stop vaccines, medicines, and sensitive devices from quietly suffering in the wrong room conditions.',
    features: [
      'Temperature and humidity monitoring',
      'Air quality and CO₂ tracking',
      'Differential pressure monitoring for OT and ICU',
      'Cold storage and vaccine refrigerator alerts',
      'Water leakage and smoke detection',
      'Central dashboard with audit logs and reports',
    ],
    metrics: [
      { v: '24/7', l: 'Environment tracking' },
      { v: 'Instant', l: 'Threshold alerts' },
      { v: '100%', l: 'Audit visibility' },
    ],
  },
  {
    id: 'rtls',
    icon: '📡',
    tag: 'Operations',
    title: 'RTLS Asset Tracking',
    subtitle: 'Every piece of equipment, accounted for — always.',
    desc: `Hospital staff lose over 30 minutes per shift searching for equipment. AnantLink RTLS builds a real-time picture of every tracked asset — infusion pumps, ventilators, wheelchairs, defibrillators — across floors, wings, and buildings. So no one needs to go looking again.`,
    features: [
      'Sub-3m indoor positioning via BLE beacon mesh',
      'Asset utilisation and idle-time analytics',
      'Auto-trigger for sterilisation workflows',
      'Exit and zone alerts for theft prevention',
      'Floor-plan heat maps and historical movement',
      'CMMS / maintenance system integration',
    ],
    metrics: [{ v:'<3m', l:'Location accuracy'}, {v:'60%', l:'Search time saved'}, {v:'25%', l:'Capex reduction'}],
  },
  {
    id: 'automation',
    icon: '🏥',
    tag: 'Infrastructure',
    title: 'Hospital Automation',
    subtitle: 'The hospital that runs itself — so staff can focus on care.',
    desc: `From the moment a patient occupies a bed, the environment responds: lighting adjusts, HVAC follows occupancy, nurse-call connects to the right staff member's phone. Code-blue sequences trigger automatically. Room turnaround happens without anyone filing a housekeeping request.`,
    features: [
      'Occupancy-based HVAC and lighting control',
      'Smart nurse-call with mobile staff routing',
      'Code-blue and code-red automated sequencing',
      'Bed sensor integration — fall detection, turn reminders',
      'Automated housekeeping and room-ready alerts',
      'Energy consumption monitoring and reporting',
    ],
    metrics: [{ v:'20%', l:'Energy reduction'}, {v:'<5min', l:'Room turnaround'}, {v:'↓50%', l:'HAI risk potential'}],
  },
  {
    id: 'digitaltwin',
    icon: '🧠',
    tag: 'Intelligence',
    title: 'Hospital Digital Twin',
    subtitle: 'See what is really happening — before you need to react.',
    desc: `A live 3D model of your hospital that mirrors physical reality. Patients, assets, staff, environment, and capacity — visualised together in one place. Use it to spot a bottleneck before it becomes a crisis, simulate a surge before it arrives, or understand a past incident without guesswork.`,
    features: [
      '3D floor-plan with live data overlay',
      'Capacity planning and surge event simulation',
      'Infection control zone modelling',
      'Staff distribution and workload heat maps',
      'Historical event replay for quality reviews',
      'API-ready for HIS and ERP integration',
    ],
    metrics: [{ v:'Live', l:'Real-time sync'}, {v:'100%', l:'Floor coverage'}, {v:'10×', l:'Faster decisions'}],
  },
  {
    id: 'ai',
    icon: '📊',
    tag: 'Analytics',
    title: 'AI Analytics Dashboard',
    subtitle: 'Decisions that used to take a committee — delivered every morning.',
    desc: `Sensor data from across your hospital becomes operational intelligence: bed occupancy forecasts, equipment maintenance predictions, staff workload alerts, infection risk scores, and energy audit reports — all on one command screen without a data analyst in the loop.`,
    features: [
      'Bed occupancy forecasting (72-hour horizon)',
      'Predictive maintenance for medical equipment',
      'Infection risk scoring from environmental sensors',
      'Safe-staffing level and fatigue alerts',
      'Energy audit and cost recommendations',
      'Custom KPI dashboards for CXO reporting',
    ],
    metrics: [{ v:'72h', l:'Forecast horizon'}, {v:'↓30%', l:'Unplanned downtime'}, {v:'Auto', l:'Report generation'}],
  },
  {
    id: 'ble',
    icon: '🔗',
    tag: 'Infrastructure',
    title: 'BLE IoT Infrastructure',
    subtitle: 'The foundation that everything else is built on.',
    desc: `An enterprise-grade Bluetooth Low Energy gateway mesh that covers your entire campus — secure, low-power, and vendor-agnostic. It works with the tags and sensors you already own, and can extend to Wi-Fi HaLow or LoRa for specialist coverage requirements.`,
    features: [
      'Enterprise BLE 5.x gateway mesh deployment',
      'Vendor-agnostic tag and sensor compatibility',
      'AES-128 encrypted data, on-premise option available',
      'Edge computing hubs for sub-50ms local processing',
      'Wi-Fi HaLow and LoRa for long-range coverage',
      'Network health monitoring and self-healing mesh',
    ],
    metrics: [{ v:'<50ms', l:'Edge latency'}, {v:'AES-128', l:'Encryption'}, {v:'99.9%', l:'Network uptime'}],
  },
  

]

export default function Solutions() {
  return (
    <main>
      {/* ── PAGE HERO ─────────────────────────────── */}
      <section style={{ position:'relative', padding:'80px 0 60px', overflow:'hidden', background:'var(--bg-surface)' }}>
        <div className="dot-bg" />
        <div className="container" style={{ position:'relative', zIndex:1 }}>
          <div className="section-label">Platform Modules</div>
          <h1 style={{ fontSize:'clamp(34px,5vw,62px)', fontWeight:400, letterSpacing:'-0.02em', maxWidth:600, marginBottom:20, lineHeight:1.1 }}>
            Start where your hospital hurts most.
          </h1>
          <p style={{ color:'var(--text-secondary)', fontSize:17, maxWidth:520, lineHeight:1.75 }}>
            Each module works independently. All six share the same data layer — 
            so every new module makes the ones you already have smarter.
          </p>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap', marginTop:32 }}>
            {['All','Clinical','Operations','Infrastructure','Intelligence','Analytics'].map(tag => (
              <span key={tag} className="tag" style={{ cursor:'pointer' }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION DETAILS ──────────────────────── */}
      <section style={{ padding:'56px 0 96px' }}>
        <div className="container">
          <div style={{ display:'flex', flexDirection:'column', gap:32 }}>
            {SOLUTIONS.map((sol, i) => (
              <SolutionRow key={sol.id} sol={sol} flip={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ──────────────────────────── */}
      <section style={{ background:'var(--bg-surface)', borderTop:'1px solid var(--border-soft)', padding:'64px 0' }}>
        <div className="container">
          <div className="section-label" style={{ justifyContent:'center' }}>Interoperability</div>
          <h2 style={{ textAlign:'center', fontSize:'clamp(22px,3vw,36px)', fontWeight:400, marginBottom:12 }}>
            Fits with what you already have
          </h2>
          <p style={{ textAlign:'center', color:'var(--text-secondary)', marginBottom:44, maxWidth:420, margin:'0 auto 44px' }}>
            Built on open standards — designed to integrate with HL7 FHIR, DICOM, ABDM, and major HIS/EMR systems.
          </p>
          <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center' }}>
            {['HL7 FHIR','ABDM','DICOM','NABH','OpenEMR','Practo','eVitalRx','AWS Healthcare','Meditech'].map(name => (
              <div key={name} style={{
                padding:'11px 22px',
                background:'var(--bg-card)',
                border:'1px solid var(--border-soft)',
                borderRadius:8,
                fontSize:13, fontWeight:500, color:'var(--text-secondary)',
                transition:'all 0.2s', boxShadow:'var(--shadow-sm)',
              }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--accent)';e.currentTarget.style.color='var(--accent)'}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border-soft)';e.currentTarget.style.color='var(--text-secondary)'}}
              >{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section style={{ padding:'80px 0' }}>
        <div className="container" style={{ textAlign:'center' }}>
          <h2 style={{ fontSize:'clamp(24px,3.5vw,42px)', fontWeight:400, marginBottom:16 }}>
            Not sure which module to start with?
          </h2>
          <p style={{ color:'var(--text-secondary)', fontSize:16, maxWidth:400, margin:'0 auto 32px' }}>
            We'll map your workflows and tell you honestly what will give you the most value first.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize:15 }}>
            Talk to the team →
          </Link>
        </div>
      </section>
    </main>
  )
}

function SolutionRow({ sol, flip }) {
  return (
    <div style={{
      display:'grid',
      gridTemplateColumns:'1.1fr 1fr',
      gap:40,
      alignItems:'start',
      padding:'40px',
      background:'var(--bg-card)',
      border:'1px solid var(--border-soft)',
      borderRadius:16,
      boxShadow:'var(--shadow-sm)',
      transition:'box-shadow 0.25s',
    }}
    className="sol-row"
    onMouseEnter={e=>e.currentTarget.style.boxShadow='var(--shadow-card)'}
    onMouseLeave={e=>e.currentTarget.style.boxShadow='var(--shadow-sm)'}
    >
      {/* Text */}
      <div style={{ order: flip ? 2 : 1 }}>
        <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:18 }}>
          <span style={{ fontSize:22 }}>{sol.icon}</span>
          <span className="tag-sage">{sol.tag}</span>
        </div>
        <h2 style={{ fontFamily:'var(--font-head)', fontSize:26, fontWeight:400, marginBottom:8 }}>{sol.title}</h2>
        <p style={{ color:'var(--accent)', fontSize:14, fontWeight:600, marginBottom:14 }}>{sol.subtitle}</p>
        <p style={{ color:'var(--text-secondary)', fontSize:14, lineHeight:1.8, marginBottom:24 }}>{sol.desc}</p>
        <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:9 }}>
          {sol.features.map(f => (
            <li key={f} style={{ display:'flex', alignItems:'flex-start', gap:9, fontSize:14, color:'var(--text-secondary)' }}>
              <span style={{ color:'var(--accent)', marginTop:2, flex:'none', fontWeight:700 }}>→</span>
              {f}
            </li>
          ))}
        </ul>
      </div>

      {/* Metrics */}
      <div style={{ order: flip ? 1 : 2, display:'flex', flexDirection:'column', gap:14 }}>
        {sol.metrics.map(m => (
          <div key={m.l} style={{
            background:'linear-gradient(135deg, var(--cream) 0%, var(--sage) 100%)',
            border:'1px solid var(--border)',
            borderRadius:12, padding:'24px 28px', textAlign:'center',
          }}>
            <div style={{
              fontFamily:'var(--font-head)',
              fontSize:38, fontWeight:400,
              color:'var(--teal-dark)',
              lineHeight:1,
            }}>{m.v}</div>
            <div style={{ color:'var(--text-muted)', fontSize:13, marginTop:6 }}>{m.l}</div>
          </div>
        ))}
      </div>

      <style>{`
        @media(max-width:768px){
          .sol-row{grid-template-columns:1fr!important;}
          .sol-row>div{order:unset!important;}
        }
      `}</style>
    </div>
  )
}
