import Navbar from "../components/layout/Navbar"
import HeroSection from "../components/sections/HeroSection"
import ServicesSection from "../components/sections/ServicesSection"
import PortfolioSection from "../components/sections/PortfolioSection"
import IndustrialSection from "../components/sections/IndustrialSection"
import ContactSection from "../components/sections/ContactSection"

import Footer from "../components/layout/Footer"

import WhatsAppButton from "../components/ui/WhatsAppButton"

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* Este main con pt-20 evita que el Navbar tape tu contenido */}
      <main className="pt-20 md:pt-24">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <IndustrialSection />
        <ContactSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}