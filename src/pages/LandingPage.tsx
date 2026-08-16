import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingWhatsApp from '../components/layout/FloatingWhatsApp'
import About from '../components/sections/About'
import Trust from '../components/sections/Trust'

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Trust />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

