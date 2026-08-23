'use client'
import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { Phase, ResultType, SoundEffects } from '@/lib/types'

const ColdBoot = dynamic(() => import('@/components/ColdBoot'), { ssr: false })
const WantedStars = dynamic(() => import('@/components/WantedStars'), { ssr: false })
const CityReveal = dynamic(() => import('@/components/CityReveal'), { ssr: false })
const WarningScreen = dynamic(() => import('@/components/WarningScreen'), { ssr: false })
const LoadingFlow = dynamic(() => import('@/components/LoadingFlow'), { ssr: false })
const DecisionPhase = dynamic(() => import('@/components/DecisionPhase'), { ssr: false })
const MissionResult = dynamic(() => import('@/components/MissionResult'), { ssr: false })
const LandingPage = dynamic(() => import('@/components/LandingPage'), { ssr: false })

export default function Home() {
    const [phase, setPhase] = useState<Phase>('COLD_BOOT')
    const [resultType, setResultType] = useState<ResultType | null>(null)
    const soundsRef = useRef<SoundEffects | null>(null)

    useEffect(() => {
        let isMounted = true
        import('howler').then(({ Howl }) => {
            if (!isMounted) return
            soundsRef.current = {
                siren: new Howl({ src: ['/sounds/siren_loop.mp3'], volume: 0.5 }),
                ambience: new Howl({ src: ['/sounds/loading_ambience.mp3'], loop: true, volume: 0.45 }),
                passed: new Howl({ src: ['/sounds/mission_passed.mp3'], volume: 1.0 }),
                failed: new Howl({ src: ['/sounds/mission_failed.mp3'], volume: 1.0 }),
            }
        }).catch((err) => {
            console.warn('Howler load notice:', err)
        })

        return () => {
            isMounted = false
            if (soundsRef.current) {
                Object.values(soundsRef.current).forEach((s) => {
                    try {
                        s?.stop()
                    } catch (_) {}
                })
            }
        }
    }, [])

    const handleDecisionResult = (type: ResultType) => {
        setResultType(type)
        if (type.startsWith('passed')) {
            setPhase('RESULT_PASS')
        } else {
            setPhase(type === 'failed-denied' ? 'RESULT_FAIL_Q1' : 'RESULT_FAIL_Q2')
        }
    }

    const handleResultComplete = () => {
        if (phase === 'RESULT_PASS') {
            setPhase('LANDING')
        } else if (phase === 'RESULT_FAIL_Q1') {
            setPhase('Q2')
        } else if (phase === 'RESULT_FAIL_Q2') {
            setPhase('LOADING')
        }
    }

    return (
        <main
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                background: '#000',
                overflow: 'hidden',
            }}
        >
            <div className="noise-overlay" />

            {phase === 'COLD_BOOT' && (
                <ColdBoot onComplete={() => setPhase('STARS')} />
            )}

            {phase === 'STARS' && (
                <WantedStars
                    sounds={soundsRef.current}
                    onComplete={() => setPhase('CITY')}
                />
            )}

            {phase === 'CITY' && (
                <CityReveal
                    onComplete={() => setPhase('WARNING')}
                />
            )}

            {phase === 'WARNING' && (
                <WarningScreen
                    sounds={soundsRef.current}
                    onComplete={() => setPhase('LOADING')}
                />
            )}

            {phase === 'LOADING' && (
                <LoadingFlow
                    sounds={soundsRef.current}
                    onComplete={() => setPhase('DECISION')}
                />
            )}

            {phase === 'DECISION' && (
                <DecisionPhase
                    question={1}
                    sounds={soundsRef.current}
                    onResult={handleDecisionResult}
                />
            )}

            {phase === 'Q2' && (
                <DecisionPhase
                    question={2}
                    sounds={soundsRef.current}
                    onResult={handleDecisionResult}
                />
            )}

            {phase.startsWith('RESULT') && (
                <MissionResult
                    type={resultType}
                    sounds={soundsRef.current}
                    onComplete={handleResultComplete}
                />
            )}

            {phase === 'LANDING' && <LandingPage />}
        </main>
    )
}
