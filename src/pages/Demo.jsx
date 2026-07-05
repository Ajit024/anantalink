import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  PlayCircle,
  ImageIcon,
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
    id: 'Dashboard UI/UX',
    icon: LayoutDashboard,
    tag: ' Software Platform',
    title: 'Healthcare Software Platform',
    subtitle: 'One unified interface for operations, analytics, alerts, and patient workflows.',
    description:
    'Admin dashboards, mobile apps, nurse station software, analytics portals, reporting, and patient engagement — one consistent interface. Hospital staff already deal with enough confusing screens; ours are designed to be learned in minutes.',
    preview: '/images/Dashboard.png',
    video: '/videos/UI.mp4',
  },

  {
    id: 'self-kiosk',
    icon: MonitorSmartphone,
    tag: 'Patient Experience',
    title: 'Self Service Kiosk',
    subtitle: 'Faster registration, shorter queues, and a smoother patient experience from the moment they walk in.',
    description:
    'Patients and visitors register, check in, verify insurance, print tokens, complete consent forms, and manage appointments without waiting at the front desk. Built for hospitals, clinics, diagnostic centres, and high-traffic reception areas.',
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
    'Track heart rate, SpO₂, blood pressure, ECG, respiratory rate, temperature, glucose levels, medication adherence, and emergency alerts through connected bedside devices, wearable sensors, and remote monitoring. Doctors, nurses, and caregivers get a real-time view of patient health inside and outside the hospital — around the clock.',
  preview: '/images/vsm.png',
  video: '/videos/demo-vsm.mp4',
},
  {
    id: 'environmental',
    icon: Thermometer,
    tag: 'Facility Intelligence',
    title: 'Environmental Monitoring',
    subtitle: 'Monitor temperature, humidity, pressure, and air quality across critical hospital spaces.',
    description:
    'Ensure safe conditions in operation theatres, ICUs, pharmacies, labs, and cold storage areas with continuous environmental monitoring. Detect threshold violations instantly and maintain compliance without relying on someone remembering to check a spreadsheet every few hours.',
    preview: '/images/Env.png',
    video: '/videos/demo-environment.mp4',
  },
   {
    id: 'building',
    icon: Building2,
    tag: 'Infrastructure',
    title: 'Smart Hospital Infrastructure',
    subtitle: 'Connected building systems designed to improve efficiency, safety, and operational visibility.',
    description:
    'Lighting, HVAC, nurse call, occupancy tracking, access control, and room automation on one connected platform — instead of six systems from three vendors just to know whether a room is occupied.',
    preview: '/images/infra.png',
    video: '/videos/demo-building.mp4',
  },
]

export default function Demo() {
  useEffect(() => {
    document.title = 'Demo Gallery | AnantLink'
  }, [])

const videoSliderRef = useRef(null)
const heroSliderRef = useRef(null)
const currentHeroIndex = useRef(0)

const scrollVideos = (direction) => {
  if (!videoSliderRef.current) return

  const scrollAmount = 420

  videoSliderRef.current.scrollBy({
    left: direction === 'left' ? -scrollAmount : scrollAmount,
    behavior: 'smooth',
  })

  const scrollHeroImages = (direction) => {
    if (!heroSliderRef.current) return

    const scrollAmount = 420

    heroSliderRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

}
  const HERO_IMAGES = [
    '/images/Dashboard.png',
    '/images/selfkioske.png',
    '/images/vsmC.png',
    '/images/Env.png',
    '/images/infra.png',
  ]

useEffect(() => {
  const interval = setInterval(() => {
    if (!heroSliderRef.current) return

    currentHeroIndex.current =
      (currentHeroIndex.current + 1) % HERO_IMAGES.length

    const sliderWidth = heroSliderRef.current.getBoundingClientRect().width

    heroSliderRef.current.scrollLeft =
      sliderWidth * currentHeroIndex.current,
      behavior = 'smooth'
  }, 3500)  // }, 5000) // Change image every 5 seconds

  return () => clearInterval(interval)
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
{/* Hero Section image-slider */}
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
{/* Hero Section image-slider */}
          <div style={{ 
            position: 'relative', 
            minWidth: 0,
            overflow: 'hidden',
            borderRadius: 24,
            width: '600px',
            height: '400px',
             }}>
            <div
              ref={heroSliderRef}
              className="hero-slider-row"
              style={{
                display: 'grid',
                gridAutoFlow: 'column',
                gridAutoColumns: '100%',
                overflowY: 'hidden',
                width: '100%',
                // gap: 16,
                // overflowX: 'scroll',
                // scrollSnapType: 'x mandatory',
                scrollBehavior: 'smooth',
                transition: 'transform 4s ease-in-out',
                // scrollbarWidth: 'none',
                // msOverflowStyle: 'none',

              }}
            >
              {HERO_IMAGES.map((image) => (
                <div
                  key={image}
                  style={{
                    minWidth: '100%',
                    width: '100%',
                    flexShrink: 0,
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
                      height: '480px',
                      objectFit: 'initial',
                      objectPosition: 'center',
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
            </div>
          </div>
          {/* End Hero Section image-slider */}
        </div>
        {/* End Hero Section */}

        {/* <div className="container" style={{ position: 'relative', zIndex: 1 }}>


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
        </div> */}
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

      <section style={{ padding: '0 0 96px', }}>
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 28,
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <div>
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
            }}
          >
            Add featured videos for kiosks, monitoring dashboards, mobile apps, and hospital automation flows.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <button
            onClick={() => scrollVideos('left')}
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              border: '1px solid var(--border)',
              background: 'var(--bg-surface)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => scrollVideos('right')}
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              border: '1px solid var(--border)',
              background: 'var(--bg-surface)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={videoSliderRef}
        style={{
          display: 'flex',
          gap: 20,
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingBottom: 8,
        }}
        className="video-slider-row"
      >
        {DEMOS.map((videoItem) => (
          <div
            key={videoItem.video}
            style={{
              minWidth: '380px',
              maxWidth: '380px',
              flex: '0 0 auto',
              border: '1px solid var(--border)',
              borderRadius: 18,
              overflow: 'hidden',
              background: 'var(--bg-surface)',
            }}
          >
            <video
              key={videoItem.video}
              controls
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover',
                display: 'block',
                background: '#000',
              }}
            >
              <source src={videoItem.video} type="video/mp4" />
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
                {videoItem.title}
              </div>

              <div
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 13,
                  lineHeight: 1.7,
                }}
              >
                {videoItem.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  <style>{`
    .video-slider-row::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 768px) {
      .video-slider-row > div {
        min-width: 300px !important;
        max-width: 300px !important;
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
{/* ===================== PRODUCT MEDIA SECTION ===================== */}
<div
  style={{
    order: flip ? 1 : 2,
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 20,
  }}>
{/* ---------- LARGE SCREENSHOT CARD ---------- */}
  <div
    style={{
      width: '600px',
      border: '1px solid var(--border)',
      borderRadius: 18,
      overflow: 'hidden',
      background: 'var(--bg-surface)',
    }}
  >
    <img
      src={demo.preview}
      alt={demo.title}
      style={{
        width: '100%',
        height: '380px',
        objectFit: 'cover',
        display: 'block',
        padding: 0,
        objectPosition: 'left',
      }}
    />

    {/* <div style={{ padding: 16 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontSize: 15,
          fontWeight: 600,
          color: 'var(--text-primary)',
        }}
      >
        <ImageIcon size={18} />
        Product Screenshots
      </div>
    </div> */}
  </div>

{/* Video Section */}

  {/* <div
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
        height: '340px',
        objectFit: 'cover',
        display: 'block',
        background: '#000',
      }}
    >
      <source src={demo.video} type="video/mp4" />
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
        }}
      >
        <PlayCircle size={18} />
        Product Walkthrough
      </div>
    </div>
  </div> */}

  
</div>

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
    </div>
  )
}