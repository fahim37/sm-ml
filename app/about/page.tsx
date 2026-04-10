"use client";

import { motion } from "framer-motion";
import {
  Users,
  Award,
  Lightbulb,
  Heart,
  Zap,
  Globe,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { InteractiveHeading } from "@/components/interactive-heading";
import { AnimatedText } from "@/components/animated-text";
import { FloatingParticles } from "@/components/floating-particles";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Clear thinking",
      description:
        "We keep projects grounded in process reality, measurable outcomes, and practical delivery scope.",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      icon: Heart,
      title: "Steady partnership",
      description:
        "Good automation work depends on trust, responsiveness, and honest tradeoff conversations from day one.",
      gradient: "from-rose-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Operational empathy",
      description:
        "We listen closely to the teams doing the work so the systems we build actually fit daily operations.",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Quality in delivery",
      description:
        "Documentation, resilience, support planning, and maintainability matter as much as the launch itself.",
      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const stats = [
    {
      number: "50+",
      label: "Automation engagements delivered",
      icon: TrendingUp,
    },
    {
      number: "95%",
      label: "Client satisfaction",
      icon: Heart,
    },
    {
      number: "24/7",
      label: "Support coverage available",
      icon: Zap,
    },
    {
      number: "10+",
      label: "Years of combined delivery experience",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <FloatingParticles />
      <Navbar />

      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F766E]/10 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B] text-xs md:text-sm font-semibold tracking-wider uppercase mb-4 md:mb-6"
            >
              <AnimatedText text="WHO WE ARE" />
            </motion.p>

            <div className="space-y-2 md:space-y-4">
              <InteractiveHeading size="xlarge" delay={0.5}>
                Built for
              </InteractiveHeading>
              <InteractiveHeading
                size="xlarge"
                gradient="from-[#0F766E] to-[#F59E0B]"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]"
                delay={0.8}
              >
                operations
              </InteractiveHeading>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto mt-6 md:mt-8"
            >
              <AnimatedText
                text="We help companies replace repetitive admin work with dependable digital workflows and practical AI support."
                delay={1.4}
                simple={true}
              />
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <InteractiveHeading size="large">
              A delivery team, not just a pitch deck
            </InteractiveHeading>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                SAEMA was built around a simple idea: automation should make
                work calmer, cleaner, and easier to run. We focus on the
                handoffs, repetitive steps, and process friction that slow teams
                down.
              </p>

              <p>
                Our work blends consulting, systems thinking, and execution. We
                map how work actually moves through a business, identify the
                highest-value interventions, and ship solutions that teams can
                keep using long after launch.
              </p>

              <p>
                That means fewer disconnected tools, fewer manual follow-ups,
                and a clearer operating rhythm for the people who keep the
                business moving.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-gradient-to-br from-[#0F766E]/20 to-[#F59E0B]/20 p-8 rounded-2xl backdrop-blur-sm border border-[#0F766E]/30"
            >
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-[#0F766E] to-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-3"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <stat.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-900/30 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B] text-xs md:text-sm font-semibold tracking-wider uppercase mb-4">
              <AnimatedText text="HOW WE WORK" />
            </p>
            <InteractiveHeading size="large">
              Principles behind the work
            </InteractiveHeading>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="text-center group"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(15, 118, 110, 0.4)",
                    rotate: 15,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <value.icon className="w-10 h-10 text-white" />
                </motion.div>

                <InteractiveHeading size="medium" className="mb-4">
                  {value.title}
                </InteractiveHeading>

                <p className="text-gray-300 leading-relaxed text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-900/30 to-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <InteractiveHeading size="large" className="mb-8">
            Our mission
          </InteractiveHeading>

          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            We believe the best automation work gives teams more room to think,
            respond, and improve. The goal is not novelty. The goal is steady
            operations, better visibility, and systems people can trust.
          </motion.p>

          <motion.div
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-[#0F766E] to-[#F59E0B] rounded-full flex items-center justify-center">
              <Globe className="w-8 h-8 text-white" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
