"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface InteractiveHeadingProps {
  children: React.ReactNode
  className?: string
  size?: "small" | "medium" | "large" | "xlarge"
  gradient?: string
  delay?: number
  onClick?: () => void
  reverse?: boolean
}

export const InteractiveHeading = ({
  children,
  className = "",
  size = "large",
  gradient = "from-[#0F766E] via-[#14B8A6] to-[#FCD34D]",
  delay = 0,
  onClick,
  reverse = false,
}: InteractiveHeadingProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const sizeClasses = {
    small: "text-lg md:text-xl",
    medium: "text-xl md:text-2xl lg:text-3xl",
    large: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
    xlarge: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl",
  }

  const handleClick = () => {
    setIsClicked(true)
    setTimeout(() => setIsClicked(false), 300)
    onClick?.()
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} font-bold cursor-pointer block ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, type: "spring", stiffness: 100 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{
        scale: 1.02,
        textShadow: reverse
          ? "0 0 20px rgba(255, 255, 255, 0.5)"
          : "0 0 20px rgba(20, 184, 166, 0.5)",
      }}
      whileTap={{
        scale: 0.95,
        rotate: [0, -2, 2, 0],
        transition: { type: "spring", stiffness: 400, damping: 10 },
      }}
    >
      <div className="inline-block relative">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 blur-lg -z-10`}
          animate={{
            opacity: isHovered ? 0.1 : 0,
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        />

        <AnimatePresence>
          {isHovered && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-0.5 h-0.5 bg-gradient-to-r ${gradient} rounded-full opacity-60`}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0],
                    x: [0, (Math.random() - 0.5) * 60],
                    y: [0, (Math.random() - 0.5) * 60],
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    duration: 1.2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isClicked && (
            <motion.div
              className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full opacity-20 -z-10`}
              initial={{ scale: 0, opacity: 0.3 }}
              animate={{ scale: 2, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>

        <motion.span
          className={`relative z-10 ${
            reverse
              ? isHovered
                ? "text-white"
                : `text-transparent bg-clip-text bg-gradient-to-r ${gradient}`
              : isHovered
                ? `text-transparent bg-clip-text bg-gradient-to-r ${gradient}`
                : "text-white"
          } transition-all duration-300`}
          animate={{
            letterSpacing: isHovered ? "0.02em" : "0em",
          }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.span>

        <motion.div
          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${gradient} rounded-full opacity-60`}
          initial={{ width: "0%" }}
          animate={{ width: isHovered ? "100%" : "0%" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  )
}
