import { Check } from 'lucide-react'
import { trustPoints } from '../../data/content'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function Trust() {
  return (
    <section className="section-padding bg-velvet-black text-white">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionHeading
            title="¿Por qué elegir Velvet Clinic?"
            subtitle="Más que una clínica estética, una experiencia pensada para ti."
            theme="dark"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <AnimatedSection key={point} delay={index * 0.1}>
              <div className="text-center p-6 md:p-8 border border-white/10 rounded-2xl hover:border-velvet-gold/40 transition-colors duration-500">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-velvet-gold/20 flex items-center justify-center">
                  <Check className="w-6 h-6 text-velvet-gold" />
                </div>
                <p className="font-display text-xl md:text-2xl">{point}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
