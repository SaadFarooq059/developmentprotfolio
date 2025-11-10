"use client"
import { TimelineContent } from "@/components/ui/timeline-animation"
import { useRef } from "react"

const testimonials = [
	{
		name: "Ayan Hafeez",
		role: "CEO, Seat Sweet",
		content:
			"Exceptional quality in developing our internal dashboard and software. The technical expertise and attention to detail made our operations seamless and efficient.",
		bgColor: "bg-purple-900/90",
	},
	{
		name: "Seb Zinger",
		role: "Director, Kloak Systems",
		content:
			"Built our NFC-based venue management system from the ground up. The innovative approach and dedication to excellence exceeded our expectations.",
		bgColor: "bg-purple-600",
	},
	{
		name: "Adeel Topa",
		role: "Director, Air Aid Travels",
		content:
			"Working together was transformative for our business. Developed our entire web application and manages our IT systems with professionalism and expertise.",
		bgColor: "bg-black",
	},
	{
		name: "Tabarik Sadikl",
		role: "CEO, Barnet Travel Clinic",
		content:
			"Outstanding CRM and web application delivered for our clinic. The understanding of our healthcare needs and technical execution were flawless.",
		bgColor: "bg-black",
	},
	{
		name: "Ghani Topa",
		role: "CTO, GT Services AB",
		content:
			"Developed our website and internal logistics dashboard with precision. The solutions have significantly improved our operational efficiency.",
		bgColor: "bg-purple-600",
	},
	{
		name: "Puya Shakiba",
		role: "Manager, Lombardis Pizza",
		content:
			"Created an innovative AI order-taking system that revolutionized our operations. The system is intuitive, efficient, and has significantly improved our customer experience.",
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
		<section
			id="testimonials"
			className="relative h-full py-12 sm:py-14 px-4 sm:px-6 lg:px-8"
			ref={testimonialRef}
		>
			<div className="container mx-auto max-w-7xl">
				<article className="max-w-screen-md mx-auto text-center space-y-2 mb-8 sm:mb-10">
					<TimelineContent
						as="h2"
						className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
						animationNum={0}
						customVariants={revealVariants}
						timelineRef={testimonialRef}
					>
						Client Testimonials
					</TimelineContent>
					<TimelineContent
						as="p"
						className="mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed"
						animationNum={1}
						customVariants={revealVariants}
						timelineRef={testimonialRef}
					>
						Trusted by businesses and startups worldwide
					</TimelineContent>
				</article>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
					{/* Column 1 */}
					<div className="flex flex-col space-y-4">
						<TimelineContent
							animationNum={0}
							customVariants={revealVariants}
							timelineRef={testimonialRef}
							className="flex flex-col justify-between relative overflow-hidden rounded-lg border border-purple-500/20 p-5 sm:p-6 bg-purple-900/90 text-white min-h-[200px]"
						>
							<div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
							<article className="mt-auto relative z-10">
								<p className="text-sm sm:text-base leading-relaxed mb-4">
									{testimonials[0].content}
								</p>
								<div className="pt-4 sm:pt-5">
									<h3 className="font-semibold text-lg sm:text-xl">
										{testimonials[0].name}
									</h3>
									<p className="text-xs sm:text-sm text-purple-200">
										{testimonials[0].role}
									</p>
								</div>
							</article>
						</TimelineContent>
						<TimelineContent
							animationNum={1}
							customVariants={revealVariants}
							timelineRef={testimonialRef}
							className="flex flex-col justify-between relative overflow-hidden rounded-lg border border-purple-500/20 p-5 sm:p-6 bg-purple-600 text-white min-h-[180px]"
						>
							<article className="mt-auto">
								<p className="text-sm sm:text-base leading-relaxed mb-4">
									{testimonials[1].content}
								</p>
								<div className="pt-4 sm:pt-5">
									<h3 className="font-semibold text-lg sm:text-xl">
										{testimonials[1].name}
									</h3>
									<p className="text-xs sm:text-sm text-purple-100">
										{testimonials[1].role}
									</p>
								</div>
							</article>
						</TimelineContent>
					</div>

					{/* Column 2 */}
					<div className="flex flex-col space-y-4">
						<TimelineContent
							animationNum={2}
							customVariants={revealVariants}
							timelineRef={testimonialRef}
							className="flex flex-col justify-between relative overflow-hidden rounded-lg border border-purple-500/20 p-5 sm:p-6 bg-black text-white min-h-[180px]"
						>
							<article className="mt-auto">
								<p className="text-sm sm:text-base leading-relaxed mb-4">
									{testimonials[2].content}
								</p>
								<div className="pt-4 sm:pt-5">
									<h3 className="font-semibold text-lg sm:text-xl">
										{testimonials[2].name}
									</h3>
									<p className="text-xs sm:text-sm text-gray-400">
										{testimonials[2].role}
									</p>
								</div>
							</article>
						</TimelineContent>
						<TimelineContent
							animationNum={3}
							customVariants={revealVariants}
							timelineRef={testimonialRef}
							className="flex flex-col justify-between relative overflow-hidden rounded-lg border border-purple-500/20 p-5 sm:p-6 bg-black text-white min-h-[180px]"
						>
							<article className="mt-auto">
								<p className="text-sm sm:text-base leading-relaxed mb-4">
									{testimonials[3].content}
								</p>
								<div className="pt-4 sm:pt-5">
									<h3 className="font-semibold text-lg sm:text-xl">
										{testimonials[3].name}
									</h3>
									<p className="text-xs sm:text-sm text-gray-400">
										{testimonials[3].role}
									</p>
								</div>
							</article>
						</TimelineContent>
					</div>

					{/* Column 3 */}
					<div className="flex flex-col space-y-4 md:col-span-2 lg:col-span-1">
						<TimelineContent
							animationNum={4}
							customVariants={revealVariants}
							timelineRef={testimonialRef}
							className="flex flex-col justify-between relative overflow-hidden rounded-lg border border-purple-500/20 p-5 sm:p-6 bg-purple-600 text-white min-h-[180px]"
						>
							<article className="mt-auto">
								<p className="text-sm sm:text-base leading-relaxed mb-4">
									{testimonials[4].content}
								</p>
								<div className="pt-4 sm:pt-5">
									<h3 className="font-semibold text-lg sm:text-xl">
										{testimonials[4].name}
									</h3>
									<p className="text-xs sm:text-sm text-purple-100">
										{testimonials[4].role}
									</p>
								</div>
							</article>
						</TimelineContent>
						<TimelineContent
							animationNum={5}
							customVariants={revealVariants}
							timelineRef={testimonialRef}
							className="flex flex-col justify-between relative overflow-hidden rounded-lg border border-purple-500/20 p-5 sm:p-6 bg-purple-900/90 text-white min-h-[180px]"
						>
							<div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
							<article className="mt-auto relative z-10">
								<p className="text-sm sm:text-base leading-relaxed mb-4">
									{testimonials[5].content}
								</p>
								<div className="pt-4 sm:pt-5">
									<h3 className="font-semibold text-lg sm:text-xl">
										{testimonials[5].name}
									</h3>
									<p className="text-xs sm:text-sm text-purple-200">
										{testimonials[5].role}
									</p>
								</div>
							</article>
						</TimelineContent>
					</div>
				</div>
			</div>
		</section>
	)
}
