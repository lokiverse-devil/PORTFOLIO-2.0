'use client'
import { useEffect, useRef, forwardRef } from 'react'
import gsap from 'gsap'

const StarIcon = forwardRef(({ className, style }, ref) => (
    <svg
        ref={ref}
        className={className}
        style={style}
        width="72"
        height="72"
        viewBox="0 0 72 72"
    >
        <polygon
            points="36,4 44,28 70,28 49,44 57,68 36,52 15,68 23,44 2,28 28,28"
            fill="#fff"
        />
    </svg>
))

export default function WantedStars({ onComplete, sounds }) {
    const containerRef = useRef(null)
    const starsRef = useRef([])
    const flashRef = useRef(null)

    useEffect(() => {
        const stars = starsRef.current

        // 🚨 Hard reset prevents instant 5 stars
        gsap.set(stars, {
            opacity: 0,
            scale: 1.8
        })

        const tl = gsap.timeline({
            onComplete: () => setTimeout(onComplete, 600)
        })

        stars.forEach((star, i) => {
            const absolutePos = 1.5 + (i * 0.48)

            tl.to(star, {
                opacity: 1,
                scale: 1,
                duration: 0.42,
                ease: 'expo.out',
                onStart: () => {
                    if (i < 4) {
                        sounds?.starPing?.play()
                    } else {
                        sounds?.starFinal?.play()

                        // 💥 Final star impact
                        gsap.fromTo(containerRef.current,
                            { x: -6, y: 3 },
                            {
                                x: 6,
                                y: -3,
                                duration: 0.08,
                                repeat: 5,
                                yoyo: true,
                                ease: 'power1.inOut'
                            }
                        )

                        gsap.fromTo(flashRef.current,
                            { opacity: 0, scale: 0.4 },
                            {
                                opacity: 1,
                                scale: 6,
                                duration: 0.25,
                                ease: 'power2.out',
                                yoyo: true,
                                repeat: 1
                            }
                        )
                    }
                }
            }, absolutePos)
        })

        tl.duration(3.8)

        return () => tl.kill()
    }, [])

    return (
        <div style={styles.wrapper}>
            <div ref={flashRef} style={styles.flash} />

            <div ref={containerRef} style={styles.stars}>
                {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon
                        key={i}
                        ref={(el) => (starsRef.current[i] = el)}
                        className="wanted-star"
                    />
                ))}
            </div>
        </div>
    )
}

const styles = {
    wrapper: {
        position: 'fixed',
        inset: 0,
        background: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
    },
    flash: {
        position: 'absolute',
        width: '280px',
        height: '280px',
        background: 'radial-gradient(circle, #fff 0%, transparent 70%)',
        opacity: 0,
        filter: 'blur(18px)',
        pointerEvents: 'none'
    },
    stars: {
        display: 'flex',
        gap: '22px',
        alignItems: 'center',
        transform: 'translateY(-120px)', // GTA top positioning feel
    }
}