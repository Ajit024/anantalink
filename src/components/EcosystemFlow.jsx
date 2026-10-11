import { Activity, ArrowRight, Bell, Check, HeartPulse, Radio } from 'lucide-react'

export default function EcosystemFlow() {
  return (
    <section className="real-flow section" aria-labelledby="real-flow-title">
      <div className="container">
        <div className="real-flow-heading">
          <div>
            <div className="section-label">A connected care workflow</div>
            <h2 id="real-flow-title">From bedside signal<br />to informed response.</h2>
          </div>
          <p>One clear path from the patient and their devices to the people providing care.</p>
        </div>

        <div className="real-flow-board" aria-label="Illustrative flow: patient monitoring device sends data to AnantLink, which routes an alert to a nurse">
          <article className="flow-scene patient-scene">
            <div className="scene-heading"><span className="scene-number">01</span><div><b>At the bedside</b><small>Patient + connected VSM kit</small></div></div>
            <div className="bedside-art">
              <img className="flow-product-image" src="/images/solutions/vsm-product.webp" alt="Vital signs monitor, wearable sensor patch, and pulse oximeter" loading="lazy" />
              <div className="device-label"><HeartPulse size={14} /><span>Monitor + wearable + SpO₂</span><i>Sample kit</i></div>
            </div>
            <p className="scene-copy">A monitor captures a change in the patient’s condition.</p>
          </article>

          <div className="flow-connector connector-one" aria-hidden="true"><span className="connector-line"/><span className="signal-packet"/><ArrowRight size={17}/><small>secure signal</small></div>

          <article className="flow-scene platform-scene">
            <div className="scene-heading"><span className="scene-number">02</span><div><b>AnantLink platform</b><small>Local processing + context</small></div></div>
            <div className="platform-art">
              <img className="flow-dashboard-image" src="/images/platform-dashboard.svg" alt="AnantLink hospital dashboard with patient readings, device status, room context, and care team alerts" loading="lazy" />
              <div className="platform-routes"><div><Radio size={15}/><span>Device signal received</span><Check size={14}/></div><div><Activity size={15}/><span>Patient + room context</span><Check size={14}/></div><div><Bell size={15}/><span>Route to assigned team</span><i className="route-active"/></div></div>
            </div>
            <p className="scene-copy">Signals are processed locally and routed by the hospital’s workflow.</p>
          </article>

          <div className="flow-connector connector-two" aria-hidden="true"><span className="connector-line"/><span className="signal-packet"/><ArrowRight size={17}/><small>role-based alert</small></div>

          <article className="flow-scene care-scene">
            <div className="scene-heading"><span className="scene-number">03</span><div><b>Care team responds</b><small>Relevant alert + patient context</small></div></div>
            <div className="care-art">
              <img className="flow-care-photo" src="https://images.pexels.com/photos/6010862/pexels-photo-6010862.jpeg?auto=compress&cs=tinysrgb&w=1000" alt="Clinician reviewing information on a tablet with a patient" loading="lazy" />
              <div className="phone-alert"><span><Bell size={14}/></span><div><b>Patient alert</b><small>Review requested</small></div><i/></div>
              <a className="flow-photo-credit" href="https://www.pexels.com/photo/a-nurse-and-patient-looking-the-digital-tablet-6010862/" target="_blank" rel="noreferrer">Photo: Tima Miroshnichenko · Pexels</a>
            </div>
            <p className="scene-copy">The right clinician receives context and can follow up.</p>
          </article>
        </div>

        <div className="flow-footer"><span><span className="footer-dot"/> Illustrative workflow</span><span>Designed for hospital networks, including local / offline operation</span></div>
      </div>
    </section>
  )
}
