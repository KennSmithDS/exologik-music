import { HeroSection } from '@/components/HeroSection'
import { EcstaticDanceSection } from '@/components/EcstaticDanceSection'
import { MusicSection } from '@/components/MusicSection'
import { ShowsSection } from '@/components/ShowsSection'
import { TaiChiSection } from '@/components/TaiChiSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EcstaticDanceSection />
      <MusicSection />
      <ShowsSection />
      <TaiChiSection />
    </main>
  )
}
