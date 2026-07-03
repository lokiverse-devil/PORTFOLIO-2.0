'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const CONFIGS = {
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
        color: '#8a0000',
        line1: 'MISSION FAILED',
        line2: 'ACCESS DENIED',
        isPassed: false,
    },
    'failed-redirect': {
        color: '#8a0000',
        line1: 'MISSION FAILED',
        line2: 'REDIRECTING\u2026',
        isPassed: false,
    },
}

export default function MissionResult({ type, onComplete, sounds }) {
    const overlayRef = useRef(null)
    const flashRef = useRef(null)
    const headlineRef = useRef(null)
    const subtitleRef = useRef(null)
    const cfg = CONFIGS[type] || CONFIGS['passed-access']

    useEffect(() => {
        if (sounds) {
            if (cfg.isPassed) {
                sounds.passed && sounds.passed.play()
            } else {
                sounds.failed && sounds.failed.play()
            }
        }

        const tl = gsap.timeline({ onComplete })

        // Intense Entry Flash
        tl.fromTo(flashRef.current,
            { opacity: 0.7, backgroundColor: cfg.color },
            { opacity: 0, duration: 0.24, ease: 'power2.out' }
        )

        // Background Dim
        tl.to(overlayRef.current, { backgroundColor: 'rgba(0,0,0,0.85)', duration: 0.4 }, "-=0.2")

        // Headline SLAM
        tl.fromTo(headlineRef.current,
            { scale: 1.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: 'expo.out' },
            "-=0.3"
        )

        // Subtitle Delay
        tl.fromTo(subtitleRef.current,
            { opacity: 0, y: 10 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
            "-=0.48" // 120ms after slam (0.6 - 0.12 = 0.48)
        )

        tl.to({}, { duration: 2 }) // Hold
        tl.to(overlayRef.current, { opacity: 0, duration: 0.6, ease: 'power2.in' })

        return () => tl.kill()
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
            }}
        >
            <div
                ref={flashRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 9001,
                    pointerEvents: 'none'
                }}
            />
            <div className="noise-overlay" />

            <div style={{ textAlign: 'center', zIndex: 9002 }}>
                <h1
                    ref={headlineRef}
                    style={{
                        fontFamily: 'ChaletLondon1960, sans-serif',
                        fontSize: '5rem',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: '#fff',
                        lineHeight: 1,
                        marginBottom: 16,
                        textShadow: '0 4px 20px rgba(0,0,0,0.8)'
                    }}
                >
                    {cfg.line1}
                </h1>
                <p
                    ref={subtitleRef}
                    style={{
                        fontFamily: 'ChaletComprime1960, sans-serif',
                        fontSize: '1.4rem',
                        letterSpacing: '0.4em',
                        textTransform: 'uppercase',
                        color: cfg.isPassed ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.7)',
                        opacity: 0
                    }}
                >
                    {cfg.line2}
                </p>
            </div>
        </div>
    )
}
