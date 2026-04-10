"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Settings,
  FileText,
  Brain,
  MessageSquare,
  Code,
  Cloud,
  Target,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
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

export default function ServicesPage() {
  const services = [
    {
      icon: Monitor,
      title: "Workflow automation",
      description:
        "We remove repetitive operational work by designing stable, traceable automations around real team workflows.",
      features: [
        "Process mapping and opportunity sizing",
        "Workflow design and implementation",
        "System handoff automation",
        "Monitoring and ongoing support",
      ],
      gradient: "from-teal-500 via-cyan-500 to-sky-600",
    },
    {
      icon: Brain,
      title: "AI-assisted operations",
      description:
        "Where teams need better routing, classification, summarization, or decision support, we apply AI in controlled ways.",
      features: [
        "Operational AI use-case design",
        "Human-in-the-loop workflows",
        "Knowledge and content processing",
        "Reliable guardrails and review paths",
      ],
      gradient: "from-amber-400 via-orange-500 to-rose-600",
    },
    {
      icon: FileText,
      title: "Document flows",
      description:
        "We help teams capture, validate, classify, and move documents through clean digital processes.",
      features: [
        "Structured document intake",
        "Review and exception handling",
        "Data extraction workflows",
        "Document routing and status visibility",
      ],
      gradient: "from-emerald-400 via-teal-500 to-lime-600",
    },
    {
      icon: Settings,
      title: "Process improvement",
      description:
        "Before automating, we identify where work gets delayed, duplicated, or lost between tools and teams.",
      features: [
        "Workflow audits",
        "Bottleneck identification",
        "Ownership and handoff design",
        "Automation readiness planning",
      ],
      gradient: "from-sky-400 via-blue-500 to-teal-600",
    },
    {
      icon: Cloud,
      title: "System integration",
      description:
        "We connect cloud tools, internal platforms, and operational data so the process behaves like one system.",
      features: [
        "API and service integration",
        "Cross-platform data movement",
        "Operational alerts and syncs",
        "Hybrid environment support",
      ],
      gradient: "from-cyan-500 via-teal-500 to-emerald-600",
    },
    {
      icon: MessageSquare,
      title: "Advisory and enablement",
      description:
        "We support discovery, prioritization, rollout planning, and internal alignment so automation efforts keep momentum.",
      features: [
        "Automation roadmap design",
        "Business case framing",
        "Change planning",
        "Team workshops and handover support",
      ],
      gradient: "from-orange-400 via-amber-500 to-yellow-500",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discover",
      description:
        "We review your current workflows, bottlenecks, and operating constraints to find the best first move.",
      icon: Target,
    },
    {
      step: "02",
      title: "Design",
      description:
        "We shape a delivery plan around real inputs, approvals, integrations, and exception handling.",
      icon: Brain,
    },
    {
      step: "03",
      title: "Implement",
      description:
        "We build and integrate the workflow so it works in production conditions, not just demos.",
      icon: Code,
    },
    {
      step: "04",
      title: "Improve",
      description:
        "After launch, we monitor, tune, and expand what works so the system keeps pace with the business.",
      icon: CheckCircle,
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
              <AnimatedText text="SOLUTIONS" />
            </motion.p>

            <div className="space-y-2 md:space-y-4">
              <InteractiveHeading size="xlarge" delay={0.5}>
                Automation
              </InteractiveHeading>
              <InteractiveHeading
                size="xlarge"
                gradient="from-[#0F766E] to-[#F59E0B]"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]"
                delay={0.8}
              >
                that ships
              </InteractiveHeading>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto mt-6 md:mt-8"
            >
              <AnimatedText
                text="From workflow cleanup to AI-assisted operations, we build systems that make everyday execution easier."
                delay={1.4}
                simple={true}
              />
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
                whileHover={{
                  scale: 1.02,
                  y: -10,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90 group-hover:opacity-100 transition-all duration-500`}
                />

                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                  <motion.div
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-all duration-300"
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </motion.div>

                  <InteractiveHeading
                    size="medium"
                    className="text-xl font-bold mb-4 text-white drop-shadow-lg"
                  >
                    {service.title}
                  </InteractiveHeading>

                  <p className="text-white/90 leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center space-x-2 text-sm text-white/80"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle className="w-4 h-4 text-white/70" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
              <AnimatedText text="DELIVERY MODEL" />
            </p>
            <InteractiveHeading size="large">How the work moves</InteractiveHeading>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className="relative w-20 h-20 bg-gradient-to-r from-[#0F766E] to-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-6"
                  whileHover={{
                    boxShadow: "0 20px 40px rgba(15, 118, 110, 0.4)",
                    rotate: 10,
                  }}
                >
                  <step.icon className="w-10 h-10 text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-[#0F766E] rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </motion.div>

                <InteractiveHeading size="medium" className="mb-4">
                  {step.title}
                </InteractiveHeading>

                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <InteractiveHeading size="large" className="mb-6">
            Ready to scope the first workflow?
          </InteractiveHeading>

          <motion.p
            className="text-lg text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            We can review your process landscape, identify the fastest path to
            value, and define a delivery plan that fits your team.
          </motion.p>

          <Link href="/contact">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(15, 118, 110, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#0F766E] to-[#F59E0B] px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Start the conversation
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
