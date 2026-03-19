'use client'

import { motion } from 'framer-motion'
import { SectionWrapper, SectionHeading } from './SectionWrapper'

const highlights = [
  { stat: '12+', label: 'Festivals in 2025' },
  { stat: '∞',  label: 'Hours of Ceremony' },
  { stat: '4+',  label: 'Live Instruments'   },
]

const sharedStages = ['Liquid Bloom', 'David Starfire', 'Akriza']

export function EcstaticDanceSection() {
  return (
    <SectionWrapper id="ecstatic-dance">
      {/* Section glow — violet side */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 30% 60%, rgba(123,79,168,0.07) 0%, transparent 70%)' }} />

      <div className="relative max-w-4xl mx-auto">
        <SectionHeading eyebrow="Ecstatic Dance & Festival Sets" title="Sonic Dance Ceremony" />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: text */}
          <div>
            <p className="text-base sm:text-lg leading-relaxed mb-6"
              style={{ color: 'rgba(232,223,245,0.75)', fontFamily: 'Cormorant Garamond, serif' }}>
              Exologik weaves conscious global bass, organic tribal house, and downtempo into live
              ceremonial dance journeys. Each set layers handpan, flute, charango, and voice over
              meticulously crafted production — bridging ancient sound and modern bass culture.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(232,223,245,0.60)', fontFamily: 'Cormorant Garamond, serif' }}>
              Born from a pivotal winter solstice 2023 experience, Exologik debuted across 12+
              festivals in 2025, sharing stages with some of the genre&rsquo;s most respected voices.
            </p>

            {/* Shared stages */}
            <div className="mb-8">
              <p className="mb-3 text-xs uppercase tracking-[0.24em]"
                style={{ color: '#4a7fa8', fontFamily: 'Cinzel, serif' }}>
                Shared Stages With
              </p>
              <div className="flex flex-wrap gap-2">
                {sharedStages.map(name => (
                  <span
                    key={name}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      background: 'rgba(123,79,168,0.15)',
                      border: '1px solid rgba(192,132,252,0.25)',
                      color: '#c084fc',
                      fontFamily: 'Cormorant Garamond, serif',
                      fontStyle: 'italic',
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* Book CTA */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf68m_sjy8yrcOzamk_vD01vrU8edS8zwkHK2ORzU96axC7bw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg text-sm uppercase tracking-widest transition-all duration-400 hover:border-opacity-80"
              style={{
                background: 'linear-gradient(135deg, rgba(123,79,168,0.20), rgba(74,127,168,0.20))',
                border: '1px solid rgba(192,132,252,0.40)',
                color: '#c084fc',
                fontFamily: 'Cinzel, serif',
                letterSpacing: '0.14em',
              }}
            >
              Book for Your Festival
            </a>
          </div>

          {/* Right: stats + instruments */}
          <div className="flex flex-col gap-6">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {highlights.map(h => (
                <div
                  key={h.stat}
                  className="flex flex-col items-center py-5 rounded-xl"
                  style={{
                    background: 'rgba(13,8,32,0.65)',
                    border: '1px solid rgba(74,127,168,0.18)',
                  }}
                >
                  <span
                    className="text-3xl sm:text-4xl font-light mb-1"
                    style={{ color: '#6db3d4', fontFamily: 'Cinzel, serif' }}
                  >
                    {h.stat}
                  </span>
                  <span
                    className="text-xs text-center leading-tight"
                    style={{ color: 'rgba(232,223,245,0.5)', fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {h.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Live instruments card */}
            <div
              className="p-6 rounded-xl"
              style={{
                background: 'rgba(13,8,32,0.65)',
                border: '1px solid rgba(74,127,168,0.18)',
              }}
            >
              <p className="mb-4 text-xs uppercase tracking-[0.24em]"
                style={{ color: '#4a7fa8', fontFamily: 'Cinzel, serif' }}>
                Live Instruments
              </p>
              <div className="flex flex-wrap gap-2">
                {['Handpan', 'Flute', 'Charango', 'Voice'].map(inst => (
                  <span
                    key={inst}
                    className="px-3 py-1.5 rounded-lg text-sm italic"
                    style={{
                      background: 'rgba(74,127,168,0.12)',
                      border: '1px solid rgba(74,127,168,0.22)',
                      color: '#6db3d4',
                      fontFamily: 'Cormorant Garamond, serif',
                    }}
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>

            {/* Based in */}
            <p className="text-sm italic text-right"
              style={{ color: 'rgba(232,223,245,0.35)', fontFamily: 'Cormorant Garamond, serif' }}>
              Based in Flagstaff, AZ
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
