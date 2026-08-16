import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp'
import About from '../components/sections/About'
import Advisory from '../components/sections/Advisory'
import ClinicTour from '../components/sections/ClinicTour'
import Trust from '../components/sections/Trust'
import Testimonials from '../components/sections/Testimonials'
import FinalCTA from '../components/sections/FinalCTA'

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Advisory />
        <ClinicTour />
        <Trust />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

