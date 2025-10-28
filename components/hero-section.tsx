"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BackgroundBeams } from "@/components/ui/background-beams"
import Image from "next/image"
import { BlurText } from "@/components/ui/blur-text"
import { AnimatedCtaButton } from "@/components/ui/animated-cta-button"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToWork = () => {
    const element = document.getElementById("work")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      <BackgroundBeams className="absolute inset-0 z-0" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left side - Text content */}
          <div className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Saad Farooq
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">Web Developer</p>
            </div>

            <BlurText
              text="Crafting exceptional digital experiences with 3 years of expertise in modern web development. Specializing in building responsive, performant, and user-centric applications."
              delay={50}
              animateBy="words"
              direction="bottom"
              className="text-base sm:text-lg text-muted-foreground leading-relaxed text-balance justify-center lg:justify-start"
            />

            <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 pt-4">
              <AnimatedCtaButton
                onClick={scrollToContact}
                className="w-full sm:w-auto text-base sm:text-xl md:text-2xl"
              >
                Get in Touch
              </AnimatedCtaButton>
              
            </div>

          </div>

          {/* Right side - Profile image */}
          <div className="flex-shrink-0 order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <Image
                  src="/ceo.jpeg"
                  alt="Saad Farooq - Web Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
