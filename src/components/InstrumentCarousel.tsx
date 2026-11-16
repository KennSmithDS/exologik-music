'use client'

// Instrument carousel — slow crossfading portraits of the live instruments.
// Photos sourced from the Exologik EPK 2027 press photo folder.
// NOTE: auto-advancing component — exclude from the screenshot loop's diffing.

import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

type Slide = {
  src: string
  instrument: string
  alt: string
  position?: string
}

const SLIDES: Slide[] = [
  { src: '/photos/handpan-closeup.jpg', instrument: 'Handpan',  alt: 'Handpan in the foreground at dusk with Exologik behind the microphone', position: '50% 70%' },
  { src: '/photos/handpan-live.jpg',    instrument: 'Handpan',  alt: 'Exologik playing handpan on stage in a black poncho and straw hat' },
  { src: '/photos/flute-live.jpg',      instrument: 'Flute',    alt: 'Exologik playing a wooden flute on stage behind a colorful tapestry', position: '50% 30%' },
  { src: '/photos/flute-sedona.jpg',    instrument: 'Flute',    alt: 'Exologik playing flute above the red rock valley of Sedona', position: '20% 70%' },
  { src: '/photos/charango-live.jpg',   instrument: 'Charango', alt: 'Exologik playing charango into a microphone on stage' },
  { src: '/photos/charango-creek.jpg',  instrument: 'Charango', alt: 'A charango held out over a flowing creek' },
  { src: '/photos/voice-dusk.jpg',      instrument: 'Voice',    alt: 'Exologik speaking into a microphone against a stormy dusk sky', position: '50% 40%' },
  { src: '/photos/decks.jpg',           instrument: 'Decks',    alt: 'Exologik mixing on DJ decks under violet light', position: '50% 35%' },
]

const INSTRUMENTS = Array.from(new Set(SLIDES.map(s => s.instrument)))
const INTERVAL_MS = 6000
const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

export function InstrumentCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduceMotion = useReducedMotion()

  const go = useCallback((next: number) => {
    setIndex((next + SLIDES.length) % SLIDES.length)
  }, [])

  useEffect(() => {
    if (paused || reduceMotion) return
    const id = setTimeout(() => go(index + 1), INTERVAL_MS)
    return () => clearTimeout(id)
  }, [index, paused, reduceMotion, go])

  const current = SLIDES[index]

  return (
    <div
      className="flex flex-col gap-4"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Frame */}
      <div
        className="relative w-full overflow-hidden rounded-2xl"
        style={{
          aspectRatio: '4 / 5',
          background: '#0d0820',
          border: '1px solid rgba(74,127,168,0.22)',
          boxShadow: '0 0 70px rgba(74,127,168,0.22), 0 0 28px rgba(123,79,168,0.18)',
        }}
        role="region"
        aria-roledescription="carousel"
        aria-label="Live instruments"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={current.src}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease }}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="(min-width: 768px) 420px, 92vw"
              className="object-cover"
              style={{ objectPosition: current.position ?? '50% 50%' }}
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Cosmic tint so daylight shots sit inside the palette */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(to top, rgba(5,3,15,0.92) 0%, rgba(5,3,15,0.25) 38%, transparent 60%), radial-gradient(ellipse at 50% 0%, rgba(123,79,168,0.18), transparent 60%)',
            mixBlendMode: 'normal',
          }}
        />

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 flex items-end justify-between gap-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={current.instrument + index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.8, ease }}
              className="uppercase"
              style={{ color: '#e8dff5', fontFamily: 'Cinzel, serif', letterSpacing: '0.24em', fontSize: '0.95rem' }}
              aria-live="polite"
            >
              {current.instrument}
            </motion.p>
          </AnimatePresence>
          <span
            className="text-xs tabular-nums"
            style={{ color: 'rgba(232,223,245,0.55)', fontFamily: 'Cinzel, serif', letterSpacing: '0.12em' }}
          >
            {String(index + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
          </span>
        </div>

        {/* Arrows */}
        {[
          { dir: -1, label: 'Previous photo', glyph: '←', side: 'left-3' },
          { dir: 1, label: 'Next photo', glyph: '→', side: 'right-3' },
        ].map(a => (
          <button
            key={a.label}
            onClick={() => go(index + a.dir)}
            aria-label={a.label}
            className={`absolute top-1/2 -translate-y-1/2 ${a.side} w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105`}
            style={{
              background: 'rgba(5,3,15,0.55)',
              border: '1px solid rgba(109,179,212,0.35)',
              color: '#6db3d4',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            {a.glyph}
          </button>
        ))}
      </div>

      {/* Instrument chips — jump to that instrument */}
      <div className="flex flex-wrap gap-2 justify-center">
        {INSTRUMENTS.map(inst => {
          const active = current.instrument === inst
          return (
            <button
              key={inst}
              onClick={() => go(SLIDES.findIndex(s => s.instrument === inst))}
              aria-pressed={active}
              className="px-3 py-1.5 rounded-lg text-sm italic transition-all duration-500"
              style={{
                background: active ? 'rgba(123,79,168,0.28)' : 'rgba(74,127,168,0.10)',
                border: `1px solid ${active ? 'rgba(192,132,252,0.55)' : 'rgba(74,127,168,0.22)'}`,
                color: active ? '#f0d6f5' : '#6db3d4',
                fontFamily: 'Cormorant Garamond, serif',
              }}
            >
              {inst}
            </button>
          )
        })}
      </div>
    </div>
  )
}
