"use client"

import { motion, type Variants } from "framer-motion"
import { useInView } from "framer-motion"
import type { ReactNode, RefObject, ElementType } from "react"

interface TimelineContentProps {
  children: ReactNode
  className?: string
  animationNum: number
  customVariants?: Variants
  timelineRef: RefObject<HTMLElement>
  as?: ElementType
}

export function TimelineContent({
  children,
  className = "",
  animationNum,
  customVariants,
  timelineRef,
  as: Component = "div",
}: TimelineContentProps) {
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" })

  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: animationNum * 0.2,
        duration: 0.5,
      },
    },
  }

  const variants = customVariants || defaultVariants

  return (
    <motion.div
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      custom={animationNum}
      className={className}
    >
      {Component === "div" ? children : <Component>{children}</Component>}
    </motion.div>
  )
}
