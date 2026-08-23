'use client'
import { useEffect } from 'react'
import { Howler } from 'howler'

export default function AudioUnlock(): null {
    useEffect(() => {
        const unlock = () => {
            try {
                if (Howler && Howler.ctx && Howler.ctx.state !== 'running') {
                    Howler.ctx.resume()
                }
            } catch (err) {
                console.warn('AudioContext unlock notice:', err)
            }
            window.removeEventListener('pointerdown', unlock)
            window.removeEventListener('touchstart', unlock)
            window.removeEventListener('click', unlock)
            window.removeEventListener('keydown', unlock)
        }

        window.addEventListener('pointerdown', unlock, { passive: true })
        window.addEventListener('touchstart', unlock, { passive: true })
        window.addEventListener('click', unlock, { passive: true })
        window.addEventListener('keydown', unlock, { passive: true })

        return () => {
            window.removeEventListener('pointerdown', unlock)
            window.removeEventListener('touchstart', unlock)
            window.removeEventListener('click', unlock)
            window.removeEventListener('keydown', unlock)
        }
    }, [])

    return null
}
