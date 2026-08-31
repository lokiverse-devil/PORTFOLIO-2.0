(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/MapSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STUDY_WAYPOINTS",
    ()=>STUDY_WAYPOINTS,
    "default",
    ()=>MapSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const STUDY_WAYPOINTS = [
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
        coordinates: {
            x: 72,
            y: 55,
            lat: '29.5971° N',
            long: '79.6591° E'
        },
        highlights: [
            'Science & Mathematics Foundation',
            'Analytical & Logic Building',
            'Academic Distinction'
        ]
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
        coordinates: {
            x: 65,
            y: 68,
            lat: '29.2183° N',
            long: '79.5130° E'
        },
        highlights: [
            'Computer Science Fundamentals',
            'Science Stream Curriculum',
            'Team Collaboration & Activities'
        ]
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
        coordinates: {
            x: 50,
            y: 72,
            lat: '29.2104° N',
            long: '78.9619° E'
        },
        highlights: [
            'C / C++ & Java Architecture',
            'Database Management & SQL',
            'Operating Systems & Networking'
        ]
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
        coordinates: {
            x: 28,
            y: 38,
            lat: '30.3165° N',
            long: '78.0322° E'
        },
        highlights: [
            'AI Engineering & MCP',
            'Full Stack Scalable Architecture',
            'Systems Design & IoT Innovation'
        ]
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
        coordinates: {
            x: 88,
            y: 22,
            lat: 'GLOBAL',
            long: 'EXPEDITIONS'
        },
        highlights: [
            'International Tech Collaborations',
            'High-Scale Distributed Engineering',
            'Global Product Impact'
        ]
    }
];
const TYPE_COLORS = {
    SCHOOL: '#7eb8f7',
    SECONDARY: '#c084fc',
    DIPLOMA: '#f5a623',
    BTECH: '#66CC66',
    FUTURE: '#34d399'
};
function MapSection() {
    _s();
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dehradun');
    const [radarAngle, setRadarAngle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const radarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const animRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activePoint = STUDY_WAYPOINTS.find((w)=>w.id === selectedId) || STUDY_WAYPOINTS[3];
    const accentColor = TYPE_COLORS[activePoint.type] || '#f5a623';
    // Radar sweep animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapSection.useEffect": ()=>{
            let last = performance.now();
            const animate = {
                "MapSection.useEffect.animate": (now)=>{
                    const delta = now - last;
                    last = now;
                    radarRef.current = (radarRef.current + delta * 0.12) % 360;
                    setRadarAngle(radarRef.current);
                    animRef.current = requestAnimationFrame(animate);
                }
            }["MapSection.useEffect.animate"];
            animRef.current = requestAnimationFrame(animate);
            return ({
                "MapSection.useEffect": ()=>{
                    if (animRef.current) cancelAnimationFrame(animRef.current);
                }
            })["MapSection.useEffect"];
        }
    }["MapSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3 pb-3",
                style: {
                    borderBottom: '1px solid rgba(255,255,255,0.12)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '10px',
                                            height: '10px',
                                            background: '#f5a623',
                                            boxShadow: '0 0 10px rgba(245,166,35,0.9), 0 0 20px rgba(245,166,35,0.5)',
                                            animation: 'gold-pulse 2.8s ease-in-out infinite'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 124,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                            fontSize: 'clamp(1.1rem, 2.2vw, 1.55rem)',
                                            letterSpacing: '0.12em',
                                            color: '#fff',
                                            textTransform: 'uppercase',
                                            textShadow: '0 0 20px rgba(255,255,255,0.1)'
                                        },
                                        children: "TERRITORY RADAR // ACADEMIC EXPEDITIONS"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 130,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 123,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.78rem',
                                    color: 'rgba(255,255,255,0.55)',
                                    letterSpacing: '0.25em',
                                    textTransform: 'uppercase',
                                    marginTop: '3px'
                                },
                                children: "UTTARAKHAND (INDIA) TO GLOBAL HORIZON // SELECT A WAYPOINT FOR DOSSIER"
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 141,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MapSection.tsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '6px',
                                    height: '6px',
                                    background: '#f5a623',
                                    boxShadow: '0 0 6px rgba(245,166,35,0.9)',
                                    animation: 'live-pulse 1.5s ease-in-out infinite'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 154,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.72rem',
                                    color: '#f5a623',
                                    background: 'rgba(245,166,35,0.08)',
                                    border: '1px solid rgba(245,166,35,0.35)',
                                    padding: '4px 12px',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    fontWeight: 700,
                                    textShadow: '0 0 8px rgba(245,166,35,0.5)'
                                },
                                children: "GPS GRID ACTIVE"
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 160,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MapSection.tsx",
                        lineNumber: 153,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MapSection.tsx",
                lineNumber: 120,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 relative overflow-hidden",
                        style: {
                            background: 'linear-gradient(135deg, #080c0b 0%, #050a08 100%)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            minHeight: '340px',
                            padding: '16px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 pointer-events-none",
                                style: {
                                    backgroundImage: `
                                linear-gradient(to right, rgba(102,204,102,0.07) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(102,204,102,0.07) 1px, transparent 1px)
                            `,
                                    backgroundSize: '40px 40px',
                                    opacity: 0.8
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 193,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 pointer-events-none",
                                style: {
                                    opacity: 0.04
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: 'absolute',
                                        inset: 0,
                                        backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.3) 0px, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 30px)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/MapSection.tsx",
                                    lineNumber: 207,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 206,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute pointer-events-none",
                                style: {
                                    top: '50%',
                                    left: '50%',
                                    width: '300px',
                                    height: '300px',
                                    marginLeft: '-150px',
                                    marginTop: '-150px',
                                    borderRadius: '50% !important',
                                    background: `conic-gradient(
                            from ${radarAngle}deg,
                            rgba(102,204,102,0.18) 0deg,
                            rgba(102,204,102,0.06) 20deg,
                            transparent 60deg,
                            transparent 360deg
                        )`,
                                    zIndex: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 215,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute pointer-events-none",
                                style: {
                                    top: '50%',
                                    left: '50%',
                                    width: '200px',
                                    height: '200px',
                                    marginLeft: '-100px',
                                    marginTop: '-100px',
                                    borderRadius: '50% !important',
                                    border: '1px solid rgba(102,204,102,0.15)',
                                    zIndex: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 231,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute pointer-events-none",
                                style: {
                                    top: '50%',
                                    left: '50%',
                                    width: '350px',
                                    height: '350px',
                                    marginLeft: '-175px',
                                    marginTop: '-175px',
                                    borderRadius: '50% !important',
                                    border: '1px solid rgba(102,204,102,0.08)',
                                    zIndex: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 239,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute pointer-events-none",
                                style: {
                                    top: '50%',
                                    left: '50%',
                                    width: '500px',
                                    height: '500px',
                                    marginLeft: '-250px',
                                    marginTop: '-250px',
                                    borderRadius: '50% !important',
                                    border: '1px solid rgba(102,204,102,0.05)',
                                    zIndex: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 247,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute pointer-events-none",
                                style: {
                                    top: '50%',
                                    left: '50%',
                                    width: '160px',
                                    height: '1px',
                                    transformOrigin: '0 50%',
                                    transform: `rotate(${radarAngle}deg)`,
                                    background: 'linear-gradient(to right, rgba(102,204,102,0.9), transparent)',
                                    boxShadow: '0 0 4px rgba(102,204,102,0.5)',
                                    zIndex: 2
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 257,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex justify-between items-center",
                                style: {
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.7rem',
                                    color: 'rgba(102,204,102,0.7)',
                                    letterSpacing: '0.22em',
                                    textTransform: 'uppercase',
                                    zIndex: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "SAT_NAV // SECTOR 05: UTTARAKHAND"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 276,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            color: '#66CC66',
                                            fontWeight: 700,
                                            textShadow: '0 0 8px rgba(102,204,102,0.6)'
                                        },
                                        children: "SIGNAL: 100% LOCK"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 277,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 268,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "absolute inset-0 w-full h-full pointer-events-none",
                                style: {
                                    zIndex: 3
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                                id: "glow-gold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                        stdDeviation: "2",
                                                        result: "coloredBlur"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/MapSection.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                                in: "coloredBlur"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/MapSection.tsx",
                                                                lineNumber: 291,
                                                                columnNumber: 42
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                                in: "SourceGraphic"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/MapSection.tsx",
                                                                lineNumber: 291,
                                                                columnNumber: 74
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/MapSection.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 289,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                                id: "glow-green",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                                        stdDeviation: "2",
                                                        result: "coloredBlur"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/MapSection.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMerge", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                                in: "coloredBlur"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/MapSection.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 42
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feMergeNode", {
                                                                in: "SourceGraphic"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/MapSection.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 74
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/MapSection.tsx",
                                                        lineNumber: 295,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 293,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 288,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "72%,55% 65%,68% 50%,72% 28%,38%",
                                        fill: "none",
                                        stroke: "rgba(245, 166, 35, 0.65)",
                                        strokeWidth: "2",
                                        strokeDasharray: "6 5",
                                        filter: "url(#glow-gold)",
                                        style: {
                                            animation: 'dash-march 0.7s linear infinite'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 299,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                        points: "28%,38% 88%,22%",
                                        fill: "none",
                                        stroke: "rgba(52, 211, 153, 0.7)",
                                        strokeWidth: "2",
                                        strokeDasharray: "4 5",
                                        filter: "url(#glow-green)",
                                        style: {
                                            animation: 'dash-march 0.5s linear infinite'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 309,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 287,
                                columnNumber: 21
                            }, this),
                            STUDY_WAYPOINTS.map((wp, idx)=>{
                                const isSelected = wp.id === selectedId;
                                const color = TYPE_COLORS[wp.type] || '#f5a623';
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedId(wp.id),
                                    style: {
                                        position: 'absolute',
                                        left: `${wp.coordinates.x}%`,
                                        top: `${wp.coordinates.y}%`,
                                        transform: 'translate(-50%, -50%)',
                                        zIndex: 20,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        padding: '4px',
                                        outline: 'none',
                                        transition: 'transform 0.2s ease'
                                    },
                                    children: [
                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                top: '50%',
                                                left: '12px',
                                                width: '24px',
                                                height: '24px',
                                                border: `1px solid ${color}`,
                                                borderRadius: '50% !important',
                                                animation: 'ping-ring 1.6s cubic-bezier(0, 0, 0.2, 1) infinite',
                                                pointerEvents: 'none',
                                                boxShadow: `0 0 8px ${color}50`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/MapSection.tsx",
                                            lineNumber: 347,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '24px',
                                                height: '24px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontFamily: 'ChaletLondon1960,"Bebas Neue",sans-serif',
                                                fontSize: '0.72rem',
                                                fontWeight: 700,
                                                background: isSelected ? color : wp.type === 'FUTURE' ? `${color}25` : 'rgba(15,15,20,0.92)',
                                                color: isSelected ? '#000' : color,
                                                border: `1px solid ${color}`,
                                                boxShadow: isSelected ? `0 0 14px ${color}, 0 0 28px ${color}50` : `0 0 6px ${color}50`,
                                                transition: 'all 0.2s ease',
                                                flexShrink: 0
                                            },
                                            children: idx + 1
                                        }, void 0, false, {
                                            fileName: "[project]/components/MapSection.tsx",
                                            lineNumber: 362,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                padding: '2px 8px',
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.68rem',
                                                letterSpacing: '0.15em',
                                                textTransform: 'uppercase',
                                                whiteSpace: 'nowrap',
                                                background: isSelected ? color : 'rgba(8,10,9,0.88)',
                                                color: isSelected ? '#000' : 'rgba(255,255,255,0.85)',
                                                border: `1px solid ${isSelected ? color : `${color}50`}`,
                                                boxShadow: isSelected ? `0 0 10px ${color}60` : 'none',
                                                fontWeight: isSelected ? 700 : 400
                                            },
                                            children: wp.institution.split(' ')[0]
                                        }, void 0, false, {
                                            fileName: "[project]/components/MapSection.tsx",
                                            lineNumber: 388,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, wp.id, true, {
                                    fileName: "[project]/components/MapSection.tsx",
                                    lineNumber: 325,
                                    columnNumber: 29
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex justify-between items-end pt-3 mt-auto",
                                style: {
                                    borderTop: '1px solid rgba(102,204,102,0.12)',
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.68rem',
                                    color: 'rgba(255,255,255,0.4)',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    zIndex: 10
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "LAT: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#66CC66',
                                                    fontWeight: 700
                                                },
                                                children: activePoint.coordinates.lat
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 418,
                                                columnNumber: 34
                                            }, this),
                                            ' ',
                                            "// LONG:",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#66CC66',
                                                    fontWeight: 700
                                                },
                                                children: activePoint.coordinates.long
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 420,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 417,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "CLICK WAYPOINTS 1–5 TO INSPECT"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 422,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 408,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MapSection.tsx",
                        lineNumber: 180,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 flex flex-col justify-between",
                        style: {
                            background: 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)',
                            borderTop: '1px solid rgba(255,255,255,0.1)',
                            borderRight: '1px solid rgba(255,255,255,0.1)',
                            borderBottom: '1px solid rgba(255,255,255,0.1)',
                            borderLeft: `3px solid ${accentColor}`,
                            padding: '18px 20px',
                            boxShadow: `inset 3px 0 20px ${accentColor}08`,
                            transition: 'border-left-color 0.3s ease, box-shadow 0.3s ease'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                                            paddingBottom: '12px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.7rem',
                                                    color: accentColor,
                                                    letterSpacing: '0.3em',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 700,
                                                    textShadow: `0 0 8px ${accentColor}80`,
                                                    display: 'block',
                                                    marginBottom: '6px'
                                                },
                                                children: [
                                                    "[ WAYPOINT ",
                                                    STUDY_WAYPOINTS.findIndex((w)=>w.id === activePoint.id) + 1,
                                                    " OF 5 ]"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 443,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                    fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                                                    color: '#fff',
                                                    letterSpacing: '0.08em',
                                                    textTransform: 'uppercase',
                                                    lineHeight: 1.1,
                                                    textShadow: '0 0 20px rgba(255,255,255,0.1)'
                                                },
                                                children: activePoint.institution
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 456,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.82rem',
                                                    color: 'rgba(255,255,255,0.6)',
                                                    letterSpacing: '0.2em',
                                                    textTransform: 'uppercase',
                                                    marginTop: '4px'
                                                },
                                                children: activePoint.location
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 467,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 442,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            flexWrap: 'wrap'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.68rem',
                                                    background: 'rgba(255,255,255,0.07)',
                                                    border: '1px solid rgba(255,255,255,0.2)',
                                                    color: 'rgba(255,255,255,0.8)',
                                                    padding: '3px 10px',
                                                    letterSpacing: '0.18em',
                                                    textTransform: 'uppercase'
                                                },
                                                children: activePoint.year
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 481,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.68rem',
                                                    background: `${accentColor}12`,
                                                    border: `1px solid ${accentColor}50`,
                                                    color: accentColor,
                                                    padding: '3px 10px',
                                                    letterSpacing: '0.18em',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 700,
                                                    textShadow: `0 0 6px ${accentColor}60`
                                                },
                                                children: activePoint.status
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 493,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 480,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.88rem',
                                            color: 'rgba(255,255,255,0.75)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.06em',
                                            lineHeight: '1.6',
                                            borderTop: '1px solid rgba(255,255,255,0.08)',
                                            paddingTop: '12px'
                                        },
                                        children: activePoint.desc
                                    }, void 0, false, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 510,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.68rem',
                                                    color: 'rgba(255,255,255,0.4)',
                                                    letterSpacing: '0.3em',
                                                    textTransform: 'uppercase',
                                                    display: 'block',
                                                    marginBottom: '8px'
                                                },
                                                children: "KEY COMPETENCIES & MILESTONES:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 525,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '6px'
                                                },
                                                children: activePoint.highlights.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            background: `${accentColor}0a`,
                                                            borderLeft: `2px solid ${accentColor}`,
                                                            padding: '4px 10px',
                                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                            fontSize: '0.72rem',
                                                            color: 'rgba(255,255,255,0.85)',
                                                            letterSpacing: '0.12em',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: h
                                                    }, i, false, {
                                                        fileName: "[project]/components/MapSection.tsx",
                                                        lineNumber: 538,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 536,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 524,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 440,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(5, 1fr)',
                                    gap: '6px',
                                    paddingTop: '16px',
                                    marginTop: '16px',
                                    borderTop: '1px solid rgba(255,255,255,0.08)'
                                },
                                children: STUDY_WAYPOINTS.map((wp, i)=>{
                                    const isSelected = wp.id === selectedId;
                                    const color = TYPE_COLORS[wp.type] || '#f5a623';
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSelectedId(wp.id),
                                        style: {
                                            padding: '6px 4px',
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.72rem',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            textAlign: 'center',
                                            background: isSelected ? color : 'rgba(15,15,20,0.6)',
                                            color: isSelected ? '#000' : 'rgba(255,255,255,0.55)',
                                            border: `1px solid ${isSelected ? color : 'rgba(255,255,255,0.12)'}`,
                                            cursor: 'pointer',
                                            fontWeight: isSelected ? 700 : 400,
                                            boxShadow: isSelected ? `0 0 12px ${color}60` : 'none',
                                            transition: 'all 0.18s ease',
                                            outline: 'none'
                                        },
                                        children: [
                                            "0",
                                            i + 1
                                        ]
                                    }, wp.id, true, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 571,
                                        columnNumber: 33
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 559,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MapSection.tsx",
                        lineNumber: 427,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MapSection.tsx",
                lineNumber: 178,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MapSection.tsx",
        lineNumber: 118,
        columnNumber: 9
    }, this);
}
_s(MapSection, "IovNR6tvLe9k5ojwWb7xmIlyfhg=");
_c = MapSection;
var _c;
__turbopack_context__.k.register(_c, "MapSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CharacterSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHARACTER_STATS",
    ()=>CHARACTER_STATS,
    "default",
    ()=>CharacterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
const CHARACTER_STATS = [
    {
        id: 'special',
        name: 'SPECIAL ABILITY',
        gameAlias: 'FAST LEARNING & PROBLEM SOLVING',
        level: 98,
        levelStr: '98%',
        category: 'CORE PERK',
        summary: 'Rapid assimilation of complex tech stacks, swift debugging under pressure, and translating requirements into clean production code.',
        skillsList: [
            'Fast-Paced Learning',
            'Algorithmic Problem Solving',
            'Root-Cause Debugging',
            'Technical Adaptability'
        ],
        projectProof: 'Mastered MCP and Next.js Turbopack architectures in record time for complex project builds.',
        color: '#f5a623'
    },
    {
        id: 'programming',
        name: 'PROGRAMMING & CORE',
        gameAlias: 'CORE ARSENAL',
        level: 94,
        levelStr: '94%',
        category: 'FOUNDATION',
        summary: 'Solid foundational computer science fundamentals with deep understanding of memory, OOP, and algorithms.',
        skillsList: [
            'C / C++',
            'Java',
            'Object-Oriented Design',
            'Data Structures & Algorithms'
        ],
        projectProof: 'High-performance algorithms and academic project backends built during Diploma and B.Tech CSE.',
        color: '#f5a623'
    },
    {
        id: 'fullstack',
        name: 'FULL-STACK DEVELOPMENT',
        gameAlias: 'STAMINA // ARCHITECTURE',
        level: 92,
        levelStr: '92%',
        category: 'FRONTEND & WEB',
        summary: 'Architecting fast, responsive, and intuitive web applications with modern component architecture and server actions.',
        skillsList: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'WebSockets',
            'REST APIs'
        ],
        projectProof: 'VibeChat (real-time chat protocol) and HTRACX (smart management portal).',
        color: '#66CC66'
    },
    {
        id: 'database',
        name: 'DATABASES & STORAGE',
        gameAlias: 'STRENGTH // DATA LAYER',
        level: 90,
        levelStr: '90%',
        category: 'BACKEND & DATA',
        summary: 'Designing relational schemas, relational queries, migrations, and low-latency data access layers.',
        skillsList: [
            'PostgreSQL',
            'SQL',
            'Supabase',
            'Database Normalization',
            'Indexing'
        ],
        projectProof: 'AIMS & HTRACX multi-table relational schema design and automated record integrity.',
        color: '#7eb8f7'
    },
    {
        id: 'iot',
        name: 'IOT & EMBEDDED SYSTEMS',
        gameAlias: 'STEALTH // HARDWARE SYNC',
        level: 88,
        levelStr: '88%',
        category: 'SYSTEMS & HARDWARE',
        summary: 'Connecting hardware sensors, telemetry streams, and microcontroller networks with cloud applications.',
        skillsList: [
            'IoT Automation',
            'Python Telemetry',
            'Microcontrollers',
            'Sensor Interfacing',
            'Hardware-to-Cloud Sync'
        ],
        projectProof: 'SmartClass X: IoT-enabled classroom with automated presence telemetry and environmental controls.',
        color: '#f87171'
    },
    {
        id: 'ai_mcp',
        name: 'AI & MCP INTEGRATION',
        gameAlias: 'TECH // MODEL CONTEXT PROTOCOL',
        level: 95,
        levelStr: '95%',
        category: 'AI & AGENTS',
        summary: 'Integrating Gemini AI, tool calling, structured outputs, and Model Context Protocol (MCP) servers for autonomous workflows.',
        skillsList: [
            'Model Context Protocol (MCP)',
            'Gemini AI',
            'Agent Tool Calling',
            'Prompt Engineering',
            'Structured JSON Output'
        ],
        projectProof: 'Autonomous tool workflows, custom MCP server integrations, and AI-powered assistants.',
        color: '#c084fc'
    },
    {
        id: 'leadership',
        name: 'LEADERSHIP & MANAGEMENT',
        gameAlias: 'DRIVING // TEAM LEAD',
        level: 92,
        levelStr: '92%',
        category: 'MANAGEMENT',
        summary: 'Guiding engineering teams, coordinating milestones, agile task breakdown, and pitching technical proposals.',
        skillsList: [
            'Team Lead & Coordination',
            'Project Management',
            'Agile & Sprint Planning',
            'Pitching & Technical Demos'
        ],
        projectProof: 'Led multi-developer college projects and successfully pitched solutions in tech showcases.',
        color: '#34d399'
    }
];
// Typewriter hook
function useTypewriter(text, speed = 18) {
    _s();
    const [displayed, setDisplayed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const prevText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTypewriter.useEffect": ()=>{
            if (text === prevText.current) return;
            prevText.current = text;
            setDisplayed('');
            setDone(false);
            let i = 0;
            const interval = setInterval({
                "useTypewriter.useEffect.interval": ()=>{
                    i++;
                    setDisplayed(text.slice(0, i));
                    if (i >= text.length) {
                        clearInterval(interval);
                        setDone(true);
                    }
                }
            }["useTypewriter.useEffect.interval"], speed);
            return ({
                "useTypewriter.useEffect": ()=>clearInterval(interval)
            })["useTypewriter.useEffect"];
        }
    }["useTypewriter.useEffect"], [
        text,
        speed
    ]);
    return {
        displayed,
        done
    };
}
_s(useTypewriter, "R8r6E0f53z1f9ezZ93YLzyAT4k8=");
// Animated level number
function AnimatedLevel({ target }) {
    _s1();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const hasRun = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedLevel.useEffect": ()=>{
            hasRun.current = false;
            setValue(0);
            const timeout = setTimeout({
                "AnimatedLevel.useEffect.timeout": ()=>{
                    let current = 0;
                    const step = Math.ceil(target / 30);
                    const interval = setInterval({
                        "AnimatedLevel.useEffect.timeout.interval": ()=>{
                            current += step;
                            if (current >= target) {
                                setValue(target);
                                clearInterval(interval);
                            } else {
                                setValue(current);
                            }
                        }
                    }["AnimatedLevel.useEffect.timeout.interval"], 22);
                    return ({
                        "AnimatedLevel.useEffect.timeout": ()=>clearInterval(interval)
                    })["AnimatedLevel.useEffect.timeout"];
                }
            }["AnimatedLevel.useEffect.timeout"], 80);
            return ({
                "AnimatedLevel.useEffect": ()=>clearTimeout(timeout)
            })["AnimatedLevel.useEffect"];
        }
    }["AnimatedLevel.useEffect"], [
        target
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            value,
            "%"
        ]
    }, void 0, true);
}
_s1(AnimatedLevel, "BjxWrfD190Qg2PusDCm7Wlf8zzY=");
_c = AnimatedLevel;
function CharacterSection() {
    _s2();
    const [selectedStatId, setSelectedStatId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('special');
    const [abilityActive, setAbilityActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [barKey, setBarKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const activeStat = CHARACTER_STATS.find((s)=>s.id === selectedStatId) || CHARACTER_STATS[0];
    const { displayed: typewriterText, done: typewriterDone } = useTypewriter(activeStat.summary, 16);
    const handleSelectStat = (id)=>{
        setSelectedStatId(id);
        setBarKey((k)=>k + 1);
    };
    const handleTriggerAbility = ()=>{
        setAbilityActive(true);
        setTimeout(()=>setAbilityActive(false), 3000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3 pb-3",
                style: {
                    borderBottom: '1px solid rgba(255,255,255,0.12)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '10px',
                                            height: '10px',
                                            background: '#66CC66',
                                            boxShadow: '0 0 10px rgba(102,204,102,0.9), 0 0 20px rgba(102,204,102,0.5)',
                                            animation: 'neon-breathe 2.8s ease-in-out infinite'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 183,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                            fontSize: 'clamp(1.1rem, 2.2vw, 1.55rem)',
                                            letterSpacing: '0.12em',
                                            color: '#fff',
                                            textTransform: 'uppercase',
                                            textShadow: '0 0 20px rgba(255,255,255,0.1)'
                                        },
                                        children: "CHARACTER DOSSIER // OM PANDEY"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 189,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CharacterSection.tsx",
                                lineNumber: 182,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.78rem',
                                    color: 'rgba(255,255,255,0.55)',
                                    letterSpacing: '0.25em',
                                    textTransform: 'uppercase',
                                    marginTop: '3px'
                                },
                                children: "PROTAGONIST STATS & PERKS // CLICK ANY ATTRIBUTE TO INSPECT"
                            }, void 0, false, {
                                fileName: "[project]/components/CharacterSection.tsx",
                                lineNumber: 200,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CharacterSection.tsx",
                        lineNumber: 181,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleTriggerAbility,
                        style: {
                            padding: '6px 16px',
                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                            fontSize: '0.72rem',
                            letterSpacing: '0.22em',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            outline: 'none',
                            transition: 'all 0.2s ease',
                            background: abilityActive ? 'linear-gradient(90deg, #f5a623, #ffcc44)' : 'rgba(102,204,102,0.1)',
                            border: abilityActive ? '1px solid #f5a623' : '1px solid rgba(102,204,102,0.45)',
                            color: abilityActive ? '#000' : '#66CC66',
                            fontWeight: abilityActive ? 700 : 400,
                            boxShadow: abilityActive ? '0 0 20px rgba(245,166,35,0.7), 0 0 40px rgba(245,166,35,0.3)' : '0 0 10px rgba(102,204,102,0.15)',
                            transform: abilityActive ? 'scale(1.03)' : 'none'
                        },
                        children: abilityActive ? '⚡ ABILITY OVERCLOCK ACTIVE' : '▶ TRIGGER SPECIAL ABILITY'
                    }, void 0, false, {
                        fileName: "[project]/components/CharacterSection.tsx",
                        lineNumber: 212,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CharacterSection.tsx",
                lineNumber: 179,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 flex flex-col gap-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>handleSelectStat('special'),
                                style: {
                                    padding: '14px 16px',
                                    background: selectedStatId === 'special' ? 'linear-gradient(135deg, #110f00 0%, #0e0c00 100%)' : 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)',
                                    border: '1px solid',
                                    borderColor: selectedStatId === 'special' ? 'rgba(245,166,35,0.5)' : 'rgba(255,255,255,0.1)',
                                    borderLeft: `3px solid #f5a623`,
                                    boxShadow: selectedStatId === 'special' ? '0 0 20px rgba(245,166,35,0.12), inset 0 0 20px rgba(245,166,35,0.04)' : 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    position: 'relative',
                                    overflow: 'hidden'
                                },
                                children: [
                                    selectedStatId === 'special' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'radial-gradient(ellipse at 20% 50%, rgba(245,166,35,0.06) 0%, transparent 70%)',
                                            pointerEvents: 'none'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 267,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: '8px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '8px',
                                                            height: '8px',
                                                            background: '#f5a623',
                                                            boxShadow: '0 0 6px rgba(245,166,35,0.9)',
                                                            animation: 'live-pulse 1.5s ease-in-out infinite'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CharacterSection.tsx",
                                                        lineNumber: 277,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                            fontSize: '1rem',
                                                            color: '#f5a623',
                                                            letterSpacing: '0.1em',
                                                            textTransform: 'uppercase',
                                                            textShadow: '0 0 12px rgba(245,166,35,0.5)'
                                                        },
                                                        children: "SPECIAL ABILITY // FAST LEARNING & PROBLEM SOLVING"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CharacterSection.tsx",
                                                        lineNumber: 283,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 276,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'Share Tech Mono,monospace',
                                                    fontSize: '0.88rem',
                                                    color: '#f5a623',
                                                    fontWeight: 700,
                                                    textShadow: '0 0 8px rgba(245,166,35,0.7)'
                                                },
                                                children: "98% MAX"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 294,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 275,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '100%',
                                            background: 'rgba(255,255,255,0.06)',
                                            height: '4px',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: abilityActive ? '100%' : '98%',
                                                height: '100%',
                                                background: 'linear-gradient(to right, #f5a623aa, #f5a623, #ffdd88)',
                                                boxShadow: '0 0 8px rgba(245,166,35,0.8)',
                                                transition: 'width 0.4s ease',
                                                position: 'relative'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    inset: 0,
                                                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                                                    backgroundSize: '200% 100%',
                                                    animation: 'shimmer-bar 1.8s ease-in-out infinite'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 321,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/CharacterSection.tsx",
                                            lineNumber: 313,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 306,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.78rem',
                                            color: 'rgba(255,255,255,0.65)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                            marginTop: '8px'
                                        },
                                        children: "Fast assimilation, algorithmic troubleshooting, and adaptive engineering under pressure."
                                    }, void 0, false, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 331,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CharacterSection.tsx",
                                lineNumber: 244,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                children: CHARACTER_STATS.filter((s)=>s.id !== 'special').map((stat)=>{
                                    const isSelected = stat.id === selectedStatId;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>handleSelectStat(stat.id),
                                        style: {
                                            padding: '12px 14px',
                                            background: isSelected ? `linear-gradient(135deg, #0e0e14 0%, ${stat.color}08 100%)` : 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)',
                                            border: '1px solid',
                                            borderColor: isSelected ? `${stat.color}50` : 'rgba(255,255,255,0.08)',
                                            borderLeft: `3px solid ${stat.color}`,
                                            boxShadow: isSelected ? `0 0 18px ${stat.color}12, inset 0 0 15px ${stat.color}05` : 'none',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '8px',
                                            position: 'relative',
                                            overflow: 'hidden'
                                        },
                                        onMouseEnter: (e)=>{
                                            if (!isSelected) {
                                                e.currentTarget.style.borderColor = `${stat.color}35`;
                                                e.currentTarget.style.boxShadow = `0 0 10px ${stat.color}08`;
                                            }
                                        },
                                        onMouseLeave: (e)=>{
                                            if (!isSelected) {
                                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                                e.currentTarget.style.borderLeftColor = stat.color;
                                                e.currentTarget.style.boxShadow = 'none';
                                            }
                                        },
                                        children: [
                                            isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    bottom: 0,
                                                    background: `radial-gradient(ellipse at 15% 50%, ${stat.color}08 0%, transparent 70%)`,
                                                    pointerEvents: 'none'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 385,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            gap: '6px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    width: '5px',
                                                                    height: '5px',
                                                                    background: stat.color,
                                                                    boxShadow: isSelected ? `0 0 5px ${stat.color}` : 'none'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CharacterSection.tsx",
                                                                lineNumber: 395,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                                    fontSize: '0.88rem',
                                                                    color: isSelected ? '#fff' : 'rgba(255,255,255,0.8)',
                                                                    letterSpacing: '0.08em',
                                                                    textTransform: 'uppercase'
                                                                },
                                                                children: stat.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CharacterSection.tsx",
                                                                lineNumber: 400,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/CharacterSection.tsx",
                                                        lineNumber: 394,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'Share Tech Mono,monospace',
                                                            fontSize: '0.8rem',
                                                            color: stat.color,
                                                            fontWeight: 700,
                                                            textShadow: isSelected ? `0 0 6px ${stat.color}` : 'none'
                                                        },
                                                        children: isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedLevel, {
                                                            target: stat.level
                                                        }, barKey, false, {
                                                            fileName: "[project]/components/CharacterSection.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 59
                                                        }, this) : stat.levelStr
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CharacterSection.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 393,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '100%',
                                                    background: 'rgba(255,255,255,0.06)',
                                                    height: '3px',
                                                    overflow: 'hidden',
                                                    position: 'relative'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: stat.levelStr,
                                                        height: '100%',
                                                        background: `linear-gradient(to right, ${stat.color}88, ${stat.color})`,
                                                        boxShadow: isSelected ? `0 0 6px ${stat.color}80` : 'none',
                                                        position: 'relative',
                                                        transition: 'box-shadow 0.3s ease'
                                                    },
                                                    children: isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            position: 'absolute',
                                                            inset: 0,
                                                            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                                                            backgroundSize: '200% 100%',
                                                            animation: 'shimmer-bar 2s ease-in-out infinite'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CharacterSection.tsx",
                                                        lineNumber: 438,
                                                        columnNumber: 49
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CharacterSection.tsx",
                                                    lineNumber: 429,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 422,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.68rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.15em'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'rgba(255,255,255,0.4)'
                                                        },
                                                        children: stat.gameAlias
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CharacterSection.tsx",
                                                        lineNumber: 458,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: isSelected ? stat.color : 'rgba(255,255,255,0.35)',
                                                            fontWeight: isSelected ? 700 : 400,
                                                            textShadow: isSelected ? `0 0 6px ${stat.color}` : 'none'
                                                        },
                                                        children: isSelected ? '● ACTIVE' : 'INSPECT ↗'
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CharacterSection.tsx",
                                                        lineNumber: 459,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 449,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, stat.id, true, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 348,
                                        columnNumber: 33
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/CharacterSection.tsx",
                                lineNumber: 344,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CharacterSection.tsx",
                        lineNumber: 242,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 flex flex-col justify-between",
                        style: {
                            background: 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)',
                            borderTop: '1px solid rgba(255,255,255,0.08)',
                            borderRight: '1px solid rgba(255,255,255,0.08)',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                            borderLeft: `3px solid ${activeStat.color}`,
                            padding: '18px 20px',
                            boxShadow: `inset 3px 0 25px ${activeStat.color}06`,
                            transition: 'border-left-color 0.3s ease, box-shadow 0.3s ease',
                            position: 'relative',
                            overflow: 'hidden'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: `radial-gradient(ellipse at 10% 30%, ${activeStat.color}06 0%, transparent 65%)`,
                                    pointerEvents: 'none',
                                    transition: 'background 0.4s ease'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/CharacterSection.tsx",
                                lineNumber: 490,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-3",
                                style: {
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                                            paddingBottom: '12px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.68rem',
                                                    color: activeStat.color,
                                                    letterSpacing: '0.3em',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 700,
                                                    textShadow: `0 0 8px ${activeStat.color}80`,
                                                    display: 'block',
                                                    marginBottom: '6px'
                                                },
                                                children: [
                                                    "[ ATTRIBUTE INTEL // ",
                                                    activeStat.category,
                                                    " ]"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 501,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'flex-end'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                style: {
                                                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                                    fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                                                                    color: '#fff',
                                                                    letterSpacing: '0.08em',
                                                                    textTransform: 'uppercase',
                                                                    textShadow: '0 0 20px rgba(255,255,255,0.1)'
                                                                },
                                                                children: activeStat.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CharacterSection.tsx",
                                                                lineNumber: 516,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                                    fontSize: '0.75rem',
                                                                    color: 'rgba(255,255,255,0.45)',
                                                                    letterSpacing: '0.2em',
                                                                    textTransform: 'uppercase',
                                                                    marginTop: '2px'
                                                                },
                                                                children: activeStat.gameAlias
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CharacterSection.tsx",
                                                                lineNumber: 526,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/CharacterSection.tsx",
                                                        lineNumber: 515,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'Share Tech Mono,monospace',
                                                            fontSize: '1.8rem',
                                                            color: activeStat.color,
                                                            fontWeight: 700,
                                                            textShadow: `0 0 16px ${activeStat.color}80`,
                                                            lineHeight: 1
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedLevel, {
                                                            target: activeStat.level
                                                        }, `dossier-${barKey}-${activeStat.id}`, false, {
                                                            fileName: "[project]/components/CharacterSection.tsx",
                                                            lineNumber: 545,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CharacterSection.tsx",
                                                        lineNumber: 537,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 514,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 500,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.65rem',
                                                    color: 'rgba(255,255,255,0.35)',
                                                    letterSpacing: '0.3em',
                                                    textTransform: 'uppercase',
                                                    display: 'block',
                                                    marginBottom: '6px'
                                                },
                                                children: "TACTICAL OVERVIEW:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 552,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.88rem',
                                                    color: 'rgba(255,255,255,0.85)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.06em',
                                                    lineHeight: '1.6',
                                                    minHeight: '4.2em'
                                                },
                                                children: [
                                                    typewriterText,
                                                    !typewriterDone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "typewriter-cursor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CharacterSection.tsx",
                                                        lineNumber: 573,
                                                        columnNumber: 53
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 563,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 551,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.65rem',
                                                    color: 'rgba(255,255,255,0.35)',
                                                    letterSpacing: '0.3em',
                                                    textTransform: 'uppercase',
                                                    display: 'block',
                                                    marginBottom: '8px'
                                                },
                                                children: "ARSENAL COMPONENTS:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 579,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '6px'
                                                },
                                                children: activeStat.skillsList.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            background: `${activeStat.color}0d`,
                                                            border: `1px solid ${activeStat.color}30`,
                                                            padding: '3px 10px',
                                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                            fontSize: '0.72rem',
                                                            color: 'rgba(255,255,255,0.85)',
                                                            letterSpacing: '0.1em',
                                                            textTransform: 'uppercase',
                                                            transition: 'all 0.15s ease',
                                                            cursor: 'default'
                                                        },
                                                        onMouseEnter: (e)=>{
                                                            e.currentTarget.style.background = `${activeStat.color}20`;
                                                            e.currentTarget.style.borderColor = `${activeStat.color}70`;
                                                            e.currentTarget.style.color = '#fff';
                                                            e.currentTarget.style.boxShadow = `0 0 8px ${activeStat.color}30`;
                                                        },
                                                        onMouseLeave: (e)=>{
                                                            e.currentTarget.style.background = `${activeStat.color}0d`;
                                                            e.currentTarget.style.borderColor = `${activeStat.color}30`;
                                                            e.currentTarget.style.color = 'rgba(255,255,255,0.85)';
                                                            e.currentTarget.style.boxShadow = 'none';
                                                        },
                                                        children: skill
                                                    }, i, false, {
                                                        fileName: "[project]/components/CharacterSection.tsx",
                                                        lineNumber: 592,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 590,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 578,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: `${activeStat.color}06`,
                                            border: `1px solid ${activeStat.color}20`,
                                            borderLeft: `2px solid ${activeStat.color}80`,
                                            padding: '12px 14px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.65rem',
                                                    color: activeStat.color,
                                                    letterSpacing: '0.3em',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 700,
                                                    textShadow: `0 0 6px ${activeStat.color}60`,
                                                    display: 'block',
                                                    marginBottom: '6px'
                                                },
                                                children: "FIELD APPLICATION // EVIDENCE:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 632,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.82rem',
                                                    color: 'rgba(255,255,255,0.8)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.06em',
                                                    lineHeight: '1.5'
                                                },
                                                children: activeStat.projectProof
                                            }, void 0, false, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 645,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 626,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CharacterSection.tsx",
                                lineNumber: 498,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
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
                                    position: 'relative'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'rgba(255,255,255,0.35)'
                                        },
                                        children: "STATUS: VERIFIED"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 672,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#66CC66',
                                            fontWeight: 700,
                                            textShadow: '0 0 6px rgba(102,204,102,0.6)'
                                        },
                                        children: "✓ READY FOR DEPLOYMENT"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 673,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CharacterSection.tsx",
                                lineNumber: 659,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CharacterSection.tsx",
                        lineNumber: 474,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CharacterSection.tsx",
                lineNumber: 240,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CharacterSection.tsx",
        lineNumber: 177,
        columnNumber: 9
    }, this);
}
_s2(CharacterSection, "KrY60OYlYTTCVhqoymctyX0R0G4=", false, function() {
    return [
        useTypewriter
    ];
});
_c1 = CharacterSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "AnimatedLevel");
__turbopack_context__.k.register(_c1, "CharacterSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LandingPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/howler/dist/howler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MapSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MapSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CharacterSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CharacterSection.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const USER_DATA = {
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
            tags: [
                'REACT',
                'NEXT.JS',
                'WEBSOCKETS',
                'TAILWIND'
            ],
            link: 'https://github.com/lokiverse-devil',
            status: 'MISSION PASSED',
            opNum: '01'
        },
        {
            title: 'HTRACX',
            category: 'ENTERPRISE SYSTEM',
            desc: 'Smart Hostel Management System automating room allocation, billing, analytics, and identity verification.',
            tags: [
                'FULL STACK',
                'DATABASE',
                'MANAGEMENT',
                'POSTGRES'
            ],
            link: 'https://github.com/lokiverse-devil',
            status: 'MISSION PASSED',
            opNum: '02'
        },
        {
            title: 'SmartClass X',
            category: 'IOT & AUTOMATION',
            desc: 'Intelligent IoT-enabled smart classroom system with automated telemetry, presence detection, and environment controls.',
            tags: [
                'IOT',
                'PYTHON',
                'EMBEDDED',
                'TELEMETRY'
            ],
            link: 'https://github.com/lokiverse-devil',
            status: 'MISSION PASSED',
            opNum: '03'
        },
        {
            title: 'AIMS',
            category: 'INSTITUTIONAL SUITE',
            desc: 'Academic Infrastructure Management System streamlining asset tracking, operations, and departmental workflows.',
            tags: [
                'POSTGRES',
                'SYSTEM DESIGN',
                'API SUITE',
                'SUPABASE'
            ],
            link: 'https://github.com/lokiverse-devil',
            status: 'MISSION PASSED',
            opNum: '04'
        }
    ],
    arsenal: [
        {
            name: 'C / C++',
            proficiency: '94%',
            profNum: 94,
            category: 'CORE',
            color: '#f5a623'
        },
        {
            name: 'JAVA & OOP',
            proficiency: '90%',
            profNum: 90,
            category: 'CORE',
            color: '#f5a623'
        },
        {
            name: 'REACT & NEXT.JS',
            proficiency: '95%',
            profNum: 95,
            category: 'FRONTEND',
            color: '#66CC66'
        },
        {
            name: 'TYPESCRIPT / JAVASCRIPT',
            proficiency: '92%',
            profNum: 92,
            category: 'FRONTEND',
            color: '#66CC66'
        },
        {
            name: 'SQL & POSTGRESQL',
            proficiency: '92%',
            profNum: 92,
            category: 'DATABASE',
            color: '#7eb8f7'
        },
        {
            name: 'SUPABASE & BACKEND',
            proficiency: '90%',
            profNum: 90,
            category: 'DATABASE',
            color: '#7eb8f7'
        },
        {
            name: 'MODEL CONTEXT PROTOCOL',
            proficiency: '95%',
            profNum: 95,
            category: 'AI TECH',
            color: '#c084fc'
        },
        {
            name: 'GEMINI AI INTEGRATION',
            proficiency: '94%',
            profNum: 94,
            category: 'AI TECH',
            color: '#c084fc'
        },
        {
            name: 'IOT & EMBEDDED TELEMETRY',
            proficiency: '88%',
            profNum: 88,
            category: 'HARDWARE',
            color: '#f87171'
        },
        {
            name: 'SYSTEM ARCHITECTURE',
            proficiency: '90%',
            profNum: 90,
            category: 'ENGINEERING',
            color: '#fbbf24'
        },
        {
            name: 'TEAM LEAD & MANAGEMENT',
            proficiency: '92%',
            profNum: 92,
            category: 'LEADERSHIP',
            color: '#34d399'
        },
        {
            name: 'PROJECT PITCHING & DEMOS',
            proficiency: '94%',
            profNum: 94,
            category: 'LEADERSHIP',
            color: '#34d399'
        }
    ]
};
const MENU_ITEMS = [
    {
        key: 'MAP',
        label: 'TERRITORY',
        shortcut: '1',
        icon: '◎'
    },
    {
        key: 'CHARACTER',
        label: 'CHARACTER',
        shortcut: '2',
        icon: '◈'
    },
    {
        key: 'PROJECTS',
        label: 'OPERATIONS',
        shortcut: '3',
        icon: '◆'
    },
    {
        key: 'ARSENAL',
        label: 'ARSENAL',
        shortcut: '4',
        icon: '◉'
    },
    {
        key: 'CONTACT',
        label: 'COMMS',
        shortcut: '5',
        icon: '◐'
    }
];
const CATEGORY_COLORS = {
    CORE: '#f5a623',
    FRONTEND: '#66CC66',
    DATABASE: '#7eb8f7',
    'AI TECH': '#c084fc',
    HARDWARE: '#f87171',
    ENGINEERING: '#fbbf24',
    LEADERSHIP: '#34d399'
};
// Animated counter component
function AnimatedCounter({ target, suffix = '' }) {
    _s();
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('$0');
    const hasAnimated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedCounter.useEffect": ()=>{
            if (hasAnimated.current) return;
            hasAnimated.current = true;
            const nums = target.replace(/[^0-9]/g, '');
            const end = parseInt(nums, 10);
            if (isNaN(end)) {
                setDisplay(target);
                return;
            }
            const prefix = target.startsWith('$') ? '$' : '';
            let start = 0;
            const duration = 1400;
            const step = 16;
            const increment = end / (duration / step);
            const timer = setInterval({
                "AnimatedCounter.useEffect.timer": ()=>{
                    start += increment;
                    if (start >= end) {
                        setDisplay(`${prefix}${end.toLocaleString()}${suffix}`);
                        clearInterval(timer);
                    } else {
                        setDisplay(`${prefix}${Math.floor(start).toLocaleString()}${suffix}`);
                    }
                }
            }["AnimatedCounter.useEffect.timer"], step);
            return ({
                "AnimatedCounter.useEffect": ()=>clearInterval(timer)
            })["AnimatedCounter.useEffect"];
        }
    }["AnimatedCounter.useEffect"], [
        target,
        suffix
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: display
    }, void 0, false);
}
_s(AnimatedCounter, "gyArr6nnlj00i4KkGbK8W1eqowA=");
_c = AnimatedCounter;
// Elegant wanted stars — smooth gold glow, no jarring blink
function WantedStarsHUD() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            gap: '5px',
            alignItems: 'center'
        },
        children: [
            0,
            1,
            2,
            3,
            4
        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 72 72",
                style: {
                    opacity: 0.92
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "36,4 44,28 70,28 49,44 57,68 36,52 15,68 23,44 2,28 28,28",
                    fill: "#d4960a",
                    style: {
                        filter: 'drop-shadow(0 0 3px rgba(212,150,10,0.7))'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 152,
                    columnNumber: 21
                }, this)
            }, i, false, {
                fileName: "[project]/components/LandingPage.tsx",
                lineNumber: 150,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/LandingPage.tsx",
        lineNumber: 148,
        columnNumber: 9
    }, this);
}
_c1 = WantedStarsHUD;
function LandingPage() {
    _s1();
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeItem, setActiveItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('MAP');
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ambienceMuted, setAmbienceMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ambienceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            setMounted(true);
            try {
                ambienceRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howl"]({
                    src: [
                        '/sounds/loading_ambience.mp3'
                    ],
                    loop: true,
                    volume: 0.28
                });
                ambienceRef.current.play();
            } catch (e) {
                console.warn('Audio notice in landing page:', e);
            }
            const updateTime = {
                "LandingPage.useEffect.updateTime": ()=>setTime(new Date().toLocaleTimeString('en-GB', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                    }))
            }["LandingPage.useEffect.updateTime"];
            updateTime();
            const tInterval = setInterval(updateTime, 1000);
            const handleKeyDown = {
                "LandingPage.useEffect.handleKeyDown": (e)=>{
                    if (e.key === '1') setActiveItem('MAP');
                    else if (e.key === '2') setActiveItem('CHARACTER');
                    else if (e.key === '3') setActiveItem('PROJECTS');
                    else if (e.key === '4') setActiveItem('ARSENAL');
                    else if (e.key === '5') setActiveItem('CONTACT');
                }
            }["LandingPage.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "LandingPage.useEffect": ()=>{
                    clearInterval(tInterval);
                    window.removeEventListener('keydown', handleKeyDown);
                    if (ambienceRef.current) {
                        ambienceRef.current.stop();
                    }
                }
            })["LandingPage.useEffect"];
        }
    }["LandingPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LandingPage.useEffect": ()=>{
            if (contentRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(contentRef.current, {
                    opacity: 0,
                    y: 14,
                    scale: 0.995
                }, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.28,
                    ease: 'power3.out'
                });
            }
        }
    }["LandingPage.useEffect"], [
        activeItem
    ]);
    const toggleAmbience = ()=>{
        if (ambienceRef.current) {
            if (ambienceMuted) {
                ambienceRef.current.play();
                setAmbienceMuted(false);
            } else {
                ambienceRef.current.pause();
                setAmbienceMuted(true);
            }
        }
    };
    const handleCopyEmail = ()=>{
        navigator.clipboard.writeText(USER_DATA.email);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2500);
    };
    const renderContent = ()=>{
        switch(activeItem){
            case 'MAP':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MapSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 241,
                    columnNumber: 24
                }, this);
            case 'CHARACTER':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CharacterSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 244,
                    columnNumber: 24
                }, this);
            case 'PROJECTS':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-5 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-between items-center gap-3 pb-3",
                            style: {
                                borderBottom: '1px solid rgba(255,255,255,0.12)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: '10px',
                                                        height: '10px',
                                                        background: '#f5a623',
                                                        boxShadow: '0 0 10px rgba(245,166,35,0.9), 0 0 20px rgba(245,166,35,0.5)',
                                                        animation: 'live-pulse 1.5s ease-in-out infinite'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LandingPage.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                        fontSize: 'clamp(1.1rem, 2.2vw, 1.55rem)',
                                                        letterSpacing: '0.12em',
                                                        color: '#fff',
                                                        textTransform: 'uppercase',
                                                        textShadow: '0 0 30px rgba(255,255,255,0.15)'
                                                    },
                                                    children: "ACTIVE OPERATIONS // MISSIONS DOSSIER"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LandingPage.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 253,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.78rem',
                                                color: 'rgba(255,255,255,0.55)',
                                                letterSpacing: '0.25em',
                                                textTransform: 'uppercase',
                                                marginTop: '3px'
                                            },
                                            children: "04 MAJOR OPERATIONS // CLICK ANY CARD TO LAUNCH REPOSITORY"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 271,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 252,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.72rem',
                                        color: '#66CC66',
                                        background: 'rgba(102,204,102,0.1)',
                                        border: '1px solid rgba(102,204,102,0.45)',
                                        padding: '4px 12px',
                                        letterSpacing: '0.2em',
                                        textTransform: 'uppercase',
                                        fontWeight: 700,
                                        textShadow: '0 0 8px rgba(102,204,102,0.6)'
                                    },
                                    children: "✓ ALL MISSIONS PASSED"
                                }, void 0, false, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 282,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 250,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                            children: USER_DATA.projects.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: p.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "card-shimmer-container group block",
                                    style: {
                                        background: 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)',
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        borderLeft: '3px solid #f5a623',
                                        padding: '20px 22px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.22s cubic-bezier(0.2,0.8,0.2,1)',
                                        cursor: 'pointer',
                                        textDecoration: 'none'
                                    },
                                    onMouseEnter: (e)=>{
                                        const el = e.currentTarget;
                                        el.style.background = 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)';
                                        el.style.borderColor = 'rgba(0,0,0,0.1)';
                                        el.style.borderLeftColor = '#f5a623';
                                        el.style.transform = 'translateY(-2px) scale(1.008)';
                                        el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.8), 0 0 25px rgba(245,166,35,0.2)';
                                    },
                                    onMouseLeave: (e)=>{
                                        const el = e.currentTarget;
                                        el.style.background = 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)';
                                        el.style.borderColor = 'rgba(255,255,255,0.12)';
                                        el.style.borderLeftColor = '#f5a623';
                                        el.style.transform = 'none';
                                        el.style.boxShadow = 'none';
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
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
                                                userSelect: 'none'
                                            },
                                            children: p.opNum
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 336,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'flex-start',
                                                marginBottom: '8px'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                                fontSize: '0.68rem',
                                                                color: 'rgba(255,255,255,0.45)',
                                                                letterSpacing: '0.3em',
                                                                textTransform: 'uppercase',
                                                                display: 'block'
                                                            },
                                                            className: "group-hover:!text-black/50",
                                                            children: [
                                                                "OPERATION ",
                                                                p.opNum
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/LandingPage.tsx",
                                                            lineNumber: 355,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            style: {
                                                                fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                                fontSize: 'clamp(1.15rem, 2vw, 1.4rem)',
                                                                color: '#fff',
                                                                letterSpacing: '0.1em',
                                                                textTransform: 'uppercase',
                                                                textShadow: '0 0 20px rgba(255,255,255,0.1)'
                                                            },
                                                            className: "group-hover:!text-black !text-shadow-none",
                                                            children: p.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/LandingPage.tsx",
                                                            lineNumber: 365,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/LandingPage.tsx",
                                                    lineNumber: 354,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                        fontSize: '0.68rem',
                                                        color: '#66CC66',
                                                        background: 'rgba(102,204,102,0.08)',
                                                        border: '1px solid rgba(102,204,102,0.35)',
                                                        padding: '3px 10px',
                                                        letterSpacing: '0.15em',
                                                        textTransform: 'uppercase',
                                                        fontWeight: 700,
                                                        whiteSpace: 'nowrap'
                                                    },
                                                    className: "group-hover:!text-black group-hover:!bg-transparent group-hover:!border-black/20",
                                                    children: p.category
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LandingPage.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 353,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.85rem',
                                                color: 'rgba(255,255,255,0.75)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.06em',
                                                lineHeight: '1.55',
                                                marginBottom: '12px'
                                            },
                                            className: "group-hover:!text-black/75",
                                            children: p.desc
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 392,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                gap: '6px',
                                                alignItems: 'center'
                                            },
                                            children: [
                                                p.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            background: 'rgba(255,255,255,0.07)',
                                                            border: '1px solid rgba(255,255,255,0.18)',
                                                            color: 'rgba(255,255,255,0.85)',
                                                            fontSize: '0.65rem',
                                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                            padding: '2px 8px',
                                                            letterSpacing: '0.2em',
                                                            textTransform: 'uppercase'
                                                        },
                                                        className: "group-hover:!bg-black/8 group-hover:!text-black group-hover:!border-black/15",
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/components/LandingPage.tsx",
                                                        lineNumber: 406,
                                                        columnNumber: 45
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        marginLeft: 'auto',
                                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                        fontSize: '0.65rem',
                                                        color: '#66CC66',
                                                        letterSpacing: '0.2em',
                                                        textTransform: 'uppercase',
                                                        fontWeight: 700
                                                    },
                                                    className: "group-hover:!text-black/60",
                                                    children: [
                                                        "✓ ",
                                                        p.status
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/LandingPage.tsx",
                                                    lineNumber: 423,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 404,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 301,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 299,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 248,
                    columnNumber: 21
                }, this);
            case 'ARSENAL':
                const groupedArsenal = USER_DATA.arsenal.reduce((acc, item)=>{
                    if (!acc[item.category]) acc[item.category] = [];
                    acc[item.category].push(item);
                    return acc;
                }, {});
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-5 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                borderBottom: '1px solid rgba(255,255,255,0.12)',
                                paddingBottom: '12px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-between items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '10px',
                                                            height: '10px',
                                                            background: '#66CC66',
                                                            boxShadow: '0 0 10px rgba(102,204,102,0.9), 0 0 20px rgba(102,204,102,0.5)',
                                                            animation: 'neon-breathe 2.8s ease-in-out infinite'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/LandingPage.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                            fontSize: 'clamp(1.1rem, 2.2vw, 1.55rem)',
                                                            letterSpacing: '0.12em',
                                                            color: '#fff',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: "CLASSIFIED ARSENAL // TECH CAPABILITIES"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/LandingPage.tsx",
                                                        lineNumber: 461,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 454,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.78rem',
                                                    color: 'rgba(255,255,255,0.55)',
                                                    letterSpacing: '0.25em',
                                                    textTransform: 'uppercase',
                                                    marginTop: '3px'
                                                },
                                                children: "CORE LANGUAGES, FRAMEWORKS, AI & SYSTEM ENGINEERING"
                                            }, void 0, false, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 471,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 453,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.72rem',
                                            color: 'rgba(255,255,255,0.6)',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase'
                                        },
                                        children: "12 LOADOUT ITEMS"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 482,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 452,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 451,
                            columnNumber: 25
                        }, this),
                        Object.entries(groupedArsenal).map(([category, items])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            marginBottom: '2px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '3px',
                                                    height: '16px',
                                                    background: CATEGORY_COLORS[category] || '#fff',
                                                    boxShadow: `0 0 8px ${CATEGORY_COLORS[category] || '#fff'}`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 504,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.72rem',
                                                    color: CATEGORY_COLORS[category] || '#fff',
                                                    letterSpacing: '0.3em',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 700,
                                                    textShadow: `0 0 8px ${CATEGORY_COLORS[category] || '#fff'}`
                                                },
                                                children: category
                                            }, void 0, false, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 510,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    height: '1px',
                                                    background: `linear-gradient(to right, ${CATEGORY_COLORS[category] || '#fff'}40, transparent)`
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 521,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 498,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                        children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: 'linear-gradient(135deg, #0e0e14 0%, #0b0b10 100%)',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    borderLeft: `3px solid ${item.color}`,
                                                    padding: '12px 14px',
                                                    transition: 'all 0.18s ease',
                                                    position: 'relative',
                                                    overflow: 'hidden'
                                                },
                                                onMouseEnter: (e)=>{
                                                    e.currentTarget.style.borderColor = item.color;
                                                    e.currentTarget.style.boxShadow = `0 0 20px ${item.color}20, inset 0 0 20px ${item.color}05`;
                                                    e.currentTarget.style.background = `linear-gradient(135deg, #0f0f16 0%, ${item.color}06 100%)`;
                                                },
                                                onMouseLeave: (e)=>{
                                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                                    e.currentTarget.style.borderLeftColor = item.color;
                                                    e.currentTarget.style.boxShadow = 'none';
                                                    e.currentTarget.style.background = 'linear-gradient(135deg, #0e0e14 0%, #0b0b10 100%)';
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            marginBottom: '8px'
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: '8px'
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            width: '5px',
                                                                            height: '5px',
                                                                            background: item.color,
                                                                            boxShadow: `0 0 5px ${item.color}`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/LandingPage.tsx",
                                                                        lineNumber: 555,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                                            fontSize: '0.9rem',
                                                                            color: '#fff',
                                                                            letterSpacing: '0.08em',
                                                                            textTransform: 'uppercase'
                                                                        },
                                                                        children: item.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/LandingPage.tsx",
                                                                        lineNumber: 560,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/LandingPage.tsx",
                                                                lineNumber: 554,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: 'Share Tech Mono,monospace',
                                                                    fontSize: '0.85rem',
                                                                    color: item.color,
                                                                    fontWeight: 700,
                                                                    textShadow: `0 0 8px ${item.color}`
                                                                },
                                                                children: item.proficiency
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/LandingPage.tsx",
                                                                lineNumber: 570,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/LandingPage.tsx",
                                                        lineNumber: 553,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '100%',
                                                            background: 'rgba(255,255,255,0.06)',
                                                            height: '3px',
                                                            position: 'relative',
                                                            overflow: 'hidden'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: item.proficiency,
                                                                height: '100%',
                                                                background: `linear-gradient(to right, ${item.color}aa, ${item.color})`,
                                                                boxShadow: `0 0 6px ${item.color}80`,
                                                                position: 'relative'
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    position: 'absolute',
                                                                    inset: 0,
                                                                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 50%, transparent 100%)',
                                                                    backgroundSize: '200% 100%',
                                                                    animation: 'shimmer-bar 2.5s ease-in-out infinite'
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/LandingPage.tsx",
                                                                lineNumber: 599,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/LandingPage.tsx",
                                                            lineNumber: 589,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/LandingPage.tsx",
                                                        lineNumber: 582,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 530,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 528,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, category, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 496,
                                columnNumber: 29
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 449,
                    columnNumber: 21
                }, this);
            case 'CONTACT':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-5 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                borderBottom: '1px solid rgba(255,255,255,0.12)',
                                paddingBottom: '12px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '10px',
                                                height: '10px',
                                                background: '#f5a623',
                                                boxShadow: '0 0 10px rgba(245,166,35,0.9)',
                                                animation: 'gold-pulse 2.8s ease-in-out infinite'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 622,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                fontSize: 'clamp(1.1rem, 2.2vw, 1.55rem)',
                                                letterSpacing: '0.12em',
                                                color: '#fff',
                                                textTransform: 'uppercase'
                                            },
                                            children: "ENCRYPTED COMMS // DIRECT DISPATCH"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 628,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 621,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.78rem',
                                        color: 'rgba(255,255,255,0.55)',
                                        letterSpacing: '0.25em',
                                        textTransform: 'uppercase',
                                        marginTop: '3px'
                                    },
                                    children: "TRANSMIT HIGH-PRIORITY CONTRACTS & FULL-TIME PROPOSALS"
                                }, void 0, false, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 638,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 620,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '10px 16px',
                                background: 'rgba(102,204,102,0.05)',
                                border: '1px solid rgba(102,204,102,0.2)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        gap: '3px',
                                        height: '18px'
                                    },
                                    children: [
                                        4,
                                        7,
                                        11,
                                        15,
                                        18
                                    ].map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '3px',
                                                height: `${h}px`,
                                                background: '#66CC66',
                                                boxShadow: '0 0 4px rgba(102,204,102,0.8)',
                                                opacity: 0.85 + i * 0.03
                                            }
                                        }, i, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 661,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 659,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.72rem',
                                        color: '#66CC66',
                                        letterSpacing: '0.25em',
                                        textTransform: 'uppercase',
                                        fontWeight: 700,
                                        textShadow: '0 0 8px rgba(102,204,102,0.6)'
                                    },
                                    children: "SIGNAL STRENGTH: MAXIMUM // OPEN FOR OPPORTUNITIES"
                                }, void 0, false, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 670,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "live-dot",
                                    style: {
                                        marginLeft: 'auto',
                                        width: '8px',
                                        height: '8px',
                                        background: '#66CC66',
                                        borderRadius: '50% !important',
                                        boxShadow: '0 0 8px rgba(102,204,102,0.8)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 681,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 651,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: handleCopyEmail,
                                    className: "card-shimmer-container group cursor-pointer",
                                    style: {
                                        background: 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)',
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        borderLeft: '3px solid #f5a623',
                                        padding: '20px',
                                        transition: 'all 0.22s cubic-bezier(0.2,0.8,0.2,1)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = '#fff';
                                        e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.7), 0 0 20px rgba(245,166,35,0.25)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.transform = 'none';
                                    },
                                    children: [
                                        copied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'rgba(102,204,102,0.15)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                zIndex: 5,
                                                animation: 'slide-in-up 0.3s ease'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",sans-serif',
                                                    fontSize: '1.1rem',
                                                    color: '#66CC66',
                                                    letterSpacing: '0.2em',
                                                    textShadow: '0 0 20px rgba(102,204,102,0.8)'
                                                },
                                                children: "✓ TRANSMISSION SENT"
                                            }, void 0, false, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 728,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 718,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.68rem',
                                                color: 'rgba(255,255,255,0.45)',
                                                letterSpacing: '0.3em',
                                                textTransform: 'uppercase',
                                                marginBottom: '6px'
                                            },
                                            className: "group-hover:!text-black/50",
                                            children: "◎ DIRECT EMAIL // DISPATCH"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 739,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                fontSize: '0.88rem',
                                                color: '#fff',
                                                letterSpacing: '0.05em',
                                                textTransform: 'uppercase',
                                                wordBreak: 'break-all'
                                            },
                                            className: "group-hover:!text-black",
                                            children: USER_DATA.email
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 749,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.72rem',
                                                color: '#f5a623',
                                                textTransform: 'uppercase',
                                                marginTop: '12px',
                                                fontWeight: 700,
                                                letterSpacing: '0.2em'
                                            },
                                            className: "group-hover:!text-black/60",
                                            children: "[ CLICK TO COPY ]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 759,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 694,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: USER_DATA.github,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "card-shimmer-container group block",
                                    style: {
                                        background: 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)',
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        borderLeft: '3px solid #fff',
                                        padding: '20px',
                                        transition: 'all 0.22s cubic-bezier(0.2,0.8,0.2,1)',
                                        textDecoration: 'none',
                                        overflow: 'hidden'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = '#fff';
                                        e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.7)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.transform = 'none';
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.68rem',
                                                color: 'rgba(255,255,255,0.45)',
                                                letterSpacing: '0.3em',
                                                textTransform: 'uppercase',
                                                marginBottom: '6px'
                                            },
                                            className: "group-hover:!text-black/50",
                                            children: "◆ GITHUB REPOSITORIES"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 798,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                fontSize: '1.1rem',
                                                color: '#fff',
                                                letterSpacing: '0.08em',
                                                textTransform: 'uppercase'
                                            },
                                            className: "group-hover:!text-black",
                                            children: "lokiverse-devil"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 808,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.72rem',
                                                color: 'rgba(255,255,255,0.6)',
                                                textTransform: 'uppercase',
                                                marginTop: '12px',
                                                fontWeight: 700,
                                                letterSpacing: '0.2em'
                                            },
                                            className: "group-hover:!text-black/60",
                                            children: "[ OPEN DOSSIER ↗ ]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 817,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 773,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: USER_DATA.linkedin,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "card-shimmer-container group block",
                                    style: {
                                        background: 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)',
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        borderLeft: '3px solid #0077B5',
                                        padding: '20px',
                                        transition: 'all 0.22s cubic-bezier(0.2,0.8,0.2,1)',
                                        textDecoration: 'none',
                                        overflow: 'hidden'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = '#fff';
                                        e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.7), 0 0 20px rgba(0,119,181,0.2)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = 'linear-gradient(135deg, #0e0e14 0%, #0a0a0f 100%)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.transform = 'none';
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.68rem',
                                                color: 'rgba(255,255,255,0.45)',
                                                letterSpacing: '0.3em',
                                                textTransform: 'uppercase',
                                                marginBottom: '6px'
                                            },
                                            className: "group-hover:!text-black/50",
                                            children: "◐ LINKEDIN NETWORK"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 856,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                fontSize: '1.1rem',
                                                color: '#fff',
                                                letterSpacing: '0.08em',
                                                textTransform: 'uppercase'
                                            },
                                            className: "group-hover:!text-black",
                                            children: "Om Pandey"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 866,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.72rem',
                                                color: 'rgba(255,255,255,0.6)',
                                                textTransform: 'uppercase',
                                                marginTop: '12px',
                                                fontWeight: 700,
                                                letterSpacing: '0.2em'
                                            },
                                            className: "group-hover:!text-black/60",
                                            children: "[ CONNECT ON NETWORK ↗ ]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 875,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 831,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 692,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 618,
                    columnNumber: 21
                }, this);
            default:
                return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            background: 'radial-gradient(ellipse at 50% 0%, #111008 0%, #09090a 55%, #050505 100%)',
            overflow: 'hidden',
            zIndex: 100,
            userSelect: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: '-15%',
                    left: '25%',
                    width: '50%',
                    height: '60%',
                    background: 'radial-gradient(ellipse at center, rgba(200, 150, 20, 0.06) 0%, transparent 65%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/components/LandingPage.tsx",
                lineNumber: 908,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/LandingPage.tsx",
                lineNumber: 918,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    padding: '0 32px',
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 130,
                    background: '#080807',
                    borderBottom: '1px solid rgba(212,150,10,0.18)',
                    boxShadow: '0 1px 0 rgba(212,150,10,0.06)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
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
                                    flexShrink: 0
                                },
                                children: USER_DATA.rank
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 939,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                            fontSize: '1.2rem',
                                            letterSpacing: '0.18em',
                                            color: '#f0ede8',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px'
                                        },
                                        children: [
                                            USER_DATA.name,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontSize: '0.6rem',
                                                    background: '#66CC66',
                                                    color: '#000',
                                                    padding: '2px 7px',
                                                    fontWeight: 900,
                                                    letterSpacing: '0.12em'
                                                },
                                                children: "PRO"
                                            }, void 0, false, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 967,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 957,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.7rem',
                                            letterSpacing: '0.28em',
                                            color: 'rgba(240,237,232,0.45)',
                                            marginTop: '2px'
                                        },
                                        children: USER_DATA.tagline
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 978,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 956,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 937,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '22px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WantedStarsHUD, {}, void 0, false, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 994,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 993,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'right'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'Share Tech Mono,monospace',
                                            fontSize: '1.15rem',
                                            color: '#66CC66',
                                            letterSpacing: '0.04em',
                                            lineHeight: 1.1
                                        },
                                        children: mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                            target: USER_DATA.cash
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 1006,
                                            columnNumber: 40
                                        }, this) : USER_DATA.cash
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 999,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.66rem',
                                            color: 'rgba(255,255,255,0.35)',
                                            letterSpacing: '0.18em',
                                            marginTop: '1px'
                                        },
                                        className: "hidden sm:block",
                                        children: [
                                            "BANK: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.58)'
                                                },
                                                children: mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                                    target: USER_DATA.bank
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LandingPage.tsx",
                                                    lineNumber: 1016,
                                                    columnNumber: 44
                                                }, this) : USER_DATA.bank
                                            }, void 0, false, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 1015,
                                                columnNumber: 35
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 1008,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 998,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'Share Tech Mono,monospace',
                                    fontSize: '0.95rem',
                                    letterSpacing: '0.08em',
                                    color: 'rgba(240,237,232,0.75)',
                                    borderLeft: '1px solid rgba(255,255,255,0.1)',
                                    paddingLeft: '18px',
                                    minWidth: '68px'
                                },
                                children: time
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1022,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleAmbience,
                                title: ambienceMuted ? 'Unmute Audio' : 'Mute Audio',
                                style: {
                                    background: 'transparent',
                                    border: `1px solid ${ambienceMuted ? 'rgba(255,255,255,0.15)' : 'rgba(102,204,102,0.35)'}`,
                                    color: ambienceMuted ? 'rgba(255,255,255,0.25)' : 'rgba(102,204,102,0.85)',
                                    padding: '4px 12px',
                                    cursor: 'pointer',
                                    fontSize: '0.66rem',
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    transition: 'all 0.18s ease'
                                },
                                children: ambienceMuted ? '⊗ MUTED' : '◉ AUDIO'
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1035,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 991,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LandingPage.tsx",
                lineNumber: 921,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '80px 20px 48px',
                    zIndex: 120
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '1px',
                            marginBottom: '12px',
                            zIndex: 125,
                            maxWidth: '1200px',
                            width: '100%',
                            background: '#070706',
                            borderBottom: '1px solid rgba(212,150,10,0.12)'
                        },
                        children: MENU_ITEMS.map((item)=>{
                            const isActive = activeItem === item.key;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveItem(item.key),
                                style: {
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
                                    justifyContent: 'center'
                                },
                                onMouseEnter: (e)=>{
                                    if (!isActive) {
                                        e.currentTarget.style.color = '#f0ede8';
                                        e.currentTarget.style.background = 'rgba(240,237,232,0.04)';
                                        e.currentTarget.style.borderTopColor = 'rgba(212,150,10,0.35)';
                                    }
                                },
                                onMouseLeave: (e)=>{
                                    if (!isActive) {
                                        e.currentTarget.style.color = 'rgba(240,237,232,0.45)';
                                        e.currentTarget.style.background = 'transparent';
                                        e.currentTarget.style.borderTopColor = 'transparent';
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '0.9em',
                                            opacity: isActive ? 0.7 : 0.3
                                        },
                                        children: item.icon
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 1124,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 1130,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '0.6em',
                                            opacity: 0.35,
                                            background: 'rgba(255,255,255,0.07)',
                                            padding: '1px 4px',
                                            letterSpacing: '0.04em'
                                        },
                                        children: item.shortcut
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 1131,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, item.key, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1087,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 1070,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: contentRef,
                        className: "landing-content-panel corner-bracket",
                        style: {
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
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: '-1px',
                                    right: '-1px',
                                    width: '14px',
                                    height: '14px',
                                    borderTop: '1px solid rgba(212,150,10,0.6)',
                                    borderRight: '1px solid rgba(212,150,10,0.6)',
                                    pointerEvents: 'none',
                                    zIndex: 2
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1164,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    bottom: '-1px',
                                    left: '-1px',
                                    width: '14px',
                                    height: '14px',
                                    borderBottom: '1px solid rgba(212,150,10,0.6)',
                                    borderLeft: '1px solid rgba(212,150,10,0.6)',
                                    pointerEvents: 'none',
                                    zIndex: 2
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1175,
                                columnNumber: 21
                            }, this),
                            renderContent()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 1146,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LandingPage.tsx",
                lineNumber: 1057,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
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
                    borderTop: '1px solid rgba(212,150,10,0.1)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "[KEYS 1-5: SELECT TABS]"
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1212,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "[CLICK ATTRIBUTES FOR INTEL]"
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1213,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 1211,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '14px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "live-dot",
                                        style: {
                                            width: '6px',
                                            height: '6px',
                                            background: '#66CC66',
                                            borderRadius: '50% !important',
                                            boxShadow: '0 0 6px rgba(102,204,102,0.8)'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 1219,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#66CC66',
                                            fontWeight: 700
                                        },
                                        children: "LIVE"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 1226,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1218,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'rgba(255,255,255,0.2)'
                                },
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1228,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "OM PANDEY // PORTFOLIO 2.0"
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1229,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'rgba(255,255,255,0.2)'
                                },
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1230,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'rgba(245,166,35,0.6)'
                                },
                                children: "BUILD v2.0"
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1231,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 1216,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LandingPage.tsx",
                lineNumber: 1192,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LandingPage.tsx",
        lineNumber: 897,
        columnNumber: 9
    }, this);
}
_s1(LandingPage, "YugpRs9fYGOznK9M+o3NJX1foas=");
_c2 = LandingPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AnimatedCounter");
__turbopack_context__.k.register(_c1, "WantedStarsHUD");
__turbopack_context__.k.register(_c2, "LandingPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LandingPage.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/LandingPage.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_14tx82m._.js.map