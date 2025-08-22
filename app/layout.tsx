import type React from "react"
import type { Metadata } from "next"
import { Source_Sans_3 as Source_Sans_Pro, Playfair_Display } from "next/font/google"
import "./globals.css"

const sourceSansPro = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-source-sans-pro",
})

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-playfair-display",
})

export const metadata: Metadata = {
  title: "Minha Declaração de Amor ❤️",
  description: "Uma declaração especial para alguém muito especial",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${sourceSansPro.variable} ${playfairDisplay.variable} antialiased`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        {/* Corações decorativos */}
        <div className="heart" style={{top: '10%', left: '5%'}}></div>
        <div className="heart" style={{top: '30%', left: '80%'}}></div>
        <div className="heart" style={{top: '60%', left: '20%'}}></div>
        <div className="heart" style={{top: '80%', left: '70%'}}></div>
        {/* Player de música */}
        <div style={{position: 'fixed', top: 16, right: 16, zIndex: 10, background: '#fff0f6cc', borderRadius: 16, boxShadow: '0 2px 8px #ffb6b933', padding: 8}}>
          <audio controls loop autoPlay style={{width: 220}}>
            <source src="/music/Marshmello%20x%20Lil%20Peep%20-%20Spotlight%20(Official%20Music%20Video).mp3" type="audio/mpeg" />
            Seu navegador não suporta áudio HTML5.
          </audio>
        </div>
        {/* Frase romântica de destaque */}
        <div style={{textAlign: 'center', marginTop: 32, marginBottom: 32, position: 'relative', zIndex: 1}}>
          <h1 style={{fontFamily: 'Dancing Script, cursive', fontSize: 48, color: '#b91372', textShadow: '0 2px 8px #fff0f6'}}>O amor está no ar! 💖</h1>
          <p style={{fontSize: 20, color: '#b91372', opacity: 0.8}}>Cada momento juntos é um novo capítulo da nossa história.</p>
        </div>
        {children}
      </body>
    </html>
  )
}
