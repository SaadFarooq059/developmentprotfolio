"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { type ReactNode, useEffect, useRef } from "react"
import ContactPlatforms from "@/components/ui/contact-platforms"

interface VerticalMarqueeProps {
  children: ReactNode
  pauseOnHover?: boolean
  reverse?: boolean
  className?: string
  speed?: number
  onItemsRef?: (items: HTMLElement[]) => void
}

function VerticalMarquee({
  children,
  pauseOnHover = false,
  reverse = false,
  className,
  speed = 30,
  onItemsRef,
}: VerticalMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (onItemsRef && containerRef.current) {
      const items = Array.from(containerRef.current.querySelectorAll(".marquee-item")) as HTMLElement[]
      onItemsRef(items)
    }
  }, [onItemsRef])

  return (
    <div
      ref={containerRef}
      className={cn("group flex flex-col overflow-hidden", className)}
      style={
        {
          "--duration": `${speed}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 flex-col animate-marquee-vertical",
          reverse && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}

const marqueeItems = ["Web Development", "UI/UX Design", "React & Next.js", "Full-Stack Apps", "API Integration"]

export default function VerticalMarqueeCTA() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marqueeContainer = marqueeRef.current
    if (!marqueeContainer) return

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll(".marquee-item")
      const containerRect = marqueeContainer.getBoundingClientRect()
      const centerY = containerRect.top + containerRect.height / 2

      items.forEach((item) => {
        const itemRect = item.getBoundingClientRect()
        const itemCenterY = itemRect.top + itemRect.height / 2
        const distance = Math.abs(centerY - itemCenterY)
        const maxDistance = containerRect.height / 2
        const normalizedDistance = Math.min(distance / maxDistance, 1)
        const opacity = 1 - normalizedDistance * 0.75
        ;(item as HTMLElement).style.opacity = opacity.toString()
      })
    }

    const animationFrame = () => {
      updateOpacity()
      requestAnimationFrame(animationFrame)
    }

    const frame = requestAnimationFrame(animationFrame)

    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="w-full animate-fade-in-up py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Left Marquee - order-2 on mobile, order-1 on desktop */}
        <div
          ref={marqueeRef}
          className="relative h-[400px] lg:h-[500px] flex items-center justify-center animate-fade-in-up [animation-delay:400ms] order-2 lg:order-1"
        >
          <div className="relative w-full h-full">
            <VerticalMarquee speed={20} className="h-full">
              {marqueeItems.map((item, idx) => (
                <div
                  key={idx}
                  className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight py-8 marquee-item text-purple-300"
                >
                  {item}
                </div>
              ))}
            </VerticalMarquee>

            {/* Top vignette */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-48  z-10"></div>

            {/* Bottom vignette */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48  to-transparent z-10"></div>
          </div>
        </div>

        {/* Right Content - order-1 on mobile, order-2 on desktop */}
        <div className="space-y-8 max-w-xl order-1 lg:order-2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white animate-fade-in-up [animation-delay:200ms]">
            Want to work? Book an Appointment
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in-up [animation-delay:400ms]">
            I'm always open to interesting work and genuine folks. Feel free to drop me an email for either coffee, work
            inquiries or other engagements.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up [animation-delay:600ms] justify-center lg:justify-start">
            <ContactPlatforms
              whatsappNumber="447424086524"
              linkedinUrl="https://linkedin.com/in/saadfarooq059"
              telegramUsername="saadfarooq"
              email="ceo@krypsec.com"
            />
          
          </div>
        </div>
      </div>
    </div>
  )
}
