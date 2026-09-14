(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AcademicRadar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AcademicRadar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
// ─── Data ─────────────────────────────────────────────────────────────────────
const WAYPOINTS = [
    {
        id: 1,
        code: 'WP-01',
        name: 'KOORMANCHAL ACADEMY',
        city: 'Almora',
        state: 'Uttarakhand',
        level: 'Secondary Schooling',
        status: 'COMPLETED',
        statusLabel: 'COMPLETED // DISTINCTION',
        description: 'Foundational academic formation in the heart of the Kumaon hills. Built discipline, analytical thinking, and core academic competencies across science and mathematics.',
        tags: [
            'SECONDARY',
            'FOUNDATIONAL',
            'KUMAON'
        ],
        lat: '29.5971° N',
        lng: '79.6593° E',
        svgX: 310,
        svgY: 68,
        year: '2010-2015'
    },
    {
        id: 4,
        code: 'WP-02',
        name: 'AURUM THE GLOBAL SCHOOL',
        city: 'Haldwani',
        state: 'Uttarakhand',
        level: 'Higher Secondary',
        status: 'COMPLETED',
        statusLabel: 'COMPLETED ',
        description: 'Advanced higher-secondary curriculum with a global outlook. Strengthened Science-PCM track while developing critical thinking and extracurricular presence.',
        tags: [
            'HIGHER SECONDARY'
        ],
        lat: '29.2183° N',
        lng: '79.5130° E',
        svgX: 268,
        svgY: 136,
        year: '2016-2023'
    },
    {
        id: 18,
        code: 'WP-03',
        name: 'GOVT POLYTECHNIC KASHIPUR',
        city: 'Kashipur',
        state: 'Uttarakhand',
        level: 'Diploma in Engineering',
        status: 'COMPLETED',
        statusLabel: 'COMPLETED',
        description: 'Government-run polytechnic delivering hands-on technical education. Earned a Diploma in Engineering, bridging theory with practical lab exposure in core engineering domains.',
        tags: [
            'DIPLOMA',
            'ENGINEERING',
            'POLYTECHNIC'
        ],
        lat: '29.2103° N',
        lng: '78.9618° E',
        svgX: 158,
        svgY: 148,
        year: '2023-2026'
    },
    {
        id: 7,
        code: 'WP-04',
        name: 'VMSBUTU FOT DEHRADUN',
        city: 'Dehradun',
        state: 'Uttarakhand',
        level: 'B.Tech / Undergraduate Degree',
        status: 'ACTIVE',
        statusLabel: 'ACTIVE | IN PROGRESS',
        description: 'Currently pursuing B.Tech (Undergraduate) at Veer Madho Singh Bhandari Uttarakhand Technical University Faculty of Technology, Dehradun — the active operational zone of the academic journey.',
        tags: [
            'UNDERGRADUATE',
            'B.TECH',
            'ACTIVE OPS'
        ],
        lat: '30.3165° N',
        lng: '78.0322° E',
        svgX: 92,
        svgY: 62,
        year: '2026–PRESENT'
    }
];
// ─── CRT scanline overlay ─────────────────────────────────────────────────────
function CRTOverlay() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": true,
        style: {
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 10,
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)',
            mixBlendMode: 'overlay'
        }
    }, void 0, false, {
        fileName: "[project]/components/AcademicRadar.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_c = CRTOverlay;
// ─── Radar concentric rings + crosshair ──────────────────────────────────────
function RadarRings() {
    const cx = 200;
    const cy = 160;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
        children: [
            [
                40,
                80,
                120,
                158
            ].map((r, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: cx,
                    cy: cy,
                    r: r,
                    fill: "none",
                    stroke: idx === 1 ? 'rgba(0,255,102,0.15)' : 'rgba(255,255,255,0.06)',
                    strokeWidth: "0.8",
                    strokeDasharray: "3 5"
                }, r, false, {
                    fileName: "[project]/components/AcademicRadar.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: cx,
                y1: 0,
                x2: cx,
                y2: 320,
                stroke: "rgba(255,255,255,0.06)",
                strokeWidth: "0.6"
            }, void 0, false, {
                fileName: "[project]/components/AcademicRadar.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: 0,
                y1: cy,
                x2: 400,
                y2: cy,
                stroke: "rgba(255,255,255,0.06)",
                strokeWidth: "0.6"
            }, void 0, false, {
                fileName: "[project]/components/AcademicRadar.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AcademicRadar.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_c1 = RadarRings;
// ─── Rotating radar sweep ─────────────────────────────────────────────────────
function RadarSweep() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("radialGradient", {
                    id: "sweepGrad",
                    cx: "0%",
                    cy: "50%",
                    r: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: "#00ff66",
                            stopOpacity: "0.55"
                        }, void 0, false, {
                            fileName: "[project]/components/AcademicRadar.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "60%",
                            stopColor: "#00ff66",
                            stopOpacity: "0.15"
                        }, void 0, false, {
                            fileName: "[project]/components/AcademicRadar.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: "#00ff66",
                            stopOpacity: "0"
                        }, void 0, false, {
                            fileName: "[project]/components/AcademicRadar.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AcademicRadar.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AcademicRadar.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "200",
                y1: "160",
                x2: "360",
                y2: "160",
                stroke: "url(#sweepGrad)",
                strokeWidth: "1.6",
                style: {
                    transformOrigin: '200px 160px',
                    animation: 'radarSpin 4.5s linear infinite'
                }
            }, void 0, false, {
                fileName: "[project]/components/AcademicRadar.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c2 = RadarSweep;
function AcademicRadar() {
    _s();
    const defaultWaypoint = WAYPOINTS.find((w)=>w.status === 'ACTIVE') ?? WAYPOINTS[3];
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultWaypoint.id);
    const [hoveredId, setHoveredId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [scanLine, setScanLine] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [blinkOn, setBlinkOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [bootText, setBootText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('INITIALISING RADAR…');
    const animRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastTickRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const active = WAYPOINTS.find((w)=>w.id === activeId) ?? defaultWaypoint;
    // Boot text sequence
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AcademicRadar.useEffect": ()=>{
            const seq = [
                'LOADING TERRITORY DATA…',
                'CALIBRATING RADAR…',
                'PLOTTING 04 WAYPOINTS…',
                'SIGNAL ACQUIRED'
            ];
            let i = 0;
            const iv = setInterval({
                "AcademicRadar.useEffect.iv": ()=>{
                    i++;
                    if (i < seq.length) setBootText(seq[i]);
                    else clearInterval(iv);
                }
            }["AcademicRadar.useEffect.iv"], 650);
            return ({
                "AcademicRadar.useEffect": ()=>clearInterval(iv)
            })["AcademicRadar.useEffect"];
        }
    }["AcademicRadar.useEffect"], []);
    // Scanline rAF
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AcademicRadar.useEffect": ()=>{
            const tick = {
                "AcademicRadar.useEffect.tick": (t)=>{
                    if (t - lastTickRef.current > 16) {
                        setScanLine({
                            "AcademicRadar.useEffect.tick": (p)=>(p + 1) % 320
                        }["AcademicRadar.useEffect.tick"]);
                        lastTickRef.current = t;
                    }
                    animRef.current = requestAnimationFrame(tick);
                }
            }["AcademicRadar.useEffect.tick"];
            animRef.current = requestAnimationFrame(tick);
            return ({
                "AcademicRadar.useEffect": ()=>{
                    if (animRef.current) cancelAnimationFrame(animRef.current);
                }
            })["AcademicRadar.useEffect"];
        }
    }["AcademicRadar.useEffect"], []);
    // Cursor blink
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AcademicRadar.useEffect": ()=>{
            const iv = setInterval({
                "AcademicRadar.useEffect.iv": ()=>setBlinkOn({
                        "AcademicRadar.useEffect.iv": (b)=>!b
                    }["AcademicRadar.useEffect.iv"])
            }["AcademicRadar.useEffect.iv"], 530);
            return ({
                "AcademicRadar.useEffect": ()=>clearInterval(iv)
            })["AcademicRadar.useEffect"];
        }
    }["AcademicRadar.useEffect"], []);
    const polyPoints = WAYPOINTS.map((w)=>`${w.svgX},${w.svgY}`).join(' ');
    // Corner bracket helper
    const corners = [
        {
            top: 8,
            left: 8,
            bt: 2,
            bb: 0,
            bl: 2,
            br: 0
        },
        {
            top: 8,
            right: 8,
            bt: 2,
            bb: 0,
            bl: 0,
            br: 2
        },
        {
            bottom: 8,
            left: 8,
            bt: 0,
            bb: 2,
            bl: 2,
            br: 0
        },
        {
            bottom: 8,
            right: 8,
            bt: 0,
            bb: 2,
            bl: 0,
            br: 2
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes radarSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes radarPulse {
          0%   { r: 8;  opacity: 0.9; }
          100% { r: 30; opacity: 0; }
        }
        @keyframes glowActive {
          0%, 100% { box-shadow: 0 0 10px rgba(0,255,102,0.25), inset 0 0 8px rgba(0,255,102,0.08); }
          50%      { box-shadow: 0 0 20px rgba(0,255,102,0.45), inset 0 0 14px rgba(0,255,102,0.18); }
        }
        svg *:focus, svg *:focus-visible, g:focus, g:focus-visible {
          outline: none !important;
        }
      `
            }, void 0, false, {
                fileName: "[project]/components/AcademicRadar.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    background: '#00ff66',
                                                    boxShadow: '0 0 8px rgba(0,255,102,0.6)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/AcademicRadar.tsx",
                                                lineNumber: 258,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                    fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                                                    letterSpacing: '0.14em',
                                                    color: '#ffffff',
                                                    textTransform: 'uppercase'
                                                },
                                                children: "ACADEMIC TERRITORY RADAR // UTTARAKHAND SECTOR"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AcademicRadar.tsx",
                                                lineNumber: 266,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AcademicRadar.tsx",
                                        lineNumber: 257,
                                        columnNumber: 13
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
                                        children: "ALMORA ➔ HALDWANI ➔ KASHIPUR ➔ DEHRADUN // SELECT A WAYPOINT FOR INTEL"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AcademicRadar.tsx",
                                        lineNumber: 278,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AcademicRadar.tsx",
                                lineNumber: 256,
                                columnNumber: 11
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
                                            background: '#1aff00ff',
                                            borderRadius: '50%',
                                            boxShadow: '0 0 8px #00ff66',
                                            opacity: blinkOn ? 1 : 0.2,
                                            transition: 'opacity 0.15s'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/AcademicRadar.tsx",
                                        lineNumber: 293,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.72rem',
                                            color: '#00ff66',
                                            background: 'rgba(0,255,102,0.06)',
                                            border: '1px solid rgba(0,255,102,0.3)',
                                            padding: '4px 12px',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase',
                                            fontWeight: 700
                                        },
                                        children: bootText
                                    }, void 0, false, {
                                        fileName: "[project]/components/AcademicRadar.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AcademicRadar.tsx",
                                lineNumber: 292,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AcademicRadar.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-7 relative overflow-hidden",
                                style: {
                                    background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    minHeight: '360px',
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
                  linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)
                `,
                                            backgroundSize: '32px 32px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/AcademicRadar.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "aria-hidden": true,
                                        style: {
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'radial-gradient(ellipse at 50% 50%, rgba(0,255,102,0.04) 0%, transparent 70%)',
                                            pointerEvents: 'none',
                                            zIndex: 1
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/AcademicRadar.tsx",
                                        lineNumber: 352,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "aria-hidden": true,
                                        style: {
                                            position: 'absolute',
                                            left: 0,
                                            right: 0,
                                            height: 2,
                                            background: 'linear-gradient(to right, transparent, rgba(0,255,102,0.18), transparent)',
                                            top: `${scanLine / 320 * 100}%`,
                                            pointerEvents: 'none',
                                            zIndex: 8
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/AcademicRadar.tsx",
                                        lineNumber: 364,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CRTOverlay, {}, void 0, false, {
                                        fileName: "[project]/components/AcademicRadar.tsx",
                                        lineNumber: 378,
                                        columnNumber: 13
                                    }, this),
                                    corners.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "aria-hidden": true,
                                            style: {
                                                position: 'absolute',
                                                width: 14,
                                                height: 14,
                                                top: c.top,
                                                left: c.left,
                                                right: c.right,
                                                bottom: c.bottom,
                                                borderColor: 'rgba(255,255,255,0.25)',
                                                borderStyle: 'solid',
                                                borderTopWidth: c.bt,
                                                borderBottomWidth: c.bb,
                                                borderLeftWidth: c.bl,
                                                borderRightWidth: c.br,
                                                pointerEvents: 'none',
                                                zIndex: 12
                                            }
                                        }, i, false, {
                                            fileName: "[project]/components/AcademicRadar.tsx",
                                            lineNumber: 382,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'absolute',
                                            top: 14,
                                            left: 24,
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.62rem',
                                            letterSpacing: '0.24em',
                                            color: 'rgba(255,255,255,0.4)',
                                            zIndex: 12,
                                            textTransform: 'uppercase'
                                        },
                                        children: "GPS RADAR // UTTARAKHAND GRID"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AcademicRadar.tsx",
                                        lineNumber: 406,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        viewBox: "0 0 400 320",
                                        style: {
                                            width: '100%',
                                            display: 'block',
                                            position: 'relative',
                                            zIndex: 5,
                                            margin: 'auto 0'
                                        },
                                        "aria-label": "Academic territory radar map of Uttarakhand",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadarRings, {}, void 0, false, {
                                                fileName: "[project]/components/AcademicRadar.tsx",
                                                lineNumber: 428,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RadarSweep, {}, void 0, false, {
                                                fileName: "[project]/components/AcademicRadar.tsx",
                                                lineNumber: 429,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                points: polyPoints,
                                                fill: "none",
                                                stroke: "rgba(255,255,255,0.2)",
                                                strokeWidth: "1.5",
                                                strokeDasharray: "6 4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AcademicRadar.tsx",
                                                lineNumber: 432,
                                                columnNumber: 15
                                            }, this),
                                            WAYPOINTS.slice(0, -1).map((wp, i)=>{
                                                const next = WAYPOINTS[i + 1];
                                                const mx = (wp.svgX + next.svgX) / 2;
                                                const my = (wp.svgY + next.svgY) / 2;
                                                const angle = Math.atan2(next.svgY - wp.svgY, next.svgX - wp.svgX) * 180 / Math.PI;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    transform: `translate(${mx},${my}) rotate(${angle})`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                                        points: "-4,-2.5 4,0 -4,2.5",
                                                        fill: "rgba(0,255,102,0.6)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AcademicRadar.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 21
                                                    }, this)
                                                }, i, false, {
                                                    fileName: "[project]/components/AcademicRadar.tsx",
                                                    lineNumber: 447,
                                                    columnNumber: 19
                                                }, this);
                                            }),
                                            WAYPOINTS.map((wp)=>{
                                                const isActive = wp.id === activeId;
                                                const isHover = wp.id === hoveredId;
                                                const isWpActiveStatus = wp.status === 'ACTIVE';
                                                const lit = isActive || isHover;
                                                const labelY = wp.svgY > 170 ? wp.svgY + 20 : wp.svgY - 20;
                                                // Node color: bright green for active / hover / current waypoint, clean tactical cyan/slate for others
                                                const nodeFill = isActive ? '#00ff66' : isHover ? '#00ff66' : isWpActiveStatus ? '#00ff66' : '#64748b';
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                    style: {
                                                        cursor: 'pointer',
                                                        outline: 'none'
                                                    },
                                                    onClick: ()=>setActiveId(wp.id),
                                                    onMouseEnter: ()=>setHoveredId(wp.id),
                                                    onMouseLeave: ()=>setHoveredId(null),
                                                    role: "button",
                                                    tabIndex: 0,
                                                    "aria-label": `Select ${wp.name}`,
                                                    onKeyDown: (e)=>e.key === 'Enter' && setActiveId(wp.id),
                                                    children: [
                                                        isActive && [
                                                            0,
                                                            0.9
                                                        ].map((delay, di)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                cx: wp.svgX,
                                                                cy: wp.svgY,
                                                                r: "8",
                                                                fill: "none",
                                                                stroke: "#00ff66",
                                                                strokeWidth: "1.2",
                                                                style: {
                                                                    animation: `radarPulse 2s ease-out ${delay}s infinite`,
                                                                    transformOrigin: `${wp.svgX}px ${wp.svgY}px`
                                                                }
                                                            }, di, false, {
                                                                fileName: "[project]/components/AcademicRadar.tsx",
                                                                lineNumber: 484,
                                                                columnNumber: 23
                                                            }, this)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: wp.svgX - 6,
                                                            y: wp.svgY - 6,
                                                            width: "12",
                                                            height: "12",
                                                            fill: nodeFill,
                                                            stroke: isActive || isHover ? '#00ff66' : 'rgba(0,0,0,0.8)',
                                                            strokeWidth: 1.5,
                                                            style: {
                                                                filter: isActive ? 'drop-shadow(0 0 6px #00ff66) drop-shadow(0 0 12px rgba(0,255,102,0.5))' : isHover ? 'drop-shadow(0 0 8px rgba(0,255,102,0.8))' : 'drop-shadow(0 0 3px rgba(0,0,0,0.8))',
                                                                transition: 'all 0.2s'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AcademicRadar.tsx",
                                                            lineNumber: 500,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                            cx: wp.svgX,
                                                            cy: wp.svgY,
                                                            r: "2",
                                                            fill: "#09090c"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AcademicRadar.tsx",
                                                            lineNumber: 518,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: wp.svgX - 22,
                                                            y: labelY - 9,
                                                            width: "44",
                                                            height: "15",
                                                            fill: "#060608",
                                                            stroke: isActive ? '#00ff66' : isHover ? 'rgba(0,255,102,0.6)' : 'rgba(255,255,255,0.15)',
                                                            strokeWidth: "0.8"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AcademicRadar.tsx",
                                                            lineNumber: 521,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                            x: wp.svgX,
                                                            y: labelY + 2.5,
                                                            textAnchor: "middle",
                                                            fontSize: "7",
                                                            fill: isActive || isHover ? '#00ff66' : '#ffffff',
                                                            fontFamily: "'Share Tech Mono', monospace",
                                                            letterSpacing: "1",
                                                            fontWeight: isActive ? '700' : '400',
                                                            children: wp.code
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AcademicRadar.tsx",
                                                            lineNumber: 530,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                            x: wp.svgX + 14,
                                                            y: wp.svgY + 3,
                                                            fontSize: "7.5",
                                                            fill: isActive ? '#ffffff' : 'rgba(255,255,255,0.7)',
                                                            fontFamily: "ChaletComprime1960, 'Barlow Condensed', sans-serif",
                                                            letterSpacing: "0.8",
                                                            fontWeight: isActive ? '700' : '400',
                                                            children: wp.city.toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AcademicRadar.tsx",
                                                            lineNumber: 544,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                            x: wp.svgX + 14,
                                                            y: wp.svgY + 12,
                                                            fontSize: "5.8",
                                                            fill: "rgba(255,255,255,0.35)",
                                                            fontFamily: "'Share Tech Mono', monospace",
                                                            children: wp.lat
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AcademicRadar.tsx",
                                                            lineNumber: 557,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, wp.id, true, {
                                                    fileName: "[project]/components/AcademicRadar.tsx",
                                                    lineNumber: 471,
                                                    columnNumber: 19
                                                }, this);
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AcademicRadar.tsx",
                                        lineNumber: 423,
                                        columnNumber: 13
                                    }, this),
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
                                                    "LAT: ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#fff',
                                                            fontWeight: 700
                                                        },
                                                        children: active.lat
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AcademicRadar.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 22
                                                    }, this),
                                                    " // LONG:",
                                                    ' ',
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#fff',
                                                            fontWeight: 700
                                                        },
                                                        children: active.lng
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AcademicRadar.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AcademicRadar.tsx",
                                                lineNumber: 584,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: '#ff0000ff',
                                                    fontWeight: 600
                                                },
                                                children: [
                                                    "SECTOR: UKD-0",
                                                    active.id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AcademicRadar.tsx",
                                                lineNumber: 588,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AcademicRadar.tsx",
                                        lineNumber: 572,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AcademicRadar.tsx",
                                lineNumber: 327,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-5 flex flex-col justify-between",
                                style: {
                                    background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderLeft: '3px solid #00ff66',
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
                                                            color: active.status === 'ACTIVE' ? '#00ff66' : 'rgba(255,255,255,0.5)',
                                                            letterSpacing: '0.3em',
                                                            textTransform: 'uppercase',
                                                            fontWeight: 700,
                                                            display: 'block',
                                                            marginBottom: '6px'
                                                        },
                                                        children: [
                                                            "[ WAYPOINT ",
                                                            active.code.replace('WP-', ''),
                                                            " OF 04 ]"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/AcademicRadar.tsx",
                                                        lineNumber: 610,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        style: {
                                                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                            fontSize: 'clamp(1.15rem, 2vw, 1.45rem)',
                                                            color: '#ffffff',
                                                            letterSpacing: '0.08em',
                                                            textTransform: 'uppercase',
                                                            lineHeight: 1.15
                                                        },
                                                        children: active.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AcademicRadar.tsx",
                                                        lineNumber: 624,
                                                        columnNumber: 17
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
                                                        children: [
                                                            active.city,
                                                            ", ",
                                                            active.state
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/AcademicRadar.tsx",
                                                        lineNumber: 636,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AcademicRadar.tsx",
                                                lineNumber: 609,
                                                columnNumber: 15
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
                                                        children: active.year
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AcademicRadar.tsx",
                                                        lineNumber: 652,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                            fontSize: '0.68rem',
                                                            background: active.status === 'ACTIVE' ? 'rgba(0,255,102,0.1)' : 'rgba(255,255,255,0.04)',
                                                            border: `1px solid ${active.status === 'ACTIVE' ? '#00ff66' : 'rgba(255,255,255,0.2)'}`,
                                                            color: active.status === 'ACTIVE' ? '#00ff66' : 'rgba(255,255,255,0.75)',
                                                            padding: '3px 10px',
                                                            letterSpacing: '0.18em',
                                                            textTransform: 'uppercase',
                                                            fontWeight: 700,
                                                            boxShadow: active.status === 'ACTIVE' ? '0 0 8px rgba(0,255,102,0.25)' : 'none'
                                                        },
                                                        children: active.statusLabel
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AcademicRadar.tsx",
                                                        lineNumber: 666,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AcademicRadar.tsx",
                                                lineNumber: 651,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.74rem',
                                                    letterSpacing: '0.18em',
                                                    color: 'rgba(255,255,255,0.45)',
                                                    textTransform: 'uppercase'
                                                },
                                                children: [
                                                    "LEVEL ► ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#ffffff'
                                                        },
                                                        children: active.level
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AcademicRadar.tsx",
                                                        lineNumber: 694,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AcademicRadar.tsx",
                                                lineNumber: 685,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.86rem',
                                                    color: 'rgba(255,255,255,0.75)',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.06em',
                                                    lineHeight: '1.6',
                                                    borderTop: '1px solid rgba(255,255,255,0.08)',
                                                    paddingTop: '10px'
                                                },
                                                children: active.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/AcademicRadar.tsx",
                                                lineNumber: 698,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '6px'
                                                },
                                                children: active.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            background: 'rgba(255,255,255,0.04)',
                                                            border: '1px solid rgba(255,255,255,0.12)',
                                                            padding: '3px 8px',
                                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                            fontSize: '0.66rem',
                                                            color: 'rgba(255,255,255,0.8)',
                                                            letterSpacing: '0.15em',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: tag
                                                    }, tag, false, {
                                                        fileName: "[project]/components/AcademicRadar.tsx",
                                                        lineNumber: 716,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/AcademicRadar.tsx",
                                                lineNumber: 714,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    borderTop: '1px solid rgba(255,255,255,0.08)',
                                                    paddingTop: '10px',
                                                    display: 'grid',
                                                    gridTemplateColumns: '1fr 1fr',
                                                    gap: '6px 14px'
                                                },
                                                children: [
                                                    {
                                                        label: 'LATITUDE',
                                                        value: active.lat
                                                    },
                                                    {
                                                        label: 'LONGITUDE',
                                                        value: active.lng
                                                    },
                                                    {
                                                        label: 'TIMELINE',
                                                        value: active.year
                                                    },
                                                    {
                                                        label: 'SECTOR CODE',
                                                        value: `UKD-0${active.id}`
                                                    }
                                                ].map(({ label, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                                    fontSize: '0.6rem',
                                                                    color: 'rgba(255,255,255,0.35)',
                                                                    letterSpacing: '0.2em'
                                                                },
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/AcademicRadar.tsx",
                                                                lineNumber: 751,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontFamily: "'Share Tech Mono', monospace",
                                                                    fontSize: '0.72rem',
                                                                    color: '#ffffff',
                                                                    letterSpacing: '0.08em'
                                                                },
                                                                children: value
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/AcademicRadar.tsx",
                                                                lineNumber: 761,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, label, true, {
                                                        fileName: "[project]/components/AcademicRadar.tsx",
                                                        lineNumber: 750,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/AcademicRadar.tsx",
                                                lineNumber: 735,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AcademicRadar.tsx",
                                        lineNumber: 607,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(4, 1fr)',
                                            gap: '6px',
                                            paddingTop: '14px',
                                            marginTop: '14px',
                                            borderTop: '1px solid rgba(255,255,255,0.08)'
                                        },
                                        children: WAYPOINTS.map((wp)=>{
                                            const isSelected = wp.id === activeId;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                id: `ar-nav-${wp.id}`,
                                                onClick: ()=>setActiveId(wp.id),
                                                style: {
                                                    padding: '7px 4px',
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.74rem',
                                                    letterSpacing: '0.12em',
                                                    textTransform: 'uppercase',
                                                    textAlign: 'center',
                                                    background: isSelected ? '#00ff66' : 'rgba(255,255,255,0.04)',
                                                    color: isSelected ? '#000000' : 'rgba(255,255,255,0.5)',
                                                    border: `1px solid ${isSelected ? '#00ff66' : 'rgba(255,255,255,0.1)'}`,
                                                    cursor: 'pointer',
                                                    fontWeight: isSelected ? 700 : 400,
                                                    boxShadow: isSelected ? '0 0 12px rgba(0,255,102,0.4)' : 'none',
                                                    transition: 'all 0.18s ease',
                                                    outline: 'none',
                                                    position: 'relative'
                                                },
                                                children: [
                                                    wp.code,
                                                    wp.status === 'ACTIVE' && !isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            position: 'absolute',
                                                            top: 3,
                                                            right: 4,
                                                            width: 4,
                                                            height: 4,
                                                            background: '#00ff66',
                                                            borderRadius: '50%',
                                                            boxShadow: '0 0 4px #00ff66'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AcademicRadar.tsx",
                                                        lineNumber: 814,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, wp.id, true, {
                                                fileName: "[project]/components/AcademicRadar.tsx",
                                                lineNumber: 790,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/AcademicRadar.tsx",
                                        lineNumber: 777,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AcademicRadar.tsx",
                                lineNumber: 597,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AcademicRadar.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AcademicRadar.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(AcademicRadar, "0LRNH2lEF4bz8IpY1uXzjXKKROI=");
_c3 = AcademicRadar;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CRTOverlay");
__turbopack_context__.k.register(_c1, "RadarRings");
__turbopack_context__.k.register(_c2, "RadarSweep");
__turbopack_context__.k.register(_c3, "AcademicRadar");
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
        color: '#b42222ff'
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
        color: '#094690ff'
    },
    {
        id: 'fullstack',
        name: 'AI BASED DEVELOPMENT',
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
        projectProof: 'Created VibeChat (real-time chat), HTRACX (hostel management portal) and AIMS (Academic Infrastructure and management system).',
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
        color: '#a59805ff'
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
        color: '#05059bff'
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
        color: '#78067cff'
    },
    {
        id: 'leadership',
        name: 'LEADERSHIP & MANAGEMENT',
        gameAlias: 'DRIVING // TEAM LEAD',
        level: 99,
        levelStr: '99%',
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
                                        children: "SKILLS & CAPABILITIES"
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
                                children: "CHARACTER ATTRIBUTES // SELECT ANY STAT BELOW TO INSPECT"
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
                        children: abilityActive ? '● ABILITY ACTIVE' : '● SPECIAL ABILITY'
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
                                        children: "✓ ALWAYS READY"
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
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AcademicRadar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AcademicRadar.tsx [app-client] (ecmascript)");
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
    tagline: 'A PROFESSIONAL TECH ENTHUSIAST',
    rank: 100,
    cash: '₹15,000',
    bank: '₹40,000',
    email: 'ompandey2341@gmail.com',
    github: 'https://github.com/lokiverse-devil',
    linkedin: 'https://www.linkedin.com/in/om-pandey-87b057328/',
    projects: [
        {
            title: 'VibeChat',
            category: 'REAL-TIME MESSAGING',
            desc: 'A fast, real-time messaging EMOJI-ONLY app built with Next.js and WebSockets for instant chat and media sharing.',
            tags: [
                'HTML',
                'CSS',
                'WEBSOCKETS',
                'JAVASCRIPT'
            ],
            link: 'https://github.com/lokiverse-devil/VibeChat',
            status: 'COMPLETED',
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
            link: 'https://github.com/lokiverse-devil/HtrackX-Smart-Hostel-Management-System-',
            status: 'COMPLETED',
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
                'WEB PORTALS'
            ],
            link: 'https://github.com/lokiverse-devil/SmartClassX_Final',
            status: 'COMPLETED',
            opNum: '03'
        },
        {
            title: 'AIMS - ACADEMIC INFRASTRUCTURE & MANAGEMENT SYSTEM',
            category: 'CAMPUS ASSET SUITE',
            desc: 'An infrastructure and asset tracking platform helping colleges manage lab inventory and staff requests.',
            tags: [
                'SYSTEM DESIGN',
                'POSTGRESQL',
                'SUPABASE',
                'REST APIS'
            ],
            link: 'https://aims-it-ugip.vercel.app/',
            status: 'COMPLETED',
            opNum: '04'
        }
    ],
    arsenal: [
        {
            name: 'C / C++',
            proficiency: '94%',
            profNum: 94,
            category: 'CORE',
            color: '#cc0000ff'
        },
        {
            name: 'JAVA & OOP',
            proficiency: '90%',
            profNum: 90,
            category: 'CORE',
            color: '#024aa2ff'
        },
        {
            name: 'DATA STRUCTURES & ALGORITHMS',
            proficiency: '92%',
            profNum: 92,
            category: 'CORE',
            color: '#24c110ff'
        },
        {
            name: 'NEXT.JS',
            proficiency: '95%',
            profNum: 95,
            category: 'FRONTEND',
            color: '#a88404ff'
        },
        {
            name: 'TYPESCRIPT',
            proficiency: '92%',
            profNum: 92,
            category: 'FRONTEND',
            color: '#009a9dff'
        },
        {
            name: 'SQL & POSTGRESQL',
            proficiency: '92%',
            profNum: 92,
            category: 'DATABASE',
            color: '#2a0489ff'
        },
        {
            name: 'SUPABASE & BACKEND',
            proficiency: '90%',
            profNum: 90,
            category: 'DATABASE',
            color: '#9a0485ff'
        },
        {
            name: 'MODEL CONTEXT PROTOCOL (MCP)',
            proficiency: '95%',
            profNum: 95,
            category: 'AI TECH',
            color: '#8e9100ff'
        },
        {
            name: 'USING AI MODELS',
            proficiency: '94%',
            profNum: 94,
            category: 'AI TECH',
            color: '#003ea9ff'
        },
        {
            name: 'IOT & EMBEDDED SYSTEMS',
            proficiency: '88%',
            profNum: 88,
            category: 'HARDWARE',
            color: '#04748dff'
        },
        {
            name: 'TEAM LEADERSHIP & DEMOS',
            proficiency: '92%',
            profNum: 92,
            category: 'LEADERSHIP',
            color: '#a60404ff'
        }
    ]
};
const MENU_ITEMS = [
    {
        key: 'MAP',
        label: 'TERRITORY',
        shortcut: '1'
    },
    {
        key: 'CHARACTER',
        label: 'CHARACTER',
        shortcut: '2'
    },
    {
        key: 'PROJECTS',
        label: 'OPERATIONS',
        shortcut: '3'
    },
    {
        key: 'ARSENAL',
        label: 'ARSENAL',
        shortcut: '4'
    },
    {
        key: 'CONTACT',
        label: 'COMMS',
        shortcut: '5'
    }
];
// Animated cash counter
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
            const prefix = target.startsWith('₹') ? '₹' : '';
            let start = 0;
            const duration = 1000;
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
// Subtle pure white wanted stars HUD
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
                width: "14",
                height: "14",
                viewBox: "0 0 72 72",
                style: {
                    opacity: 0.85
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "36,4 44,28 70,28 49,44 57,68 36,52 15,68 23,44 2,28 28,28",
                    fill: "#ffffff",
                    style: {
                        filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.7))'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 144,
                    columnNumber: 21
                }, this)
            }, i, false, {
                fileName: "[project]/components/LandingPage.tsx",
                lineNumber: 143,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/LandingPage.tsx",
        lineNumber: 141,
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
                    y: 8
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.2,
                    ease: 'power2.out'
                });
            }
        }
    }["LandingPage.useEffect"], [
        activeItem
    ]);
    const handleTabChange = (key)=>{
        setActiveItem(key);
    };
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
        setTimeout(()=>setCopied(false), 2400);
    };
    const renderContent = ()=>{
        switch(activeItem){
            case 'MAP':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AcademicRadar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 237,
                    columnNumber: 24
                }, this);
            case 'CHARACTER':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CharacterSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 240,
                    columnNumber: 24
                }, this);
            case 'PROJECTS':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-5 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-between items-center gap-3 pb-3",
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
                                                        background: '#ffffffff'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LandingPage.tsx",
                                                    lineNumber: 252,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                        fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                                                        letterSpacing: '0.14em',
                                                        color: '#ffffffff',
                                                        textTransform: 'uppercase'
                                                    },
                                                    children: "OPERATIONS // COMPLETED PROJECTS"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LandingPage.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 251,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.78rem',
                                                color: 'rgba(250, 250, 250, 0.45)',
                                                letterSpacing: '0.22em',
                                                textTransform: 'uppercase',
                                                marginTop: '3px'
                                            },
                                            children: "04 MAJOR SYSTEMS // CLICK ANY CARD TO VIEW REPOSITORY"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 271,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 250,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.72rem',
                                        color: '#00ed00ff',
                                        background: 'rgba(0, 0, 0, 0.06)',
                                        border: '1px solid rgba(124, 204, 102, 0.3)',
                                        padding: '4px 12px',
                                        letterSpacing: '0.2em',
                                        textTransform: 'uppercase',
                                        fontWeight: 700
                                    },
                                    children: "✓ ALL VERIFIED"
                                }, void 0, false, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 284,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 246,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                            children: USER_DATA.projects.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: p.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "block group p-5 transition-all duration-200",
                                    style: {
                                        background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderLeft: '3px solid #ffffff',
                                        position: 'relative',
                                        textDecoration: 'none'
                                    },
                                    children: [
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
                                                                color: 'rgba(255, 255, 255, 0.4)',
                                                                letterSpacing: '0.3em',
                                                                textTransform: 'uppercase',
                                                                display: 'block'
                                                            },
                                                            children: [
                                                                "OPERATION ",
                                                                p.opNum
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/LandingPage.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            style: {
                                                                fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                                fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
                                                                color: '#a1037fff',
                                                                letterSpacing: '0.08em',
                                                                textTransform: 'uppercase'
                                                            },
                                                            children: p.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/LandingPage.tsx",
                                                            lineNumber: 339,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/LandingPage.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                        fontSize: '0.66rem',
                                                        color: 'rgba(255,255,255,0.7)',
                                                        background: 'rgba(255,255,255,0.06)',
                                                        border: '1px solid rgba(255,255,255,0.15)',
                                                        padding: '3px 10px',
                                                        letterSpacing: '0.15em',
                                                        textTransform: 'uppercase',
                                                        whiteSpace: 'nowrap'
                                                    },
                                                    children: p.category
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LandingPage.tsx",
                                                    lineNumber: 351,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 318,
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
                                            children: p.desc
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 368,
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
                                                            background: 'rgba(255,255,255,0.05)',
                                                            border: '1px solid rgba(255,255,255,0.12)',
                                                            color: 'rgba(255,255,255,0.75)',
                                                            fontSize: '0.64rem',
                                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                            padding: '2px 8px',
                                                            letterSpacing: '0.18em',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: t
                                                    }, t, false, {
                                                        fileName: "[project]/components/LandingPage.tsx",
                                                        lineNumber: 391,
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
                                                    children: [
                                                        "✓ ",
                                                        p.status
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/LandingPage.tsx",
                                                    lineNumber: 407,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 382,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 304,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 302,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 244,
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
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
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
                                                            width: '3px',
                                                            height: '14px',
                                                            background: '#ffffff'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/LandingPage.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                            fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                                                            letterSpacing: '0.14em',
                                                            color: '#fff',
                                                            textTransform: 'uppercase'
                                                        },
                                                        children: "ARSENAL // TECHNICAL LOADOUT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/LandingPage.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 442,
                                                columnNumber: 37
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
                                                children: "CORE LANGUAGES, FRAMEWORKS, AI & SYSTEMS ENGINEERING"
                                            }, void 0, false, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 462,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 441,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '1rem',
                                            color: 'rgba(243, 243, 243, 0.5)',
                                            letterSpacing: '0.2em',
                                            textTransform: 'uppercase'
                                        },
                                        children: "12 LOADOUT ITEMS"
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 475,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 440,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 437,
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                    fontSize: '0.72rem',
                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                    letterSpacing: '0.3em',
                                                    textTransform: 'uppercase',
                                                    fontWeight: 700
                                                },
                                                children: category
                                            }, void 0, false, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 500,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    flex: 1,
                                                    height: '1px',
                                                    background: 'rgba(255,255,255,0.08)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 512,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 492,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                                        children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                                                    border: '1px solid rgba(255,255,255,0.08)',
                                                    borderLeft: `3px solid ${item.color}`,
                                                    padding: '12px 14px',
                                                    position: 'relative'
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                                    fontSize: '0.9rem',
                                                                    color: '#f5efefff',
                                                                    letterSpacing: '0.08em',
                                                                    textTransform: 'uppercase'
                                                                },
                                                                children: item.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/LandingPage.tsx",
                                                                lineNumber: 541,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: 'Share Tech Mono,monospace',
                                                                    fontSize: '0.85rem',
                                                                    color: item.color,
                                                                    fontWeight: 700
                                                                },
                                                                children: item.proficiency
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/LandingPage.tsx",
                                                                lineNumber: 552,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/LandingPage.tsx",
                                                        lineNumber: 533,
                                                        columnNumber: 45
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            width: '100%',
                                                            background: 'rgba(255,255,255,0.06)',
                                                            height: '3px',
                                                            position: 'relative'
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: item.proficiency,
                                                                height: '100%',
                                                                background: item.color
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/LandingPage.tsx",
                                                            lineNumber: 572,
                                                            columnNumber: 49
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/LandingPage.tsx",
                                                        lineNumber: 564,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 523,
                                                columnNumber: 41
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 521,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, category, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 491,
                                columnNumber: 29
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 435,
                    columnNumber: 21
                }, this);
            case 'CONTACT':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-5 w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                paddingBottom: '12px'
                            },
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
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 596,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                                                letterSpacing: '0.14em',
                                                color: '#fff',
                                                textTransform: 'uppercase'
                                            },
                                            children: "DIRECT DISPATCH // CONTACT & SOCIALS"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 603,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 595,
                                    columnNumber: 29
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
                                    children: "AVAILABLE FOR SOFTWARE ROLES, INTERNSHIPS AND TECHNICAL COLLABORATIONS"
                                }, void 0, false, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 615,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 592,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '10px 16px',
                                background: 'rgba(102,204,102,0.04)',
                                border: '1px solid rgba(102,204,102,0.2)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '6px',
                                        height: '6px',
                                        background: '#66CC66',
                                        borderRadius: '50%'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 640,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                        fontSize: '0.72rem',
                                        color: '#66CC66',
                                        letterSpacing: '0.25em',
                                        textTransform: 'uppercase',
                                        fontWeight: 700
                                    },
                                    children: "STATUS: ONLINE // OPEN FOR OPPORTUNITIES"
                                }, void 0, false, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 648,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 630,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    onClick: handleCopyEmail,
                                    className: "cursor-pointer p-5 transition-colors duration-200",
                                    style: {
                                        background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderLeft: '3px solid #ffffff',
                                        position: 'relative'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                        e.currentTarget.style.borderLeftColor = '#ffffff';
                                    },
                                    children: [
                                        copied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: 'absolute',
                                                inset: 0,
                                                background: 'rgba(102,204,102,0.12)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                zIndex: 5
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",sans-serif',
                                                    fontSize: '1rem',
                                                    color: '#66CC66',
                                                    letterSpacing: '0.15em'
                                                },
                                                children: "✓ EMAIL COPIED"
                                            }, void 0, false, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 694,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 683,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.68rem',
                                                color: 'rgba(255,255,255,0.4)',
                                                letterSpacing: '0.3em',
                                                textTransform: 'uppercase',
                                                marginBottom: '6px'
                                            },
                                            children: "DIRECT EMAIL"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 706,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                fontSize: '0.92rem',
                                                color: '#fff',
                                                letterSpacing: '0.05em',
                                                textTransform: 'uppercase',
                                                wordBreak: 'break-all'
                                            },
                                            children: USER_DATA.email
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 718,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.72rem',
                                                color: 'rgba(255,255,255,0.5)',
                                                textTransform: 'uppercase',
                                                marginTop: '12px',
                                                fontWeight: 700,
                                                letterSpacing: '0.2em'
                                            },
                                            children: "[ CLICK TO COPY ]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 730,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 665,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: USER_DATA.github,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "block p-5 transition-colors duration-200",
                                    style: {
                                        background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderLeft: '3px solid #cbd5e1',
                                        textDecoration: 'none'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                        e.currentTarget.style.borderLeftColor = '#cbd5e1';
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.68rem',
                                                color: 'rgba(255,255,255,0.4)',
                                                letterSpacing: '0.3em',
                                                textTransform: 'uppercase',
                                                marginBottom: '6px'
                                            },
                                            children: "GITHUB"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 765,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                fontSize: '1.05rem',
                                                color: '#fff',
                                                letterSpacing: '0.08em',
                                                textTransform: 'uppercase'
                                            },
                                            children: "lokiverse-devil"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 777,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.72rem',
                                                color: 'rgba(255,255,255,0.5)',
                                                textTransform: 'uppercase',
                                                marginTop: '12px',
                                                fontWeight: 700,
                                                letterSpacing: '0.2em'
                                            },
                                            children: "[ VIEW REPOSITORIES ↗ ]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 788,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 746,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: USER_DATA.linkedin,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "block p-5 transition-colors duration-200",
                                    style: {
                                        background: 'linear-gradient(135deg, #09090c 0%, #060608 100%)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderLeft: '3px solid #94a3b8',
                                        textDecoration: 'none'
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)';
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                        e.currentTarget.style.borderLeftColor = '#94a3b8';
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.68rem',
                                                color: 'rgba(255,255,255,0.4)',
                                                letterSpacing: '0.3em',
                                                textTransform: 'uppercase',
                                                marginBottom: '6px'
                                            },
                                            children: "LINKEDIN"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 823,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                                fontSize: '1.05rem',
                                                color: '#fff',
                                                letterSpacing: '0.08em',
                                                textTransform: 'uppercase'
                                            },
                                            children: "Om Pandey"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 835,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                                fontSize: '0.72rem',
                                                color: 'rgba(255,255,255,0.5)',
                                                textTransform: 'uppercase',
                                                marginTop: '12px',
                                                fontWeight: 700,
                                                letterSpacing: '0.2em'
                                            },
                                            children: "[ CONNECT ON LINKEDIN ↗ ]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 846,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/LandingPage.tsx",
                                    lineNumber: 804,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/LandingPage.tsx",
                            lineNumber: 663,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/LandingPage.tsx",
                    lineNumber: 590,
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
            background: '#070709',
            overflow: 'hidden',
            zIndex: 100,
            userSelect: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/LandingPage.tsx",
                lineNumber: 880,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    padding: '0 32px',
                    height: '58px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 130,
                    background: '#09090c',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
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
                                    width: '38px',
                                    height: '38px',
                                    background: '#121216',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontFamily: 'Pricedown, "Share Tech Mono", monospace',
                                    fontSize: '1.25rem',
                                    color: '#ffffff',
                                    flexShrink: 0
                                },
                                children: USER_DATA.rank
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 901,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                            fontSize: '1.15rem',
                                            letterSpacing: '0.14em',
                                            color: '#ffffff'
                                        },
                                        children: USER_DATA.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 920,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                            fontSize: '0.7rem',
                                            letterSpacing: '0.24em',
                                            color: 'rgba(255, 255, 255, 0.45)',
                                            marginTop: '1px'
                                        },
                                        children: USER_DATA.tagline
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 930,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 919,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 900,
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
                                    lineNumber: 947,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 946,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'right'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'Pricedown, "Share Tech Mono", monospace',
                                            fontSize: '1.35rem',
                                            color: '#66CC66',
                                            letterSpacing: '0.04em',
                                            lineHeight: 1.1
                                        },
                                        children: mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                            target: USER_DATA.cash
                                        }, void 0, false, {
                                            fileName: "[project]/components/LandingPage.tsx",
                                            lineNumber: 961,
                                            columnNumber: 40
                                        }, this) : USER_DATA.cash
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 952,
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
                                                    color: 'rgba(255,255,255,0.65)',
                                                    fontFamily: 'Pricedown, "Share Tech Mono", monospace',
                                                    fontSize: '0.85rem'
                                                },
                                                children: mounted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AnimatedCounter, {
                                                    target: USER_DATA.bank
                                                }, void 0, false, {
                                                    fileName: "[project]/components/LandingPage.tsx",
                                                    lineNumber: 975,
                                                    columnNumber: 44
                                                }, this) : USER_DATA.bank
                                            }, void 0, false, {
                                                fileName: "[project]/components/LandingPage.tsx",
                                                lineNumber: 974,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 963,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 951,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'Share Tech Mono, monospace',
                                    fontSize: '0.92rem',
                                    letterSpacing: '0.08em',
                                    color: 'rgba(255, 255, 255, 0.75)',
                                    borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
                                    paddingLeft: '18px',
                                    minWidth: '68px'
                                },
                                children: time
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 981,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleAmbience,
                                style: {
                                    background: 'transparent',
                                    border: `1px solid ${ambienceMuted ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.3)'}`,
                                    color: ambienceMuted ? 'rgba(255,255,255,0.3)' : '#ffffff',
                                    padding: '4px 12px',
                                    cursor: 'pointer',
                                    fontSize: '0.66rem',
                                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    transition: 'all 0.18s ease'
                                },
                                children: ambienceMuted ? 'MUTED' : 'AUDIO'
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 996,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 945,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LandingPage.tsx",
                lineNumber: 883,
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
                    padding: '76px 20px 48px',
                    zIndex: 120
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '1px',
                            marginBottom: '10px',
                            zIndex: 125,
                            maxWidth: '1220px',
                            width: '100%',
                            background: '#09090c',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                        },
                        children: MENU_ITEMS.map((item)=>{
                            const isActive = activeItem === item.key;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleTabChange(item.key),
                                style: {
                                    fontFamily: 'ChaletLondon1960,"Bebas Neue",Montserrat,sans-serif',
                                    fontSize: 'clamp(0.82rem, 1.25vw, 1rem)',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    padding: '11px 24px',
                                    background: isActive ? '#ffffff' : 'transparent',
                                    color: isActive ? '#000000' : 'rgba(255,255,255,0.45)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.15s ease',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    flex: '1 1 auto',
                                    justifyContent: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 1069,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontSize: '0.62em',
                                            opacity: isActive ? 0.45 : 0.25,
                                            background: isActive ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.08)',
                                            padding: '1px 5px'
                                        },
                                        children: item.shortcut
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 1070,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, item.key, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1048,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 1031,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: contentRef,
                        style: {
                            width: 'min(96vw, 1220px)',
                            maxHeight: '72vh',
                            background: '#09090c',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            padding: '24px 28px',
                            boxShadow: '0 24px 80px rgba(0,0,0,0.95)',
                            overflowY: 'auto',
                            position: 'relative'
                        },
                        children: renderContent()
                    }, void 0, false, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 1086,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LandingPage.tsx",
                lineNumber: 1018,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '36px',
                    padding: '0 32px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 130,
                    fontFamily: 'ChaletComprime1960,"Barlow Condensed",sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.25em',
                    color: 'rgba(255,255,255,0.3)',
                    textTransform: 'uppercase',
                    background: '#09090c',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)'
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
                                children: "[KEYS 1-5: TABS]"
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1126,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hidden sm:inline",
                                children: "[SELECT ITEMS TO INSPECT]"
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1127,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 1125,
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
                                        style: {
                                            width: '5px',
                                            height: '5px',
                                            background: '#66CC66',
                                            borderRadius: '50%'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/LandingPage.tsx",
                                        lineNumber: 1132,
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
                                        lineNumber: 1140,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1131,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: 'rgba(255,255,255,0.15)'
                                },
                                children: "|"
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1142,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "OM PANDEY // PORTFOLIO"
                            }, void 0, false, {
                                fileName: "[project]/components/LandingPage.tsx",
                                lineNumber: 1143,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LandingPage.tsx",
                        lineNumber: 1130,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LandingPage.tsx",
                lineNumber: 1104,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LandingPage.tsx",
        lineNumber: 870,
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

//# sourceMappingURL=components_0iz0u5a._.js.map