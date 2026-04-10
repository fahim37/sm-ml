"use client"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { InteractiveHeading } from "@/components/interactive-heading"
import { AnimatedText } from "@/components/animated-text"
import { FloatingParticles } from "@/components/floating-particles"

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <FloatingParticles />
      <Navbar />

      <section className="relative pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
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
              <AnimatedText text="LEGAL INFORMATION" />
            </motion.p>

            <InteractiveHeading size="xlarge" delay={0.5}>
              Impressum
            </InteractiveHeading>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gray-800 space-y-8"
          >
            <div>
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="text-gray-300 space-y-2">
                <p className="font-medium">SAEMA - Automation, GbR</p>
                <p>Vertreten durch die Gesellschafter:</p>
                <p>[Vorname Nachname 1]</p>
                <p>[Vorname Nachname 2]</p>
                <p>Barmwisch 17</p>
                <p>22179 Hamburg</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]">
                Kontakt
              </h2>
              <div className="text-gray-300 space-y-2">
                <p>Telefon: 01525 8997598</p>
                <p>E-Mail: info@saema.dev</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]">
                Umsatzsteuer-ID
              </h2>
              <p className="text-gray-300">Gemäß § 19 UStG wird keine Umsatzsteuer erhoben.</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]">
                Haftung für Inhalte
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                  verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
                  forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                  Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                  Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                  Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]">
                Haftung für Links
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                  verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]">
                Urheberrecht
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                  Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet. Die Vervielfältigung, Bearbeitung,
                  Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                  schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
