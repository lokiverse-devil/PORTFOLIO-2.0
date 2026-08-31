'use client'
import React, { useEffect, useRef, useState } from 'react'

export interface StudyWaypoint {
    id: string
    title: string
    institution: string
    location: string
    state: string
    type: 'SCHOOL' | 'SECONDARY' | 'DIPLOMA' | 'BTECH' | 'FUTURE'
    year: string
    status: string
    desc: string
    coordinates: { x: number; y: number; lat: string; long: string }
    highlights: string[]
}

export const STUDY_WAYPOINTS: StudyWaypoint[] = [
    {
        id: 'almora',
        title: 'FOUNDATIONAL EDUCATION',
        institution: 'Koormanchal Academy',
        location: 'Almora, Uttarakhand',
        state: 'Uttarakhand, India',
        type: 'SCHOOL',
        year: 'Early Education',
        status: 'COMPLETED // EXCELLENCE',
        desc: 'Foundational schooling and early development in the scenic hills of Almora. Nurtured analytical thinking, mathematics, and curiosity for science.',
        coordinates: { x: 72, y: 55, lat: '29.5971° N', long: '79.6591° E' },
        highlights: ['Science & Mathematics Foundation', 'Analytical & Logic Building', 'Academic Distinction'],
    },
    {
        id: 'haldwani',
        title: 'SECONDARY SCHOOLING',
        institution: 'Aurum The Global School',
        location: 'Haldwani, Uttarakhand',
        state: 'Uttarakhand, India',
        type: 'SECONDARY',
        year: 'High School',
        status: 'COMPLETED // DISTINCTION',
        desc: 'Comprehensive secondary education focusing on rigorous science curriculum, computer science fundamentals, and extracurricular leadership.',
        coordinates: { x: 65, y: 68, lat: '29.2183° N', long: '79.5130° E' },
        highlights: ['Computer Science Fundamentals', 'Science Stream Curriculum', 'Team Collaboration & Activities'],
    },
    {
        id: 'kashipur',
        title: 'DIPLOMA IN CSE',
        institution: 'Govt. Polytechnic Kashipur',
        location: 'Kashipur, Uttarakhand',
        state: 'Uttarakhand, India',
        type: 'DIPLOMA',
        year: 'Polytechnic Engineering',
        status: 'COMPLETED // FIRST CLASS',
        desc: 'Rigorous engineering diploma in Computer Science Engineering. Built core programming, data structures, digital electronics, and software systems.',
        coordinates: { x: 50, y: 72, lat: '29.2104° N', long: '78.9619° E' },
        highlights: ['C / C++ & Java Architecture', 'Database Management & SQL', 'Operating Systems & Networking'],
    },
    {
        id: 'dehradun',
        title: 'B.TECH DEGREE (CSE)',
        institution: 'VMSBTU FOT Dehradun',
        location: 'Dehradun, Uttarakhand',
        state: 'Uttarakhand, India',
        type: 'BTECH',
        year: 'Undergraduate // Current',
        status: 'ACTIVE // IN PROGRESS',
        desc: 'Veer Madho Singh Bhandari Uttarakhand Technical University (Faculty of Technology). Deep specialization in AI, Distributed Systems, Cloud & Full Stack.',
        coordinates: { x: 28, y: 38, lat: '30.3165° N', long: '78.0322° E' },
        highlights: ['AI Engineering & MCP', 'Full Stack Scalable Architecture', 'Systems Design & IoT Innovation'],
    },
    {
        id: 'future',
        title: 'GLOBAL OPERATIONS',
        institution: 'Worldwide Tech Missions',
        location: 'Global / Remote',
        state: 'Worldwide',
        type: 'FUTURE',
        year: 'Next Horizon',
        status: 'OPEN FOR EXPEDITIONS',
        desc: 'Ready to deploy engineering solutions worldwide — open for high-impact software engineering roles, hackathons, and international collaborations.',
        coordinates: { x: 88, y: 22, lat: 'GLOBAL', long: 'EXPEDITIONS' },
        highlights: ['International Tech Collaborations', 'High-Scale Distributed Engineering', 'Global Product Impact'],
    },
]

const TYPE_COLORS: Record<string, string> = {
    SCHOOL: '#7eb8f7',
    SECONDARY: '#c084fc',
    DIPLOMA: '#f5a623',
    BTECH: '#66CC66',
    FUTURE: '#34d399',
}

export default function MapSection() {
    const [selectedId, setSelectedId] = useState<string>('dehradun')
    const [radarAngle, setRadarAngle] = useState(0)
    const radarRef = useRef<number>(0)
    const animRef = useRef<number | null>(null)

    const activePoint = STUDY_WAYPOINTS.find((w) => w.id === selectedId) || STUDY_WAYPOINTS[3]
    const accentColor = TYPE_COLORS[activePoint.type] || '#f5a623'

    // Radar sweep animation
    useEffect(() => {
        let last = performance.now()
        const animate = (now: number) => {
            const delta = now - last
            last = now
            radarRef.current = (radarRef.current + delta * 0.12) % 360
            setRadarAngle(radarRef.current)
            animRef.current = requestAnimationFrame(animate)
        }
        animRef.current = requestAnimationFrame(animate)
        return () => { if (animRef.current) cancelAnimationFrame(animRef.current) }
    }, [])

    return (
        <div className="flex flex-col gap-4 w-full">
            {/* Top Bar Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                <div>
                    <div className="flex items-center gap-2.5">
                        <div style={{
                            width: '10px', height: '10px',
                            background: '#f5a623',
                            boxShadow: '0 0 10px rgba(245,166,35,0.9), 0 0 20px rgba(245,166,35,0.5)',
                            animation: 'gold-pulse 2.8s ease-in-out infinite',
                        }} />
                        <h3 style={{
                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                            fontSize: 'clamp(1.1rem, 2.2vw, 1.55rem)',
                            letterSpacing: '0.12em',
                            color: '#fff',
                            textTransform: 'uppercase',
                            textShadow: '0 0 20px rgba(255,255,255,0.1)',
                        }}>
                            TERRITORY RADAR // ACADEMIC EXPEDITIONS
                        </h3>
                    </div>
                    <p style={{
                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                        fontSize: '0.78rem',
                        color: 'rgba(255,255,255,0.55)',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        marginTop: '3px',
                    }}>
                        UTTARAKHAND (INDIA) TO GLOBAL HORIZON // SELECT A WAYPOINT FOR DOSSIER
                    </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                        width: '6px', height: '6px',
                        background: '#f5a623',
                        boxShadow: '0 0 6px rgba(245,166,35,0.9)',
                        animation: 'live-pulse 1.5s ease-in-out infinite',
                    }} />
                    <span style={{
                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                        fontSize: '0.72rem',
                        color: '#f5a623',
                        background: 'rgba(245,166,35,0.08)',
                        border: '1px solid rgba(245,166,35,0.35)',
                        padding: '4px 12px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        textShadow: '0 0 8px rgba(245,166,35,0.5)',
                    }}>
                        GPS GRID ACTIVE
                    </span>
                </div>
            </div>

            {/* Main Map + Intel Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                {/* Tactical Radar Map (7 cols) */}
                <div
                    className="lg:col-span-7 relative overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, #080c0b 0%, #050a08 100%)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        minHeight: '340px',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    {/* Tactical Grid Background */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, rgba(102,204,102,0.07) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(102,204,102,0.07) 1px, transparent 1px)
                            `,
                            backgroundSize: '40px 40px',
                            opacity: 0.8,
                        }}
                    />

                    {/* Diagonal accent lines (map terrain feel) */}
                    <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.04 }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 30px)',
                        }} />
                    </div>

                    {/* Radar Sweep Conic */}
                    <div className="absolute pointer-events-none" style={{
                        top: '50%', left: '50%',
                        width: '300px', height: '300px',
                        marginLeft: '-150px', marginTop: '-150px',
                        borderRadius: '50% !important',
                        background: `conic-gradient(
                            from ${radarAngle}deg,
                            rgba(102,204,102,0.18) 0deg,
                            rgba(102,204,102,0.06) 20deg,
                            transparent 60deg,
                            transparent 360deg
                        )`,
                        zIndex: 1,
                    }} />

                    {/* Radar Concentric Rings */}
                    <div className="absolute pointer-events-none" style={{
                        top: '50%', left: '50%',
                        width: '200px', height: '200px',
                        marginLeft: '-100px', marginTop: '-100px',
                        borderRadius: '50% !important',
                        border: '1px solid rgba(102,204,102,0.15)',
                        zIndex: 1,
                    }} />
                    <div className="absolute pointer-events-none" style={{
                        top: '50%', left: '50%',
                        width: '350px', height: '350px',
                        marginLeft: '-175px', marginTop: '-175px',
                        borderRadius: '50% !important',
                        border: '1px solid rgba(102,204,102,0.08)',
                        zIndex: 1,
                    }} />
                    <div className="absolute pointer-events-none" style={{
                        top: '50%', left: '50%',
                        width: '500px', height: '500px',
                        marginLeft: '-250px', marginTop: '-250px',
                        borderRadius: '50% !important',
                        border: '1px solid rgba(102,204,102,0.05)',
                        zIndex: 1,
                    }} />

                    {/* Radar sweep arm */}
                    <div className="absolute pointer-events-none" style={{
                        top: '50%', left: '50%',
                        width: '160px', height: '1px',
                        transformOrigin: '0 50%',
                        transform: `rotate(${radarAngle}deg)`,
                        background: 'linear-gradient(to right, rgba(102,204,102,0.9), transparent)',
                        boxShadow: '0 0 4px rgba(102,204,102,0.5)',
                        zIndex: 2,
                    }} />

                    {/* Top HUD inside map */}
                    <div className="relative flex justify-between items-center" style={{
                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                        fontSize: '0.7rem',
                        color: 'rgba(102,204,102,0.7)',
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        zIndex: 10,
                    }}>
                        <div>SAT_NAV // SECTOR 05: UTTARAKHAND</div>
                        <div style={{
                            color: '#66CC66',
                            fontWeight: 700,
                            textShadow: '0 0 8px rgba(102,204,102,0.6)',
                        }}>
                            SIGNAL: 100% LOCK
                        </div>
                    </div>

                    {/* SVG Route Lines (animated dash) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 3 }}>
                        <defs>
                            <filter id="glow-gold">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                            <filter id="glow-green">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                        </defs>
                        {/* Education path — gold dashes */}
                        <polyline
                            points="72%,55% 65%,68% 50%,72% 28%,38%"
                            fill="none"
                            stroke="rgba(245, 166, 35, 0.65)"
                            strokeWidth="2"
                            strokeDasharray="6 5"
                            filter="url(#glow-gold)"
                            style={{ animation: 'dash-march 0.7s linear infinite' }}
                        />
                        {/* Future path — green dashes */}
                        <polyline
                            points="28%,38% 88%,22%"
                            fill="none"
                            stroke="rgba(52, 211, 153, 0.7)"
                            strokeWidth="2"
                            strokeDasharray="4 5"
                            filter="url(#glow-green)"
                            style={{ animation: 'dash-march 0.5s linear infinite' }}
                        />
                    </svg>

                    {/* Waypoint Blips */}
                    {STUDY_WAYPOINTS.map((wp, idx) => {
                        const isSelected = wp.id === selectedId
                        const color = TYPE_COLORS[wp.type] || '#f5a623'
                        return (
                            <button
                                key={wp.id}
                                onClick={() => setSelectedId(wp.id)}
                                style={{
                                    position: 'absolute',
                                    left: `${wp.coordinates.x}%`,
                                    top: `${wp.coordinates.y}%`,
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 20,
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '4px',
                                    outline: 'none',
                                    transition: 'transform 0.2s ease',
                                }}
                            >
                                {/* Ping ring on selected */}
                                {isSelected && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '12px',
                                        width: '24px',
                                        height: '24px',
                                        border: `1px solid ${color}`,
                                        borderRadius: '50% !important',
                                        animation: 'ping-ring 1.6s cubic-bezier(0, 0, 0.2, 1) infinite',
                                        pointerEvents: 'none',
                                        boxShadow: `0 0 8px ${color}50`,
                                    }} />
                                )}

                                {/* Blip Icon */}
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",sans-serif',
                                    fontSize: '0.72rem',
                                    fontWeight: 700,
                                    background: isSelected
                                        ? color
                                        : wp.type === 'FUTURE'
                                            ? `${color}25`
                                            : 'rgba(15,15,20,0.92)',
                                    color: isSelected ? '#000' : color,
                                    border: `1px solid ${color}`,
                                    boxShadow: isSelected
                                        ? `0 0 14px ${color}, 0 0 28px ${color}50`
                                        : `0 0 6px ${color}50`,
                                    transition: 'all 0.2s ease',
                                    flexShrink: 0,
                                }}>
                                    {idx + 1}
                                </div>

                                {/* Label tag */}
                                <div style={{
                                    padding: '2px 8px',
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.68rem',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    whiteSpace: 'nowrap',
                                    background: isSelected ? color : 'rgba(8,10,9,0.88)',
                                    color: isSelected ? '#000' : 'rgba(255,255,255,0.85)',
                                    border: `1px solid ${isSelected ? color : `${color}50`}`,
                                    boxShadow: isSelected ? `0 0 10px ${color}60` : 'none',
                                    fontWeight: isSelected ? 700 : 400,
                                }}>
                                    {wp.institution.split(' ')[0]}
                                </div>
                            </button>
                        )
                    })}

                    {/* Bottom HUD inside map */}
                    <div className="relative flex justify-between items-end pt-3 mt-auto" style={{
                        borderTop: '1px solid rgba(102,204,102,0.12)',
                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                        fontSize: '0.68rem',
                        color: 'rgba(255,255,255,0.4)',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        zIndex: 10,
                    }}>
                        <div>
                            LAT: <span style={{ color: '#66CC66', fontWeight: 700 }}>{activePoint.coordinates.lat}</span>
                            {' '}// LONG:{' '}
                            <span style={{ color: '#66CC66', fontWeight: 700 }}>{activePoint.coordinates.long}</span>
                        </div>
                        <div>CLICK WAYPOINTS 1–5 TO INSPECT</div>
                    </div>
                </div>

                {/* Waypoint Intel Dossier (5 cols) */}
                <div
                    className="lg:col-span-5 flex flex-col justify-between"
                    style={{
                        background: 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        borderRight: '1px solid rgba(255,255,255,0.1)',
                        borderBottom: '1px solid rgba(255,255,255,0.1)',
                        borderLeft: `3px solid ${accentColor}`,
                        padding: '18px 20px',
                        boxShadow: `inset 3px 0 20px ${accentColor}08`,
                        transition: 'border-left-color 0.3s ease, box-shadow 0.3s ease',
                    }}
                >
                    <div className="flex flex-col gap-3">
                        {/* Waypoint number + institution */}
                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
                            <span style={{
                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                fontSize: '0.7rem',
                                color: accentColor,
                                letterSpacing: '0.3em',
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                textShadow: `0 0 8px ${accentColor}80`,
                                display: 'block',
                                marginBottom: '6px',
                            }}>
                                [ WAYPOINT {STUDY_WAYPOINTS.findIndex((w) => w.id === activePoint.id) + 1} OF 5 ]
                            </span>
                            <h4 style={{
                                fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                                color: '#fff',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                lineHeight: 1.1,
                                textShadow: '0 0 20px rgba(255,255,255,0.1)',
                            }}>
                                {activePoint.institution}
                            </h4>
                            <p style={{
                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                fontSize: '0.82rem',
                                color: 'rgba(255,255,255,0.6)',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                marginTop: '4px',
                            }}>
                                {activePoint.location}
                            </p>
                        </div>

                        {/* Status badges */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                            <span style={{
                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                fontSize: '0.68rem',
                                background: 'rgba(255,255,255,0.07)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: 'rgba(255,255,255,0.8)',
                                padding: '3px 10px',
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                            }}>
                                {activePoint.year}
                            </span>
                            <span style={{
                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                fontSize: '0.68rem',
                                background: `${accentColor}12`,
                                border: `1px solid ${accentColor}50`,
                                color: accentColor,
                                padding: '3px 10px',
                                letterSpacing: '0.18em',
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                textShadow: `0 0 6px ${accentColor}60`,
                            }}>
                                {activePoint.status}
                            </span>
                        </div>

                        {/* Description */}
                        <p style={{
                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                            fontSize: '0.88rem',
                            color: 'rgba(255,255,255,0.75)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.06em',
                            lineHeight: '1.6',
                            borderTop: '1px solid rgba(255,255,255,0.08)',
                            paddingTop: '12px',
                        }}>
                            {activePoint.desc}
                        </p>

                        {/* Highlights */}
                        <div>
                            <span style={{
                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                fontSize: '0.68rem',
                                color: 'rgba(255,255,255,0.4)',
                                letterSpacing: '0.3em',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '8px',
                            }}>
                                KEY COMPETENCIES & MILESTONES:
                            </span>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                {activePoint.highlights.map((h, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            background: `${accentColor}0a`,
                                            borderLeft: `2px solid ${accentColor}`,
                                            padding: '4px 10px',
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.72rem',
                                            color: 'rgba(255,255,255,0.85)',
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {h}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Waypoint Selector Navigation Bar */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gap: '6px',
                        paddingTop: '16px',
                        marginTop: '16px',
                        borderTop: '1px solid rgba(255,255,255,0.08)',
                    }}>
                        {STUDY_WAYPOINTS.map((wp, i) => {
                            const isSelected = wp.id === selectedId
                            const color = TYPE_COLORS[wp.type] || '#f5a623'
                            return (
                                <button
                                    key={wp.id}
                                    onClick={() => setSelectedId(wp.id)}
                                    style={{
                                        padding: '6px 4px',
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.72rem',
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        textAlign: 'center',
                                        background: isSelected ? color : 'rgba(15,15,20,0.6)',
                                        color: isSelected ? '#000' : 'rgba(255,255,255,0.55)',
                                        border: `1px solid ${isSelected ? color : 'rgba(255,255,255,0.12)'}`,
                                        cursor: 'pointer',
                                        fontWeight: isSelected ? 700 : 400,
                                        boxShadow: isSelected ? `0 0 12px ${color}60` : 'none',
                                        transition: 'all 0.18s ease',
                                        outline: 'none',
                                    }}
                                >
                                    0{i + 1}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
