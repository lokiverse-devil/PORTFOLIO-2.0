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
        year: 'Early Schooling',
        status: 'COMPLETED // DISTINCTION',
        desc: 'Early schooling in Almora, Uttarakhand. Built a strong foundation in science, mathematics, and curiosity for computing.',
        coordinates: { x: 72, y: 55, lat: '29.5971° N', long: '79.6591° E' },
        highlights: ['Science & Mathematics', 'Learning'],
    },
    {
        id: 'haldwani',
        title: 'SECONDARY SCHOOLING',
        institution: 'Aurum The Global School',
        location: 'Haldwani, Uttarakhand',
        state: 'Uttarakhand, India',
        type: 'SECONDARY',
        year: 'High School',
        status: 'COMPLETED // FIRST DIVISION',
        desc: 'High school education in Haldwani focused on core science and computer science fundamentals.',
        coordinates: { x: 65, y: 68, lat: '29.2183° N', long: '79.5130° E' },
        highlights: ['Computer Science Basics', 'Science Stream Curriculum', 'Team Activities'],
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
        desc: 'Hands-on diploma in Computer Science Engineering. Learned C, C++, Java, SQL, and computer networking.',
        coordinates: { x: 50, y: 72, lat: '29.2104° N', long: '78.9619° E' },
        highlights: ['C / C++ & Java Programming', 'Database Design & SQL', 'Operating Systems & Networks', 'Academic Honors'],
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
        desc: 'Undergraduate degree in Computer Science at Veer Madho Singh Bhandari Uttarakhand Technical University. Focusing on full-stack web architectures, distributed systems, and AI tools.',
        coordinates: { x: 28, y: 38, lat: '30.3165° N', long: '78.0322° E' },
        highlights: ['Web Architecture', 'AI & Agent Workflows', 'System Design & IoT Projects'],
    },
    {
        id: 'future',
        title: 'GLOBAL OPPORTUNITIES',
        institution: 'Worldwide Tech Missions',
        location: 'Remote / Global',
        state: 'Worldwide',
        type: 'FUTURE',
        year: 'Current & Future',
        status: 'OPEN FOR ROLES',
        desc: 'Ready to build high-impact software solutions worldwide — open for software engineering roles, internships, and collaborative projects.',
        coordinates: { x: 88, y: 22, lat: 'GLOBAL', long: 'REMOTE' },
        highlights: ['Full-Time Software Roles', 'Internships & Contracts', 'Open-Source Contributions'],
    },
]

const TYPE_COLORS: Record<string, string> = {
    SCHOOL: '#94a3b8',
    SECONDARY: '#cbd5e1',
    DIPLOMA: '#e2e8f0',
    BTECH: '#66CC66',
    FUTURE: '#4ade80',
}

export default function MapSection() {
    const [selectedId, setSelectedId] = useState<string>('dehradun')
    const [radarAngle, setRadarAngle] = useState(0)
    const radarRef = useRef<number>(0)
    const animRef = useRef<number | null>(null)

    const activePoint = STUDY_WAYPOINTS.find((w) => w.id === selectedId) || STUDY_WAYPOINTS[3]
    const accentColor = TYPE_COLORS[activePoint.type] || '#ffffff'

    const handleSelectWaypoint = (id: string) => {
        setSelectedId(id)
    }

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
        return () => {
            if (animRef.current) cancelAnimationFrame(animRef.current)
        }
    }, [])

    return (
        <div className="flex flex-col gap-4 w-full">
            {/* Top Bar Header */}
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
                                background: '#ffffff',
                            }}
                        />
                        <h3
                            style={{
                                fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                                letterSpacing: '0.14em',
                                color: '#fff',
                                textTransform: 'uppercase',
                            }}
                        >
                            TERRITORY RADAR // ACADEMIC JOURNEY
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
                        UTTARAKHAND TO GLOBAL HORIZON // SELECT A WAYPOINT FOR DETAILS
                    </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div
                        style={{
                            width: '6px',
                            height: '6px',
                            background: '#66CC66',
                            borderRadius: '50%',
                            boxShadow: '0 0 6px rgba(102,204,102,0.8)',
                        }}
                    />
                    <span
                        style={{
                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                            fontSize: '0.72rem',
                            color: '#66CC66',
                            background: 'rgba(102,204,102,0.06)',
                            border: '1px solid rgba(102,204,102,0.3)',
                            padding: '4px 12px',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            fontWeight: 700,
                        }}
                    >
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
                        background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                        border: '1px solid rgba(255,255,255,0.1)',
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
                                linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
                            `,
                            backgroundSize: '40px 40px',
                            opacity: 0.7,
                        }}
                    />

                    {/* Radar Sweep Conic */}
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            top: '50%',
                            left: '50%',
                            width: '300px',
                            height: '300px',
                            marginLeft: '-150px',
                            marginTop: '-150px',
                            borderRadius: '50% !important',
                            background: `conic-gradient(
                            from ${radarAngle}deg,
                            rgba(102,204,102,0.14) 0deg,
                            rgba(102,204,102,0.04) 20deg,
                            transparent 60deg,
                            transparent 360deg
                        )`,
                            zIndex: 1,
                        }}
                    />

                    {/* Radar Concentric Rings */}
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            top: '50%',
                            left: '50%',
                            width: '200px',
                            height: '200px',
                            marginLeft: '-100px',
                            marginTop: '-100px',
                            borderRadius: '50% !important',
                            border: '1px solid rgba(255,255,255,0.08)',
                            zIndex: 1,
                        }}
                    />
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            top: '50%',
                            left: '50%',
                            width: '350px',
                            height: '350px',
                            marginLeft: '-175px',
                            marginTop: '-175px',
                            borderRadius: '50% !important',
                            border: '1px solid rgba(255,255,255,0.05)',
                            zIndex: 1,
                        }}
                    />

                    {/* Cardinal Compass Markers */}
                    <div
                        className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-xs pointer-events-none"
                        style={{ color: 'rgba(255,255,255,0.25)', zIndex: 2 }}
                    >
                        N
                    </div>
                    <div
                        className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-xs pointer-events-none"
                        style={{ color: 'rgba(255,255,255,0.25)', zIndex: 2 }}
                    >
                        S
                    </div>
                    <div
                        className="absolute left-2 top-1/2 -translate-y-1/2 font-mono text-xs pointer-events-none"
                        style={{ color: 'rgba(255,255,255,0.25)', zIndex: 2 }}
                    >
                        W
                    </div>
                    <div
                        className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-xs pointer-events-none"
                        style={{ color: 'rgba(255,255,255,0.25)', zIndex: 2 }}
                    >
                        E
                    </div>

                    {/* Waypoint Blips */}
                    {STUDY_WAYPOINTS.map((wp) => {
                        const isSelected = wp.id === selectedId
                        const color = TYPE_COLORS[wp.type] || '#ffffff'
                        return (
                            <button
                                key={wp.id}
                                onClick={() => handleSelectWaypoint(wp.id)}
                                title={`${wp.institution} (${wp.location})`}
                                style={{
                                    position: 'absolute',
                                    left: `${wp.coordinates.x}%`,
                                    top: `${wp.coordinates.y}%`,
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: isSelected ? 20 : 10,
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    padding: '6px',
                                    outline: 'none',
                                }}
                            >
                                <div
                                    style={{
                                        width: isSelected ? '13px' : '9px',
                                        height: isSelected ? '13px' : '9px',
                                        borderRadius: '50%',
                                        background: color,
                                        boxShadow: isSelected
                                            ? `0 0 10px ${color}, 0 0 20px ${color}`
                                            : `0 0 5px ${color}60`,
                                        border: '2px solid #000',
                                        transition: 'all 0.2s ease',
                                    }}
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '100%',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        marginTop: '4px',
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.62rem',
                                        letterSpacing: '0.15em',
                                        textTransform: 'uppercase',
                                        whiteSpace: 'nowrap',
                                        color: isSelected ? '#fff' : 'rgba(255,255,255,0.5)',
                                        fontWeight: isSelected ? 700 : 400,
                                        textShadow: '0 1px 4px #000',
                                        pointerEvents: 'none',
                                    }}
                                >
                                    {wp.institution.split(' ')[0]}
                                </div>
                            </button>
                        )
                    })}

                    {/* Bottom HUD inside map */}
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
                            LAT:{' '}
                            <span style={{ color: '#fff', fontWeight: 700 }}>
                                {activePoint.coordinates.lat}
                            </span>{' '}
                            // LONG:{' '}
                            <span style={{ color: '#fff', fontWeight: 700 }}>
                                {activePoint.coordinates.long}
                            </span>
                        </div>
                        <div>CLICK WAYPOINTS 1–5 TO INSPECT</div>
                    </div>
                </div>

                {/* Waypoint Intel Dossier (5 cols) */}
                <div
                    className="lg:col-span-5 flex flex-col justify-between"
                    style={{
                        background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderLeft: `3px solid ${accentColor}`,
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
                                    color: accentColor,
                                    letterSpacing: '0.3em',
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                    display: 'block',
                                    marginBottom: '6px',
                                }}
                            >
                                [ WAYPOINT {STUDY_WAYPOINTS.findIndex((w) => w.id === activePoint.id) + 1} OF 5 ]
                            </span>
                            <h4
                                style={{
                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                    fontSize: 'clamp(1.2rem, 2vw, 1.45rem)',
                                    color: '#fff',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                    lineHeight: 1.1,
                                }}
                            >
                                {activePoint.institution}
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
                                {activePoint.location}
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
                                {activePoint.year}
                            </span>
                            <span
                                style={{
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.68rem',
                                    background: `${accentColor}12`,
                                    border: `1px solid ${accentColor}40`,
                                    color: accentColor,
                                    padding: '3px 10px',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                }}
                            >
                                {activePoint.status}
                            </span>
                        </div>

                        {/* Description */}
                        <p
                            style={{
                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                fontSize: '0.88rem',
                                color: 'rgba(255,255,255,0.75)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                                lineHeight: '1.6',
                                borderTop: '1px solid rgba(255,255,255,0.08)',
                                paddingTop: '12px',
                            }}
                        >
                            {activePoint.desc}
                        </p>

                        {/* Highlights */}
                        <div>
                            <span
                                style={{
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.68rem',
                                    color: 'rgba(255,255,255,0.4)',
                                    letterSpacing: '0.3em',
                                    textTransform: 'uppercase',
                                    display: 'block',
                                    marginBottom: '8px',
                                }}
                            >
                                KEY HIGHLIGHTS:
                            </span>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                {activePoint.highlights.map((h, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            background: 'rgba(255,255,255,0.04)',
                                            borderLeft: `2px solid ${accentColor}`,
                                            padding: '4px 10px',
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.72rem',
                                            color: 'rgba(255,255,255,0.8)',
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
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(5, 1fr)',
                            gap: '6px',
                            paddingTop: '16px',
                            marginTop: '16px',
                            borderTop: '1px solid rgba(255,255,255,0.08)',
                        }}
                    >
                        {STUDY_WAYPOINTS.map((wp, i) => {
                            const isSelected = wp.id === selectedId
                            const color = TYPE_COLORS[wp.type] || '#ffffff'
                            return (
                                <button
                                    key={wp.id}
                                    onClick={() => handleSelectWaypoint(wp.id)}
                                    style={{
                                        padding: '6px 4px',
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.72rem',
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        textAlign: 'center',
                                        background: isSelected ? color : 'rgba(255,255,255,0.04)',
                                        color: isSelected ? '#000' : 'rgba(255,255,255,0.5)',
                                        border: `1px solid ${isSelected ? color : 'rgba(255,255,255,0.1)'}`,
                                        cursor: 'pointer',
                                        fontWeight: isSelected ? 700 : 400,
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
