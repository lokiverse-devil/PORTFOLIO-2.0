'use client'
import { useEffect } from 'react'
import { Howler } from 'howler'

export default function AudioUnlock() {
    useEffect(() => {
        const unlock = () => {
            if (Howler.ctx.state !== 'running') {
                Howler.ctx.resume()
            }
            window.removeEventListener('pointerdown', unlock)
        }

        window.addEventListener('pointerdown', unlock)

        return () => window.removeEventListener('pointerdown', unlock)
    }, [])

    return null
}
