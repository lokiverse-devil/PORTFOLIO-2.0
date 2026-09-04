'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { DecisionPhaseProps, ResultType } from '@/lib/types'

export default function DecisionPhase({ question = 1, lives = 2, onResult, sounds }: DecisionPhaseProps) {
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
    }, [sounds, question])

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
                        } else if (question === 2) {
                            localStorage.setItem('profileInterest', answer)
                        } else if (question === 3) {
                            localStorage.setItem('robotAnswer', answer)
                        } else if (question === 4) {
                            localStorage.setItem('portfolioVisitAnswer', answer)
                        }
                    }
                } catch (err) {
                    console.warn('LocalStorage notice:', err)
                }

                if (question === 1) {
                    const res: ResultType = answer === 'yes' ? 'passed-access' : 'failed-denied'
                    onResult(res)
                } else if (question === 2) {
                    // If both answered NO, deduct 1 life and initiate secondary protocol
                    const res: ResultType = answer === 'yes' ? 'passed-portfolio' : 'failed-life-lost'
                    onResult(res)
                } else if (question === 3) {
                    // Q3: "are you a robot"
                    // If YES -> access denied (failed-robot -> proceeds to Q4)
                    // If NO -> mission passed (passed-robot -> landing)
                    const res: ResultType = answer === 'no' ? 'passed-robot' : 'failed-robot'
                    onResult(res)
                } else if (question === 4) {
                    // Q4: "You really dont want to visit the portfolio...."
                    // If NO -> mission passed gained life (+1 life -> landing)
                    // If YES -> failed you are getting debared -> countdown redirect to Nyan Cat
                    const res: ResultType = answer === 'no' ? 'passed-gained-life' : 'failed-debarred'
                    onResult(res)
                }
            },
        })
    }

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

            {/* Subtle Luxury Monochrome Card with Dynamic Border and Intense Shadow Effect */}
            <div
                ref={qRef}
                style={{
                    background: 'rgba(8, 8, 10, 0.96)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border:
                        lives === 1
                            ? '1px solid rgba(239, 68, 68, 0.35)'
                            : '1px solid rgba(255, 255, 255, 0.12)',
                    padding: '38px 50px 48px 50px',
                    textAlign: 'center',
                    maxWidth: '680px',
                    width: '92%',
                    boxShadow:
                        lives === 1
                            ? '0 40px 120px rgba(0, 0, 0, 0.98), 0 0 35px rgba(239, 68, 68, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.08)'
                            : '0 40px 120px rgba(0, 0, 0, 0.98), 0 0 1px rgba(255, 255, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    zIndex: 110,
                    transition: 'border 0.3s ease, box-shadow 0.3s ease',
                }}
            >
                {/* Lives & Status HUD */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        paddingBottom: '16px',
                        marginBottom: '26px',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span
                            style={{
                                display: 'inline-block',
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: lives === 1 ? '#ef4444' : '#22c55e',
                                boxShadow: lives === 1 ? '0 0 10px #ef4444' : '0 0 10px #22c55e',
                            }}
                        />
                        <span
                            style={{
                                fontFamily: 'Pricedown, ChaletComprime1960, "Barlow Condensed", sans-serif',
                                fontSize: '0.82rem',
                                letterSpacing: '0.22em',
                                color: 'rgba(255, 255, 255, 0.65)',
                                textTransform: 'uppercase',
                            }}
                        >
                            {question <= 2 ? 'ROUND 01 // INITIAL PROTOCOL' : 'ROUND 02 // SECONDARY VERIFICATION'}
                        </span>
                    </div>

                    {/* Lives Counter HUD */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span
                            style={{
                                fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                                fontSize: '0.78rem',
                                letterSpacing: '0.2em',
                                color: lives === 1 ? '#f87171' : 'rgba(255, 255, 255, 0.6)',
                                textTransform: 'uppercase',
                            }}
                        >
                            {lives === 1 ? 'CRITICAL LIVES:' : 'LIVES:'}
                        </span>
                        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                            {[1, 2].map((i) => {
                                const active = i <= lives
                                return (
                                    <div
                                        key={i}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '4px',
                                            background: active
                                                ? 'rgba(239, 68, 68, 0.22)'
                                                : 'rgba(255, 255, 255, 0.05)',
                                            border: active
                                                ? '1px solid #ef4444'
                                                : '1px solid rgba(255, 255, 255, 0.15)',
                                            boxShadow: active ? '0 0 10px rgba(239, 68, 68, 0.5)' : 'none',
                                            color: active ? '#ef4444' : 'rgba(255, 255, 255, 0.25)',
                                            fontSize: '13px',
                                            lineHeight: 1,
                                            fontWeight: 'bold',
                                            transition: 'all 0.3s ease',
                                        }}
                                    >
                                        {active ? '♥' : '✕'}
                                    </div>
                                )
                            })}
                        </div>
                        <span
                            style={{
                                fontFamily: 'Pricedown, monospace',
                                fontSize: '0.95rem',
                                color: lives === 1 ? '#6e0404ff' : '#ffffff',
                                letterSpacing: '0.05em',
                            }}
                        >
                            [{lives}/2]
                        </span>
                    </div>
                </div>

                <p
                    style={{
                        fontFamily: 'Pricedown, ChaletComprime1960, "Barlow Condensed", sans-serif',
                        fontSize: '0.95rem',
                        letterSpacing: '0.35em',
                        color: lives === 1 ? '#f87171' : 'rgba(200, 200, 200, 0.7)',
                        textTransform: 'uppercase',
                        marginBottom: '16px',
                    }}
                >
                    {question === 1 && 'QUESTION 01 // 02'}
                    {question === 2 && 'QUESTION 02 // 02'}
                    {question === 3 && 'RECOVERY QUESTION 01 // 02'}
                    {question === 4 && 'FINAL QUESTION 02 // 02 — LAST CHANCE'}
                </p>

                <h2
                    style={{
                        fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                        fontSize:
                            question === 4
                                ? 'clamp(1.7rem, 3.8vw, 2.45rem)'
                                : 'clamp(2rem, 4.8vw, 3rem)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: '#ffffff',
                        marginBottom: '42px',
                        lineHeight: 1.1,
                        textShadow: '0 4px 20px rgba(0, 0, 0, 0.9)',
                    }}
                >
                    {question === 1 && (
                        <>
                            ARE YOU A<br />
                            PROGRAMMER?
                        </>
                    )}
                    {question === 2 && (
                        <>
                            ARE YOU INTERESTED<br />
                            IN MY PROFILE?
                        </>
                    )}
                    {question === 3 && (
                        <>
                            ARE YOU A<br />
                            ROBOT?
                        </>
                    )}
                    {question === 4 && (
                        <>
                            YOU REALLY DON&apos;T WANT<br />
                            TO VISIT THE PORTFOLIO?
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

