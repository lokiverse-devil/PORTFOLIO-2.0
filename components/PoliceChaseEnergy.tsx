'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Howler } from 'howler'
import { getSounds } from '@/lib/sounds'
import { BasePhaseProps } from '@/lib/types'

export default function PoliceChaseEnergy({ onComplete, sounds }: BasePhaseProps) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const redRef = useRef<HTMLDivElement | null>(null)
    const blueRef = useRef<HTMLDivElement | null>(null)
    const sweepRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const siren = sounds?.siren || getSounds().siren

        // Start siren audio continuously
        const startAudio = async () => {
            try {
                if (Howler && Howler.ctx && Howler.ctx.state !== 'running') {
                    await Howler.ctx.resume()
                }

                if (siren) {
                    if (!siren.playing()) {
                        siren.volume(0.45)
                        siren.loop(true)
                        siren.play()
                    }
                }
            } catch (err) {
                console.log('Audio notice:', err)
            }
        }

        startAudio()

        // Cinematic Timeline
        const tl = gsap.timeline({
            onComplete: () => {
                // Keep siren running into WantedStars!
                onComplete()
            },
        })

        if (containerRef.current) {
            tl.fromTo(
                containerRef.current,
                { scale: 1.05, opacity: 0 },
                { scale: 1.0, opacity: 1, duration: 0.8, ease: 'power2.out' }
            )
        }

        // Sweeping spotlight beam
        if (sweepRef.current) {
            gsap.to(sweepRef.current, {
                x: '100%',
                duration: 2.2,
                repeat: -1,
                ease: 'power1.inOut',
                yoyo: true,
            })
        }

        // Strobe Pulses (Red & Blue alternating police flashers)
        const strobeTl = gsap.timeline({ repeat: -1 })

        if (redRef.current) {
            strobeTl
                .to(redRef.current, { opacity: 0.85, duration: 0.05, ease: 'rough' })
                .to(redRef.current, { opacity: 0.15, duration: 0.05 })
                .to(redRef.current, { opacity: 0.95, duration: 0.07 })
                .to(redRef.current, { opacity: 0, duration: 0.12 })
        }

        if (blueRef.current) {
            strobeTl
                .to(blueRef.current, { opacity: 0.85, duration: 0.05, ease: 'rough' }, '-=0.08')
                .to(blueRef.current, { opacity: 0.15, duration: 0.05 })
                .to(blueRef.current, { opacity: 0.95, duration: 0.07 })
                .to(blueRef.current, { opacity: 0, duration: 0.15 })
        }

        // Screen Shake Rumble
        if (containerRef.current) {
            gsap.to(containerRef.current, {
                x: () => (Math.random() - 0.5) * 6,
                y: () => (Math.random() - 0.5) * 6,
                duration: 0.08,
                repeat: -1,
                yoyo: true,
                ease: 'none',
            })
        }

        // Duration of police chase sequence before stars appear
        tl.to({}, { duration: 2.6 })

        return () => {
            tl.kill()
            strobeTl.kill()
            if (containerRef.current) gsap.killTweensOf(containerRef.current)
            if (sweepRef.current) gsap.killTweensOf(sweepRef.current)
        }
    }, [onComplete, sounds])

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                inset: 0,
                background: '#000',
                zIndex: 90,
                overflow: 'hidden',
            }}
        >
            <div className="noise-overlay" />
            <div className="crt-scanlines" />

            {/* Red Police Strobe */}
            <div
                ref={redRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(ellipse at 15% 45%, rgba(255,0,0,0.65) 0%, rgba(200,0,0,0.2) 45%, transparent 70%)',
                    opacity: 0,
                    mixBlendMode: 'screen',
                }}
            />

            {/* Blue Police Strobe */}
            <div
                ref={blueRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(ellipse at 85% 55%, rgba(0,100,255,0.65) 0%, rgba(0,70,220,0.2) 45%, transparent 70%)',
                    opacity: 0,
                    mixBlendMode: 'screen',
                }}
            />

            {/* Helicopter Searchlight Sweep */}
            <div
                ref={sweepRef}
                style={{
                    position: 'absolute',
                    top: '-20%',
                    left: '-30%',
                    width: '60%',
                    height: '140%',
                    background:
                        'radial-gradient(ellipse at center, rgba(255,255,255,0.12) 0%, transparent 60%)',
                    transform: 'rotate(-25deg)',
                    pointerEvents: 'none',
                    mixBlendMode: 'screen',
                }}
            />

            {/* Cinematic Center Letterbox Vignette */}
            <div className="heavy-vignette" />
        </div>
    )
}
