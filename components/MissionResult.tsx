'use client'
import React, { useEffect, useRef } from 'react'
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
    'failed-denied': {
        color: '#ef4444',
        line1: 'MISSION FAILED',
        line2: 'ACCESS DENIED — RETRYING...',
        isPassed: false,
    },
    'failed-redirect': {
        color: '#ef4444',
        line1: 'MISSION FAILED',
        line2: 'REDIRECTING TO BRIEFING...',
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

    const cfg = (type && CONFIGS[type]) || CONFIGS['passed-access']

    const triggerComplete = () => {
        if (completedRef.current) return
        completedRef.current = true
        onComplete()
    }

    useEffect(() => {
        try {
            if (sounds) {
                if (cfg.isPassed) {
                    sounds.passed?.play()
                } else {
                    sounds.failed?.play()
                }
            }
        } catch (e) {
            console.warn('Audio notice in mission result:', e)
        }

        const tl = gsap.timeline({ onComplete: triggerComplete })

        // Initial flash
        if (flashRef.current) {
            tl.fromTo(
                flashRef.current,
                { opacity: 0.7, backgroundColor: cfg.color },
                { opacity: 0, duration: 0.35, ease: 'power2.out' }
            )
        }

        // Background dim
        if (overlayRef.current) {
            tl.to(overlayRef.current, { backgroundColor: 'rgba(5, 5, 8, 0.95)', duration: 0.25 }, '-=0.25')
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

        tl.to({}, { duration: 2.2 }) // Hold duration

        if (overlayRef.current) {
            tl.to(overlayRef.current, { opacity: 0, duration: 0.45, ease: 'power2.inOut' })
        }

        return () => {
            tl.kill()
            if (overlayRef.current) gsap.killTweensOf(overlayRef.current)
            if (flashRef.current) gsap.killTweensOf(flashRef.current)
            if (headlineRef.current) gsap.killTweensOf(headlineRef.current)
            if (subtitleRef.current) gsap.killTweensOf(subtitleRef.current)
            if (lineRef.current) gsap.killTweensOf(lineRef.current)
            if (statsRef.current) gsap.killTweensOf(statsRef.current)
        }
    }, [cfg])

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

            <div style={{ textAlign: 'center', zIndex: 9002, padding: '0 20px', maxWidth: '900px' }}>
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
                        letterSpacing: '0.45em',
                        textTransform: 'uppercase',
                        color: '#ffffff',
                        opacity: 0,
                        textShadow: '0 2px 10px rgba(0,0,0,0.9)',
                    }}
                >
                    {cfg.line2}
                </p>

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
                            <div style={{ fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em' }}>
                                PAYOUT
                            </div>
                            <div style={{ fontFamily: 'Pricedown, "Share Tech Mono", monospace', fontSize: '1.25rem', color: '#4ade80', letterSpacing: '0.05em' }}>
                                {cfg.rewardText}
                            </div>
                        </div>

                        <div style={{ width: '1px', background: 'rgba(255,255,255,0.15)' }} />

                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em' }}>
                                STATUS
                            </div>
                            <div style={{ fontFamily: 'ChaletLondon1960, "Bebas Neue", sans-serif', fontSize: '1rem', color: '#f5a623', letterSpacing: '0.1em' }}>
                                GOLD MEDAL ★★★
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
