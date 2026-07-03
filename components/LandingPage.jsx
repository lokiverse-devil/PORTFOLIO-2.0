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
        const ambience = new Howl({
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

        const handleKeyDown = (e) => {
            if (e.key === 'Escape' || e.key === 'Backspace') {
                setActiveItem(null)
            }
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            clearInterval(tInterval)
            window.removeEventListener('keydown', handleKeyDown)
            ambiance.stop()
        }
    }, [])

    const BackButton = () => (
        <div 
            className="bg-red-800/80 hover:bg-white hover:text-black px-4 py-2 border-r-4 border-white w-full max-w-[160px] cursor-pointer mt-4 transition-all md:hidden text-center"
            onClick={() => setActiveItem(null)}
        >
            <p className="font-chalet-condensed text-[0.8rem] text-white hover:text-black uppercase tracking-widest">[ BACK ]</p>
        </div>
    )

    const renderContent = () => {
        switch (activeItem) {
            case 'PROJECTS':
                return (
                    <div className="flex flex-col gap-4 text-right items-end max-w-full">
                        <p className="font-chalet-condensed text-[0.7rem] text-white tracking-[0.2em] mb-2 uppercase">ACTIVE_OPERATIONS</p>
                        {USER_DATA.projects.map((p, i) => (
                            <div key={i} className="bg-black/70 p-4 border-r-4 border-white w-full max-w-[280px] sm:max-w-[320px] transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 group">
                                <p className="font-chalet-condensed text-[1rem] text-white group-hover:text-black uppercase tracking-wider">{p.title}</p>
                                <p className="font-chalet-condensed text-[0.75rem] text-white/60 group-hover:text-black/80 uppercase">{p.desc}</p>
                            </div>
                        ))}
                        <BackButton />
                    </div>
                )
            case 'SKILLS':
                return (
                    <div className="flex flex-col gap-2 text-right items-end max-w-full">
                        <p className="font-chalet-condensed text-[0.7rem] text-white tracking-[0.2em] mb-4 uppercase">TECHNICAL_ARSENAL</p>
                        {USER_DATA.skills.map((s, i) => (
                            <div key={i} className="bg-black/70 px-4 py-2 border-r-4 border-white w-full max-w-[220px] sm:max-w-[240px]">
                                <p className="font-chalet-condensed text-[1.1rem] text-white uppercase tracking-widest">{s}</p>
                            </div>
                        ))}
                        <BackButton />
                    </div>
                )
            case 'EDUCATION':
                return (
                    <div className="bg-black/70 p-6 border-r-4 border-white text-right w-full max-w-[280px] sm:max-w-[380px] flex flex-col items-end">
                        <p className="font-chalet-condensed text-[0.7rem] text-white tracking-[0.2em] mb-4 uppercase">INTEL_FOUNDATION</p>
                        <p className="font-chalet text-[1.4rem] text-white uppercase leading-tight mb-2">{USER_DATA.education.degree}</p>
                        <p className="font-chalet-condensed text-[0.9rem] text-white/70 uppercase tracking-widest">{USER_DATA.education.spec}</p>
                        <BackButton />
                    </div>
                )
            case 'CONTACT':
                return (
                    <div className="flex flex-col gap-3 text-right items-end max-w-full">
                        <p className="font-chalet-condensed text-[0.7rem] text-white tracking-[0.2em] mb-4 uppercase">COMM_CHANNELS</p>
                        <div className="bg-black/70 p-4 border-r-4 border-white w-full max-w-[280px] sm:max-w-[320px]">
                            <p className="font-chalet-condensed text-[0.65rem] text-white/50 uppercase mb-1">EMAIL</p>
                            <p className="font-chalet-condensed text-[0.9rem] text-white uppercase break-all">{USER_DATA.email}</p>
                        </div>
                        <div className="bg-black/70 p-4 border-r-4 border-white w-full max-w-[280px] sm:max-w-[320px]">
                            <p className="font-chalet-condensed text-[0.65rem] text-white/50 uppercase mb-1">GITHUB</p>
                            <p className="font-chalet-condensed text-[0.9rem] text-white uppercase break-all">{USER_DATA.github}</p>
                        </div>
                        <div className="bg-black/70 p-4 border-r-4 border-white w-full max-w-[280px] sm:max-w-[320px]">
                            <p className="font-chalet-condensed text-[0.65rem] text-white/50 uppercase mb-1">LINKEDIN</p>
                            <p className="font-chalet-condensed text-[0.9rem] text-white uppercase break-all">{USER_DATA.linkedin}</p>
                        </div>
                        <BackButton />
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
            <div className="hud-jitter landing-page-hud" style={{ position: 'absolute', top: 40, left: 40, zIndex: 110 }}>
                <p style={{ fontFamily: 'ChaletComprime1960', fontSize: '0.8rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)' }}>
                    TECH STATE / {time}
                </p>
            </div>

            {/* Main Title - Impactful */}
            {!activeItem && (
                <div className="landing-main-title" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 110, textAlign: 'center', width: '100%' }}>
                    <h1 style={{ fontFamily: 'ChaletLondon1960', fontSize: 'clamp(3rem, 8vw, 7rem)', letterSpacing: '0.04em', lineHeight: 0.9, color: '#fff', textShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
                        GET THE<br />WORK DONE
                    </h1>
                </div>
            )}

            {/* Left Menu - Responsive Row on Mobile / Column on Desktop */}
            <nav className="landing-nav">
                {MENU_ITEMS.map((item) => (
                    <span
                        key={item}
                        className={`landing-menu-item ${activeItem === item ? 'active' : ''}`}
                        style={{
                            color: activeItem && activeItem !== item ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.8)',
                            cursor: 'pointer'
                        }}
                        onClick={() => setActiveItem(activeItem === item ? null : item)}
                    >
                        {item}
                    </span>
                ))}
            </nav>

            {/* Dynamic Data Panel - Centered & Impactful */}
            <div className="landing-content-wrapper" style={{
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
                <div className="landing-content-panel" style={{
                    pointerEvents: 'auto'
                }}>
                    {activeItem && renderContent()}
                </div>
            </div>
        </div>
    )
}
