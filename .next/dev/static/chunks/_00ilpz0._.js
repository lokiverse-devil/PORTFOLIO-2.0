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
"[project]/components/WantedStars.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WantedStars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/howler/dist/howler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sounds.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
/**
 * 3D Faceted Star with authentic beveled geometry and glowing core
 */ function FacetedStar({ filled, flashing = false, shockwave = false, size = 52 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            position: 'relative',
            width: size,
            height: size,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        children: [
            shockwave && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "star-shockwave",
                style: {
                    position: 'absolute',
                    width: size * 1.4,
                    height: size * 1.4,
                    borderRadius: '50%',
                    border: '2px solid rgba(255, 215, 0, 0.9)',
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.8), inset 0 0 10px rgba(255, 255, 255, 0.8)',
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 32,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: size,
                height: size,
                viewBox: "0 0 100 100",
                className: flashing ? 'gta-wanted-flash' : '',
                style: {
                    filter: filled ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 22px rgba(245, 166, 35, 0.8))' : 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.8))',
                    transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    transform: filled ? 'scale(1)' : 'scale(0.92)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "facetGoldLight",
                                x1: "0%",
                                y1: "0%",
                                x2: "100%",
                                y2: "100%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#fff6d1"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WantedStars.tsx",
                                        lineNumber: 62,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#f5a623"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WantedStars.tsx",
                                        lineNumber: 63,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "facetGoldDark",
                                x1: "0%",
                                y1: "0%",
                                x2: "100%",
                                y2: "100%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#e59819"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WantedStars.tsx",
                                        lineNumber: 66,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#a36200"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WantedStars.tsx",
                                        lineNumber: 67,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                id: "socketDark",
                                x1: "0%",
                                y1: "0%",
                                x2: "100%",
                                y2: "100%",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "0%",
                                        stopColor: "#1c1c24"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WantedStars.tsx",
                                        lineNumber: 72,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                        offset: "100%",
                                        stopColor: "#0c0c10"
                                    }, void 0, false, {
                                        fileName: "[project]/components/WantedStars.tsx",
                                        lineNumber: 73,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 71,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WantedStars.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this),
                    filled ? /* 3D 10-facet beveled star */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "50,5 62,35 95,35 68,55 79,88 50,68 21,88 32,55 5,35 38,35",
                                fill: "url(#facetGoldLight)",
                                stroke: "#ffffff",
                                strokeWidth: "1.5"
                            }, void 0, false, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 81,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "50,5 50,68 62,35",
                                fill: "url(#facetGoldDark)",
                                opacity: "0.6"
                            }, void 0, false, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 88,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "95,35 50,68 68,55",
                                fill: "url(#facetGoldDark)",
                                opacity: "0.65"
                            }, void 0, false, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 89,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "79,88 50,68 50,68",
                                fill: "url(#facetGoldDark)",
                                opacity: "0.7"
                            }, void 0, false, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 90,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "21,88 50,68 32,55",
                                fill: "url(#facetGoldDark)",
                                opacity: "0.6"
                            }, void 0, false, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 91,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "5,35 50,68 38,35",
                                fill: "url(#facetGoldDark)",
                                opacity: "0.65"
                            }, void 0, false, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 92,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "50",
                                cy: "50",
                                r: "10",
                                fill: "#ffffff",
                                opacity: "0.85",
                                filter: "blur(2px)"
                            }, void 0, false, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 95,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WantedStars.tsx",
                        lineNumber: 79,
                        columnNumber: 21
                    }, this) : /* Empty star frame with subtle metallic rim */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "50,5 62,35 95,35 68,55 79,88 50,68 21,88 32,55 5,35 38,35",
                                fill: "url(#socketDark)",
                                stroke: "rgba(255, 255, 255, 0.28)",
                                strokeWidth: "2"
                            }, void 0, false, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 100,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "50",
                                y1: "5",
                                x2: "50",
                                y2: "68",
                                stroke: "rgba(255, 255, 255, 0.1)",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 107,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "95",
                                y1: "35",
                                x2: "50",
                                y2: "68",
                                stroke: "rgba(255, 255, 255, 0.1)",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 108,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "79",
                                y1: "88",
                                x2: "50",
                                y2: "68",
                                stroke: "rgba(255, 255, 255, 0.1)",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 109,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "21",
                                y1: "88",
                                x2: "50",
                                y2: "68",
                                stroke: "rgba(255, 255, 255, 0.1)",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 110,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "5",
                                y1: "35",
                                x2: "50",
                                y2: "68",
                                stroke: "rgba(255, 255, 255, 0.1)",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 111,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WantedStars.tsx",
                        lineNumber: 99,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WantedStars.tsx",
        lineNumber: 20,
        columnNumber: 9
    }, this);
}
_c = FacetedStar;
const TIER_MESSAGES = [
    'POLICE SYSTEM INITIALIZED',
    'LEVEL 1 // SUSPECT IDENTIFIED',
    'LEVEL 2 // LOCAL UNITS DISPATCHED',
    'LEVEL 3 // STATE PATROL CONVERGING',
    'LEVEL 4 // AIR SUPPORT DEPLOYED',
    'LEVEL 5 // MAXIMUM WANTED LEVEL'
];
function WantedStars({ onComplete, sounds }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const redStrobeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const blueStrobeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flashRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const badgeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [starCount, setStarCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [shockwaveIdx, setShockwaveIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [isMaxWanted, setIsMaxWanted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const completedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const triggerComplete = ()=>{
        if (completedRef.current) return;
        completedRef.current = true;
        onComplete();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WantedStars.useEffect": ()=>{
            // Start siren loop cleanly
            const startAudio = {
                "WantedStars.useEffect.startAudio": async ()=>{
                    try {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx.state !== 'running') {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx.resume();
                        }
                        const siren = sounds?.siren;
                        if (siren) {
                            siren.stop();
                            siren.volume(0.48);
                            siren.play();
                        }
                    } catch (err) {
                        console.warn('Audio notice:', err);
                    }
                }
            }["WantedStars.useEffect.startAudio"];
            startAudio();
            // Continuous searchlight sweep
            if (searchlightRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(searchlightRef.current, {
                    x: '130%',
                    duration: 1.8,
                    repeat: -1,
                    yoyo: true,
                    ease: 'power1.inOut'
                });
            }
            // Alternating red/blue police strobes
            const strobeTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                repeat: -1
            });
            if (redStrobeRef.current) {
                strobeTl.to(redStrobeRef.current, {
                    opacity: 0.75,
                    duration: 0.05
                }).to(redStrobeRef.current, {
                    opacity: 0.08,
                    duration: 0.04
                }).to(redStrobeRef.current, {
                    opacity: 0.9,
                    duration: 0.06
                }).to(redStrobeRef.current, {
                    opacity: 0,
                    duration: 0.12
                });
            }
            if (blueStrobeRef.current) {
                strobeTl.to(blueStrobeRef.current, {
                    opacity: 0.75,
                    duration: 0.05
                }, '-=0.08').to(blueStrobeRef.current, {
                    opacity: 0.08,
                    duration: 0.04
                }).to(blueStrobeRef.current, {
                    opacity: 0.9,
                    duration: 0.06
                }).to(blueStrobeRef.current, {
                    opacity: 0,
                    duration: 0.14
                });
            }
            // Entrance animation for HUD badge
            if (badgeRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(badgeRef.current, {
                    opacity: 0,
                    scale: 0.88,
                    y: -20
                }, {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 0.45,
                    ease: 'back.out(1.4)'
                });
            }
            // Master fast & punchy timeline (total duration: ~3.8s)
            const masterTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                onComplete: triggerComplete
            });
            // Star 1 at 0.5s
            masterTl.to({}, {
                duration: 0.01,
                onStart: {
                    "WantedStars.useEffect": ()=>{
                        setStarCount(1);
                        setShockwaveIdx(0);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playStarPing"])(0);
                    }
                }["WantedStars.useEffect"]
            }, 0.5);
            // Star 2 at 1.0s
            masterTl.to({}, {
                duration: 0.01,
                onStart: {
                    "WantedStars.useEffect": ()=>{
                        setStarCount(2);
                        setShockwaveIdx(1);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playStarPing"])(1);
                    }
                }["WantedStars.useEffect"]
            }, 1.0);
            // Star 3 at 1.5s
            masterTl.to({}, {
                duration: 0.01,
                onStart: {
                    "WantedStars.useEffect": ()=>{
                        setStarCount(3);
                        setShockwaveIdx(2);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playStarPing"])(2);
                    }
                }["WantedStars.useEffect"]
            }, 1.5);
            // Star 4 at 2.0s
            masterTl.to({}, {
                duration: 0.01,
                onStart: {
                    "WantedStars.useEffect": ()=>{
                        setStarCount(4);
                        setShockwaveIdx(3);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playStarPing"])(3);
                    }
                }["WantedStars.useEffect"]
            }, 2.0);
            // Star 5 (Max Wanted slam) at 2.5s
            masterTl.to({}, {
                duration: 0.01,
                onStart: {
                    "WantedStars.useEffect": ()=>{
                        setStarCount(5);
                        setShockwaveIdx(4);
                        setIsMaxWanted(true);
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playStarPing"])(4);
                        // White flash burst
                        if (flashRef.current) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(flashRef.current, {
                                opacity: 0.85
                            }, {
                                opacity: 0,
                                duration: 0.35,
                                ease: 'power2.out'
                            });
                        }
                        // Dramatic screen rumble on 5th star
                        if (containerRef.current) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(containerRef.current, {
                                x: -8,
                                y: -4
                            }, {
                                x: 8,
                                y: 4,
                                duration: 0.035,
                                repeat: 8,
                                yoyo: true,
                                ease: 'none',
                                onComplete: {
                                    "WantedStars.useEffect": ()=>{
                                        if (containerRef.current) {
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(containerRef.current, {
                                                x: 0,
                                                y: 0
                                            });
                                        }
                                    }
                                }["WantedStars.useEffect"]
                            });
                        }
                    }
                }["WantedStars.useEffect"]
            }, 2.5);
            // Hold 5-star glory pulse from 2.5s to 3.8s
            masterTl.to({}, {
                duration: 1.3
            }, 2.5);
            // Quick skip listeners
            const handleKeyDown = {
                "WantedStars.useEffect.handleKeyDown": (e)=>{
                    if (e.code === 'Space' || e.code === 'Enter' || e.code === 'Escape') {
                        triggerComplete();
                    }
                }
            }["WantedStars.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "WantedStars.useEffect": ()=>{
                    masterTl.kill();
                    strobeTl.kill();
                    window.removeEventListener('keydown', handleKeyDown);
                    if (searchlightRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(searchlightRef.current);
                    if (containerRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(containerRef.current);
                    if (flashRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(flashRef.current);
                    if (badgeRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(badgeRef.current);
                }
            })["WantedStars.useEffect"];
        }
    }["WantedStars.useEffect"], [
        sounds
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        onClick: triggerComplete,
        style: {
            position: 'fixed',
            inset: 0,
            background: '#060608',
            zIndex: 95,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none',
            cursor: 'pointer'
        },
        className: "jsx-898af4d0039172a",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: redStrobeRef,
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at 12% 50%, rgba(255, 20, 20, 0.75) 0%, rgba(180, 0, 0, 0.25) 45%, transparent 70%)',
                    opacity: 0,
                    mixBlendMode: 'screen'
                },
                className: "jsx-898af4d0039172a"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 330,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: blueStrobeRef,
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at 88% 50%, rgba(0, 110, 255, 0.75) 0%, rgba(0, 70, 200, 0.25) 45%, transparent 70%)',
                    opacity: 0,
                    mixBlendMode: 'screen'
                },
                className: "jsx-898af4d0039172a"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 343,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: searchlightRef,
                style: {
                    position: 'absolute',
                    top: '-20%',
                    left: '-30%',
                    width: '60%',
                    height: '140%',
                    background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.16) 0%, transparent 60%)',
                    transform: 'rotate(-25deg)',
                    pointerEvents: 'none',
                    mixBlendMode: 'screen'
                },
                className: "jsx-898af4d0039172a"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 356,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-898af4d0039172a" + " " + "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 373,
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
                    zIndex: 120
                },
                className: "jsx-898af4d0039172a"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 376,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: badgeRef,
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '20px',
                    zIndex: 110,
                    padding: '28px 44px',
                    background: 'rgba(10, 10, 14, 0.88)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderTop: isMaxWanted ? '3px solid #ff2a2a' : '3px solid #f5a623',
                    borderBottom: isMaxWanted ? '1px solid #ff2a2a' : '1px solid rgba(245, 166, 35, 0.4)',
                    boxShadow: isMaxWanted ? '0 20px 60px rgba(0, 0, 0, 0.95), 0 0 40px rgba(255, 42, 42, 0.35)' : '0 20px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(245, 166, 35, 0.18)',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    maxWidth: '680px',
                    width: '92%'
                },
                className: "jsx-898af4d0039172a",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        },
                        className: "jsx-898af4d0039172a",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '8px',
                                    height: '8px',
                                    background: isMaxWanted ? '#ff2a2a' : '#f5a623',
                                    boxShadow: isMaxWanted ? '0 0 10px #ff2a2a' : '0 0 8px #f5a623'
                                },
                                className: "jsx-898af4d0039172a"
                            }, void 0, false, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 414,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                    fontSize: '0.82rem',
                                    letterSpacing: '0.35em',
                                    color: isMaxWanted ? '#ff4d4d' : 'rgba(255, 255, 255, 0.65)',
                                    textTransform: 'uppercase',
                                    fontWeight: 700
                                },
                                className: "jsx-898af4d0039172a",
                                children: "LOS SANTOS POLICE DEPT // TACTICAL ADVISORY"
                            }, void 0, false, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 422,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WantedStars.tsx",
                        lineNumber: 413,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '18px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '10px 0'
                        },
                        className: "jsx-898af4d0039172a",
                        children: [
                            0,
                            1,
                            2,
                            3,
                            4
                        ].map((i)=>{
                            const isFilled = i < starCount;
                            const isCurrentShockwave = shockwaveIdx === i;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    animation: isFilled ? 'starPopIn 0.26s cubic-bezier(0.175, 0.885, 0.32, 1.3)' : 'none'
                                },
                                className: "jsx-898af4d0039172a",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FacetedStar, {
                                    filled: isFilled,
                                    flashing: isMaxWanted,
                                    shockwave: isCurrentShockwave,
                                    size: 56
                                }, void 0, false, {
                                    fileName: "[project]/components/WantedStars.tsx",
                                    lineNumber: 457,
                                    columnNumber: 33
                                }, this)
                            }, i, false, {
                                fileName: "[project]/components/WantedStars.tsx",
                                lineNumber: 451,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/components/WantedStars.tsx",
                        lineNumber: 437,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center'
                        },
                        className: "jsx-898af4d0039172a",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                                fontSize: 'clamp(1.2rem, 3vw, 1.7rem)',
                                letterSpacing: '0.14em',
                                color: isMaxWanted ? '#ff3b3b' : '#ffffff',
                                textTransform: 'uppercase',
                                textShadow: isMaxWanted ? '0 0 20px rgba(255, 59, 59, 0.8)' : '0 2px 10px rgba(0, 0, 0, 0.8)',
                                transition: 'color 0.2s ease'
                            },
                            className: "jsx-898af4d0039172a",
                            children: TIER_MESSAGES[starCount] || TIER_MESSAGES[0]
                        }, void 0, false, {
                            fileName: "[project]/components/WantedStars.tsx",
                            lineNumber: 470,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WantedStars.tsx",
                        lineNumber: 469,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 389,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '32px',
                    fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                    fontSize: '0.78rem',
                    letterSpacing: '0.28em',
                    color: 'rgba(255, 255, 255, 0.4)',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    zIndex: 110
                },
                className: "jsx-898af4d0039172a",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "jsx-898af4d0039172a" + " " + "smooth-pulse",
                    children: "[ PRESS SPACE OR CLICK TO ENTER ]"
                }, void 0, false, {
                    fileName: "[project]/components/WantedStars.tsx",
                    lineNumber: 504,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 489,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "898af4d0039172a",
                children: "@keyframes starPopIn{0%{opacity:0;transform:scale(.2)}65%{transform:scale(1.35)}to{opacity:1;transform:scale(1)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WantedStars.tsx",
        lineNumber: 312,
        columnNumber: 9
    }, this);
}
_s(WantedStars, "0VnnFjE6c27y1BtXyxh8pJPkk/Y=");
_c1 = WantedStars;
var _c, _c1;
__turbopack_context__.k.register(_c, "FacetedStar");
__turbopack_context__.k.register(_c1, "WantedStars");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WantedStars.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/WantedStars.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_00ilpz0._.js.map