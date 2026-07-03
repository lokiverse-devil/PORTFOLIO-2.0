'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const IMAGES = ['/images/loading_1.jpeg', '/images/loading_2.jpeg', '/images/loading_3.jpeg']
const TIPS = [
    'LOS SANTOS — WHERE DREAMS GO TO DIE',
    'THE TRUTH IS OUT THERE. SOMEWHERE.',
    'STAY OFF THE FREEWAYS AT NIGHT.',
    'INVEST IN RELATIONSHIPS, NOT AMMO.',
    'EVERY STORY HAS TWO SIDES. IGNORE BOTH.',
]

export default function LoadingFlow({ onComplete, sounds }) {
    const containerRef = useRef(null)
    const imgs = useRef([])
    const barRef = useRef(null)
    const [tipIdx, setTipIdx] = useState(0)

    useEffect(() => {
        if (sounds?.ambience) {
            // Ensure ambience is definitely playing and looping
            if (!sounds.ambience.playing()) {
                sounds.ambience.loop(true)
                sounds.ambience.play()
            }
        }

        // Camera Drift
        gsap.to(containerRef.current, {
            scale: 1.05,
            duration: 15,
            ease: 'none'
        })

        // Image Cycle
        let current = 0
        const cycleImages = () => {
            const next = (current + 1) % IMAGES.length
            gsap.to(imgs.current[current], { opacity: 0, duration: 1 })
            gsap.to(imgs.current[next], { opacity: 1, duration: 1 })
            current = next
        }
        const imgInterval = setInterval(cycleImages, 4000)

        // Tip Flicker
        const tipInterval = setInterval(() => {
            setTipIdx((p) => (p + 1) % TIPS.length)
        }, 3500)

        // High-Drama Loading Bar: 35% -> 68% -> 91% -> 1.2s Stall -> 100%
        const barTl = gsap.timeline({
            onComplete: () => {
                clearInterval(imgInterval)
                clearInterval(tipInterval)
                // Persist ambience until DecisionPhase stops it
                setTimeout(onComplete, 1000)
            }
        })

        barTl.to(barRef.current, { width: '35%', duration: 1.5, ease: 'power2.inOut' })
        barTl.to(barRef.current, { width: '68%', duration: 0.8, ease: 'power4.out', delay: 0.5 })
        barTl.to(barRef.current, { width: '91%', duration: 3, ease: 'power1.in' })
        barTl.to({}, { duration: 1.2 }) // Stall
        barTl.to(barRef.current, { width: '100%', duration: 0.4, ease: 'power2.in' })

        return () => {
            barTl.kill()
            clearInterval(imgInterval)
            clearInterval(tipInterval)
            // No stop here to allow transition persistence
        }
    }, [onComplete, sounds])

    return (
        <div
            ref={containerRef}
            style={{ position: 'fixed', inset: 0, background: '#000', zIndex: 100, overflow: 'hidden' }}
        >
            {IMAGES.map((src, i) => (
                <img
                    key={src}
                    ref={(el) => (imgs.current[i] = el)}
                    src={src}
                    alt=""
                    style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: i === 0 ? 1 : 0,
                        filter: 'brightness(0.8) contrast(1.1)'
                    }}
                />
            ))}

            <div className="heavy-vignette" />
            <div className="noise-overlay" />

            {/* Tip text */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 120,
                    left: 60,
                    zIndex: 110,
                }}
            >
                <p
                    className="glitch-flicker"
                    key={tipIdx}
                    style={{
                        fontFamily: 'ChaletComprime1960, sans-serif',
                        fontSize: '0.85rem',
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.7)',
                    }}
                >
                    {TIPS[tipIdx]}
                </p>
            </div>

            {/* Loading bar container */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 60,
                    left: 60,
                    right: 60,
                    height: '4px',
                    background: 'rgba(255,255,255,0.1)',
                    zIndex: 120
                }}
            >
                <div
                    ref={barRef}
                    style={{
                        height: '100%',
                        width: '0%',
                        background: '#fff',
                        boxShadow: '0 0 10px rgba(255,255,255,0.5)'
                    }}
                />
            </div>
        </div>
    )
}
