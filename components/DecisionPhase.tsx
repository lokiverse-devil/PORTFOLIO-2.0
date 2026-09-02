'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { DecisionPhaseProps, ResultType } from '@/lib/types'

export default function DecisionPhase({ question = 1, onResult, sounds }: DecisionPhaseProps) {
    const qRef = useRef<HTMLDivElement | null>(null)
    const buttonsRef = useRef<(HTMLButtonElement | null)[]>([])

    useEffect(() => {
        try {
            if (sounds?.ambience) {
                sounds.ambience.fade(0.35, 0, 600)
                setTimeout(() => {
                    try {
                        sounds.ambience?.stop()
                    } catch (_) {}
                }, 650)
            }
        } catch (e) {
            console.warn('Audio notice in decision phase:', e)
        }

        if (qRef.current) {
            gsap.fromTo(
                qRef.current,
                { scale: 0.96, opacity: 0, y: 12 },
                { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
            )
        }

        return () => {
            if (qRef.current) gsap.killTweensOf(qRef.current)
            buttonsRef.current.forEach((btn) => {
                if (btn) gsap.killTweensOf(btn)
            })
        }
    }, [sounds])

    const handleAnswer = (answer: 'yes' | 'no', e: React.MouseEvent<HTMLButtonElement>) => {
        const btn = e.currentTarget

        gsap.to(btn, {
            backgroundColor: '#ffffff',
            color: '#000000',
            scale: 1.05,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: 'power2.out',
            onComplete: () => {
                try {
                    if (typeof window !== 'undefined' && window.localStorage) {
                        if (question === 1) {
                            localStorage.setItem('programmerAnswer', answer)
                        } else {
                            localStorage.setItem('profileInterest', answer)
                        }
                    }
                } catch (err) {
                    console.warn('LocalStorage notice:', err)
                }

                if (question === 1) {
                    const res: ResultType = answer === 'yes' ? 'passed-access' : 'failed-denied'
                    onResult(res)
                } else {
                    const res: ResultType = answer === 'yes' ? 'passed-portfolio' : 'failed-redirect'
                    onResult(res)
                }
            },
        })
    }

    const isQ1 = question === 1

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                background: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100,
                userSelect: 'none',
                padding: '24px',
            }}
        >
            <div className="heavy-vignette" />

            {/* Subtle Luxury Monochrome Card with Intense Shadow Effect (No Yellow Box) */}
            <div
                ref={qRef}
                style={{
                    background: 'rgba(8, 8, 10, 0.95)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    padding: '48px 56px',
                    textAlign: 'center',
                    maxWidth: '640px',
                    width: '92%',
                    boxShadow:
                        '0 40px 120px rgba(0, 0, 0, 0.98), 0 0 1px rgba(255, 255, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    zIndex: 110,
                }}
            >
                <p
                    style={{
                        fontFamily: 'Pricedown,ChaletComprime1960, "Barlow Condensed", sans-serif',
                        fontSize: '1rem',
                        letterSpacing: '0.35em',
                        color: 'rgba(236, 87, 87, 0.7)',
                        textTransform: 'uppercase',
                        marginBottom: '18px',
                    }}
                >
                    QUESTION 0{question} // 02
                </p>

                <h2
                    style={{
                        fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                        fontSize: 'clamp(2rem, 4.8vw, 3rem)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: '#ffffff',
                        marginBottom: '44px',
                        lineHeight: 1.08,
                        textShadow: '0 4px 20px rgba(0, 0, 0, 0.9)',
                    }}
                >
                    {isQ1 ? (
                        <>
                            ARE YOU A<br />
                            PROGRAMMER?
                        </>
                    ) : (
                        <>
                            ARE YOU INTERESTED<br />
                            IN MY PROFILE?
                        </>
                    )}
                </h2>

                <div style={{ display: 'flex', gap: '32px', justifyContent: 'center' }}>
                    <button
                        ref={(el) => {
                            buttonsRef.current[0] = el
                        }}
                        className="decision-btn"
                        onClick={(e) => handleAnswer('yes', e)}
                        style={{
                            fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 255, 255, 0.28)',
                            color: '#ffffff',
                            fontSize: 'clamp(1.3rem, 2.6vw, 1.65rem)',
                            letterSpacing: '0.15em',
                            cursor: 'pointer',
                            padding: '10px 38px',
                            outline: 'none',
                            transition: 'all 0.18s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#ffffff'
                            e.currentTarget.style.color = '#000000'
                            e.currentTarget.style.borderColor = '#ffffff'
                            e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.4)'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'
                            e.currentTarget.style.color = '#ffffff'
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.28)'
                            e.currentTarget.style.boxShadow = 'none'
                        }}
                    >
                        [ YES ]
                    </button>
                    <button
                        ref={(el) => {
                            buttonsRef.current[1] = el
                        }}
                        className="decision-btn"
                        onClick={(e) => handleAnswer('no', e)}
                        style={{
                            fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            background: 'rgba(255, 255, 255, 0.06)',
                            border: '1px solid rgba(255, 255, 255, 0.28)',
                            color: '#ffffff',
                            fontSize: 'clamp(1.3rem, 2.6vw, 1.65rem)',
                            letterSpacing: '0.15em',
                            cursor: 'pointer',
                            padding: '10px 38px',
                            outline: 'none',
                            transition: 'all 0.18s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#ffffff'
                            e.currentTarget.style.color = '#000000'
                            e.currentTarget.style.borderColor = '#ffffff'
                            e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 255, 255, 0.4)'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'
                            e.currentTarget.style.color = '#ffffff'
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.28)'
                            e.currentTarget.style.boxShadow = 'none'
                        }}
                    >
                        [ NO ]
                    </button>
                </div>
            </div>
        </div>
    )
}
