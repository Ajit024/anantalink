import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ClipboardList, MessagesSquare, Route, Mail, MapPin, Phone } from 'lucide-react'

// ── Replace these three values with yours from emailjs.com ────────────────────
const EMAILJS_SERVICE_ID  = 'service_vu7phko'   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'template_sap8plq'  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'E87xiLqgL7OvXp5Io'   // e.g. 'aBcDeFgHiJkLmNoP'
// ─────────────────────────────────────────────────────────────────────────────

const INTERESTS = [
  'SafeWard patient safety pilot',
  'Patient Monitoring',
  'RTLS Asset Tracking',
  'Hospital Automation',
  'Digital Twin',
  'AI Analytics',
  'BLE Infrastructure',
  'Full Platform',
  'Pilot Partnership',
  'Technology Integration',
  'Just exploring',
]

export default function Contact() {
  const [form, setForm]       = useState({ name:'', org:'', email:'', phone:'', beds:'', interest:'', message:'' })
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors]   = useState({})
  const [sendError, setSendError] = useState('')

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Your name helps us address you properly'
    if (!form.org.trim())  e.org  = "We'd love to know where you work"
    if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "We'll need a valid email to reply"
    return e
  }

  const handleSubmit = async () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }

    setLoading(true)
    setSendError('')

    // Keys must match {{variable}} names in your EmailJS template
    const templateParams = {
      // from_name:    form.name,
      // organisation: form.org,
      // from_email:   form.email,
      // phone:        form.phone    || 'Not provided',
      // beds:         form.beds     || 'Not specified',
      // interest:     form.interest || 'Not specified',
      // message:      form.message  || 'No message provided',
      user_name:     form.name,
      user_org:      form.org,
      user_email:    form.email,
      user_phone:    form.phone    || 'Not provided',
      user_beds:     form.beds     || 'Not specified',
      user_interest: form.interest || 'Not specified',
      user_message:  form.message  || 'No message provided',
      reply_to:     form.email,
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      setSent(true)
      
    } catch (err) {
      console.error('EmailJS error:', err)
      setSendError('Something went wrong. Please email us directly at contact@anantlink.com')
    } finally {
      setLoading(false)
    }
  }

  const update = (k, v) => {
    setForm(f => ({ ...f, [k]: v }))
    setErrors(e => ({ ...e, [k]: undefined }))
  }

  const reset = () => {
    setSent(false)
    setSendError('')
    setForm({ name:'', org:'', email:'', phone:'', beds:'', interest:'', message:'' })
  }

  return (
    <main>
      {/* ── HERO ── */}
      <section style={{ position:'relative', padding:'80px 0 56px', background:'var(--bg-surface)', overflow:'hidden' }}>
        <div className="dot-bg" />
        <div className="container contact-hero-grid" style={{ position:'relative', zIndex:1 }}>
          <div>
            <div className="section-label">Get in Touch</div>
            <h1 style={{ fontSize:'clamp(32px,5vw,58px)', fontWeight:400, letterSpacing:'-0.02em', maxWidth:560, lineHeight:1.1, marginBottom:18 }}>
              Let's find out if we're a good fit.
            </h1>
            <p style={{ color:'var(--text-secondary)', fontSize:17, maxWidth:460, lineHeight:1.75 }}>
              We're an early-stage team and we take every conversation seriously.
              Tell us about your hospital and what you're trying to improve.
            </p>
          </div>
          <figure className="contact-hero-image">
            <img src="/images/contact-connected-care.png" alt="Nurses reviewing a tablet beside a patient monitor and connected room sensor" />
            <figcaption>Care team · patient monitor · connected room sensor</figcaption>
          </figure>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ padding:'56px 0 96px' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1.35fr', gap:56, alignItems:'start' }} className="contact-grid">

            {/* Left */}
            <div>
              <h2 style={{ fontFamily:'var(--font-head)', fontSize:24, fontWeight:400, marginBottom:10 }}>
                A straightforward first conversation.
              </h2>
              <p style={{ color:'var(--text-secondary)', fontSize:14, lineHeight:1.7, marginBottom:22 }}>
                Share the workflow you want to improve. We’ll talk through the context and see whether there’s a useful place to start.
              </p>
              <div className="contact-steps">
                {[
                  { Icon:ClipboardList, title:'Share the context', desc:'Tell us about your hospital and the workflow.' },
                  { Icon:MessagesSquare, title:'Talk it through', desc:'We’ll ask questions and understand your setup.' },
                  { Icon:Route, title:'Explore a next step', desc:'Discuss whether a focused starting point makes sense.' },
                ].map((s,i) => (
                  <div key={s.title} className="contact-step iso-raised">
                    <span className="contact-step-number">0{i+1}</span>
                    <span className="contact-step-icon"><s.Icon size={18}/></span>
                    <div><b>{s.title}</b><small>{s.desc}</small></div>
                    {i<2&&<i className="contact-step-link"/>}
                  </div>
                ))}
              </div>

              <div className="contact-details iso-surface" style={{ marginTop:28, padding:'22px', background:'linear-gradient(135deg, var(--cream) 0%, var(--sage) 100%)' }}>
                <h4 style={{ fontSize:14, fontWeight:700, marginBottom:14, color:'var(--teal-dark)' }}>Direct contact</h4>
                <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                  <FRow Icon={Phone} t="+91 91487-14987 · WhatsApp" href="https://wa.me/919148714987" />
                  <FRow Icon={Mail} t="contact@anantlink.com" href="mailto:contact@anantlink.com" />
                  <FRow Icon={MapPin} t="Registered office · Hyderabad, Telangana, India" />
                  <FRow Icon={MapPin} t="Working locations · Hospital and pilot sites across India" />
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="contact-form iso-surface" style={{ background:'var(--bg-card)', border:'1px solid var(--border-soft)', borderRadius:16, padding:'40px' }}>
              {sent ? (
                <div style={{ textAlign:'center', padding:'40px 0' }}>
                  <div style={{ fontSize:48, marginBottom:18 }}>🙏</div>
                  <h3 style={{ fontFamily:'var(--font-head)', fontSize:24, fontWeight:400, marginBottom:12 }}>
                    Thank you for reaching out.
                  </h3>
                  <p style={{ color:'var(--text-secondary)', fontSize:15, lineHeight:1.75, maxWidth:340, margin:'0 auto' }}>
                    Your message has been sent. We’ll be in touch soon. In the meantime, you can explore the <a href="/solutions" style={{ color:'var(--accent)', textDecoration:'underline' }}>platform modules</a>.
                  </p>
                  <button onClick={reset} className="btn btn-ghost" style={{ marginTop:24 }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily:'var(--font-head)', fontSize:22, fontWeight:400, marginBottom:8 }}>
                    Tell us about your hospital
                  </h3>
                  <p style={{ color:'var(--text-muted)', fontSize:14, marginBottom:28 }}>
                    The more context you share, the more useful our first call will be.
                  </p>
                  <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
                    <Row2>
                      <Field label="Your name *" error={errors.name}>
                        <input type="text" placeholder="Dr. Anita Sharma" value={form.name} onChange={e=>update('name',e.target.value)} style={inp(!!errors.name)}/>
                      </Field>
                      <Field label="Organisation *" error={errors.org}>
                        <input type="text" placeholder="Apollo Hospitals, Hyderabad" value={form.org} onChange={e=>update('org',e.target.value)} style={inp(!!errors.org)}/>
                      </Field>
                    </Row2>
                    <Row2>
                      <Field label="Work email *" error={errors.email}>
                        <input type="email" placeholder="you@hospital.com" value={form.email} onChange={e=>update('email',e.target.value)} style={inp(!!errors.email)}/>
                      </Field>
                      <Field label="Phone">
                        <input type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={e=>update('phone',e.target.value)} style={inp(false)}/>
                      </Field>
                    </Row2>
                    <Row2>
                      <Field label="Hospital size">
                        <select value={form.beds} onChange={e=>update('beds',e.target.value)} style={{...inp(false),appearance:'none',cursor:'pointer'}}>
                          <option value="">Select bed capacity</option>
                          <option>Under 50 beds</option>
                          <option>50 – 200 beds</option>
                          <option>200 – 500 beds</option>
                          <option>500+ beds</option>
                        </select>
                      </Field>
                      <Field label="Primary interest">
                        <select value={form.interest} onChange={e=>update('interest',e.target.value)} style={{...inp(false),appearance:'none',cursor:'pointer'}}>
                          <option value="">What brought you here?</option>
                          {INTERESTS.map(i=><option key={i}>{i}</option>)}
                        </select>
                      </Field>
                    </Row2>
                    <Field label="What are you trying to solve?">
                      <textarea
                        placeholder="Tell us about the operational challenges you face. What breaks down most? What would make the biggest difference?"
                        rows={4} value={form.message}
                        onChange={e=>update('message',e.target.value)}
                        style={{...inp(false), resize:'vertical', minHeight:100}}
                      />
                    </Field>

                    {/* Send error */}
                    {sendError && (
                      <div style={{ padding:'12px 16px', background:'#fef2f2', border:'1px solid #fecaca', borderRadius:8, fontSize:13, color:'#b91c1c', lineHeight:1.5 }}>
                        {sendError}
                      </div>
                    )}

                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="btn btn-primary"
                      style={{ width:'100%', justifyContent:'center', fontSize:15, marginTop:4, opacity:loading?0.75:1, cursor:loading?'not-allowed':'pointer' }}
                    >
                      {loading
                        ? <><Spinner /> Sending…</>
                        : 'Send message →'
                      }
                    </button>

                    <p style={{ color:'var(--text-muted)', fontSize:12, textAlign:'center' }}>
                      No sales pressure. No spam. Just a conversation.
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){ .contact-grid{ grid-template-columns:1fr !important; } }
        input::placeholder, textarea::placeholder { color: var(--text-muted); }
        input:focus, select:focus, textarea:focus {
          outline: none; border-color: var(--accent) !important;
          box-shadow: 0 0 0 3px rgba(20,113,186,0.1);
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </main>
  )
}

/* ── Helpers ── */

const inp = hasError => ({
  width:'100%', padding:'11px 13px',
  background:'var(--bg-base)',
  border:`1px solid ${hasError ? '#c0392b' : 'var(--border-soft)'}`,
  borderRadius:7, color:'var(--text-primary)',
  fontFamily:'var(--font-body)', fontSize:14,
  transition:'border-color 0.2s, box-shadow 0.2s',
})

function Spinner() {
  return (
    <span style={{
      width:15, height:15, borderRadius:'50%',
      border:'2px solid rgba(255,255,255,0.4)',
      borderTopColor:'#fff', display:'inline-block',
      animation:'spin 0.7s linear infinite',
      marginRight:6,
    }} />
  )
}

function Row2({ children }) {
  return <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:14 }}>{children}</div>
}

function Field({ label, error, children }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
      <label style={{ fontSize:12, fontWeight:600, color:'var(--text-secondary)', letterSpacing:'0.04em' }}>{label}</label>
      {children}
      {error && <span style={{ fontSize:11, color:'#c0392b' }}>{error}</span>}
    </div>
  )
}

function FRow({ Icon, t, href }) {
  const content = <><Icon size={15}/><span>{t}</span></>
  return href ? <a className="contact-row" href={href}>{content}</a> : <div className="contact-row">{content}</div>
}
