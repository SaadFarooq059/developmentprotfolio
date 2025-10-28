import { HeroSection } from "@/components/hero-section"
import { WorkSection } from "@/components/work-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WorkSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}
