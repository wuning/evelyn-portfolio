import { Hero } from "@/components/sections/Hero"
import { WorkSection } from "@/components/sections/WorkSection"
import { PhilosophySection } from "@/components/sections/PhilosophySection"
import { AboutSection } from "@/components/sections/AboutSection"
import { ResumeSection } from "@/components/sections/ResumeSection"
import { ClosingSection } from "@/components/sections/ClosingSection"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <PhilosophySection />
      <AboutSection />
      <ResumeSection />
      <ClosingSection />
      <Footer />
    </>
  )
}
