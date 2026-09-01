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
"[project]/components/ColdBoot.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ColdBoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/howler/dist/howler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sounds.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ColdBoot({ onComplete }) {
    _s();
    const [started, setStarted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const textRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const handleStart = async ()=>{
        if (started) return;
        setStarted(true);
        try {
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx.state !== 'running') {
                await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx.resume();
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playMenuSelect"])();
        } catch (err) {
            console.warn('Audio resume notice:', err);
        }
        if (textRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textRef.current, {
                scale: 1.1,
                opacity: 0,
                filter: 'blur(8px)',
                duration: 0.5,
                ease: 'power2.in'
            });
        }
        // Brief cinematic pause before handing off to WantedStars
        setTimeout(()=>{
            onComplete();
        }, 600);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ColdBoot.useEffect": ()=>{
            const handleKeyDown = {
                "ColdBoot.useEffect.handleKeyDown": ()=>{
                    handleStart();
                }
            }["ColdBoot.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "ColdBoot.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown)
            })["ColdBoot.useEffect"];
        }
    }["ColdBoot.useEffect"], [
        started
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        onClick: !started ? handleStart : undefined,
        style: {
            position: 'fixed',
            inset: 0,
            background: 'radial-gradient(ellipse at center, #0e0e12 0%, #050507 100%)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: !started ? 'pointer' : 'default',
            userSelect: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/ColdBoot.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            !started && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: textRef,
                style: {
                    textAlign: 'center',
                    zIndex: 110,
                    padding: '36px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '22px',
                    maxWidth: '720px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: 'rgba(245, 166, 35, 0.08)',
                            border: '1px solid rgba(245, 166, 35, 0.35)',
                            padding: '4px 16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '6px',
                                    height: '6px',
                                    background: '#f5a623',
                                    boxShadow: '0 0 6px #f5a623'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ColdBoot.tsx",
                                lineNumber: 93,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                    fontSize: 'clamp(0.75rem, 1.6vw, 0.9rem)',
                                    letterSpacing: '0.35em',
                                    color: '#f5a623',
                                    textTransform: 'uppercase',
                                    fontWeight: 700
                                },
                                children: "OM PANDEY // LOS SANTOS PROTOCOL"
                            }, void 0, false, {
                                fileName: "[project]/components/ColdBoot.tsx",
                                lineNumber: 101,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ColdBoot.tsx",
                        lineNumber: 83,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
                            letterSpacing: '0.12em',
                            color: '#ffffff',
                            textTransform: 'uppercase',
                            margin: 0,
                            lineHeight: 1.05,
                            textShadow: '0 4px 20px rgba(0, 0, 0, 0.9)'
                        },
                        children: "INTERACTIVE DEVELOPER PORTFOLIO"
                    }, void 0, false, {
                        fileName: "[project]/components/ColdBoot.tsx",
                        lineNumber: 115,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "smooth-pulse",
                        style: {
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: 'clamp(0.85rem, 1.8vw, 1.1rem)',
                            letterSpacing: '0.3em',
                            color: 'rgba(255, 255, 255, 0.75)',
                            textTransform: 'uppercase',
                            margin: 0
                        },
                        children: "CLICK ANYWHERE OR PRESS ANY KEY TO INITIALIZE"
                    }, void 0, false, {
                        fileName: "[project]/components/ColdBoot.tsx",
                        lineNumber: 130,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '48px',
                            height: '2px',
                            background: '#f5a623',
                            marginTop: '6px',
                            boxShadow: '0 0 12px rgba(245, 166, 35, 0.9)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ColdBoot.tsx",
                        lineNumber: 144,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ColdBoot.tsx",
                lineNumber: 69,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ColdBoot.tsx",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}
_s(ColdBoot, "ysxN3Dl8T2/wsN770X1iXaCoIsk=");
_c = ColdBoot;
var _c;
__turbopack_context__.k.register(_c, "ColdBoot");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ColdBoot.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/ColdBoot.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_1fs5ol1._.js.map