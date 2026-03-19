'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Music',      href: '#music',          live: true  },
  { label: 'Dance',      href: '#ecstatic-dance', live: true  },
  { label: 'Studio',     href: '#production',     live: true  },
  { label: 'Qi Arts',    href: '#taichi',         live: true  },
  { label: 'Booking',    href: 'https://docs.google.com/forms/d/e/1FAIpQLSf68m_sjy8yrcOzamk_vD01vrU8edS8zwkHK2ORzU96axC7bw/viewform', live: true, external: true },
  { label: 'Merch',      href: '#merch',          live: false },
  { label: 'Tour Dates', href: '#tour',           live: false },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10"
      style={{
        height: 56,
        background: scrolled
          ? 'rgba(5,3,15,0.72)'
          : 'rgba(5,3,15,0.18)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: scrolled
          ? '1px solid rgba(74,127,168,0.18)'
          : '1px solid rgba(74,127,168,0.08)',
        transition: 'background 0.5s ease, border-color 0.5s ease',
      }}
    >
      {/* White vector logo */}
      <a href="#hero" className="flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300">
        <Image
          src="/brand/logo-white.png"
          alt="Exologik"
          width={110}
          height={32}
          className="h-7 w-auto"
        />
      </a>

      {/* Nav links */}
      <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
        {NAV_ITEMS.map(item => (
          item.live ? (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="px-2 md:px-3 py-1 rounded text-xs uppercase tracking-widest transition-colors duration-300 hover:text-white"
              style={{
                color: 'rgba(109,179,212,0.75)',
                fontFamily: 'Cinzel, serif',
                letterSpacing: '0.12em',
                fontSize: '0.65rem',
              }}
            >
              {item.label}
            </a>
          ) : (
            <span
              key={item.label}
              className="hidden md:inline-flex items-center gap-1 px-2 md:px-3 py-1 rounded text-xs uppercase tracking-widest cursor-default"
              style={{
                color: 'rgba(109,179,212,0.28)',
                fontFamily: 'Cinzel, serif',
                letterSpacing: '0.12em',
                fontSize: '0.65rem',
              }}
              title="Coming soon"
            >
              {item.label}
              <span
                className="text-[0.5rem] px-1 py-px rounded-sm"
                style={{
                  background: 'rgba(74,127,168,0.15)',
                  color: 'rgba(109,179,212,0.35)',
                  fontFamily: 'Cinzel, serif',
                  letterSpacing: '0.08em',
                }}
              >
                soon
              </span>
            </span>
          )
        ))}
      </div>
    </motion.nav>
  )
}
