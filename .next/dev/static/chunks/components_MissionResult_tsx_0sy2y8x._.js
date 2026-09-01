(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/MissionResult.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MissionResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const CONFIGS = {
    'passed-access': {
        color: '#4ade80',
        line1: 'MISSION PASSED',
        line2: 'ACCESS GRANTED',
        isPassed: true,
        rewardText: '+₹15,000 CASH BONUS'
    },
    'passed-portfolio': {
        color: '#4ade80',
        line1: 'MISSION PASSED',
        line2: 'PORTFOLIO LOADED',
        isPassed: true,
        rewardText: '+₹40,000 HEIST SHARE'
    },
    'failed-denied': {
        color: '#ef4444',
        line1: 'MISSION FAILED',
        line2: 'ACCESS DENIED — RETRYING...',
        isPassed: false
    },
    'failed-redirect': {
        color: '#ef4444',
        line1: 'MISSION FAILED',
        line2: 'REDIRECTING TO BRIEFING...',
        isPassed: false
    }
};
function MissionResult({ type, onComplete, sounds }) {
    _s();
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flashRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headlineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const subtitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const statsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const completedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const cfg = type && CONFIGS[type] || CONFIGS['passed-access'];
    const triggerComplete = ()=>{
        if (completedRef.current) return;
        completedRef.current = true;
        onComplete();
    };
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
                onComplete: triggerComplete
            });
            // Initial flash
            if (flashRef.current) {
                tl.fromTo(flashRef.current, {
                    opacity: 0.7,
                    backgroundColor: cfg.color
                }, {
                    opacity: 0,
                    duration: 0.35,
                    ease: 'power2.out'
                });
            }
            // Background dim
            if (overlayRef.current) {
                tl.to(overlayRef.current, {
                    backgroundColor: 'rgba(5, 5, 8, 0.95)',
                    duration: 0.25
                }, '-=0.25');
            }
            // Headline Slam
            if (headlineRef.current) {
                tl.fromTo(headlineRef.current, {
                    scale: 2.3,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.4,
                    ease: 'back.out(1.5)'
                }, '-=0.15');
            }
            // Horizontal Line Expand
            if (lineRef.current) {
                tl.fromTo(lineRef.current, {
                    scaleX: 0,
                    opacity: 0
                }, {
                    scaleX: 1,
                    opacity: 1,
                    duration: 0.35,
                    ease: 'power3.out'
                }, '-=0.2');
            }
            // Subtitle Delay
            if (subtitleRef.current) {
                tl.fromTo(subtitleRef.current, {
                    opacity: 0,
                    y: 12
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                }, '-=0.15');
            }
            // Payout / Stats ticker
            if (statsRef.current && cfg.isPassed) {
                tl.fromTo(statsRef.current, {
                    opacity: 0,
                    y: 15
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.35,
                    ease: 'power2.out'
                }, '-=0.1');
            }
            tl.to({}, {
                duration: 2.2
            }); // Hold duration
            if (overlayRef.current) {
                tl.to(overlayRef.current, {
                    opacity: 0,
                    duration: 0.45,
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
                    if (lineRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(lineRef.current);
                    if (statsRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(statsRef.current);
                }
            })["MissionResult.useEffect"];
        }
    }["MissionResult.useEffect"], [
        cfg
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
            userSelect: 'none',
            cursor: 'default'
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
                lineNumber: 161,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/MissionResult.tsx",
                lineNumber: 170,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    zIndex: 9002,
                    padding: '0 20px',
                    maxWidth: '900px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: headlineRef,
                        className: "mission-headline",
                        style: {
                            fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            color: cfg.color,
                            lineHeight: 0.95,
                            textShadow: `0 4px 30px rgba(0,0,0,0.95), 0 0 50px ${cfg.color}66`,
                            fontWeight: 'bold'
                        },
                        children: cfg.line1
                    }, void 0, false, {
                        fileName: "[project]/components/MissionResult.tsx",
                        lineNumber: 173,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: lineRef,
                        style: {
                            height: '2px',
                            width: '320px',
                            background: cfg.color,
                            margin: '18px auto',
                            opacity: 0,
                            boxShadow: `0 0 14px ${cfg.color}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/MissionResult.tsx",
                        lineNumber: 189,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: subtitleRef,
                        className: "mission-subtitle",
                        style: {
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            letterSpacing: '0.45em',
                            textTransform: 'uppercase',
                            color: '#ffffff',
                            opacity: 0,
                            textShadow: '0 2px 10px rgba(0,0,0,0.9)'
                        },
                        children: cfg.line2
                    }, void 0, false, {
                        fileName: "[project]/components/MissionResult.tsx",
                        lineNumber: 201,
                        columnNumber: 17
                    }, this),
                    cfg.isPassed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: statsRef,
                        style: {
                            marginTop: '28px',
                            display: 'inline-flex',
                            gap: '24px',
                            padding: '10px 24px',
                            background: 'rgba(10, 10, 14, 0.85)',
                            border: '1px solid rgba(74, 222, 128, 0.35)',
                            boxShadow: '0 0 25px rgba(74, 222, 128, 0.15)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                            fontSize: '0.7rem',
                                            color: 'rgba(255,255,255,0.5)',
                                            letterSpacing: '0.2em'
                                        },
                                        children: "PAYOUT"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MissionResult.tsx",
                                        lineNumber: 231,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'Share Tech Mono, monospace',
                                            fontSize: '1rem',
                                            color: '#4ade80',
                                            fontWeight: 700
                                        },
                                        children: cfg.rewardText
                                    }, void 0, false, {
                                        fileName: "[project]/components/MissionResult.tsx",
                                        lineNumber: 234,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MissionResult.tsx",
                                lineNumber: 230,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '1px',
                                    background: 'rgba(255,255,255,0.15)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/MissionResult.tsx",
                                lineNumber: 239,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                            fontSize: '0.7rem',
                                            color: 'rgba(255,255,255,0.5)',
                                            letterSpacing: '0.2em'
                                        },
                                        children: "STATUS"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MissionResult.tsx",
                                        lineNumber: 242,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'ChaletLondon1960, "Bebas Neue", sans-serif',
                                            fontSize: '1rem',
                                            color: '#f5a623',
                                            letterSpacing: '0.1em'
                                        },
                                        children: "GOLD MEDAL ★★★"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MissionResult.tsx",
                                        lineNumber: 245,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MissionResult.tsx",
                                lineNumber: 241,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MissionResult.tsx",
                        lineNumber: 218,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MissionResult.tsx",
                lineNumber: 172,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MissionResult.tsx",
        lineNumber: 147,
        columnNumber: 9
    }, this);
}
_s(MissionResult, "kyBvt6DBLXYWmxtAh3LTCh21M24=");
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

//# sourceMappingURL=components_MissionResult_tsx_0sy2y8x._.js.map