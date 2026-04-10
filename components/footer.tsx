"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const socialLinks = [
    {
      name: "X (Twitter)",
      href: "https://x.com/SAEMAdev",
      icon: "/icons/x.png",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/saemaautomation",
      icon: "/icons/insta.png",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@SAEMAdev",
      icon: "/icons/tiktok.png",
      gradient: "from-red-500 to-orange-500",
    },
    {
      name: "Facebook",
      href: "#",
      icon: "/icons/fb.png",
      gradient: "from-indigo-500 to-blue-700",
    },
    {
      name: "GitHub",
      href: "#",
      icon: "/icons/git.png",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: "/icons/linkd.png",
      gradient: "from-emerald-500 to-teal-600",
    },
  ];

  const footerLinks = [
    { name: "Privacy Notice", href: "/datenschutz" },
    { name: "Legal Notice", href: "/impressum" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="border-t border-gray-800 py-8 md:py-12 px-4 md:px-6 bg-gradient-to-t from-gray-900/50 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-8"
        >
          <div className="space-y-4">
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -5,
                filter: "drop-shadow(0 0 20px rgba(15, 118, 110, 0.6))",
              }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                },
                hover: { type: "spring", stiffness: 400, damping: 10 },
              }}
            >
              <Image
                src="/images/saema-logo.png"
                alt="SAEMA Logo"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto"
              />
            </motion.div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Automation systems for teams that want cleaner operations, faster
              handoffs, and fewer manual bottlenecks.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Useful Links</h3>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <motion.div key={link.name} whileHover={{ scale: 1.05, x: 5 }}>
                  <Link
                    href={link.href}
                    className="block text-gray-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#0F766E] hover:to-[#F59E0B] transition-all duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Follow Along</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gradient-to-r ${social.gradient} rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300`}
                  whileHover={{
                    scale: 1.2,
                    rotate: 10,
                    boxShadow: "0 10px 30px rgba(15, 118, 110, 0.4)",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="w-7 h-7 object-contain"
                  />
                </motion.a>
              ))}
            </div>
            <div className="space-y-1 text-sm text-gray-400">
              <p>Email: info@saema.dev</p>
              <p>Phone: 01525 8997598</p>
              <p>Based in Hamburg, Germany</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-6"
        >
          <div className="text-center text-gray-500 text-xs md:text-sm">
            Copyright 2024 SAEMA - Automation, GbR. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
