'use client'
import { useState } from 'react'
import { Howler } from 'howler'

export default function ColdBoot({ onComplete }) {
    const [started, setStarted] = useState(false)

    const handleStart = async () => {
        setStarted(true)
        try {
            if (Howler.ctx && Howler.ctx.state !== 'running') {
                await Howler.ctx.resume()
            }
        } catch (err) {
            console.log('Audio resume error:', err)
        }

        // Hold black screen for 1.8 seconds essential for drama
        setTimeout(() => {
            onComplete()
        }, 1800)
    }

    return (
        <div
            onClick={!started ? handleStart : undefined}
            style={{
                position: 'fixed',
                inset: 0,
                background: '#000',
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: !started ? 'pointer' : 'default',
            }}
        >
            <div className="noise-overlay" />
            {!started && (
                <div style={{ textAlign: 'center', zIndex: 110 }}>
                    <p
                        className="blink"
                        style={{
                            fontFamily: 'ChaletLondon1960, sans-serif',
                            fontSize: '1.2rem',
                            letterSpacing: '0.25em',
                            color: '#fff',
                            textTransform: 'uppercase',
                        }}
                    >
                        CLICK OR TAP TO START
                    </p>
                </div>
            )}
        </div>
    )
}
