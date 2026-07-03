'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Howler } from 'howler'
import { getSounds } from '@/lib/sounds'

export default function PoliceChaseEnergy({ onComplete }) {
    const containerRef = useRef(null)
    const redRef = useRef(null)
    const blueRef = useRef(null)
    const flickerRef = useRef(null)

    useEffect(() => {
        const { siren } = getSounds()

        // 🚨 HARD RESET + SAFE PLAY
        const startAudio = async () => {
            try {
                if (Howler.ctx.state !== 'running') {
                    await Howler.ctx.resume()
                }

                siren.stop()          // prevents "plays once only"
                siren.volume(0.15)
                siren.loop(true)
                siren.play()
            } catch (err) {
                console.log('Audio error:', err)
            }
        }

        startAudio()

        // 🎬 Main cinematic timeline
        const tl = gsap.timeline({
            onComplete: () => {
                siren.fade(0.15, 0, 1)   // smooth siren fade out
                setTimeout(onComplete, 500)
            }
        })

        tl.fromTo(containerRef.current,
            { scale: 1.03, opacity: 0 },
            { scale: 1.0, opacity: 1, duration: 1.2, ease: 'power2.out' }
        )

        // 🚔 Police light pulses
        const glowTl = gsap.timeline({ repeat: -1 })

        glowTl.to(redRef.current, {
            opacity: 1,
            scale: 1.3,
            duration: 0.06,
            repeat: 1,
            yoyo: true,
            ease: 'power2.inOut'
        })

        glowTl.to(blueRef.current, {
            opacity: 1,
            scale: 1.3,
            duration: 0.06,
            repeat: 1,
            yoyo: true,
            ease: 'power2.inOut'
        }, "+=0.18")

        glowTl.to({}, { duration: 0.35 }) // rhythm spacing

        // ⚡ Subtle flicker grain
        gsap.to(flickerRef.current, {
            opacity: 0.06,
            duration: 0.08,
            repeat: -1,
            yoyo: true,
            ease: 'none'
        })

        // 🎬 Exit fade
        tl.to(containerRef.current, {
            opacity: 0,
            duration: 1.2,
            ease: 'power2.inOut'
        }, "+=3")

        return () => {
            tl.kill()
            glowTl.kill()
            siren.stop()
        }
    }, [onComplete])

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                inset: 0,
                background: '#000',
                zIndex: 90,
                overflow: 'hidden'
            }}
        >
            {/* 🔴 Red sweep */}
            <div
                ref={redRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(circle at 20% 50%, rgba(255,0,0,0.35), transparent 60%)',
                    opacity: 0,
                    mixBlendMode: 'screen'
                }}
            />

            {/* 🔵 Blue sweep */}
            <div
                ref={blueRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(circle at 80% 50%, rgba(0,120,255,0.35), transparent 60%)',
                    opacity: 0,
                    mixBlendMode: 'screen'
                }}
            />

            {/* ⚡ Flicker grain */}
            <div
                ref={flickerRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: '#fff',
                    opacity: 0,
                    pointerEvents: 'none',
                    mixBlendMode: 'overlay'
                }}
            />
        </div>
    )
} 