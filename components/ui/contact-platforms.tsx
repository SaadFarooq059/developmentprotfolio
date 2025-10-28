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

// === Platform Icons with Gradients ===
const PlatformIcons = {
  whatsapp: () => (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      className="transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3"
    >
      <defs>
        <linearGradient id="whatsapp-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
        <linearGradient id="whatsapp-bg-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="whatsapp-hover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#25D366" />
          <stop offset="100%" stopColor="#128C7E" />
        </linearGradient>
      </defs>
      <rect width="70" height="70" rx="15" fill="url(#whatsapp-bg)" className="dark:opacity-0" />
      <rect width="70" height="70" rx="15" fill="url(#whatsapp-bg-dark)" className="opacity-0 dark:opacity-100" />
      <rect
        width="70"
        height="70"
        rx="15"
        fill="url(#whatsapp-hover)"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      <path
        d="M35 15C24.5 15 16 23.5 16 34C16 37.5 17 40.8 18.7 43.6L16.2 52.8L25.7 50.4C28.4 51.9 31.6 52.8 35 52.8C45.5 52.8 54 44.3 54 33.8C54 23.3 45.5 15 35 15ZM44.5 41.5C44.1 42.7 42.2 43.7 41.1 43.9C40.3 44 39.3 44.1 38.2 43.7C37.5 43.5 36.6 43.2 35.5 42.7C30.3 40.5 27 35.3 26.7 34.9C26.4 34.5 24.5 31.9 24.5 29.2C24.5 26.5 25.9 25.2 26.4 24.6C26.9 24 27.5 23.9 27.9 23.9C28.2 23.9 28.5 23.9 28.8 23.9C29.1 23.9 29.5 23.8 29.9 24.8C30.3 25.8 31.3 28.5 31.4 28.7C31.5 28.9 31.6 29.2 31.4 29.6C31.2 30 31.1 30.2 30.8 30.5C30.5 30.8 30.2 31.2 30 31.4C29.7 31.7 29.4 32 29.7 32.5C30 33 31.3 35.1 33.2 36.8C35.7 39 37.8 39.7 38.3 39.9C38.8 40.1 39.1 40.1 39.4 39.7C39.7 39.3 40.7 38.1 41 37.6C41.3 37.1 41.7 37.2 42.1 37.3C42.5 37.5 45.2 38.8 45.7 39.1C46.2 39.4 46.5 39.5 46.6 39.7C46.7 40.1 46.7 41.1 44.5 41.5Z"
        className="fill-purple-900 dark:fill-purple-100 group-hover:fill-white transition-colors duration-300"
      />
    </svg>
  ),
  linkedin: () => (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      className="transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3"
    >
      <defs>
        <linearGradient id="linkedin-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
        <linearGradient id="linkedin-bg-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="linkedin-hover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0077B5" />
          <stop offset="100%" stopColor="#00A0DC" />
        </linearGradient>
      </defs>
      <rect width="70" height="70" rx="15" fill="url(#linkedin-bg)" className="dark:opacity-0" />
      <rect width="70" height="70" rx="15" fill="url(#linkedin-bg-dark)" className="opacity-0 dark:opacity-100" />
      <rect
        width="70"
        height="70"
        rx="15"
        fill="url(#linkedin-hover)"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      <path
        d="M23 27H17V53H23V27ZM20 24.5C21.9 24.5 23.5 22.9 23.5 21C23.5 19.1 21.9 17.5 20 17.5C18.1 17.5 16.5 19.1 16.5 21C16.5 22.9 18.1 24.5 20 24.5ZM53 53H47V40.5C47 38.3 47 35.5 43.9 35.5C40.8 35.5 40.3 37.8 40.3 40.3V53H34.3V27H40V29.7H40.1C40.9 28.2 43 26.6 45.9 26.6C52 26.6 53 30.5 53 35.7V53Z"
        className="fill-purple-900 dark:fill-purple-100 group-hover:fill-white transition-colors duration-300"
      />
    </svg>
  ),
  telegram: () => (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      className="transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3"
    >
      <defs>
        <linearGradient id="telegram-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
        <linearGradient id="telegram-bg-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="telegram-hover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0088cc" />
          <stop offset="100%" stopColor="#00aced" />
        </linearGradient>
      </defs>
      <rect width="70" height="70" rx="15" fill="url(#telegram-bg)" className="dark:opacity-0" />
      <rect width="70" height="70" rx="15" fill="url(#telegram-bg-dark)" className="opacity-0 dark:opacity-100" />
      <rect
        width="70"
        height="70"
        rx="15"
        fill="url(#telegram-hover)"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      <path
        d="M51.3 19.2L15.8 32.5C13.5 33.4 13.5 34.7 15.3 35.3L23.5 37.9L45.2 24.8C46.2 24.2 47.1 24.5 46.4 25.2L28.9 41.3H28.9L28.9 41.3L28.4 49.8C29.2 49.8 29.5 49.5 29.9 49.1L33.9 45.2L42.2 51.3C43.7 52.1 44.8 51.7 45.2 49.8L51.8 22.3C52.4 20 51 19.1 51.3 19.2Z"
        className="fill-purple-900 dark:fill-purple-100 group-hover:fill-white transition-colors duration-300"
      />
    </svg>
  ),
  email: () => (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      className="transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3"
    >
      <defs>
        <linearGradient id="email-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a5b4fc" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
        <linearGradient id="email-bg-dark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="email-hover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ea4335" />
          <stop offset="100%" stopColor="#fbbc04" />
        </linearGradient>
      </defs>
      <rect width="70" height="70" rx="15" fill="url(#email-bg)" className="dark:opacity-0" />
      <rect width="70" height="70" rx="15" fill="url(#email-bg-dark)" className="opacity-0 dark:opacity-100" />
      <rect
        width="70"
        height="70"
        rx="15"
        fill="url(#email-hover)"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      <path
        d="M52 22C52 19.8 50.2 18 48 18H22C19.8 18 18 19.8 18 22V48C18 50.2 19.8 52 22 52H48C50.2 52 52 50.2 52 48V22ZM48 22L35 31.5L22 22H48ZM48 48H22V26L35 35.5L48 26V48Z"
        className="fill-purple-900 dark:fill-purple-100 group-hover:fill-white transition-colors duration-300"
      />
    </svg>
  ),
}

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
      icon: PlatformIcons.whatsapp,
      href: `https://wa.me/${whatsappNumber}`,
    },
    {
      name: "LinkedIn",
      icon: PlatformIcons.linkedin,
      href: linkedinUrl,
    },
    {
      name: "Telegram",
      icon: PlatformIcons.telegram,
      href: `https://t.me/${telegramUsername}`,
    },
    {
      name: "Email",
      icon: PlatformIcons.email,
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
                className="group flex items-center gap-8 md:gap-12"
              >
                <div className="transition-transform duration-500 group-hover:translate-x-[-12px]">
                  <platform.icon />
                </div>
                <FlipLink href={platform.href} onClick={() => setIsOpen(false)}>
                  {platform.name}
                </FlipLink>
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
