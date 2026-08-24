'use client'
import React, { useState } from 'react'

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
    },
]

export default function CharacterSection() {
    const [selectedStatId, setSelectedStatId] = useState<string>('special')
    const [abilityActive, setAbilityActive] = useState<boolean>(false)

    const activeStat = CHARACTER_STATS.find((s) => s.id === selectedStatId) || CHARACTER_STATS[0]

    const handleTriggerAbility = () => {
        setAbilityActive(true)
        setTimeout(() => setAbilityActive(false), 3000)
    }

    return (
        <div className="flex flex-col gap-4 w-full">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between border-b border-white/20 pb-3 gap-2">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-[#66CC66] inline-block shadow-[0_0_8px_#66CC66]" />
                        <h3 className="font-chalet text-[1.3rem] sm:text-[1.6rem] text-white tracking-wider uppercase">
                            CHARACTER DOSSIER // OM PANDEY
                        </h3>
                    </div>
                    <p className="font-chalet-condensed text-[0.8rem] sm:text-[0.9rem] text-white/70 uppercase tracking-widest mt-0.5">
                        PROTAGONIST STATS & PERKS // CLICK ANY ATTRIBUTE TO INSPECT
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={handleTriggerAbility}
                        className={`px-3 py-1 text-[0.75rem] font-chalet-condensed tracking-widest uppercase transition-all duration-200 border cursor-pointer ${
                            abilityActive
                                ? 'bg-[#f5a623] text-black border-white shadow-[0_0_15px_#f5a623] scale-105 font-bold'
                                : 'bg-[#66CC66]/20 border-[#66CC66] text-[#66CC66] hover:bg-[#66CC66] hover:text-black'
                        }`}
                    >
                        {abilityActive ? 'ABILITY OVERCLOCK ACTIVE' : 'TRIGGER SPECIAL ABILITY'}
                    </button>
                </div>
            </div>

            {/* Main Stats Grid + Inspector Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                {/* Left Side: Clickable Stats Sheet (7 cols) */}
                <div className="lg:col-span-7 flex flex-col gap-2.5">
                    {/* Special Ability Card */}
                    <div
                        onClick={() => setSelectedStatId('special')}
                        className={`p-3.5 border transition-all cursor-pointer ${
                            selectedStatId === 'special'
                                ? 'bg-[#0f0f13] border-[#f5a623] border-l-4 shadow-[0_0_15px_rgba(245,166,35,0.2)]'
                                : 'bg-[#0e0e12] border-white/20 hover:border-white/50'
                        }`}
                    >
                        <div className="flex justify-between items-center mb-1.5">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-[#f5a623] inline-block shadow-[0_0_6px_#f5a623]" />
                                <span className="font-chalet text-[1.05rem] text-[#f5a623] uppercase tracking-wider">
                                    SPECIAL ABILITY // FAST LEARNING & PROBLEM SOLVING
                                </span>
                            </div>
                            <span className="font-chalet-condensed text-[0.85rem] text-[#f5a623] font-bold">
                                98% MAX
                            </span>
                        </div>
                        <div className="w-full bg-white/10 h-2 overflow-hidden">
                            <div
                                className="bg-[#f5a623] h-full transition-all duration-300 shadow-[0_0_8px_#f5a623]"
                                style={{ width: abilityActive ? '100%' : '98%' }}
                            />
                        </div>
                        <p className="font-chalet-condensed text-[0.8rem] text-white/80 uppercase tracking-wider mt-1.5">
                            Fast assimilation, algorithmic troubleshooting, and adaptive engineering under pressure.
                        </p>
                    </div>

                    {/* Standard Stats List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {CHARACTER_STATS.filter((s) => s.id !== 'special').map((stat) => {
                            const isSelected = stat.id === selectedStatId
                            return (
                                <div
                                    key={stat.id}
                                    onClick={() => setSelectedStatId(stat.id)}
                                    className={`p-3 border transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                                        isSelected
                                            ? 'bg-[#0f0f13] border-[#66CC66] border-l-4 shadow-[0_0_12px_rgba(102,204,102,0.2)]'
                                            : 'bg-[#0e0e12] border-white/20 hover:border-white/50'
                                    }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 bg-[#66CC66] inline-block" />
                                            <span className="font-chalet text-[0.92rem] text-white uppercase tracking-wider">
                                                {stat.name}
                                            </span>
                                        </div>
                                        <span className="font-chalet-condensed text-[0.78rem] text-[#66CC66] font-bold">
                                            {stat.levelStr}
                                        </span>
                                    </div>

                                    <div className="w-full bg-white/10 h-1.5 overflow-hidden">
                                        <div
                                            className="bg-[#66CC66] h-full transition-all duration-300"
                                            style={{ width: stat.levelStr }}
                                        />
                                    </div>

                                    <div className="flex justify-between items-center text-[0.7rem] font-chalet-condensed text-white/60 uppercase tracking-wider">
                                        <span>{stat.gameAlias}</span>
                                        <span className="text-white font-bold">{isSelected ? '● ACTIVE' : 'INSPECT ↗'}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Right Side: Deep-Dive Stat Dossier (5 cols) */}
                <div className="lg:col-span-5 bg-[#0e0e12] border-l-4 border-[#66CC66] border-y border-r border-white/20 p-5 flex flex-col justify-between">
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-start border-b border-white/15 pb-2.5">
                            <div>
                                <span className="font-chalet-condensed text-[0.75rem] text-[#66CC66] uppercase tracking-widest font-bold">
                                    [ ATTRIBUTE INTEL // {activeStat.category} ]
                                </span>
                                <h4 className="font-chalet text-[1.4rem] text-white uppercase mt-0.5">
                                    {activeStat.name}
                                </h4>
                                <p className="font-chalet-condensed text-[0.82rem] text-white/70 uppercase tracking-wider">
                                    {activeStat.gameAlias}
                                </p>
                            </div>
                            <div className="text-right">
                                <span className="font-chalet text-[1.6rem] text-[#66CC66]">
                                    {activeStat.levelStr}
                                </span>
                            </div>
                        </div>

                        {/* Summary description */}
                        <div>
                            <span className="font-chalet-condensed text-[0.72rem] text-white/60 uppercase tracking-widest">
                                TACTICAL OVERVIEW:
                            </span>
                            <p className="font-chalet-condensed text-[0.92rem] text-white uppercase leading-relaxed tracking-wider mt-1">
                                {activeStat.summary}
                            </p>
                        </div>

                        {/* Skill Tags */}
                        <div>
                            <span className="font-chalet-condensed text-[0.72rem] text-white/60 uppercase tracking-widest">
                                ARSENAL COMPONENTS:
                            </span>
                            <div className="flex flex-wrap gap-1.5 mt-1.5">
                                {activeStat.skillsList.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="bg-white/10 border border-white/30 px-2 py-0.5 text-[0.74rem] font-chalet-condensed text-white uppercase tracking-wider"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Project Proof */}
                        <div className="bg-[#15151a] border border-white/15 p-3 mt-1">
                            <span className="font-chalet-condensed text-[0.72rem] text-[#f5a623] uppercase tracking-widest font-bold">
                                FIELD APPLICATION // EVIDENCE:
                            </span>
                            <p className="font-chalet-condensed text-[0.85rem] text-white/90 uppercase tracking-wider mt-1">
                                {activeStat.projectProof}
                            </p>
                        </div>
                    </div>

                    {/* Bottom Status Tag */}
                    <div className="pt-3 mt-3 border-t border-white/15 flex justify-between items-center text-[0.72rem] font-chalet-condensed text-white/60 uppercase tracking-widest">
                        <span>STATUS: VERIFIED</span>
                        <span className="text-[#66CC66] font-bold">READY FOR DEPLOYMENT</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
