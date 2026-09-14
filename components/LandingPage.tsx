'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'
import gsap from 'gsap'
import AcademicRadar from './AcademicRadar'
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
    tagline: 'A PROFESSIONAL TECH ENTHUSIAST',
    rank: 100,
    cash: '₹15,000',
    bank: '₹40,000',
    email: 'ompandey2341@gmail.com',
    github: 'https://github.com/lokiverse-devil',
    linkedin: 'https://www.linkedin.com/in/om-pandey-87b057328/',
    projects: [
        {
            title: 'VibeChat',
            category: 'REAL-TIME MESSAGING',
            desc: 'A fast, real-time messaging EMOJI-ONLY app built with Next.js and WebSockets for instant chat and media sharing.',
            tags: ['HTML', 'CSS', 'WEBSOCKETS', 'JAVASCRIPT'],
            link: 'https://github.com/lokiverse-devil/VibeChat',
            status: 'COMPLETED',
            opNum: '01',
        },
        {
            title: 'HTRACX',
            category: 'HOSTEL MANAGEMENT',
            desc: 'A digital portal that simplifies hostel room allotments, student records, and fee tracking.',
            tags: ['FULL STACK', 'POSTGRESQL', 'SUPABASE', 'NEXT.JS'],
            link: 'https://github.com/lokiverse-devil/HtrackX-Smart-Hostel-Management-System-',
            status: 'COMPLETED',
            opNum: '02',
        },
        {
            title: 'SmartClass X',
            category: 'IOT AUTOMATION',
            desc: 'An automated classroom setup using IoT sensors to manage smart lighting, fans, and attendance.',
            tags: ['PYTHON', 'IOT', 'EMBEDDED', 'WEB PORTALS'],
            link: 'https://github.com/lokiverse-devil/SmartClassX_Final',
            status: 'COMPLETED',
            opNum: '03',
        },
        {
            title: 'AIMS - ACADEMIC INFRASTRUCTURE & MANAGEMENT SYSTEM',
            category: 'CAMPUS ASSET SUITE',
            desc: 'An infrastructure and asset tracking platform helping colleges manage lab inventory and staff requests.',
            tags: ['SYSTEM DESIGN', 'POSTGRESQL', 'SUPABASE', 'REST APIS'],
            link: 'https://aims-it-ugip.vercel.app/',
            status: 'COMPLETED',
            opNum: '04',
        },
    ],
    arsenal: [
        { name: 'C / C++', proficiency: '94%', profNum: 94, category: 'CORE', color: '#cc0000ff' },
        { name: 'JAVA & OOP', proficiency: '90%', profNum: 90, category: 'CORE', color: '#024aa2ff' },
        { name: 'DATA STRUCTURES & ALGORITHMS', proficiency: '92%', profNum: 92, category: 'CORE', color: '#24c110ff' },
        { name: 'NEXT.JS', proficiency: '95%', profNum: 95, category: 'FRONTEND', color: '#a88404ff' },
        { name: 'TYPESCRIPT', proficiency: '92%', profNum: 92, category: 'FRONTEND', color: '#009a9dff' },
        { name: 'SQL & POSTGRESQL', proficiency: '92%', profNum: 92, category: 'DATABASE', color: '#2a0489ff' },
        { name: 'SUPABASE & BACKEND', proficiency: '90%', profNum: 90, category: 'DATABASE', color: '#9a0485ff' },
        { name: 'MODEL CONTEXT PROTOCOL (MCP)', proficiency: '95%', profNum: 95, category: 'AI TECH', color: '#8e9100ff' },
        { name: 'USING AI MODELS', proficiency: '94%', profNum: 94, category: 'AI TECH', color: '#003ea9ff' },
        { name: 'IOT & EMBEDDED SYSTEMS', proficiency: '88%', profNum: 88, category: 'HARDWARE', color: '#04748dff' },
        { name: 'TEAM LEADERSHIP & DEMOS', proficiency: '92%', profNum: 92, category: 'LEADERSHIP', color: '#a60404ff' },
    ],
}

const MENU_ITEMS: { key: MenuItem; label: string; shortcut: string }[] = [
    { key: 'MAP', label: 'TERRITORY', shortcut: '1' },
    { key: 'CHARACTER', label: 'CHARACTER', shortcut: '2' },
    { key: 'PROJECTS', label: 'OPERATIONS', shortcut: '3' },
    { key: 'ARSENAL', label: 'ARSENAL', shortcut: '4' },
    { key: 'CONTACT', label: 'COMMS', shortcut: '5' },
]

// Animated cash counter
function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
    const [display, setDisplay] = useState('$0')
    const hasAnimated = useRef(false)

    useEffect(() => {
        if (hasAnimated.current) return
        hasAnimated.current = true
        const nums = target.replace(/[^0-9]/g, '')
        const end = parseInt(nums, 10)
        if (isNaN(end)) {
            setDisplay(target)
            return
        }
        const prefix = target.startsWith('₹') ? '₹' : ''
        let start = 0
        const duration = 1000
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

// Subtle pure white wanted stars HUD
function WantedStarsHUD() {
    return (
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 72 72" style={{ opacity: 0.85 }}>
                    <polygon
                        points="36,4 44,28 70,28 49,44 57,68 36,52 15,68 23,44 2,28 28,28"
                        fill="#ffffff"
                        style={{
                            filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.7))',
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
                volume: 0.25,
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
                { opacity: 0, y: 8 },
                { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out' }
            )
        }
    }, [activeItem])

    const handleTabChange = (key: MenuItem) => {
        setActiveItem(key)
    }

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
        setTimeout(() => setCopied(false), 2400)
    }

    const renderContent = () => {
        switch (activeItem) {
            case 'MAP':
                return <AcademicRadar />

            case 'CHARACTER':
                return <CharacterSection />

            case 'PROJECTS':
                return (
                    <div className="flex flex-col gap-5 w-full">
                        {/* Header */}
                        <div
                            className="flex flex-wrap justify-between items-center gap-3 pb-3"
                            style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                        >
                            <div>
                                <div className="flex items-center gap-2.5">
                                    <div
                                        style={{
                                            width: '3px',
                                            height: '14px',
                                            background: '#ffffffff',
                                        }}
                                    />
                                    <h3
                                        style={{
                                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                            fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                                            letterSpacing: '0.14em',
                                            color: '#ffffffff',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        OPERATIONS // COMPLETED PROJECTS
                                    </h3>
                                </div>
                                <p
                                    style={{
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.78rem',
                                        color: 'rgba(250, 250, 250, 0.45)',
                                        letterSpacing: '0.22em',
                                        textTransform: 'uppercase',
                                        marginTop: '3px',
                                    }}
                                >
                                    04 MAJOR SYSTEMS // CLICK ANY CARD TO VIEW REPOSITORY
                                </p>
                            </div>
                            <span
                                style={{
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.72rem',
                                    color: '#00ed00ff',
                                    background: 'rgba(0, 0, 0, 0.06)',
                                    border: '1px solid rgba(124, 204, 102, 0.3)',
                                    padding: '4px 12px',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                }}
                            >
                                ✓ ALL VERIFIED
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
                                    className="block group p-5 transition-all duration-200"
                                    style={{
                                        background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderLeft: '3px solid #ffffff',
                                        position: 'relative',
                                        textDecoration: 'none',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'flex-start',
                                            marginBottom: '8px',
                                        }}
                                    >
                                        <div>
                                            <span
                                                style={{
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.68rem',
                                                    color: 'rgba(255, 255, 255, 0.4)',
                                                    letterSpacing: '0.3em',
                                                    textTransform: 'uppercase',
                                                    display: 'block',
                                                }}
                                            >
                                                OPERATION {p.opNum}
                                            </span>
                                            <h4
                                                style={{
                                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                    fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                                                    color: '#a1037fff',
                                                    letterSpacing: '0.08em',
                                                    textTransform: 'uppercase',
                                                }}
                                            >
                                                {p.title}
                                            </h4>
                                        </div>
                                        <span
                                            style={{
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.66rem',
                                                color: 'rgba(255,255,255,0.7)',
                                                background: 'rgba(255,255,255,0.06)',
                                                border: '1px solid rgba(255,255,255,0.15)',
                                                padding: '3px 10px',
                                                letterSpacing: '0.15em',
                                                textTransform: 'uppercase',
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            {p.category}
                                        </span>
                                    </div>

                                    <p
                                        style={{
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.85rem',
                                            color: 'rgba(255,255,255,0.75)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.06em',
                                            lineHeight: '1.55',
                                            marginBottom: '12px',
                                        }}
                                    >
                                        {p.desc}
                                    </p>

                                    <div
                                        style={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: '6px',
                                            alignItems: 'center',
                                        }}
                                    >
                                        {p.tags.map((t) => (
                                            <span
                                                key={t}
                                                style={{
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid rgba(255,255,255,0.12)',
                                                    color: 'rgba(255,255,255,0.75)',
                                                    fontSize: '0.64rem',
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    padding: '2px 8px',
                                                    letterSpacing: '0.18em',
                                                    textTransform: 'uppercase',
                                                }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                        <span
                                            style={{
                                                marginLeft: 'auto',
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.65rem',
                                                color: '#66CC66',
                                                letterSpacing: '0.2em',
                                                textTransform: 'uppercase',
                                                fontWeight: 700,
                                            }}
                                        >
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
                        <div
                            style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}
                        >
                            <div className="flex flex-wrap justify-between items-center gap-3">
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
                                            ARSENAL // TECHNICAL LOADOUT
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
                                        CORE LANGUAGES, FRAMEWORKS, AI & SYSTEMS ENGINEERING
                                    </p>
                                </div>
                                <span
                                    style={{
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '1rem',
                                        color: 'rgba(243, 243, 243, 0.5)',
                                        letterSpacing: '0.2em',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    12 LOADOUT ITEMS
                                </span>
                            </div>
                        </div>

                        {/* Grouped Arsenal */}
                        {Object.entries(groupedArsenal).map(([category, items]) => (
                            <div key={category} className="flex flex-col gap-2.5">
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        marginBottom: '2px',
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.72rem',
                                            color: 'rgba(255, 255, 255, 0.8)',
                                            letterSpacing: '0.3em',
                                            textTransform: 'uppercase',
                                            fontWeight: 700,
                                        }}
                                    >
                                        {category}
                                    </span>
                                    <div
                                        style={{
                                            flex: 1,
                                            height: '1px',
                                            background: 'rgba(255,255,255,0.08)',
                                        }}
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    {items.map((item, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                borderLeft: `3px solid ${item.color}`,
                                                padding: '12px 14px',
                                                position: 'relative',
                                            }}
                                        >
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    marginBottom: '8px',
                                                }}
                                            >
                                                <span
                                                    style={{
                                                        fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                        fontSize: '0.9rem',
                                                        color: '#f5efefff',
                                                        letterSpacing: '0.08em',
                                                        textTransform: 'uppercase',
                                                    }}
                                                >
                                                    {item.name}
                                                </span>
                                                <span
                                                    style={{
                                                        fontFamily: 'Share Tech Mono,monospace',
                                                        fontSize: '0.85rem',
                                                        color: item.color,
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {item.proficiency}
                                                </span>
                                            </div>

                                            <div
                                                style={{
                                                    width: '100%',
                                                    background: 'rgba(255,255,255,0.06)',
                                                    height: '3px',
                                                    position: 'relative',
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: item.proficiency,
                                                        height: '100%',
                                                        background: item.color,
                                                    }}
                                                />
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
                        <div
                            style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}
                        >
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
                                    DIRECT DISPATCH // CONTACT & SOCIALS
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
                                AVAILABLE FOR SOFTWARE ROLES, INTERNSHIPS AND TECHNICAL COLLABORATIONS
                            </p>
                        </div>

                        {/* Signal Status */}
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '10px 16px',
                                background: 'rgba(102,204,102,0.04)',
                                border: '1px solid rgba(102,204,102,0.2)',
                            }}
                        >
                            <div
                                style={{
                                    width: '6px',
                                    height: '6px',
                                    background: '#66CC66',
                                    borderRadius: '50%',
                                }}
                            />
                            <span
                                style={{
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.72rem',
                                    color: '#66CC66',
                                    letterSpacing: '0.25em',
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                }}
                            >
                                STATUS: ONLINE // OPEN FOR OPPORTUNITIES
                            </span>
                        </div>

                        {/* Contact Cards (Completely stable, zero-jitter CSS hover) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* Email */}
                            <div
                                onClick={handleCopyEmail}
                                className="cursor-pointer p-5 transition-colors duration-200"
                                style={{
                                    background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderLeft: '3px solid #ffffff',
                                    position: 'relative',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                                    e.currentTarget.style.borderLeftColor = '#ffffff'
                                }}
                            >
                                {copied && (
                                    <div
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'rgba(102,204,102,0.12)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            zIndex: 5,
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'ChaletLondon1960,"Bebas Neue",sans-serif',
                                                fontSize: '1rem',
                                                color: '#66CC66',
                                                letterSpacing: '0.15em',
                                            }}
                                        >
                                            ✓ EMAIL COPIED
                                        </span>
                                    </div>
                                )}
                                <p
                                    style={{
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.68rem',
                                        color: 'rgba(255,255,255,0.4)',
                                        letterSpacing: '0.3em',
                                        textTransform: 'uppercase',
                                        marginBottom: '6px',
                                    }}
                                >
                                    DIRECT EMAIL
                                </p>
                                <p
                                    style={{
                                        fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                        fontSize: '0.92rem',
                                        color: '#fff',
                                        letterSpacing: '0.05em',
                                        textTransform: 'uppercase',
                                        wordBreak: 'break-all',
                                    }}
                                >
                                    {USER_DATA.email}
                                </p>
                                <p
                                    style={{
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.72rem',
                                        color: 'rgba(255,255,255,0.5)',
                                        textTransform: 'uppercase',
                                        marginTop: '12px',
                                        fontWeight: 700,
                                        letterSpacing: '0.2em',
                                    }}
                                >
                                    [ CLICK TO COPY ]
                                </p>
                            </div>

                            {/* GitHub */}
                            <a
                                href={USER_DATA.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-5 transition-colors duration-200"
                                style={{
                                    background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderLeft: '3px solid #cbd5e1',
                                    textDecoration: 'none',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                                    e.currentTarget.style.borderLeftColor = '#cbd5e1'
                                }}
                            >
                                <p
                                    style={{
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.68rem',
                                        color: 'rgba(255,255,255,0.4)',
                                        letterSpacing: '0.3em',
                                        textTransform: 'uppercase',
                                        marginBottom: '6px',
                                    }}
                                >
                                    GITHUB
                                </p>
                                <p
                                    style={{
                                        fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                        fontSize: '1.05rem',
                                        color: '#fff',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    lokiverse-devil
                                </p>
                                <p
                                    style={{
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.72rem',
                                        color: 'rgba(255,255,255,0.5)',
                                        textTransform: 'uppercase',
                                        marginTop: '12px',
                                        fontWeight: 700,
                                        letterSpacing: '0.2em',
                                    }}
                                >
                                    [ VIEW REPOSITORIES ↗ ]
                                </p>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href={USER_DATA.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-5 transition-colors duration-200"
                                style={{
                                    background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderLeft: '3px solid #94a3b8',
                                    textDecoration: 'none',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                                    e.currentTarget.style.borderLeftColor = '#94a3b8'
                                }}
                            >
                                <p
                                    style={{
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.68rem',
                                        color: 'rgba(255,255,255,0.4)',
                                        letterSpacing: '0.3em',
                                        textTransform: 'uppercase',
                                        marginBottom: '6px',
                                    }}
                                >
                                    LINKEDIN
                                </p>
                                <p
                                    style={{
                                        fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                        fontSize: '1.05rem',
                                        color: '#fff',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    Om Pandey
                                </p>
                                <p
                                    style={{
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.72rem',
                                        color: 'rgba(255,255,255,0.5)',
                                        textTransform: 'uppercase',
                                        marginTop: '12px',
                                        fontWeight: 700,
                                        letterSpacing: '0.2em',
                                    }}
                                >
                                    [ CONNECT ON LINKEDIN ↗ ]
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
                background: '#070709',
                overflow: 'hidden',
                zIndex: 100,
                userSelect: 'none',
            }}
        >
            <div className="heavy-vignette" />

            {/* ═══ TOP HUD BAR ═══ */}
            <header
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    padding: '0 32px',
                    height: '58px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 130,
                    background: '#09090c',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                }}
            >
                {/* Left — Protagonist Profile */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                        style={{
                            width: '38px',
                            height: '38px',
                            background: '#121216',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'Pricedown, "Share Tech Mono", monospace',
                            fontSize: '1.25rem',
                            color: '#ffffff',
                            flexShrink: 0,
                        }}
                    >
                        {USER_DATA.rank}
                    </div>

                    <div>
                        <div
                            style={{
                                fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                fontSize: '1.15rem',
                                letterSpacing: '0.14em',
                                color: '#ffffff',
                            }}
                        >
                            {USER_DATA.name}
                        </div>
                        <div
                            style={{
                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                fontSize: '0.7rem',
                                letterSpacing: '0.24em',
                                color: 'rgba(255, 255, 255, 0.45)',
                                marginTop: '1px',
                            }}
                        >
                            {USER_DATA.tagline}
                        </div>
                    </div>
                </div>

                {/* Right — Wanted Stars, Cash, Clock, Audio */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
                    <div className="hidden sm:block">
                        <WantedStarsHUD />
                    </div>

                    {/* Cash + Bank */}
                    <div style={{ textAlign: 'right' }}>
                        <div
                            style={{
                                fontFamily: 'Pricedown, "Share Tech Mono", monospace',
                                fontSize: '1.35rem',
                                color: '#66CC66',
                                letterSpacing: '0.04em',
                                lineHeight: 1.1,
                            }}
                        >
                            {mounted ? <AnimatedCounter target={USER_DATA.cash} /> : USER_DATA.cash}
                        </div>
                        <div
                            style={{
                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                fontSize: '0.66rem',
                                color: 'rgba(255,255,255,0.35)',
                                letterSpacing: '0.18em',
                                marginTop: '1px',
                            }}
                            className="hidden sm:block"
                        >
                            BANK:{' '}
                            <span style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Pricedown, "Share Tech Mono", monospace', fontSize: '0.85rem' }}>
                                {mounted ? <AnimatedCounter target={USER_DATA.bank} /> : USER_DATA.bank}
                            </span>
                        </div>
                    </div>

                    {/* Clock */}
                    <div
                        style={{
                            fontFamily: 'Share Tech Mono, monospace',
                            fontSize: '0.92rem',
                            letterSpacing: '0.08em',
                            color: 'rgba(255, 255, 255, 0.75)',
                            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                            paddingLeft: '18px',
                            minWidth: '68px',
                        }}
                    >
                        {time}
                    </div>

                    {/* Ambience Toggle */}
                    <button
                        onClick={toggleAmbience}
                        style={{
                            background: 'transparent',
                            border: `1px solid ${ambienceMuted ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.3)'
                                }`,
                            color: ambienceMuted ? 'rgba(255,255,255,0.3)' : '#ffffff',
                            padding: '4px 12px',
                            cursor: 'pointer',
                            fontSize: '0.66rem',
                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            transition: 'all 0.18s ease',
                        }}
                    >
                        {ambienceMuted ? 'MUTED' : 'AUDIO'}
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
                    padding: '76px 20px 48px',
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
                        marginBottom: '10px',
                        zIndex: 125,
                        maxWidth: '1220px',
                        width: '100%',
                        background: '#09090c',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                >
                    {MENU_ITEMS.map((item) => {
                        const isActive = activeItem === item.key
                        return (
                            <button
                                key={item.key}
                                onClick={() => handleTabChange(item.key)}
                                style={{
                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                    fontSize: 'clamp(0.82rem, 1.25vw, 1rem)',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    padding: '11px 24px',
                                    background: isActive ? '#ffffff' : 'transparent',
                                    color: isActive ? '#000000' : 'rgba(255,255,255,0.45)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    flex: '1 1 auto',
                                    justifyContent: 'center',
                                }}
                            >
                                <span>{item.label}</span>
                                <span
                                    style={{
                                        fontSize: '0.62em',
                                        opacity: isActive ? 0.45 : 0.25,
                                        background: isActive ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.08)',
                                        padding: '1px 5px',
                                    }}
                                >
                                    {item.shortcut}
                                </span>
                            </button>
                        )
                    })}
                </div>

                {/* Main Content Panel */}
                <div
                    ref={contentRef}
                    style={{
                        width: 'min(96vw, 1220px)',
                        maxHeight: '72vh',
                        background: '#09090c',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '24px 28px',
                        boxShadow: '0 24px 80px rgba(0,0,0,0.95)',
                        overflowY: 'auto',
                        position: 'relative',
                    }}
                >
                    {renderContent()}
                </div>
            </div>

            {/* ═══ BOTTOM FOOTER HUD ═══ */}
            <footer
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '36px',
                    padding: '0 32px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 130,
                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.25em',
                    color: 'rgba(255,255,255,0.3)',
                    textTransform: 'uppercase',
                    background: '#09090c',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <span>[KEYS 1-5: TABS]</span>
                    <span className="hidden sm:inline">[SELECT ITEMS TO INSPECT]</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div
                            style={{
                                width: '5px',
                                height: '5px',
                                background: '#66CC66',
                                borderRadius: '50%',
                            }}
                        />
                        <span style={{ color: '#66CC66', fontWeight: 700 }}>ONLINE</span>
                    </div>
                    <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
                    <span>OM PANDEY // PORTFOLIO</span>
                </div>
            </footer>
        </div>
    )
}
