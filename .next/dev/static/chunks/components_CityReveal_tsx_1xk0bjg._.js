(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CityReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CityReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function CityReveal({ onComplete }) {
    _s();
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const completedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const triggerComplete = ()=>{
        if (completedRef.current) return;
        completedRef.current = true;
        onComplete();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CityReveal.useEffect": ()=>{
            const updateTime = {
                "CityReveal.useEffect.updateTime": ()=>{
                    const now = new Date();
                    const d = now.toLocaleDateString('en-US', {
                        weekday: 'short',
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).toUpperCase();
                    const t = now.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: false
                    });
                    setTime(`${d}  //  ${t}`);
                }
            }["CityReveal.useEffect.updateTime"];
            updateTime();
            const interval = setInterval(updateTime, 1000);
            // Cinematic Camera Drift & Reveal
            if (imgRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(imgRef.current, {
                    opacity: 0,
                    scale: 1.5
                }, {
                    opacity: 1,
                    scale: 1.0,
                    duration: 2.8,
                    ease: 'power2.out'
                });
            }
            const timer = setTimeout(triggerComplete, 2800);
            const handleKey = {
                "CityReveal.useEffect.handleKey": (e)=>{
                    if (e.code === 'Space' || e.code === 'Enter' || e.code === 'Escape') {
                        triggerComplete();
                    }
                }
            }["CityReveal.useEffect.handleKey"];
            window.addEventListener('keydown', handleKey);
            return ({
                "CityReveal.useEffect": ()=>{
                    clearTimeout(timer);
                    clearInterval(interval);
                    window.removeEventListener('keydown', handleKey);
                    if (imgRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(imgRef.current);
                }
            })["CityReveal.useEffect"];
        }
    }["CityReveal.useEffect"], [
        onComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: triggerComplete,
        style: {
            position: 'fixed',
            inset: 0,
            background: '#000',
            overflow: 'hidden',
            zIndex: 100,
            cursor: 'pointer',
            userSelect: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                ref: imgRef,
                src: "/images/intro_city.jpg",
                alt: "Los Santos Skyline",
                style: {
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0,
                    filter: 'contrast(1.12) brightness(0.92)'
                }
            }, void 0, false, {
                fileName: "[project]/components/CityReveal.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/CityReveal.tsx",
                lineNumber: 100,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hud-jitter",
                style: {
                    position: 'absolute',
                    top: 36,
                    left: 44,
                    zIndex: 120,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    fontFamily: ',Pricedown, ChaletComprime1960, "Barlow Condensed", sans-serif',
                    textTransform: 'uppercase',
                    textShadow: '0 2px 8px rgba(0,0,0,0.9)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '3px',
                                    height: '14px',
                                    background: '#ffffff'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/CityReveal.tsx",
                                lineNumber: 119,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '1.05rem',
                                    letterSpacing: '0.22em',
                                    color: '#ffffff',
                                    fontWeight: 700
                                },
                                children: "UTTARAKHAND // DEV BHOOMI"
                            }, void 0, false, {
                                fileName: "[project]/components/CityReveal.tsx",
                                lineNumber: 120,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CityReveal.tsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '0.8rem',
                            letterSpacing: '0.18em',
                            color: 'rgba(255,255,255,0.65)',
                            paddingLeft: '11px'
                        },
                        children: time
                    }, void 0, false, {
                        fileName: "[project]/components/CityReveal.tsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: '0.7rem',
                            letterSpacing: '0.22em',
                            color: 'rgba(255,255,255,0.45)',
                            paddingLeft: '11px',
                            marginTop: '2px'
                        },
                        children: "SYSTEM STATUS: ONLINE"
                    }, void 0, false, {
                        fileName: "[project]/components/CityReveal.tsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CityReveal.tsx",
                lineNumber: 103,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: 24,
                    right: 36,
                    zIndex: 120,
                    fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                    fontSize: '0.75rem',
                    letterSpacing: '0.25em',
                    color: 'rgba(255, 255, 255, 0.4)',
                    textTransform: 'uppercase'
                },
                children: "[ CLICK OR PRESS SPACE TO CONTINUE ]"
            }, void 0, false, {
                fileName: "[project]/components/CityReveal.tsx",
                lineNumber: 133,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CityReveal.tsx",
        lineNumber: 74,
        columnNumber: 9
    }, this);
}
_s(CityReveal, "1kYKwhtUZex2Z9DFJcK9MQKpDKQ=");
_c = CityReveal;
var _c;
__turbopack_context__.k.register(_c, "CityReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CityReveal.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/CityReveal.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_CityReveal_tsx_1xk0bjg._.js.map