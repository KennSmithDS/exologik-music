import { HeroSection } from '@/components/HeroSection'
import { MusicSection } from '@/components/MusicSection'
import { EcstaticDanceSection } from '@/components/EcstaticDanceSection'
import { MusicProductionSection } from '@/components/MusicProductionSection'
import { TaiChiSection } from '@/components/TaiChiSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MusicSection />
      <EcstaticDanceSection />
      <MusicProductionSection />
      <TaiChiSection />
    </main>
  )
}
