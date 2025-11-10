import { Button } from "@/components/ui/button"
import { LampContainer } from "@/components/ui/lamp-container"
import { GradualSpacing } from "@/components/ui/gradual-spacing"

const projects = [
  {
    title: "Kloak Systems",
    category: "CASE STUDY",
    description:
      "NFC-based venue management platform enabling seamless entry and on-site purchases. Visitors tap an NFC card or tag to reveal locker or event ticket details and can pay via wallet (Google Pay, Apple Pay) or card. Venues get a realtime dashboard for pass generation, sales, and attendee analytics. Integrates with Stripe and Square via OAuth for payments and settlements. Built with Next.js, AWS, and Go — based in London.",
    image: "/5.png",
    tags: ["Next.js", "AWS", "Golang", "NFC", "Stripe"],
    link: "https://kloaksystems.com/",
  },
  {
    title: "Air Aid Travels",
    category: "CASE STUDY",
    description:
      "Full-featured travel booking web app where users search and book flights, view embassy/consulate information, and manage itineraries. Implemented integrations with Amadeus and other GDS APIs for live flight availability and fares. End-to-end booking workflow includes payments, confirmations, and customer support tools. Built with Next.js, Python services, and Go — headquartered in Birmingham.",
    image: "/2.png",
    tags: ["Next.js", "Python", "Golang", "Amadeus", "GDS"],
    link: "https://www.airaidtravels.com/",
  },
  {
    title: "Barnet Travel Clinic",
    category: "CASE STUDY",
    description:
      "Healthcare and travel clinic platform for vaccinations and weight-loss treatments. Users can book appointments, pay online, receive realtime email confirmations and tracking, and access clinic resources and blog content. The site supports appointment management, payment reconciliation and automated patient notifications. Built with Next.js and Go — based in London.",
    image: "/1.png",
    tags: ["Next.js", "Golang", "Payments", "Healthcare"],
    link: "https://www.barnettravelclinic.com/",
  },
  {
    title: "GT Services",
    category: "CASE STUDY",
    description:
      "Logistics and fleet management platform for tracking shipments, vehicles, and drivers in realtime. Includes an internal operations dashboard, shipment status tracking, and a web app for training and onboarding drivers and staff. Designed to improve route efficiency, visibility, and compliance. Built using Next.js and Go — based in Sweden.",
    image: "/3.png",
    tags: ["Next.js", "Golang", "Fleet Tracking", "Logistics"],
    link: "https://www.gtservicesab.se/",
  },
  {
    title: "Royal Biotech",
    category: "CASE STUDY",
    description:
      "Medical pharmaceutical supplier web application providing comprehensive product catalogs, order management, and inventory tracking for healthcare providers. The platform enables seamless B2B transactions, regulatory compliance documentation, and real-time stock availability. Features include automated reordering, batch tracking, and integration with supply chain systems. Built with Next.js — based in Denmark.",
    image: "/4.png",
    tags: ["Next.js", "E-Commerce", "Healthcare", "B2B"],
    link: "http://royalbiotech.net/",
  },
]

export function WorkSection() {
  return (
    <section id="work" className="bg-background">
      <LampContainer beamColors={["rgb(147, 51, 234)", "rgb(168, 85, 247)"]} className="pt-20 md:pt-32 pb-0">
        <div></div>
      </LampContainer>

      <div className="text-center space-y-4 px-4 -mt-20 md:-mt-32 relative z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent">
          My Work
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A selection of projects showcasing my expertise in web development, from concept to deployment.
        </p>
      </div>

      <div className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-24 md:space-y-32 lg:space-y-40">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 lg:gap-16 items-center`}
              >
                {/* Content Side */}
                <div className="flex-1 space-y-6 md:space-y-8 max-w-2xl">
                  <div className="space-y-4">
                    <p className="text-xs md:text-sm tracking-widest text-muted-foreground uppercase">
                      {project.category}
                    </p>
                    <GradualSpacing
                      text={project.title}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
                      duration={0.3}
                      delayMultiple={0.05}
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 text-sm bg-secondary/50 text-foreground rounded-md border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{project.description}</p>

                  <div>
                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300 bg-transparent"
                    >
                      <a href={project.link}>see this project</a>
                    </Button>
                  </div>
                </div>

                {/* Image Side */}
                <div className="flex-1 w-full">
                  <div className="relative overflow-hidden rounded-lg border border-border shadow-xl md:shadow-2xl">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-auto hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
