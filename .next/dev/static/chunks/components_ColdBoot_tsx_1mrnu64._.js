(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
;
var _s = __turbopack_context__.k.signature();
'use client';
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
        } catch (err) {
            console.warn('Audio resume notice:', err);
        }
        if (textRef.current) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(textRef.current, {
                opacity: 0,
                scale: 1.04,
                filter: 'blur(8px)',
                duration: 0.5,
                ease: 'power2.in'
            });
        }
        setTimeout(()=>{
            onComplete();
        }, 500);
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
            background: '#000000',
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
                lineNumber: 63,
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
                    gap: '20px',
                    maxWidth: '680px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: 'clamp(0.85rem, 1.6vw, 1rem)',
                            letterSpacing: '0.4em',
                            color: 'rgba(255, 255, 255, 0.45)',
                            textTransform: 'uppercase'
                        },
                        children: "OM PANDEY'S"
                    }, void 0, false, {
                        fileName: "[project]/components/ColdBoot.tsx",
                        lineNumber: 79,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        style: {
                            fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            fontSize: 'clamp(2rem, 5vw, 3.4rem)',
                            letterSpacing: '0.14em',
                            color: '#ffffff',
                            textTransform: 'uppercase',
                            margin: 0,
                            lineHeight: 1,
                            textShadow: '0 4px 25px rgba(0, 0, 0, 0.9)'
                        },
                        children: "PORTFOLIO"
                    }, void 0, false, {
                        fileName: "[project]/components/ColdBoot.tsx",
                        lineNumber: 91,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '36px',
                            height: '1px',
                            background: 'rgba(255, 255, 255, 0.35)',
                            margin: '4px 0'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/ColdBoot.tsx",
                        lineNumber: 106,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "smooth-pulse",
                        style: {
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: 'clamp(0.8rem, 1.6vw, 0.95rem)',
                            letterSpacing: '0.3em',
                            color: 'rgba(255, 255, 255, 0.7)',
                            textTransform: 'uppercase',
                            margin: 0
                        },
                        children: "CLICK OR PRESS ANY KEY TO ENTER"
                    }, void 0, false, {
                        fileName: "[project]/components/ColdBoot.tsx",
                        lineNumber: 115,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ColdBoot.tsx",
                lineNumber: 66,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ColdBoot.tsx",
        lineNumber: 48,
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

//# sourceMappingURL=components_ColdBoot_tsx_1mrnu64._.js.map