import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp'
import About from '../components/sections/About'
import WhyVelvet from '../components/sections/WhyVelvet'
import PhilosophyCare from '../components/sections/PhilosophyCare'
import SkinCareStory from '../components/sections/SkinCareStory'
import Trust from '../components/sections/Trust'

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        {/* Primera vista: VELVET CLINIC CARE */}
        <PhilosophyCare />

        {/* Hero & Presentación (Foto en cápsula ovalada) */}
        <About />

        {/* Checklist con ✔️ & Diferenciales */}
        <WhyVelvet />

        {/* Bloque 4: BLANCO (Letra negra) - Skin & Beauty médica */}
        <SkinCareStory />

        {/* Bloque 5: LIGERO / BLANCO - Garantías & Confianza */}
        <Trust />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
