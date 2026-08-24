'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { BasePhaseProps } from '@/lib/types'

const IMAGES = ['/images/loading_1.jpeg', '/images/loading_2.jpeg', '/images/loading_3.jpeg']

const TIPS = [
    'OM PANDEY // FULL STACK & AI ENGINEER',
    'SPECIAL ABILITY: FAST-PACED LEARNING, PROGRAMMING & PROBLEM SOLVING',
    'HIGH CONCURRENCY ARCHITECTURES BUILT FOR PERFORMANCE & PRECISION',
    'EXPLORE THE RADAR MAP & CHARACTER DOSSIER IN THE MAIN DASHBOARD',
    'EXPERTISE IN SUPABASE, POSTGRES, NEXT.JS, C++, JAVA & MCP INTEGRATIONS',
]

export default function LoadingFlow({ onComplete, sounds }: BasePhaseProps) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const imgs = useRef<(HTMLImageElement | null)[]>([])
    const barRef = useRef<HTMLDivElement | null>(null)
    const spinnerRef = useRef<SVGSVGElement | null>(null)
    const [tipIdx, setTipIdx] = useState<number>(0)
    const [progressPct, setProgressPct] = useState<number>(0)

    useEffect(() => {
        try {
            if (sounds?.ambience) {
                if (!sounds.ambience.playing()) {
                    sounds.ambience.volume(0.4)
                    sounds.ambience.loop(true)
                    sounds.ambience.play()
                }
            }
        } catch (e) {
            console.warn('Audio ambience notice:', e)
        }

        // GTA Spinner rotation
        if (spinnerRef.current) {
            gsap.to(spinnerRef.current, {
                rotation: 360,
                duration: 1.6,
                repeat: -1,
                ease: 'linear',
            })
        }

        // Initial image fade in
        if (imgs.current[0]) {
            gsap.fromTo(
                imgs.current[0],
                { opacity: 0, scale: 1.05 },
                { opacity: 1, scale: 1.0, duration: 1.2, ease: 'power2.out' }
            )
        }

        // Image cycling with smooth Ken Burns zoom
        let current = 0
        const cycleImages = () => {
            const next = (current + 1) % IMAGES.length
            if (imgs.current[current]) {
                gsap.to(imgs.current[current], {
                    opacity: 0,
                    scale: 1.05,
                    duration: 1.2,
                    ease: 'power2.inOut',
                })
            }
            if (imgs.current[next]) {
                gsap.fromTo(
                    imgs.current[next],
                    { opacity: 0, scale: 1.08 },
                    {
                        opacity: 1,
                        scale: 1.0,
                        duration: 1.4,
                        ease: 'power2.out',
                    }
                )
            }
            current = next
        }
        const imgInterval = setInterval(cycleImages, 4800)

        // Tip rotation
        const tipInterval = setInterval(() => {
            setTipIdx((p) => (p + 1) % TIPS.length)
        }, 3800)

        // Smooth GTA Loading Bar
        const barTl = gsap.timeline({
            onComplete: () => {
                clearInterval(imgInterval)
                clearInterval(tipInterval)
                setTimeout(onComplete, 600)
            },
        })

        if (barRef.current) {
            barTl.to(barRef.current, {
                width: '35%',
                duration: 1.8,
                ease: 'power2.out',
                onUpdate: function () {
                    setProgressPct(Math.round(this.progress() * 35))
                },
            })
            barTl.to({}, { duration: 0.4 })
            barTl.to(barRef.current, {
                width: '68%',
                duration: 2.2,
                ease: 'power1.inOut',
                onUpdate: function () {
                    setProgressPct(35 + Math.round(this.progress() * 33))
                },
            })
            barTl.to({}, { duration: 0.3 })
            barTl.to(barRef.current, {
                width: '92%',
                duration: 2.0,
                ease: 'power1.out',
                onUpdate: function () {
                    setProgressPct(68 + Math.round(this.progress() * 24))
                },
            })
            barTl.to(barRef.current, {
                width: '100%',
                duration: 0.8,
                ease: 'power3.in',
                onUpdate: function () {
                    setProgressPct(92 + Math.round(this.progress() * 8))
                },
            })
        }

        return () => {
            barTl.kill()
            clearInterval(imgInterval)
            clearInterval(tipInterval)
            imgs.current.forEach((img) => {
                if (img) gsap.killTweensOf(img)
            })
            if (barRef.current) gsap.killTweensOf(barRef.current)
            if (spinnerRef.current) gsap.killTweensOf(spinnerRef.current)
        }
    }, [onComplete, sounds])

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                inset: 0,
                background: '#0a0a0c',
                zIndex: 100,
                overflow: 'hidden',
                userSelect: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '24px 32px 64px 32px',
            }}
        >
            <div className="noise-overlay" />
            <div className="crt-scanlines" />

            {/* Top Game Watermark */}
            <div
                style={{
                    position: 'absolute',
                    top: 24,
                    left: 36,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    zIndex: 110,
                }}
            >
                <span
                    style={{
                        display: 'inline-block',
                        width: '4px',
                        height: '18px',
                        background: '#f5a623',
                    }}
                />
                <span
                    style={{
                        fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                        fontSize: '1rem',
                        letterSpacing: '0.2em',
                        color: '#ffffff',
                        textTransform: 'uppercase',
                    }}
                >
                    INITIALIZING SESSION // PORTFOLIO 2.0
                </span>
            </div>

            {/* WIDESCREEN RECTANGULAR ARTWORK FRAME STRETCHED ACROSS PAGE */}
            <div
                style={{
                    position: 'relative',
                    width: 'min(94vw, 1300px)',
                    height: 'min(68vh, 620px)',
                    background: '#000000',
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.95), 0 0 30px rgba(0, 0, 0, 0.8)',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Image Stack with Ken Burns pan/zoom */}
                {IMAGES.map((src, i) => (
                    <img
                        key={src}
                        ref={(el) => {
                            imgs.current[i] = el
                        }}
                        src={src}
                        alt="Loading artwork"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center 25%',
                            opacity: i === 0 ? 1 : 0,
                            filter: 'contrast(1.08) brightness(0.92)',
                            transition: 'opacity 1.2s ease-in-out',
                        }}
                    />
                ))}

                {/* Inner Frame Vignette & Edge Accents */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.65) 100%)',
                        pointerEvents: 'none',
                    }}
                />

                {/* Frame Corner Badges */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 12,
                        right: 16,
                        fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                        fontSize: '0.75rem',
                        letterSpacing: '0.25em',
                        color: 'rgba(255, 255, 255, 0.65)',
                        background: 'rgba(0, 0, 0, 0.65)',
                        padding: '3px 8px',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                >
                    PORTFOLIO 2.0 // HD REEL
                </div>
            </div>

            {/* Bottom Section: Tip Text + Loading Spinner + Progress Bar */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 24,
                    left: 'max(36px, calc((100vw - min(94vw, 1300px)) / 2))',
                    right: 'max(36px, calc((100vw - min(94vw, 1300px)) / 2))',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    zIndex: 120,
                }}
            >
                {/* Tip & Spinner Row */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        gap: '20px',
                    }}
                >
                    <div style={{ maxWidth: '850px' }}>
                        <p
                            key={tipIdx}
                            style={{
                                fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                fontSize: 'clamp(0.9rem, 1.6vw, 1.15rem)',
                                letterSpacing: '0.18em',
                                lineHeight: 1.3,
                                textTransform: 'uppercase',
                                color: '#ffffff',
                                textShadow: '0 2px 8px rgba(0,0,0,0.9)',
                            }}
                        >
                            {TIPS[tipIdx]}
                        </p>
                    </div>

                    {/* Spinner and Percentage */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            flexShrink: 0,
                        }}
                    >
                        <span
                            style={{
                                fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                                fontSize: '1rem',
                                color: '#f5a623',
                                letterSpacing: '0.1em',
                            }}
                        >
                            {progressPct}%
                        </span>
                        <svg
                            ref={spinnerRef}
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="2.5"
                            style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.7))' }}
                        >
                            <circle cx="12" cy="12" r="9" strokeDasharray="28 14" />
                        </svg>
                    </div>
                </div>

                {/* GTA Loading Bar */}
                <div
                    style={{
                        width: '100%',
                        height: '4px',
                        background: 'rgba(255, 255, 255, 0.15)',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <div
                        ref={barRef}
                        style={{
                            height: '100%',
                            width: '0%',
                            background: '#f5a623',
                            boxShadow: '0 0 12px rgba(245, 166, 35, 0.9)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
