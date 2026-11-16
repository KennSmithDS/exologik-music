// Release feature — album art left, short story + buy link + genre tags right.
// Used in The Sound for each featured release.

import Image from 'next/image'
import type { ReactNode } from 'react'

type Props = {
  image: string
  alt: string
  title: string
  meta: string
  children: ReactNode
  href: string
  linkLabel: string
  tags: string[]
  badge?: string
  /** false when the cover art already carries its own title text */
  overlay?: boolean
}

export function ReleaseFeature({ image, alt, title, meta, children, href, linkLabel, tags, badge, overlay = true }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="flex justify-center">
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            boxShadow: '0 0 80px rgba(201,138,75,0.28), 0 0 30px rgba(184,84,46,0.18)',
            border: '1px solid rgba(201,138,75,0.22)',
          }}
        >
          <Image
            src={image}
            alt={alt}
            width={360}
            height={360}
            className="w-full max-w-[300px] sm:max-w-[340px] h-auto block"
          />
          {overlay && <div
            className="absolute bottom-0 left-0 right-0 px-4 py-3"
            style={{ background: 'linear-gradient(to top, rgba(18,11,9,0.92), transparent)' }}
          >
            <p className="text-xs uppercase tracking-widest mb-0.5"
              style={{ color: '#e6c27a', fontFamily: 'Cinzel, serif' }}>
              {title}
            </p>
            <p className="text-xs italic"
              style={{ color: 'rgba(242,228,200,0.60)', fontFamily: 'Cormorant Garamond, serif' }}>
              {meta}
            </p>
          </div>}
        </div>
      </div>

      <div>
        {(badge || !overlay) && (
          <div className="flex flex-wrap items-center gap-3 mb-3">
            {badge && (
          <span className="inline-block px-2 py-0.5 rounded-full uppercase"
            style={{
              fontFamily: 'Cinzel, serif',
              fontSize: '0.6rem',
              letterSpacing: '0.18em',
              color: '#f5b38a',
              background: 'rgba(245,179,138,0.10)',
              border: '1px solid rgba(245,179,138,0.35)',
            }}>
            {badge}
          </span>
            )}
            {!overlay && (
              <span className="text-sm italic"
                style={{ color: 'rgba(242,228,200,0.55)', fontFamily: 'Cormorant Garamond, serif' }}>
                {meta}
              </span>
            )}
          </div>
        )}
        <div className="text-base sm:text-lg leading-relaxed mb-5"
          style={{ color: 'rgba(242,228,200,0.75)', fontFamily: 'Cormorant Garamond, serif' }}>
          {children}
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-5 text-sm uppercase tracking-widest transition-colors duration-300 hover:text-white"
          style={{ color: '#f0a05a', fontFamily: 'Cinzel, serif' }}
        >
          {linkLabel}
        </a>
        <div className="flex flex-wrap gap-2">
          {tags.map(t => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs"
              style={{
                background: 'rgba(201,138,75,0.10)',
                border: '1px solid rgba(201,138,75,0.22)',
                color: '#e6c27a',
                fontFamily: 'Cinzel, serif',
                letterSpacing: '0.06em',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
