"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

// === FlipLink (animated text with vibrant colors) ===
const DURATION = 0.25
const STAGGER = 0.025

interface FlipLinkProps {
  children: string
  href: string
  onClick?: () => void
}

const FlipLink: React.FC<FlipLinkProps> = ({ children, href, onClick }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      onClick={onClick}
      className="relative block overflow-hidden whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-bold uppercase bg-gradient-to-br from-purple-900 to-purple-400 bg-clip-text text-transparent dark:from-purple-300 dark:via-purple-200 dark:to-pink-300 transition-all duration-300 hover:scale-105"
      style={{ lineHeight: 0.795 }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  )
}

// === Platform Icon Component (uses external SVG files) ===
const PlatformIcon = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-[70px] h-[70px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-200 to-purple-300 dark:from-purple-700 dark:to-purple-900 p-3 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 group-hover:from-purple-500 group-hover:to-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500/50">
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-contain filter brightness-0 dark:brightness-100 group-hover:brightness-100 transition-all duration-300"
    />
  </div>
)

// === Main Contact Platforms Component ===
interface ContactPlatformsProps {
  whatsappNumber?: string
  linkedinUrl?: string
  telegramUsername?: string
  email?: string
}

export default function ContactPlatforms({
  whatsappNumber = "447424086524",
  linkedinUrl = "https://linkedin.com/in/saadfarooq",
  telegramUsername = "saadfarooq",
  email = "saad.farooq@example.com",
}: ContactPlatformsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const platforms = [
    {
      name: "WhatsApp",
      iconSrc: "/whatsapp.svg", // Place your whatsapp.svg in public folder
      href: `https://wa.me/${whatsappNumber}`,
    },
    {
      name: "LinkedIn",
      iconSrc: "/linkedin.svg", // Place your linkedin.svg in public folder
      href: linkedinUrl,
    },
    {
      name: "Telegram",
      iconSrc: "/telegram.svg", // Place your telegram.svg in public folder
      href: `https://t.me/${telegramUsername}`,
    },
    {
      name: "Email",
      iconSrc: "/email.svg", // Place your email.svg in public folder
      href: `mailto:${email}`,
    },
  ]

  const overlayContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          onClick={() => setIsOpen(false)}
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-black" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-black to-purple-900 opacity-90" />

          {/* Animated gradient blobs */}
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-800/20 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <div className="absolute inset-0 backdrop-blur-sm" />

          {/* Close button */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
            className="absolute top-8 right-8 p-3 bg-purple-600/20 hover:bg-purple-600/40 rounded-full transition-colors duration-300 group z-10"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-8 h-8 text-purple-300 group-hover:text-white transition-colors" />
          </motion.button>

          {/* Platform options */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10 flex flex-col gap-12 md:gap-16 items-center justify-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="group flex items-center justify-start gap-8 md:gap-12 w-full max-w-2xl"
              >
                <div className="flex-shrink-0 transition-transform duration-500 group-hover:translate-x-[-12px]">
                  <PlatformIcon src={platform.iconSrc} alt={platform.name} />
                </div>
                <div className="flex-1 min-w-0">
                  <FlipLink href={platform.href} onClick={() => setIsOpen(false)}>
                    {platform.name}
                  </FlipLink>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        GET IN TOUCH
      </motion.button>

      {mounted && createPortal(overlayContent, document.body)}
    </>
  )
}
