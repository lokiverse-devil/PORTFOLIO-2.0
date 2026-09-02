'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { BasePhaseProps } from '@/lib/types'

const IMAGES = ['/images/loading_1.jpeg', '/images/loading_2.jpeg', '/images/loading_3.jpeg']

const TIPS = [
    'THE MAP IS INTRACTIVE: CLICK ON THE LOACTIONS TO VIEW',
    'CHARACTER ABILITES ARE INTERACTABLE',
    'EXPLORE VIBECHAT, HTRACX & SMARTCLASS X IN THE OPERATIONS TAB',
    'USE THE RADAR MAP TO VIEW ACADEMIC MILESTONES & CREDENTIALS',
    'PRESS KEYS 1 TO 5 ON THE DASHBOARD TO SWITCH TABS ANYTIME',
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
                    sounds.ambience.volume(0.35)
                    sounds.ambience.loop(true)
                    sounds.ambience.play()
                }
            }
        } catch (e) {
            console.warn('Audio ambience notice:', e)
        }

        // Small GTA Spinner rotation
        if (spinnerRef.current) {
            gsap.to(spinnerRef.current, {
                rotation: 360,
                duration: 1.2,
                repeat: -1,
                ease: 'linear',
            })
        }

        // Initial image fade in
        if (imgs.current[0]) {
            gsap.fromTo(
                imgs.current[0],
                { opacity: 0, scale: 1.03 },
                { opacity: 1, scale: 1.0, duration: 1.0, ease: 'power2.out' }
            )
        }

        // Image cycling
        let current = 0
        const cycleImages = () => {
            const next = (current + 1) % IMAGES.length
            if (imgs.current[current]) {
                gsap.to(imgs.current[current], {
                    opacity: 0,
                    scale: 1.03,
                    duration: 1.0,
                    ease: 'power2.inOut',
                })
            }
            if (imgs.current[next]) {
                gsap.fromTo(
                    imgs.current[next],
                    { opacity: 0, scale: 1.05 },
                    {
                        opacity: 1,
                        scale: 1.0,
                        duration: 1.1,
                        ease: 'power2.out',
                    }
                )
            }
            current = next
        }
        const imgInterval = setInterval(cycleImages, 3400)

        // Tip rotation
        const tipInterval = setInterval(() => {
            setTipIdx((p) => (p + 1) % TIPS.length)
        }, 2800)

        // Loading Bar Timeline (~5.8s)
        const barTl = gsap.timeline({
            onComplete: () => {
                clearInterval(imgInterval)
                clearInterval(tipInterval)
                setTimeout(onComplete, 400)
            },
        })

        if (barRef.current) {
            barTl.to(barRef.current, {
                width: '45%',
                duration: 1.6,
                ease: 'power2.out',
                onUpdate: function () {
                    setProgressPct(Math.round(this.progress() * 45))
                },
            })
            barTl.to({}, { duration: 0.25 })
            barTl.to(barRef.current, {
                width: '80%',
                duration: 1.8,
                ease: 'power1.inOut',
                onUpdate: function () {
                    setProgressPct(45 + Math.round(this.progress() * 35))
                },
            })
            barTl.to({}, { duration: 0.15 })
            barTl.to(barRef.current, {
                width: '100%',
                duration: 1.2,
                ease: 'power2.inOut',
                onUpdate: function () {
                    setProgressPct(80 + Math.round(this.progress() * 20))
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
                background: '#000000',
                zIndex: 100,
                overflow: 'hidden',
                userSelect: 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '24px 28px 60px 28px',
            }}
        >
            <div className="heavy-vignette" />

            {/* Top Clean Watermark */}
            <div
                style={{
                    position: 'absolute',
                    top: 24,
                    left: 36,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    zIndex: 110,
                }}
            >
                <span
                    style={{
                        display: 'inline-block',
                        width: '3px',
                        height: '14px',
                        background: '#ffffff',
                    }}
                />
                <span
                    style={{
                        fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                        fontSize: '1rem',
                        letterSpacing: '0.22em',
                        color: 'rgba(255, 255, 255, 0.9)',
                        textTransform: 'uppercase',
                    }}
                >
                    INITIALIZING // PORTFOLIO
                </span>
            </div>

            {/* WIDESCREEN RECTANGULAR ARTWORK FRAME STRETCHED ACROSS PAGE */}
            <div
                style={{
                    position: 'relative',
                    width: 'min(96vw, 1400px)',
                    height: 'min(70vh, 640px)',
                    background: '#050507',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.98)',
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
                        alt="Loading visual"
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center 25%',
                            opacity: i === 0 ? 1 : 0,
                            filter: 'contrast(1.08) brightness(0.92)',
                            transition: 'opacity 1.0s ease-in-out',
                        }}
                    />
                ))}

                {/* Inner Frame Vignette */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'radial-gradient(ellipse at center, transparent 45%, rgba(0,0,0,0.65) 100%)',
                        pointerEvents: 'none',
                    }}
                />
            </div>

            {/* Bottom Section: Tip Text + Small Spinner + Thin Progress Bar */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 24,
                    left: 'max(28px, calc((100vw - min(96vw, 1400px)) / 2))',
                    right: 'max(28px, calc((100vw - min(96vw, 1400px)) / 2))',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    zIndex: 120,
                }}
            >
                {/* Tip & Small Spinner Row */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        gap: '16px',
                    }}
                >
                    <div style={{ maxWidth: '900px' }}>
                        <p
                            key={tipIdx}
                            style={{
                                fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                fontSize: 'clamp(0.85rem, 1.5vw, 1.05rem)',
                                letterSpacing: '0.2em',
                                lineHeight: 1.3,
                                textTransform: 'uppercase',
                                color: '#ffffff',
                                textShadow: '0 2px 8px rgba(0,0,0,0.9)',
                            }}
                        >
                            {TIPS[tipIdx]}
                        </p>
                    </div>

                    {/* Small Spinner and Clean Percentage */}
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
                                fontFamily: 'Share Tech Mono, monospace',
                                fontSize: '0.85rem',
                                color: 'rgba(255, 255, 255, 0.85)',
                                letterSpacing: '0.05em',
                            }}
                        >
                            {progressPct}%
                        </span>
                        <svg
                            ref={spinnerRef}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#ffffff"
                            strokeWidth="2.5"
                            style={{ filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.7))' }}
                        >
                            <circle cx="12" cy="12" r="9" strokeDasharray="26 14" />
                        </svg>
                    </div>
                </div>

                {/* Sleek Thin Progress Bar (2px) */}
                <div
                    style={{
                        width: '100%',
                        height: '2px',
                        background: 'rgba(255, 255, 255, 0.12)',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <div
                        ref={barRef}
                        style={{
                            height: '100%',
                            width: '0%',
                            background: '#ffffff',
                            boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
