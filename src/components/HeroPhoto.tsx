'use client'

// Hero image — sunset frame from the Sedona charango video (DJI_20261104_172222, 1:18).
// Full-bleed. On desktop (lg+) the artist stands on the right and the sun sits on the left,
// behind the logo stack; on phones/tablets the frame shifts so the figure stays in view.

import Image from 'next/image'
import { motion } from 'framer-motion'

export function HeroPhoto() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <Image
        src="/photos/hero-sunset-sky.jpg"
        alt="Exologik playing charango on a red rock ledge above Sedona as the sun sets"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_50%] lg:object-[35%_50%] opacity-45 lg:opacity-100"
      />

      {/* Legibility: darken the left (logo side). Bottom: dissolve from the knees down
          so the ledge and shoes melt into the page instead of a hard crop. */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(90deg, rgba(18,11,9,0.55) 0%, rgba(18,11,9,0.30) 40%, rgba(18,11,9,0) 65%), linear-gradient(180deg, rgba(18,11,9,0.45) 0%, rgba(18,11,9,0) 25%, rgba(18,11,9,0) 52%, rgba(18,11,9,0.35) 60%, rgba(18,11,9,0.75) 68%, rgba(18,11,9,0.95) 76%, #120b09 82%)',
        }}
      />
    </motion.div>
  )
}
