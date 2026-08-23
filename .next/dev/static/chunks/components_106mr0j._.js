(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/WantedStarsHUD.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WantedStarsHUD
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function WantedStarsHUD({ count = 5, flashing = false, size = 20, className = '' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex items-center gap-1.5 ${className}`,
        style: {
            filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.8))'
        },
        children: [
            0,
            1,
            2,
            3,
            4
        ].map((i)=>{
            const isFilled = i < count;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: size,
                height: size,
                viewBox: "0 0 72 72",
                className: flashing && isFilled ? 'gta-wanted-flash' : '',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                    points: "36,4 44,28 70,28 49,44 57,68 36,52 15,68 23,44 2,28 28,28",
                    fill: isFilled ? '#f5a623' : 'rgba(255, 255, 255, 0.15)',
                    stroke: isFilled ? '#ffffff' : 'rgba(255, 255, 255, 0.3)',
                    strokeWidth: "2",
                    style: {
                        filter: isFilled ? 'drop-shadow(0 0 4px rgba(245,166,35,0.8))' : 'none'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/WantedStarsHUD.tsx",
                    lineNumber: 32,
                    columnNumber: 25
                }, this)
            }, i, false, {
                fileName: "[project]/components/WantedStarsHUD.tsx",
                lineNumber: 25,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/WantedStarsHUD.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_c = WantedStarsHUD;
var _c;
__turbopack_context__.k.register(_c, "WantedStarsHUD");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MissionResult.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MissionResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WantedStarsHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WantedStarsHUD.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const CONFIGS = {
    'passed-access': {
        color: '#66CC66',
        line1: 'MISSION PASSED',
        line2: 'ACCESS GRANTED',
        isPassed: true,
        stat1: 'RESPECT +',
        stat2: 'CLASSIFIED CLEARANCE: UNLOCKED'
    },
    'passed-portfolio': {
        color: '#66CC66',
        line1: 'MISSION PASSED',
        line2: 'PORTFOLIO LOADED',
        isPassed: true,
        stat1: 'INTEL + 100',
        stat2: 'ALL REPOSITORIES UNLOCKED'
    },
    'failed-denied': {
        color: '#cc0000',
        line1: 'MISSION FAILED',
        line2: 'ACCESS DENIED',
        isPassed: false,
        stat1: 'CLEARANCE: REJECTED',
        stat2: 'FALLBACK ROUTE ENGAGED'
    },
    'failed-redirect': {
        color: '#cc0000',
        line1: 'MISSION FAILED',
        line2: 'REDIRECTING TO INTEL\u2026',
        isPassed: false,
        stat1: 'SESSION ABORTED',
        stat2: 'RE-ROUTING TO LOS SANTOS'
    }
};
function MissionResult({ type, onComplete, sounds }) {
    _s();
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flashRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headlineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const subtitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const statsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cfg = type && CONFIGS[type] || CONFIGS['passed-access'];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MissionResult.useEffect": ()=>{
            try {
                if (sounds) {
                    if (cfg.isPassed) {
                        sounds.passed?.play();
                    } else {
                        sounds.failed?.play();
                    }
                }
            } catch (e) {
                console.warn('Audio notice in mission result:', e);
            }
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                onComplete
            });
            // Intense Entry Flash
            if (flashRef.current) {
                tl.fromTo(flashRef.current, {
                    opacity: 0.9,
                    backgroundColor: cfg.color
                }, {
                    opacity: 0,
                    duration: 0.38,
                    ease: 'power2.out'
                });
            }
            // Background Dim
            if (overlayRef.current) {
                tl.to(overlayRef.current, {
                    backgroundColor: 'rgba(0,0,0,0.92)',
                    duration: 0.35
                }, '-=0.3');
            }
            // Headline SLAM with scale
            if (headlineRef.current) {
                tl.fromTo(headlineRef.current, {
                    scale: 2.5,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.45,
                    ease: 'expo.out',
                    onStart: {
                        "MissionResult.useEffect": ()=>{
                            if (contentRef.current) {
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(contentRef.current, {
                                    y: -12
                                }, {
                                    y: 0,
                                    duration: 0.08,
                                    repeat: 4,
                                    yoyo: true
                                });
                            }
                        }
                    }["MissionResult.useEffect"]
                }, '-=0.25');
            }
            // Subtitle Delay
            if (subtitleRef.current) {
                tl.fromTo(subtitleRef.current, {
                    opacity: 0,
                    y: 15
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: 'power2.out'
                }, '-=0.15');
            }
            // Stats delay
            if (statsRef.current) {
                tl.fromTo(statsRef.current, {
                    opacity: 0,
                    scale: 0.9
                }, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.35,
                    ease: 'back.out(1.5)'
                }, '+=0.1');
            }
            tl.to({}, {
                duration: 2.4
            });
            if (overlayRef.current) {
                tl.to(overlayRef.current, {
                    opacity: 0,
                    duration: 0.7,
                    ease: 'power2.inOut'
                });
            }
            return ({
                "MissionResult.useEffect": ()=>{
                    tl.kill();
                    if (overlayRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(overlayRef.current);
                    if (flashRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(flashRef.current);
                    if (headlineRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(headlineRef.current);
                    if (subtitleRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(subtitleRef.current);
                    if (statsRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(statsRef.current);
                    if (contentRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(contentRef.current);
                }
            })["MissionResult.useEffect"];
        }
    }["MissionResult.useEffect"], [
        cfg,
        onComplete,
        sounds
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: overlayRef,
        style: {
            position: 'fixed',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9000,
            userSelect: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: flashRef,
                style: {
                    position: 'absolute',
                    inset: 0,
                    zIndex: 9001,
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/components/MissionResult.tsx",
                lineNumber: 163,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "noise-overlay"
            }, void 0, false, {
                fileName: "[project]/components/MissionResult.tsx",
                lineNumber: 172,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crt-scanlines"
            }, void 0, false, {
                fileName: "[project]/components/MissionResult.tsx",
                lineNumber: 173,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '60px',
                    background: '#000',
                    borderBottom: `2px solid ${cfg.color}`,
                    zIndex: 9002
                }
            }, void 0, false, {
                fileName: "[project]/components/MissionResult.tsx",
                lineNumber: 176,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60px',
                    background: '#000',
                    borderTop: `2px solid ${cfg.color}`,
                    zIndex: 9002
                }
            }, void 0, false, {
                fileName: "[project]/components/MissionResult.tsx",
                lineNumber: 188,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: contentRef,
                style: {
                    textAlign: 'center',
                    zIndex: 9003,
                    padding: '0 24px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: '16px',
                            display: 'flex',
                            justifyContent: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WantedStarsHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            count: cfg.isPassed ? 5 : 2,
                            flashing: !cfg.isPassed,
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/components/MissionResult.tsx",
                            lineNumber: 203,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/MissionResult.tsx",
                        lineNumber: 202,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: headlineRef,
                        className: "mission-headline",
                        style: {
                            fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            color: cfg.color,
                            lineHeight: 1,
                            marginBottom: 12,
                            textShadow: `0 0 40px ${cfg.color}, 0 8px 30px rgba(0,0,0,0.95)`
                        },
                        children: cfg.line1
                    }, void 0, false, {
                        fileName: "[project]/components/MissionResult.tsx",
                        lineNumber: 206,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: subtitleRef,
                        className: "mission-subtitle",
                        style: {
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            letterSpacing: '0.4em',
                            textTransform: 'uppercase',
                            color: '#ffffff',
                            opacity: 0,
                            textShadow: '0 2px 12px rgba(0,0,0,0.9)',
                            marginBottom: '24px'
                        },
                        children: cfg.line2
                    }, void 0, false, {
                        fileName: "[project]/components/MissionResult.tsx",
                        lineNumber: 222,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: statsRef,
                        style: {
                            opacity: 0,
                            display: 'inline-flex',
                            flexDirection: 'column',
                            gap: '6px',
                            background: 'rgba(0, 0, 0, 0.75)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            padding: '10px 28px',
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase',
                            color: '#ffffff',
                            fontSize: '0.95rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: cfg.color,
                                    fontWeight: 'bold'
                                },
                                children: cfg.stat1
                            }, void 0, false, {
                                fileName: "[project]/components/MissionResult.tsx",
                                lineNumber: 256,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: 'rgba(255,255,255,0.7)',
                                    fontSize: '0.8rem'
                                },
                                children: cfg.stat2
                            }, void 0, false, {
                                fileName: "[project]/components/MissionResult.tsx",
                                lineNumber: 257,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MissionResult.tsx",
                        lineNumber: 239,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MissionResult.tsx",
                lineNumber: 201,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MissionResult.tsx",
        lineNumber: 150,
        columnNumber: 9
    }, this);
}
_s(MissionResult, "qFy/EcINR0b8hDbRCtyf8ViZLCk=");
_c = MissionResult;
var _c;
__turbopack_context__.k.register(_c, "MissionResult");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MissionResult.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/MissionResult.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_106mr0j._.js.map