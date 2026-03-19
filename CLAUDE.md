# CLAUDE.md — Exologik Artist Site

## Project Overview
This is the official artist website for **Exologik** (Kendall), a conscious global bass / organic tribal house / downtempo producer and live performer based in Flagstaff, AZ. The site's primary goals are:
1. **Fan community + email list growth** — capture engaged listeners who want to go deeper
2. **Music showcase** — tiered media player experience across Spotify, Bandcamp, and SoundCloud

The aesthetic is: **dark, organic, cosmic** — sacred geometry meets jungle bass, handpan resonance, and starfield depth. Think ceremonial space, not nightclub.

---

## Design Principles

Before writing any frontend code, **always invoke the frontend-design skill**. This is non-negotiable.

### Aesthetic Direction

**Read all files in `/brand_assets/` before making any color, font, or layout decisions.** The assets are the source of truth.

- **Palette** (derived from album art `Reincarnation`):
  - Base: near-black (`#05030f`) with deep indigo-violet midtones
  - Primary accent: steel-blue / ice-blue (`#4a7fa8`, `#6db3d4`) — matches the embossed logo
  - Secondary accent: cosmic violet / purple (`#7b4fa8`, `#c084fc`)
  - Highlight: glowing lotus pink-white (`#f0a8d8`) used sparingly for sacred geometry accents
  - **Avoid**: warm earth tones, green, orange, red — these are off-brand
  - **Avoid**: pure white backgrounds, bright neon, flat corporate blue

- **Typography**:
  - The Exologik wordmark uses a custom ancient-script calligraphic style with diamond diacritics and sweeping terminals. Do NOT try to recreate this in CSS — use the provided logo assets.
  - For display headings: choose a font with mystical, ancient, or runic weight — something like Cinzel, Philosopher, or a similarly ceremonial serif. Nothing geometric-sans.
  - For body text: a refined, readable font with spiritual gravity — Cormorant Garamond, EB Garamond, or similar.
  - No Inter. No Roboto. No Arial. No Space Grotesk.

- **Motion**: Slow, meditative. Scroll-triggered reveals with long easing curves. Subtle cosmic particle or starfield canvas behind the hero. Gentle ambient pulse on the logo or album art — not aggressive animation. Think ceremony, not club drop.

- **Texture**: Grain overlay at low opacity across the entire site. Radial glow effects behind key elements (logo, album art) to echo the sacred geometry light rays in the album art. Layered transparencies on cards and embeds.

- **Layout**: Asymmetric where appropriate. The album art (`Reincarnation`) is portrait-format and visually dominant — design the hero to let it breathe. Generous negative space. The logo should appear large and centered on first load, then optionally smaller in a sticky nav.

### Brand Assets Available in `/brand_assets/`
| File | Use |
|------|-----|
| `exologik_logo_-_embossed.png` | Hero section, loading screen, og:image |
| `EXOLOGIK_-_Reincarnation_Album_Art_Distribution.png` | Music section feature, hero background blur layer |
| `EXOLOGIK-logo-vector-white_v2.png` | Sticky nav, footer, light-on-dark placements |
| `EXOLOGIK-logo-vector-black_v2.png` | Any rare light background context |

Always use the **white vector logo** for nav and footer. Use the **embossed logo** for hero/splash where it has room to be large and dramatic.

---

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + CSS variables for theming
- **Animation**: Framer Motion for React components
- **Music Embeds**:
  - Spotify: use this exact embed code (artist embed):
    ```html
    <iframe data-testid="embed-iframe" style="border-radius:12px"
      src="https://open.spotify.com/embed/artist/58aevQpxVtabvVwIqy6XqI?utm_source=generator"
      width="100%" height="352" frameBorder="0" allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"></iframe>
    ```
  - Bandcamp: two separate links/embeds:
    1. **Label's copy of Reincarnation**: `https://highviberecords.bandcamp.com/album/reincarnation` — link for album purchase
    2. **Artist's own Bandcamp**: `https://exologik.bandcamp.com` — direct artist support, standalone tracks
    - Note: *Reincarnation* full album embed TBD pending label contract confirmation. Use the High Vibe link in the meantime.
  - SoundCloud: use this exact embed for the featured live set (Southwest Flow Fest 9.20.2025):
    ```html
    <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2204387935&color=%23a8709c&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true">
    </iframe>
    ```
    Note: the `color=%23a8709c` in the embed matches the cosmic violet brand palette — keep it.
- **Email Signup**: No platform connected yet. Build UI now, wire later. Use `mailto:exologikmusic@gmail.com` as fallback. Add `{/* TODO: Connect to ConvertKit or Mailchimp */}` at each form. Do NOT build a backend capture without explicit instruction.
- **Deployment**: Vercel (via GitHub)

---

## Site Structure

```
/                   → Hero + above-the-fold CTA (email signup)
/music              → Tiered music player section
/about              → Bio, origin story, live instruments
/shows              → Upcoming performances / festival dates
/connect            → Contact + social links + booking inquiry
```

The homepage should flow as a single long-scroll page with anchor links, not separate routes for each section (except /shows and /connect which can be separate pages if needed).

---

## Music Player Architecture

Build a **three-tier music section** that educates visitors on where to engage:

### Tier 1 — Released Work (Spotify)
- Use the artist embed iframe (see Tech Stack above)
- Framing copy: "Stream *Reincarnation* everywhere"
- CTA: Link to `https://open.spotify.com/artist/58aevQpxVtabvVwIqy6XqI`

### Tier 2 — Direct Support (Bandcamp)
- Link card (not embed) pointing to `https://exologik.bandcamp.com` for artist-direct purchases
- Secondary link to `https://highviberecords.bandcamp.com/album/reincarnation` for the full album
- Framing copy: "Support the artist directly"
- Note: "Caught Up on an Emotion" single is available on the artist Bandcamp now. Full album embed TBD.

### Tier 3 — Live & Unreleased (SoundCloud)
- Use the Southwest Flow Fest iframe embed (see Tech Stack above)
- Framing copy: "Live sets & unreleased explorations"
- Secondary CTA: link to full SoundCloud profile `https://soundcloud.com/exologik`

Each tier should be visually distinct but cohesive — different card treatments, not three identical embed boxes. Consider a horizontal tab or toggle interface on desktop, stacked vertically on mobile.

---

## Screenshot Workflow

This project uses an automated screenshot loop via Puppeteer for visual QA.

**Setup** (run once):
```bash
npm install puppeteer
```

**Usage**: After completing each major section (hero, music player, about, shows, footer), run the screenshot tool. Claude should:
1. Start the local dev server (`npm run dev`)
2. Take a screenshot of the current state
3. Analyze the screenshot against the design brief above
4. Fix visual issues before moving to the next section

**Screenshot naming convention**: `screenshot_[section]_v[N].png`
Examples: `screenshot_hero_v1.png`, `screenshot_music_v2.png`

**Chrome path** (update for your machine):
- Mac: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`
- Update the path in the Puppeteer config after cloning

**Screenshot script**: `node screenshot.js [section] [version]`
Examples:
  node screenshot.js hero 1
  node screenshot.js music 1
  node screenshot.js hero 2   ← after fixes

Screenshots save to `/screenshots/` folder (gitignored).
Make sure `npm run dev` is running in a separate terminal first.

**Disable screenshot loop for**: animated backgrounds, particle systems, any canvas-based elements. These will cause infinite iteration. Set a flag in CLAUDE.md or comment in the relevant component.

---

## Component Sourcing from 21st.dev

Browse [21st.dev](https://21st.dev) for the following component types before building from scratch:
- Animated hero backgrounds / particle fields
- Audio player UI components
- Scroll-triggered reveal cards
- Email signup form with animated states
- Sticky nav with blur/glassmorphism

When integrating a 21st.dev component, note the source URL in a comment at the top of the component file.

---

## Rules & Constraints

1. **Always invoke the frontend-design skill before writing any frontend code.**
2. **Mobile-first.** All layouts must be responsive. Test at 375px, 768px, and 1440px.
3. **No placeholder text in final sections.** If content isn't provided, ask before using lorem ipsum.
4. **Performance**: Lazy-load all embeds. Don't block page load on third-party iframes.
5. **Accessibility**: All images need alt text. Color contrast must pass WCAG AA minimum.
6. **No auto-playing audio.** Ever.
7. **Screenshot after every major section** before proceeding to the next.
8. **Don't add sections not in the brief** without asking first.
9. **Commit messages**: Use conventional commits (`feat:`, `fix:`, `style:`, `chore:`).
10. **Keep components small and composable.** One concern per file.

---

## Email & Contact Strategy

**No email platform set up yet.** Build the UI now, wire it later:
- Email signup forms should render a clean input + button but submit via `mailto:exologikmusic@gmail.com` as fallback
- Add `{/* TODO: Connect to ConvertKit or Mailchimp */}` comment at every form
- Email signup placement:
  - Hero — subtle, above-the-fold secondary CTA ("Stay in the loop on new releases")
  - After the music player section — contextual
  - Footer — persistent

**Booking:**
- Embed or prominently link the existing Google Form for booking inquiries:
  `https://docs.google.com/forms/d/e/1FAIpQLSf68m_sjy8yrcOzamk_vD01vrU8edS8zwkHK2ORzU96axC7bw/viewform`
- Label it clearly: "Book Exologik for your Festival, Ecstatic Dance, or Qi Arts Workshop"

**General contact email**: `exologikmusic@gmail.com` — render as a mailto link, not plain text.

---

## Content Reference

**Artist tagline** (use for hero and meta description):
> Ritual DJ & Transformational Guide | Sonic Dance Ceremony | Music Production | Tai Chi Arts

**Artist bio** (use for about section):
> Exologik blends conscious global bass, organic tribal house, and downtempo with live handpan, flute, charango, and voice. Born from a pivotal winter solstice 2023 experience, the project weaves ancient sound with modern production — debuting at 12+ festivals in 2025 and sharing stages with Liquid Bloom, David Starfire, and Akriza.

**Released album**: *Reincarnation* — High Vibe Records, February 2025

**Live instruments**: Handpan, flute (multiple registers), charango, voice

**Based in**: Flagstaff, AZ

**Social & platform links:**
| Platform | URL |
|----------|-----|
| Spotify | `https://open.spotify.com/artist/58aevQpxVtabvVwIqy6XqI` |
| Instagram | `https://www.instagram.com/exologik` |
| YouTube | `https://www.youtube.com/@ExologikMusic` |
| SoundCloud | `https://soundcloud.com/exologik` |
| Bandcamp (artist) | `https://exologik.bandcamp.com` |
| Bandcamp (album via label) | `https://highviberecords.bandcamp.com/album/reincarnation` |
| Linktree | `https://linktr.ee/exologik` |
| Booking form | `https://docs.google.com/forms/d/e/1FAIpQLSf68m_sjy8yrcOzamk_vD01vrU8edS8zwkHK2ORzU96axC7bw/viewform` |
| Email | `exologikmusic@gmail.com` |

**⚠️ Content accuracy note**: Ignore any auto-generated bios from Linktree or third-party sources — they are incorrect. Use only the content above.

---

## Deployment

1. Push to GitHub repo: `exologik-site`
2. Connect to Vercel — auto-deploy on push to `main`
3. Custom domain target: `exologik.music` (or `exologik.com` as fallback)
4. No environment variables needed until email platform is connected
