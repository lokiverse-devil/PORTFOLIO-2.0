(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/DecisionPhase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DecisionPhase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function DecisionPhase({ question = 1, lives = 2, onResult, sounds }) {
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
                    scale: 0.96,
                    opacity: 0,
                    y: 12
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
        sounds,
        question
    ]);
    const handleAnswer = (answer, e)=>{
        const btn = e.currentTarget;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btn, {
            backgroundColor: '#ffffff',
            color: '#000000',
            scale: 1.05,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.out',
            onComplete: ()=>{
                try {
                    if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.localStorage) {
                        if (question === 1) {
                            localStorage.setItem('programmerAnswer', answer);
                        } else if (question === 2) {
                            localStorage.setItem('profileInterest', answer);
                        } else if (question === 3) {
                            localStorage.setItem('robotAnswer', answer);
                        } else if (question === 4) {
                            localStorage.setItem('portfolioVisitAnswer', answer);
                        }
                    }
                } catch (err) {
                    console.warn('LocalStorage notice:', err);
                }
                if (question === 1) {
                    const res = answer === 'yes' ? 'passed-access' : 'failed-denied';
                    onResult(res);
                } else if (question === 2) {
                    // If both answered NO, deduct 1 life and initiate secondary protocol
                    const res = answer === 'yes' ? 'passed-portfolio' : 'failed-life-lost';
                    onResult(res);
                } else if (question === 3) {
                    // Q3: "are you a robot"
                    // If YES -> access denied (failed-robot -> proceeds to Q4)
                    // If NO -> mission passed (passed-robot -> landing)
                    const res = answer === 'no' ? 'passed-robot' : 'failed-robot';
                    onResult(res);
                } else if (question === 4) {
                    // Q4: "You really dont want to visit the portfolio...."
                    // If NO -> mission passed gained life (+1 life -> landing)
                    // If YES -> failed you are getting debared -> countdown redirect to Nyan Cat
                    const res = answer === 'no' ? 'passed-gained-life' : 'failed-debarred';
                    onResult(res);
                }
            }
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            background: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            userSelect: 'none',
            padding: '24px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/DecisionPhase.tsx",
                lineNumber: 106,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: qRef,
                style: {
                    background: 'rgba(8, 8, 10, 0.96)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: lives === 1 ? '1px solid rgba(239, 68, 68, 0.35)' : '1px solid rgba(255, 255, 255, 0.12)',
                    padding: '38px 50px 48px 50px',
                    textAlign: 'center',
                    maxWidth: '680px',
                    width: '92%',
                    boxShadow: lives === 1 ? '0 40px 120px rgba(0, 0, 0, 0.98), 0 0 35px rgba(239, 68, 68, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)' : '0 40px 120px rgba(0, 0, 0, 0.98), 0 0 1px rgba(255, 255, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    zIndex: 110,
                    transition: 'border 0.3s ease, box-shadow 0.3s ease'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                            paddingBottom: '16px',
                            marginBottom: '26px',
                            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            display: 'inline-block',
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            backgroundColor: lives === 1 ? '#ef4444' : '#22c55e',
                                            boxShadow: lives === 1 ? '0 0 10px #ef4444' : '0 0 10px #22c55e'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/components/DecisionPhase.tsx",
                                        lineNumber: 147,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'Pricedown, ChaletComprime1960, "Barlow Condensed", sans-serif',
                                            fontSize: '0.82rem',
                                            letterSpacing: '0.22em',
                                            color: 'rgba(255, 255, 255, 0.65)',
                                            textTransform: 'uppercase'
                                        },
                                        children: question <= 2 ? 'ROUND 01 // INITIAL PROTOCOL' : 'ROUND 02 // SECONDARY VERIFICATION'
                                    }, void 0, false, {
                                        fileName: "[project]/components/DecisionPhase.tsx",
                                        lineNumber: 157,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DecisionPhase.tsx",
                                lineNumber: 146,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                            fontSize: '0.78rem',
                                            letterSpacing: '0.2em',
                                            color: lives === 1 ? '#f87171' : 'rgba(255, 255, 255, 0.6)',
                                            textTransform: 'uppercase'
                                        },
                                        children: lives === 1 ? 'CRITICAL LIVES:' : 'LIVES:'
                                    }, void 0, false, {
                                        fileName: "[project]/components/DecisionPhase.tsx",
                                        lineNumber: 172,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '6px',
                                            alignItems: 'center'
                                        },
                                        children: [
                                            1,
                                            2
                                        ].map((i)=>{
                                            const active = i <= lives;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: '24px',
                                                    height: '24px',
                                                    borderRadius: '4px',
                                                    background: active ? 'rgba(239, 68, 68, 0.22)' : 'rgba(255, 255, 255, 0.05)',
                                                    border: active ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.15)',
                                                    boxShadow: active ? '0 0 10px rgba(239, 68, 68, 0.5)' : 'none',
                                                    color: active ? '#ef4444' : 'rgba(255, 255, 255, 0.25)',
                                                    fontSize: '13px',
                                                    lineHeight: 1,
                                                    fontWeight: 'bold',
                                                    transition: 'all 0.3s ease'
                                                },
                                                children: active ? '♥' : '✕'
                                            }, i, false, {
                                                fileName: "[project]/components/DecisionPhase.tsx",
                                                lineNumber: 187,
                                                columnNumber: 37
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/components/DecisionPhase.tsx",
                                        lineNumber: 183,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'Pricedown, monospace',
                                            fontSize: '0.95rem',
                                            color: lives === 1 ? '#6e0404ff' : '#ffffff',
                                            letterSpacing: '0.05em'
                                        },
                                        children: [
                                            "[",
                                            lives,
                                            "/2]"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/DecisionPhase.tsx",
                                        lineNumber: 215,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DecisionPhase.tsx",
                                lineNumber: 171,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DecisionPhase.tsx",
                        lineNumber: 135,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'Pricedown, ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: '0.95rem',
                            letterSpacing: '0.35em',
                            color: lives === 1 ? '#f87171' : 'rgba(200, 200, 200, 0.7)',
                            textTransform: 'uppercase',
                            marginBottom: '16px'
                        },
                        children: [
                            question === 1 && 'QUESTION 01 // 02',
                            question === 2 && 'QUESTION 02 // 02',
                            question === 3 && 'RECOVERY QUESTION 01 // 02',
                            question === 4 && 'FINAL QUESTION 02 // 02 — LAST CHANCE'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DecisionPhase.tsx",
                        lineNumber: 228,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: {
                            fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            fontSize: question === 4 ? 'clamp(1.7rem, 3.8vw, 2.45rem)' : 'clamp(2rem, 4.8vw, 3rem)',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            color: '#ffffff',
                            marginBottom: '42px',
                            lineHeight: 1.1,
                            textShadow: '0 4px 20px rgba(0, 0, 0, 0.9)'
                        },
                        children: [
                            question === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "ARE YOU A",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/DecisionPhase.tsx",
                                        lineNumber: 261,
                                        columnNumber: 38
                                    }, this),
                                    "PROGRAMMER?"
                                ]
                            }, void 0, true),
                            question === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "ARE YOU INTERESTED",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/DecisionPhase.tsx",
                                        lineNumber: 267,
                                        columnNumber: 47
                                    }, this),
                                    "IN MY PROFILE?"
                                ]
                            }, void 0, true),
                            question === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "ARE YOU A",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/DecisionPhase.tsx",
                                        lineNumber: 273,
                                        columnNumber: 38
                                    }, this),
                                    "ROBOT?"
                                ]
                            }, void 0, true),
                            question === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    "Are you sure you don't want",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/components/DecisionPhase.tsx",
                                        lineNumber: 279,
                                        columnNumber: 56
                                    }, this),
                                    "to visit the portfolio?"
                                ]
                            }, void 0, true)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DecisionPhase.tsx",
                        lineNumber: 244,
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
                                style: {
                                    fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                                    background: 'rgba(255, 255, 255, 0.06)',
                                    border: '1px solid rgba(255, 255, 255, 0.28)',
                                    color: '#ffffff',
                                    fontSize: 'clamp(1.3rem, 2.6vw, 1.65rem)',
                                    letterSpacing: '0.15em',
                                    cursor: 'pointer',
                                    padding: '10px 38px',
                                    outline: 'none',
                                    transition: 'all 0.18s ease'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.background = '#ffffff';
                                    e.currentTarget.style.color = '#000000';
                                    e.currentTarget.style.borderColor = '#ffffff';
                                    e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.4)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                                    e.currentTarget.style.color = '#ffffff';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.28)';
                                    e.currentTarget.style.boxShadow = 'none';
                                },
                                children: "[ YES ]"
                            }, void 0, false, {
                                fileName: "[project]/components/DecisionPhase.tsx",
                                lineNumber: 286,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: (el)=>{
                                    buttonsRef.current[1] = el;
                                },
                                className: "decision-btn",
                                onClick: (e)=>handleAnswer('no', e),
                                style: {
                                    fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                                    background: 'rgba(255, 255, 255, 0.06)',
                                    border: '1px solid rgba(255, 255, 255, 0.28)',
                                    color: '#ffffff',
                                    fontSize: 'clamp(1.3rem, 2.6vw, 1.65rem)',
                                    letterSpacing: '0.15em',
                                    cursor: 'pointer',
                                    padding: '10px 38px',
                                    outline: 'none',
                                    transition: 'all 0.18s ease'
                                },
                                onMouseEnter: (e)=>{
                                    e.currentTarget.style.background = '#ffffff';
                                    e.currentTarget.style.color = '#000000';
                                    e.currentTarget.style.borderColor = '#ffffff';
                                    e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.4)';
                                },
                                onMouseLeave: (e)=>{
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                                    e.currentTarget.style.color = '#ffffff';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.28)';
                                    e.currentTarget.style.boxShadow = 'none';
                                },
                                children: "[ NO ]"
                            }, void 0, false, {
                                fileName: "[project]/components/DecisionPhase.tsx",
                                lineNumber: 319,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DecisionPhase.tsx",
                        lineNumber: 285,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DecisionPhase.tsx",
                lineNumber: 109,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DecisionPhase.tsx",
        lineNumber: 93,
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

//# sourceMappingURL=components_DecisionPhase_tsx_20ki52_._.js.map