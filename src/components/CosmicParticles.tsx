'use client'

import { useEffect, useRef } from 'react'

// Slow meditative starfield — canvas-based, disabled in screenshot loop
// Per CLAUDE.md: disable screenshot loop for canvas animations

interface Particle {
  x: number
  y: number
  radius: number
  alpha: number
  alphaDir: number
  speed: number
  vx: number
  vy: number
  color: string
}

const COLORS = [
  'rgba(74, 127, 168,',   // steel-blue
  'rgba(109, 179, 212,',  // ice-blue
  'rgba(123, 79, 168,',   // cosmic-violet
  'rgba(192, 132, 252,',  // lighter violet
  'rgba(240, 168, 216,',  // lotus-pink (rare)
]

export function CosmicParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId: number
    let particles: Particle[] = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const initParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 8000)
      particles = Array.from({ length: count }, () => {
        const colorBase = COLORS[Math.floor(Math.random() * COLORS.length)]
        const angle = Math.random() * Math.PI * 2
        const speed = 0.05 + Math.random() * 0.15
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 0.4 + Math.random() * 1.4,
          alpha: Math.random(),
          alphaDir: Math.random() > 0.5 ? 0.002 : -0.002,
          speed,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: colorBase,
        }
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles) {
        // Drift
        p.x += p.vx
        p.y += p.vy

        // Wrap edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Twinkle
        p.alpha += p.alphaDir
        if (p.alpha <= 0.05 || p.alpha >= 0.9) p.alphaDir *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `${p.color}${p.alpha.toFixed(2)})`
        ctx.fill()
      }

      rafId = requestAnimationFrame(draw)
    }

    resize()
    initParticles()
    draw()

    window.addEventListener('resize', () => {
      resize()
      initParticles()
    })

    return () => {
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
