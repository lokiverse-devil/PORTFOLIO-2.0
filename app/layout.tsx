import React from 'react'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import AudioUnlock from '@/components/AudioUnlock'

export const metadata: Metadata = {
    title: 'OM PANDEY // LOS SANTOS PROTOCOL',
    description: 'GTA V-style cinematic interactive developer portfolio by Om Pandey',
    authors: [{ name: 'Om Pandey' }],
    keywords: ['Developer Portfolio', 'Full Stack Developer', 'GTA V', 'Next.js', 'Interactive'],
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#000000',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,700&family=Bebas+Neue&family=Montserrat:wght@700;800;900&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <AudioUnlock />
                {children}
            </body>
        </html>
    )
}
