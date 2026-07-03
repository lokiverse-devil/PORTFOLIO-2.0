'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function CityReveal({ onComplete }) {
    const imgRef = useRef(null)
    const [time, setTime] = useState('')

    useEffect(() => {
        const updateTime = () => {
            const now = new Date()
            const d = now.toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            }).toUpperCase()
            const t = now.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            })
            setTime(`${d}  ${t}`)
        }
        updateTime()
        const interval = setInterval(updateTime, 1000)

        // Cinematic Reveal: Scale 1.08 -> 1.0, 3.5s
        if (imgRef.current) {
            gsap.fromTo(
                imgRef.current,
                { opacity: 0, scale: 1.08 },
                {
                    opacity: 1,
                    scale: 1.0,
                    duration: 3.5,
                    ease: 'power3.out',
                }
            )
        }

        const timer = setTimeout(onComplete, 3500)

        return () => {
            clearTimeout(timer)
            clearInterval(interval)
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
                alt=""
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0,
                    filter: 'contrast(1.1) brightness(0.9)',
                }}
            />
            <div className="heavy-vignette" />
            <div className="noise-overlay" />

            {/* HUD Jittering */}
            <div
                className="hud-jitter city-reveal-hud"
                style={{
                    position: 'absolute',
                    top: 32,
                    left: 40,
                    zIndex: 110,
                    fontFamily: 'ChaletComprime1960, sans-serif',
                    fontSize: '0.9rem',
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.8)',
                    textTransform: 'uppercase',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}
            >
                {time}
            </div>
        </div>
    )
}
