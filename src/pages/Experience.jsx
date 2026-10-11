import { useEffect, useState } from 'react'
import { Activity, AlertCircle, ArrowRight, BatteryMedium, Bell, Bluetooth, Building2, Check, ChevronRight, HeartPulse, MapPin, Package, Pause, Play, Radio, RotateCcw, Signal, Smartphone, Stethoscope, Thermometer, Wifi } from 'lucide-react'

const DEVICE_RENDER = {
  wearable: '/images/devices/vitals-patch.png',
  kiosk: '/images/devices/checkin-kiosk.png',
  sensor: '/images/devices/environment-sensor.png',
  tag: '/images/devices/patient-rtls-tag.png',
  asset: '/images/devices/asset-tracker.png',
}

const FLOWS = [
  {
    id: 'care', label: 'Patient monitoring', place: 'Inpatient ward', Icon: HeartPulse, accent: '#dc745d', tint: '#fff0ea',
    signal: 'Heart rate above review threshold', reading: '118', unit: 'bpm',
    device: { kind:'wearable', name:'Continuous vitals patch', model:'AL-VSM-04', connection:'Bluetooth LE', battery:86, sample:'Every 2 seconds', range:'HR 50–110 bpm' },
    steps: [
      ['Wearable sensor', 'Patient vitals are sampled at the bedside.'],
      ['Local gateway', 'The signal is checked against the care team’s rules.'],
      ['Nurse receives alert', 'A clinician sees the reading with patient context.'],
    ],
  },
  {
    id: 'checkin', label: 'Patient check-in', place: 'Outpatient clinic', Icon: Smartphone, accent: '#4a8fbd', tint: '#edf6fb',
    signal: 'Appointment checked in', reading: 'A-24', unit: 'queue',
    device: { kind:'kiosk', name:'Patient check-in kiosk', model:'AL-KSK-02', connection:'Wired Ethernet', battery:null, sample:'On interaction', range:'Queue status: active' },
    steps: [
      ['Registration kiosk', 'A visitor confirms their appointment at reception.'],
      ['Queue system', 'The check-in is matched to the clinic schedule.'],
      ['Front desk sees arrival', 'Staff can direct the patient to the next step.'],
    ],
  },
  {
    id: 'facility', label: 'Indoor environment', place: 'Patient room · indoor air', Icon: Thermometer, accent: '#c18b32', tint: '#fbf4e4',
    signal: 'Room conditions need review', reading: '22.4', unit: '°C',
    device: { kind:'sensor', name:'Indoor environment sensor', model:'AL-ENV-11', connection:'BLE mesh + gateway', battery:92, sample:'Every 30 seconds', range:'21–24 °C · RH 40–60% · CO₂ <1000 ppm' },
    steps: [
      ['Room sensor', 'A wall-mounted sensor samples temperature, humidity, CO₂, and particulate matter.'],
      ['Local gateway', 'Room readings are checked against the facility’s configured comfort and air-quality ranges.'],
      ['Facilities team notified', 'Staff can inspect the room, ventilation, or sensor and record the response.'],
    ],
  },
  {
    id: 'rtls', label: 'Patient safety + RTLS', place: 'Ward 2 · live location', Icon: MapPin, accent: '#8170b8', tint: '#f2effa',
    signal: 'Patient located · RTLS active', reading: 'Room 204', unit: 'Ward 2',
    device: { kind:'tag', name:'Patient location + fall badge', model:'AL-RTLS-07', connection:'BLE anchors + motion sensor', battery:78, sample:'Location every 2 seconds', range:'Room-level · ±2.4 m' },
    steps: [
      ['Patient badge + anchors', 'BLE anchors estimate the patient’s zone; an onboard motion sensor watches for impact and no movement.'],
      ['Location + event checked', 'The local service combines the last known room, event time, and movement status.'],
      ['Nurse + doctor alerted', 'Both assigned clinicians receive the room, alert type, and time for follow-up.'],
    ],
  },
  {
    id: 'assets', label: 'Equipment asset tracking', place: 'Hospital-wide · equipment', Icon: Radio, accent: '#3d91a2', tint: '#eaf6f6',
    signal: 'Equipment location updated', reading: 'ICU · 2B', unit: 'last seen',
    device: { kind:'asset', name:'Portable infusion pump tag', model:'AL-AST-12', connection:'BLE anchors + gateway', battery:64, sample:'Location every 5 seconds', range:'Zone-level · 3 anchors' },
    steps: [
      ['Equipment tag + anchors', 'A small BLE tag broadcasts an equipment ID to nearby ward anchors.'],
      ['Zone + movement updated', 'The asset board records its last-seen location and movement between departments.'],
      ['Staff can locate equipment', 'A geofence or service event can notify the assigned equipment team.'],
    ],
  },
]

export default function Experience() {
  const [flowId, setFlowId] = useState('care')
  const [campusView, setCampusView] = useState('campus')
  const [step, setStep] = useState(0)
  const [simulationRunning, setSimulationRunning] = useState(true)
  const [simulationTick, setSimulationTick] = useState(0)
  const [sampleEvent, setSampleEvent] = useState({ care:false, checkin:false, facility:false, rtls:false, assets:false })
  const flow = FLOWS.find(item => item.id === flowId)

  useEffect(() => {
    if (!simulationRunning) return undefined
    const interval = window.setInterval(() => setSimulationTick(tick => tick + 1), 1400)
    return () => window.clearInterval(interval)
  }, [simulationRunning])

  const chooseFlow = id => { setFlowId(id); setStep(0) }
  const eventOn = sampleEvent[flowId]
  const rtlsLocation = Math.floor(simulationTick / 3) % 2 === 0 ? 'Room 204' : 'Ward corridor'
  const assetLocation = ['ICU · 2B','Imaging · 1A','Ward 2 · 204'][Math.floor(simulationTick / 2) % 3]
  const indoorHumidity = 48 + simulationTick % 4
  const indoorCO2 = 710 + simulationTick % 5 * 20
  const liveReading = flowId === 'care'
    ? { value:eventOn ? '118' : String(76 + (simulationTick % 5) * 2), unit:'bpm', secondary:`SpO₂ ${eventOn ? '94' : 97 - (simulationTick % 2)}%`, state:eventOn ? 'Review alert' : 'Within sample range' }
    : flowId === 'checkin'
      ? { value:eventOn ? 'A-24' : 'Ready', unit:eventOn ? 'queue' : 'kiosk', secondary:eventOn ? 'Appointment confirmed' : '2 visitors waiting', state:eventOn ? 'Check-in complete' : 'Kiosk available' }
      : flowId === 'facility'
        ? { value:eventOn ? '27.1' : (22.1 + (simulationTick % 4) * .1).toFixed(1), unit:'°C', secondary:eventOn ? 'RH 68% · CO₂ 1,240 ppm · PM2.5 28 µg/m³' : `RH ${indoorHumidity}% · CO₂ ${indoorCO2} ppm · PM2.5 8 µg/m³`, state:eventOn ? 'Room conditions outside set range' : 'Within configured room ranges' }
        : flowId === 'rtls'
          ? { value:eventOn ? 'Room 204' : rtlsLocation, unit:'Ward 2', secondary:eventOn ? 'Impact + no movement · 12 sec' : 'Location accuracy ±2.4 m', state:eventOn ? 'Fall detected · nurse + doctor alerted' : 'Patient located · RTLS active' }
          : { value:eventOn ? 'Restricted zone' : assetLocation, unit:eventOn?'alert':'last seen', secondary:eventOn?'Geofence crossed · equipment team notified':'Last seen · 14 sec ago', state:eventOn?'Location alert · equipment team notified':'Asset tracked · status normal' }

  return <main className="experience-page">
    <section className="experience-hero">
      <div className="container">
        <div className="experience-heading">
          <div>
            <div className="experience-kicker"><span/> Connected care, in context</div>
            <h1>A hospital in <em>motion.</em></h1>
            <p>Follow a signal through a hospital—from the room where it starts to the person who can act on it.</p>
          </div>
          <div className="experience-disclaimer"><i/> Simulated campus <span>·</span> Example data, no live hospital connection</div>
        </div>

        <div className="campus-console">
          <div className="campus-topbar">
            <div className="campus-brand"><span className="campus-brand-icon"><Building2 size={17}/></span><span><b>Hospital campus</b><small>Connected operations view</small></span></div>
            <div className="campus-top-meta"><span className={`campus-time ${simulationRunning?'':'is-paused'}`}><i/> Simulation {simulationRunning?'running':'paused'}</span><span className="campus-date">DAY SHIFT <b>09:{String((42 + simulationTick) % 60).padStart(2,'0')}</b></span></div>
          </div>

          <div className="campus-layout">
            <div className="campus-world" aria-label="Illustrated isometric hospital campus with inpatient ward, outpatient clinic, emergency entrance, patients, staff, sensors, and ambulance">
              <div className="campus-view-switch" role="group" aria-label="Hospital view">
                <button className={campusView==='campus'?'is-active':''} onClick={()=>setCampusView('campus')} aria-pressed={campusView==='campus'}><Building2 size={13}/> Campus</button>
                <button className={campusView==='indoor'?'is-active':''} onClick={()=>setCampusView('indoor')} aria-pressed={campusView==='indoor'}><MapPin size={13}/> Indoor walkthrough</button>
              </div>
              {campusView==='campus'
                ? <CampusIllustration flow={flow} step={step} running={simulationRunning} eventOn={eventOn} rtlsLocation={rtlsLocation} assetLocation={assetLocation}/>
                : <HospitalInterior flow={flow} step={step} running={simulationRunning} eventOn={eventOn} assetLocation={assetLocation} reading={liveReading} tick={simulationTick} indoorHumidity={indoorHumidity} indoorCO2={indoorCO2}/>}
              {campusView==='campus'&&<>
              <div className="campus-location campus-location-ward"><i/> INPATIENT WARD</div>
              <div className="campus-location campus-location-opd"><i/> OUTPATIENT</div>
              <div className="campus-location campus-location-ed"><i/> EMERGENCY</div>
              <div className="campus-map-footer"><span><i className="map-dot map-dot-patient"/> People</span><span><i className="map-dot map-dot-device"/> Connected devices</span><span><i className="map-dot map-dot-alert"/> Workflow activity</span></div>
              </>}
              {campusView==='indoor'&&<div className={`indoor-scene-caption ${eventOn?'is-alert':''}`}><span><i/>{flow.place}</span><b>{flow.id==='rtls'&&eventOn?'FALL EVENT · ROOM 204':flow.id==='assets'&&eventOn?'GEOFENCE EVENT · ASSET EQ-118':flow.id==='facility'&&eventOn?'ROOM CONDITIONS · FACILITIES ALERT':flow.id==='checkin'?'RECEPTION · CHECK-IN':flow.id==='assets'?`EQUIPMENT BAY · ${assetLocation}`:'ROOM 204 · PATIENT CARE'}</b></div>}
            </div>

            <aside className="campus-side-panel">
              <div className="campus-panel-label"><span className="campus-panel-icon" style={{'--flow-accent':flow.accent,'--flow-tint':flow.tint}}><flow.Icon size={17}/></span><div><small>SELECTED WORKFLOW</small><b>{flow.label}</b></div></div>
              <div className={`campus-metric ${eventOn?'has-event':''}`} style={{'--flow-accent':flow.accent,'--flow-tint':flow.tint}}><small>{flow.place.toUpperCase()}</small><div className="campus-metric-reading">{liveReading.value}<span>{liveReading.unit}</span></div><p><i/>{liveReading.state}</p></div>
              <div className="campus-flow-list">
                {flow.steps.map(([title,description],index)=><button className={`campus-flow-step ${index===step?'is-current':''} ${index<step?'is-done':''}`} key={title} onClick={()=>setStep(index)} aria-current={index===step?'step':undefined}>
                  <span className="campus-flow-index">{index<step?<Check size={12}/>:`0${index+1}`}</span>
                  <span className="campus-flow-copy"><b>{title}</b><small>{description}</small></span>
                  {index<2&&<i className="campus-flow-link"/>}
                </button>)}
              </div>
              <div className="campus-step-description"><span>WHAT HAPPENS HERE</span><p>{flow.steps[step][1]}</p></div>
              <div className="campus-panel-foot"><span><Radio size={13}/> Local-first signal path</span><button onClick={()=>setStep((step+1)%flow.steps.length)} aria-label="Show next workflow step"><ArrowRight size={15}/></button></div>
            </aside>
          </div>

          <div className="campus-scenario-bar">
            <div><small>EXPLORE A WORKFLOW</small><span>Select a real-world handoff</span></div>
            <div className="campus-scenario-buttons">
              {FLOWS.map(({id,label,Icon,accent,tint})=><button key={id} className={flowId===id?'is-selected':''} style={{'--flow-accent':accent,'--flow-tint':tint}} onClick={()=>chooseFlow(id)} aria-pressed={flowId===id}><Icon size={15}/>{label}<ChevronRight className="scenario-arrow" size={13}/></button>)}
            </div>
          </div>
        </div>

        <DeviceSimulator
          flow={flow}
          reading={liveReading}
          running={simulationRunning}
          tick={simulationTick}
          eventOn={eventOn}
          indoorHumidity={indoorHumidity}
          indoorCO2={indoorCO2}
          assetLocation={assetLocation}
          onToggleRunning={() => setSimulationRunning(running => !running)}
          onToggleEvent={() => setSampleEvent(events => ({...events,[flowId]:!events[flowId]}))}
        />

        <div className="experience-principles"><span><b>01</b> A person and a device</span><i/><span><b>02</b> A connected workflow</span><i/><span><b>03</b> A useful next step</span></div>
      </div>
    </section>
  </main>
}

function CampusIllustration({ flow, step, running, eventOn, rtlsLocation, assetLocation }) {
  const signalPath = flow.id === 'checkin'
    ? 'M244 340c41-29 79 3 120 13 39 10 81 0 128-22'
    : flow.id === 'facility'
      ? 'M616 365c-7-29-16-38-43-44 60 16 91-14 123-50'
      : flow.id === 'assets'
        ? 'M590 320c-35-13-67-2-101 22m101-22c28-33 54-45 91-53m-91 53c34 23 67 39 105 50'
        : flow.id === 'rtls'
        ? 'M557 337c-21-13-37-15-54-7m54 7c31 12 61 18 99 10m-99-10c16-31 27-44 40-50'
        : 'M601 321c-36-19-59-17-86 5m93 20c61 17 92-13 124-50'
  const signalShift = flow.id === 'checkin' ? 'translate(-358 19)' : flow.id === 'facility' ? 'translate(18 43)' : undefined
  const patientShift = eventOn ? 'translate(-41 16)' : rtlsLocation === 'Room 204' ? 'translate(-41 16)' : 'translate(16 43)'
  const assetShift = assetLocation.startsWith('ICU') ? 'translate(0 0)' : assetLocation.startsWith('Imaging') ? 'translate(179 -111)' : 'translate(-37 43)'
  return <svg className={`campus-art campus-art-${flow.id} ${running?'':'is-paused'}`} viewBox="0 0 940 590" role="img" aria-label="A cutaway isometric hospital campus showing ward beds, outpatient reception, emergency access, staff, an ambulance, and connected devices">
    <defs>
      <linearGradient id="campus-ground" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f8f4e8"/><stop offset="1" stopColor="#e7eddf"/></linearGradient>
      <linearGradient id="campus-glass" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#d7edf0"/><stop offset="1" stopColor="#a9d0d5"/></linearGradient>
      <filter id="campus-shadow" x="-30%" y="-30%" width="170%" height="180%"><feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#40584d" floodOpacity=".14"/></filter>
    </defs>
    {/* campus plot and access road */}
    <path d="M468 45 898 263 468 478 38 263Z" fill="#bdcbb6" transform="translate(0 14)"/>
    <path d="M38 263 468 478v16L38 279Z" fill="#aab9a5"/><path d="m468 478 430-215v16L468 494Z" fill="#98ac9a"/>
    <path d="M468 45 898 263 468 478 38 263Z" fill="url(#campus-ground)" stroke="#a9b8a6" strokeWidth="2"/>
    <path d="M81 300 469 493 861 297" fill="none" stroke="#c8c6b1" strokeWidth="44"/>
    <path d="M81 300 469 493 861 297" fill="none" stroke="#fffdf0" strokeWidth="2" strokeDasharray="14 13"/>
    <path d="M140 231 468 397 791 235M210 324l-2-91m460 181V231" fill="none" stroke="#d2ddcf" strokeWidth="2"/>

    {/* outpatient clinic, low-rise cutaway */}
    <g filter="url(#campus-shadow)">
      <path d="m92 212 130-65 157 79-130 66Z" fill="#f0d7bb" stroke="#c0a47d" strokeWidth="2"/><path d="m92 212 157 80v75L92 288Z" fill="#e4c4a0" stroke="#b89e7c" strokeWidth="2"/><path d="m249 292 130-66v76l-130 65Z" fill="#d5ac82" stroke="#b89e7c" strokeWidth="2"/>
      <path d="m112 208 110-55 128 65-110 56Z" fill="#fffaf0" stroke="#cdb99c" strokeWidth="2"/>
      <path d="m130 213 41-21 39 20-41 21Z" fill="url(#campus-glass)"/><path d="m184 240 42-21 39 20-42 21Z" fill="url(#campus-glass)"/><path d="m240 212 42-21 39 20-42 21Z" fill="url(#campus-glass)"/>
      <path d="m130 255 38 19v42l-38-19Z" fill="#f8f1de" stroke="#ccb997"/><path d="m182 281 48 24v42l-48-24Z" fill="#f8f1de" stroke="#ccb997"/><path d="m253 314 42-21v43l-42 21Z" fill="#a8d0d1" stroke="#86afb0"/>
      <path d="m143 233 34 17m25 0 35 18m24-40 34 17" stroke="#fff" strokeWidth="3"/>
    </g>
    <path d="m165 332 14-8 17 9-14 8Z" fill="#c8d5b7"/><path d="m165 341 17 9v20l-17-9Z" fill="#ef8d6d"/><circle cx="163" cy="330" r="8" fill="#d4a988"/><path d="m154 328q8-13 17-4l-8 6Z" fill="#63554a"/>

    {/* main tower, deliberately cut away to show the ward */}
    <g filter="url(#campus-shadow)">
      <path d="m363 182 125-63 142 72-126 64Z" fill="#6ca6a0" stroke="#527d78" strokeWidth="2"/><path d="m363 182 141 73v140l-141-72Z" fill="#f5f1e7" stroke="#b8c4b8" strokeWidth="2"/><path d="m504 255 126-64v140l-126 64Z" fill="#d3e1dc" stroke="#aebfb6" strokeWidth="2"/>
      <path d="m378 187 110-55 116 59-110 56Z" fill="#fffdf5" stroke="#9ab2a9" strokeWidth="2"/>
      {/* tower windows */}
      <path d="m385 215 28 14v78l-28-14Zm43 22 28 14v78l-28-14Zm43 22 21 11v78l-21-11Z" fill="url(#campus-glass)" stroke="#91b4b4" strokeWidth="2"/>
      <path d="m520 267 31-16v33l-31 16Zm0 48 31-16v33l-31 16Zm53-75 31-16v33l-31 16Zm0 48 31-16v33l-31 16Z" fill="#a5cfd1" stroke="#83b1b5" strokeWidth="2"/>
      {/* rooftop helipad */}
      <path d="m409 183 79-40 69 35-79 40Z" fill="#e8efe2" stroke="#a6b9ad" strokeWidth="2"/><path d="m457 184 17-9 16 8-17 9Zm0 0v8m16-17v9m17-1-17 9" fill="none" stroke="#569594" strokeWidth="2"/>
    </g>
    {/* cutaway ward annex */}
    <g filter="url(#campus-shadow)">
      <path d="m511 327 108-55 113 57-108 55Z" fill="#fffaf0" stroke="#b7c7b9" strokeWidth="2"/><path d="m511 327 113 57v51l-113-57Z" fill="#e4eee4" stroke="#b7c7b9" strokeWidth="2"/><path d="m624 384 108-55v51l-108 55Z" fill="#c6d9cf" stroke="#aabeb1" strokeWidth="2"/>
      <path d="m532 331 31-16 34 17-31 16Zm55 28 31-16 33 17-31 16Zm57-28 31-16 32 17-31 16Z" fill="#fff" stroke="#c6d4c8"/>
      {/* beds, patients and screens visible in the cutaway */}
      <path d="m539 340 32-16 23 12-32 16Z" fill="#fff" stroke="#cfdbd2"/><ellipse cx="557" cy="337" rx="7" ry="5" fill="#d7ab8d" transform="rotate(-25 557 337)"/><path d="m551 341 18 8 9-5-19-9Z" fill="#e78970"/>
      <path d="m596 367 31-16 24 12-31 16Z" fill="#fff" stroke="#cfdbd2"/><ellipse cx="614" cy="364" rx="7" ry="5" fill="#d7ab8d" transform="rotate(-25 614 364)"/><path d="m608 368 18 8 9-5-19-9Z" fill="#84bfd1"/>
      <path d="m576 306 14-7 14 7-14 7Z" fill="#5d8080"/><path d="m576 306 14 7v18l-14-7Z" fill="#35565b"/><path d="m590 313 14-7v18l-14 7Z" fill="#28494a"/><path d="m591 318 3 0 2-4 3 8 3-5 2 1" fill="none" stroke="#65d1ae" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </g>

    {/* emergency department */}
    <g filter="url(#campus-shadow)">
      <path d="m659 178 77-39 91 46-77 39Z" fill="#f6f5e9" stroke="#b7c5b8" strokeWidth="2"/><path d="m659 178 91 46v67l-91-46Z" fill="#f1ead9" stroke="#b7c5b8" strokeWidth="2"/><path d="m750 224 77-39v67l-77 39Z" fill="#dae8df" stroke="#b7c5b8" strokeWidth="2"/><path d="m681 178 55-28 62 31-55 28Z" fill="#fffdf5" stroke="#b7c5b8" strokeWidth="2"/>
      <path d="m676 202 34 17v43l-34-17Z" fill="#9dc7cf" stroke="#82aeb5" strokeWidth="2"/><path d="m734 232 26 13v43l-26-13Z" fill="#fff" stroke="#bdcbbf" strokeWidth="2"/><path d="m743 243 8 0v8h8v7h-8v8h-8v-8h-8v-7h8Z" fill="#df705f"/>
    </g>
    {/* entrance canopy and ambulance */}
    <path d="m711 293 41-21 63 32-41 21Z" fill="#e5f2ee" stroke="#aec5b8" strokeWidth="2"/><path d="m729 301 39 20v18l-39-20Z" fill="#fff" stroke="#c2d1c6" strokeWidth="2"/>
    <g className="campus-ambulance"><path d="m771 355 48-24 54 27-48 24Z" fill="#fff" stroke="#9eb4a6" strokeWidth="2"/><path d="m771 355 54 27v19l-54-27Z" fill="#f2f1e7" stroke="#9eb4a6" strokeWidth="2"/><path d="m825 382 48-24v19l-48 24Z" fill="#e3e9df" stroke="#9eb4a6" strokeWidth="2"/><path d="m787 354 19-10 20 10-19 10Z" fill="#94c2c7"/><path d="m812 367 9-5v13l-9 5Z" fill="#94c2c7"/><circle cx="786" cy="381" r="5" fill="#5b6560"/><circle cx="849" cy="396" r="5" fill="#5b6560"/><path d="m819 358 7-3 7 4-7 4Z" fill="#dd6a55"/><path d="m823 358v7m-3-3h7" stroke="#fff" strokeWidth="1.5"/></g>
    <path d="M803 411c-30 34-97 43-157 11" fill="none" stroke="#d77a62" strokeWidth="2" strokeDasharray="5 7" className="campus-vehicle-route"/><circle r="4" fill="#db725c">{running&&<animateMotion dur="7s" repeatCount="indefinite" path="M803 411c-30 34-97 43-157 11"/>}</circle>

    {/* small people, trees and devices around the grounds */}
    <g className="campus-tree"><path d="m303 344 2 28" stroke="#8d795a" strokeWidth="5"/><circle cx="305" cy="333" r="17" fill="#91b890"/><circle cx="294" cy="339" r="10" fill="#a9c7a1"/><circle cx="314" cy="340" r="11" fill="#78a987"/></g>
    <g className="campus-tree tree-two"><path d="m680 414 2 26" stroke="#8d795a" strokeWidth="5"/><circle cx="682" cy="402" r="16" fill="#89b78f"/><circle cx="670" cy="409" r="9" fill="#a7c89f"/><circle cx="692" cy="410" r="10" fill="#78a987"/></g>
    <g className="campus-person"><circle cx="408" cy="355" r="7" fill="#d4a887"/><path d="m401 364 14 7-4 21-11-2-3-17Z" fill="#4d98a0"/><path d="m402 389-4 15m11-14 5 14" stroke="#52605a" strokeWidth="4" strokeLinecap="round"/></g>
    <g className="campus-person person-two"><circle cx="708" cy="350" r="7" fill="#d8ad8e"/><path d="m701 359 14 7-4 21-11-2-3-17Z" fill="#df896c"/><path d="m702 384-4 14m11-13 5 14" stroke="#52605a" strokeWidth="4" strokeLinecap="round"/></g>
    {/* Check-in kiosk appears in this view when that workflow is selected. */}
    <g className="campus-checkin-overlay"><path d="m239 314 18-9 18 9-18 9Z" fill="#d8e8ec" stroke="#91b6bd" strokeWidth="1.5"/><path d="m239 314 18 9v34l-18-9Z" fill="#6b9eaa" stroke="#56818b" strokeWidth="1.5"/><path d="m257 323 18-9v34l-18 9Z" fill="#4a7f8b" stroke="#56818b" strokeWidth="1.5"/><path d="m245 315 10-5 10 5-10 5Z" fill="#fff"/><path d="m249 315 6-3 6 3-6 3Z" fill="#53a8c3"/><path d="m248 363 20 10" stroke="#8b9a89" strokeWidth="3" strokeLinecap="round"/><circle cx="258" cy="305" r="12" fill="#edf6fb" stroke="#438fbd" strokeWidth="1.5"/><path d="m253 305 3 0 2-3 3 6 2-4h3" fill="none" stroke="#438fbd" strokeWidth="1.5" strokeLinecap="round"/></g>
    <g className="campus-facility-overlay"><rect x="601" y="354" width="27" height="18" rx="4" fill="#fff5df" stroke="#c18b32" strokeWidth="1.5"/><path d="M615 357v6l-4 4" fill="none" stroke="#c18b32" strokeWidth="2" strokeLinecap="round"/><circle cx="615" cy="363" r="1.5" fill="#c18b32"/></g>
    <g className={`campus-rtls-overlay ${eventOn?'is-alert':''}`} transform={patientShift}>
      <circle cx="557" cy="337" r="19" fill="none" stroke={eventOn?'#d95f52':'#8170b8'} strokeWidth="2" opacity=".42" className="rtls-location-ring"/>
      <circle cx="557" cy="337" r="11" fill={eventOn?'#fff0eb':'#f2effa'} stroke={eventOn?'#d95f52':'#8170b8'} strokeWidth="2"/>
      <path d="M557 331c-3 0-5 2-5 5 0 4 5 8 5 8s5-4 5-8c0-3-2-5-5-5Zm0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" fill={eventOn?'#c95649':'#7462aa'}/>
      {eventOn&&<g><rect x="570" y="324" width="29" height="14" rx="3" fill="#fff" stroke="#d95f52"/><text x="574" y="334" fill="#b94f45" fontSize="6" fontWeight="700">FALL</text></g>}
    </g>
    <g className={`campus-asset-overlay ${eventOn?'is-alert':''}`} transform={assetShift}>
      <circle cx="590" cy="320" r="16" fill="none" stroke={eventOn?'#d95f52':'#3d91a2'} strokeWidth="2" opacity=".42" className="asset-location-ring"/>
      <rect x="580" y="310" width="20" height="20" rx="5" fill={eventOn?'#fff0eb':'#eaf6f6'} stroke={eventOn?'#d95f52':'#3d91a2'} strokeWidth="2"/>
      <path d="M585 320h10m-5-5v10" stroke={eventOn?'#c95649':'#378697'} strokeWidth="2" strokeLinecap="round"/>
      {eventOn&&<g><rect x="603" y="307" width="43" height="14" rx="3" fill="#fff" stroke="#d95f52"/><text x="608" y="317" fill="#b94f45" fontSize="5.5" fontWeight="700">ZONE ALERT</text></g>}
    </g>
    {/* device signal route across the campus */}
    <path d={signalPath} fill="none" stroke={flow.accent} strokeWidth="3" strokeDasharray="6 8" strokeLinecap="round" className="campus-signal-route"/>
    <circle r="5" fill={flow.accent} className="campus-signal-dot">{running&&<animateMotion dur="4.2s" repeatCount="indefinite" path={signalPath}/>}</circle>
    <g className={`campus-signal-pulse pulse-step-${step}`} transform={signalShift}><circle cx="598" cy="321" r="14" fill={flow.tint} stroke={flow.accent} strokeWidth="2"/><path d="M591 321h4l3-5 4 10 4-7h5" fill="none" stroke={flow.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></g>
    <g className="campus-building-label"><rect x="389" y="83" width="139" height="27" rx="7" fill="#fff" stroke="#d7dfd3"/><text x="402" y="101" fill="#516a61" fontSize="9" fontFamily="Arial" fontWeight="700">INPATIENT TOWER</text></g>
    <g className="campus-building-label"><rect x="76" y="380" width="127" height="27" rx="7" fill="#fff" stroke="#d7dfd3"/><text x="89" y="398" fill="#8b6847" fontSize="9" fontFamily="Arial" fontWeight="700">OPD REGISTRATION</text></g>
    <g className="campus-building-label"><rect x="753" y="164" width="115" height="27" rx="7" fill="#fff" stroke="#d7dfd3"/><text x="766" y="182" fill="#a25f4f" fontSize="9" fontFamily="Arial" fontWeight="700">EMERGENCY BAY</text></g>
  </svg>
}

function HospitalInterior({ flow, step, running, eventOn, assetLocation, reading, tick, indoorHumidity, indoorCO2 }) {
  const isAsset = flow.id === 'assets'
  const isAlert = eventOn && (flow.id === 'rtls' || isAsset || flow.id === 'facility')
  const route = isAsset ? 'M728 376c-88 20-154 5-238-48-57-36-102-63-162-81'
    : flow.id==='rtls' ? 'M168 288c86 39 153 106 244 90 44-8 74-27 96-51'
      : flow.id==='care' ? 'M168 288c92 25 138 46 204 27 57-16 87-71 136-90'
        : flow.id==='facility' ? 'M334 276c54 37 102 62 164 40 35-13 55-53 62-89'
          : 'M214 330c83 5 141 15 201-27 43-30 52-65 61-94'
  const targetShift = isAsset ? 'translate(180 60)' : flow.id==='rtls' ? (reading.value==='Ward corridor'?'translate(0 0)':'translate(-340 -40)') : flow.id==='facility' || flow.id==='care' ? 'translate(-340 -40)' : undefined
  const interiorData = flow.id==='care' ? [['HEART RATE',`${reading.value} bpm`],['OXYGEN','97% SpO₂'],['ROOM','204 · Ward 2']]
    : flow.id==='rtls' ? [['PATIENT','PT-042'],['LAST SEEN',reading.value],['ACCURACY','±2.4 m']]
      : flow.id==='facility' ? [['TEMP',`${reading.value} °C`],['HUMIDITY',`${eventOn?68:indoorHumidity}% RH`],['CO₂',`${eventOn?'1,240':indoorCO2} ppm`]]
        : flow.id==='assets' ? [['ASSET','EQ-118 · Pump'],['LAST SEEN',eventOn?'Restricted zone':assetLocation],['BATTERY','64% · BLE']]
          : [['QUEUE','2 waiting'],['CHECK-IN','Ready'],['AREA','OPD · Reception']]
  return <svg className={`campus-art indoor-art ${running?'':'is-paused'}`} viewBox="0 0 940 590" role="img" aria-label="Perspective walkthrough of a hospital ward corridor with patient rooms, bedside monitoring, nurse station, staff, and equipment">
    <defs>
      <linearGradient id="indoor-floor" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#edf0e9"/><stop offset="1" stopColor="#d6ddd4"/></linearGradient>
      <linearGradient id="indoor-left" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#e6eee8"/><stop offset="1" stopColor="#cddbd4"/></linearGradient>
      <linearGradient id="indoor-right" x1="1" y1="0" x2="0" y2="1"><stop stopColor="#f3f0e7"/><stop offset="1" stopColor="#dfe4d9"/></linearGradient>
      <filter id="indoor-shadow" x="-30%" y="-30%" width="170%" height="180%"><feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#3e5149" floodOpacity=".13"/></filter>
    </defs>
    {/* Corridor perspective: the back wall is the vanishing point. */}
    <path d="M0 0h940v590H0Z" fill="#e9eee8"/><path d="M0 0 470 130 470 385 0 590Z" fill="url(#indoor-left)"/><path d="M940 0 470 130v255l470 205Z" fill="url(#indoor-right)"/><path d="M0 590 470 385 940 590Z" fill="url(#indoor-floor)"/><path d="M0 0h940v142H0Z" fill="#f8f6ee"/><path d="M0 142 470 130 940 142" fill="none" stroke="#d2ddd4" strokeWidth="3"/>
    {/* Recessed lighting and wall rails recede into the corridor. */}
    <path d="M82 65 458 153m88 0L865 63" stroke="#fffdf4" strokeWidth="13" strokeLinecap="round"/><path d="M0 337 470 258 940 337M0 360 470 281 940 360" fill="none" stroke="#91a8a0" strokeWidth="5" opacity=".65"/><path d="m80 580 390-195 390 195M230 590l240-205 240 205M0 485l470-100 470 100" fill="none" stroke="#c3cdc2" strokeWidth="2" opacity=".65"/>
    {/* Room 204 on the left: glazed observation panel and bedside scene. */}
    <path d="m61 177 157-31v187L61 381Z" fill="#bdcdc7" stroke="#859e94" strokeWidth="3"/><path d="m76 190 126-25v147L76 343Z" fill="#d9e8e3" stroke="#f8fbf6" strokeWidth="5"/><path d="M139 178v169m-63-91 126-25" stroke="#91aaa1" strokeWidth="3"/><path d="m72 163 150-29v18L72 182Z" fill="#fbfaf1" stroke="#a6b9ad"/><rect x="79" y="143" width="65" height="21" rx="5" fill="#fff" stroke="#d5ded3"/><text x="88" y="157" fontSize="8" fontFamily="Arial" fontWeight="700" fill="#526c62">ROOM 204</text>
    <g filter="url(#indoor-shadow)"><path d="m123 292 120-29 86 35-121 33Z" fill="#fff" stroke="#bac9c0" strokeWidth="2"/><path d="m123 292 85 39v40l-85-39Z" fill="#d7e4dc" stroke="#bac9c0"/><path d="m208 331 121-33v39l-121 34Z" fill="#aec4bb" stroke="#bac9c0"/><path d="m138 285 56-14 33 14-58 15Z" fill="#fff" stroke="#d4ddd4"/><ellipse cx="168" cy="288" rx="10" ry="7" fill="#d6aa8c" transform="rotate(-16 168 288)"/><path className="indoor-patient-breath" d="m157 295 47 18 28-9-49-19Z" fill="#86b5c3"/><path d="m154 325 2 26m160-62 1 29" stroke="#71877f" strokeWidth="4"/><circle cx="164" cy="371" r="6" fill="#53645e"/><circle cx="300" cy="355" r="6" fill="#53645e"/></g>
    {/* Bedside monitor, infusion pump and wall service panel. */}
    <path d="m257 240 27-7 22 10-27 8Z" fill="#627b78"/><path d="m257 240 22 11v31l-22-10Z" fill="#3c5958"/><path d="m279 251 27-8v31l-27 8Z" fill="#294747"/><path d="m261 244 9 4 2-5 3 10 3-6 7 2" fill="none" stroke="#79e1b3" strokeWidth="2"/><path d="m318 264 18-7 12 6v49l-18 7Z" fill="#f8f8ef" stroke="#9aada3" strokeWidth="2"/><rect x="326" y="270" width="12" height="14" rx="2" fill="#dcece2" stroke="#aabbb0"/><path d="M330 274v6m-3-3h6" stroke="#4b967c" strokeWidth="1.5"/><path d="m344 269 6 3v44l-6-3m-21 25 27-8" fill="none" stroke="#72867d" strokeWidth="3"/>
    {/* Nurse station at the end of the hall and a staff member checking a screen. */}
    <path d="m379 220 88-19 91 19-89 21Z" fill="#f7f3e7" stroke="#bdcabe" strokeWidth="2"/><path d="m379 220 90 21v39l-90-21Z" fill="#c8d9d0" stroke="#a7bdb1" strokeWidth="2"/><path d="m469 241 89-21v39l-89 21Z" fill="#a9c4b9" stroke="#93aca1" strokeWidth="2"/><path d="m405 217 29-7 32 8-29 7Z" fill="#5c7a78"/><path d="m405 217 32 8v24l-32-8Z" fill="#345453"/><path d="m411 218 18 5m-14-2 12 3" stroke="#8cddb4" strokeWidth="1.5"/><circle cx="505" cy="191" r="9" fill="#d4a888"/><path d="m496 202 18 5 6 35-27 6-8-28Z" fill="#4e9188"/><path d="m496 244-5 24m20-24 8 21" stroke="#495e57" strokeWidth="5" strokeLinecap="round"/><path d="m493 212-19 17m38-14 13 12" stroke="#d4a888" strokeWidth="4" strokeLinecap="round"/>
    {/* Opposite-side room doors and practical wayfinding. */}
    <path d="m708 172 139 27v114l-139-33Z" fill="#d1ded5" stroke="#9fb3a8" strokeWidth="3"/><path d="m724 187 108 21v82l-108-26Z" fill="#e8f0e9" stroke="#f7faf3" strokeWidth="5"/><path d="m724 234 108 21" stroke="#9fb3a8" strokeWidth="3"/><circle cx="813" cy="251" r="3" fill="#9aaf9f"/><rect x="739" y="151" width="79" height="21" rx="5" fill="#fff" stroke="#d5ded3"/><text x="750" y="165" fontSize="8" fontFamily="Arial" fontWeight="700" fill="#65776d">ROOM 206</text>
    <path d="m674 127 56 11 5 22-57-11Z" fill="#fff" stroke="#d5ded3"/><path d="m686 137 4 1m5 1 4 1m5 1 4 1" stroke="#6a9d91" strokeWidth="2"/><text x="686" y="153" fontSize="6" fontFamily="Arial" fontWeight="700" fill="#71877c">WARD 2 · WEST</text>
    <g className="indoor-walking-nurse"><ellipse cx="430" cy="426" rx="17" ry="5" fill="#74877e" opacity=".16"/><circle cx="430" cy="369" r="9" fill="#d8ad8e"/><path d="M421 367q2-11 11-8 7 2 7 9l-4-4-8 1Z" fill="#493e38"/><path d="m421 380 18-2 8 36-28 2Z" fill="#3e8790"/><path d="m423 385-14 20m28-20 14 18" stroke="#d8ad8e" strokeWidth="5" strokeLinecap="round"/><path d="m423 414-4 17m19-17 7 16" stroke="#485e58" strokeWidth="6" strokeLinecap="round"/><path d="M428 382q-2 13 5 15t5-11" fill="none" stroke="#f2f5ec" strokeWidth="2"/><rect x="435" y="393" width="8" height="10" rx="1" fill="#f8f8ee" stroke="#c6d2c7"/></g>
    <image className="indoor-real-nurse" href="/images/devices/walking-nurse.png" x="474" y="167" width="62" height="112" preserveAspectRatio="xMidYMax meet" aria-label="Nurse checking a mobile device at the ward station"><animateMotion dur="8s" repeatCount="indefinite" path="M 0 0 C 6 7 16 14 22 22 C 17 14 7 5 0 0"/></image>
    {/* Sample asset cart moves through the ward; tag and patient signals share a route. */}
    <g className="indoor-equipment-cart" transform="translate(0 0)"><path d="m642 340 65-14 37 18-65 17Z" fill="#f7f7ef" stroke="#8ca29a" strokeWidth="2"/><path d="m642 340 37 21v35l-37-21Z" fill="#d7e1d9" stroke="#8ca29a" strokeWidth="2"/><path d="m679 361 65-17v35l-65 17Z" fill="#b2c7bd" stroke="#8ca29a" strokeWidth="2"/><rect x="661" y="335" width="18" height="18" rx="4" fill="#eaf6f6" stroke="#3d91a2" strokeWidth="2"/><path d="M666 344h8m-4-4v8" stroke="#3d91a2" strokeWidth="1.5"/><circle cx="654" cy="395" r="6" fill="#65756d"/><circle cx="713" cy="383" r="6" fill="#65756d"/><path d="m687 350 7-19 11 3v20" fill="none" stroke="#879990" strokeWidth="3"/></g>
    <path d={route} fill="none" stroke={isAlert?'#d95f52':flow.accent} strokeWidth="3" strokeDasharray="6 8" strokeLinecap="round" className="indoor-signal-route"/><circle r="5" fill={isAlert?'#d95f52':flow.accent} className="indoor-signal-dot">{running&&<animateMotion dur="5s" repeatCount="indefinite" path={route}/>}</circle>
    <g className={`indoor-target ${isAlert?'is-alert':''}`} transform={targetShift}><circle cx="508" cy="328" r="17" fill="none" stroke={isAlert?'#d95f52':flow.accent} strokeWidth="2" className="indoor-target-ring"/><circle cx="508" cy="328" r="8" fill={isAlert?'#fff0eb':flow.tint} stroke={isAlert?'#d95f52':flow.accent} strokeWidth="2"/><circle cx="508" cy="328" r="3" fill={flow.accent}/></g>
    <g><rect x="614" y="86" width="241" height="36" rx="8" fill="#fffdf6" stroke="#dce3d9"/><circle cx="631" cy="104" r="5" fill={isAlert?'#d95f52':flow.accent}/><text x="644" y="101" fontSize="8" fontFamily="Arial" fontWeight="700" fill="#425a51">{isAlert?'ALERT · '+(isAsset?'GEOFENCE':'ROOM 204'):flow.label.toUpperCase()}</text><text x="644" y="113" fontSize="7" fontFamily="Arial" fill="#839087">{isAsset?assetLocation:'Ward 2 · Local monitoring'}</text></g>
    <g className="indoor-live-monitor"><rect x="256" y="236" width="43" height="29" rx="3" fill="#1e3e41" stroke="#9caea4" strokeWidth="2"/><text x="261" y="246" fontSize="5" fontFamily="Arial" fontWeight="700" fill="#9bb9aa">HR</text><text x="276" y="257" fontSize="10" fontFamily="Arial" fontWeight="700" fill="#a9efc3">{flow.id==='care'?reading.value:'76'}</text><path d="M261 260h6l3-4 3 6 4-5h12" fill="none" stroke="#69d6a1" strokeWidth="1"/></g>
    <g className="indoor-walkway-data"><rect x="604" y="132" width="250" height="51" rx="7" fill="#fffefa" stroke="#d8e0d6"/><text x="615" y="145" fontSize="6" fontFamily="Arial" fontWeight="700" fill="#87948a" letterSpacing=".8">LIVE SAMPLE · {running?'UPDATING':'PAUSED'}</text>{interiorData.map(([label,value],index)=><g key={label} transform={`translate(${615+index*78} 0)`}><text x="0" y="158" fontSize="5.5" fontFamily="Arial" fontWeight="700" fill="#929b91">{label}</text><text x="0" y="171" fontSize="8" fontFamily="Arial" fontWeight="700" fill={isAlert?'#bd604f':'#47645a'}>{value}</text></g>)}</g>
  </svg>
}

function DeviceSimulator({ flow, reading, running, tick, eventOn, indoorHumidity, indoorCO2, assetLocation, onToggleRunning, onToggleEvent }) {
  const { device } = flow
  const history = Array.from({length:18},(_,index)=>{
    const x=10+index*14
    const wave=flow.id==='care' ? Math.sin((index+tick)*1.15)*8 : flow.id==='facility' ? Math.sin((index+tick)*.36)*5 : flow.id==='rtls' ? Math.sin((index+tick)*.28)*3 : flow.id==='assets' ? ((index+tick)%6<3?4:-4) : Math.sin((index+tick)*.42)*4
    const eventPeak=eventOn&&index>12 ? -Math.sin((index-12)/5*Math.PI)*17 : 0
    return `${x},${39+wave+eventPeak}`
  }).join(' ')
  const DeviceIcon = device.kind==='wearable'?HeartPulse:device.kind==='kiosk'?Smartphone:device.kind==='tag'?MapPin:device.kind==='asset'?Package:Thermometer
  const eventLabel = flow.id==='care' ? (eventOn?'Clear sample alert':'Trigger sample vitals alert') : flow.id==='checkin' ? (eventOn?'Reset sample check-in':'Complete sample check-in') : flow.id==='rtls' ? (eventOn?'Clear sample fall alert':'Trigger sample fall alert') : flow.id==='assets' ? (eventOn?'Clear sample geofence alert':'Trigger sample geofence alert') : (eventOn?'Clear room alert':'Trigger room conditions alert')

  return <section className="device-simulator" aria-labelledby="device-simulator-title">
    <div className="device-simulator-heading"><div><div className="section-label">Device lab</div><h2 id="device-simulator-title">Try the device simulation.</h2><p>See what a device reports, how the connection behaves, and what the care team receives.</p></div><span className="device-demo-badge"><AlertCircle size={14}/> SIMULATED · NO HARDWARE CONNECTED</span></div>
    <div className="device-simulator-card" style={{'--flow-accent':flow.accent,'--flow-tint':flow.tint}}>
      <div className="device-simulator-visual">
        <div className="device-visual-top"><span>DEVICE VIEW</span><span className="device-powered"><i/> POWERED</span></div>
        <div className={`device-object device-object-${device.kind}`} aria-label={`${device.name} device simulation`}>
          <span className="device-signal-rings" aria-hidden="true" />
          <img className="device-hardware-render" src={DEVICE_RENDER[device.kind]} alt={device.name} />
          <span className="device-surface-led" aria-hidden="true" />
          {device.kind==='kiosk'&&<span className="device-screen-scan" aria-hidden="true" />}
        </div>
        <div className="device-visual-caption"><span><DeviceIcon size={14}/>{device.name}</span><b>{device.model}</b></div>
      </div>

      <div className="device-simulator-details">
        <div className="device-details-head"><div><small>SIMULATED DEVICE</small><h3>{device.name}</h3><p>{device.model} <i/> {flow.place}</p></div><span className={`device-state ${eventOn?'device-state-alert':''}`}><i/>{eventOn?(flow.id==='rtls'?'Fall alert sent':'Event triggered'):'Connected'}</span></div>
        <div className="device-reading-row"><div className="device-reading-main"><small>LIVE SAMPLE</small><b>{reading.value}<span>{reading.unit}</span></b><em className={eventOn?'reading-alert':''}><i/>{reading.secondary}</em></div><div className="device-graph" aria-label="Recent simulated device readings"><div className="device-graph-label"><span>RECENT SIGNAL</span><small>{running?'LIVE':'PAUSED'}</small></div><svg viewBox="0 0 260 78" role="img" aria-label="Simulated readings over time"><path d="M0 60H260M0 39H260M0 18H260" stroke="#e7e9e1" strokeDasharray="3 5"/><polyline points={history} fill="none" stroke={eventOn?'#dd715b':flow.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="device-graph-line"/></svg></div></div>
        {flow.id==='facility'&&<><div className="environment-reading-grid"><div><small>TEMPERATURE</small><b>{reading.value} °C</b></div><div><small>HUMIDITY</small><b>{eventOn?'68':indoorHumidity}<i>% RH</i></b></div><div><small>CARBON DIOXIDE</small><b>{eventOn?'1,240':indoorCO2}<i>ppm</i></b></div><div><small>PARTICULATES</small><b>{eventOn?'28':'8'}<i>µg/m³</i></b></div></div><div className={`environment-notification ${eventOn?'is-alert':''}`}><Bell size={13}/><span><b>{eventOn?'Facilities alert raised':'Facility monitoring active'}</b><small>{eventOn?'Temperature, humidity, and CO₂ exceed configured room ranges':'Room 204 · local gateway checks configured limits'}</small></span><span className="environment-recipient">Facilities team</span></div></>}
        <div className="device-spec-grid">
          <DeviceSpec Icon={device.connection.includes('Bluetooth')?Bluetooth:Wifi} label="Connection" value={device.connection}/>
          <DeviceSpec Icon={BatteryMedium} label="Power" value={device.battery===null?'Mains powered':`${device.battery}% battery`}/>
          <DeviceSpec Icon={Activity} label="Sample interval" value={device.sample}/>
          <DeviceSpec Icon={Signal} label="Configured check" value={device.range}/>
        </div>
        {flow.id==='rtls'&&<div className={`rtls-alert-route ${eventOn?'is-alert':''}`}><div className="rtls-alert-heading"><span><Bell size={14}/></span><div><b>{eventOn?'Fall response':'Alert routing'}</b><small>{eventOn?'Impact + 12 seconds without movement':'Assigned care team · Ward 2'}</small></div></div><div className="rtls-recipients"><span><Stethoscope size={13}/> Assigned nurse <b>{eventOn?'Alert sent':'On duty'}</b></span><span><Stethoscope size={13}/> On-call doctor <b>{eventOn?'Alert sent':'On duty'}</b></span></div><p>Alert includes patient tag, last known room, event time, and acknowledgement status.</p></div>}
        {flow.id==='assets'&&<div className={`rtls-alert-route ${eventOn?'is-alert':''}`}><div className="rtls-alert-heading"><span><Bell size={14}/></span><div><b>{eventOn?'Geofence notification':'Asset status'}</b><small>{eventOn?'Restricted zone entered · just now':'Infusion pump · available for assignment'}</small></div></div><div className="asset-status-row"><span><Package size={13}/> Pump ID <b>EQ-118</b></span><span><MapPin size={13}/> Last seen <b>{eventOn?'Restricted zone':assetLocation}</b></span></div><p>Location history and service status stay with the equipment record; no patient identity is shown.</p></div>}
        <div className="device-simulator-actions"><button className="device-event-button" onClick={onToggleEvent} aria-pressed={eventOn}>{eventOn?<RotateCcw size={15}/>:<Activity size={15}/>} {eventLabel}</button><button className="device-play-button" onClick={onToggleRunning}>{running?<Pause size={14}/>:<Play size={14}/>} {running?'Pause':'Resume'} simulation</button></div>
        <p className="device-simulator-note">Sample values are generated in this browser for demonstration. They are not patient data and do not come from a physical device.</p>
      </div>
    </div>
  </section>
}

function DeviceSpec({ Icon, label, value }) {
  return <div className="device-spec"><span><Icon size={13}/>{label}</span><b>{value}</b></div>
}
