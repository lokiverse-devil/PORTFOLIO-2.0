(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/MissionResult.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MissionResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const CONFIGS = {
    'passed-access': {
        color: '#4ade80',
        line1: 'MISSION PASSED',
        line2: 'ACCESS GRANTED',
        isPassed: true,
        rewardText: '+₹15,000 CASH BONUS'
    },
    'passed-portfolio': {
        color: '#4ade80',
        line1: 'MISSION PASSED',
        line2: 'PORTFOLIO LOADED',
        isPassed: true,
        rewardText: '+₹40,000 HEIST SHARE'
    },
    'passed-robot': {
        color: '#4ade80',
        line1: 'MISSION PASSED',
        line2: 'HUMAN VERIFIED — ACCESS GRANTED',
        isPassed: true,
        rewardText: '+₹25,000 VERIFICATION BONUS'
    },
    'passed-gained-life': {
        color: '#4ade80',
        line1: 'MISSION PASSED',
        line2: '+1 LIFE RESTORED — WELCOME OPERATOR',
        isPassed: true,
        rewardText: '+1 EXTRA LIFE // +₹50,000 REDEMPTION SHARE'
    },
    'failed-denied': {
        color: '#ef4444',
        line1: 'MISSION FAILED',
        line2: 'ACCESS DENIED — PROCEEDING TO QUERY 02',
        isPassed: false
    },
    'failed-life-lost': {
        color: '#f59e0b',
        line1: '-1 LIFE DEDUCTED',
        line2: 'CRITICAL WARNING: 1 LIFE REMAINING // SECONDARY PROTOCOL ENGAGED',
        isPassed: false
    },
    'failed-robot': {
        color: '#ef4444',
        line1: 'ACCESS DENIED',
        line2: 'ROBOT DETECTED — FINAL VERIFICATION REQUIRED',
        isPassed: false
    },
    'failed-debarred': {
        color: '#dc2626',
        line1: 'DEBARRED',
        line2: 'YOU ARE GETTING DEBARRED // ALL LIVES EXHAUSTED',
        isPassed: false
    }
};
function MissionResult({ type, onComplete, sounds }) {
    _s();
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flashRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headlineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const subtitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const statsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const completedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [countdown, setCountdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const isDebarred = type === 'failed-debarred';
    const cfg = type && CONFIGS[type] || CONFIGS['passed-access'];
    const triggerComplete = ()=>{
        if (completedRef.current) return;
        completedRef.current = true;
        onComplete();
    };
    // Debarred countdown and redirect logic
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MissionResult.useEffect": ()=>{
            if (!isDebarred) return;
            const redirectUrl = 'https://www.youtube.com/watch?v=2yJgwwDcgV8&list=RD2yJgwwDcgV8&start_radio=1';
            const timer = setInterval({
                "MissionResult.useEffect.timer": ()=>{
                    setCountdown({
                        "MissionResult.useEffect.timer": (prev)=>{
                            if (prev <= 1) {
                                clearInterval(timer);
                                try {
                                    window.location.href = redirectUrl;
                                } catch (e) {
                                    console.error('Redirect failed:', e);
                                }
                                return 0;
                            }
                            return prev - 1;
                        }
                    }["MissionResult.useEffect.timer"]);
                }
            }["MissionResult.useEffect.timer"], 1000);
            return ({
                "MissionResult.useEffect": ()=>clearInterval(timer)
            })["MissionResult.useEffect"];
        }
    }["MissionResult.useEffect"], [
        isDebarred
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MissionResult.useEffect": ()=>{
            try {
                if (sounds) {
                    if (cfg.isPassed) {
                        sounds.passed?.play();
                    } else {
                        if (isDebarred) {
                            sounds.failed?.volume(0.25);
                            sounds.failed?.play();
                            if (sounds.laugh) {
                                sounds.laugh.volume(1.0);
                                sounds.laugh.play();
                            }
                        } else {
                            sounds.failed?.volume(0.4);
                            sounds.failed?.play();
                        }
                    }
                }
            } catch (e) {
                console.warn('Audio notice in mission result:', e);
            }
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline({
                onComplete: isDebarred ? undefined : triggerComplete
            });
            // Initial flash
            if (flashRef.current) {
                tl.fromTo(flashRef.current, {
                    opacity: 0.75,
                    backgroundColor: cfg.color
                }, {
                    opacity: 0,
                    duration: 0.35,
                    ease: 'power2.out'
                });
            }
            // Background dim
            if (overlayRef.current) {
                tl.to(overlayRef.current, {
                    backgroundColor: 'rgba(5, 5, 8, 0.96)',
                    duration: 0.25
                }, '-=0.25');
            }
            // Headline Slam
            if (headlineRef.current) {
                tl.fromTo(headlineRef.current, {
                    scale: 2.3,
                    opacity: 0
                }, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.4,
                    ease: 'back.out(1.5)'
                }, '-=0.15');
            }
            // Horizontal Line Expand
            if (lineRef.current) {
                tl.fromTo(lineRef.current, {
                    scaleX: 0,
                    opacity: 0
                }, {
                    scaleX: 1,
                    opacity: 1,
                    duration: 0.35,
                    ease: 'power3.out'
                }, '-=0.2');
            }
            // Subtitle Delay
            if (subtitleRef.current) {
                tl.fromTo(subtitleRef.current, {
                    opacity: 0,
                    y: 12
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                }, '-=0.15');
            }
            // Payout / Stats ticker
            if (statsRef.current && cfg.isPassed) {
                tl.fromTo(statsRef.current, {
                    opacity: 0,
                    y: 15
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.35,
                    ease: 'power2.out'
                }, '-=0.1');
            }
            if (!isDebarred) {
                // For life lost, hold slightly longer to let user read the warning
                const holdTime = type === 'failed-life-lost' ? 2.6 : 2.2;
                tl.to({}, {
                    duration: holdTime
                }); // Hold duration
                if (overlayRef.current) {
                    tl.to(overlayRef.current, {
                        opacity: 0,
                        duration: 0.45,
                        ease: 'power2.inOut'
                    });
                }
            }
            return ({
                "MissionResult.useEffect": ()=>{
                    tl.kill();
                    if (overlayRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(overlayRef.current);
                    if (flashRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(flashRef.current);
                    if (headlineRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(headlineRef.current);
                    if (subtitleRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(subtitleRef.current);
                    if (lineRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(lineRef.current);
                    if (statsRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].killTweensOf(statsRef.current);
                    if (isDebarred && sounds?.laugh) {
                        try {
                            sounds.laugh.stop();
                        } catch (_) {}
                    }
                }
            })["MissionResult.useEffect"];
        }
    }["MissionResult.useEffect"], [
        cfg,
        isDebarred
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: overlayRef,
        style: {
            position: 'fixed',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9000,
            userSelect: 'none',
            cursor: 'default'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: flashRef,
                style: {
                    position: 'absolute',
                    inset: 0,
                    zIndex: 9001,
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/components/MissionResult.tsx",
                lineNumber: 240,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heavy-vignette"
            }, void 0, false, {
                fileName: "[project]/components/MissionResult.tsx",
                lineNumber: 249,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    zIndex: 9002,
                    padding: '0 20px',
                    maxWidth: isDebarred ? '750px' : '900px',
                    width: '100%'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: headlineRef,
                        className: "mission-headline",
                        style: {
                            fontFamily: 'Pricedown, ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            color: cfg.color,
                            lineHeight: 0.95,
                            textShadow: `0 4px 30px rgba(0,0,0,0.95), 0 0 50px ${cfg.color}66`,
                            fontWeight: 'bold',
                            fontSize: isDebarred ? 'clamp(3rem, 7vw, 5.5rem)' : undefined
                        },
                        children: cfg.line1
                    }, void 0, false, {
                        fileName: "[project]/components/MissionResult.tsx",
                        lineNumber: 260,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: lineRef,
                        style: {
                            height: '2px',
                            width: '320px',
                            background: cfg.color,
                            margin: '18px auto',
                            opacity: 0,
                            boxShadow: `0 0 14px ${cfg.color}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/MissionResult.tsx",
                        lineNumber: 277,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: subtitleRef,
                        className: "mission-subtitle",
                        style: {
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            letterSpacing: '0.35em',
                            textTransform: 'uppercase',
                            color: '#ffffff',
                            opacity: 0,
                            textShadow: '0 2px 10px rgba(0,0,0,0.9)',
                            fontSize: 'clamp(0.9rem, 2vw, 1.2rem)'
                        },
                        children: cfg.line2
                    }, void 0, false, {
                        fileName: "[project]/components/MissionResult.tsx",
                        lineNumber: 289,
                        columnNumber: 17
                    }, this),
                    isDebarred && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginTop: '36px',
                            padding: '24px 32px',
                            background: 'rgba(20, 10, 12, 0.88)',
                            border: '1px solid rgba(220, 38, 38, 0.4)',
                            boxShadow: '0 0 35px rgba(220, 38, 38, 0.25)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '16px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                    fontSize: '0.85rem',
                                    color: 'rgba(255, 255, 255, 0.7)',
                                    letterSpacing: '0.25em',
                                    textTransform: 'uppercase'
                                },
                                children: "ACCESS REVOKED // YOU AIN'T GETTING IN NOW"
                            }, void 0, false, {
                                fileName: "[project]/components/MissionResult.tsx",
                                lineNumber: 320,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                                    fontSize: 'clamp(1.4rem, 3.2vw, 2.2rem)',
                                    color: '#ffffff',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase'
                                },
                                children: [
                                    "GO WATCH NYAN KITTY IN:",
                                    ' ',
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: 'Pricedown, monospace',
                                            color: '#ef4444',
                                            fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                                            display: 'inline-block',
                                            minWidth: '40px',
                                            marginLeft: '8px',
                                            textShadow: '0 0 15px rgba(239, 68, 68, 0.8)'
                                        },
                                        children: countdown
                                    }, void 0, false, {
                                        fileName: "[project]/components/MissionResult.tsx",
                                        lineNumber: 342,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MissionResult.tsx",
                                lineNumber: 332,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: '10px',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                },
                                children: [
                                    5,
                                    4,
                                    3,
                                    2,
                                    1
                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: '28px',
                                            height: '28px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontFamily: 'Pricedown, monospace',
                                            fontSize: '0.9rem',
                                            borderRadius: '3px',
                                            background: countdown <= s ? 'rgba(220, 38, 38, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                                            border: countdown === s ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.1)',
                                            color: countdown <= s ? '#ef4444' : 'rgba(255, 255, 255, 0.3)',
                                            boxShadow: countdown === s ? '0 0 12px rgba(239, 68, 68, 0.6)' : 'none',
                                            transform: countdown === s ? 'scale(1.15)' : 'scale(1)',
                                            transition: 'all 0.2s ease'
                                        },
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/components/MissionResult.tsx",
                                        lineNumber: 366,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/MissionResult.tsx",
                                lineNumber: 357,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.youtube.com/watch?v=2yJgwwDcgV8&list=RD2yJgwwDcgV8&start_radio=1",
                                target: "_self",
                                rel: "noopener noreferrer",
                                style: {
                                    marginTop: '8px',
                                    fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                    fontSize: '0.8rem',
                                    color: 'rgba(255, 255, 255, 0.5)',
                                    letterSpacing: '0.2em',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    transition: 'color 0.2s ease'
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.color = '#ef4444',
                                onMouseLeave: (e)=>e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)',
                                children: "[ CLICK HERE IF NOT AUTOMATICALLY REDIRECTED ]"
                            }, void 0, false, {
                                fileName: "[project]/components/MissionResult.tsx",
                                lineNumber: 397,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MissionResult.tsx",
                        lineNumber: 307,
                        columnNumber: 21
                    }, this),
                    cfg.isPassed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: statsRef,
                        style: {
                            marginTop: '28px',
                            display: 'inline-flex',
                            gap: '24px',
                            padding: '10px 24px',
                            background: 'rgba(10, 10, 14, 0.85)',
                            border: '1px solid rgba(74, 222, 128, 0.35)',
                            boxShadow: '0 0 25px rgba(74, 222, 128, 0.15)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                            fontSize: '0.7rem',
                                            color: 'rgba(255,255,255,0.5)',
                                            letterSpacing: '0.2em'
                                        },
                                        children: "PAYOUT"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MissionResult.tsx",
                                        lineNumber: 434,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'Pricedown, "Share Tech Mono", monospace',
                                            fontSize: '1.25rem',
                                            color: '#4ade80',
                                            letterSpacing: '0.05em'
                                        },
                                        children: cfg.rewardText
                                    }, void 0, false, {
                                        fileName: "[project]/components/MissionResult.tsx",
                                        lineNumber: 444,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MissionResult.tsx",
                                lineNumber: 433,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '1px',
                                    background: 'rgba(255,255,255,0.15)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/MissionResult.tsx",
                                lineNumber: 456,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                            fontSize: '0.7rem',
                                            color: 'rgba(255,255,255,0.5)',
                                            letterSpacing: '0.2em'
                                        },
                                        children: "STATUS"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MissionResult.tsx",
                                        lineNumber: 459,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: 'ChaletLondon1960, "Bebas Neue", sans-serif',
                                            fontSize: '1rem',
                                            color: '#f5a623',
                                            letterSpacing: '0.1em'
                                        },
                                        children: "GOLD MEDAL ★★★"
                                    }, void 0, false, {
                                        fileName: "[project]/components/MissionResult.tsx",
                                        lineNumber: 469,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/MissionResult.tsx",
                                lineNumber: 458,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MissionResult.tsx",
                        lineNumber: 421,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MissionResult.tsx",
                lineNumber: 251,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MissionResult.tsx",
        lineNumber: 226,
        columnNumber: 9
    }, this);
}
_s(MissionResult, "I33PBF/wlX6p59mdDzuFoBnZyYs=");
_c = MissionResult;
var _c;
__turbopack_context__.k.register(_c, "MissionResult");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/MissionResult.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/MissionResult.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_MissionResult_tsx_0sy2y8x._.js.map