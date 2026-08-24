(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/sounds.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSounds",
    ()=>getSounds,
    "playHover",
    ()=>playHover,
    "playStarChime",
    ()=>playStarChime,
    "playUiClick",
    ()=>playUiClick
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$howler$2f$dist$2f$howler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/howler/dist/howler.js [app-client] (ecmascript)");
;
let soundsInstance = null;
let audioCtx = null;
const getAudioContext = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!audioCtx) {
        const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
        if (AudioCtxClass) {
            audioCtx = new AudioCtxClass();
        }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume().catch(()=>{});
    }
    return audioCtx;
};
const playUiClick = (freq = 900, type = 'sine')=>{
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 0.4, ctx.currentTime + 0.06);
        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.06);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.06);
    } catch (_) {}
};
const playStarChime = (starNum)=>{
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const now = ctx.currentTime;
        // Bass thump
        const subOsc = ctx.createOscillator();
        const subGain = ctx.createGain();
        subOsc.type = 'triangle';
        subOsc.frequency.setValueAtTime(120 + starNum * 20, now);
        subOsc.frequency.exponentialRampToValueAtTime(35, now + 0.28);
        subGain.gain.setValueAtTime(0.3, now);
        subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
        subOsc.connect(subGain);
        subGain.connect(ctx.destination);
        subOsc.start(now);
        subOsc.stop(now + 0.28);
        // Metallic star chime
        const chimeOsc = ctx.createOscillator();
        const chimeGain = ctx.createGain();
        chimeOsc.type = 'sine';
        const baseFreq = 440 + starNum * 110;
        chimeOsc.frequency.setValueAtTime(baseFreq, now);
        chimeOsc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, now + 0.18);
        chimeGain.gain.setValueAtTime(0.18, now);
        chimeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
        chimeOsc.connect(chimeGain);
        chimeGain.connect(ctx.destination);
        chimeOsc.start(now);
        chimeOsc.stop(now + 0.2);
    } catch (_) {}
};
const playHover = ()=>{
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1400, ctx.currentTime);
        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.02);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.02);
    } catch (_) {}
};
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
                volume: 0.45,
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
function StarIcon({ className, style, filled = false, flashing = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: `${className || ''} wanted-star-svg ${flashing && filled ? 'gta-wanted-flash' : ''}`,
        style: style,
        viewBox: "0 0 72 72",
        width: "56",
        height: "56",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
            points: "36,4 44,28 70,28 49,44 57,68 36,52 15,68 23,44 2,28 28,28",
            fill: filled ? '#ffffff' : 'rgba(20, 20, 20, 0.75)',
            stroke: filled ? '#ffffff' : 'rgba(255, 255, 255, 0.45)',
            strokeWidth: "2.5",
            style: {
                filter: filled ? 'drop-shadow(0 0 12px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 24px rgba(255, 255, 255, 0.7))' : 'none'
            }
        }, void 0, false, {
            fileName: "[project]/components/WantedStars.tsx",
            lineNumber: 24,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/WantedStars.tsx",
        lineNumber: 17,
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
    const starRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const flashRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const badgeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [filledCount, setFilledCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isMaxWanted, setIsMaxWanted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WantedStars.useEffect": ()=>{
            const siren = sounds?.siren;
            // Start siren audio
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
                    opacity: 0.9,
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
                    opacity: 0.9,
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
            // Pop in animation for star
            const animateStarFill = {
                "WantedStars.useEffect.animateStarFill": (index)=>{
                    setFilledCount(index + 1);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sounds$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["playStarChime"])(index + 1);
                    const starEl = starRefs.current[index];
                    if (starEl) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(starEl, {
                            scale: 1.85,
                            filter: 'brightness(2.5)'
                        }, {
                            scale: 1,
                            filter: 'brightness(1)',
                            duration: 0.45,
                            ease: 'back.out(2.2)'
                        });
                    }
                    // Subtle screen bump
                    if (containerRef.current) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(containerRef.current, {
                            y: -4
                        }, {
                            y: 0,
                            duration: 0.15,
                            ease: 'power2.out'
                        });
                    }
                }
            }["WantedStars.useEffect.animateStarFill"];
            // Master Timeline: 1-to-5 star progressive increase
            const masterTl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                onComplete: {
                    "WantedStars.useEffect.masterTl": ()=>{
                        onComplete();
                    }
                }["WantedStars.useEffect.masterTl"]
            });
            // Star 1 at 0.5s
            masterTl.to({}, {
                duration: 0.1,
                onStart: {
                    "WantedStars.useEffect": ()=>animateStarFill(0)
                }["WantedStars.useEffect"]
            }, 0.5);
            // Star 2 at 1.7s
            masterTl.to({}, {
                duration: 0.1,
                onStart: {
                    "WantedStars.useEffect": ()=>animateStarFill(1)
                }["WantedStars.useEffect"]
            }, 1.7);
            // Star 3 at 2.9s
            masterTl.to({}, {
                duration: 0.1,
                onStart: {
                    "WantedStars.useEffect": ()=>animateStarFill(2)
                }["WantedStars.useEffect"]
            }, 2.9);
            // Star 4 at 4.1s
            masterTl.to({}, {
                duration: 0.1,
                onStart: {
                    "WantedStars.useEffect": ()=>animateStarFill(3)
                }["WantedStars.useEffect"]
            }, 4.1);
            // Star 5 at 5.3s (Max Wanted Climax!)
            masterTl.to({}, {
                duration: 0.1,
                onStart: {
                    "WantedStars.useEffect": ()=>{
                        animateStarFill(4);
                        setIsMaxWanted(true);
                        if (flashRef.current) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(flashRef.current, {
                                opacity: 0,
                                scale: 0.4
                            }, {
                                opacity: 1,
                                scale: 6,
                                duration: 0.3,
                                ease: 'power2.out',
                                yoyo: true,
                                repeat: 1
                            });
                        }
                        if (containerRef.current) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(containerRef.current, {
                                x: -12,
                                y: -8
                            }, {
                                x: 12,
                                y: 8,
                                duration: 0.04,
                                repeat: 12,
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
            }, 5.3);
            // Hold at max wanted until 7.8s then complete
            masterTl.to({}, {
                duration: 2.5
            }, 5.3);
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
            background: '#000',
            zIndex: 95,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none',
            cursor: 'pointer'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "noise-overlay"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 229,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "crt-scanlines"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 230,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: redRef,
                style: {
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(ellipse at 15% 50%, rgba(255, 0, 0, 0.7) 0%, rgba(200, 0, 0, 0.25) 45%, transparent 70%)',
                    opacity: 0,
                    mixBlendMode: 'screen'
                }
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 233,
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
                }
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 246,
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
                }
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 259,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 275,
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
                }
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 278,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: badgeRef,
                style: {
                    position: 'absolute',
                    top: '12%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    zIndex: 110
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: 'clamp(0.85rem, 1.8vw, 1.15rem)',
                            letterSpacing: '0.35em',
                            textTransform: 'uppercase',
                            color: isMaxWanted ? '#ff3333' : 'rgba(255, 255, 255, 0.7)',
                            textShadow: isMaxWanted ? '0 0 12px rgba(255, 50, 50, 0.9)' : 'none',
                            transition: 'color 0.3s ease'
                        },
                        children: isMaxWanted ? '★ MAXIMUM WANTED LEVEL // LSPD DISPATCH' : 'SAN ANDREAS POLICE DEPARTMENT // DISPATCH'
                    }, void 0, false, {
                        fileName: "[project]/components/WantedStars.tsx",
                        lineNumber: 305,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            fontSize: 'clamp(1.4rem, 3.2vw, 2.2rem)',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: '#ffffff'
                        },
                        children: "WANTED LEVEL"
                    }, void 0, false, {
                        fileName: "[project]/components/WantedStars.tsx",
                        lineNumber: 318,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 293,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: '20px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 110,
                    padding: '20px'
                },
                children: [
                    0,
                    1,
                    2,
                    3,
                    4
                ].map((i)=>{
                    const isFilled = i < filledCount;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            starRefs.current[i] = el;
                        },
                        style: {
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StarIcon, {
                            filled: isFilled,
                            flashing: isMaxWanted
                        }, void 0, false, {
                            fileName: "[project]/components/WantedStars.tsx",
                            lineNumber: 356,
                            columnNumber: 29
                        }, this)
                    }, i, false, {
                        fileName: "[project]/components/WantedStars.tsx",
                        lineNumber: 345,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 332,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    bottom: '10%',
                    fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                    fontSize: '0.85rem',
                    letterSpacing: '0.25em',
                    color: 'rgba(255, 255, 255, 0.45)',
                    textTransform: 'uppercase',
                    zIndex: 110
                },
                children: "[ CLICK OR PRESS SPACE TO SKIP ]"
            }, void 0, false, {
                fileName: "[project]/components/WantedStars.tsx",
                lineNumber: 366,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WantedStars.tsx",
        lineNumber: 212,
        columnNumber: 9
    }, this);
}
_s(WantedStars, "hJOZVVzyTJQBwAju3bhP77WG1YA=");
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

//# sourceMappingURL=_00ilpz0._.js.map