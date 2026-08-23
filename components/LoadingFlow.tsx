'use client'
import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { BasePhaseProps } from '@/lib/types'

const IMAGES = ['/images/loading_1.jpeg', '/images/loading_2.jpeg', '/images/loading_3.jpeg']

const TIPS = [
    'LOS SANTOS — WHERE REPUTATIONS ARE BUILT IN CODE',
    'STAY ALERT: EVERY LINE OF CODE MATTERS IN THE OPEN WORLD',
    'MODERN PROBLEMS REQUIRE DISTRIBUTED ARCHITECTURES',
    'INVEST IN YOUR TECH STACK, NOT JUST YOUR AMMO',
    'EXPLORE THE FULL MAP TO UNCOVER HIDDEN OPERATIONS',
]

export default function LoadingFlow({ onComplete, sounds }: BasePhaseProps) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const imgs = useRef<(HTMLImageElement | null)[]>([])
    const barRef = useRef<HTMLDivElement | null>(null)
    const spinnerRef = useRef<SVGSVGElement | null>(null)
    const [tipIdx, setTipIdx] = useState<number>(0)

    useEffect(() => {
        try {
            if (sounds?.ambience) {
                if (!sounds.ambience.playing()) {
                    sounds.ambience.volume(0.4)
                    sounds.ambience.loop(true)
                    sounds.ambience.play()
                }
            }
        } catch (e) {
            console.warn('Audio ambience notice:', e)
        }

        // GTA Spinner rotation
        if (spinnerRef.current) {
            gsap.to(spinnerRef.current, {
                rotation: 360,
                duration: 1.8,
                repeat: -1,
                ease: 'linear',
            })
        }

        // Initial image fade in
        if (imgs.current[0]) {
            gsap.fromTo(
                imgs.current[0],
                { opacity: 0 },
                { opacity: 1, duration: 1.0, ease: 'power2.out' }
            )
        }

        // Smooth image cycling (5.5s duration per artwork)
        let current = 0
        const cycleImages = () => {
            const next = (current + 1) % IMAGES.length
            if (imgs.current[current]) {
                gsap.to(imgs.current[current], {
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power2.inOut',
                })
            }
            if (imgs.current[next]) {
                gsap.fromTo(
                    imgs.current[next],
                    { opacity: 0 },
                    {
                        opacity: 1,
                        duration: 1.2,
                        ease: 'power2.inOut',
                    }
                )
            }
            current = next
        }
        const imgInterval = setInterval(cycleImages, 5500)

        // Tip rotation
        const tipInterval = setInterval(() => {
            setTipIdx((p) => (p + 1) % TIPS.length)
        }, 4500)

        // Smooth GTA Loading Bar
        const barTl = gsap.timeline({
            onComplete: () => {
                clearInterval(imgInterval)
                clearInterval(tipInterval)
                setTimeout(onComplete, 800)
            },
        })

        if (barRef.current) {
            barTl.to(barRef.current, { width: '32%', duration: 2.2, ease: 'power2.out' })
            barTl.to({}, { duration: 0.8 })
            barTl.to(barRef.current, { width: '64%', duration: 2.8, ease: 'power1.inOut' })
            barTl.to({}, { duration: 0.6 })
            barTl.to(barRef.current, { width: '88%', duration: 3.0, ease: 'power1.out' })
            barTl.to(barRef.current, { width: '98%', duration: 1.8, ease: 'power2.out' })
            barTl.to({}, { duration: 0.4 })
            barTl.to(barRef.current, { width: '100%', duration: 0.5, ease: 'power3.in' })
        }

        return () => {
            barTl.kill()
            clearInterval(imgInterval)
            clearInterval(tipInterval)
            imgs.current.forEach((img) => {
                if (img) gsap.killTweensOf(img)
            })
            if (barRef.current) gsap.killTweensOf(barRef.current)
            if (spinnerRef.current) gsap.killTweensOf(spinnerRef.current)
        }
    }, [onComplete, sounds])

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                inset: 0,
                background: '#000',
                zIndex: 100,
                overflow: 'hidden',
                userSelect: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {/* Perfectly Framed Artwork Display */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '40px 20px 100px 20px',
                }}
            >
                {IMAGES.map((src, i) => (
                    <img
                        key={src}
                        ref={(el) => {
                            imgs.current[i] = el
                        }}
                        src={src}
                        alt="Loading artwork"
                        style={{
                            position: 'absolute',
                            maxWidth: '92vw',
                            maxHeight: '78vh',
                            objectFit: 'contain',
                            opacity: i === 0 ? 1 : 0,
                            filter: 'contrast(1.05) brightness(0.95)',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.9)',
                        }}
                    />
                ))}
            </div>

            <div className="heavy-vignette" />
            <div className="noise-overlay" />
            <div className="crt-scanlines" />

            {/* Tip text - Classic GTA V Bottom Left positioning */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 72,
                    left: 54,
                    right: 120,
                    zIndex: 110,
                    maxWidth: '850px',
                }}
            >
                <p
                    key={tipIdx}
                    style={{
                        fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                        fontSize: 'clamp(0.95rem, 2vw, 1.25rem)',
                        letterSpacing: '0.2em',
                        lineHeight: 1.35,
                        textTransform: 'uppercase',
                        color: 'rgba(255, 255, 255, 0.9)',
                        textShadow: '0 2px 8px rgba(0,0,0,0.9)',
                    }}
                >
                    {TIPS[tipIdx]}
                </p>
            </div>

            {/* Bottom Right GTA Loading Spinner */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 60,
                    right: 54,
                    zIndex: 120,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                }}
            >
                <svg
                    ref={spinnerRef}
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.7))' }}
                >
                    <circle cx="12" cy="12" r="9" strokeDasharray="30 15" />
                </svg>
            </div>

            {/* Bottom GTA Loading Bar */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 32,
                    left: 54,
                    right: 54,
                    height: '3px',
                    background: 'rgba(255,255,255,0.15)',
                    zIndex: 120,
                }}
            >
                <div
                    ref={barRef}
                    style={{
                        height: '100%',
                        width: '0%',
                        background: '#ffffff',
                        boxShadow: '0 0 10px rgba(255,255,255,0.9)',
                    }}
                />
            </div>
        </div>
    )
}
