'use client'

// Tai Chi / Qi Gong Arts section — movement, embodiment, workshop booking

import { SectionWrapper, SectionHeading } from './SectionWrapper'

const principles = [
  {
    title: 'Tai Chi Principles',
    body: 'Slow, intentional movement cultivating internal energy (qi) through form and flow. Ancient lineage brought into contemporary embodiment practice.',
    accent: '#6db3d4',
  },
  {
    title: 'Qi Gong Practice',
    body: 'Breath-synchronized movement and stillness to harmonize body, breath, and mind. Accessible for all levels — from morning cultivation to deep ceremonial space.',
    accent: '#c084fc',
  },
  {
    title: 'Sound & Movement',
    body: 'Exologik uniquely bridges sonic ceremony with Qi Arts — music crafted to support and deepen embodied movement practice.',
    accent: '#f0a8d8',
  },
]

export function TaiChiSection() {
  return (
    <SectionWrapper id="taichi">
      {/* Glow — pink-violet */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 80%, rgba(240,168,216,0.05) 0%, transparent 70%)' }} />

      {/* Horizontal divider */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(74,127,168,0.3), transparent)' }} />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <SectionHeading eyebrow="Tai Chi & Qi Arts" title="The Moving Meditation" />

        <p className="text-center max-w-xl mx-auto text-base sm:text-lg italic leading-relaxed mb-14"
          style={{ color: 'rgba(232,223,245,0.65)', fontFamily: 'Cormorant Garamond, serif' }}>
          Where ancient martial arts philosophy meets conscious sound — Exologik offers Qi Arts
          workshops that weave Tai Chi, Qi Gong, and ceremonial music into a unified practice.
        </p>

        {/* Principle cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {principles.map(p => (
            <div
              key={p.title}
              className="p-6 rounded-xl"
              style={{
                background: 'rgba(13,8,32,0.60)',
                border: `1px solid rgba(74,127,168,0.18)`,
              }}
            >
              <div className="w-8 h-px mb-4" style={{ background: p.accent }} />
              <h3
                className="mb-3 text-sm uppercase tracking-wide"
                style={{ color: p.accent, fontFamily: 'Cinzel, serif', letterSpacing: '0.12em' }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(232,223,245,0.60)', fontFamily: 'Cormorant Garamond, serif' }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Workshop booking CTA */}
        <div className="text-center">
          <p className="mb-4 text-sm"
            style={{ color: 'rgba(232,223,245,0.50)', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>
            Available for Ecstatic Dance, Festival, and Qi Arts Workshop bookings
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf68m_sjy8yrcOzamk_vD01vrU8edS8zwkHK2ORzU96axC7bw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg text-sm uppercase tracking-widest transition-all duration-400"
            style={{
              background: 'linear-gradient(135deg, rgba(74,127,168,0.18), rgba(123,79,168,0.18))',
              border: '1px solid rgba(240,168,216,0.30)',
              color: '#f0a8d8',
              fontFamily: 'Cinzel, serif',
              letterSpacing: '0.14em',
            }}
          >
            Book a Qi Arts Workshop
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
