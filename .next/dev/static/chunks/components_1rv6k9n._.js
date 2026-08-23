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
"[project]/components/CityReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CityReveal
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
function CityReveal({ onComplete }) {
    _s();
    const imgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
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
                    setTime(`${d}  ${t}`);
                }
            }["CityReveal.useEffect.updateTime"];
            updateTime();
            const interval = setInterval(updateTime, 1000);
            // Cinematic Camera Drift & Reveal
            if (imgRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(imgRef.current, {
                    opacity: 0,
                    scale: 1.12,
                    x: 10,
                    y: 5
                }, {
                    opacity: 1,
                    scale: 1.0,
                    x: -10,
                    y: -5,
                    duration: 4.2,
                    ease: 'sine.out'
                });
            }
            const timer = setTimeout(onComplete, 3800);
            return ({
                "CityReveal.useEffect": ()=>{
                    clearTimeout(timer);
                    clearInterval(interval);
                    if (imgRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(imgRef.current);
                }
            })["CityReveal.useEffect"];
        }
    }["CityReveal.useEffect"], [
        onComplete
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'fixed',
            inset: 0,
            background: '#000',
            overflow: 'hidden',
            zIndex: 100
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                ref: imgRef,
                src: "/images/intro_city.jpg",
                alt: "Los Santos Skyline",
                style: {
                    position: 'absolute',
                    inset: '-5%',
                    width: '110%',
                    height: '110%',
                    objectFit: 'cover',
                    opacity: 0,
                    filter: 'contrast(1.15) brightness(0.9)'
                }
            }, void 0, false, {
                fileName: "[project]/components/CityReveal.tsx",
                lineNumber: 71,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/CityReveal.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "noise-overlay"
            }, void 0, false, {
                fileName: "[project]/components/CityReveal.tsx",
                lineNumber: 86,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crt-scanlines"
            }, void 0, false, {
                fileName: "[project]/components/CityReveal.tsx",
                lineNumber: 87,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    top: 36,
                    left: 44,
                    right: 44,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    zIndex: 120
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hud-jitter city-reveal-hud",
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            textTransform: 'uppercase',
                            textShadow: '0 2px 8px rgba(0,0,0,0.9)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '1.1rem',
                                    letterSpacing: '0.22em',
                                    color: '#ffffff',
                                    fontWeight: 'bold'
                                },
                                children: "LOS SANTOS // SAN ANDREAS"
                            }, void 0, false, {
                                fileName: "[project]/components/CityReveal.tsx",
                                lineNumber: 113,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontSize: '0.85rem',
                                    letterSpacing: '0.18em',
                                    color: 'rgba(255,255,255,0.7)'
                                },
                                children: [
                                    time,
                                    " • 78°F CLEAR"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CityReveal.tsx",
                                lineNumber: 116,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/CityReveal.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WantedStarsHUD$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        count: 5,
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/components/CityReveal.tsx",
                        lineNumber: 121,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/CityReveal.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/CityReveal.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, this);
}
_s(CityReveal, "LSGVZ5GPDV3LL52L7eXFwglSCig=");
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

//# sourceMappingURL=components_1rv6k9n._.js.map