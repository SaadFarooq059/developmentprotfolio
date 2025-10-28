"use client"
import { TimelineContent } from "@/components/ui/timeline-animation"
import Image from "next/image"
import { useRef } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    content:
      "Saad delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bgColor: "bg-purple-900/90",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, Digital Solutions",
    content: "Working with Saad was a pleasure. He understood our requirements perfectly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bgColor: "bg-purple-600",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Creative Agency",
    content:
      "Saad transformed our vision into reality with a beautiful, functional website. His communication and professionalism are top-notch.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bgColor: "bg-black",
  },
  {
    name: "David Park",
    role: "CTO, InnovateLabs",
    content:
      "His expertise in modern web technologies and dedication to excellence have made a significant impact on our business.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bgColor: "bg-black",
  },
  {
    name: "Lisa Anderson",
    role: "Marketing Director, GrowthCo",
    content: "Saad's customer support is absolutely exceptional. He is always available and incredibly helpful.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
    bgColor: "bg-black",
  },
  {
    name: "James Wilson",
    role: "Founder, StartupHub",
    content: "Saad has been a key partner in our growth journey. Highly recommended!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bgColor: "bg-purple-600",
  },
  {
    name: "Rachel Kim",
    role: "CEO, DesignStudio",
    content:
      "Saad has been a true game-changer for us. His exceptional service, combined with his deep expertise and commitment to excellence, has made a significant impact.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    bgColor: "bg-purple-900/90",
  },
]

export function TestimonialsSection() {
  const testimonialRef = useRef<HTMLDivElement>(null)

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  }

  return (
    <section id="testimonials" className="relative h-full py-14 px-4 sm:px-6 lg:px-8" ref={testimonialRef}>
      <div className="container mx-auto max-w-7xl">
        <article className="max-w-screen-md mx-auto text-center space-y-2 mb-10">
          <TimelineContent
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Client Testimonials
          </TimelineContent>
          <TimelineContent
            as="p"
            className="mx-auto text-muted-foreground text-lg leading-relaxed"
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={testimonialRef}
          >
            Trusted by businesses and startups worldwide
          </TimelineContent>
        </article>

        <div className="lg:grid lg:grid-cols-3 gap-4 flex flex-col w-full">
          {/* Column 1 */}
          <div className="md:flex lg:flex-col lg:space-y-4 h-full lg:gap-0 gap-4">
            <TimelineContent
              animationNum={0}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[7] flex-[6] flex flex-col justify-between relative overflow-hidden rounded-lg border border-purple-500/20 p-6 bg-purple-900/90 text-white"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
              <article className="mt-auto relative z-10">
                <p className="text-base leading-relaxed">{testimonials[0].content}</p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h3 className="font-semibold text-xl">{testimonials[0].name}</h3>
                    <p className="text-sm text-purple-200">{testimonials[0].role}</p>
                  </div>
                  <Image
                    src={testimonials[0].image || "/placeholder.svg"}
                    alt={testimonials[0].name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
            <TimelineContent
              animationNum={1}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[3] flex-[4] lg:h-fit lg:shrink-0 flex flex-col justify-between relative overflow-hidden rounded-lg border border-purple-500/20 p-6 bg-purple-600 text-white"
            >
              <article className="mt-auto">
                <p className="text-base leading-relaxed">{testimonials[1].content}</p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h3 className="font-semibold text-xl">{testimonials[1].name}</h3>
                    <p className="text-sm text-purple-100">{testimonials[1].role}</p>
                  </div>
                  <Image
                    src={testimonials[1].image || "/placeholder.svg"}
                    alt={testimonials[1].name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>

          {/* Column 2 */}
          <div className="lg:h-full md:flex lg:flex-col h-fit lg:space-y-4 lg:gap-0 gap-4">
            <TimelineContent
              animationNum={2}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative overflow-hidden rounded-lg border border-purple-500/20 p-6 bg-black text-white"
            >
              <article className="mt-auto">
                <p className="text-base leading-relaxed">{testimonials[2].content}</p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h3 className="font-semibold text-xl">{testimonials[2].name}</h3>
                    <p className="text-sm text-gray-400">{testimonials[2].role}</p>
                  </div>
                  <Image
                    src={testimonials[2].image || "/placeholder.svg"}
                    alt={testimonials[2].name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
            <TimelineContent
              animationNum={3}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative overflow-hidden rounded-lg border border-purple-500/20 p-6 bg-black text-white"
            >
              <article className="mt-auto">
                <p className="text-base leading-relaxed">{testimonials[3].content}</p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h3 className="font-semibold text-xl">{testimonials[3].name}</h3>
                    <p className="text-sm text-gray-400">{testimonials[3].role}</p>
                  </div>
                  <Image
                    src={testimonials[3].image || "/placeholder.svg"}
                    alt={testimonials[3].name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
            <TimelineContent
              animationNum={4}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="flex flex-col justify-between relative overflow-hidden rounded-lg border border-purple-500/20 p-6 bg-black text-white"
            >
              <article className="mt-auto">
                <p className="text-base leading-relaxed">{testimonials[4].content}</p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h3 className="font-semibold text-xl">{testimonials[4].name}</h3>
                    <p className="text-sm text-gray-400">{testimonials[4].role}</p>
                  </div>
                  <Image
                    src={testimonials[4].image || "/placeholder.svg"}
                    alt={testimonials[4].name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>

          {/* Column 3 */}
          <div className="h-full md:flex lg:flex-col lg:space-y-4 lg:gap-0 gap-4">
            <TimelineContent
              animationNum={5}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[3] flex-[4] flex flex-col justify-between relative overflow-hidden rounded-lg border border-purple-500/20 p-6 bg-purple-600 text-white"
            >
              <article className="mt-auto">
                <p className="text-base leading-relaxed">{testimonials[5].content}</p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h3 className="font-semibold text-xl">{testimonials[5].name}</h3>
                    <p className="text-sm text-purple-100">{testimonials[5].role}</p>
                  </div>
                  <Image
                    src={testimonials[5].image || "/placeholder.svg"}
                    alt={testimonials[5].name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
            <TimelineContent
              animationNum={6}
              customVariants={revealVariants}
              timelineRef={testimonialRef}
              className="lg:flex-[7] flex-[6] flex flex-col justify-between relative overflow-hidden rounded-lg border border-purple-500/20 p-6 bg-purple-900/90 text-white"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
              <article className="mt-auto relative z-10">
                <p className="text-base leading-relaxed">{testimonials[6].content}</p>
                <div className="flex justify-between items-end pt-5">
                  <div>
                    <h3 className="font-semibold text-xl">{testimonials[6].name}</h3>
                    <p className="text-sm text-purple-200">{testimonials[6].role}</p>
                  </div>
                  <Image
                    src={testimonials[6].image || "/placeholder.svg"}
                    alt={testimonials[6].name}
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>
        </div>
      </div>
    </section>
  )
}
