'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { label: 'Dance',   href: '#ecstatic-dance', external: false },
  { label: 'Music',   href: '#music',          external: false },
  { label: 'Shows',   href: '#shows',          external: false },
  { label: 'Qi Arts', href: '#taichi',         external: false },
  { label: 'Booking', href: 'https://docs.google.com/forms/d/e/1FAIpQLSf68m_sjy8yrcOzamk_vD01vrU8edS8zwkHK2ORzU96axC7bw/viewform', external: true },
]

const linkStyle = {
  color: 'rgba(109,179,212,0.80)',
  fontFamily: 'Cinzel, serif',
  letterSpacing: '0.13em',
  fontSize: '0.68rem',
}

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = scrolled ? 'rgba(5,3,15,0.90)' : 'rgba(5,3,15,0.50)'

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-10"
        style={{
          height: 56,
          background: navBg,
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderBottom: '1px solid rgba(74,127,168,0.18)',
          transition: 'background 0.5s ease',
        }}
      >
        {/* White vector logo */}
        <a
          href="#hero"
          className="flex-shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/brand/logo-white.png"
            alt="Exologik"
            width={110}
            height={32}
            className="h-7 w-auto"
          />
        </a>

        {/* Desktop nav — hidden on mobile */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map(item => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noopener noreferrer' : undefined}
              className="px-3 py-1 rounded uppercase transition-colors duration-300 hover:text-white"
              style={linkStyle}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2 -mr-1"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className="block w-5 h-px transition-all duration-300 origin-center"
            style={{
              background: 'rgba(109,179,212,0.90)',
              transform: menuOpen ? 'rotate(45deg) translate(3.5px, 3.5px)' : 'none',
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300"
            style={{
              background: 'rgba(109,179,212,0.90)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-5 h-px transition-all duration-300 origin-center"
            style={{
              background: 'rgba(109,179,212,0.90)',
              transform: menuOpen ? 'rotate(-45deg) translate(3.5px, -3.5px)' : 'none',
            }}
          />
        </button>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
            className="fixed top-14 left-0 right-0 z-40 md:hidden"
            style={{
              background: 'rgba(5,3,15,0.97)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(74,127,168,0.20)',
            }}
          >
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                onClick={() => setMenuOpen(false)}
                className="flex items-center px-8 py-4 uppercase tracking-widest transition-colors duration-200 hover:text-white"
                style={{
                  ...linkStyle,
                  fontSize: '0.78rem',
                  borderBottom: i < NAV_ITEMS.length - 1 ? '1px solid rgba(74,127,168,0.10)' : 'none',
                }}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
