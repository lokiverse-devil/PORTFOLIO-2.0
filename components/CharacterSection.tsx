'use client'
import React, { useEffect, useRef, useState } from 'react'

export interface CharacterStat {
    id: string
    name: string
    gameAlias: string
    level: number
    levelStr: string
    category: string
    summary: string
    skillsList: string[]
    projectProof: string
    color: string
}

export const CHARACTER_STATS: CharacterStat[] = [
    {
        id: 'special',
        name: 'SPECIAL ABILITY',
        gameAlias: 'FAST LEARNING & PROBLEM SOLVING',
        level: 98,
        levelStr: '98%',
        category: 'CORE PERK',
        summary: 'Rapid assimilation of complex tech stacks, swift debugging under pressure, and translating requirements into clean production code.',
        skillsList: ['Fast-Paced Learning', 'Algorithmic Problem Solving', 'Root-Cause Debugging', 'Technical Adaptability'],
        projectProof: 'Mastered MCP and Next.js Turbopack architectures in record time for complex project builds.',
        color: '#f5a623',
    },
    {
        id: 'programming',
        name: 'PROGRAMMING & CORE',
        gameAlias: 'CORE ARSENAL',
        level: 94,
        levelStr: '94%',
        category: 'FOUNDATION',
        summary: 'Solid foundational computer science fundamentals with deep understanding of memory, OOP, and algorithms.',
        skillsList: ['C / C++', 'Java', 'Object-Oriented Design', 'Data Structures & Algorithms'],
        projectProof: 'High-performance algorithms and academic project backends built during Diploma and B.Tech CSE.',
        color: '#f5a623',
    },
    {
        id: 'fullstack',
        name: 'FULL-STACK DEVELOPMENT',
        gameAlias: 'STAMINA // ARCHITECTURE',
        level: 92,
        levelStr: '92%',
        category: 'FRONTEND & WEB',
        summary: 'Architecting fast, responsive, and intuitive web applications with modern component architecture and server actions.',
        skillsList: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'REST APIs'],
        projectProof: 'VibeChat (real-time chat protocol) and HTRACX (smart management portal).',
        color: '#66CC66',
    },
    {
        id: 'database',
        name: 'DATABASES & STORAGE',
        gameAlias: 'STRENGTH // DATA LAYER',
        level: 90,
        levelStr: '90%',
        category: 'BACKEND & DATA',
        summary: 'Designing relational schemas, relational queries, migrations, and low-latency data access layers.',
        skillsList: ['PostgreSQL', 'SQL', 'Supabase', 'Database Normalization', 'Indexing'],
        projectProof: 'AIMS & HTRACX multi-table relational schema design and automated record integrity.',
        color: '#7eb8f7',
    },
    {
        id: 'iot',
        name: 'IOT & EMBEDDED SYSTEMS',
        gameAlias: 'STEALTH // HARDWARE SYNC',
        level: 88,
        levelStr: '88%',
        category: 'SYSTEMS & HARDWARE',
        summary: 'Connecting hardware sensors, telemetry streams, and microcontroller networks with cloud applications.',
        skillsList: ['IoT Automation', 'Python Telemetry', 'Microcontrollers', 'Sensor Interfacing', 'Hardware-to-Cloud Sync'],
        projectProof: 'SmartClass X: IoT-enabled classroom with automated presence telemetry and environmental controls.',
        color: '#f87171',
    },
    {
        id: 'ai_mcp',
        name: 'AI & MCP INTEGRATION',
        gameAlias: 'TECH // MODEL CONTEXT PROTOCOL',
        level: 95,
        levelStr: '95%',
        category: 'AI & AGENTS',
        summary: 'Integrating Gemini AI, tool calling, structured outputs, and Model Context Protocol (MCP) servers for autonomous workflows.',
        skillsList: ['Model Context Protocol (MCP)', 'Gemini AI', 'Agent Tool Calling', 'Prompt Engineering', 'Structured JSON Output'],
        projectProof: 'Autonomous tool workflows, custom MCP server integrations, and AI-powered assistants.',
        color: '#c084fc',
    },
    {
        id: 'leadership',
        name: 'LEADERSHIP & MANAGEMENT',
        gameAlias: 'DRIVING // TEAM LEAD',
        level: 92,
        levelStr: '92%',
        category: 'MANAGEMENT',
        summary: 'Guiding engineering teams, coordinating milestones, agile task breakdown, and pitching technical proposals.',
        skillsList: ['Team Lead & Coordination', 'Project Management', 'Agile & Sprint Planning', 'Pitching & Technical Demos'],
        projectProof: 'Led multi-developer college projects and successfully pitched solutions in tech showcases.',
        color: '#34d399',
    },
]

// Typewriter hook
function useTypewriter(text: string, speed = 18) {
    const [displayed, setDisplayed] = useState('')
    const [done, setDone] = useState(false)
    const prevText = useRef('')

    useEffect(() => {
        if (text === prevText.current) return
        prevText.current = text
        setDisplayed('')
        setDone(false)
        let i = 0
        const interval = setInterval(() => {
            i++
            setDisplayed(text.slice(0, i))
            if (i >= text.length) {
                clearInterval(interval)
                setDone(true)
            }
        }, speed)
        return () => clearInterval(interval)
    }, [text, speed])

    return { displayed, done }
}

// Animated level number
function AnimatedLevel({ target }: { target: number }) {
    const [value, setValue] = useState(0)
    const hasRun = useRef(false)

    useEffect(() => {
        hasRun.current = false
        setValue(0)
        const timeout = setTimeout(() => {
            let current = 0
            const step = Math.ceil(target / 30)
            const interval = setInterval(() => {
                current += step
                if (current >= target) {
                    setValue(target)
                    clearInterval(interval)
                } else {
                    setValue(current)
                }
            }, 22)
            return () => clearInterval(interval)
        }, 80)
        return () => clearTimeout(timeout)
    }, [target])

    return <>{value}%</>
}

export default function CharacterSection() {
    const [selectedStatId, setSelectedStatId] = useState<string>('special')
    const [abilityActive, setAbilityActive] = useState<boolean>(false)
    const [barKey, setBarKey] = useState(0)

    const activeStat = CHARACTER_STATS.find((s) => s.id === selectedStatId) || CHARACTER_STATS[0]
    const { displayed: typewriterText, done: typewriterDone } = useTypewriter(activeStat.summary, 16)

    const handleSelectStat = (id: string) => {
        setSelectedStatId(id)
        setBarKey(k => k + 1)
    }

    const handleTriggerAbility = () => {
        setAbilityActive(true)
        setTimeout(() => setAbilityActive(false), 3000)
    }

    return (
        <div className="flex flex-col gap-4 w-full">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                <div>
                    <div className="flex items-center gap-2.5">
                        <div style={{
                            width: '10px', height: '10px',
                            background: '#66CC66',
                            boxShadow: '0 0 10px rgba(102,204,102,0.9), 0 0 20px rgba(102,204,102,0.5)',
                            animation: 'neon-breathe 2.8s ease-in-out infinite',
                        }} />
                        <h3 style={{
                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                            fontSize: 'clamp(1.1rem, 2.2vw, 1.55rem)',
                            letterSpacing: '0.12em',
                            color: '#fff',
                            textTransform: 'uppercase',
                            textShadow: '0 0 20px rgba(255,255,255,0.1)',
                        }}>
                            CHARACTER DOSSIER // OM PANDEY
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
                        PROTAGONIST STATS & PERKS // CLICK ANY ATTRIBUTE TO INSPECT
                    </p>
                </div>

                <button
                    onClick={handleTriggerAbility}
                    style={{
                        padding: '6px 16px',
                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                        fontSize: '0.72rem',
                        letterSpacing: '0.22em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        outline: 'none',
                        transition: 'all 0.2s ease',
                        background: abilityActive
                            ? 'linear-gradient(90deg, #f5a623, #ffcc44)'
                            : 'rgba(102,204,102,0.1)',
                        border: abilityActive ? '1px solid #f5a623' : '1px solid rgba(102,204,102,0.45)',
                        color: abilityActive ? '#000' : '#66CC66',
                        fontWeight: abilityActive ? 700 : 400,
                        boxShadow: abilityActive
                            ? '0 0 20px rgba(245,166,35,0.7), 0 0 40px rgba(245,166,35,0.3)'
                            : '0 0 10px rgba(102,204,102,0.15)',
                        transform: abilityActive ? 'scale(1.03)' : 'none',
                    }}
                >
                    {abilityActive ? '⚡ ABILITY OVERCLOCK ACTIVE' : '▶ TRIGGER SPECIAL ABILITY'}
                </button>
            </div>

            {/* Main Grid: Stats + Inspector */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                {/* Left: Stat Cards (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-2.5">
                    {/* Special Ability Card */}
                    <div
                        onClick={() => handleSelectStat('special')}
                        style={{
                            padding: '14px 16px',
                            background: selectedStatId === 'special'
                                ? 'linear-gradient(135deg, #110f00 0%, #0e0c00 100%)'
                                : 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)',
                            border: '1px solid',
                            borderColor: selectedStatId === 'special'
                                ? 'rgba(245,166,35,0.5)'
                                : 'rgba(255,255,255,0.1)',
                            borderLeft: `3px solid #f5a623`,
                            boxShadow: selectedStatId === 'special'
                                ? '0 0 20px rgba(245,166,35,0.12), inset 0 0 20px rgba(245,166,35,0.04)'
                                : 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Subtle gold ambient glow on active */}
                        {selectedStatId === 'special' && (
                            <div style={{
                                position: 'absolute',
                                top: 0, left: 0, right: 0, bottom: 0,
                                background: 'radial-gradient(ellipse at 20% 50%, rgba(245,166,35,0.06) 0%, transparent 70%)',
                                pointerEvents: 'none',
                            }} />
                        )}

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{
                                    width: '8px', height: '8px',
                                    background: '#f5a623',
                                    boxShadow: '0 0 6px rgba(245,166,35,0.9)',
                                    animation: 'live-pulse 1.5s ease-in-out infinite',
                                }} />
                                <span style={{
                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                    fontSize: '1rem',
                                    color: '#f5a623',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    textShadow: '0 0 12px rgba(245,166,35,0.5)',
                                }}>
                                    SPECIAL ABILITY // FAST LEARNING & PROBLEM SOLVING
                                </span>
                            </div>
                            <span style={{
                                fontFamily: 'Share Tech Mono,monospace',
                                fontSize: '0.88rem',
                                color: '#f5a623',
                                fontWeight: 700,
                                textShadow: '0 0 8px rgba(245,166,35,0.7)',
                            }}>
                                98% MAX
                            </span>
                        </div>

                        {/* Special ability bar */}
                        <div style={{
                            width: '100%',
                            background: 'rgba(255,255,255,0.06)',
                            height: '4px',
                            position: 'relative',
                            overflow: 'hidden',
                        }}>
                            <div style={{
                                width: abilityActive ? '100%' : '98%',
                                height: '100%',
                                background: 'linear-gradient(to right, #f5a623aa, #f5a623, #ffdd88)',
                                boxShadow: '0 0 8px rgba(245,166,35,0.8)',
                                transition: 'width 0.4s ease',
                                position: 'relative',
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                                    backgroundSize: '200% 100%',
                                    animation: 'shimmer-bar 1.8s ease-in-out infinite',
                                }} />
                            </div>
                        </div>

                        <p style={{
                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                            fontSize: '0.78rem',
                            color: 'rgba(255,255,255,0.65)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            marginTop: '8px',
                        }}>
                            Fast assimilation, algorithmic troubleshooting, and adaptive engineering under pressure.
                        </p>
                    </div>

                    {/* Standard Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {CHARACTER_STATS.filter((s) => s.id !== 'special').map((stat) => {
                            const isSelected = stat.id === selectedStatId
                            return (
                                <div
                                    key={stat.id}
                                    onClick={() => handleSelectStat(stat.id)}
                                    style={{
                                        padding: '12px 14px',
                                        background: isSelected
                                            ? `linear-gradient(135deg, #0e0e14 0%, ${stat.color}08 100%)`
                                            : 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)',
                                        border: '1px solid',
                                        borderColor: isSelected ? `${stat.color}50` : 'rgba(255,255,255,0.08)',
                                        borderLeft: `3px solid ${stat.color}`,
                                        boxShadow: isSelected
                                            ? `0 0 18px ${stat.color}12, inset 0 0 15px ${stat.color}05`
                                            : 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '8px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                    }}
                                    onMouseEnter={e => {
                                        if (!isSelected) {
                                            (e.currentTarget as HTMLElement).style.borderColor = `${stat.color}35`
                                            ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 10px ${stat.color}08`
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        if (!isSelected) {
                                            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'
                                            ;(e.currentTarget as HTMLElement).style.borderLeftColor = stat.color
                                            ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                                        }
                                    }}
                                >
                                    {isSelected && (
                                        <div style={{
                                            position: 'absolute',
                                            top: 0, left: 0, right: 0, bottom: 0,
                                            background: `radial-gradient(ellipse at 15% 50%, ${stat.color}08 0%, transparent 70%)`,
                                            pointerEvents: 'none',
                                        }} />
                                    )}

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                            <div style={{
                                                width: '5px', height: '5px',
                                                background: stat.color,
                                                boxShadow: isSelected ? `0 0 5px ${stat.color}` : 'none',
                                            }} />
                                            <span style={{
                                                fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                fontSize: '0.88rem',
                                                color: isSelected ? '#fff' : 'rgba(255,255,255,0.8)',
                                                letterSpacing: '0.08em',
                                                textTransform: 'uppercase',
                                            }}>
                                                {stat.name}
                                            </span>
                                        </div>
                                        <span style={{
                                            fontFamily: 'Share Tech Mono,monospace',
                                            fontSize: '0.8rem',
                                            color: stat.color,
                                            fontWeight: 700,
                                            textShadow: isSelected ? `0 0 6px ${stat.color}` : 'none',
                                        }}>
                                            {isSelected ? <AnimatedLevel key={barKey} target={stat.level} /> : stat.levelStr}
                                        </span>
                                    </div>

                                    {/* Stat bar */}
                                    <div style={{
                                        width: '100%',
                                        background: 'rgba(255,255,255,0.06)',
                                        height: '3px',
                                        overflow: 'hidden',
                                        position: 'relative',
                                    }}>
                                        <div style={{
                                            width: stat.levelStr,
                                            height: '100%',
                                            background: `linear-gradient(to right, ${stat.color}88, ${stat.color})`,
                                            boxShadow: isSelected ? `0 0 6px ${stat.color}80` : 'none',
                                            position: 'relative',
                                            transition: 'box-shadow 0.3s ease',
                                        }}>
                                            {isSelected && (
                                                <div style={{
                                                    position: 'absolute',
                                                    inset: 0,
                                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                                                    backgroundSize: '200% 100%',
                                                    animation: 'shimmer-bar 2s ease-in-out infinite',
                                                }} />
                                            )}
                                        </div>
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.68rem',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.15em',
                                    }}>
                                        <span style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.gameAlias}</span>
                                        <span style={{
                                            color: isSelected ? stat.color : 'rgba(255,255,255,0.35)',
                                            fontWeight: isSelected ? 700 : 400,
                                            textShadow: isSelected ? `0 0 6px ${stat.color}` : 'none',
                                        }}>
                                            {isSelected ? '● ACTIVE' : 'INSPECT ↗'}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Right: Deep-Dive Dossier (5 cols) */}
                <div
                    className="lg:col-span-5 flex flex-col justify-between"
                    style={{
                        background: 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)',
                        borderTop: '1px solid rgba(255,255,255,0.08)',
                        borderRight: '1px solid rgba(255,255,255,0.08)',
                        borderBottom: '1px solid rgba(255,255,255,0.08)',
                        borderLeft: `3px solid ${activeStat.color}`,
                        padding: '18px 20px',
                        boxShadow: `inset 3px 0 25px ${activeStat.color}06`,
                        transition: 'border-left-color 0.3s ease, box-shadow 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Ambient radial glow */}
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: `radial-gradient(ellipse at 10% 30%, ${activeStat.color}06 0%, transparent 65%)`,
                        pointerEvents: 'none',
                        transition: 'background 0.4s ease',
                    }} />

                    <div className="flex flex-col gap-3" style={{ position: 'relative' }}>
                        {/* Header */}
                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
                            <span style={{
                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                fontSize: '0.68rem',
                                color: activeStat.color,
                                letterSpacing: '0.3em',
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                textShadow: `0 0 8px ${activeStat.color}80`,
                                display: 'block',
                                marginBottom: '6px',
                            }}>
                                [ ATTRIBUTE INTEL // {activeStat.category} ]
                            </span>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                <div>
                                    <h4 style={{
                                        fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                        fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                                        color: '#fff',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        textShadow: '0 0 20px rgba(255,255,255,0.1)',
                                    }}>
                                        {activeStat.name}
                                    </h4>
                                    <p style={{
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.75rem',
                                        color: 'rgba(255,255,255,0.45)',
                                        letterSpacing: '0.2em',
                                        textTransform: 'uppercase',
                                        marginTop: '2px',
                                    }}>
                                        {activeStat.gameAlias}
                                    </p>
                                </div>
                                <span style={{
                                    fontFamily: 'Share Tech Mono,monospace',
                                    fontSize: '1.8rem',
                                    color: activeStat.color,
                                    fontWeight: 700,
                                    textShadow: `0 0 16px ${activeStat.color}80`,
                                    lineHeight: 1,
                                }}>
                                    <AnimatedLevel key={`dossier-${barKey}-${activeStat.id}`} target={activeStat.level} />
                                </span>
                            </div>
                        </div>

                        {/* Typewriter Summary */}
                        <div>
                            <span style={{
                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                fontSize: '0.65rem',
                                color: 'rgba(255,255,255,0.35)',
                                letterSpacing: '0.3em',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '6px',
                            }}>
                                TACTICAL OVERVIEW:
                            </span>
                            <p style={{
                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                fontSize: '0.88rem',
                                color: 'rgba(255,255,255,0.85)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                                lineHeight: '1.6',
                                minHeight: '4.2em',
                            }}>
                                {typewriterText}
                                {!typewriterDone && <span className="typewriter-cursor" />}
                            </p>
                        </div>

                        {/* Skill Tags */}
                        <div>
                            <span style={{
                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                fontSize: '0.65rem',
                                color: 'rgba(255,255,255,0.35)',
                                letterSpacing: '0.3em',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '8px',
                            }}>
                                ARSENAL COMPONENTS:
                            </span>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                {activeStat.skillsList.map((skill, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            background: `${activeStat.color}0d`,
                                            border: `1px solid ${activeStat.color}30`,
                                            padding: '3px 10px',
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.72rem',
                                            color: 'rgba(255,255,255,0.85)',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            transition: 'all 0.15s ease',
                                            cursor: 'default',
                                        }}
                                        onMouseEnter={e => {
                                            (e.currentTarget as HTMLElement).style.background = `${activeStat.color}20`
                                            ;(e.currentTarget as HTMLElement).style.borderColor = `${activeStat.color}70`
                                            ;(e.currentTarget as HTMLElement).style.color = '#fff'
                                            ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 8px ${activeStat.color}30`
                                        }}
                                        onMouseLeave={e => {
                                            (e.currentTarget as HTMLElement).style.background = `${activeStat.color}0d`
                                            ;(e.currentTarget as HTMLElement).style.borderColor = `${activeStat.color}30`
                                            ;(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)'
                                            ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Project Proof */}
                        <div style={{
                            background: `${activeStat.color}06`,
                            border: `1px solid ${activeStat.color}20`,
                            borderLeft: `2px solid ${activeStat.color}80`,
                            padding: '12px 14px',
                        }}>
                            <span style={{
                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                fontSize: '0.65rem',
                                color: activeStat.color,
                                letterSpacing: '0.3em',
                                textTransform: 'uppercase',
                                fontWeight: 700,
                                textShadow: `0 0 6px ${activeStat.color}60`,
                                display: 'block',
                                marginBottom: '6px',
                            }}>
                                FIELD APPLICATION // EVIDENCE:
                            </span>
                            <p style={{
                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                fontSize: '0.82rem',
                                color: 'rgba(255,255,255,0.8)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.06em',
                                lineHeight: '1.5',
                            }}>
                                {activeStat.projectProof}
                            </p>
                        </div>
                    </div>

                    {/* Bottom Status */}
                    <div style={{
                        paddingTop: '12px',
                        marginTop: '12px',
                        borderTop: '1px solid rgba(255,255,255,0.08)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                        fontSize: '0.68rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        position: 'relative',
                    }}>
                        <span style={{ color: 'rgba(255,255,255,0.35)' }}>STATUS: VERIFIED</span>
                        <span style={{
                            color: '#66CC66',
                            fontWeight: 700,
                            textShadow: '0 0 6px rgba(102,204,102,0.6)',
                        }}>
                            ✓ READY FOR DEPLOYMENT
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
