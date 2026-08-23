'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { MissionResultProps } from '@/lib/types'

interface ConfigItem {
    color: string
    line1: string
    line2: string
    isPassed: boolean
}

const CONFIGS: Record<string, ConfigItem> = {
    'passed-access': {
        color: '#66CC66',
        line1: 'MISSION PASSED',
        line2: 'ACCESS GRANTED',
        isPassed: true,
    },
    'passed-portfolio': {
        color: '#66CC66',
        line1: 'MISSION PASSED',
        line2: 'PORTFOLIO LOADED',
        isPassed: true,
    },
    'failed-denied': {
        color: '#b80000',
        line1: 'MISSION FAILED',
        line2: 'ACCESS DENIED',
        isPassed: false,
    },
    'failed-redirect': {
        color: '#b80000',
        line1: 'MISSION FAILED',
        line2: 'REDIRECTING\u2026',
        isPassed: false,
    },
}

export default function MissionResult({ type, onComplete, sounds }: MissionResultProps) {
    const overlayRef = useRef<HTMLDivElement | null>(null)
    const flashRef = useRef<HTMLDivElement | null>(null)
    const headlineRef = useRef<HTMLHeadingElement | null>(null)
    const subtitleRef = useRef<HTMLParagraphElement | null>(null)
    const lineRef = useRef<HTMLDivElement | null>(null)
    const cfg = (type && CONFIGS[type]) || CONFIGS['passed-access']

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

        const tl = gsap.timeline({ onComplete })

        // Initial flash
        if (flashRef.current) {
            tl.fromTo(
                flashRef.current,
                { opacity: 0.6, backgroundColor: cfg.color },
                { opacity: 0, duration: 0.35, ease: 'power2.out' }
            )
        }

        // Background desaturation / dimming
        if (overlayRef.current) {
            tl.to(overlayRef.current, { backgroundColor: 'rgba(0,0,0,0.92)', duration: 0.3 }, '-=0.25')
        }

        // Headline Slam
        if (headlineRef.current) {
            tl.fromTo(
                headlineRef.current,
                { scale: 2.2, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.45, ease: 'expo.out' },
                '-=0.2'
            )
        }

        // Horizontal Line Expand
        if (lineRef.current) {
            tl.fromTo(
                lineRef.current,
                { scaleX: 0, opacity: 0 },
                { scaleX: 1, opacity: 1, duration: 0.4, ease: 'power3.out' },
                '-=0.2'
            )
        }

        // Subtitle Delay
        if (subtitleRef.current) {
            tl.fromTo(
                subtitleRef.current,
                { opacity: 0, y: 10 },
                { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' },
                '-=0.2'
            )
        }

        tl.to({}, { duration: 2.6 }) // Hold for GTA victory feel

        if (overlayRef.current) {
            tl.to(overlayRef.current, { opacity: 0, duration: 0.6, ease: 'power2.inOut' })
        }

        return () => {
            tl.kill()
            if (overlayRef.current) gsap.killTweensOf(overlayRef.current)
            if (flashRef.current) gsap.killTweensOf(flashRef.current)
            if (headlineRef.current) gsap.killTweensOf(headlineRef.current)
            if (subtitleRef.current) gsap.killTweensOf(subtitleRef.current)
            if (lineRef.current) gsap.killTweensOf(lineRef.current)
        }
    }, [cfg, onComplete, sounds])

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
            <div className="noise-overlay" />
            <div className="crt-scanlines" />

            <div style={{ textAlign: 'center', zIndex: 9002, padding: '0 20px', maxWidth: '900px' }}>
                <h1
                    ref={headlineRef}
                    className="mission-headline"
                    style={{
                        fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        color: cfg.color,
                        lineHeight: 0.95,
                        textShadow: `0 4px 30px rgba(0,0,0,0.9), 0 0 40px ${cfg.color}55`,
                        fontWeight: 'bold',
                    }}
                >
                    {cfg.line1}
                </h1>

                <div
                    ref={lineRef}
                    style={{
                        height: '2px',
                        width: '280px',
                        background: cfg.color,
                        margin: '18px auto',
                        opacity: 0,
                        boxShadow: `0 0 10px ${cfg.color}`,
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
            </div>
        </div>
    )
}
