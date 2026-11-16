'use client'

// The Sound — album story up top, tabbed player below
// Tabs: Support (Bandcamp) | Stream (Spotify) | Live (SoundCloud playlist)

import { useState, type ReactElement } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionWrapper, SectionHeading } from './SectionWrapper'
import { ReleaseFeature } from './ReleaseFeature'
import { YouTubeFeature } from './YouTubeFeature'

const BAILE_URL = 'https://resueno.bandcamp.com/track/exologik-khem-reyall-baile-de-alkemia-ft-dto'
const REINCARNATION_URL = 'https://exologik.bandcamp.com/album/reincarnation'

const TABS = [
  { id: 'bandcamp',   label: 'Support',  eyebrow: 'Direct Support'    },
  { id: 'spotify',    label: 'Stream',   eyebrow: 'Released Work'     },
  { id: 'soundcloud', label: 'Live',     eyebrow: 'Live Sets'         },
] as const

type TabId = typeof TABS[number]['id']

function BandcampTier() {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-center max-w-lg text-base sm:text-lg italic"
        style={{ color: 'rgba(242,228,200,0.70)', fontFamily: 'Cormorant Garamond, serif' }}>
        Support the artist directly — every purchase goes straight to the source.
      </p>
      <div className="w-full max-w-xl flex flex-col gap-4">
        {[
          {
            label: 'Baile de Alkemia',
            sublabel: 'Exologik & Khem Reyall ft. DTO — new on Resueño',
            href: BAILE_URL,
            accent: '#f5b38a',
            badge: 'New Release',
          },
          {
            label: 'Reincarnation — Full Album',
            sublabel: 'The debut album — buy the full record directly from Exologik',
            href: REINCARNATION_URL,
            accent: '#f0a05a',
          },
          {
            label: 'Exologik on Bandcamp',
            sublabel: 'Browse every release and follow for new drops',
            href: 'https://exologik.bandcamp.com',
            accent: '#e6c27a',
          },
        ].map(l => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-6 py-5 rounded-xl transition-all duration-300"
            style={{ background: 'rgba(34,21,15,0.65)', border: '1px solid rgba(201,138,75,0.20)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = `${l.accent}55` }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,138,75,0.20)' }}
          >
            <div>
              {'badge' in l && l.badge && (
                <span className="inline-block mb-1.5 px-2 py-0.5 rounded-full uppercase"
                  style={{
                    fontFamily: 'Cinzel, serif',
                    fontSize: '0.6rem',
                    letterSpacing: '0.18em',
                    color: '#f5b38a',
                    background: 'rgba(245,179,138,0.10)',
                    border: '1px solid rgba(245,179,138,0.35)',
                  }}>
                  {l.badge}
                </span>
              )}
              <p className="font-normal mb-0.5"
                style={{ color: l.accent, fontFamily: 'Cinzel, serif', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                {l.label}
              </p>
              <p className="text-sm italic"
                style={{ color: 'rgba(242,228,200,0.60)', fontFamily: 'Cormorant Garamond, serif' }}>
                {l.sublabel}
              </p>
            </div>
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1"
              style={{ color: l.accent }}>→</span>
          </a>
        ))}
      </div>
    </div>
  )
}

function SpotifyTier() {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-center max-w-lg text-base sm:text-lg italic"
        style={{ color: 'rgba(242,228,200,0.70)', fontFamily: 'Cormorant Garamond, serif' }}>
        Stream <em>Reincarnation</em> everywhere — conscious global bass and downtempo.
      </p>
      <div className="w-full max-w-xl rounded-xl overflow-hidden"
        style={{ background: 'rgba(34,21,15,0.6)', border: '1px solid rgba(201,138,75,0.18)' }}>
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px', display: 'block' }}
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
        style={{ color: '#e6c27a', fontFamily: 'Cinzel, serif' }}
      >
        Open on Spotify →
      </a>
    </div>
  )
}

function SoundCloudTier() {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-center max-w-lg text-base sm:text-lg italic"
        style={{ color: 'rgba(242,228,200,0.70)', fontFamily: 'Cormorant Garamond, serif' }}>
        Raw ceremony captured in the moment — live sets from festivals and ecstatic dance events.
      </p>
      <div className="w-full max-w-xl rounded-xl overflow-hidden"
        style={{ border: '1px solid rgba(184,84,46,0.25)' }}>
        <iframe
          width="100%"
          height="450"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1925162471&color=%23f0a05a&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
          loading="lazy"
        />
      </div>
      <a
        href="https://soundcloud.com/exologik/sets/live-sets"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm uppercase tracking-widest transition-colors duration-300 hover:text-white"
        style={{ color: '#f0a05a', fontFamily: 'Cinzel, serif' }}
      >
        Full Live Sets Playlist →
      </a>

      <div className="w-full max-w-xl mt-6 pt-10 flex flex-col items-center gap-6"
        style={{ borderTop: '1px solid rgba(184,84,46,0.18)' }}>
        <p className="text-center text-xs uppercase tracking-[0.28em]"
          style={{ color: 'rgba(230,194,122,0.6)', fontFamily: 'Cinzel, serif' }}>
          On Video
        </p>
        <YouTubeFeature
          videoId="R3_KIXIShyo"
          title="Random Rab Downtempo Journey at HumanKind — Opening Set with Exologik, 10.9.2026"
          caption="Opening for Random Rab — Downtempo Journey at HumanKind Center, Sedona · October 2026"
        />
        <a
          href="https://www.youtube.com/@ExologikMusic"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm uppercase tracking-widest transition-colors duration-300 hover:text-white"
          style={{ color: '#f0a05a', fontFamily: 'Cinzel, serif' }}
        >
          Exologik on YouTube →
        </a>
      </div>
    </div>
  )
}

export function MusicSection() {
  const [active, setActive] = useState<TabId>('bandcamp')

  const content: Record<TabId, ReactElement> = {
    bandcamp:   <BandcampTier />,
    spotify:    <SpotifyTier />,
    soundcloud: <SoundCloudTier />,
  }

  return (
    <SectionWrapper id="music">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 30%, rgba(201,138,75,0.06) 0%, transparent 70%)' }} />

      <div className="relative max-w-3xl mx-auto">
        <SectionHeading eyebrow="Music" title="The Sound" />

        {/* ── Featured releases ── */}
        <div className="flex flex-col gap-16 mb-16">
          <ReleaseFeature
            image="/brand/baile-de-alkemia.jpg"
            alt="Baile de Alkemia cover art — a cacao pod and blossoms on black, Resueño Cacao Dance Vol. VI"
            title="Baile de Alkemia"
            meta="Resueño · Cacao Dance Vol. VI · 2026"
            badge="New Release"
            overlay={false}
            href={BAILE_URL}
            linkLabel="Get the track on Bandcamp →"
            tags={['Tribal House', 'Deep Tribal', 'Slow House', 'Medicine Music']}
          >
            <p className="mb-4">
              <em>Baile de Alkemia</em> — Exologik &amp; Khem Reyall ft. DTO — is a remembrance of the
              Divine Feminine as an initiatory force: not changing him, but mirroring him. Through fire,
              what&rsquo;s hidden comes to light, what&rsquo;s divided returns to union, and intimacy
              becomes alchemy.
            </p>
            <p style={{ color: 'rgba(242,228,200,0.60)' }}>
              It began as a charango melody received in ceremony — and grew, with Khem Reyall&rsquo;s
              lyrics and voice, into a dream come true on Resueño.
            </p>
          </ReleaseFeature>

          <ReleaseFeature
            image="/brand/reincarnation-album.png"
            alt="Reincarnation — Exologik debut album, High Vibe Records 2025"
            title="Reincarnation"
            meta="High Vibe Records · February 2025"
            href={REINCARNATION_URL}
            linkLabel="Get the album on Bandcamp →"
            tags={['Conscious Global Bass', 'Downtempo', 'Future Bass', 'Chillstep']}
          >
            <p>
              <em>Reincarnation</em> — Exologik&rsquo;s debut full-length — weaves live handpan, flute,
              and voice into meticulously crafted soundscapes. Born from a transformative winter
              solstice experience in 2023, it channels ancient resonance into modern form.
            </p>
          </ReleaseFeature>
        </div>

        {/* ── Tabbed player ── */}
        <div className="flex justify-center mb-10">
          <div
            className="flex rounded-full p-1 gap-1"
            style={{ background: 'rgba(34,21,15,0.7)', border: '1px solid rgba(201,138,75,0.2)' }}
          >
            {TABS.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="relative px-5 py-2 rounded-full text-xs uppercase tracking-widest transition-colors duration-300"
                style={{
                  fontFamily: 'Cinzel, serif',
                  color: active === tab.id ? '#f2e4c8' : 'rgba(242,228,200,0.4)',
                }}
              >
                {active === tab.id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'linear-gradient(135deg, rgba(201,138,75,0.35), rgba(184,84,46,0.35))' }}
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
          style={{ color: 'rgba(230,194,122,0.6)', fontFamily: 'Cinzel, serif' }}>
          {TABS.find(t => t.id === active)?.eyebrow}
        </p>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            {content[active]}
          </motion.div>
        </AnimatePresence>
      </div>
    </SectionWrapper>
  )
}
