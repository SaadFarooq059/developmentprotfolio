"use client"
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer"
import ContactPlatforms from "@/components/ui/contact-platforms"
import VerticalMarqueeCTA from "@/components/ui/vertical-marquee-cta"

export function ContactSection() {
  return (
    <footer id="contact" className="bg-black/10 relative h-fit rounded-3xl overflow-hidden m-8">
      <div className="max-w-7xl mx-auto p-8 md:p-14 z-40 relative">
        <VerticalMarqueeCTA />
        
      </div>

      {/* Text hover effect */}
      <div className="flex h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] -mt-20 sm:-mt-28 md:-mt-36 lg:-mt-40 -mb-20 sm:-mb-28 md:-mb-32 lg:-mb-36">
        <TextHoverEffect text="PBX1" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  )
}
