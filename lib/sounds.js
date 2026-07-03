import { Howl } from 'howler'

let siren = null
let starPing = null
let starFinal = null

export const getSounds = () => {

    if (!siren) {
        siren = new Howl({
            src: ['/audio/siren_loop.mp3'],
            loop: true,
            volume: 0.15,
            preload: true,
            html5: true
        })
    }

    if (!starPing) {
        starPing = new Howl({
            src: ['/audio/star_ping.mp3'],
            volume: 1,
            preload: true
        })
    }

    if (!starFinal) {
        starFinal = new Howl({
            src: ['/audio/star_final_hit.mp3'],
            volume: 1,
            preload: true
        })
    }

    return { siren, starPing, starFinal }
}