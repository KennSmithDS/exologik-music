'use client'

// Flower of Life — 19-circle sacred geometry, counter-rotating layers for 3D depth
// Rendered at very low opacity as atmospheric background behind hero content

import { motion } from 'framer-motion'

const R = 72 // circle radius
const S = Math.sqrt(3)

// 19 circles: seed of life (7) + ring at R√3 (6) + ring at 2R (6)
const CIRCLES = [
  // Seed of life (center + 6)
  { x: 0,        y: 0           },
  { x: R,        y: 0           },
  { x: R/2,      y: R*S/2       },
  { x: -R/2,     y: R*S/2       },
  { x: -R,       y: 0           },
  { x: -R/2,     y: -R*S/2      },
  { x: R/2,      y: -R*S/2      },
  // Ring 2 — distance R√3
  { x: 3*R/2,    y: R*S/2       },
  { x: 0,        y: R*S         },
  { x: -3*R/2,   y: R*S/2       },
  { x: -3*R/2,   y: -R*S/2      },
  { x: 0,        y: -R*S        },
  { x: 3*R/2,    y: -R*S/2      },
  // Ring 3 — distance 2R
  { x: 2*R,      y: 0           },
  { x: R,        y: R*S         },
  { x: -R,       y: R*S         },
  { x: -2*R,     y: 0           },
  { x: -R,       y: -R*S        },
  { x: R,        y: -R*S        },
]

const SIZE = 560
const CX = SIZE / 2
const CY = SIZE / 2

// Opacity by distance from center
function ringOpacity(x: number, y: number): number {
  const d = Math.sqrt(x * x + y * y) / R
  if (d < 0.1) return 0.22
  if (d < 1.2) return 0.17
  if (d < 1.9) return 0.11
  return 0.07
}

// Color by distance: inner → steel-blue, outer → cosmic-violet
function ringColor(x: number, y: number): string {
  const d = Math.sqrt(x * x + y * y) / R
  return d < 1.5 ? '74,127,168' : '123,79,168'
}

export function FlowerOfLife() {
  const seedCircles = CIRCLES.slice(0, 7)
  const ring2Circles = CIRCLES.slice(7, 13)
  const ring3Circles = CIRCLES.slice(13)

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 4, delay: 0.5 }}
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        style={{ maxWidth: 680, maxHeight: 680, position: 'absolute' }}
        // Outer frame rotates slowly clockwise
        animate={{ rotate: 360 }}
        transition={{ duration: 140, repeat: Infinity, ease: 'linear' }}
      >
        <defs>
          <radialGradient id="fol-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#4a7fa8" stopOpacity="0.10" />
            <stop offset="45%"  stopColor="#7b4fa8" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#05030f"  stopOpacity="0"   />
          </radialGradient>
          {/* Clip to the bounding circle so outer arcs don't bleed */}
          <clipPath id="fol-clip">
            <circle cx={CX} cy={CY} r={2.6 * R} />
          </clipPath>
        </defs>

        {/* Background radial glow */}
        <circle cx={CX} cy={CY} r={SIZE / 2} fill="url(#fol-bg)" />

        {/* Outer containing circle */}
        <circle
          cx={CX} cy={CY} r={2.55 * R}
          fill="none"
          stroke="rgba(74,127,168,0.10)"
          strokeWidth="0.6"
        />

        {/* Ring 3 — outermost, counter-rotates for 3D depth illusion */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 200, repeat: Infinity, ease: 'linear' }}
          style={{ originX: `${CX}px`, originY: `${CY}px` }}
          clipPath="url(#fol-clip)"
        >
          {ring3Circles.map((c, i) => (
            <circle
              key={`r3-${i}`}
              cx={CX + c.x} cy={CY + c.y} r={R}
              fill="none"
              stroke={`rgba(${ringColor(c.x, c.y)},${ringOpacity(c.x, c.y)})`}
              strokeWidth="0.55"
            />
          ))}
        </motion.g>

        {/* Ring 2 — mid layer, slightly faster counter-rotation */}
        <motion.g
          animate={{ rotate: -360 }}
          transition={{ duration: 170, repeat: Infinity, ease: 'linear' }}
          style={{ originX: `${CX}px`, originY: `${CY}px` }}
          clipPath="url(#fol-clip)"
        >
          {ring2Circles.map((c, i) => (
            <circle
              key={`r2-${i}`}
              cx={CX + c.x} cy={CY + c.y} r={R}
              fill="none"
              stroke={`rgba(${ringColor(c.x, c.y)},${ringOpacity(c.x, c.y)})`}
              strokeWidth="0.6"
            />
          ))}
        </motion.g>

        {/* Seed of life — innermost, static relative to outer (creates depth) */}
        <g clipPath="url(#fol-clip)">
          {seedCircles.map((c, i) => (
            <circle
              key={`s-${i}`}
              cx={CX + c.x} cy={CY + c.y} r={R}
              fill="none"
              stroke={`rgba(${ringColor(c.x, c.y)},${ringOpacity(c.x, c.y)})`}
              strokeWidth="0.7"
            />
          ))}
        </g>

        {/* Six-pointed star guide lines through center */}
        {[0, 30, 60, 90, 120, 150].map(deg => {
          const rad = (deg * Math.PI) / 180
          const len = 2.55 * R
          return (
            <line
              key={deg}
              x1={CX + len * Math.cos(rad)}
              y1={CY + len * Math.sin(rad)}
              x2={CX - len * Math.cos(rad)}
              y2={CY - len * Math.sin(rad)}
              stroke="rgba(109,179,212,0.04)"
              strokeWidth="0.4"
            />
          )
        })}

        {/* Center dot */}
        <circle cx={CX} cy={CY} r={1.5}
          fill="rgba(109,179,212,0.35)" />
      </motion.svg>
    </motion.div>
  )
}
