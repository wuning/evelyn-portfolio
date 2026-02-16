import { Hero } from "@/components/sections/Hero"
import { WorkSection } from "@/components/sections/WorkSection"
import { QuickQuiz } from "@/components/sections/QuickQuiz"
import { AboutSection } from "@/components/sections/AboutSection"
import { ContactSection } from "@/components/sections/ContactSection"

export default function Home() {
  return (
    <>
      <Hero />
      <QuickQuiz />
      <WorkSection />
      <AboutSection />
      <ContactSection />
    </>
  )
}
