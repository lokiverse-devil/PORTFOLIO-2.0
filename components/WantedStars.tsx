'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Howler } from 'howler'
import { BasePhaseProps } from '@/lib/types'

interface StarIconProps {
    className?: string
    style?: React.CSSProperties
    flashing?: boolean
}

function StarIcon({ className, style, flashing = false }: StarIconProps) {
    return (
        <svg
            className={`${className || ''} wanted-star-svg ${flashing ? 'gta-wanted-flash' : ''}`}
            style={style}
            viewBox="0 0 72 72"
            width="56"
            height="56"
        >
            <polygon
                points="36,4 44,28 70,28 49,44 57,68 36,52 15,68 23,44 2,28 28,28"
                fill="#ffffff"
                stroke="#ffffff"
                strokeWidth="2.5"
                style={{
                    filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.7))',
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

    // starCount starts at 0 (no stars during 0.0s - 8.0s police buildup)
    const [starCount, setStarCount] = useState<number>(0)
    const [isMaxWanted, setIsMaxWanted] = useState<boolean>(false)

    useEffect(() => {
        const siren = sounds?.siren

        // Start siren_loop.mp3 (17 seconds total)
        const startAudio = async () => {
            try {
                if (Howler && Howler.ctx && Howler.ctx.state !== 'running') {
                    await Howler.ctx.resume()
                }
                if (siren) {
                    siren.stop()
                    siren.volume(0.55)
                    siren.play()
                }
            } catch (err) {
                console.log('Audio notice:', err)
            }
        }
        startAudio()

        // Sweeping helicopter spotlight
        if (sweepRef.current) {
            gsap.to(sweepRef.current, {
                x: '120%',
                duration: 2.2,
                repeat: -1,
                ease: 'power1.inOut',
                yoyo: true,
            })
        }

        // Alternating Police Strobes
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

        // Master Timeline synced with siren_loop.mp3 (17s total duration)
        // 0.0s - 8.0s: Pure Police Chase buildup
        // 8.0s - 17.0s: Star audio in siren_loop.mp3 (Stars appear 1+1+1+1+1 = 5)
        const masterTl = gsap.timeline({
            onComplete: () => {
                onComplete()
            },
        })

        // Star 1 appears at 8.0s
        masterTl.to(
            {},
            {
                duration: 0.1,
                onStart: () => {
                    setStarCount(1)
                },
            },
            8.0
        )

        // Star 2 appears at 9.8s
        masterTl.to(
            {},
            {
                duration: 0.1,
                onStart: () => {
                    setStarCount(2)
                },
            },
            9.8
        )

        // Star 3 appears at 11.6s
        masterTl.to(
            {},
            {
                duration: 0.1,
                onStart: () => {
                    setStarCount(3)
                },
            },
            11.6
        )

        // Star 4 appears at 13.4s
        masterTl.to(
            {},
            {
                duration: 0.1,
                onStart: () => {
                    setStarCount(4)
                },
            },
            13.4
        )

        // Star 5 appears at 15.2s (Max Wanted!)
        masterTl.to(
            {},
            {
                duration: 0.1,
                onStart: () => {
                    setStarCount(5)
                    setIsMaxWanted(true)

                    if (flashRef.current) {
                        gsap.fromTo(
                            flashRef.current,
                            { opacity: 0, scale: 0.5 },
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
                                duration: 0.04,
                                repeat: 10,
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
            15.2
        )

        // Hold until 17.0s (end of siren_loop.mp3)
        masterTl.to({}, { duration: 1.8 }, 15.2)

        // Key handler to skip
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space' || e.code === 'Enter') {
                onComplete()
            }
        }
        window.addEventListener('keydown', handleKeyDown)

        return () => {
            masterTl.kill()
            strobeTl.kill()
            window.removeEventListener('keydown', handleKeyDown)
            if (sweepRef.current) gsap.killTweensOf(sweepRef.current)
            if (containerRef.current) gsap.killTweensOf(containerRef.current)
            if (flashRef.current) gsap.killTweensOf(flashRef.current)
        }
    }, [onComplete, sounds])

    return (
        <div
            ref={containerRef}
            onClick={onComplete}
            style={{
                position: 'fixed',
                inset: 0,
                background: '#000000',
                zIndex: 95,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                userSelect: 'none',
                cursor: 'pointer',
            }}
        >
            {/* Red Police Strobe */}
            <div
                ref={redRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(ellipse at 15% 50%, rgba(255, 0, 0, 0.7) 0%, rgba(200, 0, 0, 0.25) 45%, transparent 70%)',
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
                        'radial-gradient(ellipse at 85% 50%, rgba(0, 102, 255, 0.7) 0%, rgba(0, 70, 220, 0.25) 45%, transparent 70%)',
                    opacity: 0,
                    mixBlendMode: 'screen',
                }}
            />

            {/* Helicopter Searchlight Beam */}
            <div
                ref={sweepRef}
                style={{
                    position: 'absolute',
                    top: '-20%',
                    left: '-30%',
                    width: '60%',
                    height: '140%',
                    background:
                        'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.15) 0%, transparent 60%)',
                    transform: 'rotate(-25deg)',
                    pointerEvents: 'none',
                    mixBlendMode: 'screen',
                }}
            />

            <div className="heavy-vignette" />

            {/* Screen Flash on Max Wanted */}
            <div
                ref={flashRef}
                style={{
                    position: 'absolute',
                    width: '320px',
                    height: '320px',
                    background: 'radial-gradient(circle, #ffffff 0%, rgba(255, 255, 255, 0.85) 30%, transparent 70%)',
                    opacity: 0,
                    filter: 'blur(20px)',
                    pointerEvents: 'none',
                    zIndex: 115,
                }}
            />

            {/* STARS APPEAR SEQUENTIALLY: 1+1+1+1+1=5 (Clean, pure visual without any text clutter) */}
            {starCount > 0 && (
                <div
                    ref={starsContainerRef}
                    style={{
                        display: 'flex',
                        gap: '22px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 110,
                        padding: '20px',
                    }}
                >
                    {Array.from({ length: starCount }).map((_, i) => (
                        <div
                            key={i}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                animation: 'starPop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            }}
                        >
                            <StarIcon flashing={isMaxWanted} />
                        </div>
                    ))}
                </div>
            )}

            <style jsx>{`
                @keyframes starPop {
                    0% {
                        transform: scale(0.3);
                        opacity: 0;
                    }
                    70% {
                        transform: scale(1.3);
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    )
}
