'use client'
import { useEffect, useRef } from 'react'

export default function ColdBoot({ onComplete }) {
    useEffect(() => {
        // Hold black screen for 1.8 seconds essential for drama
        const timer = setTimeout(() => {
            onComplete()
        }, 1800)

        return () => {
            clearTimeout(timer)
        }
    }, [onComplete])

    return (
        <div style={{ position: 'fixed', inset: 0, background: '#000', zIndex: 100 }}>
            <div className="noise-overlay" />
        </div>
    )
}
