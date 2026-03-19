'use client'

// Three-tier music section per CLAUDE.md spec
// Tier 1: Spotify (released), Tier 2: Bandcamp (direct support), Tier 3: SoundCloud (live)

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper, SectionHeading } from './SectionWrapper'

const TABS = [
  { id: 'spotify',   label: 'Stream',        eyebrow: 'Released Work'     },
  { id: 'bandcamp',  label: 'Support',        eyebrow: 'Direct Support'    },
  { id: 'soundcloud',label: 'Live',           eyebrow: 'Live & Unreleased' },
] as const

type TabId = typeof TABS[number]['id']

function SpotifyTier() {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-center max-w-lg text-base sm:text-lg italic"
        style={{ color: 'rgba(232,223,245,0.70)', fontFamily: 'Cormorant Garamond, serif' }}>
        Stream <em>Reincarnation</em> everywhere — conscious global bass meets organic tribal house.
      </p>
      <div className="w-full max-w-xl rounded-xl overflow-hidden" style={{ background: 'rgba(13,8,32,0.6)', border: '1px solid rgba(74,127,168,0.2)' }}>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src="https://open.spotify.com/embed/artist/58aevQpxVtabvVwIqy6XqI?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
      <a
        href="https://open.spotify.com/artist/58aevQpxVtabvVwIqy6XqI"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm uppercase tracking-widest transition-colors duration-300 hover:text-white"
        style={{ color: '#6db3d4', fontFamily: 'Cinzel, serif' }}
      >
        Open on Spotify →
      </a>
    </div>
  )
}

function BandcampTier() {
  const links = [
    {
      label: 'Exologik on Bandcamp',
      sublabel: 'Artist-direct — includes standalone singles',
      href: 'https://exologik.bandcamp.com',
      accent: '#6db3d4',
    },
    {
      label: 'Reincarnation — Full Album',
      sublabel: 'Via High Vibe Records',
      href: 'https://highviberecords.bandcamp.com/album/reincarnation',
      accent: '#c084fc',
    },
  ]

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-center max-w-lg text-base sm:text-lg italic"
        style={{ color: 'rgba(232,223,245,0.70)', fontFamily: 'Cormorant Garamond, serif' }}>
        Support the artist directly — every purchase goes straight to the source.
      </p>
      <div className="w-full max-w-xl flex flex-col gap-4">
        {links.map(l => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-6 py-5 rounded-xl transition-all duration-400"
            style={{
              background: 'rgba(13,8,32,0.65)',
              border: `1px solid rgba(74,127,168,0.22)`,
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${l.accent}55` }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(74,127,168,0.22)' }}
          >
            <div>
              <p className="font-normal mb-0.5" style={{ color: l.accent, fontFamily: 'Cinzel, serif', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                {l.label}
              </p>
              <p className="text-sm italic" style={{ color: 'rgba(232,223,245,0.5)', fontFamily: 'Cormorant Garamond, serif' }}>
                {l.sublabel}
              </p>
            </div>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1" style={{ color: l.accent }}>→</span>
          </a>
        ))}
      </div>
    </div>
  )
}

function SoundCloudTier() {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-center max-w-lg text-base sm:text-lg italic"
        style={{ color: 'rgba(232,223,245,0.70)', fontFamily: 'Cormorant Garamond, serif' }}>
        Live sets &amp; unreleased explorations — raw ceremony captured in the moment.
      </p>
      <div className="w-full max-w-xl rounded-xl overflow-hidden" style={{ border: '1px solid rgba(123,79,168,0.25)' }}>
        <iframe
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2204387935&color=%23a8709c&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          loading="lazy"
        />
      </div>
      <p className="text-xs uppercase tracking-widest" style={{ color: 'rgba(232,223,245,0.4)', fontFamily: 'Cinzel, serif' }}>
        Southwest Flow Fest · 9.20.2025
      </p>
      <a
        href="https://soundcloud.com/exologik"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm uppercase tracking-widest transition-colors duration-300 hover:text-white"
        style={{ color: '#c084fc', fontFamily: 'Cinzel, serif' }}
      >
        Full SoundCloud Profile →
      </a>
    </div>
  )
}

export function MusicSection() {
  const [active, setActive] = useState<TabId>('spotify')

  const content: Record<TabId, JSX.Element> = {
    spotify: <SpotifyTier />,
    bandcamp: <BandcampTier />,
    soundcloud: <SoundCloudTier />,
  }

  return (
    <SectionWrapper id="music">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(74,127,168,0.06) 0%, transparent 70%)' }} />

      <div className="relative max-w-2xl mx-auto">
        <SectionHeading eyebrow="Music" title="The Sound" />

        {/* Tab selector */}
        <div className="flex justify-center mb-10">
          <div
            className="flex rounded-full p-1 gap-1"
            style={{ background: 'rgba(13,8,32,0.7)', border: '1px solid rgba(74,127,168,0.2)' }}
          >
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="relative px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-colors duration-300"
                style={{
                  fontFamily: 'Cinzel, serif',
                  color: active === tab.id ? '#e8dff5' : 'rgba(232,223,245,0.4)',
                }}
              >
                {active === tab.id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'linear-gradient(135deg, rgba(74,127,168,0.35), rgba(123,79,168,0.35))' }}
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab eyebrow */}
        <p className="text-center text-xs uppercase tracking-[0.28em] mb-8"
          style={{ color: 'rgba(109,179,212,0.6)', fontFamily: 'Cinzel, serif' }}>
          {TABS.find(t => t.id === active)?.eyebrow}
        </p>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {content[active]}
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  )
}
