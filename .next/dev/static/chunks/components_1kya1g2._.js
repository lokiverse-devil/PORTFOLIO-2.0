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
"[project]/components/WarningScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WarningScreen
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
function WarningScreen({ onComplete, sounds }) {
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flashRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WarningScreen.useEffect": ()=>{
            let triggered = false;
            if (cardRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(cardRef.current, {
                    opacity: 0,
                    y: 20,
                    scale: 0.98
                }, {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 1.0,
                    ease: 'power3.out'
                });
            }
            const proceed = {
                "WarningScreen.useEffect.proceed": ()=>{
                    if (triggered) return;
                    triggered = true;
                    try {
                        if (sounds?.warningAccept) {
                            sounds.warningAccept.play();
                        }
                        if (sounds?.ambience) {
                            sounds.ambience.loop(true);
                            sounds.ambience.play();
                        }
                    } catch (e) {
                        console.warn('Audio notice in warning screen:', e);
                    }
                    if (flashRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(flashRef.current, {
                            opacity: 1,
                            duration: 0.12,
                            ease: 'power2.in',
                            onComplete: {
                                "WarningScreen.useEffect.proceed": ()=>{
                                    if (flashRef.current) {
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(flashRef.current, {
                                            opacity: 0,
                                            duration: 0.25,
                                            ease: 'power2.out',
                                            onComplete
                                        });
                                    } else {
                                        onComplete();
                                    }
                                }
                            }["WarningScreen.useEffect.proceed"]
                        });
                    } else {
                        onComplete();
                    }
                }
            }["WarningScreen.useEffect.proceed"];
            const handleKey = {
                "WarningScreen.useEffect.handleKey": (e)=>{
                    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
                        proceed();
                    }
                }
            }["WarningScreen.useEffect.handleKey"];
            const handleClick = {
                "WarningScreen.useEffect.handleClick": ()=>{
                    proceed();
                }
            }["WarningScreen.useEffect.handleClick"];
            document.addEventListener('keydown', handleKey);
            document.addEventListener('click', handleClick);
            return ({
                "WarningScreen.useEffect": ()=>{
                    document.removeEventListener('keydown', handleKey);
                    document.removeEventListener('click', handleClick);
                    if (cardRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(cardRef.current);
                    if (flashRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(flashRef.current);
                }
            })["WarningScreen.useEffect"];
        }
    }["WarningScreen.useEffect"], [
        onComplete,
        sounds
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            background: '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            cursor: 'pointer',
            userSelect: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "noise-overlay"
            }, void 0, false, {
                fileName: "[project]/components/WarningScreen.tsx",
                lineNumber: 97,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crt-scanlines"
            }, void 0, false, {
                fileName: "[project]/components/WarningScreen.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 32,
                    left: 40,
                    right: 40,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    zIndex: 120
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: '0.85rem',
                            letterSpacing: '0.25em',
                            color: 'rgba(255,255,255,0.6)',
                            textTransform: 'uppercase'
                        },
                        children: "ROCKSTAR PROTOCOL // SAN ANDREAS"
                    }, void 0, false, {
                        fileName: "[project]/components/WarningScreen.tsx",
                        lineNumber: 113,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WantedStarsHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        count: 5,
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/components/WarningScreen.tsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WarningScreen.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cardRef,
                style: {
                    maxWidth: 780,
                    textAlign: 'center',
                    padding: '40px 30px',
                    zIndex: 110,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '24px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'inline-block',
                            background: 'rgba(245, 166, 35, 0.15)',
                            border: '1px solid rgba(245, 166, 35, 0.5)',
                            padding: '4px 18px',
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: '0.85rem',
                            letterSpacing: '0.35em',
                            color: '#f5a623',
                            textTransform: 'uppercase'
                        },
                        children: "CONTENT ADVISORY // GTA V INTERACTIVE PROTOCOL"
                    }, void 0, false, {
                        fileName: "[project]/components/WarningScreen.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: 'clamp(0.95rem, 2.2vw, 1.25rem)',
                            letterSpacing: '0.22em',
                            lineHeight: 1.8,
                            color: 'rgba(255,255,255,0.9)',
                            textTransform: 'uppercase',
                            maxWidth: '680px'
                        },
                        children: [
                            "THIS IS A FICTIONAL INTERACTIVE DEVELOPER PORTFOLIO",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/WarningScreen.tsx",
                                lineNumber: 168,
                                columnNumber: 21
                            }, this),
                            "DESIGNED WITH CINEMATIC OPEN-WORLD GAMEPLAY PROTOCOLS"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WarningScreen.tsx",
                        lineNumber: 156,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "smooth-pulse",
                        style: {
                            marginTop: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                                fontSize: 'clamp(1.1rem, 2.6vw, 1.45rem)',
                                letterSpacing: '0.28em',
                                textTransform: 'uppercase',
                                color: '#ffffff'
                            },
                            children: "PRESS ENTER OR CLICK TO CONTINUE"
                        }, void 0, false, {
                            fileName: "[project]/components/WarningScreen.tsx",
                            lineNumber: 181,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WarningScreen.tsx",
                        lineNumber: 172,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WarningScreen.tsx",
                lineNumber: 127,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: flashRef,
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: '#ffffff',
                    opacity: 0,
                    pointerEvents: 'none',
                    zIndex: 200
                }
            }, void 0, false, {
                fileName: "[project]/components/WarningScreen.tsx",
                lineNumber: 195,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WarningScreen.tsx",
        lineNumber: 83,
        columnNumber: 9
    }, this);
}
_s(WarningScreen, "htGWQydPdUHz9ViRhvMIWJpWjzM=");
_c = WarningScreen;
var _c;
__turbopack_context__.k.register(_c, "WarningScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WarningScreen.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/WarningScreen.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_1kya1g2._.js.map