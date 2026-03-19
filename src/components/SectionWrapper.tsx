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
        style={{ color: '#4a7fa8', fontFamily: 'Cinzel, serif' }}
      >
        {eyebrow}
      </p>
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-normal"
        style={{ color: '#e8dff5', fontFamily: 'Cinzel, serif', letterSpacing: '0.06em' }}
      >
        {title}
      </h2>
      <div className="mt-4 mx-auto w-16 h-px" style={{ background: 'linear-gradient(to right, transparent, #4a7fa8, transparent)' }} />
    </div>
  )
}
