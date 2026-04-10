"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Overview", href: "/" },
    { name: "Solutions", href: "/services" },
    { name: "Company", href: "/about" },
    { name: "Talk to Us", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 px-3 md:px-4 lg:px-6 py-2 border-b transition-colors duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md border-gray-800/50"
          : "bg-transparent backdrop-blur-0 border-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <motion.div
            whileHover={{
              scale: 1.05,
              rotate: 2,
              filter: "drop-shadow(0 0 20px rgba(15, 118, 110, 0.6))",
            }}
          >
            <Image
              src="/images/saema-logo.png"
              alt="SAEMA Logo"
              width={160}
              height={50}
              className="h-8 md:h-10 lg:h-14 w-auto"
            />
          </motion.div>
        </Link>

        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {navItems.map((item, index) => (
            <motion.div key={item.name}>
              <Link
                href={item.href}
                className="relative group font-medium text-sm lg:text-base"
              >
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -2 }}
                  className={`relative z-10 transition-colors duration-300 ${
                    isScrolled
                      ? "text-gray-300 group-hover:text-white"
                      : "text-white group-hover:text-white"
                  }`}
                >
                  {item.name}
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#0F766E] to-[#F59E0B] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 px-3 py-1"
                  whileHover={{ scale: 1.1 }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1"
        >
          <motion.span
            animate={
              isMobileMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }
            }
            className={`w-5 h-0.5 bg-gradient-to-r from-[#0F766E] to-[#F59E0B] transition-all duration-300 ${
              !isScrolled && !isMobileMenuOpen ? "bg-white" : ""
            }`}
          />
          <motion.span
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`w-5 h-0.5 bg-gradient-to-r from-[#0F766E] to-[#F59E0B] transition-all duration-300 ${
              !isScrolled && !isMobileMenuOpen ? "bg-white" : ""
            }`}
          />
          <motion.span
            animate={
              isMobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }
            }
            className={`w-5 h-0.5 bg-gradient-to-r from-[#0F766E] to-[#F59E0B] transition-all duration-300 ${
              !isScrolled && !isMobileMenuOpen ? "bg-white" : ""
            }`}
          />
        </motion.button>
      </div>

      <motion.div
        initial={false}
        animate={
          isMobileMenuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-gradient-to-r from-[#0F766E]/10 to-[#F59E0B]/10 backdrop-blur-md rounded-lg mt-4"
      >
        <div className="px-4 py-4 space-y-3">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={
                isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className="block py-2 text-base hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#0F766E] hover:to-[#F59E0B] transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
}
