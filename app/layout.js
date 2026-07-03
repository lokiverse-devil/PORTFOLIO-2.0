import './globals.css'
import AudioUnlock from '../components/AudioUnlock'

export const metadata = {
    title: 'Om Portfolio',
    description: 'GTA V-style cinematic interactive portfolio',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <AudioUnlock />
                {children}
            </body>
        </html>
    )
}