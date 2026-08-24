import type { Howl } from 'howler'

export interface SoundEffects {
    siren?: Howl
    ambience?: Howl
    passed?: Howl
    failed?: Howl
}

export type Phase =
    | 'COLD_BOOT'
    | 'STARS'
    | 'CHASE_AND_STARS'
    | 'CITY'
    | 'WARNING'
    | 'LOADING'
    | 'DECISION'
    | 'Q2'
    | 'RESULT_PASS'
    | 'RESULT_FAIL_Q1'
    | 'RESULT_FAIL_Q2'
    | 'LANDING'

export type ResultType =
    | 'passed-access'
    | 'passed-portfolio'
    | 'failed-denied'
    | 'failed-redirect'

export interface BasePhaseProps {
    onComplete: () => void
    sounds?: SoundEffects | null
}

export interface ColdBootProps {
    onComplete: () => void
}

export interface DecisionPhaseProps {
    question?: number
    onResult: (type: ResultType) => void
    sounds?: SoundEffects | null
}

export interface MissionResultProps {
    type: ResultType | string | null
    onComplete: () => void
    sounds?: SoundEffects | null
}
