'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function WarningScreen({ onComplete, sounds }) {
    const flashRef = useRef(null)

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Enter') {
                document.removeEventListener('keydown', handleKey)
                if (sounds?.ambience) {
                    sounds.ambience.loop(true)
                    sounds.ambience.play()
                }

                // Fast white flash
                gsap.to(flashRef.current, {
                    opacity: 1,
                    duration: 0.08,
                    onComplete: () => {
                        gsap.to(flashRef.current, {
                            opacity: 0,
                            duration: 0.15,
                            onComplete,
                        })
                    },
                })
            }
        }
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [onComplete, sounds])

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                background: '#000', // Hard cut to black
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 100,
            }}
        >
            <div className="noise-overlay" />
            <div
                style={{
                    maxWidth: 740,
                    textAlign: 'center',
                    padding: '0 40px',
                    zIndex: 110
                }}
            >
                <p
                    style={{
                        fontFamily: 'ChaletComprime1960, sans-serif',
                        fontSize: '0.75rem',
                        letterSpacing: '0.25em',
                        lineHeight: 2,
                        color: 'rgba(255,255,255,0.6)',
                        textTransform: 'uppercase',
                        marginBottom: 60,
                    }}
                >
                    THIS IS A FICTIONAL INTERACTIVE EXPERIENCE
                    <br />
                    INSPIRED BY CINEMATIC OPEN-WORLD DESIGN
                </p>
                <p
                    className="blink"
                    style={{
                        fontFamily: 'ChaletComprime1960, sans-serif',
                        fontSize: '0.85rem',
                        letterSpacing: '0.35em',
                        textTransform: 'uppercase',
                        color: '#fff',
                    }}
                >
                    PRESS ENTER TO CONTINUE
                </p>
            </div>
            <div
                ref={flashRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: '#fff',
                    opacity: 0,
                    pointerEvents: 'none',
                    zIndex: 200,
                }}
            />
        </div>
    )
}
