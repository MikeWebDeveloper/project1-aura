import { Experience } from "@/components/client/Experience"
import { HeroSection } from "@/components/server/HeroSection"
import { FeatureGrid } from "@/components/server/FeatureGrid"
import { Footer } from "@/components/server/Footer"

export default function HomePage() {
  return (
    <main className="relative">
      <HeroSection />
      <Experience />
      <FeatureGrid />
      <Footer />
    </main>
  )
}
