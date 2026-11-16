'use client'

import { SectionWrapper, SectionHeading } from './SectionWrapper'
import { InstrumentCarousel } from './InstrumentCarousel'

// "Played with" = direct collaborations (featured, B2B, opened for, co-produced).
// "Shared the stage with" = same stage, same event, same night — not just the same festival lineup.
const artistGroups = [
  {
    heading: 'Played With',
    names: ['DTO', 'Sudakra', 'Random Rab', 'SeventhDensity'],
    color: '#f5b38a',
    bg: 'rgba(245,179,138,0.10)',
    border: 'rgba(245,179,138,0.32)',
  },
  {
    heading: 'Shared the Stage With',
    names: ['Liquid Bloom', 'David Starfire', 'Akriza', 'Mah Ze Tar', 'Snow Raven', 'SWAYLO', 'Azlan', 'Earthwave'],
    color: '#f0a05a',
    bg: 'rgba(184,84,46,0.15)',
    border: 'rgba(240,160,90,0.25)',
  },
]

export function EcstaticDanceSection() {
  return (
    <SectionWrapper id="ecstatic-dance">
      {/* Section glow — violet side */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 50% 50% at 30% 60%, rgba(184,84,46,0.07) 0%, transparent 70%)' }} />

      <div className="relative max-w-4xl mx-auto">
        <SectionHeading eyebrow="Ecstatic Dance & Festival Sets" title="Sonic Dance Ceremony" />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: text */}
          <div>
            <p className="text-base sm:text-lg leading-relaxed mb-6"
              style={{ color: 'rgba(242,228,200,0.75)', fontFamily: 'Cormorant Garamond, serif' }}>
              Ancient-future soundscapes where circuitry meets spirit. Exologik blends global bass,
              tribal rhythms, psychedelic textures, and meditative ambience into immersive journeys
              designed to move the body, open the heart, and awaken the inner world — with live
              handpan, flute, and charango woven through every set as he reads the room in real time.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(242,228,200,0.60)', fontFamily: 'Cormorant Garamond, serif' }}>
              Born from a pivotal winter solstice in 2023, Exologik has carried the ceremony to 17+
              festivals — from the Sensory Chamber at Iceland Eclipse to the beach stage at Unison
              Festival and a sunset set at Southwest Flow Festival.
            </p>

            {/* Collaborators & shared stages */}
            <div className="mb-8 flex flex-col gap-6">
              {artistGroups.map(group => (
                <div key={group.heading}>
                  <p className="mb-3 text-xs uppercase tracking-[0.24em]"
                    style={{ color: '#c98a4b', fontFamily: 'Cinzel, serif' }}>
                    {group.heading}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.names.map(name => (
                      <span
                        key={name}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{
                          background: group.bg,
                          border: `1px solid ${group.border}`,
                          color: group.color,
                          fontFamily: 'Cormorant Garamond, serif',
                          fontStyle: 'italic',
                        }}
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Book CTA */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf68m_sjy8yrcOzamk_vD01vrU8edS8zwkHK2ORzU96axC7bw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-lg text-sm uppercase tracking-widest transition-all duration-400 hover:border-opacity-80"
              style={{
                background: 'linear-gradient(135deg, rgba(184,84,46,0.20), rgba(201,138,75,0.20))',
                border: '1px solid rgba(240,160,90,0.40)',
                color: '#f0a05a',
                fontFamily: 'Cinzel, serif',
                letterSpacing: '0.14em',
              }}
            >
              Book for Your Festival
            </a>
          </div>

          {/* Right: instrument carousel */}
          <div className="flex flex-col gap-4">
            <InstrumentCarousel />

            {/* Based in */}
            <p className="text-sm italic text-right"
              style={{ color: 'rgba(242,228,200,0.55)', fontFamily: 'Cormorant Garamond, serif' }}>
              Based in Boulder, CO
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
