import { Link } from 'react-router'
import { Activity, ArrowUpRight, Building2, HeartPulse, LayoutDashboard, Radio, Tablet, Thermometer } from 'lucide-react'
import DemoDeviceSimulator from '../components/DemoDeviceSimulator'

const SHOWCASE = [
  { title: 'Patient monitoring', tag: 'Clinical care', text: 'Wearable and bedside signals reach the care team as clear, timely alerts.', Icon: HeartPulse, color: 'coral', steps: ['Patient', 'Vitals', 'Nurse'] },
  { title: 'Self service kiosk', tag: 'Patient experience', text: 'A guided check-in helps patients move from reception to the right department.', Icon: Tablet, color: 'blue', steps: ['Check in', 'Get token', 'See care team'] },
  { title: 'Environmental monitoring', tag: 'Facility intelligence', text: 'Room sensors keep teams informed about conditions in critical spaces.', Icon: Thermometer, color: 'amber', steps: ['Room sensor', 'Live reading', 'Team alert'] },
  { title: 'Connected infrastructure', tag: 'Hospital operations', text: 'Building systems and connected devices share one operational view.', Icon: Building2, color: 'violet', steps: ['Devices', 'AnantLink', 'Operations'] },
]

export default function Demo() {
  return <main className="demo-page">
    <section className="demo-hero">
      <div className="demo-hero-wash" aria-hidden="true" />
      <div className="container demo-hero-grid">
        <div className="demo-intro">
          <span className="demo-eyebrow"><span/> Product in practice</span>
          <h1>See how the pieces<br/>work <em>together.</em></h1>
          <p>A connected hospital is a collection of small, useful handoffs. Here’s how a signal can travel from a room to the people who can act on it.</p>
          <Link className="btn btn-primary" to="/contact">Talk through a workflow <ArrowUpRight size={16}/></Link>
        </div>
        <div className="demo-dashboard">
          <div className="demo-dashboard-top"><span><LayoutDashboard size={15}/> Operations overview</span><small><i/> Sample interface</small></div>
          <img src="/images/platform-dashboard.svg" alt="AnantLink hospital operations dashboard with sample readings and alerts" />
          <div className="demo-dashboard-foot"><span><i className="live-dot"/> Connected devices</span><b>Example product screen</b></div>
        </div>
      </div>
      <div className="demo-hero-note"><span>01</span> One workflow at a time <i/> <span>02</span> Connected care</div>
    </section>

    <section className="demo-showcase section">
      <div className="container">
        <div className="demo-section-heading"><div><div className="section-label">Connected workflows</div><h2>From signal to next step.</h2></div><p>Each view below shows a practical path through people, devices, and the platform.</p></div>
        <div className="demo-workflows">
          {SHOWCASE.map((item, i) => <article className={`workflow-card workflow-${item.color}`} key={item.title}>
            <div className="workflow-card-head"><span className="workflow-icon"><item.Icon size={20}/></span><span className="tag">{item.tag}</span><small>0{i + 1}</small></div>
            <h3>{item.title}</h3><p>{item.text}</p>
            <div className="workflow-scene" aria-label={`${item.steps.join(' to ')} workflow`}>
              <div className="workflow-route"><i/><i/></div>
              {item.steps.map((step, j) => <div className={`workflow-node node-${j}`} key={step}>
                <span className="workflow-node-art">{j === 0 ? <Radio size={18}/> : j === 1 ? <Activity size={18}/> : <HeartPulse size={18}/>}</span><b>{step}</b>
              </div>)}
            </div>
            <div className="workflow-caption"><span className="workflow-pulse"/> Signal moves with the workflow</div>
          </article>)}
        </div>
        <DemoDeviceSimulator />
      </div>
    </section>

    <section className="demo-cta"><div className="container demo-cta-inner"><div><div className="section-label">A real conversation</div><h2>Have a workflow in mind?</h2><p>Tell us where a handoff gets difficult. We’ll map the first useful step together.</p></div><Link to="/contact" className="btn btn-primary">Start a conversation <ArrowUpRight size={16}/></Link></div></section>
  </main>
}
