'use client'
import React from 'react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                background: '#000',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                color: '#fff',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textAlign: 'center',
                padding: '24px',
                zIndex: 1000,
            }}
        >
            <div className="noise-overlay" />
            <h1
                style={{
                    fontSize: 'clamp(2rem, 6vw, 4rem)',
                    marginBottom: '16px',
                    color: '#ff3b3b',
                    textShadow: '0 0 20px rgba(255,0,0,0.5)',
                }}
            >
                404 — SECTOR NOT FOUND
            </h1>
            <p
                style={{
                    fontFamily: 'ChaletComprime1960, "Barlow Condensed", sans-serif',
                    fontSize: 'clamp(0.9rem, 2vw, 1.2rem)',
                    letterSpacing: '0.25em',
                    color: 'rgba(255,255,255,0.7)',
                    marginBottom: '36px',
                }}
            >
                THE REQUESTED SECTOR CANNOT BE LOCATED
            </p>
            <Link
                href="/"
                style={{
                    fontFamily: 'ChaletLondon1960, "Bebas Neue", Montserrat, sans-serif',
                    fontSize: '1.1rem',
                    color: '#fff',
                    background: '#8a0000',
                    padding: '12px 28px',
                    textDecoration: 'none',
                    letterSpacing: '0.2em',
                    borderRight: '4px solid #fff',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
                }}
            >
                [ RETURN TO MISSION ]
            </Link>
        </div>
    )
}
