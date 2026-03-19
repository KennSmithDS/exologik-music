'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { CosmicParticles } from './CosmicParticles'
import { FlowerOfLife } from './FlowerOfLife'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
}

function CenterFlare() {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10"
      aria-hidden="true"
    >
      {/* Outer diffuse halo */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: 320,
          height: 320,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(109,179,212,0.28) 0%, rgba(74,127,168,0.12) 25%, rgba(123,79,168,0.06) 55%, transparent 72%)',
          filter: 'blur(10px)',
          marginLeft: -160,
          marginTop: -160,
        }}
      />

      {/* Mid glow ring */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 80,
          height: 80,
          marginLeft: -40,
          marginTop: -40,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(200,230,255,0.55) 0%, rgba(109,179,212,0.35) 40%, transparent 72%)',
          filter: 'blur(4px)',
        }}
      />

      {/* Sharp light core */}
      <motion.div
        animate={{ opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 5,
          height: 5,
          marginLeft: -2.5,
          marginTop: -2.5,
          borderRadius: '50%',
          background: '#e8f8ff',
          boxShadow:
            '0 0 8px 4px rgba(200,230,255,0.95), 0 0 24px 10px rgba(109,179,212,0.75), 0 0 60px 24px rgba(74,127,168,0.45), 0 0 120px 48px rgba(123,79,168,0.20)',
        }}
      />

      {/* Horizontal lens ray */}
      <motion.div
        animate={{ opacity: [0.3, 0.55, 0.3], scaleX: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 500,
          height: 1,
          marginLeft: -250,
          marginTop: -0.5,
          background:
            'linear-gradient(to right, transparent 0%, rgba(109,179,212,0.20) 20%, rgba(200,230,255,0.55) 50%, rgba(109,179,212,0.20) 80%, transparent 100%)',
          filter: 'blur(0.5px)',
        }}
      />

      {/* Vertical lens ray */}
      <motion.div
        animate={{ opacity: [0.25, 0.45, 0.25], scaleY: [1, 1.06, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: 1,
          height: 380,
          marginLeft: -0.5,
          marginTop: -190,
          background:
            'linear-gradient(to bottom, transparent 0%, rgba(109,179,212,0.15) 20%, rgba(200,230,255,0.40) 50%, rgba(109,179,212,0.15) 80%, transparent 100%)',
          filter: 'blur(0.5px)',
        }}
      />

      {/* Diagonal rays × 2 */}
      {[45, -45].map(deg => (
        <motion.div
          key={deg}
          animate={{ opacity: [0.10, 0.22, 0.10] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: deg > 0 ? 0 : 2 }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 340,
            height: 1,
            marginLeft: -170,
            marginTop: -0.5,
            background:
              'linear-gradient(to right, transparent 0%, rgba(192,132,252,0.20) 30%, rgba(240,168,216,0.35) 50%, rgba(192,132,252,0.20) 70%, transparent 100%)',
            transform: `rotate(${deg}deg)`,
            transformOrigin: 'center',
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  )
}

export function HeroSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // TODO: Connect to ConvertKit or Mailchimp
    window.location.href = `mailto:exologikmusic@gmail.com?subject=Email List Signup&body=${encodeURIComponent(email)}`
    setSubmitted(true)
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'radial-gradient(ellipse 80% 70% at 50% 40%, #0d0820 0%, #05030f 100%)' }}
    >
      {/* Particle field */}
      <CosmicParticles />

      {/* 3D Flower of Life — centered */}
      <FlowerOfLife />

      {/* Center flare — glowing from the FoL origin point */}
      <CenterFlare />

      {/* Content — flex-centered so email form is always visible on any screen height */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pt-14 pb-8">
        <div className="flex flex-col items-center w-full" style={{ maxWidth: 600 }}>
        {/* Embossed logo — large, right above tagline */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={0.2}
          variants={fadeUp}
          className="mb-2 animate-float"
          style={{
            filter:
              'drop-shadow(0 0 40px rgba(74,127,168,0.55)) drop-shadow(0 0 16px rgba(123,79,168,0.40))',
          }}
        >
          <Image
            src="/brand/embossed-logo.png"
            alt="Exologik — embossed logo"
            width={440}
            height={440}
            priority
            className="w-[82vw] sm:w-[340px] md:w-[420px] max-w-[420px] h-auto select-none"
          />
        </motion.div>

        {/* Primary tagline — immediately below logo */}
        <motion.p
          initial="hidden"
          animate="show"
          custom={0.6}
          variants={fadeUp}
          className="mb-1 uppercase text-xs sm:text-sm"
          style={{ color: '#6db3d4', fontFamily: 'Cinzel, serif', letterSpacing: '0.22em' }}
        >
          Ritual DJ &amp; Transformational Guide
        </motion.p>

        {/* Secondary tagline */}
        <motion.p
          initial="hidden"
          animate="show"
          custom={0.8}
          variants={fadeUp}
          className="mb-6 text-base sm:text-lg italic font-light"
          style={{ color: 'rgba(232,223,245,0.65)', fontFamily: 'Cormorant Garamond, serif' }}
        >
          Sonic Dance Ceremony &nbsp;·&nbsp; Music Production &nbsp;·&nbsp; Tai Chi Arts
        </motion.p>

        {/* Email CTA */}
        <motion.div
          initial="hidden"
          animate="show"
          custom={1.1}
          variants={fadeUp}
          className="w-full"
        >
          <p
            className="mb-3 text-sm"
            style={{
              color: 'rgba(192,132,252,0.70)',
              fontFamily: 'Cinzel, serif',
              letterSpacing: '0.08em',
            }}
          >
            Stay in the loop on new releases
          </p>

          {submitted ? (
            <p
              className="text-base italic"
              style={{ color: '#f0a8d8', fontFamily: 'Cormorant Garamond, serif' }}
            >
              Thank you — see you in the cosmos.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto"
            >
              {/* TODO: Connect to ConvertKit or Mailchimp */}
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg outline-none"
                style={{
                  background: 'rgba(13,8,32,0.75)',
                  border: '1px solid rgba(74,127,168,0.35)',
                  color: '#e8dff5',
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1rem',
                }}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg uppercase transition-all duration-500"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(74,127,168,0.22) 0%, rgba(123,79,168,0.22) 100%)',
                  border: '1px solid rgba(109,179,212,0.45)',
                  color: '#6db3d4',
                  fontFamily: 'Cinzel, serif',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.background =
                    'linear-gradient(135deg, rgba(74,127,168,0.42) 0%, rgba(123,79,168,0.42) 100%)'
                  el.style.borderColor = 'rgba(109,179,212,0.8)'
                  el.style.color = '#e8dff5'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.background =
                    'linear-gradient(135deg, rgba(74,127,168,0.22) 0%, rgba(123,79,168,0.22) 100%)'
                  el.style.borderColor = 'rgba(109,179,212,0.45)'
                  el.style.color = '#6db3d4'
                }}
              >
                Join
              </button>
            </form>
          )}
        </motion.div>
        </div>
      </div>

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #05030f)' }}
        aria-hidden="true"
      />
    </section>
  )
}
