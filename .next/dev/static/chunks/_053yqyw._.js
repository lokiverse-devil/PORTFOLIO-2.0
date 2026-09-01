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
        year: 'Early Schooling',
        status: 'COMPLETED // DISTINCTION',
        desc: 'Early schooling in Almora, Uttarakhand. Built a strong foundation in science, mathematics, and curiosity for computing.',
        coordinates: {
            x: 72,
            y: 55,
            lat: '29.5971° N',
            long: '79.6591° E'
        },
        highlights: [
            'Science & Mathematics',
            'Analytical Thinking',
            'Academic Honors'
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
        status: 'COMPLETED // FIRST DIVISION',
        desc: 'High school education in Haldwani focused on core science and computer science fundamentals.',
        coordinates: {
            x: 65,
            y: 68,
            lat: '29.2183° N',
            long: '79.5130° E'
        },
        highlights: [
            'Computer Science Basics',
            'Science Stream Curriculum',
            'Team Activities'
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
        desc: 'Hands-on diploma in Computer Science Engineering. Learned C, C++, Java, SQL, and computer networking.',
        coordinates: {
            x: 50,
            y: 72,
            lat: '29.2104° N',
            long: '78.9619° E'
        },
        highlights: [
            'C / C++ & Java Programming',
            'Database Design & SQL',
            'Operating Systems & Networks'
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
        desc: 'Undergraduate degree in Computer Science at Veer Madho Singh Bhandari Uttarakhand Technical University. Focusing on full-stack web architectures, distributed systems, and AI tools.',
        coordinates: {
            x: 28,
            y: 38,
            lat: '30.3165° N',
            long: '78.0322° E'
        },
        highlights: [
            'Full Stack Web Architecture',
            'AI & Agent Workflows',
            'System Design & IoT Projects'
        ]
    },
    {
        id: 'future',
        title: 'GLOBAL OPPORTUNITIES',
        institution: 'Worldwide Tech Missions',
        location: 'Remote / Global',
        state: 'Worldwide',
        type: 'FUTURE',
        year: 'Current & Future',
        status: 'OPEN FOR ROLES',
        desc: 'Ready to build high-impact software solutions worldwide — open for software engineering roles, internships, and collaborative projects.',
        coordinates: {
            x: 88,
            y: 22,
            lat: 'GLOBAL',
            long: 'REMOTE'
        },
        highlights: [
            'Full-Time Software Roles',
            'Internships & Contracts',
            'Open-Source Contributions'
        ]
    }
];
const TYPE_COLORS = {
    SCHOOL: '#94a3b8',
    SECONDARY: '#cbd5e1',
    DIPLOMA: '#e2e8f0',
    BTECH: '#66CC66',
    FUTURE: '#4ade80'
};
function MapSection() {
    _s();
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dehradun');
    const [radarAngle, setRadarAngle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const radarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const animRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const activePoint = STUDY_WAYPOINTS.find((w)=>w.id === selectedId) || STUDY_WAYPOINTS[3];
    const accentColor = TYPE_COLORS[activePoint.type] || '#ffffff';
    const handleSelectWaypoint = (id)=>{
        setSelectedId(id);
    };
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
                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '3px',
                                            height: '14px',
                                            background: '#ffffff'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 132,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                            fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                                            letterSpacing: '0.14em',
                                            color: '#fff',
                                            textTransform: 'uppercase'
                                        },
                                        children: "TERRITORY RADAR // ACADEMIC DOSSIER"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 139,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 131,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.78rem',
                                    color: 'rgba(255,255,255,0.45)',
                                    letterSpacing: '0.22em',
                                    textTransform: 'uppercase',
                                    marginTop: '3px'
                                },
                                children: "UTTARAKHAND TO GLOBAL HORIZON // SELECT A WAYPOINT FOR DETAILS"
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 151,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MapSection.tsx",
                        lineNumber: 130,
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
                                    background: '#66CC66',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 6px rgba(102,204,102,0.8)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 166,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.72rem',
                                    color: '#66CC66',
                                    background: 'rgba(102,204,102,0.06)',
                                    border: '1px solid rgba(102,204,102,0.3)',
                                    padding: '4px 12px',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    fontWeight: 700
                                },
                                children: "GPS GRID ACTIVE"
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 175,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MapSection.tsx",
                        lineNumber: 165,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MapSection.tsx",
                lineNumber: 126,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 relative overflow-hidden",
                        style: {
                            background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                            border: '1px solid rgba(255,255,255,0.1)',
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
                                linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
                            `,
                                    backgroundSize: '40px 40px',
                                    opacity: 0.7
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 209,
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
                            rgba(102,204,102,0.14) 0deg,
                            rgba(102,204,102,0.04) 20deg,
                            transparent 60deg,
                            transparent 360deg
                        )`,
                                    zIndex: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 222,
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
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    zIndex: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 244,
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
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    zIndex: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 258,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-2 left-1/2 -translate-x-1/2 font-mono text-xs pointer-events-none",
                                style: {
                                    color: 'rgba(255,255,255,0.25)',
                                    zIndex: 2
                                },
                                children: "N"
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 274,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-xs pointer-events-none",
                                style: {
                                    color: 'rgba(255,255,255,0.25)',
                                    zIndex: 2
                                },
                                children: "S"
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 280,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-2 top-1/2 -translate-y-1/2 font-mono text-xs pointer-events-none",
                                style: {
                                    color: 'rgba(255,255,255,0.25)',
                                    zIndex: 2
                                },
                                children: "W"
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 286,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute right-2 top-1/2 -translate-y-1/2 font-mono text-xs pointer-events-none",
                                style: {
                                    color: 'rgba(255,255,255,0.25)',
                                    zIndex: 2
                                },
                                children: "E"
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 292,
                                columnNumber: 21
                            }, this),
                            STUDY_WAYPOINTS.map((wp)=>{
                                const isSelected = wp.id === selectedId;
                                const color = TYPE_COLORS[wp.type] || '#ffffff';
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleSelectWaypoint(wp.id),
                                    title: `${wp.institution} (${wp.location})`,
                                    style: {
                                        position: 'absolute',
                                        left: `${wp.coordinates.x}%`,
                                        top: `${wp.coordinates.y}%`,
                                        transform: 'translate(-50%, -50%)',
                                        zIndex: isSelected ? 20 : 10,
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        padding: '6px',
                                        outline: 'none'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: isSelected ? '13px' : '9px',
                                                height: isSelected ? '13px' : '9px',
                                                borderRadius: '50%',
                                                background: color,
                                                boxShadow: isSelected ? `0 0 10px ${color}, 0 0 20px ${color}` : `0 0 5px ${color}60`,
                                                border: '2px solid #000',
                                                transition: 'all 0.2s ease'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/MapSection.tsx",
                                            lineNumber: 321,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                top: '100%',
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                marginTop: '4px',
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.62rem',
                                                letterSpacing: '0.15em',
                                                textTransform: 'uppercase',
                                                whiteSpace: 'nowrap',
                                                color: isSelected ? '#fff' : 'rgba(255,255,255,0.5)',
                                                fontWeight: isSelected ? 700 : 400,
                                                textShadow: '0 1px 4px #000',
                                                pointerEvents: 'none'
                                            },
                                            children: wp.institution.split(' ')[0]
                                        }, void 0, false, {
                                            fileName: "[project]/components/MapSection.tsx",
                                            lineNumber: 334,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, wp.id, true, {
                                    fileName: "[project]/components/MapSection.tsx",
                                    lineNumber: 304,
                                    columnNumber: 29
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex justify-between items-end pt-3 mt-auto",
                                style: {
                                    borderTop: '1px solid rgba(255,255,255,0.08)',
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
                                            "LAT:",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#fff',
                                                    fontWeight: 700
                                                },
                                                children: activePoint.coordinates.lat
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 373,
                                                columnNumber: 29
                                            }, this),
                                            ' ',
                                            "// LONG:",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#fff',
                                                    fontWeight: 700
                                                },
                                                children: activePoint.coordinates.long
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 377,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 371,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "CLICK WAYPOINTS 1–5 TO INSPECT"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 381,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 359,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MapSection.tsx",
                        lineNumber: 196,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 flex flex-col justify-between",
                        style: {
                            background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderLeft: `3px solid ${accentColor}`,
                            padding: '18px 20px',
                            transition: 'border-left-color 0.3s ease'
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
                                                lineNumber: 399,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                style: {
                                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                    fontSize: 'clamp(1.2rem, 2vw, 1.45rem)',
                                                    color: '#fff',
                                                    letterSpacing: '0.08em',
                                                    textTransform: 'uppercase',
                                                    lineHeight: 1.1
                                                },
                                                children: activePoint.institution
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 413,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.82rem',
                                                    color: 'rgba(255,255,255,0.5)',
                                                    letterSpacing: '0.2em',
                                                    textTransform: 'uppercase',
                                                    marginTop: '4px'
                                                },
                                                children: activePoint.location
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 425,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 398,
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
                                                    background: 'rgba(255,255,255,0.06)',
                                                    border: '1px solid rgba(255,255,255,0.15)',
                                                    color: 'rgba(255,255,255,0.75)',
                                                    padding: '3px 10px',
                                                    letterSpacing: '0.18em',
                                                    textTransform: 'uppercase'
                                                },
                                                children: activePoint.year
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 441,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.68rem',
                                                    background: `${accentColor}12`,
                                                    border: `1px solid ${accentColor}40`,
                                                    color: accentColor,
                                                    padding: '3px 10px',
                                                    letterSpacing: '0.18em',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 700
                                                },
                                                children: activePoint.status
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 455,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 440,
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
                                        lineNumber: 473,
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
                                                children: "KEY HIGHLIGHTS:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 490,
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
                                                            background: 'rgba(255,255,255,0.04)',
                                                            borderLeft: `2px solid ${accentColor}`,
                                                            padding: '4px 10px',
                                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                            fontSize: '0.72rem',
                                                            color: 'rgba(255,255,255,0.8)',
                                                            letterSpacing: '0.12em',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: h
                                                    }, i, false, {
                                                        fileName: "[project]/components/MapSection.tsx",
                                                        lineNumber: 505,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/MapSection.tsx",
                                                lineNumber: 503,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 489,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 396,
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
                                    const color = TYPE_COLORS[wp.type] || '#ffffff';
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectWaypoint(wp.id),
                                        style: {
                                            padding: '6px 4px',
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.72rem',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            textAlign: 'center',
                                            background: isSelected ? color : 'rgba(255,255,255,0.04)',
                                            color: isSelected ? '#000' : 'rgba(255,255,255,0.5)',
                                            border: `1px solid ${isSelected ? color : 'rgba(255,255,255,0.1)'}`,
                                            cursor: 'pointer',
                                            fontWeight: isSelected ? 700 : 400,
                                            transition: 'all 0.18s ease',
                                            outline: 'none'
                                        },
                                        children: [
                                            "0",
                                            i + 1
                                        ]
                                    }, wp.id, true, {
                                        fileName: "[project]/components/MapSection.tsx",
                                        lineNumber: 540,
                                        columnNumber: 33
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/MapSection.tsx",
                                lineNumber: 526,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MapSection.tsx",
                        lineNumber: 386,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MapSection.tsx",
                lineNumber: 194,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MapSection.tsx",
        lineNumber: 124,
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
        summary: 'I pick up new tools and frameworks fast, debug problems under pressure, and turn messy requirements into clean working software.',
        skillsList: [
            'Fast-Paced Learning',
            'Algorithmic Problem Solving',
            'Root-Cause Debugging',
            'Technical Adaptability'
        ],
        projectProof: 'Built complex Next.js, IoT, and AI agent architectures with rapid turnaround.',
        color: '#ffffff'
    },
    {
        id: 'programming',
        name: 'PROGRAMMING & CORE',
        gameAlias: 'CORE ARSENAL',
        level: 94,
        levelStr: '94%',
        category: 'FOUNDATION',
        summary: 'Strong foundation in data structures, algorithms, memory management, and object-oriented programming with C, C++, and Java.',
        skillsList: [
            'C / C++',
            'Java',
            'Object-Oriented Design',
            'Data Structures & Algorithms'
        ],
        projectProof: 'Developed core systems, academic algorithms, and backend utilities during Diploma and B.Tech.',
        color: '#cbd5e1'
    },
    {
        id: 'fullstack',
        name: 'FULL-STACK DEVELOPMENT',
        gameAlias: 'STAMINA // ARCHITECTURE',
        level: 92,
        levelStr: '92%',
        category: 'FRONTEND & WEB',
        summary: 'Building fast, responsive web applications with React, Next.js, and TypeScript that feel smooth, modern, and enjoyable to use.',
        skillsList: [
            'React',
            'Next.js',
            'TypeScript',
            'Tailwind CSS',
            'WebSockets',
            'REST APIs'
        ],
        projectProof: 'Created VibeChat (real-time chat) and HTRACX (hostel management portal).',
        color: '#66CC66'
    },
    {
        id: 'database',
        name: 'DATABASES & STORAGE',
        gameAlias: 'STRENGTH // DATA LAYER',
        level: 90,
        levelStr: '90%',
        category: 'BACKEND & DATA',
        summary: 'Designing clear database schemas, writing efficient SQL queries, and managing reliable data flows with PostgreSQL and Supabase.',
        skillsList: [
            'PostgreSQL',
            'SQL',
            'Supabase',
            'Database Normalization',
            'Indexing'
        ],
        projectProof: 'Architected multi-table relational databases and automated integrity rules for AIMS and HTRACX.',
        color: '#94a3b8'
    },
    {
        id: 'iot',
        name: 'IOT & EMBEDDED SYSTEMS',
        gameAlias: 'STEALTH // HARDWARE SYNC',
        level: 88,
        levelStr: '88%',
        category: 'SYSTEMS & HARDWARE',
        summary: 'Hooking up hardware sensors, microcontrollers, and Python code to stream real-time telemetry straight into web dashboards.',
        skillsList: [
            'IoT Automation',
            'Python Telemetry',
            'Microcontrollers',
            'Sensor Interfacing',
            'Hardware-to-Cloud Sync'
        ],
        projectProof: 'Built SmartClass X to automate classroom lights, fans, and attendance tracking.',
        color: '#a1a1aa'
    },
    {
        id: 'ai_mcp',
        name: 'AI & MCP INTEGRATION',
        gameAlias: 'TECH // MODEL CONTEXT PROTOCOL',
        level: 95,
        levelStr: '95%',
        category: 'AI & AGENTS',
        summary: 'Connecting Gemini AI and Model Context Protocol (MCP) servers to give assistants access to real tools, APIs, and custom databases.',
        skillsList: [
            'Model Context Protocol (MCP)',
            'Gemini AI',
            'Agent Tool Calling',
            'Prompt Engineering',
            'Structured JSON Output'
        ],
        projectProof: 'Implemented custom MCP servers and autonomous agent tool workflows for developer tools.',
        color: '#e2e8f0'
    },
    {
        id: 'leadership',
        name: 'LEADERSHIP & MANAGEMENT',
        gameAlias: 'DRIVING // TEAM LEAD',
        level: 92,
        levelStr: '92%',
        category: 'MANAGEMENT',
        summary: 'Leading development teams, planning sprints, coordinating development, and presenting clear working prototypes to audiences.',
        skillsList: [
            'Team Leadership',
            'Project Coordination',
            'Agile & Sprint Planning',
            'Demos & Presentations'
        ],
        projectProof: 'Led student development teams in college projects and pitched working software in showcases.',
        color: '#4ade80'
    }
];
// Typewriter hook
function useTypewriter(text, speed = 16) {
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
// Segmented GTA Stat Bar
function SegmentedStatBar({ level, color, totalSegments = 10 }) {
    const filledCount = Math.round(level / 100 * totalSegments);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: 'flex',
            gap: '3px',
            alignItems: 'center',
            width: '100%'
        },
        children: Array.from({
            length: totalSegments
        }).map((_, i)=>{
            const isFilled = i < filledCount;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    height: '6px',
                    background: isFilled ? color : 'rgba(255,255,255,0.06)',
                    border: `1px solid ${isFilled ? color + '80' : 'rgba(255,255,255,0.08)'}`,
                    transition: `background 0.3s ease ${i * 30}ms`
                }
            }, i, false, {
                fileName: "[project]/components/CharacterSection.tsx",
                lineNumber: 187,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/CharacterSection.tsx",
        lineNumber: 183,
        columnNumber: 9
    }, this);
}
_c = SegmentedStatBar;
// Animated level number
function AnimatedLevel({ target }) {
    _s1();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimatedLevel.useEffect": ()=>{
            setValue(0);
            const timeout = setTimeout({
                "AnimatedLevel.useEffect.timeout": ()=>{
                    let current = 0;
                    const step = Math.ceil(target / 25);
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
                    }["AnimatedLevel.useEffect.timeout.interval"], 20);
                    return ({
                        "AnimatedLevel.useEffect.timeout": ()=>clearInterval(interval)
                    })["AnimatedLevel.useEffect.timeout"];
                }
            }["AnimatedLevel.useEffect.timeout"], 60);
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
_s1(AnimatedLevel, "QEMGEmq5Rfwf2KLuWFF3dZYTA2c=");
_c1 = AnimatedLevel;
function CharacterSection() {
    _s2();
    const [selectedStatId, setSelectedStatId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('special');
    const [abilityActive, setAbilityActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const activeStat = CHARACTER_STATS.find((s)=>s.id === selectedStatId) || CHARACTER_STATS[0];
    const { displayed: typewriterText } = useTypewriter(activeStat.summary, 14);
    const handleSelectStat = (id)=>{
        setSelectedStatId(id);
    };
    const handleTriggerAbility = ()=>{
        setAbilityActive(true);
        setTimeout(()=>setAbilityActive(false), 2400);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4 w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-3 pb-3",
                style: {
                    borderBottom: '1px solid rgba(255,255,255,0.1)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '3px',
                                            height: '14px',
                                            background: '#ffffff'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 255,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                            fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                                            letterSpacing: '0.14em',
                                            color: '#fff',
                                            textTransform: 'uppercase'
                                        },
                                        children: "CHARACTER DOSSIER // SKILLS & CAPABILITIES"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 262,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CharacterSection.tsx",
                                lineNumber: 254,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    fontSize: '0.78rem',
                                    color: 'rgba(255,255,255,0.45)',
                                    letterSpacing: '0.22em',
                                    textTransform: 'uppercase',
                                    marginTop: '3px'
                                },
                                children: "PROTAGONIST ATTRIBUTES // SELECT ANY STAT BELOW TO INSPECT"
                            }, void 0, false, {
                                fileName: "[project]/components/CharacterSection.tsx",
                                lineNumber: 274,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CharacterSection.tsx",
                        lineNumber: 253,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleTriggerAbility,
                        disabled: abilityActive,
                        style: {
                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                            fontSize: '0.82rem',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            padding: '6px 18px',
                            background: abilityActive ? '#ffffff' : 'transparent',
                            color: abilityActive ? '#000000' : '#ffffff',
                            border: '1px solid rgba(255,255,255,0.3)',
                            cursor: abilityActive ? 'default' : 'pointer',
                            transition: 'all 0.2s ease'
                        },
                        children: abilityActive ? '● ABILITY ACTIVE' : '⚡ SPECIAL ABILITY'
                    }, void 0, false, {
                        fileName: "[project]/components/CharacterSection.tsx",
                        lineNumber: 288,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CharacterSection.tsx",
                lineNumber: 249,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-7 flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: ()=>handleSelectStat('special'),
                                style: {
                                    background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    borderLeft: '3px solid #ffffff',
                                    padding: '16px 18px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    boxShadow: selectedStatId === 'special' ? '0 0 20px rgba(255,255,255,0.08)' : 'none'
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
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                        fontSize: '1rem',
                                                        color: '#ffffff',
                                                        letterSpacing: '0.1em',
                                                        textTransform: 'uppercase'
                                                    },
                                                    children: "SPECIAL ABILITY // FAST LEARNING & PROBLEM SOLVING"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CharacterSection.tsx",
                                                    lineNumber: 337,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 336,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'Share Tech Mono,monospace',
                                                    fontSize: '0.88rem',
                                                    color: '#ffffff',
                                                    fontWeight: 700
                                                },
                                                children: "98% MAX"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 349,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 328,
                                        columnNumber: 25
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
                                                width: abilityActive ? '100%' : '98%',
                                                height: '100%',
                                                background: '#ffffff',
                                                boxShadow: '0 0 8px rgba(255,255,255,0.7)',
                                                transition: 'width 0.4s ease'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/CharacterSection.tsx",
                                            lineNumber: 371,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 362,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.8rem',
                                            color: 'rgba(255,255,255,0.6)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em',
                                            marginTop: '8px'
                                        },
                                        children: "Rapid learning, root-cause troubleshooting, and clean code implementation."
                                    }, void 0, false, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 382,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CharacterSection.tsx",
                                lineNumber: 313,
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
                                            background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                                            border: '1px solid',
                                            borderColor: isSelected ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.08)',
                                            borderLeft: `3px solid ${stat.color}`,
                                            cursor: 'pointer',
                                            transition: 'all 0.18s ease',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '8px'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                            fontSize: '0.9rem',
                                                            color: isSelected ? '#fff' : 'rgba(255,255,255,0.75)',
                                                            letterSpacing: '0.08em',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: stat.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CharacterSection.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'Share Tech Mono,monospace',
                                                            fontSize: '0.85rem',
                                                            color: stat.color,
                                                            fontWeight: 700
                                                        },
                                                        children: stat.levelStr
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CharacterSection.tsx",
                                                        lineNumber: 437,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 419,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SegmentedStatBar, {
                                                level: stat.level,
                                                color: stat.color,
                                                totalSegments: 10
                                            }, void 0, false, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 450,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, stat.id, true, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 401,
                                        columnNumber: 33
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/components/CharacterSection.tsx",
                                lineNumber: 397,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CharacterSection.tsx",
                        lineNumber: 311,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-5 flex flex-col justify-between",
                        style: {
                            background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderLeft: `3px solid ${activeStat.color}`,
                            padding: '20px',
                            transition: 'border-left-color 0.3s ease'
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
                                                    fontSize: '0.68rem',
                                                    color: activeStat.color,
                                                    letterSpacing: '0.3em',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 700,
                                                    display: 'block',
                                                    marginBottom: '4px'
                                                },
                                                children: [
                                                    "[ ",
                                                    activeStat.category,
                                                    " ]"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 475,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                            fontSize: 'clamp(1.25rem, 2vw, 1.55rem)',
                                                            color: '#fff',
                                                            letterSpacing: '0.08em',
                                                            textTransform: 'uppercase',
                                                            lineHeight: 1.1
                                                        },
                                                        children: activeStat.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CharacterSection.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            fontFamily: 'Share Tech Mono,monospace',
                                                            fontSize: '1.4rem',
                                                            color: activeStat.color,
                                                            fontWeight: 700,
                                                            lineHeight: 1
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedLevel, {
                                                            target: activeStat.level
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/CharacterSection.tsx",
                                                            lineNumber: 511,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CharacterSection.tsx",
                                                        lineNumber: 502,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 489,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.78rem',
                                                    color: 'rgba(255,255,255,0.45)',
                                                    letterSpacing: '0.2em',
                                                    textTransform: 'uppercase',
                                                    marginTop: '4px'
                                                },
                                                children: activeStat.gameAlias
                                            }, void 0, false, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 514,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 474,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            minHeight: '68px',
                                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                                            paddingBottom: '12px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.88rem',
                                                color: 'rgba(255,255,255,0.85)',
                                                letterSpacing: '0.05em',
                                                textTransform: 'uppercase',
                                                lineHeight: '1.6',
                                                margin: 0
                                            },
                                            children: typewriterText
                                        }, void 0, false, {
                                            fileName: "[project]/components/CharacterSection.tsx",
                                            lineNumber: 536,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 529,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.65rem',
                                                    color: 'rgba(255,255,255,0.4)',
                                                    letterSpacing: '0.3em',
                                                    textTransform: 'uppercase',
                                                    display: 'block',
                                                    marginBottom: '8px'
                                                },
                                                children: "KEY TECHNICAL COMPETENCIES:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 553,
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
                                                            background: 'rgba(255,255,255,0.04)',
                                                            borderLeft: `2px solid ${activeStat.color}`,
                                                            padding: '4px 10px',
                                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                            fontSize: '0.72rem',
                                                            color: 'rgba(255,255,255,0.8)',
                                                            letterSpacing: '0.12em',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: skill
                                                    }, i, false, {
                                                        fileName: "[project]/components/CharacterSection.tsx",
                                                        lineNumber: 568,
                                                        columnNumber: 37
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 566,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 552,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.08)',
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
                                                    display: 'block',
                                                    marginBottom: '6px'
                                                },
                                                children: "REAL-WORLD EVIDENCE:"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 595,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.84rem',
                                                    color: 'rgba(255,255,255,0.85)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.06em',
                                                    lineHeight: '1.5'
                                                },
                                                children: activeStat.projectProof
                                            }, void 0, false, {
                                                fileName: "[project]/components/CharacterSection.tsx",
                                                lineNumber: 609,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 588,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CharacterSection.tsx",
                                lineNumber: 472,
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
                                    letterSpacing: '0.2em'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: 'rgba(255,255,255,0.35)'
                                        },
                                        children: "STATUS: VERIFIED"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 639,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#66CC66',
                                            fontWeight: 700
                                        },
                                        children: "✓ PRODUCTION READY"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CharacterSection.tsx",
                                        lineNumber: 640,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CharacterSection.tsx",
                                lineNumber: 625,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CharacterSection.tsx",
                        lineNumber: 462,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CharacterSection.tsx",
                lineNumber: 309,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CharacterSection.tsx",
        lineNumber: 247,
        columnNumber: 9
    }, this);
}
_s2(CharacterSection, "FLBpugtaVcw9ou22tp6yikdYSCs=", false, function() {
    return [
        useTypewriter
    ];
});
_c2 = CharacterSection;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SegmentedStatBar");
__turbopack_context__.k.register(_c1, "AnimatedLevel");
__turbopack_context__.k.register(_c2, "CharacterSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/sounds.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSounds",
    ()=>getSounds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/howler/dist/howler.js [app-client] (ecmascript)");
;
let soundsInstance = null;
const getSounds = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!soundsInstance) {
        soundsInstance = {
            siren: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howl"]({
                src: [
                    '/sounds/siren_loop.mp3'
                ],
                volume: 0.5,
                preload: true
            }),
            ambience: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howl"]({
                src: [
                    '/sounds/loading_ambience.mp3'
                ],
                loop: true,
                volume: 0.35,
                preload: true
            }),
            passed: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howl"]({
                src: [
                    '/sounds/mission_passed.mp3'
                ],
                volume: 1.0,
                preload: true
            }),
            failed: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howl"]({
                src: [
                    '/sounds/mission_failed.mp3'
                ],
                volume: 1.0,
                preload: true
            })
        };
    }
    return soundsInstance;
};
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sounds.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const USER_DATA = {
    name: 'OM PANDEY',
    tagline: 'FULL STACK DEVELOPER & AI ENGINEER',
    rank: 100,
    cash: '$2,450,000',
    bank: '$18,920,000',
    email: 'ompandey2341@gmail.com',
    github: 'https://github.com/lokiverse-devil',
    linkedin: 'https://linkedin.com/in/om-pandey-1b3b3b3b3',
    projects: [
        {
            title: 'VibeChat',
            category: 'REAL-TIME MESSAGING',
            desc: 'A fast, real-time messaging app built with Next.js and WebSockets for instant chat and media sharing.',
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
            category: 'HOSTEL MANAGEMENT',
            desc: 'A digital portal that simplifies hostel room allotments, student records, and fee tracking.',
            tags: [
                'FULL STACK',
                'POSTGRESQL',
                'SUPABASE',
                'NEXT.JS'
            ],
            link: 'https://github.com/lokiverse-devil',
            status: 'MISSION PASSED',
            opNum: '02'
        },
        {
            title: 'SmartClass X',
            category: 'IOT AUTOMATION',
            desc: 'An automated classroom setup using IoT sensors to manage smart lighting, fans, and attendance.',
            tags: [
                'PYTHON',
                'IOT',
                'EMBEDDED',
                'TELEMETRY'
            ],
            link: 'https://github.com/lokiverse-devil',
            status: 'MISSION PASSED',
            opNum: '03'
        },
        {
            title: 'AIMS',
            category: 'CAMPUS ASSET SUITE',
            desc: 'An infrastructure and asset tracking platform helping colleges manage lab inventory and staff requests.',
            tags: [
                'SYSTEM DESIGN',
                'POSTGRESQL',
                'SUPABASE',
                'REST APIS'
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
            name: 'DATA STRUCTURES & ALGORITHMS',
            proficiency: '92%',
            profNum: 92,
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
            name: 'TYPESCRIPT & JAVASCRIPT',
            proficiency: '92%',
            profNum: 92,
            category: 'FRONTEND',
            color: '#66CC66'
        },
        {
            name: 'TAILWIND CSS',
            proficiency: '94%',
            profNum: 94,
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
            name: 'MODEL CONTEXT PROTOCOL (MCP)',
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
            name: 'TEAM LEADERSHIP & DEMOS',
            proficiency: '92%',
            profNum: 92,
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
    LEADERSHIP: '#34d399'
};
// Animated cash counter component
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
            const duration = 1200;
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
// 5 Wanted Stars HUD with gold radiance
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
                    opacity: 0.95
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "36,4 44,28 70,28 49,44 57,68 36,52 15,68 23,44 2,28 28,28",
                    fill: "#f5a623",
                    style: {
                        filter: 'drop-shadow(0 0 4px rgba(245,166,35,0.85))'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 154,
                    columnNumber: 21
                }, this)
            }, i, false, {
                fileName: "[project]/components/LandingPage.tsx",
                lineNumber: 153,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/LandingPage.tsx",
        lineNumber: 151,
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
                    volume: 0.25
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
                    if (e.key === '1') {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuSelect"])();
                        setActiveItem('MAP');
                    } else if (e.key === '2') {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuSelect"])();
                        setActiveItem('CHARACTER');
                    } else if (e.key === '3') {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuSelect"])();
                        setActiveItem('PROJECTS');
                    } else if (e.key === '4') {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuSelect"])();
                        setActiveItem('ARSENAL');
                    } else if (e.key === '5') {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuSelect"])();
                        setActiveItem('CONTACT');
                    }
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
                    y: 12,
                    scale: 0.995
                }, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.25,
                    ease: 'power3.out'
                });
            }
        }
    }["LandingPage.useEffect"], [
        activeItem
    ]);
    const handleTabChange = (key)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuSelect"])();
        setActiveItem(key);
    };
    const toggleAmbience = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuSelect"])();
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuSelect"])();
        navigator.clipboard.writeText(USER_DATA.email);
        setCopied(true);
        setTimeout(()=>setCopied(false), 2400);
    };
    const renderContent = ()=>{
        switch(activeItem){
            case 'MAP':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MapSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 261,
                    columnNumber: 24
                }, this);
            case 'CHARACTER':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CharacterSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 264,
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
                                                    lineNumber: 276,
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
                                                    lineNumber: 286,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 275,
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
                                            children: "04 MAJOR PROJECTS // CLICK ANY MISSION CARD TO OPEN REPOSITORY"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 299,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 274,
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
                                    lineNumber: 312,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 270,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                            children: USER_DATA.projects.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: p.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onMouseEnter: (e)=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuHover"])();
                                        const el = e.currentTarget;
                                        el.style.background = 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)';
                                        el.style.borderColor = 'rgba(0,0,0,0.1)';
                                        el.style.borderLeftColor = '#f5a623';
                                        el.style.transform = 'translateY(-2px) scale(1.008)';
                                        el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.8), 0 0 25px rgba(245,166,35,0.2)';
                                    },
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
                                                right: '14px',
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
                                            lineNumber: 372,
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
                                                            lineNumber: 400,
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
                                                            lineNumber: 413,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/LandingPage.tsx",
                                                    lineNumber: 399,
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
                                                    lineNumber: 427,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 391,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.85rem',
                                                color: 'rgba(255,255,255,0.8)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.06em',
                                                lineHeight: '1.55',
                                                marginBottom: '12px'
                                            },
                                            className: "group-hover:!text-black/80",
                                            children: p.desc
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 446,
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
                                                        lineNumber: 470,
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
                                                    className: "group-hover:!text-black/70",
                                                    children: [
                                                        "✓ ",
                                                        p.status
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/LandingPage.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 461,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 333,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 331,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 268,
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
                                                        lineNumber: 524,
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
                                                        lineNumber: 534,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 523,
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
                                                lineNumber: 546,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 522,
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
                                        lineNumber: 559,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 521,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 518,
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
                                                lineNumber: 585,
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
                                                lineNumber: 593,
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
                                                lineNumber: 606,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 577,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                        children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onMouseEnter: (e)=>{
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuHover"])();
                                                    e.currentTarget.style.borderColor = item.color;
                                                    e.currentTarget.style.boxShadow = `0 0 20px ${item.color}20, inset 0 0 20px ${item.color}05`;
                                                    e.currentTarget.style.background = `linear-gradient(135deg, #0f0f16 0%, ${item.color}06 100%)`;
                                                },
                                                style: {
                                                    background: 'linear-gradient(135deg, #0e0e14 0%, #0b0b10 100%)',
                                                    border: '1px solid rgba(255,255,255,0.1)',
                                                    borderLeft: `3px solid ${item.color}`,
                                                    padding: '12px 14px',
                                                    transition: 'all 0.18s ease',
                                                    position: 'relative',
                                                    overflow: 'hidden'
                                                },
                                                onMouseLeave: (e)=>{
                                                    ;
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
                                                                        lineNumber: 654,
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
                                                                        lineNumber: 662,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/LandingPage.tsx",
                                                                lineNumber: 653,
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
                                                                lineNumber: 674,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/LandingPage.tsx",
                                                        lineNumber: 645,
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
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/LandingPage.tsx",
                                                            lineNumber: 697,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/LandingPage.tsx",
                                                        lineNumber: 688,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 617,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 615,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, category, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 575,
                                columnNumber: 29
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 516,
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
                                            lineNumber: 723,
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
                                            children: "DIRECT DISPATCH // CONTACT & SOCIALS"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 732,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 722,
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
                                    children: "REACH OUT FOR SOFTWARE ENGINEERING ROLES, PROJECTS & COLLABORATIONS"
                                }, void 0, false, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 744,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 719,
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
                                            lineNumber: 771,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 769,
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
                                    children: "SIGNAL STATUS: ONLINE // OPEN FOR OPPORTUNITIES"
                                }, void 0, false, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 783,
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
                                    lineNumber: 796,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 759,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: handleCopyEmail,
                                    onMouseEnter: (e)=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuHover"])();
                                        e.currentTarget.style.background = '#fff';
                                        e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.7), 0 0 20px rgba(245,166,35,0.25)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    },
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
                                    onMouseLeave: (e)=>{
                                        ;
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
                                                children: "✓ EMAIL COPIED!"
                                            }, void 0, false, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 851,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 839,
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
                                            children: "◎ DIRECT EMAIL"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 864,
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
                                            lineNumber: 877,
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
                                            lineNumber: 890,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 812,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: USER_DATA.github,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onMouseEnter: (e)=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuHover"])();
                                        e.currentTarget.style.background = '#fff';
                                        e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.7)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    },
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
                                    onMouseLeave: (e)=>{
                                        ;
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
                                            children: "◆ GITHUB PROFILE"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 934,
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
                                            lineNumber: 947,
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
                                            children: "[ VIEW REPOSITORIES ↗ ]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 959,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 907,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: USER_DATA.linkedin,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    onMouseEnter: (e)=>{
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuHover"])();
                                        e.currentTarget.style.background = '#fff';
                                        e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.7), 0 0 20px rgba(0,119,181,0.2)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    },
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
                                    onMouseLeave: (e)=>{
                                        ;
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
                                            lineNumber: 1004,
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
                                            lineNumber: 1017,
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
                                            children: "[ CONNECT ON LINKEDIN ↗ ]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 1029,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 976,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 810,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 717,
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
                    background: 'radial-gradient(ellipse at center, rgba(245, 166, 35, 0.07) 0%, transparent 65%)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/components/LandingPage.tsx",
                lineNumber: 1065,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/LandingPage.tsx",
                lineNumber: 1078,
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
                    borderBottom: '1px solid rgba(245, 166, 35, 0.25)',
                    boxShadow: '0 1px 0 rgba(245, 166, 35, 0.08)'
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
                                    border: '1px solid rgba(102,204,102,0.6)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontFamily: 'Share Tech Mono,monospace',
                                    fontSize: '1rem',
                                    color: '#66CC66',
                                    boxShadow: '0 0 10px rgba(102,204,102,0.25)',
                                    flexShrink: 0
                                },
                                children: USER_DATA.rank
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1101,
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
                                                    background: '#f5a623',
                                                    color: '#000',
                                                    padding: '2px 7px',
                                                    fontWeight: 900,
                                                    letterSpacing: '0.12em'
                                                },
                                                children: "PRO"
                                            }, void 0, false, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 1133,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 1121,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.7rem',
                                            letterSpacing: '0.28em',
                                            color: 'rgba(240,237,232,0.5)',
                                            marginTop: '2px'
                                        },
                                        children: USER_DATA.tagline
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 1146,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1120,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 1099,
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
                                    lineNumber: 1164,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1163,
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
                                            lineNumber: 1178,
                                            columnNumber: 40
                                        }, this) : USER_DATA.cash
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 1169,
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
                                            "BANK:",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: 'rgba(255,255,255,0.6)'
                                                },
                                                children: mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                                    target: USER_DATA.bank
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LandingPage.tsx",
                                                    lineNumber: 1192,
                                                    columnNumber: 44
                                                }, this) : USER_DATA.bank
                                            }, void 0, false, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 1191,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 1180,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1168,
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
                                lineNumber: 1198,
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
                                lineNumber: 1213,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 1161,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LandingPage.tsx",
                lineNumber: 1081,
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
                            maxWidth: '1220px',
                            width: '100%',
                            background: '#070706',
                            borderBottom: '1px solid rgba(245, 166, 35, 0.18)'
                        },
                        children: MENU_ITEMS.map((item)=>{
                            const isActive = activeItem === item.key;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabChange(item.key),
                                onMouseEnter: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuHover"])(),
                                style: {
                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                    fontSize: 'clamp(0.8rem, 1.3vw, 1.02rem)',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    padding: '11px 22px',
                                    background: isActive ? '#f0ede8' : 'transparent',
                                    color: isActive ? '#080807' : 'rgba(240,237,232,0.45)',
                                    border: 'none',
                                    borderTop: isActive ? '2px solid #f5a623' : '2px solid transparent',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s ease',
                                    boxShadow: isActive ? '0 0 30px rgba(240,237,232,0.08)' : 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    flex: '1 1 auto',
                                    justifyContent: 'center'
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
                                        lineNumber: 1291,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 1299,
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
                                        lineNumber: 1300,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, item.key, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1267,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 1250,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: contentRef,
                        className: "landing-content-panel corner-bracket",
                        style: {
                            width: 'min(96vw, 1220px)',
                            maxHeight: '72vh',
                            background: '#0a0a08',
                            borderTop: '1px solid rgba(245, 166, 35, 0.45)',
                            borderRight: '1px solid rgba(255,255,255,0.08)',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                            borderLeft: '1px solid rgba(255,255,255,0.08)',
                            padding: '24px 28px',
                            boxShadow: '0 24px 80px rgba(0,0,0,0.95), 0 0 35px rgba(245, 166, 35, 0.08)',
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
                                    borderTop: '1px solid rgba(245, 166, 35, 0.7)',
                                    borderRight: '1px solid rgba(245, 166, 35, 0.7)',
                                    pointerEvents: 'none',
                                    zIndex: 2
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1335,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    bottom: '-1px',
                                    left: '-1px',
                                    width: '14px',
                                    height: '14px',
                                    borderBottom: '1px solid rgba(245, 166, 35, 0.7)',
                                    borderLeft: '1px solid rgba(245, 166, 35, 0.7)',
                                    pointerEvents: 'none',
                                    zIndex: 2
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1348,
                                columnNumber: 21
                            }, this),
                            renderContent()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 1317,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LandingPage.tsx",
                lineNumber: 1237,
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
                    color: 'rgba(240,237,232,0.3)',
                    textTransform: 'uppercase',
                    background: '#080807',
                    borderTop: '1px solid rgba(245, 166, 35, 0.15)'
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
                                lineNumber: 1389,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "[CLICK ITEMS TO INSPECT]"
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1390,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 1388,
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
                                        lineNumber: 1395,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: '#66CC66',
                                            fontWeight: 700
                                        },
                                        children: "ONLINE"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 1405,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1394,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'rgba(255,255,255,0.2)'
                                },
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1407,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "OM PANDEY // PORTFOLIO 2.0"
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1408,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'rgba(255,255,255,0.2)'
                                },
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1409,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'rgba(245,166,35,0.7)'
                                },
                                children: "GTA V ROYALE EDITION"
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1410,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 1393,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LandingPage.tsx",
                lineNumber: 1367,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LandingPage.tsx",
        lineNumber: 1054,
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

//# sourceMappingURL=_053yqyw._.js.map