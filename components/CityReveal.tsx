'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface CityRevealProps {
    onComplete: () => void
}

export default function CityReveal({ onComplete }: CityRevealProps) {
    const imgRef = useRef<HTMLImageElement | null>(null)
    const [time, setTime] = useState<string>('')
    const completedRef = useRef<boolean>(false)

    const triggerComplete = () => {
        if (completedRef.current) return
        completedRef.current = true
        onComplete()
    }

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const d = now
                .toLocaleDateString('en-US', {
                    weekday: 'short',
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                })
                .toUpperCase()
            const t = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            })
            setTime(`${d}  //  ${t}`)
        }
        updateTime()
        const interval = setInterval(updateTime, 1000)

        // Cinematic Camera Drift & Reveal
        if (imgRef.current) {
            gsap.fromTo(
                imgRef.current,
                { opacity: 0, scale: 1.5 },
                {
                    opacity: 1,
                    scale: 1.0,
                    duration: 2.8,
                    ease: 'power2.out',
                }
            )
        }

        const timer = setTimeout(triggerComplete, 2800)

        const handleKey = (e: KeyboardEvent) => {
            if (e.code === 'Space' || e.code === 'Enter' || e.code === 'Escape') {
                triggerComplete()
            }
        }
        window.addEventListener('keydown', handleKey)

        return () => {
            clearTimeout(timer)
            clearInterval(interval)
            window.removeEventListener('keydown', handleKey)
            if (imgRef.current) gsap.killTweensOf(imgRef.current)
        }
    }, [onComplete])

    return (
        <div
            onClick={triggerComplete}
            style={{
                position: 'fixed',
                inset: 0,
                background: '#000',
                overflow: 'hidden',
                zIndex: 100,
                cursor: 'pointer',
                userSelect: 'none',
            }}
        >
            <img
                ref={imgRef}
                src="/images/intro_city.jpg"
                alt="Los Santos Skyline"
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0,
                    filter: 'contrast(1.12) brightness(0.92)',
                }}
            />
            <div className="heavy-vignette" />

            {/* Location & Time HUD */}
            <div
                className="hud-jitter"
                style={{
                    position: 'absolute',
                    top: 36,
                    left: 44,
                    zIndex: 120,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                    fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                    textTransform: 'uppercase',
                    textShadow: '0 2px 8px rgba(0,0,0,0.9)',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '3px', height: '14px', background: '#ffffff' }} />
                    <span style={{ fontSize: '1.05rem', letterSpacing: '0.22em', color: '#ffffff', fontWeight: 700 }}>
                        UTTARAKHAND // DEV BHOOMI
                    </span>
                </div>
                <div style={{ fontSize: '0.8rem', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.65)', paddingLeft: '11px' }}>
                    {time}
                </div>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.22em', color: 'rgba(255,255,255,0.45)', paddingLeft: '11px', marginTop: '2px' }}>
                    SYSTEM STATUS: ONLINE
                </div>
            </div>

            {/* Bottom Skip Prompt */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 24,
                    right: 36,
                    zIndex: 120,
                    fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                    fontSize: '0.75rem',
                    letterSpacing: '0.25em',
                    color: 'rgba(255, 255, 255, 0.4)',
                    textTransform: 'uppercase',
                }}
            >
                [ CLICK OR PRESS SPACE TO CONTINUE ]
            </div>
        </div>
    )
}
