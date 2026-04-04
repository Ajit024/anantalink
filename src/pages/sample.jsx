{/* ===================== PRODUCT MEDIA SECTION ===================== */}
<div
  style={{
    order: flip ? 1 : 2,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  }}
>
  {/* ---------- LARGE SCREENSHOT CARD ---------- */}
  <div
    style={{
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
        height: '420px',
        objectFit: 'cover',
        display: 'block',
      }}
    />

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
        <ImageIcon size={18} />
        Product Screenshots
      </div>
    </div>
  </div>

  {/* ---------- HORIZONTAL VIDEO SECTION ---------- */}
  <div
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
        height: '260px',
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
  </div>
</div>

{/* ===================== BOTTOM VIDEO SLIDER SECTION ABOVE FOOTER ===================== */}
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
        Add featured videos for kiosks, monitoring dashboards, mobile apps, and hospital automation flows.
      </p>

      {/* ---------- HORIZONTAL VIDEO GRID ---------- */}
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
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>