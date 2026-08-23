'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Howler } from 'howler'
import { BasePhaseProps } from '@/lib/types'

interface StarIconProps {
    className?: string
    style?: React.CSSProperties
    filled?: boolean
    flashing?: boolean
}

function StarIcon({ className, style, filled = false, flashing = false }: StarIconProps) {
    return (
        <svg
            className={`${className || ''} wanted-star-svg ${flashing && filled ? 'gta-wanted-flash' : ''}`}
            style={style}
            viewBox="0 0 72 72"
        >
            <polygon
                points="36,4 44,28 70,28 49,44 57,68 36,52 15,68 23,44 2,28 28,28"
                fill={filled ? '#ffffff' : 'rgba(255, 255, 255, 0.08)'}
                stroke={filled ? '#ffffff' : 'rgba(255, 255, 255, 0.45)'}
                strokeWidth="2.5"
                style={{
                    filter: filled
                        ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.6))'
                        : 'none',
                }}
            />
        </svg>
    )
}

export default function WantedStars({ onComplete, sounds }: BasePhaseProps) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const redRef = useRef<HTMLDivElement | null>(null)
    const blueRef = useRef<HTMLDivElement | null>(null)
    const sweepRef = useRef<HTMLDivElement | null>(null)
    const starsContainerRef = useRef<HTMLDivElement | null>(null)
    const flashRef = useRef<HTMLDivElement | null>(null)

    const [showStars, setShowStars] = useState<boolean>(false)
    const [filledCount, setFilledCount] = useState<number>(0)
    const [isMaxWanted, setIsMaxWanted] = useState<boolean>(false)

    useEffect(() => {
        const siren = sounds?.siren

        // Start 17-second siren_loop.mp3 cleanly
        const startAudio = async () => {
            try {
                if (Howler && Howler.ctx && Howler.ctx.state !== 'running') {
                    await Howler.ctx.resume()
                }
                if (siren) {
                    siren.stop()
                    siren.volume(0.5)
                    siren.play()
                }
            } catch (err) {
                console.log('Audio notice:', err)
            }
        }
        startAudio()

        // Sweeping spotlight
        if (sweepRef.current) {
            gsap.to(sweepRef.current, {
                x: '100%',
                duration: 2.4,
                repeat: -1,
                ease: 'power1.inOut',
                yoyo: true,
            })
        }

        // Alternating Police Strobes (0s to 17s)
        const strobeTl = gsap.timeline({ repeat: -1 })
        if (redRef.current) {
            strobeTl
                .to(redRef.current, { opacity: 0.85, duration: 0.06 })
                .to(redRef.current, { opacity: 0.1, duration: 0.05 })
                .to(redRef.current, { opacity: 0.95, duration: 0.08 })
                .to(redRef.current, { opacity: 0, duration: 0.12 })
        }
        if (blueRef.current) {
            strobeTl
                .to(blueRef.current, { opacity: 0.85, duration: 0.06 }, '-=0.08')
                .to(blueRef.current, { opacity: 0.1, duration: 0.05 })
                .to(blueRef.current, { opacity: 0.95, duration: 0.08 })
                .to(blueRef.current, { opacity: 0, duration: 0.14 })
        }

        // Master Timeline synced with the 17-second audio track
        const masterTl = gsap.timeline({
            onComplete: () => {
                onComplete()
            },
        })

        // --- 0.0s to 8.0s: Chase Energy buildup ---
        // At 8.0s: Stars reveal on screen
        masterTl.to(
            {},
            {
                duration: 0.1,
                onStart: () => {
                    setShowStars(true)
                    setFilledCount(1)
                    if (starsContainerRef.current) {
                        gsap.fromTo(
                            starsContainerRef.current,
                            { opacity: 0, scale: 0.85 },
                            { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
                        )
                    }
                },
            },
            8.0
        )

        // At 9.6s: Star 2
        masterTl.to(
            {},
            {
                duration: 0.1,
                onStart: () => {
                    setFilledCount(2)
                },
            },
            9.6
        )

        // At 11.2s: Star 3
        masterTl.to(
            {},
            {
                duration: 0.1,
                onStart: () => {
                    setFilledCount(3)
                },
            },
            11.2
        )

        // At 12.8s: Star 4
        masterTl.to(
            {},
            {
                duration: 0.1,
                onStart: () => {
                    setFilledCount(4)
                },
            },
            12.8
        )

        // At 14.4s: Star 5 (Full 5 Stars Climax + Flash + Screen rumble)
        masterTl.to(
            {},
            {
                duration: 0.1,
                onStart: () => {
                    setFilledCount(5)
                    setIsMaxWanted(true)

                    if (flashRef.current) {
                        gsap.fromTo(
                            flashRef.current,
                            { opacity: 0, scale: 0.6 },
                            {
                                opacity: 1,
                                scale: 5,
                                duration: 0.25,
                                ease: 'power2.out',
                                yoyo: true,
                                repeat: 1,
                            }
                        )
                    }

                    if (containerRef.current) {
                        gsap.fromTo(
                            containerRef.current,
                            { x: -10, y: -6 },
                            {
                                x: 10,
                                y: 6,
                                duration: 0.05,
                                repeat: 6,
                                yoyo: true,
                                ease: 'power2.inOut',
                                onComplete: () => {
                                    if (containerRef.current) {
                                        gsap.set(containerRef.current, { x: 0, y: 0 })
                                    }
                                },
                            }
                        )
                    }
                },
            },
            14.4
        )

        // Total duration: 17.0s (matches user's siren_loop.mp3)
        masterTl.to({}, { duration: 2.6 }, 14.4)

        return () => {
            masterTl.kill()
            strobeTl.kill()
            if (sweepRef.current) gsap.killTweensOf(sweepRef.current)
            if (containerRef.current) gsap.killTweensOf(containerRef.current)
            if (starsContainerRef.current) gsap.killTweensOf(starsContainerRef.current)
            if (flashRef.current) gsap.killTweensOf(flashRef.current)
        }
    }, [onComplete, sounds])

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                inset: 0,
                background: '#000',
                zIndex: 95,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                userSelect: 'none',
            }}
        >
            <div className="noise-overlay" />
            <div className="crt-scanlines" />

            {/* Red Police Strobe */}
            <div
                ref={redRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(ellipse at 15% 50%, rgba(255,0,0,0.65) 0%, rgba(200,0,0,0.2) 45%, transparent 70%)',
                    opacity: 0,
                    mixBlendMode: 'screen',
                }}
            />

            {/* Blue Police Strobe */}
            <div
                ref={blueRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(ellipse at 85% 50%, rgba(0,100,255,0.65) 0%, rgba(0,70,220,0.2) 45%, transparent 70%)',
                    opacity: 0,
                    mixBlendMode: 'screen',
                }}
            />

            {/* Searchlight Beam */}
            <div
                ref={sweepRef}
                style={{
                    position: 'absolute',
                    top: '-20%',
                    left: '-30%',
                    width: '60%',
                    height: '140%',
                    background:
                        'radial-gradient(ellipse at center, rgba(255,255,255,0.12) 0%, transparent 60%)',
                    transform: 'rotate(-25deg)',
                    pointerEvents: 'none',
                    mixBlendMode: 'screen',
                }}
            />

            <div className="heavy-vignette" />

            <div
                ref={flashRef}
                style={{
                    position: 'absolute',
                    width: '320px',
                    height: '320px',
                    background: 'radial-gradient(circle, #ffffff 0%, rgba(255,255,255,0.85) 30%, transparent 70%)',
                    opacity: 0,
                    filter: 'blur(20px)',
                    pointerEvents: 'none',
                    zIndex: 115,
                }}
            />

            {/* Center Actual Wanted Stars - synced from 8.0s to 17.0s */}
            {showStars && (
                <div
                    ref={starsContainerRef}
                    style={{
                        display: 'flex',
                        gap: '24px',
                        alignItems: 'center',
                        zIndex: 110,
                    }}
                >
                    {[0, 1, 2, 3, 4].map((i) => {
                        const isFilled = i < filledCount
                        return (
                            <StarIcon
                                key={i}
                                filled={isFilled}
                                flashing={isMaxWanted}
                                style={{
                                    transition: 'transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1)',
                                    transform: isFilled ? 'scale(1.18)' : 'scale(1)',
                                }}
                            />
                        )
                    })}
                </div>
            )}
        </div>
    )
}
