'use client'
import React, { useState } from 'react'

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
        year: 'Early Education',
        status: 'COMPLETED // EXCELLENCE',
        desc: 'Foundational schooling and early development in the scenic hills of Almora. Nurtured analytical thinking, mathematics, and curiosity for science.',
        coordinates: { x: 72, y: 55, lat: '29.5971° N', long: '79.6591° E' },
        highlights: ['Science & Mathematics Foundation', 'Analytical & Logic Building', 'Academic Distinction'],
    },
    {
        id: 'haldwani',
        title: 'SECONDARY SCHOOLING',
        institution: 'Aurum The Global School',
        location: 'Haldwani, Uttarakhand',
        state: 'Uttarakhand, India',
        type: 'SECONDARY',
        year: 'High School',
        status: 'COMPLETED // DISTINCTION',
        desc: 'Comprehensive secondary education focusing on rigorous science curriculum, computer science fundamentals, and extracurricular leadership.',
        coordinates: { x: 65, y: 68, lat: '29.2183° N', long: '79.5130° E' },
        highlights: ['Computer Science Fundamentals', 'Science Stream Curriculum', 'Team Collaboration & Activities'],
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
        desc: 'Rigorous engineering diploma in Computer Science Engineering. Built core programming, data structures, digital electronics, and software systems.',
        coordinates: { x: 50, y: 72, lat: '29.2104° N', long: '78.9619° E' },
        highlights: ['C / C++ & Java Architecture', 'Database Management & SQL', 'Operating Systems & Networking'],
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
        desc: 'Veer Madho Singh Bhandari Uttarakhand Technical University (Faculty of Technology). Deep specialization in AI, Distributed Systems, Cloud & Full Stack.',
        coordinates: { x: 28, y: 38, lat: '30.3165° N', long: '78.0322° E' },
        highlights: ['AI Engineering & MCP', 'Full Stack Scalable Architecture', 'Systems Design & IoT Innovation'],
    },
    {
        id: 'future',
        title: 'GLOBAL OPERATIONS',
        institution: 'Worldwide Tech Missions',
        location: 'Global / Remote',
        state: 'Worldwide',
        type: 'FUTURE',
        year: 'Next Horizon',
        status: 'OPEN FOR EXPEDITIONS',
        desc: 'Ready to deploy engineering solutions worldwide — open for high-impact software engineering roles, hackathons, and international collaborations.',
        coordinates: { x: 88, y: 22, lat: 'GLOBAL', long: 'EXPEDITIONS' },
        highlights: ['International Tech Collaborations', 'High-Scale Distributed Engineering', 'Global Product Impact'],
    },
]

export default function MapSection() {
    const [selectedId, setSelectedId] = useState<string>('dehradun')
    const activePoint = STUDY_WAYPOINTS.find((w) => w.id === selectedId) || STUDY_WAYPOINTS[3]

    return (
        <div className="flex flex-col gap-4 w-full">
            {/* Top Bar Header */}
            <div className="flex flex-wrap items-center justify-between border-b border-white/20 pb-3 gap-2">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 bg-[#f5a623] inline-block shadow-[0_0_8px_#f5a623]" />
                        <h3 className="font-chalet text-[1.3rem] sm:text-[1.6rem] text-white tracking-wider uppercase">
                            TERRITORY RADAR // ACADEMIC EXPEDITIONS
                        </h3>
                    </div>
                    <p className="font-chalet-condensed text-[0.8rem] sm:text-[0.9rem] text-white/70 uppercase tracking-widest mt-0.5">
                        UTTARAKHAND (INDIA) TO GLOBAL HORIZON // SELECT A WAYPOINT FOR DOSSIER
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    <span className="bg-[#f5a623]/20 border border-[#f5a623] text-[#f5a623] px-3 py-1 text-[0.72rem] font-chalet-condensed tracking-widest uppercase">
                        GPS GRID ACTIVE
                    </span>
                </div>
            </div>

            {/* Main Map + Intel Split Layout (4K Clean Solid Theme) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
                {/* Tactical Radar Map Screen (7 cols) */}
                <div className="lg:col-span-7 bg-[#0b0b0e] border border-white/25 relative min-h-[340px] sm:min-h-[380px] p-4 flex flex-col justify-between overflow-hidden">
                    {/* High-Contrast Crisp Grid Overlay */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-20"
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, rgba(255,255,255,0.18) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,0.18) 1px, transparent 1px)
                            `,
                            backgroundSize: '40px 40px',
                        }}
                    />

                    {/* Radar Concentric Circles */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-white/15 pointer-events-none" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[460px] h-[460px] rounded-full border border-white/10 pointer-events-none" />

                    {/* Top HUD inside map */}
                    <div className="relative z-10 flex justify-between items-center text-[0.75rem] font-chalet-condensed text-white/70 tracking-widest uppercase">
                        <div>SAT_NAV // SECTOR 05: UTTARAKHAND</div>
                        <div className="text-[#66CC66] font-bold">SIGNAL: 100% LOCK</div>
                    </div>

                    {/* SVG Route Lines connecting waypoints */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                        <polyline
                            points="72%,55% 65%,68% 50%,72% 28%,38%"
                            fill="none"
                            stroke="rgba(245, 166, 35, 0.6)"
                            strokeWidth="2.5"
                            strokeDasharray="6 4"
                        />
                        <polyline
                            points="28%,38% 88%,22%"
                            fill="none"
                            stroke="rgba(102, 204, 102, 0.5)"
                            strokeWidth="2.5"
                            strokeDasharray="4 4"
                        />
                    </svg>

                    {/* Waypoint Blips */}
                    {STUDY_WAYPOINTS.map((wp, idx) => {
                        const isSelected = wp.id === selectedId
                        return (
                            <button
                                key={wp.id}
                                onClick={() => setSelectedId(wp.id)}
                                style={{
                                    left: `${wp.coordinates.x}%`,
                                    top: `${wp.coordinates.y}%`,
                                }}
                                className={`absolute -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-1.5 p-1.5 transition-all duration-200 outline-none cursor-pointer ${
                                    isSelected ? 'scale-110' : 'hover:scale-105 opacity-85 hover:opacity-100'
                                }`}
                            >
                                {/* Blip Icon */}
                                <div
                                    className={`w-6 h-6 flex items-center justify-center font-chalet text-[0.72rem] font-bold border transition-all ${
                                        isSelected
                                            ? 'bg-[#f5a623] text-black border-white shadow-[0_0_12px_#f5a623]'
                                            : wp.type === 'FUTURE'
                                            ? 'bg-[#66CC66]/30 text-[#66CC66] border-[#66CC66]'
                                            : 'bg-[#15151a] text-white border-white/60 hover:border-white'
                                    }`}
                                >
                                    {idx + 1}
                                </div>

                                {/* Label tag */}
                                <div
                                    className={`px-2 py-0.5 text-[0.68rem] sm:text-[0.72rem] font-chalet-condensed uppercase tracking-wider whitespace-nowrap border ${
                                        isSelected
                                            ? 'bg-white text-black border-white font-bold'
                                            : 'bg-[#15151a] text-white/90 border-white/30'
                                    }`}
                                >
                                    {wp.institution.split(' ')[0]}
                                </div>
                            </button>
                        )
                    })}

                    {/* Bottom HUD inside map */}
                    <div className="relative z-10 flex justify-between items-end text-[0.72rem] font-chalet-condensed text-white/60 tracking-wider uppercase mt-auto pt-4 border-t border-white/15">
                        <div>
                            LAT: <span className="text-white font-bold">{activePoint.coordinates.lat}</span> // LONG:{' '}
                            <span className="text-white font-bold">{activePoint.coordinates.long}</span>
                        </div>
                        <div>CLICK WAYPOINTS 1-5 TO INSPECT</div>
                    </div>
                </div>

                {/* Waypoint Intel Dossier (5 cols) */}
                <div className="lg:col-span-5 bg-[#0e0e12] border-l-4 border-[#f5a623] border-y border-r border-white/20 p-5 flex flex-col justify-between">
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="font-chalet-condensed text-[0.75rem] text-[#f5a623] uppercase tracking-widest font-bold">
                                    [ WAYPOINT {STUDY_WAYPOINTS.findIndex((w) => w.id === activePoint.id) + 1} OF 5 ]
                                </span>
                                <h4 className="font-chalet text-[1.4rem] sm:text-[1.6rem] text-white uppercase leading-tight mt-0.5">
                                    {activePoint.institution}
                                </h4>
                                <p className="font-chalet-condensed text-[0.88rem] text-white/80 uppercase tracking-wider">
                                    {activePoint.location}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="bg-white/10 border border-white/30 text-white text-[0.72rem] font-chalet-condensed px-2.5 py-0.5 uppercase tracking-wider">
                                {activePoint.year}
                            </span>
                            <span className="bg-[#66CC66]/20 border border-[#66CC66] text-[#66CC66] text-[0.72rem] font-chalet-condensed px-2.5 py-0.5 uppercase tracking-wider font-bold">
                                {activePoint.status}
                            </span>
                        </div>

                        <p className="font-chalet-condensed text-[0.9rem] text-white/90 uppercase leading-relaxed tracking-wider border-t border-white/15 pt-3">
                            {activePoint.desc}
                        </p>

                        <div className="flex flex-col gap-1.5 mt-1">
                            <span className="font-chalet-condensed text-[0.72rem] text-white/60 uppercase tracking-widest">
                                KEY COMPETENCIES & MILESTONES:
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                                {activePoint.highlights.map((h, i) => (
                                    <span
                                        key={i}
                                        className="bg-white/10 border-l-2 border-[#f5a623] px-2.5 py-1 text-[0.74rem] font-chalet-condensed text-white uppercase tracking-wider"
                                    >
                                        {h}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Waypoint Selector Navigation Bar */}
                    <div className="grid grid-cols-5 gap-1.5 pt-4 mt-4 border-t border-white/15">
                        {STUDY_WAYPOINTS.map((wp, i) => {
                            const isSelected = wp.id === selectedId
                            return (
                                <button
                                    key={wp.id}
                                    onClick={() => setSelectedId(wp.id)}
                                    className={`py-1.5 text-[0.72rem] font-chalet-condensed uppercase tracking-wider text-center border transition-all ${
                                        isSelected
                                            ? 'bg-white text-black border-white font-bold'
                                            : 'bg-[#15151a] text-white/70 border-white/20 hover:border-white/50'
                                    }`}
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
