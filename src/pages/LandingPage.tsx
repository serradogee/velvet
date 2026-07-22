import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp'
import Hero from '../components/sections/Hero'
import Advisory from '../components/sections/Advisory'
import Treatments from '../components/sections/Treatments'
import Results from '../components/sections/Results'
import ClinicTour from '../components/sections/ClinicTour'
import Trust from '../components/sections/Trust'
import Testimonials from '../components/sections/Testimonials'
import FinalCTA from '../components/sections/FinalCTA'

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advisory />
        <Treatments />
        <Results />
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
