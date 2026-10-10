import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp'
import About from '../components/sections/About'
import PhilosophyCare from '../components/sections/PhilosophyCare'
import WhyVelvet from '../components/sections/WhyVelvet'
import Trust from '../components/sections/Trust'

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <About />
        <PhilosophyCare />
        <WhyVelvet />
        <Trust />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

