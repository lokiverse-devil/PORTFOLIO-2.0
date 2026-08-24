'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface CityRevealProps {
    onComplete: () => void
}

export default function CityReveal({ onComplete }: CityRevealProps) {
    const imgRef = useRef<HTMLImageElement | null>(null)
    const [time, setTime] = useState<string>('')

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
            setTime(`${d}  ${t}`)
        }
        updateTime()
        const interval = setInterval(updateTime, 1000)

        // Cinematic Camera Drift & Reveal
        if (imgRef.current) {
            gsap.fromTo(
                imgRef.current,
                { opacity: 0, scale: 1.08 },
                {
                    opacity: 1,
                    scale: 1.0,
                    duration: 3.5,
                    ease: 'power2.out',
                }
            )
        }

        const timer = setTimeout(onComplete, 3500)

        return () => {
            clearTimeout(timer)
            clearInterval(interval)
            if (imgRef.current) gsap.killTweensOf(imgRef.current)
        }
    }, [onComplete])

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                background: '#000',
                overflow: 'hidden',
                zIndex: 100,
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
                    filter: 'contrast(1.12) brightness(0.9)',
                }}
            />
            <div className="heavy-vignette" />
            <div className="noise-overlay" />
            <div className="crt-scanlines" />

            {/* Clean Location & Time HUD */}
            <div
                className="hud-jitter"
                style={{
                    position: 'absolute',
                    top: 36,
                    left: 44,
                    zIndex: 120,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2px',
                    fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                    textTransform: 'uppercase',
                    textShadow: '0 2px 8px rgba(0,0,0,0.9)',
                }}
            >
                <div style={{ fontSize: '1.05rem', letterSpacing: '0.2em', color: '#ffffff' }}>
                    PORTFOLIO 2.0 // DEPLOYMENT
                </div>
                <div style={{ fontSize: '0.85rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.65)' }}>
                    {time}
                </div>
            </div>
        </div>
    )
}
