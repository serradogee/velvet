import { Check } from 'lucide-react'
import { trustPoints } from '../../data/content'
import AnimatedSection from '../ui/AnimatedSection'
import SectionHeading from '../ui/SectionHeading'

export default function Trust() {
  return (
    <section className="py-20 md:py-28 bg-[#F4F4F6] text-zinc-900 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatedSection>
          <SectionHeading
            title="Garantía & Confianza en Velvet Clinic"
            subtitle="Más que una clínica estética, una experiencia de autor pensada para ti."
            theme="light"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <AnimatedSection key={point} delay={index * 0.1}>
              <div className="text-center p-6 md:p-8 bg-white border border-zinc-200 rounded-2xl hover:border-velvet-gold/60 transition-all duration-300 shadow-sm h-full flex flex-col items-center justify-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-velvet-gold/15 flex items-center justify-center">
                  <Check className="w-6 h-6 text-velvet-gold" />
                </div>
                <p className="font-display text-lg md:text-xl font-semibold text-black">{point}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
