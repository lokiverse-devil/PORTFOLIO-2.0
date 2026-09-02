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
            console.warn('Audio resume notice:', err)
        }

        if (textRef.current) {
            gsap.to(textRef.current, {
                opacity: 0,
                scale: 1.04,
                filter: 'blur(8px)',
                duration: 0.5,
                ease: 'power2.in',
            })
        }

        setTimeout(() => {
            onComplete()
        }, 500)
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
                background: '#000000',
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: !started ? 'pointer' : 'default',
                userSelect: 'none',
            }}
        >
            <div className="heavy-vignette" />

            {!started && (
                <div
                    ref={textRef}
                    style={{
                        textAlign: 'center',
                        zIndex: 110,
                        padding: '36px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '20px',
                        maxWidth: '680px',
                    }}
                >
                    <div
                        style={{
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: 'clamp(0.85rem, 1.6vw, 1rem)',
                            letterSpacing: '0.4em',
                            color: 'rgba(255, 255, 255, 0.45)',
                            textTransform: 'uppercase',
                        }}
                    >
                        OM PANDEY'S
                    </div>

                    <h1
                        style={{
                            fontFamily: 'Pricedown, ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
                            letterSpacing: '0.08em',
                            color: '#ffffff',
                            textTransform: 'uppercase',
                            margin: 0,
                            lineHeight: 1,
                            textShadow: '0 4px 25px rgba(0, 0, 0, 0.9)',
                        }}
                    >
                        PORTFOLIO
                    </h1>

                    <div
                        style={{
                            width: '36px',
                            height: '1px',
                            background: 'rgba(255, 255, 255, 0.35)',
                            margin: '4px 0',
                        }}
                    />

                    <p
                        className="smooth-pulse"
                        style={{
                            fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                            fontSize: 'clamp(0.8rem, 1.6vw, 0.95rem)',
                            letterSpacing: '0.3em',
                            color: 'rgba(255, 255, 255, 0.7)',
                            textTransform: 'uppercase',
                            margin: 0,
                        }}
                    >
                        CLICK OR PRESS ANY KEY TO ENTER
                    </p>
                </div>
            )}
        </div>
    )
}
