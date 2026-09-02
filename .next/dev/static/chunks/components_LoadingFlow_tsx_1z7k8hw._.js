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
    'THE MAP IS INTRACTIVE: CLICK ON THE LOACTIONS TO VIEW',
    'CHARACTER ABILITES ARE INTERACTABLE',
    'EXPLORE VIBECHAT, HTRACX & SMARTCLASS X IN THE OPERATIONS TAB',
    'USE THE RADAR MAP TO VIEW ACADEMIC MILESTONES & CREDENTIALS',
    'PRESS KEYS 1 TO 5 ON THE DASHBOARD TO SWITCH TABS ANYTIME'
];
function LoadingFlow({ onComplete, sounds }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imgs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const barRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spinnerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [tipIdx, setTipIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progressPct, setProgressPct] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoadingFlow.useEffect": ()=>{
            try {
                if (sounds?.ambience) {
                    if (!sounds.ambience.playing()) {
                        sounds.ambience.volume(0.35);
                        sounds.ambience.loop(true);
                        sounds.ambience.play();
                    }
                }
            } catch (e) {
                console.warn('Audio ambience notice:', e);
            }
            // Small GTA Spinner rotation
            if (spinnerRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(spinnerRef.current, {
                    rotation: 360,
                    duration: 1.2,
                    repeat: -1,
                    ease: 'linear'
                });
            }
            // Initial image fade in
            if (imgs.current[0]) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(imgs.current[0], {
                    opacity: 0,
                    scale: 1.03
                }, {
                    opacity: 1,
                    scale: 1.0,
                    duration: 1.0,
                    ease: 'power2.out'
                });
            }
            // Image cycling
            let current = 0;
            const cycleImages = {
                "LoadingFlow.useEffect.cycleImages": ()=>{
                    const next = (current + 1) % IMAGES.length;
                    if (imgs.current[current]) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imgs.current[current], {
                            opacity: 0,
                            scale: 1.03,
                            duration: 1.0,
                            ease: 'power2.inOut'
                        });
                    }
                    if (imgs.current[next]) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(imgs.current[next], {
                            opacity: 0,
                            scale: 1.05
                        }, {
                            opacity: 1,
                            scale: 1.0,
                            duration: 1.1,
                            ease: 'power2.out'
                        });
                    }
                    current = next;
                }
            }["LoadingFlow.useEffect.cycleImages"];
            const imgInterval = setInterval(cycleImages, 3400);
            // Tip rotation
            const tipInterval = setInterval({
                "LoadingFlow.useEffect.tipInterval": ()=>{
                    setTipIdx({
                        "LoadingFlow.useEffect.tipInterval": (p)=>(p + 1) % TIPS.length
                    }["LoadingFlow.useEffect.tipInterval"]);
                }
            }["LoadingFlow.useEffect.tipInterval"], 2800);
            // Loading Bar Timeline (~5.8s)
            const barTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                onComplete: {
                    "LoadingFlow.useEffect.barTl": ()=>{
                        clearInterval(imgInterval);
                        clearInterval(tipInterval);
                        setTimeout(onComplete, 400);
                    }
                }["LoadingFlow.useEffect.barTl"]
            });
            if (barRef.current) {
                barTl.to(barRef.current, {
                    width: '45%',
                    duration: 1.6,
                    ease: 'power2.out',
                    onUpdate: {
                        "LoadingFlow.useEffect": function() {
                            setProgressPct(Math.round(this.progress() * 45));
                        }
                    }["LoadingFlow.useEffect"]
                });
                barTl.to({}, {
                    duration: 0.25
                });
                barTl.to(barRef.current, {
                    width: '80%',
                    duration: 1.8,
                    ease: 'power1.inOut',
                    onUpdate: {
                        "LoadingFlow.useEffect": function() {
                            setProgressPct(45 + Math.round(this.progress() * 35));
                        }
                    }["LoadingFlow.useEffect"]
                });
                barTl.to({}, {
                    duration: 0.15
                });
                barTl.to(barRef.current, {
                    width: '100%',
                    duration: 1.2,
                    ease: 'power2.inOut',
                    onUpdate: {
                        "LoadingFlow.useEffect": function() {
                            setProgressPct(80 + Math.round(this.progress() * 20));
                        }
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            position: 'fixed',
            inset: 0,
            background: '#000000',
            zIndex: 100,
            overflow: 'hidden',
            userSelect: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px 28px 60px 28px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/LoadingFlow.tsx",
                lineNumber: 156,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 24,
                    left: 36,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    zIndex: 110
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            display: 'inline-block',
                            width: '3px',
                            height: '14px',
                            background: '#ffffff'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingFlow.tsx",
                        lineNumber: 170,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            fontSize: '1rem',
                            letterSpacing: '0.22em',
                            color: 'rgba(255, 255, 255, 0.9)',
                            textTransform: 'uppercase'
                        },
                        children: "INITIALIZING // PORTFOLIO"
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingFlow.tsx",
                        lineNumber: 178,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LoadingFlow.tsx",
                lineNumber: 159,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    width: 'min(96vw, 1400px)',
                    height: 'min(70vh, 640px)',
                    background: '#050507',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.98)',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                children: [
                    IMAGES.map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            ref: (el)=>{
                                imgs.current[i] = el;
                            },
                            src: src,
                            alt: "Loading visual",
                            style: {
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center 25%',
                                opacity: i === 0 ? 1 : 0,
                                filter: 'contrast(1.08) brightness(0.92)',
                                transition: 'opacity 1.0s ease-in-out'
                            }
                        }, src, false, {
                            fileName: "[project]/components/LoadingFlow.tsx",
                            lineNumber: 208,
                            columnNumber: 21
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'absolute',
                            inset: 0,
                            background: 'radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.65) 100%)',
                            pointerEvents: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingFlow.tsx",
                        lineNumber: 229,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LoadingFlow.tsx",
                lineNumber: 192,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: 24,
                    left: 'max(28px, calc((100vw - min(96vw, 1400px)) / 2))',
                    right: 'max(28px, calc((100vw - min(96vw, 1400px)) / 2))',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    zIndex: 120
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            gap: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    maxWidth: '900px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                        fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)',
                                        letterSpacing: '0.2em',
                                        lineHeight: 1.3,
                                        textTransform: 'uppercase',
                                        color: '#ffffff',
                                        textShadow: '0 2px 8px rgba(0,0,0,0.9)'
                                    },
                                    children: TIPS[tipIdx]
                                }, tipIdx, false, {
                                    fileName: "[project]/components/LoadingFlow.tsx",
                                    lineNumber: 262,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/LoadingFlow.tsx",
                                lineNumber: 261,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    flexShrink: 0
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'Share Tech Mono, monospace',
                                            fontSize: '0.85rem',
                                            color: 'rgba(255, 255, 255, 0.85)',
                                            letterSpacing: '0.05em'
                                        },
                                        children: [
                                            progressPct,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/LoadingFlow.tsx",
                                        lineNumber: 287,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        ref: spinnerRef,
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "#ffffff",
                                        strokeWidth: "2.5",
                                        style: {
                                            filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.7))'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "9",
                                            strokeDasharray: "26 14"
                                        }, void 0, false, {
                                            fileName: "[project]/components/LoadingFlow.tsx",
                                            lineNumber: 307,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/LoadingFlow.tsx",
                                        lineNumber: 297,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LoadingFlow.tsx",
                                lineNumber: 279,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LoadingFlow.tsx",
                        lineNumber: 253,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            height: '2px',
                            background: 'rgba(255, 255, 255, 0.12)',
                            position: 'relative',
                            overflow: 'hidden'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: barRef,
                            style: {
                                height: '100%',
                                width: '0%',
                                background: '#ffffff',
                                boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/LoadingFlow.tsx",
                            lineNumber: 322,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingFlow.tsx",
                        lineNumber: 313,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LoadingFlow.tsx",
                lineNumber: 240,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LoadingFlow.tsx",
        lineNumber: 140,
        columnNumber: 9
    }, this);
}
_s(LoadingFlow, "dyZYKxew1f0iynHuBjTF/Lwfk20=");
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