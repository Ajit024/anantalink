import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  HeartPulse,
  MonitorSmartphone,
  Thermometer,
  Building2,
  Activity,
  ShieldCheck,
} from 'lucide-react'

// Add these objects at the top of your existing SOLUTIONS array in Solutions.jsx
const SOLUTIONS = [
  {
    id: 'self-kiosk',
    icon: MonitorSmartphone,
    tag: 'Patient Experience',
    title: 'Self Service Kiosk',
    subtitle: 'Reduce waiting time before staff even step in.',
    desc: 'Self-service kiosks for patient registration, appointment check-in, token management, billing support, consent forms, and visitor management. Designed for hospitals, clinics, diagnostics centers, and reception areas where queues somehow become a full-time profession.',
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
    id: 'vsm',
    icon: HeartPulse,
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
    id: 'environmental',
    icon: Thermometer,
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
    id: 'building',
    icon: Building2,
    tag: 'Infrastructure',
    title: 'Smart Hospital Infrastructure',
    subtitle: 'Because hospitals should not need ten disconnected systems to switch on a light.',
    desc: 'Smart infrastructure products for lighting, HVAC, occupancy detection, nurse call, energy management, access control, and connected building automation. Built to make facilities more efficient without adding more dashboards for someone to ignore.',
    features: [
      'Occupancy-based lighting and HVAC',
      'Energy consumption tracking',
      'Smart access control and attendance',
      'Integrated nurse call systems',
      'Bed occupancy and room status monitoring',
      'Centralized building dashboard',
    ],
    metrics: [
      { v: '20%', l: 'Energy savings' },
      { v: '<1 min', l: 'Room status updates' },
      { v: 'Multi-site', l: 'Deployment support' },
    ],
  },
]

export default function Solutions() {
  useEffect(() => {
    document.title = 'Solutions | AnantaLink'
  }, [])

  return (
    <main>
      <section
        style={{
          position: 'relative',
          padding: '80px 0 60px',
          overflow: 'hidden',
          background: 'var(--bg-surface)',
        }}
      >
        <div className="dot-bg" />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: 'var(--text-secondary)',
              marginBottom: 28,
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div className="section-label">What We're Building</div>

          <h1
            style={{
              fontSize: 'clamp(34px,5vw,62px)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              maxWidth: 700,
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            Healthcare products built for hospitals that cannot afford delays.
          </h1>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 17,
              maxWidth: 620,
              lineHeight: 1.75,
            }}
          >
            From self-service kiosks to real-time vital monitoring and environmental compliance,
            every product is designed to remove manual effort, improve visibility, and make
            hospital operations slightly less chaotic.
          </p>
        </div>
      </section>

      <section style={{ padding: '56px 0 96px' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {SOLUTIONS.map((product, i) => (
              <ProductRow key={product.id} product={product} flip={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function ProductRow({ product, flip }) {
  const Icon = product.icon

  return (
    <div
      className="product-row"
      style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 40,
        alignItems: 'start',
        padding: '40px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-soft)',
        borderRadius: 16,
        boxShadow: 'var(--shadow-sm)',
        transition: 'all 0.25s ease',
      }}
    >
      <div style={{ order: flip ? 2 : 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(243, 115, 33, 0.08)',
              color: 'var(--accent)',
            }}
          >
            <Icon size={24} />
          </div>
          <span className="tag-sage">{product.tag}</span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-head)',
            fontSize: 28,
            fontWeight: 400,
            marginBottom: 8,
          }}
        >
          {product.title}
        </h2>

        <p
          style={{
            color: 'var(--accent)',
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 14,
          }}
        >
          {product.subtitle}
        </p>

        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: 14,
            lineHeight: 1.8,
            marginBottom: 24,
          }}
        >
          {product.desc}
        </p>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {product.features.map((feature) => (
            <li
              key={feature}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 10,
                fontSize: 14,
                color: 'var(--text-secondary)',
              }}
            >
              <ShieldCheck
                size={16}
                style={{ color: 'var(--accent)', marginTop: 2, flex: 'none' }}
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ order: flip ? 1 : 2, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {product.metrics.map((metric) => (
          <div
            key={metric.l}
            style={{
              background: 'linear-gradient(135deg, var(--cream) 0%, var(--sage) 100%)',
              border: '1px solid var(--border)',
              borderRadius: 12,
              padding: '24px 28px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-head)',
                fontSize: 38,
                fontWeight: 400,
                color: 'var(--teal-dark)',
                lineHeight: 1,
              }}
            >
              {metric.v}
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: 13, marginTop: 6 }}>
              {metric.l}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .product-row:hover {
          box-shadow: var(--shadow-card);
        }

        @media (max-width: 768px) {
          .product-row {
            grid-template-columns: 1fr !important;
            padding: 24px !important;
          }

          .product-row > div {
            order: unset !important;
          }
        }
      `}</style>
    </div>
  )
}
