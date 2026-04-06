
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  PlayCircle,
  MonitorSmartphone,
  HeartPulse,
  Thermometer,
  Building2,
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

const DEMOS = [
  {
    id: 'dashboard-ui',
    icon: LayoutDashboard,
    tag: 'Software Platform',
    title: 'Healthcare Software Platform',
    subtitle:
      'One unified interface for operations, analytics, alerts, and patient workflows.',
    description:
      'Showcase your admin dashboards, mobile apps, nurse station software, analytics portals, reporting systems, and patient engagement platforms.',
    preview: '/images/Dashboard.png',
    video: '/videos/UI.mp4',
  },
  {
    id: 'self-kiosk',
    icon: MonitorSmartphone,
    tag: 'Patient Experience',
    title: 'Self Service Kiosk',
    subtitle:
      'Faster registration, shorter queues, and a smoother patient experience from the moment they walk in.',
    description:
      'Enable patients and visitors to register, check in, verify insurance, print tokens, complete consent forms, and manage appointments without waiting at the front desk.',
    preview: '/images/selfkioske.png',
    video: '/videos/123.mp4',
  },
  {
    id: 'patient-monitoring',
    icon: HeartPulse,
    tag: 'Clinical & Remote Care',
    title: 'Patient Monitoring',
    subtitle:
      'Continuous patient monitoring across hospital beds, wearables, and remote home care.',
    description:
      'Track heart rate, SpO₂, blood pressure, ECG, respiratory rate, temperature, glucose levels, medication adherence, and emergency alerts through connected bedside devices, wearable sensors, and remote patient monitoring platforms.',
    preview: '/images/vsm.png',
    video: '/videos/demo-vsm.mp4',
  },
  {
    id: 'environmental',
    icon: Thermometer,
    tag: 'Facility Intelligence',
    title: 'Environmental Monitoring',
    subtitle:
      'Monitor temperature, humidity, pressure, and air quality across critical hospital spaces.',
    description:
      'Ensure safe conditions in operation theatres, ICUs, pharmacies, labs, and cold storage areas with continuous environmental monitoring.',
    preview: '/images/Env.png',
    video: '/videos/demo-environment.mp4',
  },
  {
    id: 'building',
    icon: Building2,
    tag: 'Infrastructure',
    title: 'Smart Hospital Infrastructure',
    subtitle:
      'Connected building systems designed to improve efficiency, safety, and operational visibility.',
    description:
      'Integrate lighting, HVAC, nurse call systems, occupancy tracking, access control, and room automation into one connected platform.',
    preview: '/images/infra.png',
    video: '/videos/demo-building.mp4',
  },
]

export default function Demo() {
  const videoSliderRef = useRef(null)
  const heroSliderRef = useRef(null)

  useEffect(() => {
    document.title = 'Demo Gallery | AnantaLink'
  }, [])

  const scrollVideos = (direction) => {
    if (!videoSliderRef.current) return

    const scrollAmount = 420

    videoSliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  const scrollHeroImages = (direction) => {
    if (!heroSliderRef.current) return

    const scrollAmount = 420

    heroSliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  const HERO_IMAGES = [
    '/images/Dashboard.png',
    '/images/selfkioske.png',
    '/images/vsm.png',
    '/images/Env.png',
    '/images/infra.png',
  ]

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

        <div
          className="container hero-section-grid"
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div>
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

            <div className="section-label">Product Showcase</div>

            <h1
              style={{
                fontSize: 'clamp(34px,5vw,62px)',
                fontWeight: 400,
                letterSpacing: '-0.02em',
                maxWidth: 720,
                marginBottom: 20,
                lineHeight: 1.1,
              }}
            >
              Demo gallery for screenshots, walkthroughs, and product videos.
            </h1>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: 17,
                maxWidth: 620,
                lineHeight: 1.75,
              }}
            >
              A dedicated place to showcase product screens, live dashboards, mobile apps,
              kiosk flows, infrastructure analytics, and demo videos.
            </p>
          </div>

          <div
            style={{
              position: 'relative',
              minWidth: 0,
            }}
          >
            <div
              ref={heroSliderRef}
              className="hero-slider-row"
              style={{
                display: 'flex',
                gap: 16,
                overflowX: 'auto',
                scrollBehavior: 'smooth',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {HERO_IMAGES.map((image) => (
                <div
                  key={image}
                  style={{
                    minWidth: '100%',
                    flex: '0 0 100%',
                    borderRadius: 24,
                    overflow: 'hidden',
                    border: '1px solid var(--border-soft)',
                    background: 'var(--bg-card)',
                    boxShadow: 'var(--shadow-card)',
                  }}
                >
                  <img
                    src={image}
                    alt="Healthcare preview"
                    style={{
                      width: '100%',
                      height: '520px',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      display: 'block',
                    }}
                  />
                </div>
              ))}
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: 20,
                right: 20,
                display: 'flex',
                gap: 10,
              }}
            >
              <button onClick={() => scrollHeroImages('left')}>
                <ChevronLeft size={20} />
              </button>

              <button onClick={() => scrollHeroImages('right')}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .hero-slider-row::-webkit-scrollbar {
          display: none;
        }

        .video-slider-row::-webkit-scrollbar {
          display: none;
        }

        .demo-row:hover {
          box-shadow: var(--shadow-card);
        }

        @media (max-width: 1024px) {
          .hero-section-grid {
            grid-template-columns: 1fr !important;
          }

          .demo-row {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .demo-row {
            padding: 24px !important;
          }

          .demo-row > div {
            order: unset !important;
          }

          .video-slider-row > div {
            min-width: 300px !important;
            max-width: 300px !important;
          }
        }
      `}</style>
    </main>
  )
}
