'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { MissionResultProps } from '@/lib/types'

interface ConfigItem {
    color: string
    line1: string
    line2: string
    isPassed: boolean
    rewardText?: string
}

const CONFIGS: Record<string, ConfigItem> = {
    'passed-access': {
        color: '#4ade80',
        line1: 'MISSION PASSED',
        line2: 'ACCESS GRANTED',
        isPassed: true,
        rewardText: '+₹15,000 CASH BONUS',
    },
    'passed-portfolio': {
        color: '#4ade80',
        line1: 'MISSION PASSED',
        line2: 'PORTFOLIO LOADED',
        isPassed: true,
        rewardText: '+₹40,000 HEIST SHARE',
    },
    'passed-robot': {
        color: '#4ade80',
        line1: 'MISSION PASSED',
        line2: 'HUMAN VERIFIED — ACCESS GRANTED',
        isPassed: true,
        rewardText: '+₹25,000 VERIFICATION BONUS',
    },
    'passed-gained-life': {
        color: '#4ade80',
        line1: 'MISSION PASSED',
        line2: '+1 LIFE RESTORED — WELCOME OPERATOR',
        isPassed: true,
        rewardText: '+1 EXTRA LIFE // +₹50,000 REDEMPTION SHARE',
    },
    'failed-denied': {
        color: '#ef4444',
        line1: 'MISSION FAILED',
        line2: 'ACCESS DENIED — PROCEEDING TO QUERY 02',
        isPassed: false,
    },
    'failed-life-lost': {
        color: '#f59e0b',
        line1: '-1 LIFE DEDUCTED',
        line2: 'CRITICAL WARNING: 1 LIFE REMAINING // SECONDARY PROTOCOL ENGAGED',
        isPassed: false,
    },
    'failed-robot': {
        color: '#ef4444',
        line1: 'ACCESS DENIED',
        line2: 'ROBOT DETECTED — FINAL VERIFICATION REQUIRED',
        isPassed: false,
    },
    'failed-debarred': {
        color: '#dc2626',
        line1: 'DEBARRED',
        line2: 'YOU ARE GETTING DEBARRED // ALL LIVES EXHAUSTED',
        isPassed: false,
    },
}

export default function MissionResult({ type, onComplete, sounds }: MissionResultProps) {
    const overlayRef = useRef<HTMLDivElement | null>(null)
    const flashRef = useRef<HTMLDivElement | null>(null)
    const headlineRef = useRef<HTMLHeadingElement | null>(null)
    const subtitleRef = useRef<HTMLParagraphElement | null>(null)
    const lineRef = useRef<HTMLDivElement | null>(null)
    const statsRef = useRef<HTMLDivElement | null>(null)
    const completedRef = useRef<boolean>(false)

    const [countdown, setCountdown] = useState<number>(5)
    const isDebarred = type === 'failed-debarred'

    const cfg = (type && CONFIGS[type]) || CONFIGS['passed-access']

    const triggerComplete = () => {
        if (completedRef.current) return
        completedRef.current = true
        onComplete()
    }

    // Debarred countdown and redirect logic
    useEffect(() => {
        if (!isDebarred) return

        const redirectUrl =
            'https://www.youtube.com/watch?v=2yJgwwDcgV8&list=RD2yJgwwDcgV8&start_radio=1'

        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    try {
                        window.location.href = redirectUrl
                    } catch (e) {
                        console.error('Redirect failed:', e)
                    }
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [isDebarred])

    useEffect(() => {
        try {
            if (sounds) {
                if (cfg.isPassed) {
                    sounds.passed?.play()
                } else {
                    if (isDebarred) {
                        sounds.failed?.volume(0.25)
                        sounds.failed?.play()
                        if (sounds.laugh) {
                            sounds.laugh.volume(1.0)
                            sounds.laugh.play()
                        }
                    } else {
                        sounds.failed?.volume(0.4)
                        sounds.failed?.play()
                    }
                }
            }
        } catch (e) {
            console.warn('Audio notice in mission result:', e)
        }

        const tl = gsap.timeline({
            onComplete: isDebarred ? undefined : triggerComplete,
        })

        // Initial flash
        if (flashRef.current) {
            tl.fromTo(
                flashRef.current,
                { opacity: 0.75, backgroundColor: cfg.color },
                { opacity: 0, duration: 0.35, ease: 'power2.out' }
            )
        }

        // Background dim
        if (overlayRef.current) {
            tl.to(
                overlayRef.current,
                { backgroundColor: 'rgba(5, 5, 8, 0.96)', duration: 0.25 },
                '-=0.25'
            )
        }

        // Headline Slam
        if (headlineRef.current) {
            tl.fromTo(
                headlineRef.current,
                { scale: 2.3, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.5)' },
                '-=0.15'
            )
        }

        // Horizontal Line Expand
        if (lineRef.current) {
            tl.fromTo(
                lineRef.current,
                { scaleX: 0, opacity: 0 },
                { scaleX: 1, opacity: 1, duration: 0.35, ease: 'power3.out' },
                '-=0.2'
            )
        }

        // Subtitle Delay
        if (subtitleRef.current) {
            tl.fromTo(
                subtitleRef.current,
                { opacity: 0, y: 12 },
                { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' },
                '-=0.15'
            )
        }

        // Payout / Stats ticker
        if (statsRef.current && cfg.isPassed) {
            tl.fromTo(
                statsRef.current,
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' },
                '-=0.1'
            )
        }

        if (!isDebarred) {
            // For life lost, hold slightly longer to let user read the warning
            const holdTime = type === 'failed-life-lost' ? 2.6 : 2.2
            tl.to({}, { duration: holdTime }) // Hold duration

            if (overlayRef.current) {
                tl.to(overlayRef.current, { opacity: 0, duration: 0.45, ease: 'power2.inOut' })
            }
        }

        return () => {
            tl.kill()
            if (overlayRef.current) gsap.killTweensOf(overlayRef.current)
            if (flashRef.current) gsap.killTweensOf(flashRef.current)
            if (headlineRef.current) gsap.killTweensOf(headlineRef.current)
            if (subtitleRef.current) gsap.killTweensOf(subtitleRef.current)
            if (lineRef.current) gsap.killTweensOf(lineRef.current)
            if (statsRef.current) gsap.killTweensOf(statsRef.current)
            if (isDebarred && sounds?.laugh) {
                try {
                    sounds.laugh.stop()
                } catch (_) {}
            }
        }
    }, [cfg, isDebarred])

    return (
        <div
            ref={overlayRef}
            style={{
                position: 'fixed',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9000,
                userSelect: 'none',
                cursor: 'default',
            }}
        >
            <div
                ref={flashRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 9001,
                    pointerEvents: 'none',
                }}
            />
            <div className="heavy-vignette" />

            <div
                style={{
                    textAlign: 'center',
                    zIndex: 9002,
                    padding: '0 20px',
                    maxWidth: isDebarred ? '750px' : '900px',
                    width: '100%',
                }}
            >
                <h1
                    ref={headlineRef}
                    className="mission-headline"
                    style={{
                        fontFamily: 'Pricedown, ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: cfg.color,
                        lineHeight: 0.95,
                        textShadow: `0 4px 30px rgba(0,0,0,0.95), 0 0 50px ${cfg.color}66`,
                        fontWeight: 'bold',
                        fontSize: isDebarred ? 'clamp(3rem, 7vw, 5.5rem)' : undefined,
                    }}
                >
                    {cfg.line1}
                </h1>

                <div
                    ref={lineRef}
                    style={{
                        height: '2px',
                        width: '320px',
                        background: cfg.color,
                        margin: '18px auto',
                        opacity: 0,
                        boxShadow: `0 0 14px ${cfg.color}`,
                    }}
                />

                <p
                    ref={subtitleRef}
                    className="mission-subtitle"
                    style={{
                        fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                        letterSpacing: '0.35em',
                        textTransform: 'uppercase',
                        color: '#ffffff',
                        opacity: 0,
                        textShadow: '0 2px 10px rgba(0,0,0,0.9)',
                        fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
                    }}
                >
                    {cfg.line2}
                </p>

                {/* Debarred Countdown Box */}
                {isDebarred && (
                    <div
                        style={{
                            marginTop: '36px',
                            padding: '24px 32px',
                            background: 'rgba(20, 10, 12, 0.88)',
                            border: '1px solid rgba(220, 38, 38, 0.4)',
                            boxShadow: '0 0 35px rgba(220, 38, 38, 0.25)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '16px',
                        }}
                    >
                        <div
                            style={{
                                fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                fontSize: '0.85rem',
                                color: 'rgba(255, 255, 255, 0.7)',
                                letterSpacing: '0.25em',
                                textTransform: 'uppercase',
                            }}
                        >
                            ACCESS REVOKED // YOU AIN'T GETTING IN NOW
                        </div>

                        <div
                            style={{
                                fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                                fontSize: 'clamp(1.4rem, 3.2vw, 2.2rem)',
                                color: '#ffffff',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                            }}
                        >
                            GO WATCH NYAN KITTY IN:{' '}
                            <span
                                style={{
                                    fontFamily: 'Pricedown, monospace',
                                    color: '#ef4444',
                                    fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                                    display: 'inline-block',
                                    minWidth: '40px',
                                    marginLeft: '8px',
                                    textShadow: '0 0 15px rgba(239, 68, 68, 0.8)',
                                }}
                            >
                                {countdown}
                            </span>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            {[5, 4, 3, 2, 1].map((s) => (
                                <div
                                    key={s}
                                    style={{
                                        width: '28px',
                                        height: '28px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontFamily: 'Pricedown, monospace',
                                        fontSize: '0.9rem',
                                        borderRadius: '3px',
                                        background:
                                            countdown <= s
                                                ? 'rgba(220, 38, 38, 0.3)'
                                                : 'rgba(255, 255, 255, 0.05)',
                                        border:
                                            countdown === s
                                                ? '1px solid #ef4444'
                                                : '1px solid rgba(255, 255, 255, 0.1)',
                                        color: countdown <= s ? '#ef4444' : 'rgba(255, 255, 255, 0.3)',
                                        boxShadow:
                                            countdown === s ? '0 0 12px rgba(239, 68, 68, 0.6)' : 'none',
                                        transform: countdown === s ? 'scale(1.15)' : 'scale(1)',
                                        transition: 'all 0.2s ease',
                                    }}
                                >
                                    {s}
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://www.youtube.com/watch?v=2yJgwwDcgV8&list=RD2yJgwwDcgV8&start_radio=1"
                            target="_self"
                            rel="noopener noreferrer"
                            style={{
                                marginTop: '8px',
                                fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                fontSize: '0.8rem',
                                color: 'rgba(255, 255, 255, 0.5)',
                                letterSpacing: '0.2em',
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                transition: 'color 0.2s ease',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#ef4444')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)')}
                        >
                            [ CLICK HERE IF NOT AUTOMATICALLY REDIRECTED ]
                        </a>
                    </div>
                )}

                {/* GTA V Heist Stats / Payout Breakout */}
                {cfg.isPassed && (
                    <div
                        ref={statsRef}
                        style={{
                            marginTop: '28px',
                            display: 'inline-flex',
                            gap: '24px',
                            padding: '10px 24px',
                            background: 'rgba(10, 10, 14, 0.85)',
                            border: '1px solid rgba(74, 222, 128, 0.35)',
                            boxShadow: '0 0 25px rgba(74, 222, 128, 0.15)',
                        }}
                    >
                        <div style={{ textAlign: 'center' }}>
                            <div
                                style={{
                                    fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                    fontSize: '0.7rem',
                                    color: 'rgba(255,255,255,0.5)',
                                    letterSpacing: '0.2em',
                                }}
                            >
                                PAYOUT
                            </div>
                            <div
                                style={{
                                    fontFamily: 'Pricedown, "Share Tech Mono", monospace',
                                    fontSize: '1.25rem',
                                    color: '#4ade80',
                                    letterSpacing: '0.05em',
                                }}
                            >
                                {cfg.rewardText}
                            </div>
                        </div>

                        <div style={{ width: '1px', background: 'rgba(255,255,255,0.15)' }} />

                        <div style={{ textAlign: 'center' }}>
                            <div
                                style={{
                                    fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                    fontSize: '0.7rem',
                                    color: 'rgba(255,255,255,0.5)',
                                    letterSpacing: '0.2em',
                                }}
                            >
                                STATUS
                            </div>
                            <div
                                style={{
                                    fontFamily: 'ChaletLondon1960, "Bebas Neue", sans-serif',
                                    fontSize: '1rem',
                                    color: '#f5a623',
                                    letterSpacing: '0.1em',
                                }}
                            >
                                GOLD MEDAL ★★★
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
