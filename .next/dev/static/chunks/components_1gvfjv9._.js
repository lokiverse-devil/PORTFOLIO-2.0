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
"[project]/components/DecisionPhase.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DecisionPhase
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
function DecisionPhase({ question = 1, onResult, sounds }) {
    _s();
    const qRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const buttonsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DecisionPhase.useEffect": ()=>{
            try {
                if (sounds?.ambience) {
                    sounds.ambience.fade(0.45, 0, 800);
                    setTimeout({
                        "DecisionPhase.useEffect": ()=>{
                            try {
                                sounds.ambience?.stop();
                            } catch (_) {}
                        }
                    }["DecisionPhase.useEffect"], 850);
                }
            } catch (e) {
                console.warn('Audio notice in decision phase:', e);
            }
            if (qRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(qRef.current, {
                    scale: 0.95,
                    opacity: 0,
                    y: 30
                }, {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    ease: 'power3.out'
                });
            }
            buttonsRef.current.forEach({
                "DecisionPhase.useEffect": (btn)=>{
                    if (btn) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btn, {
                            borderColor: 'rgba(255, 255, 255, 0.6)',
                            duration: 1.5,
                            repeat: -1,
                            yoyo: true,
                            ease: 'sine.inOut'
                        });
                    }
                }
            }["DecisionPhase.useEffect"]);
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
        try {
            if (sounds?.warningAccept) {
                sounds.warningAccept.play();
            }
        } catch (_) {}
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(btn, {
            backgroundColor: '#ffffff',
            color: '#000000',
            scale: 1.08,
            duration: 0.12,
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
            background: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            userSelect: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "noise-overlay"
            }, void 0, false, {
                fileName: "[project]/components/DecisionPhase.tsx",
                lineNumber: 109,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crt-scanlines"
            }, void 0, false, {
                fileName: "[project]/components/DecisionPhase.tsx",
                lineNumber: 110,
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
                            color: '#f5a623',
                            textTransform: 'uppercase'
                        },
                        children: "MISSION OBJECTIVE // CLEARANCE VERIFICATION"
                    }, void 0, false, {
                        fileName: "[project]/components/DecisionPhase.tsx",
                        lineNumber: 125,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WantedStarsHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        count: 5,
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/components/DecisionPhase.tsx",
                        lineNumber: 136,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DecisionPhase.tsx",
                lineNumber: 113,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: qRef,
                className: "decision-card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "decision-question-sub",
                        children: [
                            "MISSION SETUP // QUERY 0",
                            question,
                            " OF 02"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DecisionPhase.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: isQ1 ? 'decision-question-title q1-title' : 'decision-question-title q2-title',
                        children: isQ1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "ARE YOU A",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/DecisionPhase.tsx",
                                    lineNumber: 147,
                                    columnNumber: 38
                                }, this),
                                "PROGRAMMER?"
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "ARE YOU INTERESTED",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/components/DecisionPhase.tsx",
                                    lineNumber: 152,
                                    columnNumber: 47
                                }, this),
                                "IN MY PROFILE?"
                            ]
                        }, void 0, true)
                    }, void 0, false, {
                        fileName: "[project]/components/DecisionPhase.tsx",
                        lineNumber: 144,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "decision-buttons-container",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: (el)=>{
                                    buttonsRef.current[0] = el;
                                },
                                className: "decision-btn",
                                onClick: (e)=>handleAnswer('yes', e),
                                onMouseEnter: (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(e.currentTarget, {
                                        scale: 1.06,
                                        duration: 0.2
                                    }),
                                onMouseLeave: (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(e.currentTarget, {
                                        scale: 1,
                                        duration: 0.2
                                    }),
                                children: "[ YES ]"
                            }, void 0, false, {
                                fileName: "[project]/components/DecisionPhase.tsx",
                                lineNumber: 159,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                ref: (el)=>{
                                    buttonsRef.current[1] = el;
                                },
                                className: "decision-btn",
                                onClick: (e)=>handleAnswer('no', e),
                                onMouseEnter: (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(e.currentTarget, {
                                        scale: 1.06,
                                        duration: 0.2
                                    }),
                                onMouseLeave: (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(e.currentTarget, {
                                        scale: 1,
                                        duration: 0.2
                                    }),
                                children: "[ NO ]"
                            }, void 0, false, {
                                fileName: "[project]/components/DecisionPhase.tsx",
                                lineNumber: 170,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DecisionPhase.tsx",
                        lineNumber: 158,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DecisionPhase.tsx",
                lineNumber: 139,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DecisionPhase.tsx",
        lineNumber: 97,
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

//# sourceMappingURL=components_1gvfjv9._.js.map