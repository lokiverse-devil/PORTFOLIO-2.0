(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/WarningScreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WarningScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
                    scale: 0.97,
                    y: 10
                }, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out'
                });
            }
            const proceed = {
                "WarningScreen.useEffect.proceed": ()=>{
                    if (triggered) return;
                    triggered = true;
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
            background: '#000000',
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
                lineNumber: 95,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: cardRef,
                style: {
                    maxWidth: 720,
                    width: '92%',
                    textAlign: 'center',
                    padding: '48px 40px',
                    zIndex: 110,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '26px',
                    background: 'rgba(8, 8, 10, 0.95)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 35px 100px rgba(0, 0, 0, 0.98), 0 0 1px rgba(255, 255, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'Pricedown, ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: '2rem',
                            letterSpacing: '0.35em',
                            color: 'rgba(255, 255, 255, 0.5)',
                            textTransform: 'uppercase'
                        },
                        children: "FAIR WARNING"
                    }, void 0, false, {
                        fileName: "[project]/components/WarningScreen.tsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                            letterSpacing: '0.22em',
                            lineHeight: 1.7,
                            color: '#ffffff',
                            textTransform: 'uppercase',
                            margin: 0
                        },
                        children: [
                            "THIS INTERACTIVE EXPERIENCE SHOWCASES ME, MY REAL PROJECTS,",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/WarningScreen.tsx",
                                lineNumber: 142,
                                columnNumber: 21
                            }, this),
                            "ENGINEERING SKILLS & TECHNOLOGIES."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WarningScreen.tsx",
                        lineNumber: 130,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '36px',
                            height: '1px',
                            background: 'rgba(255, 255, 255, 0.25)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/WarningScreen.tsx",
                        lineNumber: 146,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "smooth-pulse",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                                fontSize: 'clamp(1.1rem, 2.4vw, 1.4rem)',
                                letterSpacing: '0.24em',
                                textTransform: 'uppercase',
                                color: '#000000',
                                background: '#ffffff',
                                padding: '9px 25px',
                                display: 'inline-block',
                                boxShadow: '0 4px 20px rgba(227, 10, 10, 0.2)'
                            },
                            children: "PRESS ENTER OR CLICK TO CONTINUE"
                        }, void 0, false, {
                            fileName: "[project]/components/WarningScreen.tsx",
                            lineNumber: 155,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WarningScreen.tsx",
                        lineNumber: 154,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WarningScreen.tsx",
                lineNumber: 98,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: flashRef,
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: '#be0808a0',
                    opacity: 0,
                    pointerEvents: 'none',
                    zIndex: 200
                }
            }, void 0, false, {
                fileName: "[project]/components/WarningScreen.tsx",
                lineNumber: 173,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WarningScreen.tsx",
        lineNumber: 80,
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

//# sourceMappingURL=components_WarningScreen_tsx_0uizsdf._.js.map