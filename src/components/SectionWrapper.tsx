'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  id: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className = '' }: Props) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`relative py-24 px-6 ${className}`}
    >
      {children}
    </motion.section>
  )
}

export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="text-center mb-14">
      <p
        className="mb-2 text-xs uppercase tracking-[0.28em]"
        style={{ color: '#c98a4b', fontFamily: 'Cinzel, serif' }}
      >
        {eyebrow}
      </p>
      {/* Gold lettering to match the embossed logo */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-normal text-gold"
        style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.06em' }}
      >
        {title}
      </h2>
      {/* Diamond rule — from the Posse flyer */}
      <div className="mt-5 mx-auto flex items-center justify-center gap-3 w-44" aria-hidden="true">
        <span className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(230,194,122,0.75))' }} />
        <span className="w-1.5 h-1.5 rotate-45" style={{ background: '#e6c27a' }} />
        <span className="flex-1 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(230,194,122,0.75))' }} />
      </div>
    </div>
  )
}
