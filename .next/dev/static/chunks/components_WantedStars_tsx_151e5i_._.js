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
function StarIcon({ className, style, flashing = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `${className || ''} wanted-star-svg ${flashing ? 'gta-wanted-flash' : ''}`,
        style: style,
        viewBox: "0 0 72 72",
        width: "56",
        height: "56",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "36,4 44,28 70,28 49,44 57,68 36,52 15,68 23,44 2,28 28,28",
            fill: "#ffffff",
            stroke: "#ffffff",
            strokeWidth: "2.5",
            style: {
                filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.7))'
            }
        }, void 0, false, {
            fileName: "[project]/components/WantedStars.tsx",
            lineNumber: 22,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/WantedStars.tsx",
        lineNumber: 15,
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
    // starCount starts at 0 (no stars during 0.0s - 8.0s police buildup)
    const [starCount, setStarCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMaxWanted, setIsMaxWanted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WantedStars.useEffect": ()=>{
            const siren = sounds?.siren;
            // Start siren_loop.mp3 (17 seconds total)
            const startAudio = {
                "WantedStars.useEffect.startAudio": async ()=>{
                    try {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"] && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx.state !== 'running') {
                            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Howler"].ctx.resume();
                        }
                        if (siren) {
                            siren.stop();
                            siren.volume(0.55);
                            siren.play();
                        }
                    } catch (err) {
                        console.log('Audio notice:', err);
                    }
                }
            }["WantedStars.useEffect.startAudio"];
            startAudio();
            // Sweeping helicopter spotlight
            if (sweepRef.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(sweepRef.current, {
                    x: '120%',
                    duration: 2.2,
                    repeat: -1,
                    ease: 'power1.inOut',
                    yoyo: true
                });
            }
            // Alternating Police Strobes
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
            // Master Timeline synced with siren_loop.mp3 (17s total duration)
            // 0.0s - 8.0s: Pure Police Chase buildup
            // 8.0s - 17.0s: Star audio in siren_loop.mp3 (Stars appear 1+1+1+1+1 = 5)
            const masterTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                onComplete: {
                    "WantedStars.useEffect.masterTl": ()=>{
                        onComplete();
                    }
                }["WantedStars.useEffect.masterTl"]
            });
            // Star 1 appears at 8.0s
            masterTl.to({}, {
                duration: 0.1,
                onStart: {
                    "WantedStars.useEffect": ()=>{
                        setStarCount(1);
                    }
                }["WantedStars.useEffect"]
            }, 8.0);
            // Star 2 appears at 9.8s
            masterTl.to({}, {
                duration: 0.1,
                onStart: {
                    "WantedStars.useEffect": ()=>{
                        setStarCount(2);
                    }
                }["WantedStars.useEffect"]
            }, 9.8);
            // Star 3 appears at 11.6s
            masterTl.to({}, {
                duration: 0.1,
                onStart: {
                    "WantedStars.useEffect": ()=>{
                        setStarCount(3);
                    }
                }["WantedStars.useEffect"]
            }, 11.6);
            // Star 4 appears at 13.4s
            masterTl.to({}, {
                duration: 0.1,
                onStart: {
                    "WantedStars.useEffect": ()=>{
                        setStarCount(4);
                    }
                }["WantedStars.useEffect"]
            }, 13.4);
            // Star 5 appears at 15.2s (Max Wanted!)
            masterTl.to({}, {
                duration: 0.1,
                onStart: {
                    "WantedStars.useEffect": ()=>{
                        setStarCount(5);
                        setIsMaxWanted(true);
                        if (flashRef.current) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(flashRef.current, {
                                opacity: 0,
                                scale: 0.5
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
                                duration: 0.04,
                                repeat: 10,
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
            }, 15.2);
            // Hold until 17.0s (end of siren_loop.mp3)
            masterTl.to({}, {
                duration: 1.8
            }, 15.2);
            // Key handler to skip
            const handleKeyDown = {
                "WantedStars.useEffect.handleKeyDown": (e)=>{
                    if (e.code === 'Space' || e.code === 'Enter') {
                        onComplete();
                    }
                }
            }["WantedStars.useEffect.handleKeyDown"];
            window.addEventListener('keydown', handleKeyDown);
            return ({
                "WantedStars.useEffect": ()=>{
                    masterTl.kill();
                    strobeTl.kill();
                    window.removeEventListener('keydown', handleKeyDown);
                    if (sweepRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(sweepRef.current);
                    if (containerRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(containerRef.current);
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
        onClick: onComplete,
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
            cursor: 'pointer'
        },
        className: "jsx-c698cf9c2d4e361",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: redRef,
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at 15% 50%, rgba(255, 0, 0, 0.7) 0%, rgba(200, 0, 0, 0.25) 45%, transparent 70%)',
                    opacity: 0,
                    mixBlendMode: 'screen'
                },
                className: "jsx-c698cf9c2d4e361"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 239,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: blueRef,
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at 85% 50%, rgba(0, 102, 255, 0.7) 0%, rgba(0, 70, 220, 0.25) 45%, transparent 70%)',
                    opacity: 0,
                    mixBlendMode: 'screen'
                },
                className: "jsx-c698cf9c2d4e361"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 252,
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
                    background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.15) 0%, transparent 60%)',
                    transform: 'rotate(-25deg)',
                    pointerEvents: 'none',
                    mixBlendMode: 'screen'
                },
                className: "jsx-c698cf9c2d4e361"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 265,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-c698cf9c2d4e361" + " " + "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 281,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: flashRef,
                style: {
                    position: 'absolute',
                    width: '320px',
                    height: '320px',
                    background: 'radial-gradient(circle, #ffffff 0%, rgba(255, 255, 255, 0.85) 30%, transparent 70%)',
                    opacity: 0,
                    filter: 'blur(20px)',
                    pointerEvents: 'none',
                    zIndex: 115
                },
                className: "jsx-c698cf9c2d4e361"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 284,
                columnNumber: 13
            }, this),
            starCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: starsContainerRef,
                style: {
                    display: 'flex',
                    gap: '22px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 110,
                    padding: '20px'
                },
                className: "jsx-c698cf9c2d4e361",
                children: Array.from({
                    length: starCount
                }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            animation: 'starPop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        },
                        className: "jsx-c698cf9c2d4e361",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarIcon, {
                            flashing: isMaxWanted
                        }, void 0, false, {
                            fileName: "[project]/components/WantedStars.tsx",
                            lineNumber: 321,
                            columnNumber: 29
                        }, this)
                    }, i, false, {
                        fileName: "[project]/components/WantedStars.tsx",
                        lineNumber: 312,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 300,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "c698cf9c2d4e361",
                children: "@keyframes starPop{0%{opacity:0;transform:scale(.3)}70%{transform:scale(1.3)}to{opacity:1;transform:scale(1)}}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WantedStars.tsx",
        lineNumber: 222,
        columnNumber: 9
    }, this);
}
_s(WantedStars, "qJYF0ZKB/RGOzkArBO+ZRXYcwo0=");
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