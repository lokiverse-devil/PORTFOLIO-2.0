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
                { opacity: 0, scale: 0.97, y: 10 },
                { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: 'power3.out' }
            )
        }

        const proceed = () => {
            if (triggered) return
            triggered = true

            try {
                if (sounds?.ambience) {
                    sounds.ambience.loop(true)
                    sounds.ambience.volume(0.35)
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
                                duration: 0.25,
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
                background: '#000000',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100,
                cursor: 'pointer',
                userSelect: 'none',
                padding: '24px',
            }}
        >
            <div className="heavy-vignette" />

            {/* Pure Monochrome Luxury Card with Intense Shadow Effect */}
            <div
                ref={cardRef}
                style={{
                    maxWidth: 720,
                    width: '92%',
                    textAlign: 'center',
                    padding: '48px 40px',
                    zIndex: 110,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '26px',
                    background: 'rgba(8, 8, 10, 0.95)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    boxShadow:
                        '0 35px 100px rgba(0, 0, 0, 0.98), 0 0 1px rgba(255, 255, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                }}
            >
                <div
                    style={{
                        fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                        fontSize: '0.85rem',
                        letterSpacing: '0.35em',
                        color: 'rgba(255, 255, 255, 0.5)',
                        textTransform: 'uppercase',
                    }}
                >
                    FAIR WARNING
                </div>

                <p
                    style={{
                        fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        letterSpacing: '0.22em',
                        lineHeight: 1.7,
                        color: '#ffffff',
                        textTransform: 'uppercase',
                        margin: 0,
                    }}
                >
                    THIS INTERACTIVE EXPERIENCE SHOWCASES ME, MY REAL PROJECTS,
                    <br />
                    ENGINEERING SKILLS & TECHNOLOGIES.
                </p>

                <div
                    style={{
                        width: '36px',
                        height: '1px',
                        background: 'rgba(255, 255, 255, 0.25)',
                    }}
                />

                <div className="smooth-pulse">
                    <span
                        style={{
                            fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            fontSize: 'clamp(1.1rem, 2.4vw, 1.4rem)',
                            letterSpacing: '0.24em',
                            textTransform: 'uppercase',
                            color: '#000000',
                            background: '#ffffff',
                            padding: '10px 28px',
                            display: 'inline-block',
                            boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)',
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
