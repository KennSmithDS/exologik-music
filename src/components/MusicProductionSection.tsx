'use client'

// Music Production section — released work, production style, album feature

import { SectionWrapper, SectionHeading } from './SectionWrapper'
import Image from 'next/image'

const genres = ['Conscious Global Bass', 'Organic Tribal House', 'Downtempo']

const platforms = [
  { name: 'Spotify',   href: 'https://open.spotify.com/artist/58aevQpxVtabvVwIqy6XqI',   color: '#6db3d4' },
  { name: 'Bandcamp',  href: 'https://exologik.bandcamp.com',                              color: '#c084fc' },
  { name: 'YouTube',   href: 'https://www.youtube.com/@ExologikMusic',                     color: '#f0a8d8' },
]

export function MusicProductionSection() {
  return (
    <SectionWrapper id="production">
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 70% 40%, rgba(74,127,168,0.07) 0%, transparent 70%)' }} />

      <div className="relative max-w-4xl mx-auto">
        <SectionHeading eyebrow="Music Production" title="The Studio" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Album art */}
          <div className="flex justify-center">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: '0 0 80px rgba(74,127,168,0.30), 0 0 30px rgba(123,79,168,0.20)',
                border: '1px solid rgba(74,127,168,0.25)',
              }}
            >
              <Image
                src="/brand/reincarnation-album.png"
                alt="Reincarnation — Exologik debut album, High Vibe Records 2025"
                width={360}
                height={360}
                className="w-full max-w-[320px] sm:max-w-[360px] h-auto block"
              />
              {/* Album overlay label */}
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3"
                style={{ background: 'linear-gradient(to top, rgba(5,3,15,0.92), transparent)' }}
              >
                <p className="text-xs uppercase tracking-widest mb-0.5"
                  style={{ color: '#6db3d4', fontFamily: 'Cinzel, serif' }}>
                  Reincarnation
                </p>
                <p className="text-xs italic"
                  style={{ color: 'rgba(232,223,245,0.5)', fontFamily: 'Cormorant Garamond, serif' }}>
                  High Vibe Records · February 2025
                </p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-base sm:text-lg leading-relaxed mb-5"
              style={{ color: 'rgba(232,223,245,0.75)', fontFamily: 'Cormorant Garamond, serif' }}>
              <em>Reincarnation</em> — Exologik&rsquo;s debut full-length — blends live handpan, flute,
              charango, and voice into meticulously produced landscapes. Rooted in the winter solstice
              experience of 2023, it channels transformation into waveform.
            </p>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-6">
              {genres.map(g => (
                <span
                  key={g}
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    background: 'rgba(74,127,168,0.12)',
                    border: '1px solid rgba(74,127,168,0.25)',
                    color: '#6db3d4',
                    fontFamily: 'Cinzel, serif',
                    letterSpacing: '0.06em',
                  }}
                >
                  {g}
                </span>
              ))}
            </div>

            {/* Platform links */}
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-[0.24em] mb-1"
                style={{ color: '#4a7fa8', fontFamily: 'Cinzel, serif' }}>
                Listen On
              </p>
              {platforms.map(p => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm transition-colors duration-300"
                  style={{ color: p.color, fontFamily: 'Cinzel, serif', letterSpacing: '0.10em' }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: p.color, boxShadow: `0 0 6px ${p.color}` }}
                  />
                  {p.name}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
