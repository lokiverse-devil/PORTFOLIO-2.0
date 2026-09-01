(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/components/WarningScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WarningScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sounds.ts [app-client] (ecmascript)");
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
                    scale: 0.96
                }, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.7,
                    ease: 'power3.out'
                });
            }
            const proceed = {
                "WarningScreen.useEffect.proceed": ()=>{
                    if (triggered) return;
                    triggered = true;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuSelect"])();
                    try {
                        if (sounds?.ambience) {
                            sounds.ambience.loop(true);
                            sounds.ambience.volume(0.35);
                            sounds.ambience.play();
                        }
                    } catch (e) {
                        console.warn('Audio notice:', e);
                    }
                    if (flashRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(flashRef.current, {
                            opacity: 1,
                            duration: 0.1,
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
            background: 'radial-gradient(ellipse at center, #0e0e14 0%, #050507 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            cursor: 'pointer',
            userSelect: 'none',
            padding: '24px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/WarningScreen.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cardRef,
                style: {
                    maxWidth: 740,
                    textAlign: 'center',
                    padding: '44px 36px',
                    zIndex: 110,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '28px',
                    background: 'rgba(12, 12, 16, 0.92)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderTop: '3px solid #f5a623',
                    boxShadow: '0 25px 70px rgba(0, 0, 0, 0.95), 0 0 30px rgba(245, 166, 35, 0.12)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: '0.85rem',
                            letterSpacing: '0.35em',
                            color: '#f5a623',
                            textTransform: 'uppercase',
                            fontWeight: 700
                        },
                        children: "BRIEFING // DEVELOPER PROFILE"
                    }, void 0, false, {
                        fileName: "[project]/components/WarningScreen.tsx",
                        lineNumber: 120,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                            letterSpacing: '0.22em',
                            lineHeight: 1.7,
                            color: 'rgba(255, 255, 255, 0.85)',
                            textTransform: 'uppercase',
                            margin: 0
                        },
                        children: [
                            "WELCOME TO THE PORTFOLIO OF OM PANDEY.",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/WarningScreen.tsx",
                                lineNumber: 146,
                                columnNumber: 21
                            }, this),
                            "INSPIRED BY GTA V, THIS EXPERIENCE SHOWCASES MY REAL PROJECTS,",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/WarningScreen.tsx",
                                lineNumber: 148,
                                columnNumber: 21
                            }, this),
                            "ENGINEERING SKILLS, AND SYSTEM DESIGNS."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WarningScreen.tsx",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '40px',
                            height: '2px',
                            background: 'rgba(255, 255, 255, 0.25)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/WarningScreen.tsx",
                        lineNumber: 152,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "smooth-pulse",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                                fontSize: 'clamp(1.15rem, 2.6vw, 1.45rem)',
                                letterSpacing: '0.24em',
                                textTransform: 'uppercase',
                                color: '#ffffff',
                                background: 'rgba(255, 255, 255, 0.08)',
                                border: '1px solid rgba(255, 255, 255, 0.3)',
                                padding: '10px 24px'
                            },
                            children: "PRESS ENTER OR CLICK TO CONTINUE"
                        }, void 0, false, {
                            fileName: "[project]/components/WarningScreen.tsx",
                            lineNumber: 161,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WarningScreen.tsx",
                        lineNumber: 160,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WarningScreen.tsx",
                lineNumber: 100,
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
                lineNumber: 178,
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

//# sourceMappingURL=_0po_97p._.js.map