(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/WantedStars.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WantedStars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/howler/dist/howler.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function StarIcon({ className, style, filled = false, flashing = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `${className || ''} wanted-star-svg ${flashing && filled ? 'gta-wanted-flash' : ''}`,
        style: style,
        viewBox: "0 0 72 72",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "36,4 44,28 70,28 49,44 57,68 36,52 15,68 23,44 2,28 28,28",
            fill: filled ? '#ffffff' : 'rgba(255, 255, 255, 0.08)',
            stroke: filled ? '#ffffff' : 'rgba(255, 255, 255, 0.45)',
            strokeWidth: "2.5",
            style: {
                filter: filled ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.6))' : 'none'
            }
        }, void 0, false, {
            fileName: "[project]/components/WantedStars.tsx",
            lineNumber: 21,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/WantedStars.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
_c = StarIcon;
function WantedStars({ onComplete, sounds }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const redRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const blueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sweepRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const starsContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flashRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showStars, setShowStars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [filledCount, setFilledCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMaxWanted, setIsMaxWanted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WantedStars.useEffect": ()=>{
            const siren = sounds?.siren;
            // Start 17-second siren_loop.mp3 cleanly
            const startAudio = {
                "WantedStars.useEffect.startAudio": async ()=>{
                    try {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx.state !== 'running') {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx.resume();
                        }
                        if (siren) {
                            siren.stop();
                            siren.volume(0.5);
                            siren.play();
                        }
                    } catch (err) {
                        console.log('Audio notice:', err);
                    }
                }
            }["WantedStars.useEffect.startAudio"];
            startAudio();
            // Sweeping spotlight
            if (sweepRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(sweepRef.current, {
                    x: '100%',
                    duration: 2.4,
                    repeat: -1,
                    ease: 'power1.inOut',
                    yoyo: true
                });
            }
            // Alternating Police Strobes (0s to 17s)
            const strobeTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                repeat: -1
            });
            if (redRef.current) {
                strobeTl.to(redRef.current, {
                    opacity: 0.85,
                    duration: 0.06
                }).to(redRef.current, {
                    opacity: 0.1,
                    duration: 0.05
                }).to(redRef.current, {
                    opacity: 0.95,
                    duration: 0.08
                }).to(redRef.current, {
                    opacity: 0,
                    duration: 0.12
                });
            }
            if (blueRef.current) {
                strobeTl.to(blueRef.current, {
                    opacity: 0.85,
                    duration: 0.06
                }, '-=0.08').to(blueRef.current, {
                    opacity: 0.1,
                    duration: 0.05
                }).to(blueRef.current, {
                    opacity: 0.95,
                    duration: 0.08
                }).to(blueRef.current, {
                    opacity: 0,
                    duration: 0.14
                });
            }
            // Master Timeline synced with the 17-second audio track
            const masterTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                onComplete: {
                    "WantedStars.useEffect.masterTl": ()=>{
                        onComplete();
                    }
                }["WantedStars.useEffect.masterTl"]
            });
            // --- 0.0s to 8.0s: Chase Energy buildup ---
            // At 8.0s: Stars reveal on screen
            masterTl.to({}, {
                duration: 0.1,
                onStart: {
                    "WantedStars.useEffect": ()=>{
                        setShowStars(true);
                        setFilledCount(1);
                        if (starsContainerRef.current) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(starsContainerRef.current, {
                                opacity: 0,
                                scale: 0.85
                            }, {
                                opacity: 1,
                                scale: 1,
                                duration: 0.4,
                                ease: 'power2.out'
                            });
                        }
                    }
                }["WantedStars.useEffect"]
            }, 8.0);
            // At 9.6s: Star 2
            masterTl.to({}, {
                duration: 0.1,
                onStart: {
                    "WantedStars.useEffect": ()=>{
                        setFilledCount(2);
                    }
                }["WantedStars.useEffect"]
            }, 9.6);
            // At 11.2s: Star 3
            masterTl.to({}, {
                duration: 0.1,
                onStart: {
                    "WantedStars.useEffect": ()=>{
                        setFilledCount(3);
                    }
                }["WantedStars.useEffect"]
            }, 11.2);
            // At 12.8s: Star 4
            masterTl.to({}, {
                duration: 0.1,
                onStart: {
                    "WantedStars.useEffect": ()=>{
                        setFilledCount(4);
                    }
                }["WantedStars.useEffect"]
            }, 12.8);
            // At 14.4s: Star 5 (Full 5 Stars Climax + Flash + Screen rumble)
            masterTl.to({}, {
                duration: 0.1,
                onStart: {
                    "WantedStars.useEffect": ()=>{
                        setFilledCount(5);
                        setIsMaxWanted(true);
                        if (flashRef.current) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(flashRef.current, {
                                opacity: 0,
                                scale: 0.6
                            }, {
                                opacity: 1,
                                scale: 5,
                                duration: 0.25,
                                ease: 'power2.out',
                                yoyo: true,
                                repeat: 1
                            });
                        }
                        if (containerRef.current) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(containerRef.current, {
                                x: -10,
                                y: -6
                            }, {
                                x: 10,
                                y: 6,
                                duration: 0.05,
                                repeat: 6,
                                yoyo: true,
                                ease: 'power2.inOut',
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
            }, 14.4);
            // Total duration: 17.0s (matches user's siren_loop.mp3)
            masterTl.to({}, {
                duration: 2.6
            }, 14.4);
            return ({
                "WantedStars.useEffect": ()=>{
                    masterTl.kill();
                    strobeTl.kill();
                    if (sweepRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(sweepRef.current);
                    if (containerRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(containerRef.current);
                    if (starsContainerRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(starsContainerRef.current);
                    if (flashRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(flashRef.current);
                }
            })["WantedStars.useEffect"];
        }
    }["WantedStars.useEffect"], [
        onComplete,
        sounds
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            position: 'fixed',
            inset: 0,
            background: '#000',
            zIndex: 95,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "noise-overlay"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 236,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crt-scanlines"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 237,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: redRef,
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at 15% 50%, rgba(255,0,0,0.65) 0%, rgba(200,0,0,0.2) 45%, transparent 70%)',
                    opacity: 0,
                    mixBlendMode: 'screen'
                }
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 240,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: blueRef,
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at 85% 50%, rgba(0,100,255,0.65) 0%, rgba(0,70,220,0.2) 45%, transparent 70%)',
                    opacity: 0,
                    mixBlendMode: 'screen'
                }
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 253,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: sweepRef,
                style: {
                    position: 'absolute',
                    top: '-20%',
                    left: '-30%',
                    width: '60%',
                    height: '140%',
                    background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.12) 0%, transparent 60%)',
                    transform: 'rotate(-25deg)',
                    pointerEvents: 'none',
                    mixBlendMode: 'screen'
                }
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 266,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 282,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: flashRef,
                style: {
                    position: 'absolute',
                    width: '320px',
                    height: '320px',
                    background: 'radial-gradient(circle, #ffffff 0%, rgba(255,255,255,0.85) 30%, transparent 70%)',
                    opacity: 0,
                    filter: 'blur(20px)',
                    pointerEvents: 'none',
                    zIndex: 115
                }
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 284,
                columnNumber: 13
            }, this),
            showStars && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: starsContainerRef,
                style: {
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'center',
                    zIndex: 110
                },
                children: [
                    0,
                    1,
                    2,
                    3,
                    4
                ].map((i)=>{
                    const isFilled = i < filledCount;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarIcon, {
                        filled: isFilled,
                        flashing: isMaxWanted,
                        style: {
                            transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
                            transform: isFilled ? 'scale(1.18)' : 'scale(1)'
                        }
                    }, i, false, {
                        fileName: "[project]/components/WantedStars.tsx",
                        lineNumber: 312,
                        columnNumber: 29
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 300,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WantedStars.tsx",
        lineNumber: 222,
        columnNumber: 9
    }, this);
}
_s(WantedStars, "PIDcMhCM0FJrkF99DdgYWLPxoZ0=");
_c1 = WantedStars;
var _c, _c1;
__turbopack_context__.k.register(_c, "StarIcon");
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