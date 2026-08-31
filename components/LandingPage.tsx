'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'
import gsap from 'gsap'
import MapSection from './MapSection'
import CharacterSection from './CharacterSection'

interface Project {
    title: string
    category: string
    desc: string
    tags: string[]
    link?: string
    status: string
    opNum: string
}

interface UserData {
    name: string
    tagline: string
    rank: number
    cash: string
    bank: string
    email: string
    github: string
    linkedin: string
    projects: Project[]
    arsenal: { name: string; proficiency: string; profNum: number; category: string; color: string }[]
}

type MenuItem = 'MAP' | 'CHARACTER' | 'PROJECTS' | 'ARSENAL' | 'CONTACT'

const USER_DATA: UserData = {
    name: 'OM PANDEY',
    tagline: 'FULL STACK ARCHITECT & AI ENGINEER',
    rank: 100,
    cash: '$2,450,000',
    bank: '$18,920,000',
    email: 'ompandey2341@gmail.com',
    github: 'https://github.com/lokiverse-devil',
    linkedin: 'https://linkedin.com/in/om-pandey-1b3b3b3b3',
    projects: [
        {
            title: 'VibeChat',
            category: 'REALTIME MESSAGING',
            desc: 'High-speed expressive communication protocol built with modern web architecture and real-time synchronization.',
            tags: ['REACT', 'NEXT.JS', 'WEBSOCKETS', 'TAILWIND'],
            link: 'https://github.com/lokiverse-devil',
            status: 'MISSION PASSED',
            opNum: '01',
        },
        {
            title: 'HTRACX',
            category: 'ENTERPRISE SYSTEM',
            desc: 'Smart Hostel Management System automating room allocation, billing, analytics, and identity verification.',
            tags: ['FULL STACK', 'DATABASE', 'MANAGEMENT', 'POSTGRES'],
            link: 'https://github.com/lokiverse-devil',
            status: 'MISSION PASSED',
            opNum: '02',
        },
        {
            title: 'SmartClass X',
            category: 'IOT & AUTOMATION',
            desc: 'Intelligent IoT-enabled smart classroom system with automated telemetry, presence detection, and environment controls.',
            tags: ['IOT', 'PYTHON', 'EMBEDDED', 'TELEMETRY'],
            link: 'https://github.com/lokiverse-devil',
            status: 'MISSION PASSED',
            opNum: '03',
        },
        {
            title: 'AIMS',
            category: 'INSTITUTIONAL SUITE',
            desc: 'Academic Infrastructure Management System streamlining asset tracking, operations, and departmental workflows.',
            tags: ['POSTGRES', 'SYSTEM DESIGN', 'API SUITE', 'SUPABASE'],
            link: 'https://github.com/lokiverse-devil',
            status: 'MISSION PASSED',
            opNum: '04',
        },
    ],
    arsenal: [
        { name: 'C / C++', proficiency: '94%', profNum: 94, category: 'CORE', color: '#f5a623' },
        { name: 'JAVA & OOP', proficiency: '90%', profNum: 90, category: 'CORE', color: '#f5a623' },
        { name: 'REACT & NEXT.JS', proficiency: '95%', profNum: 95, category: 'FRONTEND', color: '#66CC66' },
        { name: 'TYPESCRIPT / JAVASCRIPT', proficiency: '92%', profNum: 92, category: 'FRONTEND', color: '#66CC66' },
        { name: 'SQL & POSTGRESQL', proficiency: '92%', profNum: 92, category: 'DATABASE', color: '#7eb8f7' },
        { name: 'SUPABASE & BACKEND', proficiency: '90%', profNum: 90, category: 'DATABASE', color: '#7eb8f7' },
        { name: 'MODEL CONTEXT PROTOCOL', proficiency: '95%', profNum: 95, category: 'AI TECH', color: '#c084fc' },
        { name: 'GEMINI AI INTEGRATION', proficiency: '94%', profNum: 94, category: 'AI TECH', color: '#c084fc' },
        { name: 'IOT & EMBEDDED TELEMETRY', proficiency: '88%', profNum: 88, category: 'HARDWARE', color: '#f87171' },
        { name: 'SYSTEM ARCHITECTURE', proficiency: '90%', profNum: 90, category: 'ENGINEERING', color: '#fbbf24' },
        { name: 'TEAM LEAD & MANAGEMENT', proficiency: '92%', profNum: 92, category: 'LEADERSHIP', color: '#34d399' },
        { name: 'PROJECT PITCHING & DEMOS', proficiency: '94%', profNum: 94, category: 'LEADERSHIP', color: '#34d399' },
    ],
}

const MENU_ITEMS: { key: MenuItem; label: string; shortcut: string; icon: string }[] = [
    { key: 'MAP', label: 'TERRITORY', shortcut: '1', icon: '◎' },
    { key: 'CHARACTER', label: 'CHARACTER', shortcut: '2', icon: '◈' },
    { key: 'PROJECTS', label: 'OPERATIONS', shortcut: '3', icon: '◆' },
    { key: 'ARSENAL', label: 'ARSENAL', shortcut: '4', icon: '◉' },
    { key: 'CONTACT', label: 'COMMS', shortcut: '5', icon: '◐' },
]

const CATEGORY_COLORS: Record<string, string> = {
    CORE: '#f5a623',
    FRONTEND: '#66CC66',
    DATABASE: '#7eb8f7',
    'AI TECH': '#c084fc',
    HARDWARE: '#f87171',
    ENGINEERING: '#fbbf24',
    LEADERSHIP: '#34d399',
}

// Animated counter component
function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
    const [display, setDisplay] = useState('$0')
    const hasAnimated = useRef(false)

    useEffect(() => {
        if (hasAnimated.current) return
        hasAnimated.current = true
        const nums = target.replace(/[^0-9]/g, '')
        const end = parseInt(nums, 10)
        if (isNaN(end)) { setDisplay(target); return }
        const prefix = target.startsWith('$') ? '$' : ''
        let start = 0
        const duration = 1400
        const step = 16
        const increment = end / (duration / step)
        const timer = setInterval(() => {
            start += increment
            if (start >= end) {
                setDisplay(`${prefix}${end.toLocaleString()}${suffix}`)
                clearInterval(timer)
            } else {
                setDisplay(`${prefix}${Math.floor(start).toLocaleString()}${suffix}`)
            }
        }, step)
        return () => clearInterval(timer)
    }, [target, suffix])

    return <>{display}</>
}

// Elegant wanted stars — smooth gold glow, no jarring blink
function WantedStarsHUD() {
    return (
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 72 72"
                    style={{ opacity: 0.92 }}>
                    <polygon
                        points="36,4 44,28 70,28 49,44 57,68 36,52 15,68 23,44 2,28 28,28"
                        fill="#d4960a"
                        style={{
                            filter: 'drop-shadow(0 0 3px rgba(212,150,10,0.7))',
                        }}
                    />
                </svg>
            ))}
        </div>
    )
}

export default function LandingPage() {
    const contentRef = useRef<HTMLDivElement | null>(null)
    const [activeItem, setActiveItem] = useState<MenuItem>('MAP')
    const [time, setTime] = useState<string>('')
    const [copied, setCopied] = useState<boolean>(false)
    const [ambienceMuted, setAmbienceMuted] = useState<boolean>(false)
    const ambienceRef = useRef<Howl | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        try {
            ambienceRef.current = new Howl({
                src: ['/sounds/loading_ambience.mp3'],
                loop: true,
                volume: 0.28,
            })
            ambienceRef.current.play()
        } catch (e) {
            console.warn('Audio notice in landing page:', e)
        }

        const updateTime = () =>
            setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
        updateTime()
        const tInterval = setInterval(updateTime, 1000)

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === '1') setActiveItem('MAP')
            else if (e.key === '2') setActiveItem('CHARACTER')
            else if (e.key === '3') setActiveItem('PROJECTS')
            else if (e.key === '4') setActiveItem('ARSENAL')
            else if (e.key === '5') setActiveItem('CONTACT')
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            clearInterval(tInterval)
            window.removeEventListener('keydown', handleKeyDown)
            if (ambienceRef.current) {
                ambienceRef.current.stop()
            }
        }
    }, [])

    useEffect(() => {
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 14, scale: 0.995 },
                { opacity: 1, y: 0, scale: 1, duration: 0.28, ease: 'power3.out' }
            )
        }
    }, [activeItem])

    const toggleAmbience = () => {
        if (ambienceRef.current) {
            if (ambienceMuted) {
                ambienceRef.current.play()
                setAmbienceMuted(false)
            } else {
                ambienceRef.current.pause()
                setAmbienceMuted(true)
            }
        }
    }

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(USER_DATA.email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
    }

    const renderContent = () => {
        switch (activeItem) {
            case 'MAP':
                return <MapSection />

            case 'CHARACTER':
                return <CharacterSection />

            case 'PROJECTS':
                return (
                    <div className="flex flex-col gap-5 w-full">
                        {/* Header */}
                        <div className="flex flex-wrap justify-between items-center gap-3 pb-3"
                            style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                            <div>
                                <div className="flex items-center gap-2.5">
                                    <div style={{
                                        width: '10px', height: '10px',
                                        background: '#f5a623',
                                        boxShadow: '0 0 10px rgba(245,166,35,0.9), 0 0 20px rgba(245,166,35,0.5)',
                                        animation: 'live-pulse 1.5s ease-in-out infinite'
                                    }} />
                                    <h3 style={{
                                        fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                        fontSize: 'clamp(1.1rem, 2.2vw, 1.55rem)',
                                        letterSpacing: '0.12em',
                                        color: '#fff',
                                        textTransform: 'uppercase',
                                        textShadow: '0 0 30px rgba(255,255,255,0.15)',
                                    }}>
                                        ACTIVE OPERATIONS // MISSIONS DOSSIER
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
                                    04 MAJOR OPERATIONS // CLICK ANY CARD TO LAUNCH REPOSITORY
                                </p>
                            </div>
                            <span style={{
                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                fontSize: '0.72rem',
                                color: '#66CC66',
                                background: 'rgba(102,204,102,0.1)',
                                border: '1px solid rgba(102,204,102,0.45)',
                                padding: '4px 12px',
                                letterSpacing: '0.2em',
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                textShadow: '0 0 8px rgba(102,204,102,0.6)',
                            }}>
                                ✓ ALL MISSIONS PASSED
                            </span>
                        </div>

                        {/* Project Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {USER_DATA.projects.map((p, i) => (
                                <a
                                    key={i}
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card-shimmer-container group block"
                                    style={{
                                        background: 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)',
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        borderLeft: '3px solid #f5a623',
                                        padding: '20px 22px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.22s cubic-bezier(0.2,0.8,0.2,1)',
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                    }}
                                    onMouseEnter={e => {
                                        const el = e.currentTarget as HTMLElement
                                        el.style.background = 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)'
                                        el.style.borderColor = 'rgba(0,0,0,0.1)'
                                        el.style.borderLeftColor = '#f5a623'
                                        el.style.transform = 'translateY(-2px) scale(1.008)'
                                        el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.8), 0 0 25px rgba(245,166,35,0.2)'
                                    }}
                                    onMouseLeave={e => {
                                        const el = e.currentTarget as HTMLElement
                                        el.style.background = 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)'
                                        el.style.borderColor = 'rgba(255,255,255,0.12)'
                                        el.style.borderLeftColor = '#f5a623'
                                        el.style.transform = 'none'
                                        el.style.boxShadow = 'none'
                                    }}
                                >
                                    {/* Watermark operation number */}
                                    <div style={{
                                        position: 'absolute',
                                        right: '12px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        fontFamily: 'ChaletLondon1960,"Bebas Neue",sans-serif',
                                        fontSize: '5rem',
                                        color: 'rgba(255,255,255,0.03)',
                                        fontWeight: 900,
                                        lineHeight: 1,
                                        letterSpacing: '-0.02em',
                                        pointerEvents: 'none',
                                        userSelect: 'none',
                                    }}>
                                        {p.opNum}
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                                        <div>
                                            <span style={{
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.68rem',
                                                color: 'rgba(255,255,255,0.45)',
                                                letterSpacing: '0.3em',
                                                textTransform: 'uppercase',
                                                display: 'block',
                                            }} className="group-hover:!text-black/50">
                                                OPERATION {p.opNum}
                                            </span>
                                            <h4 style={{
                                                fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                                                color: '#fff',
                                                letterSpacing: '0.1em',
                                                textTransform: 'uppercase',
                                                textShadow: '0 0 20px rgba(255,255,255,0.1)',
                                            }} className="group-hover:!text-black !text-shadow-none">
                                                {p.title}
                                            </h4>
                                        </div>
                                        <span style={{
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.68rem',
                                            color: '#66CC66',
                                            background: 'rgba(102,204,102,0.08)',
                                            border: '1px solid rgba(102,204,102,0.35)',
                                            padding: '3px 10px',
                                            letterSpacing: '0.15em',
                                            textTransform: 'uppercase',
                                            fontWeight: 700,
                                            whiteSpace: 'nowrap',
                                        }} className="group-hover:!text-black group-hover:!bg-transparent group-hover:!border-black/20">
                                            {p.category}
                                        </span>
                                    </div>

                                    <p style={{
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.85rem',
                                        color: 'rgba(255,255,255,0.75)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.06em',
                                        lineHeight: '1.55',
                                        marginBottom: '12px',
                                    }} className="group-hover:!text-black/75">
                                        {p.desc}
                                    </p>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
                                        {p.tags.map((t) => (
                                            <span
                                                key={t}
                                                style={{
                                                    background: 'rgba(255,255,255,0.07)',
                                                    border: '1px solid rgba(255,255,255,0.18)',
                                                    color: 'rgba(255,255,255,0.85)',
                                                    fontSize: '0.65rem',
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    padding: '2px 8px',
                                                    letterSpacing: '0.2em',
                                                    textTransform: 'uppercase',
                                                }}
                                                className="group-hover:!bg-black/8 group-hover:!text-black group-hover:!border-black/15"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                        <span style={{
                                            marginLeft: 'auto',
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.65rem',
                                            color: '#66CC66',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase',
                                            fontWeight: 700,
                                        }} className="group-hover:!text-black/60">
                                            ✓ {p.status}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )

            case 'ARSENAL':
                const groupedArsenal = USER_DATA.arsenal.reduce((acc, item) => {
                    if (!acc[item.category]) acc[item.category] = []
                    acc[item.category].push(item)
                    return acc
                }, {} as Record<string, typeof USER_DATA.arsenal>)

                return (
                    <div className="flex flex-col gap-5 w-full">
                        {/* Header */}
                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: '12px' }}>
                            <div className="flex flex-wrap justify-between items-center gap-3">
                                <div>
                                    <div className="flex items-center gap-2.5">
                                        <div style={{
                                            width: '10px', height: '10px',
                                            background: '#66CC66',
                                            boxShadow: '0 0 10px rgba(102,204,102,0.9), 0 0 20px rgba(102,204,102,0.5)',
                                            animation: 'neon-breathe 2.8s ease-in-out infinite'
                                        }} />
                                        <h3 style={{
                                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                            fontSize: 'clamp(1.1rem, 2.2vw, 1.55rem)',
                                            letterSpacing: '0.12em',
                                            color: '#fff',
                                            textTransform: 'uppercase',
                                        }}>
                                            CLASSIFIED ARSENAL // TECH CAPABILITIES
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
                                        CORE LANGUAGES, FRAMEWORKS, AI & SYSTEM ENGINEERING
                                    </p>
                                </div>
                                <span style={{
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.72rem',
                                    color: 'rgba(255,255,255,0.6)',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                }}>
                                    12 LOADOUT ITEMS
                                </span>
                            </div>
                        </div>

                        {/* Grouped Arsenal */}
                        {Object.entries(groupedArsenal).map(([category, items]) => (
                            <div key={category} className="flex flex-col gap-2.5">
                                {/* Category Header */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    marginBottom: '2px',
                                }}>
                                    <div style={{
                                        width: '3px',
                                        height: '16px',
                                        background: CATEGORY_COLORS[category] || '#fff',
                                        boxShadow: `0 0 8px ${CATEGORY_COLORS[category] || '#fff'}`,
                                    }} />
                                    <span style={{
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.72rem',
                                        color: CATEGORY_COLORS[category] || '#fff',
                                        letterSpacing: '0.3em',
                                        textTransform: 'uppercase',
                                        fontWeight: 700,
                                        textShadow: `0 0 8px ${CATEGORY_COLORS[category] || '#fff'}`,
                                    }}>
                                        {category}
                                    </span>
                                    <div style={{
                                        flex: 1,
                                        height: '1px',
                                        background: `linear-gradient(to right, ${CATEGORY_COLORS[category] || '#fff'}40, transparent)`,
                                    }} />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    {items.map((item, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                background: 'linear-gradient(135deg, #0e0e14 0%, #0b0b10 100%)',
                                                border: '1px solid rgba(255,255,255,0.1)',
                                                borderLeft: `3px solid ${item.color}`,
                                                padding: '12px 14px',
                                                transition: 'all 0.18s ease',
                                                position: 'relative',
                                                overflow: 'hidden',
                                            }}
                                            onMouseEnter={e => {
                                                (e.currentTarget as HTMLElement).style.borderColor = item.color
                                                ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${item.color}20, inset 0 0 20px ${item.color}05`
                                                ;(e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, #0f0f16 0%, ${item.color}06 100%)`
                                            }}
                                            onMouseLeave={e => {
                                                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'
                                                ;(e.currentTarget as HTMLElement).style.borderLeftColor = item.color
                                                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                                                ;(e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #0e0e14 0%, #0b0b10 100%)'
                                            }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <div style={{
                                                        width: '5px', height: '5px',
                                                        background: item.color,
                                                        boxShadow: `0 0 5px ${item.color}`,
                                                    }} />
                                                    <span style={{
                                                        fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                        fontSize: '0.9rem',
                                                        color: '#fff',
                                                        letterSpacing: '0.08em',
                                                        textTransform: 'uppercase',
                                                    }}>
                                                        {item.name}
                                                    </span>
                                                </div>
                                                <span style={{
                                                    fontFamily: 'Share Tech Mono,monospace',
                                                    fontSize: '0.85rem',
                                                    color: item.color,
                                                    fontWeight: 700,
                                                    textShadow: `0 0 8px ${item.color}`,
                                                }}>
                                                    {item.proficiency}
                                                </span>
                                            </div>

                                            {/* Animated stat bar */}
                                            <div style={{
                                                width: '100%',
                                                background: 'rgba(255,255,255,0.06)',
                                                height: '3px',
                                                position: 'relative',
                                                overflow: 'hidden',
                                            }}>
                                                <div
                                                    style={{
                                                        width: item.proficiency,
                                                        height: '100%',
                                                        background: `linear-gradient(to right, ${item.color}aa, ${item.color})`,
                                                        boxShadow: `0 0 6px ${item.color}80`,
                                                        position: 'relative',
                                                    }}
                                                >
                                                    {/* Shimmer on bar */}
                                                    <div style={{
                                                        position: 'absolute',
                                                        inset: 0,
                                                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
                                                        backgroundSize: '200% 100%',
                                                        animation: 'shimmer-bar 2.5s ease-in-out infinite',
                                                    }} />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )

            case 'CONTACT':
                return (
                    <div className="flex flex-col gap-5 w-full">
                        {/* Header */}
                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.12)', paddingBottom: '12px' }}>
                            <div className="flex items-center gap-2.5">
                                <div style={{
                                    width: '10px', height: '10px',
                                    background: '#f5a623',
                                    boxShadow: '0 0 10px rgba(245,166,35,0.9)',
                                    animation: 'gold-pulse 2.8s ease-in-out infinite'
                                }} />
                                <h3 style={{
                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                    fontSize: 'clamp(1.1rem, 2.2vw, 1.55rem)',
                                    letterSpacing: '0.12em',
                                    color: '#fff',
                                    textTransform: 'uppercase',
                                }}>
                                    ENCRYPTED COMMS // DIRECT DISPATCH
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
                                TRANSMIT HIGH-PRIORITY CONTRACTS & FULL-TIME PROPOSALS
                            </p>
                        </div>

                        {/* Signal Strength Decorative */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 16px',
                            background: 'rgba(102,204,102,0.05)',
                            border: '1px solid rgba(102,204,102,0.2)',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '18px' }}>
                                {[4, 7, 11, 15, 18].map((h, i) => (
                                    <div key={i} style={{
                                        width: '3px',
                                        height: `${h}px`,
                                        background: '#66CC66',
                                        boxShadow: '0 0 4px rgba(102,204,102,0.8)',
                                        opacity: 0.85 + i * 0.03,
                                    }} />
                                ))}
                            </div>
                            <span style={{
                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                fontSize: '0.72rem',
                                color: '#66CC66',
                                letterSpacing: '0.25em',
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                textShadow: '0 0 8px rgba(102,204,102,0.6)',
                            }}>
                                SIGNAL STRENGTH: MAXIMUM // OPEN FOR OPPORTUNITIES
                            </span>
                            <div className="live-dot" style={{
                                marginLeft: 'auto',
                                width: '8px',
                                height: '8px',
                                background: '#66CC66',
                                borderRadius: '50% !important',
                                boxShadow: '0 0 8px rgba(102,204,102,0.8)',
                            }} />
                        </div>

                        {/* Contact Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* Email */}
                            <div
                                onClick={handleCopyEmail}
                                className="card-shimmer-container group cursor-pointer"
                                style={{
                                    background: 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    borderLeft: '3px solid #f5a623',
                                    padding: '20px',
                                    transition: 'all 0.22s cubic-bezier(0.2,0.8,0.2,1)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.background = '#fff'
                                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 35px rgba(0,0,0,0.7), 0 0 20px rgba(245,166,35,0.25)'
                                    ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)'
                                    ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                                    ;(e.currentTarget as HTMLElement).style.transform = 'none'
                                }}
                            >
                                {copied && (
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'rgba(102,204,102,0.15)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 5,
                                        animation: 'slide-in-up 0.3s ease',
                                    }}>
                                        <span style={{
                                            fontFamily: 'ChaletLondon1960,"Bebas Neue",sans-serif',
                                            fontSize: '1.1rem',
                                            color: '#66CC66',
                                            letterSpacing: '0.2em',
                                            textShadow: '0 0 20px rgba(102,204,102,0.8)',
                                        }}>
                                            ✓ TRANSMISSION SENT
                                        </span>
                                    </div>
                                )}
                                <p style={{
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.68rem',
                                    color: 'rgba(255,255,255,0.45)',
                                    letterSpacing: '0.3em',
                                    textTransform: 'uppercase',
                                    marginBottom: '6px',
                                }} className="group-hover:!text-black/50">
                                    ◎ DIRECT EMAIL // DISPATCH
                                </p>
                                <p style={{
                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                    fontSize: '0.88rem',
                                    color: '#fff',
                                    letterSpacing: '0.05em',
                                    textTransform: 'uppercase',
                                    wordBreak: 'break-all',
                                }} className="group-hover:!text-black">
                                    {USER_DATA.email}
                                </p>
                                <p style={{
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.72rem',
                                    color: '#f5a623',
                                    textTransform: 'uppercase',
                                    marginTop: '12px',
                                    fontWeight: 700,
                                    letterSpacing: '0.2em',
                                }} className="group-hover:!text-black/60">
                                    [ CLICK TO COPY ]
                                </p>
                            </div>

                            {/* GitHub */}
                            <a
                                href={USER_DATA.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-shimmer-container group block"
                                style={{
                                    background: 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    borderLeft: '3px solid #fff',
                                    padding: '20px',
                                    transition: 'all 0.22s cubic-bezier(0.2,0.8,0.2,1)',
                                    textDecoration: 'none',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.background = '#fff'
                                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 35px rgba(0,0,0,0.7)'
                                    ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)'
                                    ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                                    ;(e.currentTarget as HTMLElement).style.transform = 'none'
                                }}
                            >
                                <p style={{
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.68rem',
                                    color: 'rgba(255,255,255,0.45)',
                                    letterSpacing: '0.3em',
                                    textTransform: 'uppercase',
                                    marginBottom: '6px',
                                }} className="group-hover:!text-black/50">
                                    ◆ GITHUB REPOSITORIES
                                </p>
                                <p style={{
                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                    fontSize: '1.1rem',
                                    color: '#fff',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                }} className="group-hover:!text-black">
                                    lokiverse-devil
                                </p>
                                <p style={{
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.72rem',
                                    color: 'rgba(255,255,255,0.6)',
                                    textTransform: 'uppercase',
                                    marginTop: '12px',
                                    fontWeight: 700,
                                    letterSpacing: '0.2em',
                                }} className="group-hover:!text-black/60">
                                    [ OPEN DOSSIER ↗ ]
                                </p>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href={USER_DATA.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="card-shimmer-container group block"
                                style={{
                                    background: 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    borderLeft: '3px solid #0077B5',
                                    padding: '20px',
                                    transition: 'all 0.22s cubic-bezier(0.2,0.8,0.2,1)',
                                    textDecoration: 'none',
                                    overflow: 'hidden',
                                }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLElement).style.background = '#fff'
                                    ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 35px rgba(0,0,0,0.7), 0 0 20px rgba(0,119,181,0.2)'
                                    ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)'
                                    ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                                    ;(e.currentTarget as HTMLElement).style.transform = 'none'
                                }}
                            >
                                <p style={{
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.68rem',
                                    color: 'rgba(255,255,255,0.45)',
                                    letterSpacing: '0.3em',
                                    textTransform: 'uppercase',
                                    marginBottom: '6px',
                                }} className="group-hover:!text-black/50">
                                    ◐ LINKEDIN NETWORK
                                </p>
                                <p style={{
                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                    fontSize: '1.1rem',
                                    color: '#fff',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                }} className="group-hover:!text-black">
                                    Om Pandey
                                </p>
                                <p style={{
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.72rem',
                                    color: 'rgba(255,255,255,0.6)',
                                    textTransform: 'uppercase',
                                    marginTop: '12px',
                                    fontWeight: 700,
                                    letterSpacing: '0.2em',
                                }} className="group-hover:!text-black/60">
                                    [ CONNECT ON NETWORK ↗ ]
                                </p>
                            </a>
                        </div>
                    </div>
                )

            default:
                return null
        }
    }

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                background: 'radial-gradient(ellipse at 50% 0%, #111008 0%, #09090a 55%, #050505 100%)',
                overflow: 'hidden',
                zIndex: 100,
                userSelect: 'none',
            }}
        >
            {/* Subtle warm ambient — top center gold bloom */}
            <div style={{
                position: 'absolute',
                top: '-15%',
                left: '25%',
                width: '50%',
                height: '60%',
                background: 'radial-gradient(ellipse at center, rgba(200, 150, 20, 0.06) 0%, transparent 65%)',
                pointerEvents: 'none',
            }} />

            <div className="heavy-vignette" />

            {/* ═══ TOP HUD BAR ═══ */}
            <header
                style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    padding: '0 32px',
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 130,
                    background: '#080807',
                    borderBottom: '1px solid rgba(212,150,10,0.18)',
                    boxShadow: '0 1px 0 rgba(212,150,10,0.06)',
                }}
            >
                {/* Left — Protagonist Profile */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    {/* Rank Badge */}
                    <div style={{
                        width: '42px',
                        height: '42px',
                        background: '#0d0d0a',
                        border: '1px solid rgba(102,204,102,0.55)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'Share Tech Mono,monospace',
                        fontSize: '1rem',
                        color: '#66CC66',
                        boxShadow: '0 0 10px rgba(102,204,102,0.2)',
                        flexShrink: 0,
                    }}>
                        {USER_DATA.rank}
                    </div>

                    <div>
                        <div style={{
                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                            fontSize: '1.2rem',
                            letterSpacing: '0.18em',
                            color: '#f0ede8',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                        }}>
                            {USER_DATA.name}
                            <span style={{
                                fontSize: '0.6rem',
                                background: '#66CC66',
                                color: '#000',
                                padding: '2px 7px',
                                fontWeight: 900,
                                letterSpacing: '0.12em',
                            }}>
                                PRO
                            </span>
                        </div>
                        <div style={{
                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                            fontSize: '0.7rem',
                            letterSpacing: '0.28em',
                            color: 'rgba(240,237,232,0.45)',
                            marginTop: '2px',
                        }}>
                            {USER_DATA.tagline}
                        </div>
                    </div>
                </div>

                {/* Right — Stats, Stars, Clock, Toggle */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
                    {/* Wanted Stars */}
                    <div className="hidden sm:block">
                        <WantedStarsHUD />
                    </div>

                    {/* Cash + Bank */}
                    <div style={{ textAlign: 'right' }}>
                        <div style={{
                            fontFamily: 'Share Tech Mono,monospace',
                            fontSize: '1.15rem',
                            color: '#66CC66',
                            letterSpacing: '0.04em',
                            lineHeight: 1.1,
                        }}>
                            {mounted ? <AnimatedCounter target={USER_DATA.cash} /> : USER_DATA.cash}
                        </div>
                        <div style={{
                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                            fontSize: '0.66rem',
                            color: 'rgba(255,255,255,0.35)',
                            letterSpacing: '0.18em',
                            marginTop: '1px',
                        }} className="hidden sm:block">
                            BANK: <span style={{ color: 'rgba(255,255,255,0.58)' }}>
                                {mounted ? <AnimatedCounter target={USER_DATA.bank} /> : USER_DATA.bank}
                            </span>
                        </div>
                    </div>

                    {/* Digital Clock */}
                    <div style={{
                        fontFamily: 'Share Tech Mono,monospace',
                        fontSize: '0.95rem',
                        letterSpacing: '0.08em',
                        color: 'rgba(240,237,232,0.75)',
                        borderLeft: '1px solid rgba(255,255,255,0.1)',
                        paddingLeft: '18px',
                        minWidth: '68px',
                    }}>
                        {time}
                    </div>

                    {/* Mute Toggle */}
                    <button
                        onClick={toggleAmbience}
                        title={ambienceMuted ? 'Unmute Audio' : 'Mute Audio'}
                        style={{
                            background: 'transparent',
                            border: `1px solid ${ambienceMuted ? 'rgba(255,255,255,0.15)' : 'rgba(102,204,102,0.35)'}`,
                            color: ambienceMuted ? 'rgba(255,255,255,0.25)' : 'rgba(102,204,102,0.85)',
                            padding: '4px 12px',
                            cursor: 'pointer',
                            fontSize: '0.66rem',
                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            transition: 'all 0.18s ease',
                        }}
                    >
                        {ambienceMuted ? '⊗ MUTED' : '◉ AUDIO'}
                    </button>
                </div>
            </header>

            {/* ═══ MAIN DASHBOARD CONTAINER ═══ */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '80px 20px 48px',
                    zIndex: 120,
                }}
            >
                {/* Navigation Tab Strip */}
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '1px',
                        marginBottom: '12px',
                        zIndex: 125,
                        maxWidth: '1200px',
                        width: '100%',
                        background: '#070706',
                        borderBottom: '1px solid rgba(212,150,10,0.12)',
                    }}
                >
                    {MENU_ITEMS.map((item) => {
                        const isActive = activeItem === item.key
                        return (
                            <button
                                key={item.key}
                                onClick={() => setActiveItem(item.key)}
                                style={{
                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                    fontSize: 'clamp(0.78rem, 1.3vw, 1rem)',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    padding: '11px 22px',
                                    background: isActive ? '#f0ede8' : 'transparent',
                                    color: isActive ? '#080807' : 'rgba(240,237,232,0.45)',
                                    border: 'none',
                                    borderTop: isActive ? '2px solid #d4960a' : '2px solid transparent',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s ease',
                                    boxShadow: isActive ? '0 0 30px rgba(240,237,232,0.08)' : 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    flex: '1 1 auto',
                                    justifyContent: 'center',
                                }}
                                onMouseEnter={e => {
                                    if (!isActive) {
                                        (e.currentTarget as HTMLElement).style.color = '#f0ede8'
                                        ;(e.currentTarget as HTMLElement).style.background = 'rgba(240,237,232,0.04)'
                                        ;(e.currentTarget as HTMLElement).style.borderTopColor = 'rgba(212,150,10,0.35)'
                                    }
                                }}
                                onMouseLeave={e => {
                                    if (!isActive) {
                                        (e.currentTarget as HTMLElement).style.color = 'rgba(240,237,232,0.45)'
                                        ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                                        ;(e.currentTarget as HTMLElement).style.borderTopColor = 'transparent'
                                    }
                                }}
                            >
                                <span style={{
                                    fontSize: '0.9em',
                                    opacity: isActive ? 0.7 : 0.3,
                                }}>
                                    {item.icon}
                                </span>
                                <span>{item.label}</span>
                                <span style={{
                                    fontSize: '0.6em',
                                    opacity: 0.35,
                                    background: 'rgba(255,255,255,0.07)',
                                    padding: '1px 4px',
                                    letterSpacing: '0.04em',
                                }}>
                                    {item.shortcut}
                                </span>
                            </button>
                        )
                    })}
                </div>

                {/* ── MAIN CONTENT PANEL ── */}
                <div
                    ref={contentRef}
                    className="landing-content-panel corner-bracket"
                    style={{
                        width: 'min(96vw, 1220px)',
                        maxHeight: '72vh',
                        background: '#0a0a08',
                        borderTop: '1px solid rgba(212,150,10,0.35)',
                        borderRight: '1px solid rgba(255,255,255,0.07)',
                        borderBottom: '1px solid rgba(255,255,255,0.07)',
                        borderLeft: '1px solid rgba(255,255,255,0.07)',
                        padding: '24px 28px',
                        boxShadow: '0 24px 80px rgba(0,0,0,0.9)',
                        overflowY: 'auto',
                        position: 'relative',
                    }}
                >
                    {/* Top-right corner bracket (CSS handles top-left + bottom-right) */}
                    <div style={{
                        position: 'absolute',
                        top: '-1px',
                        right: '-1px',
                        width: '14px',
                        height: '14px',
                        borderTop: '1px solid rgba(212,150,10,0.6)',
                        borderRight: '1px solid rgba(212,150,10,0.6)',
                        pointerEvents: 'none',
                        zIndex: 2,
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '-1px',
                        left: '-1px',
                        width: '14px',
                        height: '14px',
                        borderBottom: '1px solid rgba(212,150,10,0.6)',
                        borderLeft: '1px solid rgba(212,150,10,0.6)',
                        pointerEvents: 'none',
                        zIndex: 2,
                    }} />

                    {renderContent()}
                </div>
            </div>

            {/* ═══ BOTTOM FOOTER HUD ═══ */}
            <footer
                style={{
                    position: 'absolute',
                    bottom: 0, left: 0, right: 0,
                    height: '38px',
                    padding: '0 32px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 130,
                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.25em',
                    color: 'rgba(240,237,232,0.28)',
                    textTransform: 'uppercase',
                    background: '#080807',
                    borderTop: '1px solid rgba(212,150,10,0.1)',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span>[KEYS 1-5: SELECT TABS]</span>
                    <span className="hidden sm:inline">[CLICK ATTRIBUTES FOR INTEL]</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    {/* Live indicator */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div className="live-dot" style={{
                            width: '6px',
                            height: '6px',
                            background: '#66CC66',
                            borderRadius: '50% !important',
                            boxShadow: '0 0 6px rgba(102,204,102,0.8)',
                        }} />
                        <span style={{ color: '#66CC66', fontWeight: 700 }}>LIVE</span>
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                    <span>OM PANDEY // PORTFOLIO 2.0</span>
                    <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
                    <span style={{ color: 'rgba(245,166,35,0.6)' }}>BUILD v2.0</span>
                </div>
            </footer>
        </div>
    )
}
