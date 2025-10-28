"use client"

import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow"

const SERVICES = [
  {
    id: "service-1",
    title: "Web Development",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2487&auto=format&fit=crop",
  },
  {
    id: "service-2",
    title: "UI/UX Design",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2464&auto=format&fit=crop",
  },
  {
    id: "service-3",
    title: "Responsive Design",
    imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2536&auto=format&fit=crop",
  },
  {
    id: "service-4",
    title: "API Integration",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2534&auto=format&fit=crop",
  },
  {
    id: "service-5",
    title: "Performance Optimization",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2515&auto=format&fit=crop",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="min-h-screen bg-black">
      <HoverSlider className="min-h-screen place-content-center p-6 md:px-12 bg-black text-white">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">My Services</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text on the left */}
          <div className="flex flex-col space-y-2 md:space-y-4 lg:flex-1">
            {SERVICES.map((service, index) => (
              <TextStaggerHover
                key={service.title}
                index={index}
                className="cursor-pointer text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter"
                text={service.title}
              />
            ))}
          </div>
          {/* Images on the right */}
          <HoverSliderImageWrap className="w-full max-w-md md:max-w-lg lg:max-w-xl lg:flex-1">
            {SERVICES.map((service, index) => (
              <div key={service.id}>
                <HoverSliderImage
                  index={index}
                  imageUrl={service.imageUrl}
                  src={service.imageUrl}
                  alt={service.title}
                  className="size-full max-h-96 md:max-h-[500px] object-cover rounded-lg"
                  loading="eager"
                  decoding="async"
                />
              </div>
            ))}
          </HoverSliderImageWrap>
        </div>
      </HoverSlider>
    </section>
  )
}
