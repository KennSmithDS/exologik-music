'use client'

// Live Performances section — upcoming + scrollable past shows log
import Image from 'next/image'
import { SectionWrapper, SectionHeading } from './SectionWrapper'

type Show = { date: string; event: string; venue?: string; location?: string; note?: string }

const UPCOMING: Show[] = [
  { date: 'December 4, 2026',  event: 'Art Basel Weekend',              note: 'Sharing the stage with Wildtide',        location: 'Boulder, CO' },
  { date: 'December 12, 2026', event: 'Resonance: Chrysalis',           note: 'Sharing the stage with Arboreal & TUFA', venue: 'HumanKind Center', location: 'Sedona, AZ' },
]

const PAST: Show[] = [
  { date: 'Oct 9, 2026',   event: 'Downtempo Journey',            note: 'Opening for Random Rab',       venue: 'HumanKind Center',     location: 'Sedona, AZ' },
  { date: 'Oct 8, 2026',   event: 'Posse Ecstatic Dance',         venue: 'Posse Grounds Park',   location: 'Sedona, AZ' },
  { date: 'Jan – Oct 2026', event: 'Wub Wednesday',                note: 'Resident DJ',                  venue: 'Yucca North → Monte Vista Cocktail Lounge', location: 'Flagstaff, AZ' },
  { date: 'Sep 18, 2026',  event: 'Southwest Flow Festival',      note: 'Sunset set',                   venue: 'Gateway Ranch',        location: 'Flagstaff, AZ' },
  { date: 'Sep 12, 2026',  event: 'Unison Festival',              note: 'Featured performance with DTO on the beach stage', venue: 'Tico Time Resort', location: 'Aztec, NM' },
  { date: 'Sep 5, 2026',   event: 'Una Familia Sanctuary',        note: 'B2B with Sudakra', location: 'Taos, NM' },
  { date: 'Aug 14, 2026',  event: 'Iceland Eclipse',              note: 'Sensory Chamber pop-up stage', location: 'Hellissandur, Iceland' },
  { date: 'Jun 13, 2026',  event: 'June Jam',                     note: '3-hour set',                   venue: 'Playa Ponderosa',      location: 'Flagstaff, AZ' },
  { date: 'May 21, 2026',  event: 'Posse Ecstatic Dance',         venue: 'Posse Grounds Park',   location: 'Sedona, AZ' },
  { date: 'May 1, 2026',   event: 'The Mosaic Gathering',         venue: 'Gateway Ranch',        location: 'Flagstaff, AZ' },
  { date: 'Mar 28, 2026',  event: 'Mosaic Preparty',              venue: 'Monte Vista Cocktail Lounge',   location: 'Flagstaff, AZ' },
  { date: 'Feb 19, 2026',  event: 'Posse Ecstatic Dance',         venue: 'Posse Grounds Park',   location: 'Sedona, AZ' },
  { date: 'Jan 23, 2026',  event: 'Gem & Jam DJ Competition',     venue: "Gentle Ben's",         location: 'Tucson, AZ' },
  { date: 'Jan 15, 2026',  event: 'Posse Ecstatic Dance',         venue: 'Posse Grounds Park',   location: 'Sedona, AZ' },
  { date: 'Dec 31, 2025',  event: "New Year's Eve Opener",        venue: 'HumanKind Center',     location: 'Sedona, AZ' },
  { date: 'Nov 23, 2025',  event: 'Ecstatic Harmony',             venue: 'Harmony Village',      location: 'Tucson, AZ' },
  { date: 'Sep 19, 2025',  event: 'Southwest Flow Festival',      venue: 'Gateway Ranch',        location: 'Flagstaff, AZ' },
  { date: 'Aug 9, 2025',   event: 'Create Infinite Elements',     venue: 'Catoosa Event Center', location: 'Catoosa, TN' },
  { date: 'Aug 1, 2025',   event: 'Vibe Fest',                    venue: 'Hudson Valley Resort', location: 'New York, NY' },
  { date: 'Jul 20, 2025',  event: 'RE:Vibe Coconino Afterparty',  venue: 'HumanKind Center',     location: 'Sedona, AZ' },
  { date: 'Jul 15, 2025',  event: 'Opener for Sudakra',           venue: 'HumanKind Center',     location: 'Sedona, AZ' },
  { date: 'Jun 19, 2025',  event: 'Portal Takeover',              venue: 'Meow Wolf',            location: 'Denver, CO' },
  { date: 'Apr 5, 2025',   event: 'Opener for Akal Dub',          venue: 'Yucca North',          location: 'Flagstaff, AZ' },
  { date: 'Mar 15, 2025',  event: 'Grizzly Get Down',             venue: 'Yucca North',          location: 'Flagstaff, AZ' },
  { date: 'Feb 16, 2025',  event: 'Aquarian Visions',             venue: 'Harmony Village',      location: 'Flagstaff, AZ' },
  { date: 'Dec 14, 2024',  event: 'Woodland Wobble',              venue: 'Yucca North',          location: 'Flagstaff, AZ' },
]

const place = (s: Show) => [s.venue, s.location].filter(Boolean).join(' · ')

export function ShowsSection() {
  return (
    <SectionWrapper id="shows">
      {/* Glow — steel blue */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 55% 45% at 50% 20%, rgba(201,138,75,0.06) 0%, transparent 70%)' }}
      />

      {/* Seated live portrait — dissolves into the page behind the heading and upcoming dates
          (phones: faded banner behind the heading; desktop: left side, facing into the list) */}
      <div
        className="absolute top-0 left-0 w-full h-[560px] lg:w-[48%] lg:h-[980px] pointer-events-none select-none fade-portrait-side"
        aria-hidden="true"
      >
        <Image
          src="/photos/live-portrait.jpg"
          alt=""
          fill
          sizes="(min-width: 1024px) 46vw, 100vw"
          className="object-cover opacity-25 lg:opacity-50"
          style={{ objectPosition: '40% 8%' }}
        />
      </div>

      {/* Horizontal divider */}
      <div className="relative max-w-4xl mx-auto mb-16">
        <div className="w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(201,138,75,0.3), transparent)' }} />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <SectionHeading eyebrow="Tour Dates" title="Live Performances" />

        {/* Upcoming shows */}
        <div className="mb-12">
          <p
            className="text-xs uppercase tracking-[0.22em] mb-6 text-center"
            style={{ color: '#f0a05a', fontFamily: 'Cinzel, serif' }}
          >
            Upcoming
          </p>
          <div className="flex flex-col gap-3">
            {UPCOMING.map((show) => (
              <div
                key={show.date + show.event}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 px-5 py-4 rounded-xl"
                style={{
                  background: 'rgba(184,84,46,0.10)',
                  border: '1px solid rgba(240,160,90,0.28)',
                }}
              >
                <span
                  className="text-sm shrink-0"
                  style={{ color: '#f0a05a', fontFamily: 'Cinzel, serif', letterSpacing: '0.10em' }}
                >
                  {show.date}
                </span>
                <span className="flex-1 flex flex-col">
                  <span
                    className="text-base font-medium"
                    style={{ color: '#f2e4c8', fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {show.event}
                  </span>
                  {show.note && (
                    <span
                      className="text-sm italic"
                      style={{ color: '#f5b38a', fontFamily: 'Cormorant Garamond, serif' }}
                    >
                      {show.note}
                    </span>
                  )}
                </span>
                <span
                  className="text-sm"
                  style={{ color: 'rgba(230,194,122,0.65)', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
                >
                  {place(show)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Past shows — fixed height scrollable list */}
        <div>
          <p
            className="text-xs uppercase tracking-[0.22em] mb-4 text-center"
            style={{ color: '#c98a4b', fontFamily: 'Cinzel, serif' }}
          >
            Past Shows
          </p>
          <div
            className="overflow-y-auto rounded-xl"
            style={{
              height: 340,
              background: 'rgba(18,11,9,0.55)',
              border: '1px solid rgba(201,138,75,0.15)',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(201,138,75,0.30) transparent',
            }}
          >
            {PAST.map((show, i) => (
              <div
                key={show.date + show.event}
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-5 py-3"
                style={{
                  borderBottom: i < PAST.length - 1 ? '1px solid rgba(201,138,75,0.08)' : 'none',
                }}
              >
                <span
                  className="text-xs shrink-0 w-28"
                  style={{ color: 'rgba(230,194,122,0.55)', fontFamily: 'Cinzel, serif', letterSpacing: '0.08em' }}
                >
                  {show.date}
                </span>
                <span
                  className="text-base flex-1"
                  style={{ color: 'rgba(242,228,200,0.80)', fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {show.event}
                  {show.note && (
                    <span className="italic" style={{ color: 'rgba(245,179,138,0.80)' }}>
                      {' '}— {show.note}
                    </span>
                  )}
                </span>
                <span
                  className="text-sm"
                  style={{ color: 'rgba(230,194,122,0.45)', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
                >
                  {place(show)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Booking CTA */}
        <div className="text-center mt-12">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSf68m_sjy8yrcOzamk_vD01vrU8edS8zwkHK2ORzU96axC7bw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 rounded-lg text-sm uppercase tracking-widest"
            style={{
              background: 'linear-gradient(135deg, rgba(201,138,75,0.18), rgba(184,84,46,0.18))',
              border: '1px solid rgba(230,194,122,0.30)',
              color: '#e6c27a',
              fontFamily: 'Cinzel, serif',
              letterSpacing: '0.14em',
            }}
          >
            Book Exologik for Your Event
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
