'use client'
import { useEffect, useRef, useState } from 'react'
import { Howl } from 'howler'
import gsap from 'gsap'

const USER_DATA = {
    name: 'OM PANDEY',
    email: 'ompandey2341@gmail.com',
    github: 'github.com/lokiverse-devil',
    linkedin: 'linkedin.com/in/om-pandey-1b3b3b3b3',
    projects: [
        { title: 'VibeChat', desc: 'Emoji Only Messenger' },
        { title: 'HTRACX', desc: 'Smart Hostel Management System' },
        { title: 'SmartClass X', desc: 'An IoT enabled smart classroom' },
        { title: 'AIMS', desc: 'Academic Infrastructure Management System' }
    ],
    skills: [
        'C', 'JAVA', 'SQL', 'SUPABASE', 'BUILD USING AI', 'MCP', 'PROJECT MANAGEMENT', 'PRESENTATION AND PITCHING'
    ],
    education: {
        degree: 'Diploma in Computer Science Engineering',
        spec: 'Specialization: Software & AI Technologies'
    }
}

const MENU_ITEMS = ['MAP', 'PROJECTS', 'SKILLS', 'EDUCATION', 'CONTACT']

export default function LandingPage() {
    const bgRef = useRef(null)
    const [activeItem, setActiveItem] = useState(null)
    const [time, setTime] = useState('')

    useEffect(() => {
        // Audio Playback
        const ambiance = new Howl({
            src: ['/sounds/loading_ambience.mp3'],
            loop: true,
            volume: 0.4
        })
        ambiance.play()

        // HUD Time
        const updateTime = () => setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }))
        updateTime()
        const tInterval = setInterval(updateTime, 60000)

        // Background Slow Zoom & Drift
        gsap.to(bgRef.current, {
            scale: 1.15,
            x: -20,
            y: 10,
            duration: 40,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
        })

        return () => {
            clearInterval(tInterval)
            ambiance.stop()
        }
    }, [])

    const renderContent = () => {
        switch (activeItem) {
            case 'PROJECTS':
                return (
                    <div className="flex flex-col gap-4 text-right items-end">
                        <p className="font-chalet-condensed text-[0.7rem] text-white tracking-[0.2em] mb-2 uppercase">ACTIVE_OPERATIONS</p>
                        {USER_DATA.projects.map((p, i) => (
                            <div key={i} className="bg-black/70 p-4 border-r-4 border-white w-72 transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 group">
                                <p className="font-chalet-condensed text-[1rem] text-white group-hover:text-black uppercase tracking-wider">{p.title}</p>
                                <p className="font-chalet-condensed text-[0.75rem] text-white/60 group-hover:text-black/80 uppercase">{p.desc}</p>
                            </div>
                        ))}
                    </div>
                )
            case 'SKILLS':
                return (
                    <div className="flex flex-col gap-2 text-right items-end">
                        <p className="font-chalet-condensed text-[0.7rem] text-white tracking-[0.2em] mb-4 uppercase">TECHNICAL_ARSENAL</p>
                        {USER_DATA.skills.map((s, i) => (
                            <div key={i} className="bg-black/70 px-4 py-2 border-r-4 border-white w-56">
                                <p className="font-chalet-condensed text-[1.1rem] text-white uppercase tracking-widest">{s}</p>
                            </div>
                        ))}
                    </div>
                )
            case 'EDUCATION':
                return (
                    <div className="bg-black/70 p-6 border-r-4 border-white text-right max-w-sm">
                        <p className="font-chalet-condensed text-[0.7rem] text-white tracking-[0.2em] mb-4 uppercase">INTEL_FOUNDATION</p>
                        <p className="font-chalet text-[1.4rem] text-white uppercase leading-tight mb-2">{USER_DATA.education.degree}</p>
                        <p className="font-chalet-condensed text-[0.9rem] text-white/70 uppercase tracking-widest">{USER_DATA.education.spec}</p>
                    </div>
                )
            case 'CONTACT':
                return (
                    <div className="flex flex-col gap-3 text-right items-end">
                        <p className="font-chalet-condensed text-[0.7rem] text-white tracking-[0.2em] mb-4 uppercase">COMM_CHANNELS</p>
                        <div className="bg-black/70 p-4 border-r-4 border-white w-80">
                            <p className="font-chalet-condensed text-[0.65rem] text-white/50 uppercase mb-1">EMAIL</p>
                            <p className="font-chalet-condensed text-[0.9rem] text-white uppercase">{USER_DATA.email}</p>
                        </div>
                        <div className="bg-black/70 p-4 border-r-4 border-white w-80">
                            <p className="font-chalet-condensed text-[0.65rem] text-white/50 uppercase mb-1">GITHUB</p>
                            <p className="font-chalet-condensed text-[0.9rem] text-white uppercase">{USER_DATA.github}</p>
                        </div>
                        <div className="bg-black/70 p-4 border-r-4 border-white w-80">
                            <p className="font-chalet-condensed text-[0.65rem] text-white/50 uppercase mb-1">LINKEDIN</p>
                            <p className="font-chalet-condensed text-[0.9rem] text-white uppercase">{USER_DATA.linkedin}</p>
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
            }}
        >
            <div
                ref={bgRef}
                style={{
                    position: 'absolute',
                    inset: '-5%',
                    transformOrigin: 'center center',
                    filter: 'contrast(1.1) brightness(0.8)'
                }}
            >
                <img
                    src="/images/landing_city.jpg"
                    alt=""
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            <div className="heavy-vignette" />
            <div className="noise-overlay" />

            {/* HUD - Top Left */}
            <div className="hud-jitter" style={{ position: 'absolute', top: 40, left: 40, zIndex: 110 }}>
                <p style={{ fontFamily: 'ChaletComprime1960', fontSize: '0.8rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)' }}>
                    TECH STATE / {time}
                </p>
            </div>

            {/* Main Title - Impactful */}
            {!activeItem && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 110, textAlign: 'center' }}>
                    <h1 style={{ fontFamily: 'ChaletLondon1960', fontSize: 'clamp(4rem, 8vw, 7rem)', letterSpacing: '0.04em', lineHeight: 0.9, color: '#fff', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
                        GET THE<br />WORK DONE
                    </h1>
                </div>
            )}

            {/* Left Menu - Inertia Shift */}
            <nav style={{ position: 'absolute', left: 80, bottom: 80, zIndex: 120, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {MENU_ITEMS.map((item) => (
                    <span
                        key={item}
                        className="landing-menu-item"
                        style={{
                            color: activeItem && activeItem !== item ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.8)',
                            transform: activeItem === item ? 'translateX(12px)' : 'translateX(0)',
                            transition: 'transform 220ms cubic-bezier(0.19, 1, 0.22, 1), color 220ms ease',
                            fontFamily: 'ChaletComprime1960',
                            fontSize: '1.8rem',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={() => { }}
                        onClick={() => setActiveItem(item)}
                    >
                        {item}
                    </span>
                ))}
            </nav>

            {/* Dynamic Data Panel - Centered & Impactful */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 125,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                pointerEvents: 'none',
                opacity: activeItem ? 1 : 0,
                transition: 'opacity 300ms ease'
            }}>
                <div style={{
                    width: '60%',
                    maxWidth: '1000px',
                    pointerEvents: 'auto'
                }}>
                    {activeItem && renderContent()}
                </div>
            </div>
        </div>
    )
}
