"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Settings,
  FileText,
  Brain,
  TestTube,
  MessageSquare,
  Code,
  Users,
  Cloud,
  Plus,
  Sparkles,
  Zap,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

export default function HomePage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const services = [
    {
      icon: Monitor,
      title: "Workflow Automation",
      description:
        "We design automations that reduce repetitive work, tighten handoffs, and keep recurring operational tasks moving on time.",
      gradient: "from-teal-500 via-cyan-500 to-sky-600",
    },
    {
      icon: Settings,
      title: "AI in Operations",
      description:
        "We apply AI where classification, triage, summarization, or response support can add value without adding chaos.",
      gradient: "from-amber-400 via-orange-500 to-rose-600",
    },
    {
      icon: FileText,
      title: "Document Flows",
      description:
        "From intake to review to routing, we help teams move documents through clear digital workflows with better visibility.",
      gradient: "from-emerald-400 via-teal-500 to-lime-600",
    },
    {
      icon: Brain,
      title: "Decision Support",
      description:
        "We build systems that surface the right information at the right moment so teams can make faster, cleaner decisions.",
      gradient: "from-sky-400 via-blue-500 to-teal-600",
    },
    {
      icon: TestTube,
      title: "Pilot Programs",
      description:
        "Start with one well-scoped workflow, prove the value, and create a practical foundation for broader automation work.",
      gradient: "from-orange-400 via-amber-500 to-yellow-500",
    },
    {
      icon: MessageSquare,
      title: "Advisory and Delivery",
      description:
        "We stay close to the business problem from discovery through rollout so the work stays useful and supportable.",
      gradient: "from-cyan-500 via-teal-500 to-emerald-600",
    },
  ];

  const values = [
    {
      icon: Code,
      title: "Built to launch",
      description:
        "We turn process insights into real working systems instead of stopping at concept slides or automation wishlists.",
      gradient: "from-emerald-400 to-cyan-500",
    },
    {
      icon: Users,
      title: "Built with your team",
      description:
        "Operators, managers, and technical stakeholders stay close to the work so adoption happens during delivery.",
      gradient: "from-teal-500 to-sky-500",
    },
    {
      icon: Cloud,
      title: "Built to keep running",
      description:
        "Monitoring, iteration, and support are planned from the start so workflows stay dependable as operations evolve.",
      gradient: "from-amber-400 to-orange-500",
    },
  ];

  const faqData = [
    {
      question: "Where should we start if our team still runs work manually?",
      answer:
        "We usually begin with a stable workflow that consumes time every week, such as intake, reporting, handoffs, or document routing. That gives you a fast proof point without forcing a large transformation project on day one.",
      icon: Sparkles,
      gradient: "from-teal-500 to-emerald-600",
    },
    {
      question: "How long does a first automation project take?",
      answer:
        "A focused pilot can often move quickly. Broader programs take longer because they include approvals, integrations, exception handling, and internal adoption. We scope in phases so delivery stays visible and low risk.",
      icon: Zap,
      gradient: "from-sky-400 to-cyan-600",
    },
    {
      question: "What kinds of processes benefit most from automation?",
      answer:
        "The best starting points are repeatable workflows with clear rules, multiple handoffs, structured inputs, or recurring deadlines. Finance ops, customer operations, internal services, and document-heavy processes are common examples.",
      icon: Settings,
      gradient: "from-emerald-400 to-lime-600",
    },
    {
      question: "How do you keep automated workflows secure?",
      answer:
        "We design for controlled access, traceable execution, review checkpoints, and monitored integrations. Security is treated as part of the workflow design rather than a separate cleanup task later.",
      icon: Star,
      gradient: "from-amber-400 to-orange-600",
    },
    {
      question: "Do you stay involved after launch?",
      answer:
        "Yes. Support, performance tuning, and iterative improvements are part of the work. We want the automation to keep matching the real business environment instead of becoming a brittle one-off build.",
      icon: Users,
      gradient: "from-cyan-500 to-teal-600",
    },
    {
      question: "Can this work with the systems we already use?",
      answer:
        "Usually yes. We build around your current stack where possible, whether that means older internal tools, cloud services, or a combination of both. The goal is operational lift without unnecessary platform disruption.",
      icon: Cloud,
      gradient: "from-orange-500 to-amber-600",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <FloatingParticles />
      <Navbar />

      <section className="relative h-[720px] md:h-[750px] 2xl:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.webp"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F766E]/20 to-[#F59E0B]/20" />
        </div>

        <div className="relative z-10 w-full h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center h-full">
            <motion.div className="space-y-4 md:space-y-6 lg:space-y-8 pt-16 md:pt-20 lg:pt-0">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B] text-xs md:text-sm font-semibold tracking-wider uppercase"
              >
                <AnimatedText
                  text="AI ENABLEMENT AND WORKFLOW AUTOMATION"
                  delay={0.5}
                />
              </motion.p>

              <div className="space-y-2 md:space-y-4">
                <InteractiveHeading size="xlarge" delay={0.8}>
                  Cut
                </InteractiveHeading>

                <InteractiveHeading
                  size="xlarge"
                  gradient="from-[#0F766E] to-[#F59E0B]"
                  delay={1.2}
                  reverse={true}
                >
                  Friction.
                </InteractiveHeading>

                <InteractiveHeading size="xlarge" delay={1.6}>
                  Keep Moving.
                </InteractiveHeading>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="text-base md:text-lg lg:text-xl text-gray-200 max-w-lg"
              >
                <AnimatedText
                  text="We design dependable automation systems that reduce repetitive work, improve handoffs, and give teams room to focus on decisions."
                  delay={2.2}
                  simple={true}
                />
              </motion.p>

              <Link href="/contact">
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(15, 118, 110, 0.4)",
                    background:
                      "linear-gradient(45deg, #0F766E, #14B8A6, #F59E0B)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#0F766E] to-[#F59E0B] hover:from-[#0F766E] hover:to-[#FB923C] px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base shadow-lg"
                >
                  Book a Strategy Call
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="relative h-full flex items-end justify-center lg:justify-end"
            >
              <motion.div
                animate={{
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, 2, 0, -2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg h-full flex items-end"
              >
                <Image
                  src="/images/robot-head.png"
                  alt="AI Robot Head"
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
                  priority
                />
                <motion.div
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute inset-0 bg-gradient-to-r from-[#0F766E]/20 via-[#14B8A6]/20 to-[#F59E0B]/20 rounded-full blur-3xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 bg-black relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center py-12 md:py-16 lg:py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6 lg:space-y-8"
          >
            <InteractiveHeading
              size="large"
              whileHover={{
                textShadow: "0 0 30px rgba(20, 184, 166, 0.8)",
                background: "linear-gradient(45deg, #0F766E, #14B8A6, #FCD34D)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Operational clarity
            </InteractiveHeading>
            <InteractiveHeading
              size="large"
              gradient="from-[#0F766E] to-[#F59E0B]"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]"
              delay={0.5}
            >
              built with people.
            </InteractiveHeading>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base md:text-lg text-gray-300 leading-relaxed"
            >
              Strong automation is not just software. It is process design,
              operational context, and careful implementation. We pair
              consulting with engineering delivery so each workflow is useful,
              maintainable, and ready to scale.
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <video
              src="/images/Saema_00.mp4"
              width={400}
              height={200}
              className="w-full h-auto rounded-xl"
              autoPlay
              muted
              loop
            >
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B] text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 md:mb-4">
              <AnimatedText text="CAPABILITIES" />
            </p>
            <InteractiveHeading size="large">
              Practical automation for busy teams.
            </InteractiveHeading>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  rotateY: 8,
                  rotateX: 8,
                  z: 50,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  duration: 0.4,
                }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90 group-hover:opacity-100 transition-all duration-500`}
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 2,
                    }}
                  />
                </div>
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                  <motion.div
                    className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-white/30 transition-all duration-300"
                    animate={{
                      rotate: 0,
                      scale: 1,
                    }}
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                      boxShadow: "0 10px 30px rgba(255,255,255,0.3)",
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-lg" />
                  </motion.div>
                  <InteractiveHeading
                    size="medium"
                    className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-white drop-shadow-lg"
                  >
                    {service.title}
                  </InteractiveHeading>
                  <motion.p className="text-sm md:text-base text-white/90 leading-relaxed drop-shadow-sm flex-grow">
                    {service.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-900/30 to-black relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B] text-xs md:text-sm font-semibold tracking-wider uppercase mb-3 md:mb-4">
              <AnimatedText text="WHY TEAMS STAY" />
            </p>
            <InteractiveHeading size="large">
              Reliable delivery, visible results.
            </InteractiveHeading>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={fadeInUp}
                className="text-center group relative"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                >
                  <div
                    className={`w-full h-full bg-gradient-to-r ${value.gradient} rounded-full blur-3xl`}
                  />
                </motion.div>
                <motion.div
                  className={`relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500`}
                  animate={{
                    boxShadow: [
                      "0 10px 30px rgba(15, 118, 110, 0.2)",
                      "0 15px 40px rgba(20, 184, 166, 0.3)",
                      "0 10px 30px rgba(15, 118, 110, 0.2)",
                    ],
                  }}
                  whileHover={{
                    scale: 1.3,
                    rotate: 15,
                    boxShadow: "0 20px 60px rgba(15, 118, 110, 0.4)",
                  }}
                  transition={{
                    boxShadow: {
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                    },
                    hover: { type: "spring", stiffness: 400, damping: 10 },
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: 0,
                      scale: 1,
                    }}
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-8 h-8 md:w-10 md:h-10 text-white drop-shadow-lg" />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 border-2 border-white/30 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  />
                </motion.div>
                <InteractiveHeading
                  size="medium"
                  className="text-xl md:text-2xl font-bold mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0F766E] group-hover:to-[#F59E0B] transition-all duration-300"
                >
                  {value.title}
                </InteractiveHeading>
                <motion.p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-sm mx-auto group-hover:text-gray-200 transition-colors duration-300">
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div
              className="mb-4"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <motion.p
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] via-[#14B8A6] to-[#F59E0B] text-xs md:text-sm font-semibold tracking-wider uppercase"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                <AnimatedText text="Need a clear next step?" />
              </motion.p>
            </motion.div>
            <InteractiveHeading
              size="large"
              className="mb-6 bg-gradient-to-r from-[#0F766E] to-[#F59E0B] bg-clip-text text-transparent"
            >
              Questions we hear often
            </InteractiveHeading>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              A short overview of how we approach delivery, timing, systems, and
              long-term support.
            </motion.p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${faq.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-2xl`}
                />
                <motion.div
                  className="relative border border-gray-800 rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm group-hover:border-[#0F766E]/50 transition-all duration-500"
                  whileHover={{
                    boxShadow: "0 20px 60px rgba(15, 118, 110, 0.3)",
                    borderColor: "rgba(15, 118, 110, 0.8)",
                  }}
                >
                  <motion.button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-6 text-left flex justify-between items-center group/button relative"
                    whileHover={{ backgroundColor: "rgba(15, 118, 110, 0.1)" }}
                  >
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${faq.gradient} rounded-xl flex items-center justify-center mr-4 flex-shrink-0`}
                      whileHover={{
                        scale: 1.1,
                        rotate: 10,
                        boxShadow: "0 10px 30px rgba(15, 118, 110, 0.4)",
                      }}
                      animate={{
                        boxShadow: [
                          "0 5px 15px rgba(15, 118, 110, 0.2)",
                          "0 8px 25px rgba(20, 184, 166, 0.3)",
                          "0 5px 15px rgba(15, 118, 110, 0.2)",
                        ],
                      }}
                      transition={{
                        boxShadow: {
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                        },
                        hover: { type: "spring", stiffness: 400, damping: 10 },
                      }}
                    >
                      <faq.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.span
                      className="text-lg font-semibold text-white group-hover/button:text-transparent group-hover/button:bg-clip-text group-hover/button:bg-gradient-to-r group-hover/button:from-[#0F766E] group-hover/button:to-[#F59E0B] transition-all duration-300 flex-grow"
                      whileHover={{ x: 5 }}
                    >
                      {faq.question}
                    </motion.span>
                    <motion.div
                      className={`w-10 h-10 bg-gradient-to-r ${faq.gradient} rounded-full flex items-center justify-center flex-shrink-0 ml-4 relative overflow-hidden`}
                      animate={{ rotate: openFAQ === index ? 45 : 0 }}
                      whileHover={{
                        scale: 1.1,
                        boxShadow: "0 10px 30px rgba(15, 118, 110, 0.4)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Plus className="w-5 h-5 text-white relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "linear",
                        }}
                      />
                    </motion.div>
                  </motion.button>
                  <AnimatePresence>
                    {openFAQ === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <motion.div
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -20, opacity: 0 }}
                          transition={{ delay: 0.1 }}
                          className="px-6 pb-6 border-t border-gray-700/50 relative"
                        >
                          <motion.div className="absolute inset-0 bg-gradient-to-r from-[#0F766E]/5 to-[#F59E0B]/5" />
                          <motion.div
                            className="pt-6 text-gray-300 leading-relaxed relative z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {faq.answer}
                          </motion.div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
