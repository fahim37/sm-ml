"use client"
import { motion } from "framer-motion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { InteractiveHeading } from "@/components/interactive-heading"
import { AnimatedText } from "@/components/animated-text"
import { FloatingParticles } from "@/components/floating-particles"

export default function DatenschutzPage() {
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
              <AnimatedText text="PRIVACY POLICY" />
            </motion.p>

            <InteractiveHeading size="xlarge" delay={0.5}>
              Datenschutzerklärung
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
                1. Verantwortlicher
              </h2>
              <div className="text-gray-300 space-y-2 leading-relaxed">
                <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
                <p className="font-medium">SAEMA - Automation, GbR</p>
                <p>Vertreten durch die Gesellschafter:</p>
                <p>[Vorname Nachname 1]</p>
                <p>[Vorname Nachname 2]</p>
                <p>Barmwisch 17</p>
                <p>22179 Hamburg</p>
                <p>Telefon: 01525 8997598</p>
                <p>E-Mail: info@saema.dev</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]">
                2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3 text-white">a) Beim Besuch der Website</h3>
                  <div className="text-gray-300 space-y-4 leading-relaxed">
                    <p>
                      Beim Aufrufen unserer Website werden automatisch Informationen durch den Browser an den Server
                      unserer Website gesendet. Diese Informationen werden temporär in sogenannten Logfiles gespeichert.
                      Folgende Daten werden dabei ohne Ihr Zutun erfasst und bis zur automatisierten Löschung
                      gespeichert:
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>IP-Adresse des anfragenden Rechners</li>
                      <li>Datum und Uhrzeit des Zugriffs</li>
                      <li>Name und URL der abgerufenen Datei</li>
                      <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                      <li>
                        Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres
                        Access-Providers
                      </li>
                    </ul>
                    <p>Diese Daten werden zu folgenden Zwecken verarbeitet:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website</li>
                      <li>Gewährleistung einer komfortablen Nutzung unserer Website</li>
                      <li>Auswertung der Systemsicherheit und -stabilität sowie</li>
                      <li>zu weiteren administrativen Zwecken</li>
                    </ul>
                    <p>Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3 text-white">
                    b) Bei Nutzung unseres Kontaktformulars oder E-Mail-Kontakts
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, werden Ihre Angaben zur
                    Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert. Rechtsgrundlage für diese
                    Verarbeitung ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen).
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]">
                3. Weitergabe von Daten
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Eine Übermittlung Ihrer persönlichen Daten an Dritte findet grundsätzlich nicht statt, es sei denn:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Sie haben Ihre ausdrückliche Einwilligung dazu erteilt (Art. 6 Abs. 1 lit. a DSGVO)</li>
                  <li>
                    die Verarbeitung ist zur Abwicklung eines Vertrags mit Ihnen erforderlich (Art. 6 Abs. 1 lit. b
                    DSGVO)
                  </li>
                  <li>es besteht eine rechtliche Verpflichtung zur Weitergabe (Art. 6 Abs. 1 lit. c DSGVO)</li>
                  <li>
                    oder die Weitergabe ist zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
                    erforderlich (Art. 6 Abs. 1 lit. f DSGVO)
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]">
                4. Hosting
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Unsere Website wird bei einem externen Dienstleister gehostet. Personenbezogene Daten, die auf unserer
                  Website erfasst werden, werden auf den Servern dieses Hosters verarbeitet.
                </p>
                <p>
                  Das Hosting erfolgt zum Zweck der Vertragserfüllung gegenüber unseren potenziellen und bestehenden
                  Kunden (Art. 6 Abs. 1 lit. b DSGVO) sowie im Interesse einer sicheren, schnellen und effizienten
                  Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]">
                5. Cookies
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  Unsere Website verwendet ggf. Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät
                  gespeichert werden und die Ihr Browser speichert.
                </p>
                <p>
                  Rechtsgrundlage für technisch notwendige Cookies ist Art. 6 Abs. 1 lit. f DSGVO. Für alle anderen
                  Cookies wird Ihre Einwilligung eingeholt (Art. 6 Abs. 1 lit. a DSGVO).
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]">
                6. Analyse-Tools
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Falls wir Web-Analyse-Dienste (z. B. Google Analytics oder Matomo) einsetzen, erfolgt dies
                ausschließlich mit Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO. Sie können diese Einwilligung
                jederzeit über das Cookie-Banner widerrufen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]">
                7. Ihre Rechte
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>Sie haben das Recht:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>
                    gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen
                  </li>
                  <li>
                    gemäß Art. 16 DSGVO die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns
                    gespeicherten personenbezogenen Daten zu verlangen
                  </li>
                  <li>
                    gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen
                  </li>
                  <li>
                    gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen
                  </li>
                  <li>
                    gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten, gängigen und
                    maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu
                    verlangen
                  </li>
                  <li>gemäß Art. 7 Abs. 3 DSGVO Ihre einmal erteilte Einwilligung jederzeit zu widerrufen</li>
                  <li>sowie gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]">
                8. Widerspruchsrecht
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f
                DSGVO verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung
                Ihrer personenbezogenen Daten einzulegen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]">
                9. Datensicherheit
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL/TLS-Verfahren zur Verschlüsselung.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0F766E] to-[#F59E0B]">
                10. Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juli 2025. Durch die Weiterentwicklung
                unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann eine Anpassung notwendig werden.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
