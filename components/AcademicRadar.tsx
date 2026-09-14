'use client'

import React, { useState, useEffect, useRef } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────
interface Waypoint {
  id: number
  code: string
  name: string
  city: string
  state: string
  level: string
  status: 'COMPLETED' | 'ACTIVE'
  statusLabel: string
  description: string
  tags: string[]
  lat: string
  lng: string
  svgX: number
  svgY: number
  year: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const WAYPOINTS: Waypoint[] = [
  {
    id: 1,
    code: 'WP-01',
    name: 'KOORMANCHAL ACADEMY',
    city: 'Almora',
    state: 'Uttarakhand',
    level: 'Secondary Schooling',
    status: 'COMPLETED',
    statusLabel: 'COMPLETED // DISTINCTION',
    description:
      'Foundational academic formation in the heart of the Kumaon hills. Built discipline, analytical thinking, and core academic competencies across science and mathematics.',
    tags: ['SECONDARY', 'FOUNDATIONAL', 'KUMAON'],
    lat: '29.5971° N',
    lng: '79.6593° E',
    svgX: 310,
    svgY: 68,
    year: '2010-2015',
  },
  {
    id: 4,
    code: 'WP-02',
    name: 'AURUM THE GLOBAL SCHOOL',
    city: 'Haldwani',
    state: 'Uttarakhand',
    level: 'Higher Secondary',
    status: 'COMPLETED',
    statusLabel: 'COMPLETED ',
    description:
      'Advanced higher-secondary curriculum with a global outlook. Strengthened Science-PCM track while developing critical thinking and extracurricular presence.',
    tags: ['HIGHER SECONDARY'],
    lat: '29.2183° N',
    lng: '79.5130° E',
    svgX: 268,
    svgY: 136,
    year: '2016-2023',
  },
  {
    id: 18,
    code: 'WP-03',
    name: 'GOVT POLYTECHNIC KASHIPUR',
    city: 'Kashipur',
    state: 'Uttarakhand',
    level: 'Diploma in Engineering',
    status: 'COMPLETED',
    statusLabel: 'COMPLETED',
    description:
      'Government-run polytechnic delivering hands-on technical education. Earned a Diploma in Engineering, bridging theory with practical lab exposure in core engineering domains.',
    tags: ['DIPLOMA', 'ENGINEERING', 'POLYTECHNIC'],
    lat: '29.2103° N',
    lng: '78.9618° E',
    svgX: 158,
    svgY: 148,
    year: '2023-2026',
  },
  {
    id: 7,
    code: 'WP-04',
    name: 'VMSBUTU FOT DEHRADUN',
    city: 'Dehradun',
    state: 'Uttarakhand',
    level: 'B.Tech / Undergraduate Degree',
    status: 'ACTIVE',
    statusLabel: 'ACTIVE | IN PROGRESS',
    description:
      'Currently pursuing B.Tech (Undergraduate) at Veer Madho Singh Bhandari Uttarakhand Technical University Faculty of Technology, Dehradun — the active operational zone of the academic journey.',
    tags: ['UNDERGRADUATE', 'B.TECH', 'ACTIVE OPS'],
    lat: '30.3165° N',
    lng: '78.0322° E',
    svgX: 92,
    svgY: 62,
    year: '2026–PRESENT',
  },
]

// ─── CRT scanline overlay ─────────────────────────────────────────────────────
function CRTOverlay() {
  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 10,
        backgroundImage:
          'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)',
        mixBlendMode: 'overlay',
      }}
    />
  )
}

// ─── Radar concentric rings + crosshair ──────────────────────────────────────
function RadarRings() {
  const cx = 200
  const cy = 160
  return (
    <g>
      {[40, 80, 120, 158].map((r, idx) => (
        <circle
          key={r}
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke={idx === 1 ? 'rgba(0,255,102,0.15)' : 'rgba(255,255,255,0.06)'}
          strokeWidth="0.8"
          strokeDasharray="3 5"
        />
      ))}
      <line x1={cx} y1={0} x2={cx} y2={320} stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
      <line x1={0} y1={cy} x2={400} y2={cy} stroke="rgba(255,255,255,0.06)" strokeWidth="0.6" />
    </g>
  )
}

// ─── Rotating radar sweep ─────────────────────────────────────────────────────
function RadarSweep() {
  return (
    <>
      <defs>
        <radialGradient id="sweepGrad" cx="0%" cy="50%" r="100%">
          <stop offset="0%" stopColor="#00ff66" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#00ff66" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00ff66" stopOpacity="0" />
        </radialGradient>
      </defs>
      <line
        x1="200"
        y1="160"
        x2="360"
        y2="160"
        stroke="url(#sweepGrad)"
        strokeWidth="1.6"
        style={{
          transformOrigin: '200px 160px',
          animation: 'radarSpin 4.5s linear infinite',
        }}
      />
    </>
  )
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AcademicRadar() {
  const defaultWaypoint = WAYPOINTS.find((w) => w.status === 'ACTIVE') ?? WAYPOINTS[3]
  const [activeId, setActiveId] = useState<number>(defaultWaypoint.id)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [scanLine, setScanLine] = useState<number>(0)
  const [blinkOn, setBlinkOn] = useState<boolean>(true)
  const [bootText, setBootText] = useState<string>('INITIALISING RADAR…')
  const animRef = useRef<number | null>(null)
  const lastTickRef = useRef<number>(0)

  const active = WAYPOINTS.find((w) => w.id === activeId) ?? defaultWaypoint

  // Boot text sequence
  useEffect(() => {
    const seq = [
      'LOADING TERRITORY DATA…',
      'CALIBRATING RADAR…',
      'PLOTTING 04 WAYPOINTS…',
      'SIGNAL ACQUIRED',
    ]
    let i = 0
    const iv = setInterval(() => {
      i++
      if (i < seq.length) setBootText(seq[i])
      else clearInterval(iv)
    }, 650)
    return () => clearInterval(iv)
  }, [])

  // Scanline rAF
  useEffect(() => {
    const tick = (t: number) => {
      if (t - lastTickRef.current > 16) {
        setScanLine((p) => (p + 1) % 320)
        lastTickRef.current = t
      }
      animRef.current = requestAnimationFrame(tick)
    }
    animRef.current = requestAnimationFrame(tick)
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [])

  // Cursor blink
  useEffect(() => {
    const iv = setInterval(() => setBlinkOn((b) => !b), 530)
    return () => clearInterval(iv)
  }, [])

  const polyPoints = WAYPOINTS.map((w) => `${w.svgX},${w.svgY}`).join(' ')

  // Corner bracket helper
  const corners = [
    { top: 8, left: 8, bt: 2, bb: 0, bl: 2, br: 0 },
    { top: 8, right: 8, bt: 2, bb: 0, bl: 0, br: 2 },
    { bottom: 8, left: 8, bt: 0, bb: 2, bl: 2, br: 0 },
    { bottom: 8, right: 8, bt: 0, bb: 2, bl: 0, br: 2 },
  ]

  return (
    <>
      <style>{`
        @keyframes radarSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes radarPulse {
          0%   { r: 8;  opacity: 0.9; }
          100% { r: 30; opacity: 0; }
        }
        @keyframes glowActive {
          0%, 100% { box-shadow: 0 0 10px rgba(0,255,102,0.25), inset 0 0 8px rgba(0,255,102,0.08); }
          50%      { box-shadow: 0 0 20px rgba(0,255,102,0.45), inset 0 0 14px rgba(0,255,102,0.18); }
        }
        svg *:focus, svg *:focus-visible, g:focus, g:focus-visible {
          outline: none !important;
        }
      `}</style>

      <div className="flex flex-col gap-4 w-full">
        {/* ── Header bar ── */}
        <div
          className="flex flex-wrap items-center justify-between gap-3 pb-3"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
        >
          <div>
            <div className="flex items-center gap-2.5">
              <div
                style={{
                  width: '3px',
                  height: '14px',
                  background: '#00ff66',
                  boxShadow: '0 0 8px rgba(0,255,102,0.6)',
                }}
              />
              <h3
                style={{
                  fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                  fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                  letterSpacing: '0.14em',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                }}
              >
                ACADEMIC TERRITORY RADAR // UTTARAKHAND SECTOR
              </h3>
            </div>
            <p
              style={{
                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                marginTop: '3px',
              }}
            >
              ALMORA ➔ HALDWANI ➔ KASHIPUR ➔ DEHRADUN // SELECT A WAYPOINT FOR INTEL
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '6px',
                height: '6px',
                background: '#1aff00ff',
                borderRadius: '50%',
                boxShadow: '0 0 8px #00ff66',
                opacity: blinkOn ? 1 : 0.2,
                transition: 'opacity 0.15s',
              }}
            />
            <span
              style={{
                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                fontSize: '0.72rem',
                color: '#00ff66',
                background: 'rgba(0,255,102,0.06)',
                border: '1px solid rgba(0,255,102,0.3)',
                padding: '4px 12px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              {bootText}
            </span>
          </div>
        </div>

        {/* ── 2-column Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          {/* ════════════════════════════════════════════════════════
              LEFT: Radar Map (7 cols)
              ════════════════════════════════════════════════════════ */}
          <div
            className="lg:col-span-7 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              minHeight: '360px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            {/* Subtle Tactical Grid Background */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)
                `,
                backgroundSize: '32px 32px',
              }}
            />

            {/* Center radial glow */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(ellipse at 50% 50%, rgba(0,255,102,0.04) 0%, transparent 70%)',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            />

            {/* Moving scanline */}
            <div
              aria-hidden
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                height: 2,
                background: 'linear-gradient(to right, transparent, rgba(0,255,102,0.18), transparent)',
                top: `${(scanLine / 320) * 100}%`,
                pointerEvents: 'none',
                zIndex: 8,
              }}
            />

            <CRTOverlay />

            {/* Corner brackets */}
            {corners.map((c, i) => (
              <div
                key={i}
                aria-hidden
                style={{
                  position: 'absolute',
                  width: 14,
                  height: 14,
                  top: c.top,
                  left: (c as any).left,
                  right: (c as any).right,
                  bottom: (c as any).bottom,
                  borderColor: 'rgba(255,255,255,0.25)',
                  borderStyle: 'solid',
                  borderTopWidth: c.bt,
                  borderBottomWidth: c.bb,
                  borderLeftWidth: c.bl,
                  borderRightWidth: c.br,
                  pointerEvents: 'none',
                  zIndex: 12,
                }}
              />
            ))}

            {/* Map sub-label */}
            <div
              style={{
                position: 'absolute',
                top: 14,
                left: 24,
                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                fontSize: '0.62rem',
                letterSpacing: '0.24em',
                color: 'rgba(255,255,255,0.4)',
                zIndex: 12,
                textTransform: 'uppercase',
              }}
            >
              GPS RADAR // UTTARAKHAND GRID
            </div>

            {/* Interactive SVG Radar */}
            <svg
              viewBox="0 0 400 320"
              style={{ width: '100%', display: 'block', position: 'relative', zIndex: 5, margin: 'auto 0' }}
              aria-label="Academic territory radar map of Uttarakhand"
            >
              <RadarRings />
              <RadarSweep />

              {/* Dashed journey path */}
              <polyline
                points={polyPoints}
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />

              {/* Direction arrows along path */}
              {WAYPOINTS.slice(0, -1).map((wp, i) => {
                const next = WAYPOINTS[i + 1]
                const mx = (wp.svgX + next.svgX) / 2
                const my = (wp.svgY + next.svgY) / 2
                const angle = (Math.atan2(next.svgY - wp.svgY, next.svgX - wp.svgX) * 180) / Math.PI
                return (
                  <g key={i} transform={`translate(${mx},${my}) rotate(${angle})`}>
                    <polygon points="-4,-2.5 4,0 -4,2.5" fill="rgba(0,255,102,0.6)" />
                  </g>
                )
              })}

              {/* Waypoint nodes */}
              {WAYPOINTS.map((wp) => {
                const isActive = wp.id === activeId
                const isHover = wp.id === hoveredId
                const isWpActiveStatus = wp.status === 'ACTIVE'
                const lit = isActive || isHover
                const labelY = wp.svgY > 170 ? wp.svgY + 20 : wp.svgY - 20

                // Node color: bright green for active / hover / current waypoint, clean tactical cyan/slate for others
                const nodeFill = isActive
                  ? '#00ff66'
                  : isHover
                  ? '#00ff66'
                  : isWpActiveStatus
                  ? '#00ff66'
                  : '#64748b'

                return (
                  <g
                    key={wp.id}
                    style={{ cursor: 'pointer', outline: 'none' }}
                    onClick={() => setActiveId(wp.id)}
                    onMouseEnter={() => setHoveredId(wp.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Select ${wp.name}`}
                    onKeyDown={(e) => e.key === 'Enter' && setActiveId(wp.id)}
                  >
                    {/* Ping waves on active node */}
                    {isActive && [0, 0.9].map((delay, di) => (
                      <circle
                        key={di}
                        cx={wp.svgX}
                        cy={wp.svgY}
                        r="8"
                        fill="none"
                        stroke="#00ff66"
                        strokeWidth="1.2"
                        style={{
                          animation: `radarPulse 2s ease-out ${delay}s infinite`,
                          transformOrigin: `${wp.svgX}px ${wp.svgY}px`,
                        }}
                      />
                    ))}

                    {/* Square node marker */}
                    <rect
                      x={wp.svgX - 6}
                      y={wp.svgY - 6}
                      width="12"
                      height="12"
                      fill={nodeFill}
                      stroke={isActive || isHover ? '#00ff66' : 'rgba(0,0,0,0.8)'}
                      strokeWidth={1.5}
                      style={{
                        filter: isActive
                          ? 'drop-shadow(0 0 6px #00ff66) drop-shadow(0 0 12px rgba(0,255,102,0.5))'
                          : isHover
                          ? 'drop-shadow(0 0 8px rgba(0,255,102,0.8))'
                          : 'drop-shadow(0 0 3px rgba(0,0,0,0.8))',
                        transition: 'all 0.2s',
                      }}
                    />
                    {/* Inner core dot */}
                    <circle cx={wp.svgX} cy={wp.svgY} r="2" fill="#09090c" />

                    {/* Label Tag Bubble */}
                    <rect
                      x={wp.svgX - 22}
                      y={labelY - 9}
                      width="44"
                      height="15"
                      fill="#060608"
                      stroke={isActive ? '#00ff66' : isHover ? 'rgba(0,255,102,0.6)' : 'rgba(255,255,255,0.15)'}
                      strokeWidth="0.8"
                    />
                    <text
                      x={wp.svgX}
                      y={labelY + 2.5}
                      textAnchor="middle"
                      fontSize="7"
                      fill={isActive || isHover ? '#00ff66' : '#ffffff'}
                      fontFamily="'Share Tech Mono', monospace"
                      letterSpacing="1"
                      fontWeight={isActive ? '700' : '400'}
                    >
                      {wp.code}
                    </text>

                    {/* City name text */}
                    <text
                      x={wp.svgX + 14}
                      y={wp.svgY + 3}
                      fontSize="7.5"
                      fill={isActive ? '#ffffff' : 'rgba(255,255,255,0.7)'}
                      fontFamily="ChaletComprime1960, 'Barlow Condensed', sans-serif"
                      letterSpacing="0.8"
                      fontWeight={isActive ? '700' : '400'}
                    >
                      {wp.city.toUpperCase()}
                    </text>

                    {/* Lat readout text */}
                    <text
                      x={wp.svgX + 14}
                      y={wp.svgY + 12}
                      fontSize="5.8"
                      fill="rgba(255,255,255,0.35)"
                      fontFamily="'Share Tech Mono', monospace"
                    >
                      {wp.lat}
                    </text>
                  </g>
                )
              })}
            </svg>

            {/* Map footer strip */}
            <div
              className="relative flex justify-between items-end pt-3 mt-auto"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.08)',
                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                fontSize: '0.68rem',
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                zIndex: 10,
              }}
            >
              <div>
                LAT: <span style={{ color: '#fff', fontWeight: 700 }}>{active.lat}</span> // LONG:{' '}
                <span style={{ color: '#fff', fontWeight: 700 }}>{active.lng}</span>
              </div>
              <div style={{ color: '#ff0000ff', fontWeight: 600 }}>
                SECTOR: UKD-0{active.id}
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════
              RIGHT: Waypoint Intel Dossier (5 cols)
              ════════════════════════════════════════════════════════ */}
          <div
            className="lg:col-span-5 flex flex-col justify-between"
            style={{
              background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderLeft: '3px solid #00ff66',
              padding: '18px 20px',
              transition: 'border-left-color 0.3s ease',
            }}
          >
            <div className="flex flex-col gap-3">
              {/* Waypoint number + institution */}
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
                <span
                  style={{
                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                    fontSize: '0.7rem',
                    color: active.status === 'ACTIVE' ? '#00ff66' : 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    display: 'block',
                    marginBottom: '6px',
                  }}
                >
                  [ WAYPOINT {active.code.replace('WP-', '')} OF 04 ]
                </span>
                <h4
                  style={{
                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                    fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                    color: '#ffffff',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    lineHeight: 1.15,
                  }}
                >
                  {active.name}
                </h4>
                <p
                  style={{
                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                    fontSize: '0.82rem',
                    color: 'rgba(255,255,255,0.5)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginTop: '4px',
                  }}
                >
                  {active.city}, {active.state}
                </p>
              </div>

              {/* Status badges */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                    fontSize: '0.68rem',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'rgba(255,255,255,0.75)',
                    padding: '3px 10px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                  }}
                >
                  {active.year}
                </span>
                <span
                  style={{
                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                    fontSize: '0.68rem',
                    background: active.status === 'ACTIVE' ? 'rgba(0,255,102,0.1)' : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${active.status === 'ACTIVE' ? '#00ff66' : 'rgba(255,255,255,0.2)'}`,
                    color: active.status === 'ACTIVE' ? '#00ff66' : 'rgba(255,255,255,0.75)',
                    padding: '3px 10px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    boxShadow: active.status === 'ACTIVE' ? '0 0 8px rgba(0,255,102,0.25)' : 'none',
                  }}
                >
                  {active.statusLabel}
                </span>
              </div>

              {/* Level */}
              <div
                style={{
                  fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                  fontSize: '0.74rem',
                  letterSpacing: '0.18em',
                  color: 'rgba(255,255,255,0.45)',
                  textTransform: 'uppercase',
                }}
              >
                LEVEL ► <span style={{ color: '#ffffff' }}>{active.level}</span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                  fontSize: '0.86rem',
                  color: 'rgba(255,255,255,0.75)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  lineHeight: '1.6',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  paddingTop: '10px',
                }}
              >
                {active.description}
              </p>

              {/* Technical Tag Pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      padding: '3px 8px',
                      fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                      fontSize: '0.66rem',
                      color: 'rgba(255,255,255,0.8)',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Geospatial Coordinates Readout */}
              <div
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  paddingTop: '10px',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '6px 14px',
                }}
              >
                {[
                  { label: 'LATITUDE', value: active.lat },
                  { label: 'LONGITUDE', value: active.lng },
                  { label: 'TIMELINE', value: active.year },
                  { label: 'SECTOR CODE', value: `UKD-0${active.id}` },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div
                      style={{
                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                        fontSize: '0.6rem',
                        color: 'rgba(255,255,255,0.35)',
                        letterSpacing: '0.2em',
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Share Tech Mono', monospace",
                        fontSize: '0.72rem',
                        color: '#ffffff',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Waypoint Selector Navigation Bar (01 to 04) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '6px',
                paddingTop: '14px',
                marginTop: '14px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {WAYPOINTS.map((wp) => {
                const isSelected = wp.id === activeId
                return (
                  <button
                    key={wp.id}
                    id={`ar-nav-${wp.id}`}
                    onClick={() => setActiveId(wp.id)}
                    style={{
                      padding: '7px 4px',
                      fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                      fontSize: '0.74rem',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      textAlign: 'center',
                      background: isSelected ? '#00ff66' : 'rgba(255,255,255,0.04)',
                      color: isSelected ? '#000000' : 'rgba(255,255,255,0.5)',
                      border: `1px solid ${isSelected ? '#00ff66' : 'rgba(255,255,255,0.1)'}`,
                      cursor: 'pointer',
                      fontWeight: isSelected ? 700 : 400,
                      boxShadow: isSelected ? '0 0 12px rgba(0,255,102,0.4)' : 'none',
                      transition: 'all 0.18s ease',
                      outline: 'none',
                      position: 'relative',
                    }}
                  >
                    {wp.code}
                    {wp.status === 'ACTIVE' && !isSelected && (
                      <span
                        style={{
                          position: 'absolute',
                          top: 3,
                          right: 4,
                          width: 4,
                          height: 4,
                          background: '#00ff66',
                          borderRadius: '50%',
                          boxShadow: '0 0 4px #00ff66',
                        }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
