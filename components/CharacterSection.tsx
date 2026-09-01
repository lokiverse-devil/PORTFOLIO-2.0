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
        summary:
            'I pick up new tools and frameworks fast, debug problems under pressure, and turn messy requirements into clean working software.',
        skillsList: [
            'Fast-Paced Learning',
            'Algorithmic Problem Solving',
            'Root-Cause Debugging',
            'Technical Adaptability',
        ],
        projectProof:
            'Built complex Next.js, IoT, and AI agent architectures with rapid turnaround.',
        color: '#ffffff',
    },
    {
        id: 'programming',
        name: 'PROGRAMMING & CORE',
        gameAlias: 'CORE ARSENAL',
        level: 94,
        levelStr: '94%',
        category: 'FOUNDATION',
        summary:
            'Strong foundation in data structures, algorithms, memory management, and object-oriented programming with C, C++, and Java.',
        skillsList: [
            'C / C++',
            'Java',
            'Object-Oriented Design',
            'Data Structures & Algorithms',
        ],
        projectProof:
            'Developed core systems, academic algorithms, and backend utilities during Diploma and B.Tech.',
        color: '#cbd5e1',
    },
    {
        id: 'fullstack',
        name: 'AI BASED DEVELOPMENT',
        gameAlias: 'STAMINA // ARCHITECTURE',
        level: 92,
        levelStr: '92%',
        category: 'FRONTEND & WEB',
        summary:
            'Building fast, responsive web applications with React, Next.js, and TypeScript that feel smooth, modern, and enjoyable to use.',
        skillsList: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'REST APIs'],
        projectProof:
            'Created VibeChat (real-time chat) and HTRACX (hostel management portal).',
        color: '#66CC66',
    },
    {
        id: 'database',
        name: 'DATABASES & STORAGE',
        gameAlias: 'STRENGTH // DATA LAYER',
        level: 90,
        levelStr: '90%',
        category: 'BACKEND & DATA',
        summary:
            'Designing clear database schemas, writing efficient SQL queries, and managing reliable data flows with PostgreSQL and Supabase.',
        skillsList: ['PostgreSQL', 'SQL', 'Supabase', 'Database Normalization', 'Indexing'],
        projectProof:
            'Architected multi-table relational databases and automated integrity rules for AIMS and HTRACX.',
        color: '#94a3b8',
    },
    {
        id: 'iot',
        name: 'IOT & EMBEDDED SYSTEMS',
        gameAlias: 'STEALTH // HARDWARE SYNC',
        level: 88,
        levelStr: '88%',
        category: 'SYSTEMS & HARDWARE',
        summary:
            'Hooking up hardware sensors, microcontrollers, and Python code to stream real-time telemetry straight into web dashboards.',
        skillsList: [
            'IoT Automation',
            'Python Telemetry',
            'Microcontrollers',
            'Sensor Interfacing',
            'Hardware-to-Cloud Sync',
        ],
        projectProof:
            'Built SmartClass X to automate classroom lights, fans, and attendance tracking.',
        color: '#a1a1aa',
    },
    {
        id: 'ai_mcp',
        name: 'AI & MCP INTEGRATION',
        gameAlias: 'TECH // MODEL CONTEXT PROTOCOL',
        level: 95,
        levelStr: '95%',
        category: 'AI & AGENTS',
        summary:
            'Connecting Gemini AI and Model Context Protocol (MCP) servers to give assistants access to real tools, APIs, and custom databases.',
        skillsList: [
            'Model Context Protocol (MCP)',
            'Gemini AI',
            'Agent Tool Calling',
            'Prompt Engineering',
            'Structured JSON Output',
        ],
        projectProof:
            'Implemented custom MCP servers and autonomous agent tool workflows for developer tools.',
        color: '#e2e8f0',
    },
    {
        id: 'leadership',
        name: 'LEADERSHIP & MANAGEMENT',
        gameAlias: 'DRIVING // TEAM LEAD',
        level: 92,
        levelStr: '92%',
        category: 'MANAGEMENT',
        summary:
            'Leading development teams, planning sprints, coordinating development, and presenting clear working prototypes to audiences.',
        skillsList: [
            'Team Leadership',
            'Project Coordination',
            'Agile & Sprint Planning',
            'Demos & Presentations',
        ],
        projectProof:
            'Led student development teams in college projects and pitched working software in showcases.',
        color: '#4ade80',
    },
]

// Typewriter hook
function useTypewriter(text: string, speed = 16) {
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

// Segmented GTA Stat Bar
function SegmentedStatBar({
    level,
    color,
    totalSegments = 10,
}: {
    level: number
    color: string
    totalSegments?: number
}) {
    const filledCount = Math.round((level / 100) * totalSegments)
    return (
        <div style={{ display: 'flex', gap: '3px', alignItems: 'center', width: '100%' }}>
            {Array.from({ length: totalSegments }).map((_, i) => {
                const isFilled = i < filledCount
                return (
                    <div
                        key={i}
                        style={{
                            flex: 1,
                            height: '6px',
                            background: isFilled ? color : 'rgba(255,255,255,0.06)',
                            border: `1px solid ${isFilled ? color + '80' : 'rgba(255,255,255,0.08)'}`,
                            transition: `background 0.3s ease ${i * 30}ms`,
                        }}
                    />
                )
            })}
        </div>
    )
}

// Animated level number
function AnimatedLevel({ target }: { target: number }) {
    const [value, setValue] = useState(0)

    useEffect(() => {
        setValue(0)
        const timeout = setTimeout(() => {
            let current = 0
            const step = Math.ceil(target / 25)
            const interval = setInterval(() => {
                current += step
                if (current >= target) {
                    setValue(target)
                    clearInterval(interval)
                } else {
                    setValue(current)
                }
            }, 20)
            return () => clearInterval(interval)
        }, 60)
        return () => clearTimeout(timeout)
    }, [target])

    return <>{value}%</>
}

export default function CharacterSection() {
    const [selectedStatId, setSelectedStatId] = useState<string>('special')
    const [abilityActive, setAbilityActive] = useState<boolean>(false)

    const activeStat =
        CHARACTER_STATS.find((s) => s.id === selectedStatId) || CHARACTER_STATS[0]
    const { displayed: typewriterText } = useTypewriter(activeStat.summary, 14)

    const handleSelectStat = (id: string) => {
        setSelectedStatId(id)
    }

    const handleTriggerAbility = () => {
        setAbilityActive(true)
        setTimeout(() => setAbilityActive(false), 2400)
    }

    return (
        <div className="flex flex-col gap-4 w-full">
            {/* Header */}
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
                            CHARACTER DOSSIER // SKILLS & CAPABILITIES
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
                        CHARACTER ATTRIBUTES // SELECT ANY STAT BELOW TO INSPECT
                    </p>
                </div>

                <button
                    onClick={handleTriggerAbility}
                    disabled={abilityActive}
                    style={{
                        fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                        fontSize: '0.82rem',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        padding: '6px 18px',
                        background: abilityActive ? '#ffffff' : 'transparent',
                        color: abilityActive ? '#000000' : '#ffffff',
                        border: '1px solid rgba(255,255,255,0.3)',
                        cursor: abilityActive ? 'default' : 'pointer',
                        transition: 'all 0.2s ease',
                    }}
                >
                    {abilityActive ? '● ABILITY ACTIVE' : '● SPECIAL ABILITY'}
                </button>
            </div>

            {/* Split: Stats Left (7 cols), Dossier Right (5 cols) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                {/* Left: Stats List (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-3">
                    {/* Special Ability Banner Card */}
                    <div
                        onClick={() => handleSelectStat('special')}
                        style={{
                            background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            borderLeft: '3px solid #ffffff',
                            padding: '16px 18px',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            boxShadow:
                                selectedStatId === 'special'
                                    ? '0 0 20px rgba(255,255,255,0.08)'
                                    : 'none',
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
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span
                                    style={{
                                        fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                        fontSize: '1rem',
                                        color: '#ffffff',
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                    }}
                                >
                                    SPECIAL ABILITY // FAST LEARNING & PROBLEM SOLVING
                                </span>
                            </div>
                            <span
                                style={{
                                    fontFamily: 'Share Tech Mono,monospace',
                                    fontSize: '0.88rem',
                                    color: '#ffffff',
                                    fontWeight: 700,
                                }}
                            >
                                98% MAX
                            </span>
                        </div>

                        {/* Special ability bar */}
                        <div
                            style={{
                                width: '100%',
                                background: 'rgba(255,255,255,0.06)',
                                height: '3px',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            <div
                                style={{
                                    width: abilityActive ? '100%' : '98%',
                                    height: '100%',
                                    background: '#ffffff',
                                    boxShadow: '0 0 8px rgba(255,255,255,0.7)',
                                    transition: 'width 0.4s ease',
                                }}
                            />
                        </div>

                        <p
                            style={{
                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                fontSize: '0.8rem',
                                color: 'rgba(255,255,255,0.6)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                marginTop: '8px',
                            }}
                        >
                            Rapid learning, root-cause troubleshooting, and clean code implementation.
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
                                        background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                                        border: '1px solid',
                                        borderColor: isSelected
                                            ? 'rgba(255,255,255,0.3)'
                                            : 'rgba(255,255,255,0.08)',
                                        borderLeft: `3px solid ${stat.color}`,
                                        cursor: 'pointer',
                                        transition: 'all 0.18s ease',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '8px',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                fontSize: '0.9rem',
                                                color: isSelected ? '#fff' : 'rgba(255,255,255,0.75)',
                                                letterSpacing: '0.08em',
                                                textTransform: 'uppercase',
                                            }}
                                        >
                                            {stat.name}
                                        </span>
                                        <span
                                            style={{
                                                fontFamily: 'Share Tech Mono,monospace',
                                                fontSize: '0.85rem',
                                                color: stat.color,
                                                fontWeight: 700,
                                            }}
                                        >
                                            {stat.levelStr}
                                        </span>
                                    </div>

                                    {/* Segmented meter */}
                                    <SegmentedStatBar
                                        level={stat.level}
                                        color={stat.color}
                                        totalSegments={10}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Right: Detailed Dossier (5 cols) */}
                <div
                    className="lg:col-span-5 flex flex-col justify-between"
                    style={{
                        background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderLeft: `3px solid ${activeStat.color}`,
                        padding: '20px',
                        transition: 'border-left-color 0.3s ease',
                    }}
                >
                    <div className="flex flex-col gap-3">
                        {/* Title Row */}
                        <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px' }}>
                            <span
                                style={{
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.68rem',
                                    color: activeStat.color,
                                    letterSpacing: '0.3em',
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                    display: 'block',
                                    marginBottom: '4px',
                                }}
                            >
                                [ {activeStat.category} ]
                            </span>
                            <div className="flex justify-between items-start gap-2">
                                <h4
                                    style={{
                                        fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                        fontSize: 'clamp(1.25rem, 2vw, 1.55rem)',
                                        color: '#fff',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase',
                                        lineHeight: 1.1,
                                    }}
                                >
                                    {activeStat.name}
                                </h4>
                                <div
                                    style={{
                                        fontFamily: 'Share Tech Mono,monospace',
                                        fontSize: '1.4rem',
                                        color: activeStat.color,
                                        fontWeight: 700,
                                        lineHeight: 1,
                                    }}
                                >
                                    <AnimatedLevel target={activeStat.level} />
                                </div>
                            </div>
                            <p
                                style={{
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.78rem',
                                    color: 'rgba(255,255,255,0.45)',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    marginTop: '4px',
                                }}
                            >
                                {activeStat.gameAlias}
                            </p>
                        </div>

                        {/* Summary */}
                        <div
                            style={{
                                minHeight: '68px',
                                borderBottom: '1px solid rgba(255,255,255,0.08)',
                                paddingBottom: '12px',
                            }}
                        >
                            <p
                                style={{
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.88rem',
                                    color: 'rgba(255,255,255,0.85)',
                                    letterSpacing: '0.05em',
                                    textTransform: 'uppercase',
                                    lineHeight: '1.6',
                                    margin: 0,
                                }}
                            >
                                {typewriterText}
                            </p>
                        </div>

                        {/* Key Skills */}
                        <div>
                            <span
                                style={{
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.65rem',
                                    color: 'rgba(255,255,255,0.4)',
                                    letterSpacing: '0.3em',
                                    textTransform: 'uppercase',
                                    display: 'block',
                                    marginBottom: '8px',
                                }}
                            >
                                KEY TECHNICAL COMPETENCIES:
                            </span>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                {activeStat.skillsList.map((skill, i) => (
                                    <span
                                        key={i}
                                        style={{
                                            background: 'rgba(255,255,255,0.04)',
                                            borderLeft: `2px solid ${activeStat.color}`,
                                            padding: '4px 10px',
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.72rem',
                                            color: 'rgba(255,255,255,0.8)',
                                            letterSpacing: '0.12em',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Project Proof */}
                        <div
                            style={{
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                padding: '12px 14px',
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.65rem',
                                    color: activeStat.color,
                                    letterSpacing: '0.3em',
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                    display: 'block',
                                    marginBottom: '6px',
                                }}
                            >
                                REAL-WORLD EVIDENCE:
                            </span>
                            <p
                                style={{
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.84rem',
                                    color: 'rgba(255,255,255,0.85)',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.06em',
                                    lineHeight: '1.5',
                                }}
                            >
                                {activeStat.projectProof}
                            </p>
                        </div>
                    </div>

                    {/* Bottom Status */}
                    <div
                        style={{
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
                        }}
                    >
                        <span style={{ color: 'rgba(255,255,255,0.35)' }}>STATUS: VERIFIED</span>
                        <span
                            style={{
                                color: '#66CC66',
                                fontWeight: 700,
                            }}
                        >
                            ✓ ALWAYS READY
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
