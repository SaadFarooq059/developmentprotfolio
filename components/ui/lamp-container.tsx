"use client"

import type React from "react"
import { motion, useReducedMotion } from "framer-motion"

export type LampVariant = "split" | "halo" | "prism"

export type LampProps = {
  children: React.ReactNode
  className?: string
  tone?: "dark" | "light"
  beamColors?: [string, string]
  variant?: LampVariant
  motionEnabled?: boolean
  ariaLabel?: string
}

const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ")

type MotionLikeProps = {
  initial?: any
  animate?: any
  whileInView?: any
  transition?: any
  viewport?: any
  exit?: any
  onAnimationStart?: any
  onAnimationComplete?: any
  [k: string]: any
}

const DivFallback: React.FC<MotionLikeProps & React.HTMLAttributes<HTMLDivElement>> = ({
  initial,
  animate,
  whileInView,
  transition,
  viewport,
  exit,
  onAnimationStart,
  onAnimationComplete,
  ...rest
}) => <div {...rest} />

export const LampContainer: React.FC<LampProps> = ({
  children,
  className = "",
  tone = "dark",
  beamColors = ["hsl(var(--accent-1))", "hsl(var(--accent-2))"],
  variant = "split",
  motionEnabled = true,
  ariaLabel = "Decorative lamp background",
}) => {
  const prefersReduced = useReducedMotion()
  const useMotion = motionEnabled && !prefersReduced
  const MotionDiv: React.ComponentType<any> = useMotion ? motion.div : DivFallback

  const leftBeam = {
    backgroundImage:
      variant === "prism"
        ? `conic-gradient(from var(--beam-left) at 50% 0%, ${beamColors[0]}, rgba(255,255,255,0.06), transparent 60%)`
        : `conic-gradient(from var(--beam-left) at 50% 0%, ${beamColors[0]}, transparent 60%)`,
  }

  const rightBeam = {
    backgroundImage:
      variant === "prism"
        ? `conic-gradient(from var(--beam-right) at 50% 0%, ${beamColors[1]}, rgba(255,255,255,0.06), transparent 60%)`
        : `conic-gradient(from var(--beam-right) at 50% 0%, ${beamColors[1]}, transparent 60%)`,
  }

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      data-theme={tone}
      className={cn(
        "relative flex min-h-[60vh] md:min-h-[70vh] flex-col items-center justify-center overflow-hidden w-full rounded-md",
        className,
      )}
      style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      }}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <MotionDiv
          aria-hidden="true"
          initial={useMotion ? { opacity: 0.45, width: "14rem" } : undefined}
          whileInView={useMotion ? { opacity: 1, width: "30rem" } : undefined}
          viewport={{ once: true, amount: 0.3 }}
          transition={useMotion ? { delay: 0.25, duration: 0.85, ease: "easeInOut" } : undefined}
          style={leftBeam}
          className="absolute inset-auto right-1/2 h-56 w-[30rem] z-10 pointer-events-none transform-gpu"
        >
          <div className="absolute w-full left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)] pointer-events-none" />
          <div className="absolute w-40 h-full left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)] pointer-events-none" />
        </MotionDiv>

        <MotionDiv
          aria-hidden="true"
          initial={useMotion ? { opacity: 0.45, width: "14rem" } : undefined}
          whileInView={useMotion ? { opacity: 1, width: "30rem" } : undefined}
          viewport={{ once: true, amount: 0.3 }}
          transition={useMotion ? { delay: 0.25, duration: 0.85, ease: "easeInOut" } : undefined}
          style={rightBeam}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] z-10 pointer-events-none transform-gpu"
        >
          <div className="absolute w-40 h-full right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)] pointer-events-none" />
          <div className="absolute w-full right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)] pointer-events-none" />
        </MotionDiv>

        <div
          aria-hidden="true"
          className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md pointer-events-none"
        />

        <MotionDiv
          aria-hidden="true"
          whileInView={useMotion ? { scale: [1, 1.06, 1] } : undefined}
          viewport={{ once: false }}
          transition={useMotion ? { duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" } : undefined}
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl pointer-events-none"
          style={{ backgroundColor: beamColors[1] }}
        />

        <MotionDiv
          aria-hidden="true"
          initial={useMotion ? { width: "8rem" } : undefined}
          whileInView={useMotion ? { width: "16rem" } : undefined}
          viewport={{ once: true, amount: 0.3 }}
          transition={useMotion ? { delay: 0.25, duration: 0.85, ease: "easeInOut" } : undefined}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl pointer-events-none"
          style={{ backgroundColor: beamColors[0] }}
        />

        <MotionDiv
          aria-hidden="true"
          initial={useMotion ? { width: "16rem" } : undefined}
          whileInView={useMotion ? { width: "30rem" } : undefined}
          viewport={{ once: true, amount: 0.3 }}
          transition={useMotion ? { delay: 0.25, duration: 0.85, ease: "easeInOut" } : undefined}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] pointer-events-none"
          style={{ backgroundColor: beamColors[1] }}
        />

        <svg
          className="absolute inset-0 z-60 pointer-events-none opacity-5"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <filter id="noiseFilter">
            <feTurbulence baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.06" />
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black pointer-events-none" />
      </div>

      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">{children}</div>
    </div>
  )
}
