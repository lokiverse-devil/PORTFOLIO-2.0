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
"[project]/components/LoadingFlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingFlow
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
const IMAGES = [
    '/images/loading_1.jpeg',
    '/images/loading_2.jpeg',
    '/images/loading_3.jpeg'
];
const TIPS = [
    'LOS SANTOS — WHERE REPUTATIONS ARE BUILT IN CODE',
    'STAY ALERT: EVERY LINE OF CODE MATTERS IN THE OPEN WORLD',
    'MODERN PROBLEMS REQUIRE DISTRIBUTED ARCHITECTURES',
    'INVEST IN YOUR TECH STACK, NOT JUST YOUR AMMO',
    'EXPLORE THE FULL MAP TO UNCOVER HIDDEN OPERATIONS'
];
const STATUS_STEPS = [
    {
        text: 'STREAMING LOS SANTOS ASSETS',
        pct: '28%'
    },
    {
        text: 'COMPILING SHADERS & LIGHTING',
        pct: '56%'
    },
    {
        text: 'ESTABLISHING SECURE PROTOCOL',
        pct: '84%'
    },
    {
        text: 'SYNCHRONIZING DEVELOPER INTEL',
        pct: '98%'
    },
    {
        text: 'OPERATION READY',
        pct: '100%'
    }
];
function LoadingFlow({ onComplete, sounds }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const barRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spinnerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [tipIdx, setTipIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [statusIdx, setStatusIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingFlow.useEffect": ()=>{
            try {
                if (sounds?.ambience) {
                    if (!sounds.ambience.playing()) {
                        sounds.ambience.volume(0.45);
                        sounds.ambience.loop(true);
                        sounds.ambience.play();
                    }
                }
            } catch (e) {
                console.warn('Audio ambience notice:', e);
            }
            // Animate first image with slow Ken Burns drift
            if (imgs.current[0]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(imgs.current[0], {
                    scale: 1.0,
                    x: 0,
                    opacity: 1
                }, {
                    scale: 1.08,
                    x: -15,
                    duration: 6,
                    ease: 'sine.out'
                });
            }
            // GTA Spinner rotation
            if (spinnerRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(spinnerRef.current, {
                    rotation: 360,
                    duration: 1.8,
                    repeat: -1,
                    ease: 'linear'
                });
            }
            // Smooth image cycling
            let current = 0;
            const cycleImages = {
                "LoadingFlow.useEffect.cycleImages": ()=>{
                    const next = (current + 1) % IMAGES.length;
                    if (imgs.current[current]) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imgs.current[current], {
                            opacity: 0,
                            duration: 1.4,
                            ease: 'power2.inOut'
                        });
                    }
                    if (imgs.current[next]) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(imgs.current[next], {
                            opacity: 0,
                            scale: 1.0,
                            x: 10
                        }, {
                            opacity: 1,
                            scale: 1.08,
                            x: -10,
                            duration: 6,
                            ease: 'sine.out'
                        });
                    }
                    current = next;
                }
            }["LoadingFlow.useEffect.cycleImages"];
            const imgInterval = setInterval(cycleImages, 5500);
            // Tip rotation
            const tipInterval = setInterval({
                "LoadingFlow.useEffect.tipInterval": ()=>{
                    setTipIdx({
                        "LoadingFlow.useEffect.tipInterval": (p)=>(p + 1) % TIPS.length
                    }["LoadingFlow.useEffect.tipInterval"]);
                }
            }["LoadingFlow.useEffect.tipInterval"], 4500);
            // Loading bar progress
            const barTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                onComplete: {
                    "LoadingFlow.useEffect.barTl": ()=>{
                        clearInterval(imgInterval);
                        clearInterval(tipInterval);
                        setTimeout(onComplete, 800);
                    }
                }["LoadingFlow.useEffect.barTl"]
            });
            if (barRef.current) {
                barTl.to(barRef.current, {
                    width: '28%',
                    duration: 2.2,
                    ease: 'power2.out',
                    onStart: {
                        "LoadingFlow.useEffect": ()=>setStatusIdx(0)
                    }["LoadingFlow.useEffect"]
                });
                barTl.to({}, {
                    duration: 0.6
                });
                barTl.to(barRef.current, {
                    width: '56%',
                    duration: 2.8,
                    ease: 'power1.inOut',
                    onStart: {
                        "LoadingFlow.useEffect": ()=>setStatusIdx(1)
                    }["LoadingFlow.useEffect"]
                });
                barTl.to({}, {
                    duration: 0.8
                });
                barTl.to(barRef.current, {
                    width: '84%',
                    duration: 3.2,
                    ease: 'power1.out',
                    onStart: {
                        "LoadingFlow.useEffect": ()=>setStatusIdx(2)
                    }["LoadingFlow.useEffect"]
                });
                barTl.to(barRef.current, {
                    width: '98%',
                    duration: 2.0,
                    ease: 'power2.out',
                    onStart: {
                        "LoadingFlow.useEffect": ()=>setStatusIdx(3)
                    }["LoadingFlow.useEffect"]
                });
                barTl.to({}, {
                    duration: 0.5
                });
                barTl.to(barRef.current, {
                    width: '100%',
                    duration: 0.6,
                    ease: 'power3.in',
                    onStart: {
                        "LoadingFlow.useEffect": ()=>setStatusIdx(4)
                    }["LoadingFlow.useEffect"]
                });
            }
            return ({
                "LoadingFlow.useEffect": ()=>{
                    barTl.kill();
                    clearInterval(imgInterval);
                    clearInterval(tipInterval);
                    imgs.current.forEach({
                        "LoadingFlow.useEffect": (img)=>{
                            if (img) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(img);
                        }
                    }["LoadingFlow.useEffect"]);
                    if (barRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(barRef.current);
                    if (spinnerRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(spinnerRef.current);
                }
            })["LoadingFlow.useEffect"];
        }
    }["LoadingFlow.useEffect"], [
        onComplete,
        sounds
    ]);
    const currentStatus = STATUS_STEPS[statusIdx] || STATUS_STEPS[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            position: 'fixed',
            inset: 0,
            background: '#000',
            zIndex: 100,
            overflow: 'hidden',
            userSelect: 'none'
        },
        children: [
            IMAGES.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    ref: (el)=>{
                        imgs.current[i] = el;
                    },
                    src: src,
                    alt: "Loading artwork",
                    style: {
                        position: 'absolute',
                        inset: '-5%',
                        width: '110%',
                        height: '110%',
                        objectFit: 'cover',
                        opacity: i === 0 ? 1 : 0,
                        filter: 'brightness(0.9) contrast(1.1)',
                        transformOrigin: 'center center'
                    }
                }, src, false, {
                    fileName: "[project]/components/LoadingFlow.tsx",
                    lineNumber: 171,
                    columnNumber: 17
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/LoadingFlow.tsx",
                lineNumber: 191,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "noise-overlay"
            }, void 0, false, {
                fileName: "[project]/components/LoadingFlow.tsx",
                lineNumber: 192,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crt-scanlines"
            }, void 0, false, {
                fileName: "[project]/components/LoadingFlow.tsx",
                lineNumber: 193,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 36,
                    right: 48,
                    zIndex: 110,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '6px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: '0.85rem',
                            letterSpacing: '0.25em',
                            color: 'rgba(255,255,255,0.7)',
                            textTransform: 'uppercase'
                        },
                        children: "ONLINE // SAN ANDREAS"
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingFlow.tsx",
                        lineNumber: 208,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WantedStarsHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        count: 5,
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingFlow.tsx",
                        lineNumber: 219,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LoadingFlow.tsx",
                lineNumber: 196,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "loading-tip-container",
                style: {
                    position: 'absolute',
                    bottom: 120,
                    left: 54,
                    right: 54,
                    zIndex: 110,
                    maxWidth: '850px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: '0.75rem',
                            letterSpacing: '0.3em',
                            color: '#f5a623',
                            marginBottom: '6px',
                            textTransform: 'uppercase'
                        },
                        children: "INTEL BRIEFING"
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingFlow.tsx",
                        lineNumber: 234,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: 'clamp(0.95rem, 2.2vw, 1.25rem)',
                            letterSpacing: '0.2em',
                            lineHeight: 1.4,
                            textTransform: 'uppercase',
                            color: '#ffffff',
                            textShadow: '0 2px 10px rgba(0,0,0,0.9)',
                            transition: 'opacity 0.5s ease'
                        },
                        children: TIPS[tipIdx]
                    }, tipIdx, false, {
                        fileName: "[project]/components/LoadingFlow.tsx",
                        lineNumber: 246,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LoadingFlow.tsx",
                lineNumber: 223,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "loading-bar-container",
                style: {
                    position: 'absolute',
                    bottom: 45,
                    left: 54,
                    right: 54,
                    zIndex: 120
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '8px',
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: '0.85rem',
                            letterSpacing: '0.2em',
                            color: 'rgba(255,255,255,0.7)',
                            textTransform: 'uppercase'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        ref: spinnerRef,
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "#f5a623",
                                        strokeWidth: "3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "9",
                                            strokeDasharray: "30 15"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoadingFlow.tsx",
                                            lineNumber: 297,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/LoadingFlow.tsx",
                                        lineNumber: 288,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: currentStatus.text
                                    }, void 0, false, {
                                        fileName: "[project]/components/LoadingFlow.tsx",
                                        lineNumber: 299,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LoadingFlow.tsx",
                                lineNumber: 287,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#f5a623',
                                    fontWeight: 'bold'
                                },
                                children: currentStatus.pct
                            }, void 0, false, {
                                fileName: "[project]/components/LoadingFlow.tsx",
                                lineNumber: 301,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LoadingFlow.tsx",
                        lineNumber: 274,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: '4px',
                            background: 'rgba(255,255,255,0.18)',
                            width: '100%',
                            overflow: 'hidden'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: barRef,
                            style: {
                                height: '100%',
                                width: '0%',
                                background: '#ffffff',
                                boxShadow: '0 0 14px rgba(255,255,255,0.9)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/LoadingFlow.tsx",
                            lineNumber: 312,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingFlow.tsx",
                        lineNumber: 304,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LoadingFlow.tsx",
                lineNumber: 264,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LoadingFlow.tsx",
        lineNumber: 158,
        columnNumber: 9
    }, this);
}
_s(LoadingFlow, "ba2hJQ2lno4JnGEwptqjiB5jzoI=");
_c = LoadingFlow;
var _c;
__turbopack_context__.k.register(_c, "LoadingFlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/LoadingFlow.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/LoadingFlow.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_07qgu77._.js.map