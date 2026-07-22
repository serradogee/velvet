import { Check } from 'lucide-react'
import { treatments } from '../../data/content'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function Treatments() {
  return (
    <section id="tratamientos" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="Nuestros tratamientos"
            subtitle="Técnicas avanzadas y productos premium para realzar tu belleza de forma natural."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {treatments.map((treatment, index) => (
            <AnimatedSection key={treatment.id} delay={index * 0.1}>
              <article className="premium-card overflow-hidden group h-full flex flex-col">
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-velvet-black/50 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-3xl">
                    {treatment.emoji}
                  </span>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className="font-display text-2xl md:text-3xl font-semibold mb-3">
                    {treatment.title}
                  </h3>
                  <p className="text-velvet-charcoal/70 text-sm md:text-base leading-relaxed mb-5 font-light">
                    {treatment.description}
                  </p>

                  <ul className="space-y-2 mb-6 flex-1">
                    {treatment.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2 text-sm text-velvet-charcoal/80"
                      >
                        <Check className="w-4 h-4 text-velvet-gold mt-0.5 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <WhatsAppButton
                    label="Pedir cita por WhatsApp"
                    className="w-full"
                  />
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
