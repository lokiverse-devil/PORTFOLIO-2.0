(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function CleanWhiteStar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "46",
        height: "46",
        viewBox: "0 0 72 72",
        style: {
            filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.6))'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "36,4 44,28 70,28 49,44 57,68 36,52 15,68 23,44 2,28 28,28",
            fill: "#ffffff",
            stroke: "#ffffff",
            strokeWidth: "1.5"
        }, void 0, false, {
            fileName: "[project]/components/WantedStars.tsx",
            lineNumber: 17,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/WantedStars.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = CleanWhiteStar;
function WantedStars({ onComplete, sounds }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const redStrobeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const blueStrobeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchlightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const starsGroupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [starCount, setStarCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const completedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const triggerComplete = ()=>{
        if (completedRef.current) return;
        completedRef.current = true;
        onComplete();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WantedStars.useEffect": ()=>{
            // Start siren_loop.mp3
            const startAudio = {
                "WantedStars.useEffect.startAudio": async ()=>{
                    try {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx.state !== 'running') {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx.resume();
                        }
                        const siren = sounds?.siren;
                        if (siren) {
                            siren.stop();
                            siren.volume(0.5);
                            siren.play();
                        }
                    } catch (err) {
                        console.warn('Audio notice:', err);
                    }
                }
            }["WantedStars.useEffect.startAudio"];
            startAudio();
            // Helicopter searchlight beam
            if (searchlightRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(searchlightRef.current, {
                    x: '130%',
                    duration: 2.4,
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
                    opacity: 0.65,
                    duration: 0.06
                }).to(redStrobeRef.current, {
                    opacity: 0.08,
                    duration: 0.05
                }).to(redStrobeRef.current, {
                    opacity: 0.75,
                    duration: 0.08
                }).to(redStrobeRef.current, {
                    opacity: 0,
                    duration: 0.14
                });
            }
            if (blueStrobeRef.current) {
                strobeTl.to(blueStrobeRef.current, {
                    opacity: 0.65,
                    duration: 0.06
                }, '-=0.08').to(blueStrobeRef.current, {
                    opacity: 0.08,
                    duration: 0.05
                }).to(blueStrobeRef.current, {
                    opacity: 0.75,
                    duration: 0.08
                }).to(blueStrobeRef.current, {
                    opacity: 0,
                    duration: 0.15
                });
            }
            // Master Timeline synced with siren_loop.mp3
            // 0.0s - 8.0s: Pure police chase lights buildup
            // 8.0s - 13.0s: Stars appear sequentially (1 per ~1s)
            // 13.5s - 15.2s: Stars slowly disappear
            const masterTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                onComplete: triggerComplete
            });
            // Star 1 appears at 8.0s
            masterTl.to({}, {
                duration: 0.01,
                onStart: {
                    "WantedStars.useEffect": ()=>setStarCount(1)
                }["WantedStars.useEffect"]
            }, 8.0);
            // Star 2 appears at 9.2s
            masterTl.to({}, {
                duration: 0.01,
                onStart: {
                    "WantedStars.useEffect": ()=>setStarCount(2)
                }["WantedStars.useEffect"]
            }, 9.2);
            // Star 3 appears at 10.4s
            masterTl.to({}, {
                duration: 0.01,
                onStart: {
                    "WantedStars.useEffect": ()=>setStarCount(3)
                }["WantedStars.useEffect"]
            }, 10.4);
            // Star 4 appears at 11.6s
            masterTl.to({}, {
                duration: 0.01,
                onStart: {
                    "WantedStars.useEffect": ()=>setStarCount(4)
                }["WantedStars.useEffect"]
            }, 11.6);
            // Star 5 appears at 12.8s
            masterTl.to({}, {
                duration: 0.01,
                onStart: {
                    "WantedStars.useEffect": ()=>setStarCount(5)
                }["WantedStars.useEffect"]
            }, 12.8);
            // Slowly disappear the stars between 13.6s and 15.2s
            masterTl.to({}, {
                duration: 0.01,
                onStart: {
                    "WantedStars.useEffect": ()=>{
                        if (starsGroupRef.current) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(starsGroupRef.current, {
                                opacity: 0,
                                scale: 0.95,
                                duration: 1.5,
                                ease: 'power2.inOut'
                            });
                        }
                    }
                }["WantedStars.useEffect"]
            }, 13.6);
            // Complete sequence at 15.3s
            masterTl.to({}, {
                duration: 1.7
            }, 13.6);
            return ({
                "WantedStars.useEffect": ()=>{
                    masterTl.kill();
                    strobeTl.kill();
                    if (searchlightRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(searchlightRef.current);
                    if (starsGroupRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(starsGroupRef.current);
                }
            })["WantedStars.useEffect"];
        }
    }["WantedStars.useEffect"], [
        sounds
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            position: 'fixed',
            inset: 0,
            background: '#000000',
            zIndex: 95,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none',
            cursor: 'default'
        },
        className: "jsx-e8e754de356729f2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: redStrobeRef,
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at 12% 50%, rgba(255, 0, 0, 0.6) 0%, rgba(180, 0, 0, 0.2) 45%, transparent 70%)',
                    opacity: 0,
                    mixBlendMode: 'screen'
                },
                className: "jsx-e8e754de356729f2"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 195,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: blueStrobeRef,
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at 88% 50%, rgba(0, 90, 255, 0.6) 0%, rgba(0, 60, 190, 0.2) 45%, transparent 70%)',
                    opacity: 0,
                    mixBlendMode: 'screen'
                },
                className: "jsx-e8e754de356729f2"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 208,
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
                    background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.12) 0%, transparent 60%)',
                    transform: 'rotate(-25deg)',
                    pointerEvents: 'none',
                    mixBlendMode: 'screen'
                },
                className: "jsx-e8e754de356729f2"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 221,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-e8e754de356729f2" + " " + "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 237,
                columnNumber: 13
            }, this),
            starCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: starsGroupRef,
                style: {
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 110,
                    padding: '16px'
                },
                className: "jsx-e8e754de356729f2",
                children: Array.from({
                    length: starCount
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            animation: 'starPopIn 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        },
                        className: "jsx-e8e754de356729f2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CleanWhiteStar, {}, void 0, false, {
                            fileName: "[project]/components/WantedStars.tsx",
                            lineNumber: 262,
                            columnNumber: 29
                        }, this)
                    }, i, false, {
                        fileName: "[project]/components/WantedStars.tsx",
                        lineNumber: 253,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 241,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "e8e754de356729f2",
                children: "@keyframes starPopIn{0%{opacity:0;transform:scale(.3)}70%{transform:scale(1.25)}to{opacity:1;transform:scale(1)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WantedStars.tsx",
        lineNumber: 179,
        columnNumber: 9
    }, this);
}
_s(WantedStars, "XUnAJV3dg0QnI1e5Z/H06705V9U=");
_c1 = WantedStars;
var _c, _c1;
__turbopack_context__.k.register(_c, "CleanWhiteStar");
__turbopack_context__.k.register(_c1, "WantedStars");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WantedStars.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/WantedStars.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_WantedStars_tsx_151e5i_._.js.map