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
    arsenal: { name: string; proficiency: string; category: string }[]
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
            status: 'COMPLETED // 100%',
        },
        {
            title: 'HTRACX',
            category: 'ENTERPRISE SYSTEM',
            desc: 'Smart Hostel Management System automating room allocation, billing, analytics, and identity verification.',
            tags: ['FULL STACK', 'DATABASE', 'MANAGEMENT', 'POSTGRES'],
            link: 'https://github.com/lokiverse-devil',
            status: 'COMPLETED // 100%',
        },
        {
            title: 'SmartClass X',
            category: 'IOT & AUTOMATION',
            desc: 'Intelligent IoT-enabled smart classroom system with automated telemetry, presence detection, and environment controls.',
            tags: ['IOT', 'PYTHON', 'EMBEDDED', 'TELEMETRY'],
            link: 'https://github.com/lokiverse-devil',
            status: 'COMPLETED // 100%',
        },
        {
            title: 'AIMS',
            category: 'INSTITUTIONAL SUITE',
            desc: 'Academic Infrastructure Management System streamlining asset tracking, operations, and departmental workflows.',
            tags: ['POSTGRES', 'SYSTEM DESIGN', 'API SUITE', 'SUPABASE'],
            link: 'https://github.com/lokiverse-devil',
            status: 'COMPLETED // 100%',
        },
    ],
    arsenal: [
        { name: 'C / C++', proficiency: '94%', category: 'CORE' },
        { name: 'JAVA & OOP', proficiency: '90%', category: 'CORE' },
        { name: 'REACT & NEXT.JS', proficiency: '95%', category: 'FRONTEND' },
        { name: 'TYPESCRIPT / JAVASCRIPT', proficiency: '92%', category: 'FRONTEND' },
        { name: 'SQL & POSTGRESQL', proficiency: '92%', category: 'DATABASE' },
        { name: 'SUPABASE & BACKEND', proficiency: '90%', category: 'DATABASE' },
        { name: 'MODEL CONTEXT PROTOCOL (MCP)', proficiency: '95%', category: 'AI TECH' },
        { name: 'GEMINI AI INTEGRATION', proficiency: '94%', category: 'AI TECH' },
        { name: 'IOT & EMBEDDED TELEMETRY', proficiency: '88%', category: 'HARDWARE' },
        { name: 'SYSTEM ARCHITECTURE', proficiency: '90%', category: 'ENGINEERING' },
        { name: 'TEAM LEAD & MANAGEMENT', proficiency: '92%', category: 'LEADERSHIP' },
        { name: 'PROJECT PITCHING & DEMOS', proficiency: '94%', category: 'LEADERSHIP' },
    ],
}

const MENU_ITEMS: { key: MenuItem; label: string; shortcut: string }[] = [
    { key: 'MAP', label: 'TERRITORY // STUDIES', shortcut: '1' },
    { key: 'CHARACTER', label: 'CHARACTER // STATS', shortcut: '2' },
    { key: 'PROJECTS', label: 'OPERATIONS // PROJECTS', shortcut: '3' },
    { key: 'ARSENAL', label: 'ARSENAL // SKILLS', shortcut: '4' },
    { key: 'CONTACT', label: 'COMMS // CONTACT', shortcut: '5' },
]

export default function LandingPage() {
    const contentRef = useRef<HTMLDivElement | null>(null)
    const [activeItem, setActiveItem] = useState<MenuItem>('MAP')
    const [time, setTime] = useState<string>('')
    const [copied, setCopied] = useState<boolean>(false)
    const [ambienceMuted, setAmbienceMuted] = useState<boolean>(false)
    const ambienceRef = useRef<Howl | null>(null)

    useEffect(() => {
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

        // Live Clock
        const updateTime = () =>
            setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }))
        updateTime()
        const tInterval = setInterval(updateTime, 1000)

        // Keyboard Shortcut Handler for 1-5 keys
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

    // Animate content panel on tab switch
    useEffect(() => {
        if (contentRef.current) {
            gsap.fromTo(
                contentRef.current,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.24, ease: 'power2.out' }
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
        setTimeout(() => setCopied(false), 2000)
    }

    const renderContent = () => {
        switch (activeItem) {
            case 'MAP':
                return <MapSection />

            case 'CHARACTER':
                return <CharacterSection />

            case 'PROJECTS':
                return (
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex justify-between items-center border-b border-white/20 pb-3">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 bg-[#f5a623] inline-block shadow-[0_0_8px_#f5a623]" />
                                    <h3 className="font-chalet text-[1.3rem] sm:text-[1.6rem] text-white tracking-wider uppercase">
                                        ACTIVE OPERATIONS // MISSIONS DOSSIER
                                    </h3>
                                </div>
                                <p className="font-chalet-condensed text-[0.8rem] sm:text-[0.9rem] text-white/70 uppercase tracking-widest mt-0.5">
                                    04 MAJOR OPERATIONS // CLICK ANY CARD TO LAUNCH REPOSITORY
                                </p>
                            </div>
                            <span className="font-chalet-condensed text-[0.75rem] text-[#66CC66] uppercase tracking-widest border border-[#66CC66]/40 bg-[#66CC66]/10 px-2.5 py-1 font-bold">
                                ALL MISSIONS PASSED
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {USER_DATA.projects.map((p, i) => (
                                <a
                                    key={i}
                                    href={p.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#0e0e12] border-l-4 border-white p-4.5 transition-all duration-200 hover:bg-white hover:text-black hover:border-l-4 hover:border-[#f5a623] hover:scale-[1.01] group cursor-pointer block text-decoration-none border-y border-r border-white/20"
                                >
                                    <div className="flex justify-between items-start mb-1.5">
                                        <div>
                                            <span className="font-chalet-condensed text-[0.7rem] text-white/60 group-hover:text-black/60 uppercase tracking-widest">
                                                OPERATION 0{i + 1}
                                            </span>
                                            <h4 className="font-chalet text-[1.25rem] text-white group-hover:text-black uppercase tracking-wider">
                                                {p.title}
                                            </h4>
                                        </div>
                                        <span className="font-chalet-condensed text-[0.72rem] text-[#66CC66] group-hover:text-black uppercase font-bold tracking-wider bg-white/5 group-hover:bg-black/5 px-2 py-0.5">
                                            {p.category}
                                        </span>
                                    </div>
                                    <p className="font-chalet-condensed text-[0.88rem] text-white/90 group-hover:text-black/85 uppercase mb-3 line-clamp-2 leading-relaxed">
                                        {p.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {p.tags.map((t) => (
                                            <span
                                                key={t}
                                                className="bg-white/10 group-hover:bg-black/10 text-white group-hover:text-black text-[0.7rem] font-chalet-condensed px-2 py-0.5 uppercase tracking-wider border border-white/20"
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

            case 'ARSENAL':
                return (
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex justify-between items-center border-b border-white/20 pb-3">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 bg-[#66CC66] inline-block shadow-[0_0_8px_#66CC66]" />
                                    <h3 className="font-chalet text-[1.3rem] sm:text-[1.6rem] text-white tracking-wider uppercase">
                                        CLASSIFIED ARSENAL // TECH CAPABILITIES
                                    </h3>
                                </div>
                                <p className="font-chalet-condensed text-[0.8rem] sm:text-[0.9rem] text-white/70 uppercase tracking-widest mt-0.5">
                                    CORE LANGUAGES, FRAMEWORKS, AI & SYSTEM ENGINEERING
                                </p>
                            </div>
                            <span className="font-chalet-condensed text-[0.75rem] text-white/80 uppercase tracking-widest">
                                12 LOADOUT ITEMS
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {USER_DATA.arsenal.map((item, i) => (
                                <div
                                    key={i}
                                    className="bg-[#0e0e12] border-l-4 border-white border-y border-r border-white/20 p-3 flex flex-col gap-2 transition-all hover:border-[#66CC66]"
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 bg-[#66CC66] inline-block" />
                                            <span className="font-chalet text-[0.95rem] text-white uppercase tracking-wider">
                                                {item.name}
                                            </span>
                                        </div>
                                        <span className="font-chalet-condensed text-[0.78rem] text-[#66CC66] uppercase font-bold">
                                            {item.proficiency}
                                        </span>
                                    </div>
                                    <div className="w-full bg-white/10 h-1.5 overflow-hidden">
                                        <div
                                            className="bg-[#66CC66] h-full"
                                            style={{ width: item.proficiency }}
                                        />
                                    </div>
                                    <div className="text-[0.7rem] font-chalet-condensed text-white/60 uppercase tracking-widest">
                                        CATEGORY: {item.category}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )

            case 'CONTACT':
                return (
                    <div className="flex flex-col gap-4 w-full">
                        <div className="border-b border-white/20 pb-3">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 bg-[#f5a623] inline-block shadow-[0_0_8px_#f5a623]" />
                                <h3 className="font-chalet text-[1.3rem] sm:text-[1.6rem] text-white tracking-wider uppercase">
                                    ENCRYPTED COMMS // DIRECT DISPATCH
                                </h3>
                            </div>
                            <p className="font-chalet-condensed text-[0.8rem] sm:text-[0.9rem] text-white/70 uppercase tracking-widest mt-0.5">
                                TRANSMIT HIGH-PRIORITY CONTRACTS & FULL-TIME PROPOSALS
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                            <div
                                onClick={handleCopyEmail}
                                className="bg-[#0e0e12] border-l-4 border-white border-y border-r border-white/20 p-5 cursor-pointer transition-all hover:bg-white hover:text-black group"
                            >
                                <p className="font-chalet-condensed text-[0.72rem] text-white/60 group-hover:text-black/60 uppercase tracking-widest mb-1">
                                    DIRECT EMAIL // DISPATCH
                                </p>
                                <p className="font-chalet text-[0.95rem] text-white group-hover:text-black uppercase break-all">
                                    {USER_DATA.email}
                                </p>
                                <p className="font-chalet-condensed text-[0.78rem] text-[#66CC66] group-hover:text-black uppercase mt-3 font-bold">
                                    {copied ? 'COPIED TO CLIPBOARD' : '[ CLICK TO COPY ]'}
                                </p>
                            </div>

                            <a
                                href={USER_DATA.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#0e0e12] border-l-4 border-white border-y border-r border-white/20 p-5 cursor-pointer transition-all hover:bg-white hover:text-black group block text-decoration-none"
                            >
                                <p className="font-chalet-condensed text-[0.72rem] text-white/60 group-hover:text-black/60 uppercase tracking-widest mb-1">
                                    GITHUB REPOSITORIES
                                </p>
                                <p className="font-chalet text-[1.05rem] text-white group-hover:text-black uppercase">
                                    lokiverse-devil
                                </p>
                                <p className="font-chalet-condensed text-[0.78rem] text-white/70 group-hover:text-black uppercase mt-3 font-bold">
                                    [ OPEN DOSSIER ↗ ]
                                </p>
                            </a>

                            <a
                                href={USER_DATA.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#0e0e12] border-l-4 border-white border-y border-r border-white/20 p-5 cursor-pointer transition-all hover:bg-white hover:text-black group block text-decoration-none"
                            >
                                <p className="font-chalet-condensed text-[0.72rem] text-white/60 group-hover:text-black/60 uppercase tracking-widest mb-1">
                                    LINKEDIN NETWORK
                                </p>
                                <p className="font-chalet text-[1.05rem] text-white group-hover:text-black uppercase">
                                    Om Pandey
                                </p>
                                <p className="font-chalet-condensed text-[0.78rem] text-white/70 group-hover:text-black uppercase mt-3 font-bold">
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
                background: 'radial-gradient(circle at 50% 0%, #14141c 0%, #08080a 60%, #040406 100%)',
                overflow: 'hidden',
                zIndex: 100,
                userSelect: 'none',
            }}
        >
            {/* Subtle Ambient Radial Lighting for Clean Luxury Atmosphere */}
            <div
                style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '20%',
                    width: '60%',
                    height: '50%',
                    background: 'radial-gradient(ellipse at center, rgba(245, 166, 35, 0.04) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <div className="heavy-vignette" />

            {/* TOP AAA GAME HUD */}
            <header
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    padding: '20px 32px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 130,
                    background: '#0a0a0e',
                    borderBottom: '1px solid rgba(255,255,255,0.12)',
                }}
            >
                {/* Left Side: Protagonist Profile */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div
                        style={{
                            width: '40px',
                            height: '40px',
                            background: '#121218',
                            border: '2px solid #66CC66',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            fontSize: '1.2rem',
                            color: '#66CC66',
                            boxShadow: '0 0 12px rgba(102,204,102,0.4)',
                        }}
                    >
                        100
                    </div>

                    <div>
                        <div
                            style={{
                                fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                                fontSize: '1.3rem',
                                letterSpacing: '0.12em',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            {USER_DATA.name}
                            <span
                                style={{
                                    fontSize: '0.7rem',
                                    background: '#66CC66',
                                    color: '#000',
                                    padding: '1px 6px',
                                    fontWeight: 'bold',
                                }}
                            >
                                PRO
                            </span>
                        </div>
                        <div
                            style={{
                                fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                fontSize: '0.78rem',
                                letterSpacing: '0.22em',
                                color: 'rgba(255,255,255,0.7)',
                            }}
                        >
                            {USER_DATA.tagline}
                        </div>
                    </div>
                </div>

                {/* Right Side: Cash, Bank, Wanted Stars, Time & Ambience Button */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    {/* 5 Glowing Gold Wanted Stars */}
                    <div style={{ display: 'flex', gap: '3px' }} className="hidden sm:flex">
                        {[0, 1, 2, 3, 4].map((i) => (
                            <svg key={i} width="16" height="16" viewBox="0 0 72 72">
                                <polygon
                                    points="36,4 44,28 70,28 49,44 57,68 36,52 15,68 23,44 2,28 28,28"
                                    fill="#f5a623"
                                    style={{ filter: 'drop-shadow(0 0 4px rgba(245,166,35,0.8))' }}
                                />
                            </svg>
                        ))}
                    </div>

                    {/* Cash */}
                    <div style={{ textAlign: 'right' }}>
                        <div
                            style={{
                                fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                                fontSize: '1.25rem',
                                color: '#66CC66',
                                letterSpacing: '0.08em',
                                textShadow: '0 0 10px rgba(102,204,102,0.6)',
                            }}
                        >
                            {USER_DATA.cash}
                        </div>
                        <div
                            style={{
                                fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                fontSize: '0.72rem',
                                color: 'rgba(255,255,255,0.55)',
                                letterSpacing: '0.15em',
                            }}
                            className="hidden sm:block"
                        >
                            BANK: {USER_DATA.bank}
                        </div>
                    </div>

                    {/* Clock */}
                    <div
                        style={{
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: '0.95rem',
                            letterSpacing: '0.15em',
                            color: 'rgba(255,255,255,0.9)',
                            borderLeft: '1px solid rgba(255,255,255,0.2)',
                            paddingLeft: '14px',
                        }}
                    >
                        {time}
                    </div>

                    {/* Audio Ambience Toggle */}
                    <button
                        onClick={toggleAmbience}
                        title={ambienceMuted ? 'Unmute Audio' : 'Mute Audio'}
                        style={{
                            background: '#15151a',
                            border: '1px solid rgba(255,255,255,0.3)',
                            color: ambienceMuted ? 'rgba(255,255,255,0.4)' : '#66CC66',
                            padding: '6px 10px',
                            cursor: 'pointer',
                            fontSize: '0.72rem',
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                        }}
                    >
                        {ambienceMuted ? 'UNMUTE' : 'MUTE'}
                    </button>
                </div>
            </header>

            {/* MAIN DASHBOARD CONTAINER */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '84px 24px 44px',
                    zIndex: 120,
                }}
            >
                {/* Horizontal GTA V Pause Menu Navigation Tabs */}
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '6px',
                        marginBottom: '16px',
                        zIndex: 125,
                        maxWidth: '1200px',
                        width: '100%',
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
                                    fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)',
                                    letterSpacing: '0.14em',
                                    textTransform: 'uppercase',
                                    padding: '10px 18px',
                                    background: isActive ? '#ffffff' : '#0c0c10',
                                    color: isActive ? '#000000' : 'rgba(255, 255, 255, 0.8)',
                                    border: 'none',
                                    borderTop: isActive ? '3px solid #f5a623' : '1px solid rgba(255, 255, 255, 0.25)',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s ease',
                                    boxShadow: isActive ? '0 0 20px rgba(255, 255, 255, 0.7)' : 'none',
                                }}
                            >
                                <span style={{ opacity: 0.5, marginRight: '6px', fontSize: '0.8em' }}>
                                    [{item.shortcut}]
                                </span>
                                {item.label}
                            </button>
                        )
                    })}
                </div>

                {/* 4K Solid Clean Dynamic Content Panel (No Blur) */}
                <div
                    ref={contentRef}
                    className="landing-content-panel"
                    style={{
                        width: 'min(94vw, 1200px)',
                        maxHeight: '74vh',
                        background: '#0a0a0d',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        borderTop: '3px solid rgba(255, 255, 255, 0.8)',
                        padding: '24px 30px',
                        boxShadow: '0 25px 60px rgba(0,0,0,0.98)',
                        overflowY: 'auto',
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
                    padding: '10px 32px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 130,
                    fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                    fontSize: '0.75rem',
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.6)',
                    textTransform: 'uppercase',
                    background: '#0a0a0e',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                }}
            >
                <div className="flex items-center gap-4">
                    <span>[KEYS 1-5: SELECT TABS]</span>
                    <span className="hidden sm:inline">[CLICK ATTRIBUTES FOR INTEL]</span>
                </div>
                <div>OM PANDEY // PORTFOLIO 2.0</div>
            </footer>
        </div>
    )
}
