'use client'

// Tai Chi / Qi Gong Arts section — movement, embodiment, workshop booking

import Image from 'next/image'
import { SectionWrapper, SectionHeading } from './SectionWrapper'

const principles = [
  {
    title: 'Tai Chi Principles',
    body: 'Slow, intentional movement cultivating internal energy (qi) through form and flow. Ancient lineage brought into contemporary embodiment practice.',
    accent: '#e6c27a',
  },
  {
    title: 'Qi Gong Practice',
    body: 'Breath-synchronized movement and stillness to harmonize body, breath, and mind. Accessible for all levels — from morning cultivation to deep ceremonial space.',
    accent: '#f0a05a',
  },
  {
    title: 'Sound & Movement',
    body: 'Exologik uniquely bridges sonic ceremony with Qi Arts — music crafted to support and deepen embodied movement practice.',
    accent: '#f5b38a',
  },
]

export function TaiChiSection() {
  return (
    <SectionWrapper id="taichi" className="overflow-hidden">
      {/* Glow — dusk peach */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 50% 80%, rgba(245,179,138,0.05) 0%, transparent 70%)' }} />

      {/* Tai chi in the ponderosa pines — dissolves into the page on the right, facing into the text
          (phones: faded banner behind the heading). Mirrors the Live Performances portrait. */}
      <div
        className="absolute top-0 right-0 lg:-right-[8%] w-full h-[560px] lg:w-[50%] lg:h-[1000px] pointer-events-none select-none fade-portrait-side-right"
        aria-hidden="true"
      >
        <Image
          src="/photos/taichi-pines.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover opacity-25 lg:opacity-[0.42]"
          style={{ objectPosition: '45% 25%' }}
        />
      </div>

      {/* Horizontal divider */}
      <div className="relative max-w-4xl mx-auto mb-16">
        <div className="w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(201,138,75,0.3), transparent)' }} />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <SectionHeading eyebrow="Tai Chi & Qi Arts" title="The Moving Meditation" />

        <div className="lg:max-w-[54%] mb-14">
          <p className="text-center lg:text-left text-base sm:text-lg italic leading-relaxed mb-8"
            style={{ color: 'rgba(242,228,200,0.70)', fontFamily: 'Cormorant Garamond, serif' }}>
            Where ancient martial arts philosophy meets conscious sound — Exologik offers Qi Arts
            workshops that weave Tai Chi, Qi Gong, and ceremonial music into a unified practice.
          </p>

          {/* Principle cards */}
          <div className="flex flex-col gap-4">
            {principles.map(p => (
              <div
                key={p.title}
                className="px-6 py-5 rounded-xl backdrop-blur-[2px]"
                style={{
                  background: 'rgba(34,21,15,0.66)',
                  border: `1px solid rgba(201,138,75,0.18)`,
                }}
              >
                <div className="w-8 h-px mb-3" style={{ background: p.accent }} />
                <h3
                  className="mb-2 text-sm uppercase tracking-wide"
                  style={{ color: p.accent, fontFamily: 'Cinzel, serif', letterSpacing: '0.12em' }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'rgba(242,228,200,0.65)', fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Workshop booking CTA */}
        <div className="text-center">
          <p className="mb-4 text-sm"
            style={{ color: 'rgba(242,228,200,0.50)', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}>
            Available for Ecstatic Dance, Festival, and Qi Arts Workshop bookings
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf68m_sjy8yrcOzamk_vD01vrU8edS8zwkHK2ORzU96axC7bw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg text-sm uppercase tracking-widest transition-all duration-400"
            style={{
              background: 'linear-gradient(135deg, rgba(201,138,75,0.18), rgba(184,84,46,0.18))',
              border: '1px solid rgba(245,179,138,0.30)',
              color: '#f5b38a',
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
