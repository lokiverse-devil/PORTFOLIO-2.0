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
"[project]/components/DecisionPhase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DecisionPhase
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
function DecisionPhase({ question = 1, onResult, sounds }) {
    _s();
    const qRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DecisionPhase.useEffect": ()=>{
            try {
                if (sounds?.ambience) {
                    sounds.ambience.fade(0.35, 0, 600);
                    setTimeout({
                        "DecisionPhase.useEffect": ()=>{
                            try {
                                sounds.ambience?.stop();
                            } catch (_) {}
                        }
                    }["DecisionPhase.useEffect"], 650);
                }
            } catch (e) {
                console.warn('Audio notice in decision phase:', e);
            }
            if (qRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(qRef.current, {
                    scale: 0.94,
                    opacity: 0,
                    y: 15
                }, {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: 'power3.out'
                });
            }
            return ({
                "DecisionPhase.useEffect": ()=>{
                    if (qRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(qRef.current);
                    buttonsRef.current.forEach({
                        "DecisionPhase.useEffect": (btn)=>{
                            if (btn) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(btn);
                        }
                    }["DecisionPhase.useEffect"]);
                }
            })["DecisionPhase.useEffect"];
        }
    }["DecisionPhase.useEffect"], [
        sounds
    ]);
    const handleAnswer = (answer, e)=>{
        const btn = e.currentTarget;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuSelect"])();
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btn, {
            backgroundColor: '#ffffff',
            color: '#000000',
            scale: 1.06,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.out',
            onComplete: ()=>{
                try {
                    if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.localStorage) {
                        if (question === 1) {
                            localStorage.setItem('programmerAnswer', answer);
                        } else {
                            localStorage.setItem('profileInterest', answer);
                        }
                    }
                } catch (err) {
                    console.warn('LocalStorage notice:', err);
                }
                if (question === 1) {
                    const res = answer === 'yes' ? 'passed-access' : 'failed-denied';
                    onResult(res);
                } else {
                    const res = answer === 'yes' ? 'passed-portfolio' : 'failed-redirect';
                    onResult(res);
                }
            }
        });
    };
    const isQ1 = question === 1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            background: 'radial-gradient(ellipse at center, #0e0e14 0%, #050507 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            userSelect: 'none',
            padding: '20px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/DecisionPhase.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: qRef,
                style: {
                    background: 'rgba(12, 12, 16, 0.92)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    borderTop: '3px solid #f5a623',
                    padding: '48px 60px',
                    textAlign: 'center',
                    maxWidth: '640px',
                    width: '92%',
                    boxShadow: '0 25px 70px rgba(0, 0, 0, 0.95), 0 0 30px rgba(245, 166, 35, 0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    zIndex: 110
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: '0.85rem',
                            letterSpacing: '0.35em',
                            color: '#f5a623',
                            textTransform: 'uppercase',
                            marginBottom: '20px',
                            fontWeight: 700
                        },
                        children: [
                            "MISSION PROTOCOL // QUESTION 0",
                            question,
                            " OF 02"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DecisionPhase.tsx",
                        lineNumber: 114,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            fontSize: 'clamp(2rem, 4.8vw, 2.9rem)',
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            color: '#ffffff',
                            marginBottom: '44px',
                            lineHeight: 1.08,
                            textShadow: '0 4px 15px rgba(0, 0, 0, 0.8)'
                        },
                        children: isQ1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "ARE YOU A",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/DecisionPhase.tsx",
                                    lineNumber: 142,
                                    columnNumber: 38
                                }, this),
                                "DEVELOPER?"
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "WOULD YOU LIKE TO",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/DecisionPhase.tsx",
                                    lineNumber: 147,
                                    columnNumber: 46
                                }, this),
                                "EXPLORE MY PORTFOLIO?"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/DecisionPhase.tsx",
                        lineNumber: 128,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '32px',
                            justifyContent: 'center'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: (el)=>{
                                    buttonsRef.current[0] = el;
                                },
                                className: "decision-btn",
                                onClick: (e)=>handleAnswer('yes', e),
                                onMouseEnter: (e)=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuHover"])();
                                    e.currentTarget.style.background = '#ffffff';
                                    e.currentTarget.style.color = '#000000';
                                    e.currentTarget.style.borderColor = '#ffffff';
                                    e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.8)';
                                },
                                style: {
                                    fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '2px solid rgba(255, 255, 255, 0.3)',
                                    color: '#ffffff',
                                    fontSize: 'clamp(1.3rem, 2.8vw, 1.7rem)',
                                    letterSpacing: '0.15em',
                                    cursor: 'pointer',
                                    padding: '10px 36px',
                                    outline: 'none',
                                    transition: 'all 0.18s ease'
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.color = '#ffffff';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                    e.currentTarget.style.boxShadow = 'none';
                                },
                                children: "[ YES ]"
                            }, void 0, false, {
                                fileName: "[project]/components/DecisionPhase.tsx",
                                lineNumber: 154,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: (el)=>{
                                    buttonsRef.current[1] = el;
                                },
                                className: "decision-btn",
                                onClick: (e)=>handleAnswer('no', e),
                                onMouseEnter: (e)=>{
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuHover"])();
                                    e.currentTarget.style.background = '#ffffff';
                                    e.currentTarget.style.color = '#000000';
                                    e.currentTarget.style.borderColor = '#ffffff';
                                    e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.8)';
                                },
                                style: {
                                    fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '2px solid rgba(255, 255, 255, 0.3)',
                                    color: '#ffffff',
                                    fontSize: 'clamp(1.3rem, 2.8vw, 1.7rem)',
                                    letterSpacing: '0.15em',
                                    cursor: 'pointer',
                                    padding: '10px 36px',
                                    outline: 'none',
                                    transition: 'all 0.18s ease'
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                    e.currentTarget.style.color = '#ffffff';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                    e.currentTarget.style.boxShadow = 'none';
                                },
                                children: "[ NO ]"
                            }, void 0, false, {
                                fileName: "[project]/components/DecisionPhase.tsx",
                                lineNumber: 188,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DecisionPhase.tsx",
                        lineNumber: 153,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DecisionPhase.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DecisionPhase.tsx",
        lineNumber: 80,
        columnNumber: 9
    }, this);
}
_s(DecisionPhase, "oQDCY5mI/ckRRhy6yS+wyxt7Ce8=");
_c = DecisionPhase;
var _c;
__turbopack_context__.k.register(_c, "DecisionPhase");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DecisionPhase.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/DecisionPhase.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_1yb16_d._.js.map