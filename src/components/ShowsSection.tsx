'use client'

// Live Performances section — upcoming + scrollable past shows log
import { SectionWrapper, SectionHeading } from './SectionWrapper'

const UPCOMING = [
  { date: 'March 28, 2026',  event: 'Mosaic Preparty',       venue: 'Monte Vista Lounge',   location: 'Flagstaff, AZ' },
  { date: 'May 1, 2026',     event: 'Mosaic Sunset DJ Set',  venue: 'Gateway Ranch',         location: 'Flagstaff, AZ' },
  { date: 'May 21, 2026',    event: 'Posse Ecstatic Dance',  venue: 'Posse Grounds Park',    location: 'Sedona, AZ' },
]

const PAST = [
  { date: 'Mar 5, 2026',   event: 'Wub Wednesday',                venue: 'Yucca North',          location: 'Flagstaff, AZ' },
  { date: 'Feb 19, 2026',  event: 'Posse Ecstatic Dance',         venue: 'Posse Grounds Park',   location: 'Sedona, AZ' },
  { date: 'Feb 18, 2026',  event: 'Wub Wednesday',                venue: 'Yucca North',          location: 'Flagstaff, AZ' },
  { date: 'Feb 4, 2026',   event: 'Wub Wednesday',                venue: 'Yucca North',          location: 'Flagstaff, AZ' },
  { date: 'Jan 23, 2026',  event: 'Gem & Jam DJ Competition',     venue: "Gentle Ben's",         location: 'Tucson, AZ' },
  { date: 'Jan 21, 2026',  event: 'Wub Wednesday',                venue: 'Yucca North',          location: 'Flagstaff, AZ' },
  { date: 'Jan 15, 2026',  event: 'Posse Ecstatic Dance',         venue: 'Posse Grounds Park',   location: 'Sedona, AZ' },
  { date: 'Jan 8, 2026',   event: 'Wub Wednesday',                venue: 'Yucca North',          location: 'Flagstaff, AZ' },
  { date: 'Dec 31, 2025',  event: "New Year's Eve Opener",        venue: 'HumanKind Center',     location: 'Flagstaff, AZ' },
  { date: 'Nov 23, 2025',  event: 'Ecstatic Harmony',             venue: 'Harmony Village',      location: 'Tucson, AZ' },
  { date: 'Sep 19, 2025',  event: 'Southwest Flow Festival',      venue: 'Gateway Ranch',        location: 'Flagstaff, AZ' },
  { date: 'Aug 9, 2025',   event: 'Create Infinite Elements',     venue: 'Catoosa Event Center', location: 'Catoosa, TN' },
  { date: 'Aug 1, 2025',   event: 'Vibe Fest',                    venue: 'Hudson Valley Resort', location: 'New York, NY' },
  { date: 'Jul 20, 2025',  event: 'RE:Vibe Coconino Afterparty',  venue: 'Humankind Center',     location: 'Flagstaff, AZ' },
  { date: 'Jul 15, 2025',  event: 'Opener for Sudakra',           venue: 'Humankind Center',     location: 'Flagstaff, AZ' },
  { date: 'Jun 19, 2025',  event: 'Portal Takeover',              venue: 'Meow Wolf',            location: 'Denver, CO' },
  { date: 'Apr 5, 2025',   event: 'Opener for Akal Dub',          venue: 'Yucca North',          location: 'Flagstaff, AZ' },
  { date: 'Mar 15, 2025',  event: 'Grizzly Get Down',             venue: 'Yucca North',          location: 'Flagstaff, AZ' },
  { date: 'Feb 16, 2025',  event: 'Aquarian Visions',             venue: 'Harmony Village',      location: 'Flagstaff, AZ' },
  { date: 'Dec 14, 2024',  event: 'Woodland Wobble',              venue: 'Yucca North',          location: 'Flagstaff, AZ' },
]

export function ShowsSection() {
  return (
    <SectionWrapper id="shows">
      {/* Glow — steel blue */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse 55% 45% at 50% 20%, rgba(74,127,168,0.06) 0%, transparent 70%)' }}
      />

      {/* Horizontal divider */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(74,127,168,0.3), transparent)' }} />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <SectionHeading eyebrow="Tour Dates" title="Live Performances" />

        {/* Upcoming shows */}
        <div className="mb-12">
          <p
            className="text-xs uppercase tracking-[0.22em] mb-6 text-center"
            style={{ color: '#c084fc', fontFamily: 'Cinzel, serif' }}
          >
            Upcoming
          </p>
          <div className="flex flex-col gap-3">
            {UPCOMING.map((show) => (
              <div
                key={show.date + show.event}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 px-5 py-4 rounded-xl"
                style={{
                  background: 'rgba(123,79,168,0.10)',
                  border: '1px solid rgba(192,132,252,0.28)',
                }}
              >
                <span
                  className="text-sm shrink-0"
                  style={{ color: '#c084fc', fontFamily: 'Cinzel, serif', letterSpacing: '0.10em' }}
                >
                  {show.date}
                </span>
                <span
                  className="text-base font-medium flex-1"
                  style={{ color: '#e8dff5', fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {show.event}
                </span>
                <span
                  className="text-sm"
                  style={{ color: 'rgba(109,179,212,0.65)', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
                >
                  {show.venue} · {show.location}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Past shows — fixed height scrollable list */}
        <div>
          <p
            className="text-xs uppercase tracking-[0.22em] mb-4 text-center"
            style={{ color: '#4a7fa8', fontFamily: 'Cinzel, serif' }}
          >
            Past Shows
          </p>
          <div
            className="overflow-y-auto rounded-xl"
            style={{
              height: 340,
              background: 'rgba(5,3,15,0.55)',
              border: '1px solid rgba(74,127,168,0.15)',
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(74,127,168,0.30) transparent',
            }}
          >
            {PAST.map((show, i) => (
              <div
                key={show.date + show.event}
                className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-5 py-3"
                style={{
                  borderBottom: i < PAST.length - 1 ? '1px solid rgba(74,127,168,0.08)' : 'none',
                }}
              >
                <span
                  className="text-xs shrink-0 w-28"
                  style={{ color: 'rgba(109,179,212,0.55)', fontFamily: 'Cinzel, serif', letterSpacing: '0.08em' }}
                >
                  {show.date}
                </span>
                <span
                  className="text-base flex-1"
                  style={{ color: 'rgba(232,223,245,0.80)', fontFamily: 'Cormorant Garamond, serif' }}
                >
                  {show.event}
                </span>
                <span
                  className="text-sm"
                  style={{ color: 'rgba(109,179,212,0.45)', fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
                >
                  {show.venue} · {show.location}
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
              background: 'linear-gradient(135deg, rgba(74,127,168,0.18), rgba(123,79,168,0.18))',
              border: '1px solid rgba(109,179,212,0.30)',
              color: '#6db3d4',
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
