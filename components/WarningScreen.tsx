'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { BasePhaseProps } from '@/lib/types'

export default function WarningScreen({ onComplete, sounds }: BasePhaseProps) {
    const cardRef = useRef<HTMLDivElement | null>(null)
    const flashRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        let triggered = false

        if (cardRef.current) {
            gsap.fromTo(
                cardRef.current,
                { opacity: 0, scale: 0.98 },
                { opacity: 1, scale: 1, duration: 1.0, ease: 'power3.out' }
            )
        }

        const proceed = () => {
            if (triggered) return
            triggered = true

            try {
                if (sounds?.ambience) {
                    sounds.ambience.loop(true)
                    sounds.ambience.play()
                }
            } catch (e) {
                console.warn('Audio notice:', e)
            }

            if (flashRef.current) {
                gsap.to(flashRef.current, {
                    opacity: 1,
                    duration: 0.1,
                    ease: 'power2.in',
                    onComplete: () => {
                        if (flashRef.current) {
                            gsap.to(flashRef.current, {
                                opacity: 0,
                                duration: 0.22,
                                ease: 'power2.out',
                                onComplete,
                            })
                        } else {
                            onComplete()
                        }
                    },
                })
            } else {
                onComplete()
            }
        }

        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
                proceed()
            }
        }

        const handleClick = () => {
            proceed()
        }

        document.addEventListener('keydown', handleKey)
        document.addEventListener('click', handleClick)

        return () => {
            document.removeEventListener('keydown', handleKey)
            document.removeEventListener('click', handleClick)
            if (cardRef.current) gsap.killTweensOf(cardRef.current)
            if (flashRef.current) gsap.killTweensOf(flashRef.current)
        }
    }, [onComplete, sounds])

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                background: '#000',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100,
                cursor: 'pointer',
                userSelect: 'none',
            }}
        >
            <div className="noise-overlay" />
            <div className="crt-scanlines" />

            <div
                ref={cardRef}
                style={{
                    maxWidth: 760,
                    textAlign: 'center',
                    padding: '40px 30px',
                    zIndex: 110,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '40px',
                }}
            >
                <p
                    style={{
                        fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                        fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
                        letterSpacing: '0.28em',
                        lineHeight: 1.85,
                        color: 'rgba(255, 255, 255, 0.75)',
                        textTransform: 'uppercase',
                    }}
                >
                    THIS IS A FICTIONAL INTERACTIVE DEVELOPER PORTFOLIO
                    <br />
                    INSPIRED BY CINEMATIC OPEN-WORLD DESIGN
                </p>

                <div className="smooth-pulse">
                    <span
                        style={{
                            fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            color: '#ffffff',
                        }}
                    >
                        PRESS ENTER OR CLICK TO CONTINUE
                    </span>
                </div>
            </div>

            <div
                ref={flashRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: '#ffffff',
                    opacity: 0,
                    pointerEvents: 'none',
                    zIndex: 200,
                }}
            />
        </div>
    )
}
