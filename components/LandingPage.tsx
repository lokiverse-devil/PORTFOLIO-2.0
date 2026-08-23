'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'
import gsap from 'gsap'

interface Project {
    title: string
    category: string
    desc: string
    tags: string[]
    link?: string
}

interface UserData {
    name: string
    tagline: string
    rank: number
    cash: string
    email: string
    github: string
    linkedin: string
    projects: Project[]
    skills: { name: string; level: string; category: string }[]
    education: {
        degree: string
        spec: string
        status: string
    }
}

type MenuItem = 'MAP' | 'PROJECTS' | 'SKILLS' | 'EDUCATION' | 'CONTACT'

const USER_DATA: UserData = {
    name: 'OM PANDEY',
    tagline: 'FULL STACK ARCHITECT & AI ENGINEER',
    rank: 100,
    cash: '$2,450,000',
    email: 'ompandey2341@gmail.com',
    github: 'https://github.com/lokiverse-devil',
    linkedin: 'https://linkedin.com/in/om-pandey-1b3b3b3b3',
    projects: [
        {
            title: 'VibeChat',
            category: 'REALTIME MESSAGING',
            desc: 'High-speed emoji & expressive communication protocol built with modern web architecture.',
            tags: ['REACT', 'NEXT.JS', 'WEBSOCKETS', 'TAILWIND'],
            link: 'https://github.com/lokiverse-devil',
        },
        {
            title: 'HTRACX',
            category: 'ENTERPRISE SYSTEM',
            desc: 'Smart Hostel Management System automating room allocation, billing, and identity verification.',
            tags: ['FULL STACK', 'DATABASE', 'MANAGEMENT', 'CLOUD'],
            link: 'https://github.com/lokiverse-devil',
        },
        {
            title: 'SmartClass X',
            category: 'IOT & AI AUTOMATION',
            desc: 'Intelligent IoT-enabled smart classroom system with automated telemetry, presence detection, and environment controls.',
            tags: ['IOT', 'PYTHON', 'EMBEDDED', 'TELEMETRY'],
            link: 'https://github.com/lokiverse-devil',
        },
        {
            title: 'AIMS',
            category: 'INSTITUTIONAL SUITE',
            desc: 'Academic Infrastructure Management System streamlining asset tracking and operations.',
            tags: ['POSTGRES', 'SYSTEM DESIGN', 'API SUITE'],
            link: 'https://github.com/lokiverse-devil',
        },
    ],
    skills: [
        { name: 'C / C++', level: '90%', category: 'CORE' },
        { name: 'JAVA', level: '88%', category: 'BACKEND' },
        { name: 'SQL / DATABASE', level: '92%', category: 'DATA' },
        { name: 'SUPABASE & POSTGRES', level: '90%', category: 'DATA' },
        { name: 'BUILD USING AI / LLMS', level: '95%', category: 'AI' },
        { name: 'MCP (MODEL CONTEXT PROTOCOL)', level: '92%', category: 'AI' },
        { name: 'SYSTEM ARCHITECTURE', level: '88%', category: 'ENGINEERING' },
        { name: 'PROJECT MANAGEMENT & PITCHING', level: '94%', category: 'LEADERSHIP' },
    ],
    education: {
        degree: 'Diploma in Computer Science Engineering',
        spec: 'Specialization: Software & AI Technologies',
        status: 'ACTIVE // DISTINCTION',
    },
}

const MENU_ITEMS: { key: MenuItem; label: string }[] = [
    { key: 'MAP', label: 'TERRITORY & STATUS' },
    { key: 'PROJECTS', label: 'ACTIVE OPERATIONS' },
    { key: 'SKILLS', label: 'ARSENAL' },
    { key: 'EDUCATION', label: 'INTEL BASE' },
    { key: 'CONTACT', label: 'COMMS' },
]

export default function LandingPage() {
    const bgRef = useRef<HTMLDivElement | null>(null)
    const contentRef = useRef<HTMLDivElement | null>(null)
    const [activeItem, setActiveItem] = useState<MenuItem | null>('MAP')
    const [time, setTime] = useState<string>('')
    const [copied, setCopied] = useState<boolean>(false)
    const ambienceRef = useRef<Howl | null>(null)

    useEffect(() => {
        try {
            ambienceRef.current = new Howl({
                src: ['/sounds/loading_ambience.mp3'],
                loop: true,
                volume: 0.3,
            })
            ambienceRef.current.play()
        } catch (e) {
            console.warn('Audio notice in landing page:', e)
        }

        // Live Clock
        const updateTime = () =>
            setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }))
        updateTime()
        const tInterval = setInterval(updateTime, 1000)

        // Slow cinematic camera drift
        if (bgRef.current) {
            gsap.to(bgRef.current, {
                scale: 1.14,
                x: -25,
                y: 12,
                duration: 40,
                ease: 'sine.inOut',
                repeat: -1,
                yoyo: true,
            })
        }

        return () => {
            clearInterval(tInterval)
            if (bgRef.current) gsap.killTweensOf(bgRef.current)
            if (ambienceRef.current) {
                ambienceRef.current.stop()
            }
        }
    }, [])

    // Animate content panel on tab switch
    useEffect(() => {
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 0.35, ease: 'power2.out' }
            )
        }
    }, [activeItem])

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(USER_DATA.email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const renderContent = () => {
        switch (activeItem) {
            case 'MAP':
                return (
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between border-b border-white/20 pb-3">
                            <div>
                                <h3 className="font-chalet text-[1.5rem] sm:text-[1.8rem] text-white tracking-wider uppercase">
                                    {USER_DATA.name}
                                </h3>
                                <p className="font-chalet-condensed text-[0.85rem] sm:text-[0.95rem] text-[#66CC66] uppercase tracking-widest">
                                    {USER_DATA.tagline}
                                </p>
                            </div>
                            <div className="text-right">
                                <span className="bg-[#66CC66]/20 border border-[#66CC66] text-[#66CC66] px-3 py-1 text-[0.75rem] font-chalet-condensed tracking-widest uppercase">
                                    STATUS: ONLINE
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-black/60 border-l-4 border-[#f5a623] p-4">
                                <p className="font-chalet-condensed text-[0.75rem] text-white/50 tracking-widest uppercase mb-1">
                                    TERRITORY COORDINATES
                                </p>
                                <p className="font-chalet text-[1.1rem] text-white uppercase">
                                    INDIA // REMOTE GLOBAL
                                </p>
                                <p className="font-chalet-condensed text-[0.8rem] text-white/70 uppercase mt-1">
                                    AVAILABLE FOR HIGH-PRIORITY CONTRACTS & FULL-TIME MISSIONS
                                </p>
                            </div>

                            <div className="bg-black/60 border-l-4 border-white p-4">
                                <p className="font-chalet-condensed text-[0.75rem] text-white/50 tracking-widest uppercase mb-1">
                                    OPERATION METRICS
                                </p>
                                <div className="flex flex-col gap-1 text-[0.85rem] font-chalet-condensed text-white/90 uppercase">
                                    <div className="flex justify-between">
                                        <span>REPUTATION RANK:</span>
                                        <span className="text-[#66CC66]">LEVEL 100</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>MISSION SUCCESS RATE:</span>
                                        <span className="text-[#66CC66]">99.8%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>SPECIALTY:</span>
                                        <span>AI & FULL STACK</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black/60 border border-white/15 p-4">
                            <p className="font-chalet-condensed text-[0.75rem] text-white/50 tracking-widest uppercase mb-2">
                                DOSSIER BRIEFING
                            </p>
                            <p className="font-chalet-condensed text-[0.95rem] text-white/85 leading-relaxed uppercase tracking-wider">
                                Passionate software developer and technical builder experienced in building scalable applications, AI agent integration via MCP, systems architecture, and intuitive modern user interfaces. Ready to deploy solutions from concept to production.
                            </p>
                        </div>
                    </div>
                )

            case 'PROJECTS':
                return (
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-center border-b border-white/20 pb-2 mb-2">
                            <p className="font-chalet-condensed text-[0.8rem] text-white/60 tracking-[0.25em] uppercase">
                                ACTIVE_OPERATIONS // 04 COMPLETED
                            </p>
                            <span className="font-chalet-condensed text-[0.75rem] text-[#66CC66] uppercase tracking-widest">
                                CLICK TO OPEN DOSSIER
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {USER_DATA.projects.map((p, i) => (
                                <a
                                    key={i}
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-black/60 border-l-4 border-white p-4 transition-all duration-300 hover:bg-white hover:text-black hover:border-l-4 hover:border-[#8a0000] hover:scale-[1.02] group cursor-pointer block text-decoration-none"
                                >
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-chalet text-[1.15rem] text-white group-hover:text-black uppercase tracking-wider">
                                            {p.title}
                                        </h4>
                                        <span className="font-chalet-condensed text-[0.65rem] text-[#66CC66] group-hover:text-black uppercase font-bold tracking-wider">
                                            {p.category}
                                        </span>
                                    </div>
                                    <p className="font-chalet-condensed text-[0.8rem] text-white/70 group-hover:text-black/80 uppercase mb-3 line-clamp-2">
                                        {p.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-1">
                                        {p.tags.map((t) => (
                                            <span
                                                key={t}
                                                className="bg-white/10 group-hover:bg-black/10 text-white group-hover:text-black text-[0.65rem] font-chalet-condensed px-2 py-0.5 uppercase tracking-wider"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                )

            case 'SKILLS':
                return (
                    <div className="flex flex-col gap-3">
                        <div className="border-b border-white/20 pb-2 mb-2">
                            <p className="font-chalet-condensed text-[0.8rem] text-white/60 tracking-[0.25em] uppercase">
                                CLASSIFIED ARSENAL // PROFICIENCY METRICS
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {USER_DATA.skills.map((s, i) => (
                                <div
                                    key={i}
                                    className="bg-black/60 border-l-4 border-white p-3 flex flex-col gap-1.5 transition-all hover:bg-white/10"
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="font-chalet text-[0.95rem] text-white uppercase tracking-wider">
                                            {s.name}
                                        </span>
                                        <span className="font-chalet-condensed text-[0.75rem] text-[#66CC66] uppercase font-bold">
                                            {s.level}
                                        </span>
                                    </div>
                                    <div className="w-full bg-white/10 h-1.5 overflow-hidden">
                                        <div
                                            className="bg-[#66CC66] h-full"
                                            style={{ width: s.level }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )

            case 'EDUCATION':
                return (
                    <div className="flex flex-col gap-4">
                        <div className="border-b border-white/20 pb-2">
                            <p className="font-chalet-condensed text-[0.8rem] text-white/60 tracking-[0.25em] uppercase">
                                INTEL FOUNDATION // ACADEMICS
                            </p>
                        </div>

                        <div className="bg-black/60 border-l-4 border-[#66CC66] p-5 flex flex-col gap-3">
                            <span className="font-chalet-condensed text-[0.75rem] text-[#66CC66] uppercase tracking-widest">
                                {USER_DATA.education.status}
                            </span>
                            <h4 className="font-chalet text-[1.4rem] text-white uppercase leading-tight">
                                {USER_DATA.education.degree}
                            </h4>
                            <p className="font-chalet-condensed text-[0.95rem] text-white/80 uppercase tracking-widest">
                                {USER_DATA.education.spec}
                            </p>
                            <div className="border-t border-white/10 pt-3 text-[0.8rem] font-chalet-condensed text-white/60 uppercase">
                                Core Modules: Data Structures, Algorithms, Operating Systems, Database Management Systems, Object Oriented Programming, Software Engineering.
                            </div>
                        </div>
                    </div>
                )

            case 'CONTACT':
                return (
                    <div className="flex flex-col gap-4">
                        <div className="border-b border-white/20 pb-2">
                            <p className="font-chalet-condensed text-[0.8rem] text-white/60 tracking-[0.25em] uppercase">
                                ENCRYPTED COMMS // DIRECT CHANNELS
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div
                                onClick={handleCopyEmail}
                                className="bg-black/60 border-l-4 border-white p-4 cursor-pointer transition-all hover:bg-white hover:text-black group"
                            >
                                <p className="font-chalet-condensed text-[0.7rem] text-white/50 group-hover:text-black/60 uppercase mb-1">
                                    DIRECT EMAIL
                                </p>
                                <p className="font-chalet text-[0.85rem] text-white group-hover:text-black uppercase break-all">
                                    {USER_DATA.email}
                                </p>
                                <p className="font-chalet-condensed text-[0.75rem] text-[#66CC66] group-hover:text-black uppercase mt-2 font-bold">
                                    {copied ? '✓ COPIED TO CLIPBOARD' : '[ CLICK TO COPY ]'}
                                </p>
                            </div>

                            <a
                                href={USER_DATA.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black/60 border-l-4 border-white p-4 cursor-pointer transition-all hover:bg-white hover:text-black group block text-decoration-none"
                            >
                                <p className="font-chalet-condensed text-[0.7rem] text-white/50 group-hover:text-black/60 uppercase mb-1">
                                    GITHUB DOSSIER
                                </p>
                                <p className="font-chalet text-[0.95rem] text-white group-hover:text-black uppercase">
                                    github.com/lokiverse-devil
                                </p>
                                <p className="font-chalet-condensed text-[0.75rem] text-white/70 group-hover:text-black uppercase mt-2">
                                    [ OPEN REPOSITORIES ↗ ]
                                </p>
                            </a>

                            <a
                                href={USER_DATA.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-black/60 border-l-4 border-white p-4 cursor-pointer transition-all hover:bg-white hover:text-black group block text-decoration-none"
                            >
                                <p className="font-chalet-condensed text-[0.7rem] text-white/50 group-hover:text-black/60 uppercase mb-1">
                                    LINKEDIN NETWORK
                                </p>
                                <p className="font-chalet text-[0.95rem] text-white group-hover:text-black uppercase">
                                    Om Pandey
                                </p>
                                <p className="font-chalet-condensed text-[0.75rem] text-white/70 group-hover:text-black uppercase mt-2">
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
                background: '#000',
                overflow: 'hidden',
                zIndex: 100,
                userSelect: 'none',
            }}
        >
            {/* Background Image with Cinematic Drift */}
            <div
                ref={bgRef}
                style={{
                    position: 'absolute',
                    inset: '-6%',
                    transformOrigin: 'center center',
                    filter: 'contrast(1.12) brightness(0.85)',
                }}
            >
                <img
                    src="/images/landing_city.jpg"
                    alt="Vinewood Hills Sunset"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            <div className="heavy-vignette" />
            <div className="noise-overlay" />
            <div className="crt-scanlines" />

            {/* TOP AAA GAME HEADER HUD */}
            <header
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    padding: '24px 36px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 130,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.85), transparent)',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span
                        style={{
                            display: 'inline-block',
                            width: '10px',
                            height: '100%',
                            background: '#66CC66',
                            boxShadow: '0 0 10px #66CC66',
                        }}
                    />
                    <div>
                        <div
                            style={{
                                fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                                fontSize: '1.25rem',
                                letterSpacing: '0.12em',
                                color: '#ffffff',
                            }}
                        >
                            {USER_DATA.name}
                        </div>
                        <div
                            style={{
                                fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                fontSize: '0.75rem',
                                letterSpacing: '0.2em',
                                color: 'rgba(255,255,255,0.6)',
                            }}
                        >
                            SAN ANDREAS // PROTOCOL 2.0
                        </div>
                    </div>
                </div>

                {/* Right Top Status: Cash & Stars & Clock */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    {/* Wanted Stars */}
                    <div style={{ display: 'flex', gap: '4px' }}>
                        {[0, 1, 2, 3, 4].map((i) => (
                            <svg key={i} width="18" height="18" viewBox="0 0 72 72">
                                <polygon
                                    points="36,4 44,28 70,28 49,44 57,68 36,52 15,68 23,44 2,28 28,28"
                                    fill="#f5a623"
                                    style={{ filter: 'drop-shadow(0 0 4px rgba(245,166,35,0.8))' }}
                                />
                            </svg>
                        ))}
                    </div>

                    <div
                        style={{
                            fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            fontSize: '1.1rem',
                            color: '#66CC66',
                            letterSpacing: '0.08em',
                            textShadow: '0 0 8px rgba(102,204,102,0.6)',
                        }}
                    >
                        {USER_DATA.cash}
                    </div>

                    <div
                        style={{
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: '0.9rem',
                            letterSpacing: '0.15em',
                            color: 'rgba(255,255,255,0.8)',
                        }}
                    >
                        {time}
                    </div>
                </div>
            </header>

            {/* MAIN INTERACTIVE DASHBOARD */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '80px 24px 40px',
                    zIndex: 120,
                }}
            >
                {/* Horizontal Pause Menu Tabs */}
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '8px',
                        marginBottom: '20px',
                        zIndex: 125,
                    }}
                >
                    {MENU_ITEMS.map((item) => {
                        const isActive = activeItem === item.key
                        return (
                            <button
                                key={item.key}
                                onClick={() => setActiveItem(item.key)}
                                style={{
                                    fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                                    fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)',
                                    letterSpacing: '0.15em',
                                    textTransform: 'uppercase',
                                    padding: '10px 22px',
                                    background: isActive ? '#ffffff' : 'rgba(0, 0, 0, 0.75)',
                                    color: isActive ? '#000000' : 'rgba(255, 255, 255, 0.75)',
                                    border: 'none',
                                    borderTop: isActive ? '3px solid #8a0000' : '1px solid rgba(255, 255, 255, 0.2)',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
                                    boxShadow: isActive ? '0 0 25px rgba(255, 255, 255, 0.8)' : 'none',
                                }}
                                onMouseEnter={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.color = '#ffffff'
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)'
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (!isActive) {
                                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                                    }
                                }}
                            >
                                {item.label}
                            </button>
                        )
                    })}
                </div>

                {/* Frosted Glass Dynamic Content Panel */}
                <div
                    ref={contentRef}
                    className="landing-content-panel"
                    style={{
                        background: 'rgba(10, 10, 10, 0.82)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderTop: '3px solid rgba(255, 255, 255, 0.6)',
                        padding: '28px 36px',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.95), 0 0 30px rgba(0,0,0,0.5)',
                    }}
                >
                    {renderContent()}
                </div>
            </div>

            {/* Bottom GTA Footer Bar */}
            <footer
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '12px 36px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 130,
                    fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.5)',
                    textTransform: 'uppercase',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                }}
            >
                <div>[ESC / CLICK TABS TO NAVIGATE]</div>
                <div>DEVELOPED BY OM PANDEY // LOS SANTOS EDITION</div>
            </footer>
        </div>
    )
}
