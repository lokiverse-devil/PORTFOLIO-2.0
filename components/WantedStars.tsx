'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Howler } from 'howler'
import { BasePhaseProps } from '@/lib/types'

function CleanWhiteStar() {
    return (
        <svg
            width="46"
            height="46"
            viewBox="0 0 72 72"
            style={{
                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 16px rgba(255, 255, 255, 0.6))',
            }}
        >
            <polygon
                points="36,4 44,28 70,28 49,44 57,68 36,52 15,68 23,44 2,28 28,28"
                fill="#ffffff"
                stroke="#ffffff"
                strokeWidth="1.5"
            />
        </svg>
    )
}

export default function WantedStars({ onComplete, sounds }: BasePhaseProps) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const redStrobeRef = useRef<HTMLDivElement | null>(null)
    const blueStrobeRef = useRef<HTMLDivElement | null>(null)
    const searchlightRef = useRef<HTMLDivElement | null>(null)
    const starsGroupRef = useRef<HTMLDivElement | null>(null)

    const [starCount, setStarCount] = useState<number>(0)
    const completedRef = useRef<boolean>(false)

    const triggerComplete = () => {
        if (completedRef.current) return
        completedRef.current = true
        onComplete()
    }

    useEffect(() => {
        // Start siren_loop.mp3
        const startAudio = async () => {
            try {
                if (Howler && Howler.ctx && Howler.ctx.state !== 'running') {
                    await Howler.ctx.resume()
                }
                const siren = sounds?.siren
                if (siren) {
                    siren.stop()
                    siren.volume(0.5)
                    siren.play()
                }
            } catch (err) {
                console.warn('Audio notice:', err)
            }
        }
        startAudio()

        // Helicopter searchlight beam
        if (searchlightRef.current) {
            gsap.to(searchlightRef.current, {
                x: '130%',
                duration: 2.4,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
            })
        }

        // Alternating red/blue police strobes
        const strobeTl = gsap.timeline({ repeat: -1 })
        if (redStrobeRef.current) {
            strobeTl
                .to(redStrobeRef.current, { opacity: 0.65, duration: 0.06 })
                .to(redStrobeRef.current, { opacity: 0.08, duration: 0.05 })
                .to(redStrobeRef.current, { opacity: 0.75, duration: 0.08 })
                .to(redStrobeRef.current, { opacity: 0, duration: 0.14 })
        }
        if (blueStrobeRef.current) {
            strobeTl
                .to(blueStrobeRef.current, { opacity: 0.65, duration: 0.06 }, '-=0.08')
                .to(blueStrobeRef.current, { opacity: 0.08, duration: 0.05 })
                .to(blueStrobeRef.current, { opacity: 0.75, duration: 0.08 })
                .to(blueStrobeRef.current, { opacity: 0, duration: 0.15 })
        }

        // Master Timeline synced with siren_loop.mp3
        // 0.0s - 8.0s: Pure police chase lights buildup
        // 8.0s - 13.0s: Stars appear sequentially (1 per ~1s)
        // 13.5s - 15.2s: Stars slowly disappear
        const masterTl = gsap.timeline({
            onComplete: triggerComplete,
        })

        // Star 1 appears at 8.0s
        masterTl.to(
            {},
            {
                duration: 0.01,
                onStart: () => setStarCount(1),
            },
            8.0
        )

        // Star 2 appears at 9.2s
        masterTl.to(
            {},
            {
                duration: 0.01,
                onStart: () => setStarCount(2),
            },
            9.2
        )

        // Star 3 appears at 10.4s
        masterTl.to(
            {},
            {
                duration: 0.01,
                onStart: () => setStarCount(3),
            },
            10.4
        )

        // Star 4 appears at 11.6s
        masterTl.to(
            {},
            {
                duration: 0.01,
                onStart: () => setStarCount(4),
            },
            11.6
        )

        // Star 5 appears at 12.8s
        masterTl.to(
            {},
            {
                duration: 0.01,
                onStart: () => setStarCount(5),
            },
            12.8
        )

        // Slowly disappear the stars between 13.6s and 15.2s
        masterTl.to(
            {},
            {
                duration: 0.01,
                onStart: () => {
                    if (starsGroupRef.current) {
                        gsap.to(starsGroupRef.current, {
                            opacity: 0,
                            scale: 0.95,
                            duration: 1.5,
                            ease: 'power2.inOut',
                        })
                    }
                },
            },
            13.6
        )

        // Complete sequence at 15.3s
        masterTl.to({}, { duration: 1.7 }, 13.6)

        return () => {
            masterTl.kill()
            strobeTl.kill()
            if (searchlightRef.current) gsap.killTweensOf(searchlightRef.current)
            if (starsGroupRef.current) gsap.killTweensOf(starsGroupRef.current)
        }
    }, [sounds])

    return (
        <div
            ref={containerRef}
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
                cursor: 'default',
            }}
        >
            {/* Red Police Strobe */}
            <div
                ref={redStrobeRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(ellipse at 12% 50%, rgba(255, 0, 0, 0.6) 0%, rgba(180, 0, 0, 0.2) 45%, transparent 70%)',
                    opacity: 0,
                    mixBlendMode: 'screen',
                }}
            />

            {/* Blue Police Strobe */}
            <div
                ref={blueStrobeRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(ellipse at 88% 50%, rgba(0, 90, 255, 0.6) 0%, rgba(0, 60, 190, 0.2) 45%, transparent 70%)',
                    opacity: 0,
                    mixBlendMode: 'screen',
                }}
            />

            {/* Helicopter Searchlight Sweep */}
            <div
                ref={searchlightRef}
                style={{
                    position: 'absolute',
                    top: '-20%',
                    left: '-30%',
                    width: '60%',
                    height: '140%',
                    background:
                        'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.12) 0%, transparent 60%)',
                    transform: 'rotate(-25deg)',
                    pointerEvents: 'none',
                    mixBlendMode: 'screen',
                }}
            />

            <div className="heavy-vignette" />

            {/* Subtle, Pure White Wanted Stars (Sequentially 8s to 13s, then slowly fading) */}
            {starCount > 0 && (
                <div
                    ref={starsGroupRef}
                    style={{
                        display: 'flex',
                        gap: '20px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 110,
                        padding: '16px',
                    }}
                >
                    {Array.from({ length: starCount }).map((_, i) => (
                        <div
                            key={i}
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                animation: 'starPopIn 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                            }}
                        >
                            <CleanWhiteStar />
                        </div>
                    ))}
                </div>
            )}

            <style jsx>{`
                @keyframes starPopIn {
                    0% {
                        transform: scale(0.3);
                        opacity: 0;
                    }
                    70% {
                        transform: scale(1.25);
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
