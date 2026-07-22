import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function Advisory() {
  return (
    <section className="section-padding bg-velvet-beige/40">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="premium-card p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto border-velvet-gold/20">
            <SectionHeading
              title="No sabes qué tratamiento necesitas, te asesoramos"
              subtitle="Cada persona es diferente. Nuestro equipo analizará tus necesidades y te recomendará el tratamiento más adecuado para conseguir el resultado que buscas."
            />
            <WhatsAppButton label="Quiero asesoramiento" variant="gold" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
