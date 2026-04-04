import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  PlayCircle,
  ImageIcon,
  LayoutDashboard,
  MonitorSmartphone,
  HeartPulse,
  Thermometer,
  Building2,
} from 'lucide-react'

const DEMOS = [
  {
    id: 'self-kiosk',
    icon: MonitorSmartphone,
    tag: 'Patient Experience',
    title: 'Self Service Kiosk',
    subtitle: 'Show patient check-in, token management, and visitor onboarding flows.',
    description:
      'Upload screenshots, product walkthrough videos, registration screens, queue dashboards, and billing flows here. Because apparently people trust software more when they can see a few glossy rectangles first.',
    preview: '/images/demo-kiosk.jpg',
    video: '/videos/demo-kiosk.mp4',
  },
  {
    id: 'vsm',
    icon: HeartPulse,
    tag: 'Clinical Monitoring',
    title: 'Vital Sign Monitoring',
    subtitle: 'Display real-time dashboards, alerts, and bedside device views.',
    description:
      'Use this section for nurse station screens, patient vitals, wearable monitoring screenshots, ECG graphs, and mobile alert previews. Humans do enjoy staring at dashboards full of red numbers to feel productive.',
    preview: '/images/demo-vsm.jpg',
    video: '/videos/demo-vsm.mp4',
  },
  {
    id: 'environmental',
    icon: Thermometer,
    tag: 'Facility Intelligence',
    title: 'Environmental Monitoring',
    subtitle: 'Highlight temperature, humidity, pressure, and air quality dashboards.',
    description:
      'Perfect for showing OT pressure monitoring, pharmacy cold storage alerts, HVAC analytics, and environmental trend charts. Nothing says operational excellence like preventing vaccines from cooking quietly in a warm fridge.',
    preview: '/images/demo-environment.jpg',
    video: '/videos/demo-environment.mp4',
  },
  {
    id: 'uiux',
    icon: LayoutDashboard,
    tag: 'Software Platform',
    title: 'UI / UX Software',
    subtitle: 'Show dedicated software interfaces beyond the existing hardware products.',
    description:
      'Use this section for standalone software screens like admin dashboards, analytics portals, mobile apps, web platforms, nurse station software, patient engagement apps, and reporting interfaces. Because eventually every hardware company realizes customers also expect decent software instead of one sad login screen and a spreadsheet export.',
    preview: '/images/demo-uiux.jpg',
    video: '/videos/demo-uiux.mp4',
  },
  {
    id: 'building',
    icon: Building2,
    tag: 'Infrastructure',
    title: 'Smart Hospital Infrastructure',
    subtitle: 'Present automation, access control, nurse call, and occupancy systems.',
    description:
      'Add videos of room automation, nurse call routing, occupancy-based lighting, smart access control, and central facility dashboards. One platform controlling everything, because hospitals already have enough tabs open.',
    preview: '/images/demo-building.jpg',
    video: '/videos/demo-building.mp4',
  },
]

export default function Demo() {
  useEffect(() => {
    document.title = 'Demo Gallery | AnantaLink'
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
            kiosk flows, infrastructure analytics, and demo videos. Because no healthcare
            buyer on earth believes anything until they see it on a screen first.
          </p>
        </div>
      </section>

      <section style={{ padding: '56px 0 96px' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {DEMOS.map((demo, i) => (
              <DemoRow key={demo.id} demo={demo} flip={i % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>
{/* Video Section */}
      <section
        style={{
          padding: '0 0 96px',
        }}
      >
        <div className="container">
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-soft)',
              borderRadius: 24,
              padding: '40px',
              boxShadow: 'var(--shadow-sm)',
            }}
          >
            <div className="section-label">Video Library</div>

            <h2
              style={{
                fontSize: 'clamp(28px,3vw,42px)',
                fontWeight: 400,
                marginBottom: 12,
                lineHeight: 1.2,
              }}
            >
              Product walkthrough videos
            </h2>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: 16,
                maxWidth: 620,
                lineHeight: 1.8,
                marginBottom: 28,
              }}
            >
              Add featured videos for kiosks, monitoring dashboards, mobile apps, and hospital automation flows. Because apparently every product now needs a cinematic launch trailer before people believe it exists.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 20,
              }}
              className="video-slider-grid"
            >
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  style={{
                    border: '1px solid var(--border)',
                    borderRadius: 18,
                    overflow: 'hidden',
                    background: 'var(--bg-surface)',
                  }}
                >
                  <video
                    controls
                    style={{
                      width: '100%',
                      height: '220px',
                      objectFit: 'cover',
                      display: 'block',
                      background: '#000',
                    }}
                  >
                    <source src={`/videos/demo-video-${item}.mp4`} type="video/mp4" />
                  </video>

                  <div style={{ padding: 16 }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        fontSize: 15,
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                        marginBottom: 6,
                      }}
                    >
                      <PlayCircle size={18} />
                      Demo Video {item}
                    </div>

                    <div
                      style={{
                        color: 'var(--text-secondary)',
                        fontSize: 13,
                        lineHeight: 1.7,
                      }}
                    >
                      Replace with product walkthroughs, dashboard demos, patient journey flows, or facility monitoring videos.
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .video-slider-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </main>
  )
}

function DemoRow({ demo, flip }) {
  const Icon = demo.icon

  return (
    <div
      className="demo-row"
      style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 40,
        alignItems: 'stretch',
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
          <span className="tag-sage">{demo.tag}</span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-head)',
            fontSize: 28,
            fontWeight: 400,
            marginBottom: 8,
          }}
        >
          {demo.title}
        </h2>

        <p
          style={{
            color: 'var(--accent)',
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 14,
          }}
        >
          {demo.subtitle}
        </p>

        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: 14,
            lineHeight: 1.8,
          }}
        >
          {demo.description}
        </p>
      </div>

      <div
        style={{
          order: flip ? 1 : 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: 14,
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, var(--cream) 0%, var(--sage) 100%)',
            border: '1px solid var(--border)',
            borderRadius: 14,
            minHeight: 220,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 20,
          }}
        >
          <ImageIcon size={34} style={{ color: 'var(--teal-dark)', marginBottom: 14 }} />
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--teal-dark)' }}>
            Screenshot Placeholder
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>
            Replace with image gallery or carousel later
          </div>
        </div>

        <div
          style={{
            background: 'var(--bg-surface)',
            border: '1px dashed var(--border)',
            borderRadius: 14,
            minHeight: 220,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 20,
          }}
        >
          <PlayCircle size={36} style={{ color: 'var(--accent)', marginBottom: 14 }} />
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>
            Video Placeholder
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>
            Embed MP4, YouTube, Loom, or product walkthroughs later
          </div>
        </div>

        <div
          style={{
            background: 'linear-gradient(135deg, rgba(29,124,192,0.08) 0%, rgba(74,93,94,0.12) 100%)',
            border: '1px solid var(--border)',
            borderRadius: 14,
            minHeight: 220,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: 20,
          }}
        >
          <LayoutDashboard size={34} style={{ color: 'var(--accent)', marginBottom: 14 }} />
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--text-primary)' }}>
            Dashboard UI Placeholder
          </div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 8 }}>
            Add admin panels, analytics dashboards, nurse station screens, mobile UI, or monitoring views later
          </div>
        </div>
      </div>

      <style>{`
        .demo-row:hover {
          box-shadow: var(--shadow-card);
        }

        @media (max-width: 768px) {
          .demo-row {
            grid-template-columns: 1fr !important;
            padding: 24px !important;
          }

          .demo-row > div {
            order: unset !important;
          }
        }
      `}</style>
    </div>
  )
}

