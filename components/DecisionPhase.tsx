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
                sounds.ambience.fade(0.4, 0, 700)
                setTimeout(() => {
                    try {
                        sounds.ambience?.stop()
                    } catch (_) {}
                }, 750)
            }
        } catch (e) {
            console.warn('Audio notice in decision phase:', e)
        }

        if (qRef.current) {
            gsap.fromTo(
                qRef.current,
                { scale: 0.95, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.6, ease: 'power3.out' }
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
                background: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100,
                userSelect: 'none',
            }}
        >
            <div className="noise-overlay" />
            <div className="crt-scanlines" />

            <div
                ref={qRef}
                style={{
                    background: 'rgba(12, 12, 12, 0.9)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '48px 64px',
                    textAlign: 'center',
                    maxWidth: '620px',
                    width: '90%',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.95)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    zIndex: 110,
                }}
            >
                <p
                    style={{
                        fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                        fontSize: '0.85rem',
                        letterSpacing: '0.35em',
                        color: 'rgba(255, 255, 255, 0.5)',
                        textTransform: 'uppercase',
                        marginBottom: '20px',
                    }}
                >
                    QUESTION 0{question} // 02
                </p>

                <h2
                    style={{
                        fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                        fontSize: 'clamp(2.2rem, 5vw, 3rem)',
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        color: '#ffffff',
                        marginBottom: '48px',
                        lineHeight: 1.05,
                        textShadow: '0 4px 15px rgba(0, 0, 0, 0.8)',
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

                <div style={{ display: 'flex', gap: '36px', justifyContent: 'center' }}>
                    <button
                        ref={(el) => {
                            buttonsRef.current[0] = el
                        }}
                        className="decision-btn"
                        onClick={(e) => handleAnswer('yes', e)}
                        style={{
                            fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            background: 'transparent',
                            border: '2px solid rgba(255, 255, 255, 0.3)',
                            color: '#ffffff',
                            fontSize: 'clamp(1.3rem, 2.8vw, 1.7rem)',
                            letterSpacing: '0.15em',
                            cursor: 'pointer',
                            padding: '10px 32px',
                            outline: 'none',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#ffffff'
                            e.currentTarget.style.color = '#000000'
                            e.currentTarget.style.borderColor = '#ffffff'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent'
                            e.currentTarget.style.color = '#ffffff'
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
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
                            background: 'transparent',
                            border: '2px solid rgba(255, 255, 255, 0.3)',
                            color: '#ffffff',
                            fontSize: 'clamp(1.3rem, 2.8vw, 1.7rem)',
                            letterSpacing: '0.15em',
                            cursor: 'pointer',
                            padding: '10px 32px',
                            outline: 'none',
                            transition: 'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#ffffff'
                            e.currentTarget.style.color = '#000000'
                            e.currentTarget.style.borderColor = '#ffffff'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent'
                            e.currentTarget.style.color = '#ffffff'
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
                        }}
                    >
                        [ NO ]
                    </button>
                </div>
            </div>
        </div>
    )
}
