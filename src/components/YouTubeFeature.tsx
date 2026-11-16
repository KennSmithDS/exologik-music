'use client'

// Featured YouTube video — click-to-load facade so the iframe never blocks page load
// and nothing plays until the visitor asks for it.

import { useState } from 'react'

type Props = {
  videoId: string
  title: string
  caption: string
}

export function YouTubeFeature({ videoId, title, caption }: Props) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="w-full max-w-xl flex flex-col gap-3">
      <div
        className="relative w-full rounded-xl overflow-hidden"
        style={{ aspectRatio: '16 / 9', background: '#22150f', border: '1px solid rgba(184,84,46,0.25)' }}
      >
        {loaded ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setLoaded(true)}
            className="group absolute inset-0 w-full h-full"
            aria-label={`Play video: ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span
              className="absolute inset-0"
              aria-hidden="true"
              style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(18,11,9,0.65) 100%)' }}
            />
            <span
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
              aria-hidden="true"
              style={{
                background: 'rgba(18,11,9,0.55)',
                border: '1px solid rgba(240,160,90,0.55)',
                color: '#f8e6cf',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                boxShadow: '0 0 30px rgba(184,84,46,0.45)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" style={{ marginLeft: 3 }}>
                <path d="M5 3.5v13l11-6.5z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <p className="text-sm italic text-center"
        style={{ color: 'rgba(242,228,200,0.60)', fontFamily: 'Cormorant Garamond, serif' }}>
        {caption}
      </p>
    </div>
  )
}
