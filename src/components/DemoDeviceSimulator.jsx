import { useEffect, useState } from 'react'
import { Activity, AlertTriangle, BatteryMedium, Bell, Bluetooth, Check, MapPin, Radio, Thermometer, Wifi } from 'lucide-react'

const DEVICES = [
  { id:'vitals', name:'Continuous vitals patch', model:'AL-VSM-04', image:'/images/devices/vitals-patch.png', connection:'Bluetooth LE', Icon:Activity, value:(tick)=>`${78 + tick % 8}`, unit:'bpm', secondary:'SpO₂ 96% · Room 204', event:'Vitals threshold crossed' },
  { id:'kiosk', name:'Patient check-in kiosk', model:'AL-KSK-02', image:'/images/devices/checkin-kiosk.png', connection:'Wired Ethernet', Icon:Wifi, value:()=> 'Ready', unit:'kiosk', secondary:'2 visitors waiting', event:'Sample check-in completed' },
  { id:'sensor', name:'Indoor environment sensor', model:'AL-ENV-11', image:'/images/devices/environment-sensor.png', connection:'BLE mesh + gateway', Icon:Thermometer, value:()=> '22.4', unit:'°C', secondary:'48% RH · CO₂ 640 ppm', event:'Room conditions need review' },
  { id:'patient', name:'Patient RTLS badge', model:'AL-RT-08', image:'/images/devices/patient-rtls-tag.png', connection:'BLE anchors', Icon:MapPin, value:()=> 'Room 204', unit:'RTLS', secondary:'Patient tag · ±2.4 m', event:'Fall alert sent to assigned team' },
  { id:'asset', name:'Equipment asset tag', model:'AL-AST-12', image:'/images/devices/asset-tracker.png', connection:'BLE anchors + gateway', Icon:Radio, value:()=> 'Ward 2', unit:'last seen', secondary:'Infusion pump · EQ-118', event:'Asset entered restricted zone' },
]

export default function DemoDeviceSimulator() {
  const [active, setActive] = useState(DEVICES[0].id)
  const [running, setRunning] = useState(true)
  const [eventOn, setEventOn] = useState(false)
  const [tick, setTick] = useState(0)
  const device = DEVICES.find(item => item.id === active)
  const points = Array.from({length:18},(_,i)=>`${i*15},${38 + Math.sin((i+tick)*.72)*8 + (eventOn && i>12 ? -Math.sin((i-12)/5*Math.PI)*15 : 0)}`).join(' ')

  useEffect(() => {
    if (!running) return undefined
    const timer = window.setInterval(() => setTick(value => value + 1), 1600)
    return () => window.clearInterval(timer)
  }, [running])

  const selectDevice = id => { setActive(id); setEventOn(false) }

  return <section className="demo-device-lab" aria-labelledby="demo-device-title">
    <div className="demo-device-heading"><div><div className="section-label">Interactive device lab</div><h2 id="demo-device-title">A real device. A signal you can follow.</h2><p>Choose a device and watch its sample reading travel into a care workflow.</p></div><span className="demo-simulation-badge"><i/> SIMULATED · SAMPLE DATA</span></div>
    <div className="demo-device-tabs" role="tablist" aria-label="Choose a simulated device">
      {DEVICES.map(({id,name,Icon}) => <button key={id} type="button" role="tab" aria-selected={active===id} className={active===id?'is-selected':''} onClick={()=>selectDevice(id)}><Icon size={15}/>{name}</button>)}
    </div>
    <div className={`demo-device-console demo-device-${device.id}`}>
      <div className="demo-device-visual"><div className="demo-device-visual-top"><span>DEVICE VIEW</span><span><i/> {running?'CONNECTED':'PAUSED'}</span></div><div className="demo-device-render-wrap"><span className="demo-device-ripple"/><img src={device.image} alt={device.name}/>{device.id==='kiosk'&&<i className="demo-device-scan"/>}</div><div className="demo-device-visual-foot"><device.Icon size={14}/>{device.model}<span><BatteryMedium size={13}/> {device.id==='kiosk'?'Mains':device.id==='sensor'?'92%':'86%'}</span></div></div>
      <div className="demo-device-data"><div className="demo-device-title-row"><div><small>SIMULATED DEVICE</small><h3>{device.name}</h3><p>{device.model} · {device.connection}</p></div><span className={`demo-connection-state ${eventOn?'has-event':''}`}><i/>{eventOn?'Action required':'Online'}</span></div>
        <div className="demo-live-row"><div><small>LIVE SAMPLE</small><b>{device.value(tick)}<em>{device.unit}</em></b><span className={eventOn?'is-alert':''}><i/>{eventOn?device.event:device.secondary}</span></div><div className="demo-live-graph"><div><small>RECENT SIGNAL</small><b>{running?'LIVE':'PAUSED'}</b></div><svg viewBox="0 0 255 64" role="img" aria-label="Animated simulated device signal"><path d="M0 52H255M0 32H255M0 12H255" stroke="#e7ece7" strokeDasharray="3 5"/><polyline points={points} fill="none" stroke={eventOn?'#d96d59':'#4a9b7c'} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div></div>
        <div className="demo-device-context"><span><Radio size={14}/> Device signal received <Check size={14}/></span><b className="demo-context-line"/><span><Activity size={14}/> Patient + room context <Check size={14}/></span><b className="demo-context-line"/><span className={eventOn?'is-alert':''}><Bell size={14}/> Route to assigned team <i/></span></div>
        {eventOn&&<div className="demo-device-alert"><AlertTriangle size={15}/><span><b>{device.event}</b><small>Sample alert routed to the assigned team · Ward 2</small></span></div>}
        <div className="demo-device-actions"><button type="button" className="demo-trigger-button" onClick={()=>setEventOn(value=>!value)}><Bell size={14}/>{eventOn?'Clear sample event':'Trigger sample event'}</button><button type="button" onClick={()=>setRunning(value=>!value)}>{running?'Pause':'Resume'} simulation</button></div>
        <p className="demo-device-note">For demonstration only. Values are generated in this browser and are not patient data.</p>
      </div>
    </div>
  </section>
}
