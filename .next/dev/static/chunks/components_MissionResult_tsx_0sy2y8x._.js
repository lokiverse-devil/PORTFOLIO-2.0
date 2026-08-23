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
        color: '#66CC66',
        line1: 'MISSION PASSED',
        line2: 'ACCESS GRANTED',
        isPassed: true
    },
    'passed-portfolio': {
        color: '#66CC66',
        line1: 'MISSION PASSED',
        line2: 'PORTFOLIO LOADED',
        isPassed: true
    },
    'failed-denied': {
        color: '#b80000',
        line1: 'MISSION FAILED',
        line2: 'ACCESS DENIED',
        isPassed: false
    },
    'failed-redirect': {
        color: '#b80000',
        line1: 'MISSION FAILED',
        line2: 'REDIRECTING\u2026',
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
            // Initial flash
            if (flashRef.current) {
                tl.fromTo(flashRef.current, {
                    opacity: 0.6,
                    backgroundColor: cfg.color
                }, {
                    opacity: 0,
                    duration: 0.35,
                    ease: 'power2.out'
                });
            }
            // Background desaturation / dimming
            if (overlayRef.current) {
                tl.to(overlayRef.current, {
                    backgroundColor: 'rgba(0,0,0,0.92)',
                    duration: 0.3
                }, '-=0.25');
            }
            // Headline Slam
            if (headlineRef.current) {
                tl.fromTo(headlineRef.current, {
                    scale: 2.2,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.45,
                    ease: 'expo.out'
                }, '-=0.2');
            }
            // Horizontal Line Expand
            if (lineRef.current) {
                tl.fromTo(lineRef.current, {
                    scaleX: 0,
                    opacity: 0
                }, {
                    scaleX: 1,
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power3.out'
                }, '-=0.2');
            }
            // Subtitle Delay
            if (subtitleRef.current) {
                tl.fromTo(subtitleRef.current, {
                    opacity: 0,
                    y: 10
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.35,
                    ease: 'power2.out'
                }, '-=0.2');
            }
            tl.to({}, {
                duration: 2.6
            }); // Hold for GTA victory feel
            if (overlayRef.current) {
                tl.to(overlayRef.current, {
                    opacity: 0,
                    duration: 0.6,
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
                lineNumber: 137,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "noise-overlay"
            }, void 0, false, {
                fileName: "[project]/components/MissionResult.tsx",
                lineNumber: 146,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crt-scanlines"
            }, void 0, false, {
                fileName: "[project]/components/MissionResult.tsx",
                lineNumber: 147,
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
                            textShadow: `0 4px 30px rgba(0,0,0,0.9), 0 0 40px ${cfg.color}55`,
                            fontWeight: 'bold'
                        },
                        children: cfg.line1
                    }, void 0, false, {
                        fileName: "[project]/components/MissionResult.tsx",
                        lineNumber: 150,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: lineRef,
                        style: {
                            height: '2px',
                            width: '280px',
                            background: cfg.color,
                            margin: '18px auto',
                            opacity: 0,
                            boxShadow: `0 0 10px ${cfg.color}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/MissionResult.tsx",
                        lineNumber: 166,
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
                        lineNumber: 178,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MissionResult.tsx",
                lineNumber: 149,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MissionResult.tsx",
        lineNumber: 124,
        columnNumber: 9
    }, this);
}
_s(MissionResult, "jjNs9WrABMKacb682a+LMlalWjw=");
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