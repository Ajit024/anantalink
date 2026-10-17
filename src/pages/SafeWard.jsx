import { Link } from 'react-router'
import { Activity, ArrowRight, BellRing, CalendarClock, Check, ClipboardCheck, HeartPulse, MessageSquareText, ShieldAlert, Stethoscope } from 'lucide-react'

const CAPABILITIES = [
  { icon: ClipboardCheck, title: 'Digital observations', copy: 'Record and review vital-sign observations in a consistent ward workflow.' },
  { icon: Activity, title: 'Early Warning Scores', copy: 'Calculate scores using the observation protocol approved by the hospital.' },
  { icon: CalendarClock, title: 'Observation reminders', copy: 'Make checks due or overdue visible to the nursing team.' },
  { icon: BellRing, title: 'Clinical escalation', copy: 'Route attention to the responsible clinician and keep the handoff visible.' },
  { icon: HeartPulse, title: 'Ward dashboard', copy: 'See patient status, pending observations, and escalation activity together.' },
]

const PILOT = [
  { week: 'Weeks 1–2', title: 'Map & baseline', copy: 'Work with nursing and clinical leads to map the ward workflow and record baseline measures.' },
  { week: 'Weeks 3–4', title: 'Configure & prepare', copy: 'Set up the approved observation protocol, roles, reminders, and escalation paths; train the ward team.' },
  { week: 'Weeks 5–10', title: 'Run the ward pilot', copy: 'Use SafeWard in one ward with regular check-ins and support for the clinical team.' },
  { week: 'Weeks 11–12', title: 'Review & decide', copy: 'Review the results with hospital leads and decide whether expansion is appropriate.' },
]

export default function SafeWard() {
  return (
    <main className="safeward-page">
      <section className="safeward-hero">
        <div className="dot-bg" />
        <div className="container safeward-hero-grid">
          <div className="safeward-hero-copy">
            <div className="section-label"><ShieldAlert size={14}/> SafeWard by AnantLink</div>
            <h1>Safer Wards.<br/><em>Smarter Care.</em><br/>Timely Action.</h1>
            <p>Move ward observations from paper into a clear digital workflow. Help teams see what is due, understand early warning scores, and escalate concerns in time.</p>
            <div className="safeward-hero-actions"><Link to="/contact" className="btn btn-primary">Discuss a 12-week pilot →</Link><a className="btn btn-outline" href="#pilot">See the pilot model</a></div>
            <small className="safeward-honesty">Designed to support clinical teams. Observation protocols and escalation rules are set with the hospital.</small>
          </div>

          <div className="safeward-dashboard" aria-label="Illustrative SafeWard ward dashboard with sample data">
            <div className="safeward-dash-top"><div><span className="safeward-live-dot"/> SAMPLE WARD VIEW</div><small>Illustrative data · not a live patient system</small></div>
            <div className="safeward-dash-title"><div><b>Ward 2 · Observation board</b><small>Tuesday · Day shift</small></div><span className="safeward-staff-chip"><Stethoscope size={13}/> Care team view</span></div>
            <div className="safeward-kpis"><div><small>Patients due</small><b>04</b><span>next 30 min</span></div><div><small>Overdue</small><b className="kpi-amber">01</b><span>needs follow-up</span></div><div><small>Escalations</small><b className="kpi-coral">01</b><span>review requested</span></div></div>
            <div className="safeward-patient-row">
              <span className="patient-avatar">A</span>
              <div className="safeward-patient-name"><b>Sample patient · Room 204</b><small>Observation round · 10:24</small></div>
              <div className="safeward-score"><small>Sample EWS</small><b>5 <i>review</i></b></div>
            </div>
            <div className="safeward-observations"><span><HeartPulse size={13}/> Pulse <b>112 bpm</b></span><span><Activity size={13}/> SpO₂ <b>94%</b></span><span><CalendarClock size={13}/> Next check <b>10:30</b></span></div>
            <div className="safeward-alert"><BellRing size={16}/><div><b>Clinical review requested</b><small>Sample escalation · ward policy applies</small></div><ArrowRight size={15}/></div>
            <div className="safeward-dash-footer"><span><Check size={13}/> Observation recorded</span><span><MessageSquareText size={13}/> Handoff visible</span></div>
          </div>
        </div>
      </section>

      <section className="section safeward-section">
        <div className="container">
          <div className="safeward-section-heading"><div><div className="section-label">A practical ward workflow</div><h2>From observation to the right next step.</h2></div><p>SafeWard helps make routine observations and clinical handoffs easier to see and measure.</p></div>
          <div className="safeward-capabilities">
            {CAPABILITIES.map(({ icon: Icon, title, copy }, index) => <article className="safeward-capability" key={title}><span className="safeward-cap-icon"><Icon size={19}/></span><small>0{index + 1}</small><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
          <div className="safeward-flow" aria-label="SafeWard observation workflow">
            <div><span>01</span><b>Observe</b><small>Nurse records vital signs</small></div><ArrowRight/><div><span>02</span><b>Review</b><small>Approved EWS protocol applied</small></div><ArrowRight/><div><span>03</span><b>Respond</b><small>Reminder or escalation routed</small></div>
          </div>
        </div>
      </section>

      <section id="pilot" className="safeward-pilot-section">
        <div className="container">
          <div className="safeward-section-heading"><div><div className="section-label">12-week pilot · one hospital ward</div><h2>Start focused. Measure together.</h2></div><p>Work alongside nursing and clinical leads, then review the results before deciding on expansion.</p></div>
          <div className="safeward-pilot-grid">{PILOT.map((step, index) => <article className="safeward-pilot-card" key={step.week}><div className="pilot-week">{step.week}<span>0{index + 1}</span></div><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div>
          <div className="safeward-measures"><b>Evaluate the pilot against:</b><span><Check size={15}/> Observation completion</span><span><Check size={15}/> Escalation timeliness</span><span><Check size={15}/> Doctor response</span></div>
        </div>
      </section>

      <section className="safeward-ai-note">
        <div className="container safeward-ai-inner"><div><div className="section-label">Part of the SmartCare IoMT ecosystem</div><h2>Useful without AI. Ready to connect.</h2><p>SafeWard’s core workflow is digital observations, the hospital-approved EWS, reminders, and escalation. Optional analytics can be added later when data quality, clinical governance, and the hospital’s needs support it. AI does not replace clinician review.</p></div><Link to="/solutions" className="btn btn-outline">Explore the platform <ArrowRight size={15}/></Link></div>
      </section>

      <section className="safeward-bottom-cta"><div className="container"><span>One ward · 12 weeks · shared evaluation</span><h2>See if SafeWard fits your ward.</h2><p>Start with your current observation workflow and the measures that matter to your team.</p><Link to="/contact" className="btn btn-primary">Talk about a pilot →</Link></div></section>
    </main>
  )
}
