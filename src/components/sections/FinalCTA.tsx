import AnimatedSection from '../ui/AnimatedSection'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-b from-velvet-beige/50 to-velvet-cream">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <div className="gold-line mb-8" />
          <h2 className="display-heading text-3xl md:text-4xl lg:text-5xl mb-5">
            ¿Tienes dudas sobre qué tratamiento es ideal para ti?
          </h2>
          <p className="text-velvet-charcoal/70 text-base md:text-lg font-light mb-10 leading-relaxed">
            Escríbenos y nuestro equipo te asesorará sin compromiso.
          </p>
          <WhatsAppButton label="Reservar mi cita" variant="gold" />
        </AnimatedSection>
      </div>
    </section>
  )
}
