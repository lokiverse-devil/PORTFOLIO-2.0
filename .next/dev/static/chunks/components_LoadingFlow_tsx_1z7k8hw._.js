(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/LoadingFlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
function LoadingFlow({ onComplete, sounds }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const barRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spinnerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [tipIdx, setTipIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingFlow.useEffect": ()=>{
            try {
                if (sounds?.ambience) {
                    if (!sounds.ambience.playing()) {
                        sounds.ambience.volume(0.4);
                        sounds.ambience.loop(true);
                        sounds.ambience.play();
                    }
                }
            } catch (e) {
                console.warn('Audio ambience notice:', e);
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
            // Initial image fade in
            if (imgs.current[0]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(imgs.current[0], {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 1.0,
                    ease: 'power2.out'
                });
            }
            // Smooth image cycling (5.5s duration per artwork)
            let current = 0;
            const cycleImages = {
                "LoadingFlow.useEffect.cycleImages": ()=>{
                    const next = (current + 1) % IMAGES.length;
                    if (imgs.current[current]) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imgs.current[current], {
                            opacity: 0,
                            duration: 1.2,
                            ease: 'power2.inOut'
                        });
                    }
                    if (imgs.current[next]) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(imgs.current[next], {
                            opacity: 0
                        }, {
                            opacity: 1,
                            duration: 1.2,
                            ease: 'power2.inOut'
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
            // Smooth GTA Loading Bar
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
                    width: '32%',
                    duration: 2.2,
                    ease: 'power2.out'
                });
                barTl.to({}, {
                    duration: 0.8
                });
                barTl.to(barRef.current, {
                    width: '64%',
                    duration: 2.8,
                    ease: 'power1.inOut'
                });
                barTl.to({}, {
                    duration: 0.6
                });
                barTl.to(barRef.current, {
                    width: '88%',
                    duration: 3.0,
                    ease: 'power1.out'
                });
                barTl.to(barRef.current, {
                    width: '98%',
                    duration: 1.8,
                    ease: 'power2.out'
                });
                barTl.to({}, {
                    duration: 0.4
                });
                barTl.to(barRef.current, {
                    width: '100%',
                    duration: 0.5,
                    ease: 'power3.in'
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            position: 'fixed',
            inset: 0,
            background: '#000',
            zIndex: 100,
            overflow: 'hidden',
            userSelect: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px 20px 100px 20px'
                },
                children: IMAGES.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        ref: (el)=>{
                            imgs.current[i] = el;
                        },
                        src: src,
                        alt: "Loading artwork",
                        style: {
                            position: 'absolute',
                            maxWidth: '92vw',
                            maxHeight: '78vh',
                            objectFit: 'contain',
                            opacity: i === 0 ? 1 : 0,
                            filter: 'contrast(1.05) brightness(0.95)',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.9)'
                        }
                    }, src, false, {
                        fileName: "[project]/components/LoadingFlow.tsx",
                        lineNumber: 145,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/LoadingFlow.tsx",
                lineNumber: 134,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/LoadingFlow.tsx",
                lineNumber: 165,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "noise-overlay"
            }, void 0, false, {
                fileName: "[project]/components/LoadingFlow.tsx",
                lineNumber: 166,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crt-scanlines"
            }, void 0, false, {
                fileName: "[project]/components/LoadingFlow.tsx",
                lineNumber: 167,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: 72,
                    left: 54,
                    right: 120,
                    zIndex: 110,
                    maxWidth: '850px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                        fontSize: 'clamp(0.95rem, 2vw, 1.25rem)',
                        letterSpacing: '0.2em',
                        lineHeight: 1.35,
                        textTransform: 'uppercase',
                        color: 'rgba(255, 255, 255, 0.9)',
                        textShadow: '0 2px 8px rgba(0,0,0,0.9)'
                    },
                    children: TIPS[tipIdx]
                }, tipIdx, false, {
                    fileName: "[project]/components/LoadingFlow.tsx",
                    lineNumber: 180,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/LoadingFlow.tsx",
                lineNumber: 170,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: 60,
                    right: 54,
                    zIndex: 120,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    ref: spinnerRef,
                    width: "26",
                    height: "26",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "2.5",
                    style: {
                        filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.7))'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "9",
                        strokeDasharray: "30 15"
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingFlow.tsx",
                        lineNumber: 218,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/LoadingFlow.tsx",
                    lineNumber: 208,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/LoadingFlow.tsx",
                lineNumber: 197,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: 32,
                    left: 54,
                    right: 54,
                    height: '3px',
                    background: 'rgba(255,255,255,0.15)',
                    zIndex: 120
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: barRef,
                    style: {
                        height: '100%',
                        width: '0%',
                        background: '#ffffff',
                        boxShadow: '0 0 10px rgba(255,255,255,0.9)'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/LoadingFlow.tsx",
                    lineNumber: 234,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/LoadingFlow.tsx",
                lineNumber: 223,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LoadingFlow.tsx",
        lineNumber: 119,
        columnNumber: 9
    }, this);
}
_s(LoadingFlow, "SWOecacq3Q0jqbrTqtprUIeDP50=");
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

//# sourceMappingURL=components_LoadingFlow_tsx_1z7k8hw._.js.map