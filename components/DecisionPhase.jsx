'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function DecisionPhase({ question = 1, onResult, sounds }) {
    const qRef = useRef(null)
    const buttonsRef = useRef([])

    useEffect(() => {
        if (sounds?.ambience) {
            sounds.ambience.stop()
        }

        // Cinematic Reveal for Card
        gsap.fromTo(qRef.current,
            { scale: 1.1, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, ease: 'power2.out' }
        )

        // Breathing Animation for Buttons
        buttonsRef.current.forEach(btn => {
            gsap.to(btn, {
                opacity: 0.6,
                duration: 1,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            })
        })
    }, [])

    const handleAnswer = (answer, e) => {
        // Click Feedback
        const btn = e.currentTarget
        gsap.to(btn, {
            backgroundColor: '#fff',
            color: '#000',
            scale: 1.1,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            onComplete: () => {
                if (question === 1) {
                    localStorage.setItem('programmerAnswer', answer)
                    onResult(answer === 'yes' ? 'passed-access' : 'failed-denied')
                } else {
                    localStorage.setItem('profileInterest', answer)
                    onResult(answer === 'yes' ? 'passed-portfolio' : 'failed-redirect')
                }
            }
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
            }}
        >
            <div className="noise-overlay" />
            <div ref={qRef} className="decision-card">
                <p className="decision-question-sub">
                    QUESTION 0{question} / 02
                </p>
                <h2 className={isQ1 ? "decision-question-title q1-title" : "decision-question-title q2-title"}>
                    {isQ1 ? (
                        <>ARE YOU A<br />PROGRAMMER?</>
                    ) : (
                        <>ARE YOU INTERESTED<br />IN MY PROFILE?</>
                    )}
                </h2>
                <div className="decision-buttons-container">
                    <button
                        ref={el => buttonsRef.current[0] = el}
                        className="decision-btn"
                        onClick={(e) => handleAnswer('yes', e)}
                        onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, opacity: 1, duration: 0.2 })}
                        onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
                    >
                        [ YES ]
                    </button>
                    <button
                        ref={el => buttonsRef.current[1] = el}
                        className="decision-btn"
                        onClick={(e) => handleAnswer('no', e)}
                        onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, opacity: 1, duration: 0.2 })}
                        onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })}
                    >
                        [ NO ]
                    </button>
                </div>
            </div>
        </div>
    )
}
