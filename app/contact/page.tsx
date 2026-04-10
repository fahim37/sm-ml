"use client";

import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: `${formData.email} ${formData.company}`,
          message: formData.message,
        }),
      });

      await res.json();

      if (res.ok) {
        setStatusMessage("Thanks. Your note has been sent.");
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        setStatusMessage("We could not send your message. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatusMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      content: "info@saema.dev",
      description: "Share your use case and we will reply as soon as possible.",
      gradient: "from-teal-500 to-cyan-600",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "01525 8997598",
      description: "Available during regular business hours in Germany.",
      gradient: "from-amber-400 to-orange-600",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Hamburg, Germany",
      description: "Remote collaboration and scheduled meetings are both possible.",
      gradient: "from-emerald-400 to-teal-600",
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
              <AnimatedText text="START A PROJECT" />
            </motion.p>

            <div className="space-y-2 md:space-y-4">
              <InteractiveHeading size="xlarge" delay={0.5}>
                Let's
              </InteractiveHeading>
              <InteractiveHeading
                size="xlarge"
                gradient="from-[#0F766E] to-[#F59E0B]"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]"
                delay={0.8}
              >
                talk
              </InteractiveHeading>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="text-base md:text-lg lg:text-xl text-gray-200 max-w-3xl mx-auto mt-6 md:mt-8"
            >
              <AnimatedText
                text="Tell us where work is getting stuck, repeated, or delayed. We will help you identify the right first automation move."
                delay={1.4}
                simple={true}
              />
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 md:space-y-12"
          >
            <div>
              <InteractiveHeading size="large" className="mb-6 md:mb-8">
                Bring the messy workflow
              </InteractiveHeading>
              <motion.p
                className="text-base md:text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Whether you are exploring your first automation or trying to
                stabilize an existing process stack, we can review the current
                situation, spot the biggest bottlenecks, and shape a realistic
                next step.
              </motion.p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="space-y-6 md:space-y-8"
            >
              {contactItems.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(15, 118, 110, 0.2)",
                  }}
                  className="group relative overflow-hidden p-6 md:p-8 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-[#0F766E]/50 transition-all duration-500 cursor-pointer"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 flex items-start space-x-4 md:space-x-6">
                    <motion.div
                      className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
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
                      <item.icon className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-lg" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3
                        className="text-lg md:text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#0F766E] group-hover:to-[#F59E0B] transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {item.title}
                      </motion.h3>
                      <p
                        className={`text-transparent bg-clip-text bg-gradient-to-r ${item.gradient} font-medium mb-1 text-sm md:text-base`}
                      >
                        {item.content}
                      </p>
                      <p className="text-gray-400 text-xs md:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-6 md:p-8 lg:p-10 rounded-2xl border border-gray-800 relative overflow-hidden"
              whileHover={{
                borderColor: "rgba(15, 118, 110, 0.5)",
                boxShadow: "0 20px 60px rgba(15, 118, 110, 0.2)",
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#0F766E]/5 to-[#F59E0B]/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(15, 118, 110, 0.05), rgba(20, 184, 166, 0.05))",
                    "linear-gradient(45deg, rgba(20, 184, 166, 0.05), rgba(245, 158, 11, 0.05))",
                    "linear-gradient(45deg, rgba(15, 118, 110, 0.05), rgba(20, 184, 166, 0.05))",
                  ],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              />

              <div className="relative z-10">
                <InteractiveHeading size="medium" className="mb-6 md:mb-8">
                  Send us the outline
                </InteractiveHeading>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 text-gray-300"
                      >
                        Name *
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-[#0F766E] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20 transition-all duration-300"
                        placeholder="Your full name"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-gray-300"
                      >
                        Email *
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-[#0F766E] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20 transition-all duration-300"
                        placeholder="your.email@company.com"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0 }}
                  >
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2 text-gray-300"
                    >
                      Company
                    </label>
                    <motion.input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-[#0F766E] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20 transition-all duration-300"
                      placeholder="Your company name"
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-gray-300"
                    >
                      Message *
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-[#0F766E] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20 transition-all duration-300 resize-none"
                      placeholder="Describe the workflow, the systems involved, and where the current process slows down."
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                  {statusMessage && (
                    <p className="text-sm mt-2 text-center text-gray-300">
                      {statusMessage}
                    </p>
                  )}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 40px rgba(15, 118, 110, 0.4)",
                      background:
                        "linear-gradient(45deg, #0F766E, #14B8A6, #F59E0B)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#0F766E] to-[#F59E0B] hover:from-[#0F766E] hover:to-[#FB923C] px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          key="submitting"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center space-x-2"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          <span>Sending...</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="send"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center space-x-2"
                        >
                          <Send className="w-5 h-5" />
                          <span>Send message</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-900/30 to-black relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <InteractiveHeading size="large" className="mb-6 md:mb-8">
            Need a starting point first?
          </InteractiveHeading>

          <motion.p
            className="text-base md:text-lg lg:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            We can help you narrow the first use case, define the expected
            operational value, and build a plan that your team can actually run.
          </motion.p>

          <Link href="/">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(15, 118, 110, 0.4)",
                background: "linear-gradient(45deg, #0F766E, #14B8A6, #F59E0B)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#0F766E] to-[#F59E0B] hover:from-[#0F766E] hover:to-[#FB923C] px-8 md:px-12 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 relative overflow-hidden"
            >
              Explore the homepage
            </motion.button>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
