'use client'
import React, { useState, useEffect } from 'react'
import { Howler } from 'howler'
import gsap from 'gsap'
import { ColdBootProps } from '@/lib/types'

export default function ColdBoot({ onComplete }: ColdBootProps) {
    const [started, setStarted] = useState<boolean>(false)
    const containerRef = React.useRef<HTMLDivElement | null>(null)
    const textRef = React.useRef<HTMLDivElement | null>(null)

    const handleStart = async () => {
        if (started) return
        setStarted(true)

        try {
            if (Howler && Howler.ctx && Howler.ctx.state !== 'running') {
                await Howler.ctx.resume()
            }
        } catch (err) {
            console.log('Audio resume notice:', err)
        }

        if (textRef.current) {
            gsap.to(textRef.current, {
                scale: 1.15,
                opacity: 0,
                filter: 'blur(10px)',
                duration: 0.6,
                ease: 'power2.in',
            })
        }

        // Hold black screen for dramatic pause
        setTimeout(() => {
            onComplete()
        }, 1400)
    }

    useEffect(() => {
        const handleKeyDown = () => {
            handleStart()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [started])

    return (
        <div
            ref={containerRef}
            onClick={!started ? handleStart : undefined}
            style={{
                position: 'fixed',
                inset: 0,
                background: '#000',
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: !started ? 'pointer' : 'default',
                userSelect: 'none',
            }}
        >
            <div className="noise-overlay" />
            <div className="crt-scanlines" />

            {!started && (
                <div
                    ref={textRef}
                    style={{
                        textAlign: 'center',
                        zIndex: 110,
                        padding: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '18px',
                    }}
                >
                    <div
                        style={{
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: 'clamp(0.8rem, 1.8vw, 1rem)',
                            letterSpacing: '0.45em',
                            color: 'rgba(255,255,255,0.4)',
                            textTransform: 'uppercase',
                        }}
                    >
                        LOS SANTOS PROTOCOL // SYSTEM INITIALIZATION
                    </div>

                    <p
                        className="smooth-pulse"
                        style={{
                            fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            fontSize: 'clamp(1.2rem, 3.5vw, 2rem)',
                            letterSpacing: '0.28em',
                            color: '#ffffff',
                            textTransform: 'uppercase',
                            margin: 0,
                        }}
                    >
                        CLICK OR PRESS ANY KEY TO START
                    </p>

                    <div
                        style={{
                            width: '40px',
                            height: '2px',
                            background: 'rgba(255,255,255,0.5)',
                            marginTop: '8px',
                            boxShadow: '0 0 10px rgba(255,255,255,0.8)',
                        }}
                    />
                </div>
            )}
        </div>
    )
}
