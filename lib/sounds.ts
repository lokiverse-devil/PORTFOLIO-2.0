import { Howl } from 'howler'
import { SoundEffects } from './types'

let soundsInstance: SoundEffects | null = null

export const getSounds = (): SoundEffects => {
    if (typeof window === 'undefined') {
        return {}
    }

    if (!soundsInstance) {
        soundsInstance = {
            siren: new Howl({
                src: ['/sounds/siren_loop.mp3'],
                volume: 0.5,
                preload: true,
            }),
            ambience: new Howl({
                src: ['/sounds/loading_ambience.mp3'],
                loop: true,
                volume: 0.35,
                preload: true,
            }),
            passed: new Howl({
                src: ['/sounds/mission_passed.mp3'],
                volume: 1.0,
                preload: true,
            }),
            failed: new Howl({
                src: ['/sounds/mission_failed.mp3'],
                volume: 1.0,
                preload: true,
            }),
        }
    }

    return soundsInstance
}
